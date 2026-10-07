'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(ROOT, file), 'utf8');
const readJson = file => JSON.parse(read(file));

function load(file, variable) {
    const context = { console: { log() {}, warn() {}, error() {} } };
    context.window = context;
    context.globalThis = context;
    vm.createContext(context);
    vm.runInContext(read(file) + '\n;globalThis.__val=' + variable + ';', context, { filename: file });
    return JSON.parse(JSON.stringify(context.__val));
}

const n3Data = load('database/ja-JP/data_kanji_n3.js', 'kanjiN3Data');
const ledger = readJson('tests/JAPANESE_EDITORIAL_LEDGER.json');
const ledgerMap = new Map(ledger.decisions.map(d => [d.id, d]));
const evidenceReport = readJson('tests/JAPANESE_N3_25B_EVIDENCE_AUDIT.json');

const CORRECTED_TARGETS = [
    {
        id: 'ja-phase19-n3-n3-m1-kanjis-0-examples-0',
        mod: 1, kIdx: 0, exIdx: 0, kanji: '港', word: '港',
        forbiddenTokens: ['ふねがたつ'],
        expectedInSentence: '港'
    },
    {
        id: 'ja-phase19-n3-n3-m1-kanjis-0-examples-1',
        mod: 1, kIdx: 0, exIdx: 1, kanji: '港', word: '空港',
        forbiddenTokens: ['arrival', 'Kuukou ni hayaku arrival'],
        expectedInSentence: '空港'
    },
    {
        id: 'ja-phase19-n3-n3-m1-kanjis-2-examples-0',
        mod: 1, kIdx: 2, exIdx: 0, kanji: '招', word: '招く',
        forbiddenTokens: ['招います'],
        expectedInSentence: '招きます'
    },
    {
        id: 'ja-phase19-n3-n3-m1-kanjis-7-examples-0',
        mod: 1, kIdx: 7, exIdx: 0, kanji: '偶', word: '偶然',
        forbiddenTokens: ['あおうと'],
        expectedInSentence: '偶然'
    },
    {
        id: 'ja-phase19-n3-n3-m4-kanjis-7-examples-0',
        mod: 4, kIdx: 7, exIdx: 0, kanji: '恋', word: '恋人',
        forbiddenTokens: ['あおうと'],
        expectedInSentence: '恋人'
    },
    {
        id: 'ja-phase19-n3-n3-m9-kanjis-11-examples-1',
        mod: 9, kIdx: 11, exIdx: 1, kanji: '寒', word: '寒波',
        forbiddenTokens: ['arrival', 'とうちゃく。'],
        expectedInSentence: '寒波'
    },
    {
        id: 'ja-phase19-n3-n3-m12-kanjis-6-examples-0',
        mod: 12, kIdx: 6, exIdx: 0, kanji: '刷', word: '印刷',
        forbiddenTokens: ['ぱぺル'],
        expectedInSentence: '印刷'
    },
    {
        id: 'ja-phase19-n3-n3-m16-kanjis-3-examples-1',
        mod: 16, kIdx: 3, exIdx: 1, kanji: '厚', word: '濃厚',
        forbiddenTokens: ['そうプ'],
        expectedInSentence: '濃厚'
    },
    {
        id: 'ja-phase19-n3-n3-m16-kanjis-4-examples-0',
        mod: 16, kIdx: 4, exIdx: 0, kanji: '薄', word: '薄い',
        forbiddenTokens: ['ぱぺル'],
        expectedInSentence: '薄い'
    },
    {
        id: 'ja-phase19-n3-n3-m16-kanjis-12-examples-0',
        mod: 16, kIdx: 12, exIdx: 0, kanji: '硬', word: '硬い',
        forbiddenTokens: ['スとね'],
        expectedInSentence: '硬い'
    },
    {
        id: 'ja-phase19-n3-n3-m17-kanjis-2-examples-1',
        mod: 17, kIdx: 2, exIdx: 1, kanji: '律', word: '自律',
        forbiddenTokens: ['ぺルそん'],
        expectedInSentence: '自律'
    },
    {
        id: 'ja-phase19-n3-n3-m17-kanjis-3-examples-0',
        mod: 17, kIdx: 3, exIdx: 0, kanji: '禁', word: '禁止',
        forbiddenTokens: ['ちゅしゃ禁止'],
        expectedInSentence: '禁止'
    },
    {
        id: 'ja-phase19-n3-n3-m17-kanjis-10-examples-1',
        mod: 17, kIdx: 10, exIdx: 1, kanji: '党', word: '野党',
        forbiddenTokens: ['でばて'],
        expectedInSentence: '野党'
    },
    {
        id: 'ja-phase19-n3-n3-m17-kanjis-18-examples-0',
        mod: 17, kIdx: 18, exIdx: 0, kanji: '政', word: '政治',
        forbiddenTokens: ['でばて'],
        expectedInSentence: '政治'
    },
    {
        id: 'ja-phase19-n3-n3-m18-kanjis-9-examples-1',
        mod: 18, kIdx: 9, exIdx: 1, kanji: '既', word: '既婚',
        forbiddenTokens: ['ぺルそん'],
        expectedInSentence: '既婚'
    },
    {
        id: 'ja-phase19-n3-n3-m18-kanjis-10-examples-0',
        mod: 18, kIdx: 10, exIdx: 0, kanji: '未', word: '未来',
        forbiddenTokens: ['ドれあム'],
        expectedInSentence: '未来'
    },
    {
        id: 'ja-phase19-n3-n3-m18-kanjis-12-examples-0',
        mod: 18, kIdx: 12, exIdx: 0, kanji: '久', word: '久々',
        forbiddenTokens: ['久々 にあおうと'],
        expectedInSentence: '久々'
    },
    {
        id: 'ja-phase19-n3-n3-m18-kanjis-12-examples-1',
        mod: 18, kIdx: 12, exIdx: 1, kanji: '久', word: '永久',
        forbiddenTokens: ['つずき'],
        expectedInSentence: '永久'
    }
];

