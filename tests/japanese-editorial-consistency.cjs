'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('vm');

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

const ledger = readJson('tests/JAPANESE_EDITORIAL_LEDGER.json');
const queueData = readJson('tests/JAPANESE_FINAL_EDITORIAL_QUEUE.json');
const canonicalDecisions = new Map(ledger.decisions.filter(d => d.phase !== 20).map(d => [d.id, d]));

// 1. Validate Queue Summary & Structure against Ledger
const ledgerUnresolved = ledger.decisions.filter(d => d.state === 'unresolved');
const canonicalFiles = new Set([
    'database/ja-JP/data_hiragana.js',
    'database/ja-JP/data_katakana.js',
    'database/ja-JP/data_kanji_n5.js',
    'database/ja-JP/data_kanji_n4.js',
    'database/ja-JP/data_kanji_n3.js',
    'database/ja-JP/data_kanji_n2.js',
    'database/ja-JP/data_kanji_n1.js'
]);

const canonicalUnresolved = ledgerUnresolved.filter(d => canonicalFiles.has(d.target.file));
const derivedUnresolved = ledgerUnresolved.filter(d => d.phase === 20);

assert.equal(queueData.summary.totalLedgerUnresolved, ledgerUnresolved.length, 'totalLedgerUnresolved divergiu do ledger');
assert.equal(queueData.summary.canonicalUnresolvedCount, canonicalUnresolved.length, 'canonicalUnresolvedCount divergiu do ledger');
assert.equal(queueData.summary.derivedUnresolvedCount, derivedUnresolved.length, 'derivedUnresolvedCount divergiu do ledger');
assert.equal(queueData.summary.derivedUpstreamPendingCount + queueData.summary.derivedRulePendingCount, queueData.summary.derivedUnresolvedCount,
    'derivedUpstreamPendingCount + derivedRulePendingCount deve igualar derivedUnresolvedCount');
assert.equal(queueData.queue.length, ledgerUnresolved.length, 'tamanho da fila deve ser identico ao numero de unresolved no ledger');

// 2. Validate Semantic Rules for Queue ReasonKind (Regras A, B, C)
for (const item of queueData.queue) {
    if (item.reasonKind === 'DERIVED_UPSTREAM_PENDING') {
        const upstreams = (item.upstream || []).map(uid => canonicalDecisions.get(uid));
        assert.ok(upstreams.length > 0, item.id + ': DERIVED_UPSTREAM_PENDING sem upstreams');
        assert.ok(upstreams.some(u => u && u.state === 'unresolved'),
            item.id + ': DERIVED_UPSTREAM_PENDING deve possuir pelo menos um upstream unresolved');
    } else if (item.reasonKind === 'DERIVED_RULE_PENDING') {
        assert.equal(item.currentState, 'unresolved', item.id + ': DERIVED_RULE_PENDING deve estar unresolved');
        const dec = ledger.decisions.find(d => d.id === item.id);
        const upstreams = ((dec && dec.upstreamDecisionIds) || item.upstream || []).map(uid => canonicalDecisions.get(uid));
        assert.ok(!upstreams.some(u => u && u.state === 'unresolved'),
            item.id + ': DERIVED_RULE_PENDING nao pode possuir upstream unresolved');
    }
}

// 3. Bidirectional Consistency between Canonical Datasets (Kana + Kanji) and Ledger
const ledgerTargetMap = new Map();
ledger.decisions.forEach(d => {
    ledgerTargetMap.set(d.target.file + '::' + d.target.locator, d);
});

const kanaDatasets = [
    ['database/ja-JP/data_hiragana.js', 'HIRA_COURSE_DATA', 'hiragana'],
    ['database/ja-JP/data_katakana.js', 'KATA_COURSE_DATA', 'katakana']
];

kanaDatasets.forEach(([file, varName, levelPrefix]) => {
    const data = load(file, varName);
    data.forEach((m, mIdx) => {
        const modNum = mIdx + 1;
        const modPending = Boolean(m.editorialReview && m.editorialReview.status === 'pending-human-review');
        const decMeta = ledgerTargetMap.get(file + '::' + levelPrefix + '-m' + modNum + ';module.metadata');
        if (decMeta) {
            if (modPending) assert.equal(decMeta.state, 'unresolved', file + ' module metadata pendente mas ledger diz ' + decMeta.state);
            else assert.ok(['approved', 'corrected'].includes(decMeta.state), file + ' module metadata nao pendente mas ledger diz ' + decMeta.state);
        }
    });
});

const kanjiDatasets = [
    ['database/ja-JP/data_kanji_n5.js', 'kanjiN5Data', 'n5'],
    ['database/ja-JP/data_kanji_n4.js', 'kanjiN4Data', 'n4'],
    ['database/ja-JP/data_kanji_n3.js', 'kanjiN3Data', 'n3'],
    ['database/ja-JP/data_kanji_n2.js', 'kanjiN2Data', 'n2'],
    ['database/ja-JP/data_kanji_n1.js', 'kanjiN1Data', 'n1']
];

