'use strict';

/**
 * JAPANESE N2.4 RESOLUTION GATE
 *
 * Valida a resolução editorial definitiva dos 652 alvos do Kanji N2:
 * 1. Exatamente 652 targets entraram no escopo inicial congelado.
 * 2. Exatamente 652 foram processados com decisão editorial final.
 * 3. 0 targets permaneceram como UNRESOLVED.
 * 4. 0 targets ficaram sem decisão editorial.
 * 5. 0 targets ficaram sem dossiê individual.
 * 6. 0 targets ficaram sem justificativa / decisionRationale.
 * 7. 0 alvos APPROVED sem prova no nível de registro (RECORD_LEVEL).
 * 8. 0 correction-delta sem BEFORE/AFTER/JUSTIFICATION.
 * 9. 0 decisões sem rastreabilidade de evidência.
 * 10. 0 targets duplicados.
 * 11. 0 targets desaparecidos / órfãos.
 * 12. 652/652 continuam identificáveis pelos targetIds originais.
 */

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
function readJson(relPath) {
    return JSON.parse(fs.readFileSync(path.join(ROOT, relPath), 'utf8'));
}

const initial652 = readJson('tests/N2.4_INITIAL_UNRESOLVED_652.json');
const n24Evidence = readJson('tests/N2.4_EDITORIAL_RESOLUTION_EVIDENCE.json');
const queue = readJson('tests/N2_EDITORIAL_REVIEW_QUEUE.json');
const ledger = readJson('tests/JAPANESE_EDITORIAL_LEDGER.json');
const evidenceDir = path.join(ROOT, 'tests/N2.4_FINAL_EVIDENCE');

console.log('--- Iniciando Portão de Resolução N2.4 (652 Alvos) ---');

// 1. Exatamente 652 targets entraram
assert.equal(initial652.totalTargets, 652, 'Requisito 1: totalTargets em initial652 deve ser 652');
assert.equal(initial652.targets.length, 652, 'Requisito 1: lista de targets deve conter exatamente 652');

const initialIds = new Set(initial652.targets.map(t => t.targetId));
assert.equal(initialIds.size, 652, 'Requisito 10: targetIds em initial652 não podem ter duplicatas');

// 2. Exatamente 652 foram processados
assert.equal(n24Evidence.totalTargets, 652, 'Requisito 2: n24Evidence deve conter 652 targets');
assert.equal(n24Evidence.dossiers.length, 652, 'Requisito 2: n24Evidence deve listar 652 dossiês');

const processedIds = new Set(n24Evidence.dossiers.map(d => d.targetId));
assert.equal(processedIds.size, 652, 'Requisito 10: dossiês processados não podem ter duplicatas');

// 11 e 12. Correspondência exata e 0 desaparecidos
initialIds.forEach(id => {
    assert.ok(processedIds.has(id), `Requisito 11/12: targetId ${id} desaparecido na resolução`);
});

// Mapas de verificação
const queueMap = new Map(queue.queue.map(q => [q.id, q]));
const ledgerMap = new Map(ledger.decisions.map(d => [d.id, d]));

let unresCount = 0;
let withoutDecision = 0;
let withoutDossier = 0;
let withoutRationale = 0;
let approvedWithoutRecordLevel = 0;
let unevidencedCorrections = 0;
let decisionsWithoutEvidence = 0;

n24Evidence.dossiers.forEach(dossier => {
    const id = dossier.targetId;

    // 3. 0 ficaram UNRESOLVED
    if (dossier.finalDecision === 'UNRESOLVED' || dossier.finalDecision === 'REVIEWED_UNRESOLVED') {
        unresCount++;
    }

    // 4. 0 ficaram sem decisão
    if (!dossier.finalDecision || dossier.finalDecision.trim() === '') {
        withoutDecision++;
    }

    // 5. 0 ficaram sem dossier individual no disco
    const indFilePath = path.join(evidenceDir, `${id}.json`);
    if (!fs.existsSync(indFilePath)) {
        withoutDossier++;
    }

    // 6. 0 ficaram sem rationale
    if (!dossier.decisionRationale || dossier.decisionRationale.trim() === '') {
        withoutRationale++;
    }

    // 7. 0 APPROVED ficaram sem RECORD_LEVEL
    if (dossier.finalDecision === 'APPROVED') {
        const hasRecordLevel = dossier.proof && dossier.proof.some(p => p.relation === 'RECORD_LEVEL_MATCH');
        if (!hasRecordLevel) {
            approvedWithoutRecordLevel++;
        }
    }

    // 8. 0 correction-delta sem BEFORE/AFTER/JUSTIFICATION
    if (dossier.correction) {
        if (!dossier.correction.before || !dossier.correction.after || !dossier.correction.justification) {
            unevidencedCorrections++;
        }
    }

    // 9. 0 decisions sem evidence
    if (!dossier.claims || dossier.claims.length === 0) {
        decisionsWithoutEvidence++;
    }

    // Paridade com Queue
    const qItem = queueMap.get(id);
    assert.ok(qItem, `${id}: ausente na fila`);
    assert.equal(qItem.editorialDecision, dossier.finalDecision, `${id}: decisão na fila divergiu do dossiê`);

    // Paridade com Ledger
    const lItem = ledgerMap.get(id);
    assert.ok(lItem, `${id}: ausente no ledger`);
    assert.equal(lItem.reviewBatch, 'N2.4-definitive', `${id}: reviewBatch no ledger deve ser N2.4-definitive`);
});

assert.equal(unresCount, 0, 'Requisito 3: 0 targets devem ser UNRESOLVED');
assert.equal(withoutDecision, 0, 'Requisito 4: 0 targets devem ficar sem decisão');
assert.equal(withoutDossier, 0, 'Requisito 5: 0 targets devem ficar sem dossiê no disco');
assert.equal(withoutRationale, 0, 'Requisito 6: 0 targets devem ficar sem rationale');
assert.equal(approvedWithoutRecordLevel, 0, 'Requisito 7: 0 APPROVED sem prova RECORD_LEVEL');
assert.equal(unevidencedCorrections, 0, 'Requisito 8: 0 correções sem evidência/justificativa');
assert.equal(decisionsWithoutEvidence, 0, 'Requisito 9: 0 decisões sem claims/evidência');

console.log('✓ Requisito 1: Exatamente 652 targets entraram no escopo');
console.log('✓ Requisito 2: Exatamente 652 targets processados');
console.log('✓ Requisito 3: 0 UNRESOLVED residuais');
console.log('✓ Requisito 4: 0 alvos sem decisão');
console.log('✓ Requisito 5: 652/652 dossiês individuais presentes em tests/N2.4_FINAL_EVIDENCE/');
console.log('✓ Requisito 6: 652/652 com rationale explícito');
console.log('✓ Requisito 7: 0 aprovações sem prova de registro completo');
console.log('✓ Requisito 8: 0 correções ad hoc / sem delta');
console.log('✓ Requisito 9: 652/652 com rastreabilidade de claims');
console.log('✓ Requisito 10: 0 targets duplicados');
console.log('✓ Requisito 11: 0 targets perdidos / órfãos');
console.log('✓ Requisito 12: 652/652 identificáveis e reconciliados');
console.log('\nPortão de Resolução N2.4: PASS (12/12 requisitos comprovados).');
