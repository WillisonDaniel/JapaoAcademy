'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const CHECK_LOCAL = process.argv.includes('--check-local');

const engine = require('./japanese-n3-decision-engine.cjs');

function readJson(relPath) {
    return JSON.parse(fs.readFileSync(path.join(ROOT, relPath), 'utf8'));
}

const evidenceAudit = readJson('tests/JAPANESE_N3_25B_EVIDENCE_AUDIT.json');
const ledger = readJson('tests/JAPANESE_EDITORIAL_LEDGER.json');
const dataset = require('../database/ja-JP/data_kanji_n3.js');
const baseline = readJson('tests/JAPANESE_N3_DRAFT_RESIDUE_25B_BASELINE.json');

const ledgerMap = new Map(ledger.decisions.map(d => [d.id, d]));
const baselineMap = new Map(baseline.targets.map(b => [b.id, b]));

assert.ok(evidenceAudit.schemaVersion >= 1, 'evidenceAudit: schemaVersion inválido');
assert.equal(evidenceAudit.summary.totalTargets, 18, 'evidenceAudit: totalTargets deve ser 18');
assert.equal(
    evidenceAudit.summary.supportedCount +
    (evidenceAudit.summary.partiallySupportedCount || 0) +
    evidenceAudit.summary.unsupportedCount,
    18,
    'evidenceAudit: soma de supported, partiallySupported e unsupported deve ser 18'
);

let computedSupported = 0;
let computedUnsupported = 0;

for (const target of evidenceAudit.targets) {
    const dsEx = engine.findDatasetExample(target.id, dataset);
    assert.ok(dsEx, `${target.id}: exemplo não encontrado no dataset data_kanji_n3.js`);

    const baseEx = baselineMap.get(target.id);
    assert.ok(baseEx, `${target.id}: exemplo não encontrado na baseline`);

    // Avaliação determinística via Decision Engine (Fases 2 a 8)
    const evalResult = engine.evaluateDecision(target, dsEx, baseEx, { checkText: CHECK_LOCAL });

    if (evalResult.decision === 'SUPPORTED') computedSupported++;
    if (evalResult.decision === 'UNSUPPORTED') computedUnsupported++;

    // 1. Perfil de suficiência calculado pelo Engine deve bater com o audit
    const prof = target.decisionEvidenceProfile;
    assert.ok(prof && typeof prof === 'object', `${target.id}: decisionEvidenceProfile ausente`);
    assert.equal(evalResult.profile.targetIdentityVerified, prof.targetIdentityVerified, `${target.id}: targetIdentityVerified divergiu do Engine`);
    assert.equal(evalResult.profile.correctionDeltaVerified, prof.correctionDeltaVerified, `${target.id}: correctionDeltaVerified divergiu do Engine`);
    assert.equal(evalResult.profile.translationVerified, prof.translationVerified, `${target.id}: translationVerified divergiu do Engine`);
    assert.equal(evalResult.profile.mechanicalFieldsVerified, prof.mechanicalFieldsVerified, `${target.id}: mechanicalFieldsVerified divergiu do Engine`);
    assert.equal(evalResult.decisionSufficient, prof.decisionSufficient, `${target.id}: decisionSufficient divergiu do Engine`);

    // 2. Paridade com a decisão e o ledgerState
    assert.equal(target.decision, evalResult.decision, `${target.id}: decision do audit divergiu da avaliação do Engine`);
    assert.equal(target.ledgerState, evalResult.expectedLedgerState, `${target.id}: ledgerState do audit divergiu do Engine`);

    // 3. Paridade estrita com o ledger
    const ledgerDecision = ledgerMap.get(target.id);
    assert.ok(ledgerDecision, `${target.id}: decisão ausente no ledger`);
    assert.equal(ledgerDecision.state, target.ledgerState, `${target.id}: estado no ledger divergiu do ledgerState`);

    // 4. Validação Individual de correctionClaims via Engine e Contrato Explícito (Fase 4 - Etapa 25B.2)
    assert.ok(Array.isArray(target.correctionClaims), `${target.id}: correctionClaims deve ser array`);
    for (const claim of target.correctionClaims) {
        assert.ok(claim.id, `${target.id}: correctionClaim sem id`);
        assert.ok(engine.ALLOWED_CLAIM_TYPES.has(claim.type), `${target.id}: tipo de claim inválido "${claim.type}"`);
        assert.ok(claim.claim && claim.claim.trim().length > 0, `${target.id}: texto da claim vazio`);
        assert.ok(Array.isArray(claim.evidenceRefs), `${target.id}: evidenceRefs deve ser array`);

        // 1 & 2. Localizar proof explícita e verificar proofForClaimId
        assert.ok(claim.proofForClaimId, `${target.id} (${claim.id}): proofForClaimId ausente`);
        assert.equal(claim.proofForClaimId, claim.id, `${target.id} (${claim.id}): proofForClaimId deve corresponder a claim.id`);

        // 3. Compatibilidade do proofType
        assert.ok(claim.proofType, `${target.id} (${claim.id}): proofType ausente`);
        const allowedProofs = engine.ALLOWED_PROOF_TYPES_FOR_CLAIM[claim.type];
        assert.ok(allowedProofs && allowedProofs.has(claim.proofType), `${target.id} (${claim.id}): proofType "${claim.proofType}" incompatível com tipo "${claim.type}"`);

        // 4. Evidence/witness
        if (claim.status === 'SUPPORTED') {
            assert.ok(claim.evidenceRefs.length > 0, `${target.id} (${claim.id}): claim SUPPORTED deve ter evidenceRefs`);
            // 5. ObservedToken verificado quando exigido
            assert.ok(claim.observedToken !== undefined, `${target.id} (${claim.id}): observedToken não definido`);
            // 6. ExpectedToken
            assert.ok(claim.expectedToken, `${target.id} (${claim.id}): expectedToken ausente`);
            // 7. NormalizedRelation
            assert.ok(engine.ALLOWED_NORMALIZED_RELATIONS.has(claim.normalizedRelation), `${target.id} (${claim.id}): normalizedRelation inválida "${claim.normalizedRelation}"`);
            // 8. Assertion
            assert.equal(claim.assertion, true, `${target.id} (${claim.id}): assertion deve ser true para claim SUPPORTED`);
            // Se correction-delta: verificar baselineValue e expectedFinalValue
            if (claim.proofMode === 'correction-delta') {
                assert.ok(claim.baselineValue, `${target.id} (${claim.id}): baselineValue ausente em correction-delta`);
                assert.ok(claim.expectedFinalValue, `${target.id} (${claim.id}): expectedFinalValue ausente em correction-delta`);
            }
        } else {
            assert.equal(claim.assertion, false, `${target.id} (${claim.id}): assertion deve ser false para claim UNSUPPORTED`);
        }

        // 9. Executar o caminho do Decision Engine
        const claimEval = engine.evaluateCorrectionClaim(claim, target, target.evidence, { checkText: CHECK_LOCAL });
        assert.equal(claimEval.status, claim.status, `${target.id}: status da claim "${claim.id}" divergiu do Engine`);
    }
}