kanjiDatasets.forEach(([file, varName, levelPrefix]) => {
    const data = load(file, varName);
    data.forEach((m, mIdx) => {
        const modNum = m.module || (mIdx + 1);
        const modPending = Boolean(m.editorialReview && m.editorialReview.status === 'pending-human-review');
        const locMeta1 = levelPrefix + '-m' + modNum + ';module.metadata';
        const locMeta2 = 'module=' + modNum + ';module.metadata';
        const decMeta = ledgerTargetMap.get(file + '::' + locMeta1) || ledgerTargetMap.get(file + '::' + locMeta2);
        if (decMeta) {
            if (modPending) assert.equal(decMeta.state, 'unresolved', file + '::' + decMeta.target.locator + ': metadata pendente mas ledger diz ' + decMeta.state);
            else assert.ok(['approved', 'corrected'].includes(decMeta.state), file + '::' + decMeta.target.locator + ': metadata nao pendente mas ledger diz ' + decMeta.state);
        }
        (m.kanjis || []).forEach((k, kIdx) => {
            (k.examples || []).forEach((ex, exIdx) => {
                const exPending = Boolean(ex.editorialReview && ex.editorialReview.status === 'pending-human-review');
                const locEx1 = levelPrefix + '-m' + modNum + ';kanjis[' + kIdx + '].examples[' + exIdx + ']';
                const locEx2 = 'module=' + modNum + ';kanjis[' + kIdx + '].examples[' + exIdx + ']';
                const decEx = ledgerTargetMap.get(file + '::' + locEx1) || ledgerTargetMap.get(file + '::' + locEx2);
                if (decEx) {
                    if (exPending) assert.equal(decEx.state, 'unresolved', file + '::' + decEx.target.locator + ': exemplo pendente mas ledger diz ' + decEx.state);
                    else assert.ok(['approved', 'corrected'].includes(decEx.state), file + '::' + decEx.target.locator + ': exemplo nao pendente mas ledger diz ' + decEx.state);
                }
            });
            if (k.readingEditorialReview) {
                ['onyomi', 'kunyomi'].forEach(rf => {
                    if (k.readingEditorialReview[rf]) {
                        const rfPending = Boolean(k.readingEditorialReview[rf].status === 'pending-human-review');
                        const locRf1 = levelPrefix + '-m' + modNum + ';kanjis[' + kIdx + '].' + rf;
                        const locRf2 = 'module=' + modNum + ';kanjis[' + kIdx + '].' + rf;
                        const decRf = ledgerTargetMap.get(file + '::' + locRf1) || ledgerTargetMap.get(file + '::' + locRf2);
                        if (decRf) {
                            if (rfPending) assert.equal(decRf.state, 'unresolved', file + '::' + decRf.target.locator + ': leitura pendente mas ledger diz ' + decRf.state);
                            else assert.ok(['approved', 'corrected'].includes(decRf.state), file + '::' + decRf.target.locator + ': leitura nao pendente mas ledger diz ' + decRf.state);
                        }
                    }
                });
            }
        });
    });
});

// 4. Bidirectional Consistency between Derived Indices and Ledger
const grammar = load('database/ja-JP/data_gramatica_index.js', 'JAPANESE_GRAMMAR_INDEX');
(grammar.references || []).forEach((r, rIdx) => {
    const id = 'ja-phase20-grammar-' + (r.id || ('grammar-' + (rIdx + 1) + '-reference'));
    const dec = ledger.decisions.find(d => d.id === id);
    if (dec) {
        if (r.editorialStatus === 'pending-human-review') {
            assert.equal(dec.state, 'unresolved', 'Grammar ' + id + ': indice diz pending mas ledger diz ' + dec.state);
        } else {
            assert.ok(['approved', 'corrected'].includes(dec.state), 'Grammar ' + id + ': indice ok mas ledger diz ' + dec.state);
        }
    }
});

const jlpt = load('database/ja-JP/data_jlpt_pratica_index.js', 'JAPANESE_JLPT_PRACTICE_INDEX');
jlpt.forEach((q, qIdx) => {
    const slug = String(q.id || ('jlpt-' + (qIdx + 1))).replace(/[^a-z0-9_]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
    const id = 'ja-phase20-jlpt-' + slug;
    const dec = ledger.decisions.find(d => d.id === id);
    if (dec) {
        if (q.editorialStatus === 'pending-human-review') {
            assert.equal(dec.state, 'unresolved', 'JLPT ' + id + ': indice diz pending mas ledger diz ' + dec.state);
        } else {
            assert.ok(['approved', 'corrected'].includes(dec.state), 'JLPT ' + id + ': indice ok mas ledger diz ' + dec.state);
        }
    }
});

// 5. Test Kanji Reading Warning Badge Logic (Section 13)
function evaluateReadingPending(item) {
    const review = item.readingEditorialReview || {};
    return Boolean(
        review.status === 'pending-human-review' ||
        (review.onyomi && review.onyomi.status === 'pending-human-review') ||
        (review.kunyomi && review.kunyomi.status === 'pending-human-review')
    );
}
assert.equal(evaluateReadingPending({ readingEditorialReview: { kunyomi: { status: 'pending-human-review' } } }), true, 'Caso 1: reading pending deve exibir badge');
assert.equal(evaluateReadingPending({ readingEditorialReview: { kunyomi: { status: 'corrected' } } }), false, 'Caso 2: reading corrected NAO deve exibir badge');
assert.equal(evaluateReadingPending({}), false, 'Caso 3: reading ausente NAO deve exibir badge');

console.log('Consistencia editorial e regras semanticas: 100% aprovadas (' + queueData.summary.totalLedgerUnresolved + ' pendencias mapeadas).');