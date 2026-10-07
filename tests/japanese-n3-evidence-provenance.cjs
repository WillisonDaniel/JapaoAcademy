'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const ROOT = path.resolve(__dirname, '..');
const CHECK_LOCAL = process.argv.includes('--check-local');

const HASH_REGEX = /^[0-9a-f]{64}$/i;
const ALLOWED_SUPPORTS = new Set([
    'target-word',
    'target-reading',
    'character-reading',
    'meaning',
    'grammar-pattern',
    'collocation',
    'register',
    'contrast',
    'context'
]);

function readJson(relPath) {
    return JSON.parse(fs.readFileSync(path.join(ROOT, relPath), 'utf8'));
}

function hashFile(absPath) {
    const data = fs.readFileSync(absPath);
    return crypto.createHash('sha256').update(data).digest('hex');
}

// 1. Carregar artefatos
const catalog = readJson('tests/JAPANESE_EDITORIAL_SOURCES.json');
const baseline = readJson('tests/JAPANESE_N3_DRAFT_RESIDUE_25B_BASELINE.json');
const evidenceAudit = readJson('tests/JAPANESE_N3_25B_EVIDENCE_AUDIT.json');
const ledger = readJson('tests/JAPANESE_EDITORIAL_LEDGER.json');

const sourcesMap = new Map();
catalog.sources.forEach(s => sourcesMap.set(s.id, s));
catalog.externalSources.forEach(s => sourcesMap.set(s.id, s));

const ledgerMap = new Map();
ledger.decisions.forEach(d => ledgerMap.set(d.id, d));

// 2. Validação da baseline imutável
assert.equal(baseline.schemaVersion, 1, 'baseline: schemaVersion inválido');
assert.equal(baseline.phase, '25B', 'baseline: phase inválida');
assert.equal(baseline.targetCount, 18, 'baseline: targetCount deve ser 18');
assert.equal(baseline.targets.length, 18, 'baseline: deve conter 18 targets');

// 3. Validação do evidence audit
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

for (const target of evidenceAudit.targets) {
    // A. Correspondência com baseline e ledger
    const baseTarget = baseline.targets.find(b => b.id === target.id);
    assert.ok(baseTarget, `${target.id}: ausente na baseline`);
    assert.equal(target.ledgerState, target.decision === 'SUPPORTED' ? 'corrected' : 'unresolved', `${target.id}: ledgerState inconsistente com decision`);
    assert.equal(target.targetWordRepresented, true, `${target.id}: targetWordRepresented deve ser true`);

    const ledgerDecision = ledgerMap.get(target.id);
    assert.ok(ledgerDecision, `${target.id}: decisão ausente no ledger`);
    assert.equal(ledgerDecision.state, target.ledgerState, `${target.id}: estado no ledger divergiu do ledgerState`);

    // B. Validação da evidência bibliográfica primária
    assert.ok(Array.isArray(target.evidence) && target.evidence.length > 0, `${target.id}: evidências ausentes`);
    for (const ev of target.evidence) {
        assert.ok(ev.sourceId, `${target.id}: sourceId ausente`);
        const catSource = sourcesMap.get(ev.sourceId);
        assert.ok(catSource, `${target.id}: fonte ${ev.sourceId} ausente no catálogo`);

        // Fingerprint da fonte
        assert.match(ev.sourceSha256 || '', HASH_REGEX, `${target.id}: sourceSha256 inválido`);
        assert.equal(ev.sourceSha256, catSource.sha256, `${target.id}: sourceSha256 divergiu do catálogo`);

        // Fingerprint da página
        assert.ok(ev.pageEvidence, `${target.id}: pageEvidence ausente`);
        assert.ok(Number.isInteger(ev.pageEvidence.page) && ev.pageEvidence.page > 0, `${target.id}: page inválida`);
        assert.ok(ev.pageEvidence.corpusArtifact, `${target.id}: corpusArtifact ausente`);
        assert.match(ev.pageEvidence.corpusArtifactSha256 || '', HASH_REGEX, `${target.id}: corpusArtifactSha256 inválido`);
        assert.ok(['native', 'ocr'].includes(ev.pageEvidence.extractionMode), `${target.id}: extractionMode inválido`);
        assert.match(ev.pageEvidence.pageTextSha256 || '', HASH_REGEX, `${target.id}: pageTextSha256 inválido`);

        // Supports
        assert.ok(Array.isArray(ev.supports) && ev.supports.length > 0, `${target.id}: supports ausente`);
        for (const s of ev.supports) {
            assert.ok(ALLOWED_SUPPORTS.has(s), `${target.id}: suporte inválido "${s}"`);
        }

        // Resumo
        assert.ok(ev.evidenceSummary && ev.evidenceSummary.length > 0, `${target.id}: evidenceSummary ausente`);

        // Checagem local aprofundada
        if (CHECK_LOCAL) {
            const sourceFilePath = path.join(ROOT, catSource.path || catSource.scratchPath);
            assert.ok(fs.existsSync(sourceFilePath), `${target.id}: arquivo fonte local ausente: ${sourceFilePath}`);
            assert.equal(hashFile(sourceFilePath), ev.sourceSha256, `${target.id}: hash da fonte local divergiu`);

            const artifactPath = path.join(ROOT, ev.pageEvidence.corpusArtifact);
            assert.ok(fs.existsSync(artifactPath), `${target.id}: artefato de página ausente: ${artifactPath}`);
            assert.equal(hashFile(artifactPath), ev.pageEvidence.corpusArtifactSha256, `${target.id}: hash do artefato de página divergiu`);

            const pageData = JSON.parse(fs.readFileSync(artifactPath, 'utf8'));
            const normText = String(pageData.text || pageData.ocrText || '').trim().replace(/\s+/g, ' ');
            const computedTextHash = crypto.createHash('sha256').update(normText).digest('hex');
            assert.equal(computedTextHash, ev.pageEvidence.pageTextSha256, `${target.id}: hash do texto normalizado da página divergiu`);
        }
    }

    // C. KANJIDIC2
    assert.ok(target.kanjidicEvidence, `${target.id}: kanjidicEvidence ausente`);
    assert.equal(target.kanjidicEvidence.verified, true, `${target.id}: kanjidicEvidence não verificado`);
    assert.ok(target.kanjidicEvidence.location && target.kanjidicEvidence.location.startsWith('literal '), `${target.id}: localização KANJIDIC2 inválida`);
    assert.deepEqual(target.kanjidicEvidence.supports, ['character-reading'], `${target.id}: KANJIDIC2 deve sustentar apenas character-reading`);

    // D. Histórico de Referências 25B -> 25B.1
    assert.ok(Array.isArray(target.referenceHistory) && target.referenceHistory.length >= 2, `${target.id}: referenceHistory incompleto`);
    const hist25B = target.referenceHistory.find(h => h.phase === '25B');
    const hist25B1 = target.referenceHistory.find(h => h.phase === '25B.1');
    assert.ok(hist25B && hist25B.reference, `${target.id}: histórico 25B ausente`);
    assert.ok(hist25B1 && hist25B1.reference, `${target.id}: histórico 25B.1 ausente`);
    assert.ok(hist25B1.changeReason, `${target.id}: justificativa de mudança ausente`);
}

console.log(`Rastreabilidade e proveniência de evidências N3: 18/18 alvos auditados com fingerprints ${CHECK_LOCAL ? '(modo local estrito: hashes e páginas validados)' : '(modo de contrato)'}.`);