assert.equal(CORRECTED_TARGETS.length, 18, 'Quantidade de alvos saneados deve ser 18');

for (const t of CORRECTED_TARGETS) {
    const mod = n3Data.find(m => m.module === t.mod);
    assert.ok(mod, `Modulo ${t.mod} nao encontrado`);
    const kanji = mod.kanjis[t.kIdx];
    assert.ok(kanji, `Kanji indice ${t.kIdx} nao encontrado no modulo ${t.mod}`);
    assert.equal(kanji.character, t.kanji, `${t.id}: caractere divergiu do alvo`);

    const ex = kanji.examples[t.exIdx];
    assert.ok(ex, `${t.id}: exemplo indice ${t.exIdx} nao encontrado`);

    const displayText = (ex.content && ex.content.displayText) || ex.sentence || '';
    const audioText = (ex.content && ex.content.audioText) || ex.audioText || '';
    const romaji = (ex.content && ex.content.romaji) || ex.romaji || '';
    const translation = (ex.content && ex.content.translation) || ex.translation || '';

    // 1. Textos obrigatorios
    assert.ok(displayText.length > 0, `${t.id}: displayText vazio`);
    assert.ok(audioText.length > 0, `${t.id}: audioText vazio`);
    assert.ok(romaji.length > 0, `${t.id}: romaji vazio`);
    assert.ok(translation.length > 0, `${t.id}: translation vazio`);

    // 2. Ausencia de tokens proibidos de draft mecanico
    for (const forbidden of t.forbiddenTokens) {
        assert.ok(!displayText.includes(forbidden), `${t.id}: contem token proibido "${forbidden}" no displayText: ${displayText}`);
        assert.ok(!audioText.includes(forbidden), `${t.id}: contem token proibido "${forbidden}" no audioText: ${audioText}`);
    }

    // 3. Ausencia de letras latinas no texto japones
    assert.ok(!/[a-zA-Z]/.test(displayText), `${t.id}: caracteres latinos no displayText: ${displayText}`);
    assert.ok(!/[a-zA-Z]/.test(audioText), `${t.id}: caracteres latinos no audioText: ${audioText}`);

    // 4. Presenca da palavra-alvo ou flexao legitima
    assert.ok(displayText.includes(t.expectedInSentence), `${t.id}: sentenca "${displayText}" nao contem o alvo "${t.expectedInSentence}"`);

    const auditTarget = evidenceReport.targets.find(item => item.id === t.id);
    assert.ok(auditTarget, `${t.id}: alvo ausente no evidence audit`);

    // 5. Status no dataset consistente com a decisão editorial
    const expectedDatasetStatus = auditTarget.decision === 'SUPPORTED' ? 'corrected' : 'pending-human-review';
    assert.equal(ex.editorialReview && ex.editorialReview.status, expectedDatasetStatus, `${t.id}: editorialReview.status deve ser ${expectedDatasetStatus} no dataset`);

    // 6. Status no ledger consistente com a decisão editorial
    const dec = ledgerMap.get(t.id);
    assert.ok(dec, `${t.id}: decisao ausente no ledger`);
    const expectedLedgerState = auditTarget.decision === 'SUPPORTED' ? 'corrected' : 'unresolved';
    assert.equal(dec.state, expectedLedgerState, `${t.id}: estado no ledger deve ser ${expectedLedgerState}`);
    assert.ok(dec.references && dec.references.length > 0, `${t.id}: referencias ausentes no ledger`);
    assert.ok(dec.rationale && dec.rationale.length > 0, `${t.id}: justificativa ausente no ledger`);
}

