'use strict';

const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const ledger = JSON.parse(fs.readFileSync(path.join(__dirname, 'JAPANESE_EDITORIAL_LEDGER.json'), 'utf8'));

function load(relativePath, variable, dependencies = []) {
    const context = { console };
    context.window = context;
    vm.createContext(context);
    for (const dependency of dependencies) {
        vm.runInContext(fs.readFileSync(path.join(ROOT, dependency), 'utf8'), context);
    }
    const source = fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
    vm.runInContext(`${source}\nwindow.__value = ${variable};`, context);
    return context.__value;
}

function valueHash(value) {
    return crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
}

const phase17 = ledger.decisions.filter(decision => decision.id.startsWith('ja-n1-reading-') || decision.id === 'ja-n5-m01-kanji-00-example-01');
assert.equal(phase17.length, 159, 'a Fase 17 deve manter 158 leituras N1 e uma decisão N5');
assert.equal(new Set(phase17.map(decision => `${decision.target.file}|${decision.target.locator}`)).size, 159, 'alvos editoriais duplicados');
phase17.forEach(decision => {
    assert.equal(decision.state, 'corrected', `${decision.id}: decisão não concluída`);
    assert.equal(decision.beforeHash, valueHash(decision.beforeValue), `${decision.id}: hash anterior divergente`);
    assert.ok(decision.references.some(reference => reference.sourceId === 'edrdg-kanjidic2'), `${decision.id}: KANJIDIC2 não referenciado`);
});

const n1 = load('database/ja-JP/data_kanji_n1.js', 'kanjiN1Data', ['js/kanji/romaji-draft.js']);
const n1Decisions = phase17.filter(decision => decision.target.file.endsWith('data_kanji_n1.js'));
assert.equal(n1Decisions.length, 158, 'fila N1 incompleta');
for (const decision of n1Decisions) {
    const match = decision.target.locator.match(/^module=(\d+);kanjis\[(\d+)\]\.(onyomi|kunyomi)$/);
    assert.ok(match, `${decision.id}: locator inválido`);
    const module = n1.find(item => String(item.module) === match[1]);
    const kanji = module && module.kanjis[Number(match[2])];
    assert.ok(kanji && kanji.character === decision.target.character, `${decision.id}: alvo não existe mais`);
    assert.equal(kanji[match[3]], decision.finalValue, `${decision.id}: valor final não aplicado`);
    assert.equal(kanji.readingEditorialReview[match[3]].status, 'corrected', `${decision.id}: status público ainda pendente`);
}
assert.equal(n1Decisions.filter(decision => decision.finalValue === '-').length, 34, 'contagem de campos sem kun’yomi mudou');
assert.equal(n1Decisions.filter(decision => /[A-Za-z]/.test(decision.finalValue) && !/[\u3040-\u30ff]/u.test(decision.finalValue)).length, 0,
    'permaneceu leitura N1 apenas em Romaji');

const n5 = load('database/ja-JP/data_kanji_n5.js', 'kanjiN5Data');
const n5Example = n5[0].kanjis[0].examples[1];
assert.match(n5Example.sentence, /漢字.*雨.*飴/u, 'exemplo N5 não contém o alvo e os homófonos');
assert.doesNotMatch(n5Example.sentence, /\b(?:pode|chuva|bala)\b/i, 'exemplo japonês N5 ainda mistura português');
assert.equal(n5Example.editorialReview.status, 'corrected', 'exemplo N5 ainda não aprovado editorialmente');

const occurrences = JSON.parse(fs.readFileSync(path.join(__dirname, 'JAPANESE_EDITORIAL_OCCURRENCES.json'), 'utf8'));
assert.equal(occurrences.summary.bySeverity.editorial, 0, 'pendências editoriais objetivas ainda presentes');
assert.equal(occurrences.summary.bySeverity.allowed, 0, 'allowlist editorial ainda mascara ocorrência');
assert.deepEqual(occurrences.occurrences, [], 'fila objetiva da Fase 17 não foi zerada');

console.log('✓ Fase 17 editorial: 158 leituras N1 e uma exceção N5 rastreadas e corrigidas.');