assert.equal(computedSupported, evidenceAudit.summary.supportedCount, 'Soma calculada de SUPPORTED divergiu do resumo');
assert.equal(computedUnsupported, evidenceAudit.summary.unsupportedCount, 'Soma calculada de UNSUPPORTED divergiu do resumo');

// 5. Testes Negativos Obrigatórios Sem Mocks Falsos (Eliminação de Vieses de Sucesso)
// A) 寒波: Target real passado pelo Engine resulta deterministamente em decision = 'UNSUPPORTED'
function testRealKanpaEvaluatesToUnsupported() {
    const kanpaTarget = evidenceAudit.targets.find(t => t.id === 'ja-phase19-n3-n3-m9-kanjis-11-examples-1');
    assert.ok(kanpaTarget, 'Alvo de 寒波 não encontrado no audit');
    const dsEx = engine.findDatasetExample(kanpaTarget.id, dataset);
    const baseEx = baselineMap.get(kanpaTarget.id);
    const res = engine.evaluateDecision(kanpaTarget, dsEx, baseEx, { checkText: true });
    assert.equal(res.decisionSufficient, false, 'Teste real 寒波: deve ser insuficiente');
    assert.equal(res.decision, 'UNSUPPORTED', 'Teste real 寒波: decisão deve ser UNSUPPORTED');
    assert.equal(res.expectedLedgerState, 'unresolved', 'Teste real 寒波: estado esperado deve ser unresolved');
}
testRealKanpaEvaluatesToUnsupported();

// B) 永久: Target real passado pelo Engine resulta deterministamente em decision = 'UNSUPPORTED'
function testRealEikyuuEvaluatesToUnsupported() {
    const eikyuuTarget = evidenceAudit.targets.find(t => t.id === 'ja-phase19-n3-n3-m18-kanjis-12-examples-1');
    assert.ok(eikyuuTarget, 'Alvo de 永久 não encontrado no audit');
    const dsEx = engine.findDatasetExample(eikyuuTarget.id, dataset);
    const baseEx = baselineMap.get(eikyuuTarget.id);
    const res = engine.evaluateDecision(eikyuuTarget, dsEx, baseEx, { checkText: true });
    assert.equal(res.decisionSufficient, false, 'Teste real 永久: deve ser insuficiente');
    assert.equal(res.decision, 'UNSUPPORTED', 'Teste real 永久: decisão deve ser UNSUPPORTED');
    assert.equal(res.expectedLedgerState, 'unresolved', 'Teste real 永久: estado esperado deve ser unresolved');
}
testRealEikyuuEvaluatesToUnsupported();