// 7. Validacao do artefato historico baseline 25B
const baseline = readJson('tests/JAPANESE_N3_DRAFT_RESIDUE_25B_BASELINE.json');
assert.equal(baseline.schemaVersion, 1, 'baseline 25B: schemaVersion invalido');
assert.equal(baseline.phase, '25B', 'baseline 25B: fase invalida');
assert.equal(baseline.targetCount, 18, 'baseline 25B: contagem deve ser 18');
assert.equal(baseline.targets.length, 18, 'baseline 25B: lista de alvos deve conter 18 registros');
for (const t of CORRECTED_TARGETS) {
    const found = baseline.targets.find(b => b.id === t.id);
    assert.ok(found, `baseline 25B: alvo ${t.id} ausente`);
    assert.equal(found.state, 'corrected');
}

// 8. Validacao do relatorio de auditoria de evidencias bibliograficas
assert.equal(evidenceReport.schemaVersion, 1, 'evidence audit: schemaVersion invalido');
assert.equal(evidenceReport.summary.totalTargets, 18, 'evidence audit: total de alvos deve ser 18');
assert.equal(
    evidenceReport.summary.supportedCount +
    (evidenceReport.summary.partiallySupportedCount || 0) +
    evidenceReport.summary.unsupportedCount,
    18,
    'evidence audit: soma de supported, partiallySupported e unsupported deve ser 18'
);
assert.equal(
    evidenceReport.summary.supportedCount,
    evidenceReport.targets.filter(t => t.decision === 'SUPPORTED').length,
    'evidence audit: supportedCount divergiu dos targets SUPPORTED'
);
assert.equal(
    evidenceReport.summary.unsupportedCount,
    evidenceReport.targets.filter(t => t.decision === 'UNSUPPORTED').length,
    'evidence audit: unsupportedCount divergiu dos targets UNSUPPORTED'
);
assert.equal(evidenceReport.targets.length, 18, 'evidence audit: lista deve conter 18 alvos');
for (const item of evidenceReport.targets) {
    assert.ok(['SUPPORTED', 'UNSUPPORTED'].includes(item.decision), `${item.id}: decisao invalida`);
    assert.equal(item.targetWordRepresented, true, `${item.id}: palavra-alvo deve estar representada na sentenca`);
    assert.ok(item.evidence && item.evidence.length > 0, `${item.id}: evidencias bibliograficas ausentes`);
    for (const ev of item.evidence) {
        assert.ok(ev.sourceSha256 && /^[0-9a-f]{64}$/i.test(ev.sourceSha256), `${item.id}: sourceSha256 invalido`);
        assert.ok(ev.pageEvidence && /^[0-9a-f]{64}$/i.test(ev.pageEvidence.corpusArtifactSha256), `${item.id}: pageEvidence invalido`);
        assert.ok(Array.isArray(ev.supports) && ev.supports.length > 0, `${item.id}: suportes ausentes`);
        assert.ok(ev.evidenceSummary && ev.evidenceSummary.length > 0, `${item.id}: resumo da evidencia ausente`);
    }
}

console.log(`Contrato de saneamento de residuos e evidencias N3: ${CORRECTED_TARGETS.length}/${CORRECTED_TARGETS.length} alvos validados com sucesso.`);
