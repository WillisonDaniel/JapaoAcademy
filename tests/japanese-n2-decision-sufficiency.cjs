'use strict';

/**
 * JAPANESE N2 DECISION SUFFICIENCY GATE
 * Master Audit: DATASET -> EVIDENCE -> WITNESS -> PROOF -> DECISION ENGINE -> ADVERSARIAL VALIDATION -> CLOSURE
 *
 * Valida a suficiência determinística da decisão e paridade entre
 * Dataset ↔ Audit ↔ Ledger ↔ Queue ↔ Decision Engine para o Kanji N2.
 */

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const CHECK_LOCAL = process.argv.includes('--check-local');

const engine = require('./japanese-n2-decision-engine.cjs');

function readJson(relPath) {
    return JSON.parse(fs.readFileSync(path.join(ROOT, relPath), 'utf8'));
}

function loadDataset(file, variable) {
    const code = fs.readFileSync(path.join(ROOT, file), 'utf8');
    const ctx = { window: {}, globalThis: {} };
    ctx.window = ctx; ctx.globalThis = ctx;
    vm.createContext(ctx);
    vm.runInContext(code + '\nglobalThis.__data = ' + variable + ';', ctx);
    return ctx.__data;
}

const evidenceAudit = readJson('tests/JAPANESE_N2_EVIDENCE_AUDIT.json');
const ledger = readJson('tests/JAPANESE_EDITORIAL_LEDGER.json');
const queue = readJson('tests/JAPANESE_FINAL_EDITORIAL_QUEUE.json');
const dataset = loadDataset('database/ja-JP/data_kanji_n2.js', 'kanjiN2Data');

const ledgerMap = new Map(ledger.decisions.map(d => [d.id, d]));
const queueMap = new Map((queue.queue || queue).map(q => [q.id || q.targetId, q]));

// 1. Integridade do Relatório de Auditoria
assert.ok(evidenceAudit.schemaVersion >= 1, 'evidenceAudit: schemaVersion inválido');
assert.equal(evidenceAudit.summary.totalTargets, 771, 'evidenceAudit: totalTargets deve ser 771');
assert.equal(evidenceAudit.targets.length, 771, 'evidenceAudit: lista de targets deve conter 771 itens');

let computedSupported = 0;
let computedUnsupported = 0;

for (const target of evidenceAudit.targets) {
    // Para targets de módulo metadata
    if (target.type === 'kanji-metadata') {
        assert.equal(target.decision, 'UNSUPPORTED', `${target.id}: módulo metadata deve ser UNSUPPORTED`);
        assert.equal(target.ledgerState, 'unresolved', `${target.id}: módulo metadata deve ser unresolved`);
        
        const ledgerDec = ledgerMap.get(target.id);
        assert.ok(ledgerDec, `${target.id}: ausente no ledger`);
        assert.equal(ledgerDec.state, 'unresolved', `${target.id}: estado no ledger deve ser unresolved`);

        const qItem = queueMap.get(target.id);
        assert.ok(qItem, `${target.id}: ausente na fila`);
        assert.equal(qItem.currentState, 'unresolved', `${target.id}: currentState na fila deve ser unresolved`);
        
        computedUnsupported++;
        continue;
    }

    // Para targets de exemplo de vocabulário
    const dsEx = engine.findDatasetExample(target.id, dataset);
    assert.ok(dsEx, `${target.id}: exemplo não encontrado no dataset data_kanji_n2.js`);

    const evalResult = engine.evaluateDecision(target, dsEx, null, { checkText: CHECK_LOCAL });

    if (evalResult.decision === 'SUPPORTED') computedSupported++;
    if (evalResult.decision === 'UNSUPPORTED') computedUnsupported++;

    // Decisão do engine deve bater com a registrada no audit
    assert.equal(evalResult.decision, target.decision, `${target.id}: decisão calculada divergiu do audit`);
    assert.equal(evalResult.expectedLedgerState, target.ledgerState, `${target.id}: ledgerState divergiu do audit`);

    // Paridade com o ledger
    const ledgerDecision = ledgerMap.get(target.id);
    assert.ok(ledgerDecision, `${target.id}: decisão ausente no ledger`);
    assert.equal(ledgerDecision.state, target.ledgerState, `${target.id}: estado no ledger divergiu do ledgerState`);

    // Paridade com a fila editorial
    const queueItem = queueMap.get(target.id);
    assert.ok(queueItem, `${target.id}: item ausente na fila editorial`);
    assert.equal(queueItem.currentState, target.ledgerState, `${target.id}: estado na fila divergiu do audit`);
}

assert.equal(computedSupported, evidenceAudit.summary.supportedCount, 'Contagem de supported divergiu');
assert.equal(computedUnsupported, evidenceAudit.summary.unsupportedCount, 'Contagem de unsupported divergiu');
assert.equal(computedSupported + computedUnsupported, 771, 'Total de alvos avaliados deve ser 771');

console.log(`Portão de Suficiência de Decisão N2: 771/771 alvos avaliados deterministicamente.`);
console.log(`- Supported: ${computedSupported}`);
console.log(`- Unsupported / Pendentes de Revisão Humana: ${computedUnsupported}`);
console.log(`- Paridade Tríplice Dataset ↔ Audit ↔ Ledger ↔ Fila: 100% COMPROVADA.`);
