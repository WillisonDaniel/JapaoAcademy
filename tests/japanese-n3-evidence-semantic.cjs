'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const ROOT = path.resolve(__dirname, '..');
const CHECK_LOCAL = process.argv.includes('--check-local');

const ALLOWED_VERIFICATION_MODES = new Set([
    'text-exact',
    'text-normalized',
    'lexical-gloss',
    'visual-confirmed',
    'cross-source',
    'not-supported'
]);

function readJson(relPath) {
    return JSON.parse(fs.readFileSync(path.join(ROOT, relPath), 'utf8'));
}

// 1. Carregar artefatos
const catalog = readJson('tests/JAPANESE_EDITORIAL_SOURCES.json');
const evidenceAudit = readJson('tests/JAPANESE_N3_25B_EVIDENCE_AUDIT.json');
const ledger = readJson('tests/JAPANESE_EDITORIAL_LEDGER.json');

const ledgerMap = new Map();
ledger.decisions.forEach(d => ledgerMap.set(d.id, d));

assert.ok(evidenceAudit.schemaVersion >= 1, 'evidenceAudit: schemaVersion inválido');
assert.equal(evidenceAudit.summary.totalTargets, 18, 'evidenceAudit: totalTargets deve ser 18');
assert.equal(
    evidenceAudit.summary.supportedCount +
    (evidenceAudit.summary.partiallySupportedCount || 0) +
    evidenceAudit.summary.unsupportedCount,
    18,
    'evidenceAudit: soma de supported, partiallySupported e unsupported deve ser 18'
);
assert.equal(
    evidenceAudit.summary.supportedCount,
    evidenceAudit.targets.filter(t => t.decision === 'SUPPORTED').length,
    'evidenceAudit: supportedCount divergiu dos targets SUPPORTED'
);
assert.equal(
    evidenceAudit.summary.unsupportedCount,
    evidenceAudit.targets.filter(t => t.decision === 'UNSUPPORTED').length,
    'evidenceAudit: unsupportedCount divergiu dos targets UNSUPPORTED'
);
assert.equal(evidenceAudit.targets.length, 18, 'evidenceAudit: deve conter 18 targets');

// 2. Validação da Prova Semântica (Source-to-Claim)
for (const target of evidenceAudit.targets) {
    assert.ok(Array.isArray(target.evidence) && target.evidence.length > 0, `${target.id}: evidências ausentes`);

    for (const ev of target.evidence) {
        assert.ok(Array.isArray(ev.supports) && ev.supports.length > 0, `${target.id}: supports ausente`);
        assert.ok(ev.supportEvidence && typeof ev.supportEvidence === 'object', `${target.id}: supportEvidence ausente`);

        // Paridade 1:1 entre supports e supportEvidence
        for (const claim of ev.supports) {
            const proof = ev.supportEvidence[claim];
            assert.ok(proof, `${target.id}: alegação "${claim}" em supports não possui prova correspondente em supportEvidence`);
            assert.ok(ALLOWED_VERIFICATION_MODES.has(proof.verificationMode), `${target.id}: verificationMode inválido "${proof.verificationMode}" para "${claim}"`);
            assert.notEqual(proof.verificationMode, 'not-supported', `${target.id}: alegação "${claim}" está marcada como not-supported mas consta em supports`);

            if (['text-exact', 'text-normalized', 'lexical-gloss'].includes(proof.verificationMode)) {
                assert.ok(proof.observedToken && proof.observedToken.trim().length > 0, `${target.id}: observedToken vazio para "${claim}"`);
            }

            if (proof.verificationMode === 'visual-confirmed') {
                assert.equal(ev.visualEvidence && ev.visualEvidence.inspected, true, `${target.id}: visual-confirmed exige visualEvidence.inspected === true`);
                assert.ok(ev.visualEvidence.renderArtifactSha256, `${target.id}: visual-confirmed exige renderArtifactSha256`);
            }
        }

        // Não deve haver provas soltas em supportEvidence que não constam em supports
        for (const claim of Object.keys(ev.supportEvidence)) {
            assert.ok(ev.supports.includes(claim), `${target.id}: prova para "${claim}" existe em supportEvidence mas não consta em supports`);
        }

        // Validação estrita do texto local (quando em --check-local)
        if (CHECK_LOCAL) {
            const artifactPath = path.join(ROOT, ev.pageEvidence.corpusArtifact);
            assert.ok(fs.existsSync(artifactPath), `${target.id}: artefato de página ausente: ${artifactPath}`);
            const pageData = JSON.parse(fs.readFileSync(artifactPath, 'utf8'));
            const normText = String(pageData.text || pageData.ocrText || '').trim().replace(/\s+/g, ' ');

            for (const claim of ev.supports) {
                const proof = ev.supportEvidence[claim];
                if (proof.verificationMode === 'text-exact' || proof.verificationMode === 'lexical-gloss') {
                    assert.ok(normText.includes(proof.observedToken), `${target.id}: token observado "${proof.observedToken}" da alegação "${claim}" não encontrado no texto da página: ${artifactPath}`);
                }
            }
        }
    }
}

// 3. Teste Negativo Real: Provar que token inexistente na página falha no Engine
const engine = require('./japanese-n3-decision-engine.cjs');

function testNegativeUnsupportedClaimFailsWithRealPage() {
    const realTarget = evidenceAudit.targets[0]; // 港
    const mutatedTarget = JSON.parse(JSON.stringify(realTarget));
    
    // Injetar token inexistente na primeira claim
    mutatedTarget.correctionClaims[0].claim = 'TOKEN_FORJADO_INEXISTENTE_999';
    mutatedTarget.evidence[0].supportEvidence['target-word'].observedToken = 'TOKEN_FORJADO_INEXISTENTE_999';
    
    const claimRes = engine.evaluateCorrectionClaim(
        mutatedTarget.correctionClaims[0],
        mutatedTarget,
        mutatedTarget.evidence,
        { checkText: true }
    );
    
    assert.equal(claimRes.status, 'UNSUPPORTED', 'Claim com token inexistente no artefato real deve falhar com UNSUPPORTED');
    assert.ok(claimRes.reasons.some(r => r.includes('TOKEN_NOT_FOUND')), 'Motivo da falha deve registrar token não encontrado');
}
testNegativeUnsupportedClaimFailsWithRealPage();

console.log(`Portão Semântico de Evidências N3: 18/18 alvos validados com provas source-to-claim e testes negativos reais ${CHECK_LOCAL ? '(modo local estrito: tokens inspecionados no texto das páginas)' : '(modo de contrato)'}.`);