// C) 既婚: Mutação real na evidência de leitura para token parcial 'こん' é rejeitada pelo Engine
function testMutatedKikonPartialReadingFailsInEngine() {
    const kikonTarget = evidenceAudit.targets.find(t => t.id === 'ja-phase19-n3-n3-m18-kanjis-9-examples-1');
    assert.ok(kikonTarget, 'Alvo de 既婚 não encontrado no audit');

    // Clonar e mutar a evidência de leitura para apenas 'こん'
    const mutated = JSON.parse(JSON.stringify(kikonTarget));
    const targetReadingSupport = mutated.evidence[0].supportEvidence['target-reading'];
    assert.ok(targetReadingSupport, 'target-reading support não encontrado em 既婚');
    targetReadingSupport.observedToken = 'こん'; // Mutação adversarial: leitura parcial

    const dsEx = engine.findDatasetExample(mutated.id, dataset);
    const baseEx = baselineMap.get(mutated.id);
    const res = engine.evaluateDecision(mutated, dsEx, baseEx, { checkText: true });

    assert.equal(res.profile.targetIdentityVerified, false, 'Engine deve rejeitar targetIdentity de 既婚 com leitura parcial "こん"');
    assert.equal(res.decisionSufficient, false, 'Engine deve classificar como insuficiente');
    assert.equal(res.decision, 'UNSUPPORTED', 'Decisão deve cair para UNSUPPORTED quando leitura é parcial');
}
testMutatedKikonPartialReadingFailsInEngine();

// 6. Validação Negativa do Contrato Explícito de Claims (Fase 4 - Etapa 25B.2)
function testExplicitClaimContractNegativeDetectors() {
    const validTarget = evidenceAudit.targets[0];
    const validClaim = validTarget.correctionClaims[0];

    // Detectar claim sem proof
    {
        const mut = JSON.parse(JSON.stringify(validClaim));
        delete mut.proofForClaimId;
        mut.proofRequired = true;
        const res = engine.evaluateCorrectionClaim(mut, validTarget, validTarget.evidence, { checkText: true });
        assert.equal(res.status, 'UNSUPPORTED');
        assert.ok(res.reasons.some(r => r.includes('MISSING_PROOF_BINDING')));
    }

    // Detectar proof apontando para outro claim
    {
        const mut = JSON.parse(JSON.stringify(validClaim));
        mut.proofForClaimId = 'claim-alheia-999';
        const res = engine.evaluateCorrectionClaim(mut, validTarget, validTarget.evidence, { checkText: true });
        assert.equal(res.status, 'UNSUPPORTED');
        assert.ok(res.reasons.some(r => r.includes('PROOF_ID_MISMATCH')));
    }

    // Detectar proofType incompatível
    {
        const mut = JSON.parse(JSON.stringify(validClaim));
        mut.proofType = 'grammar-pattern'; // incompatível com orthography
        const res = engine.evaluateCorrectionClaim(mut, validTarget, validTarget.evidence, { checkText: true });
        assert.equal(res.status, 'UNSUPPORTED');
        assert.ok(res.reasons.some(r => r.includes('INCOMPATIBLE_PROOF_TYPE')));
    }

    // Detectar observedToken incompatível / inexistente na página
    {
        const mut = JSON.parse(JSON.stringify(validClaim));
        mut.observedToken = 'TOKEN_INEXISTENTE_NA_PAGINA_XYZ';
        const res = engine.evaluateCorrectionClaim(mut, validTarget, validTarget.evidence, { checkText: true });
        assert.equal(res.status, 'UNSUPPORTED');
        assert.ok(res.reasons.some(r => r.includes('OBSERVED_TOKEN_NOT_IN_PAGE')));
    }

    // Detectar expectedToken incompatível com claim
    {
        const mut = JSON.parse(JSON.stringify(validClaim));
        mut.claim = 'Texto totalmente diferente';
        const res = engine.evaluateCorrectionClaim(mut, validTarget, validTarget.evidence, { checkText: true });
        assert.equal(res.status, 'UNSUPPORTED');
        assert.ok(res.reasons.some(r => r.includes('CLAIM_NOT_SUBSTANTIATED_BY_EVIDENCE') || r.includes('CLAIM_EXPECTED_TOKEN_MISMATCH')));
    }

    // Detectar relation inválida
    {
        const mut = JSON.parse(JSON.stringify(validClaim));
        mut.normalizedRelation = 'INVALIDA_XYZ';
        const res = engine.evaluateCorrectionClaim(mut, validTarget, validTarget.evidence, { checkText: true });
        assert.equal(res.status, 'UNSUPPORTED');
        assert.ok(res.reasons.some(r => r.includes('INVALID_NORMALIZED_RELATION')));
    }
}
testExplicitClaimContractNegativeDetectors();

console.log(`Portão de Suficiência de Decisão N3 (Engine Determinístico): 18/18 alvos auditados (${evidenceAudit.summary.supportedCount} SUPPORTED / ${evidenceAudit.summary.unsupportedCount} UNSUPPORTED, contratos semânticos e testes negativos reais aprovados).`);
