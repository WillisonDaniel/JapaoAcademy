'use strict';

const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const digest = value => crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
function load(file, variable) {
    const context = {};
    context.window = context;
    vm.createContext(context);
    vm.runInContext(`${fs.readFileSync(path.join(ROOT, file), 'utf8')}\nglobalThis.__value=${variable};`, context, { filename: file });
    return JSON.parse(JSON.stringify(context.__value));
}

const readings = load('database/ja-JP/data_leitura_index.js', 'JAPANESE_READING_INDEX');
const jlpt = load('database/ja-JP/data_jlpt_pratica_index.js', 'JAPANESE_JLPT_PRACTICE_INDEX');
const ledger = JSON.parse(fs.readFileSync(path.join(__dirname, 'JAPANESE_EDITORIAL_LEDGER.json'), 'utf8'));
const canonical = ledger.decisions.filter(decision => decision.phase === 19 &&
    ['kanji-reading-text', 'kanji-comprehension'].includes(decision.target.kind));
const derived = new Map(ledger.decisions.filter(decision => decision.phase === 20 && decision.target.resource === 'reading')
    .map(decision => [decision.id, decision]));

assert.equal(readings.length, 91, 'Leitura deve preservar 91 textos');
assert.equal(readings.reduce((sum, item) => sum + item.questions.length, 0), 181, 'a pergunta N4 recuperada deve totalizar 181 questões');
assert.deepEqual(Object.fromEntries(['N5', 'N4', 'N3', 'N2', 'N1'].map(level =>
    [level, readings.filter(item => item.referenceLevel === level).length])), { N5: 11, N4: 16, N3: 19, N2: 20, N1: 25 });
assert.equal(new Set(readings.map(item => item.id)).size, readings.length);

for (const item of readings) {
    assert.equal(item.editorialStatus, 'not-flagged', `${item.id}: aviso editorial residual`);
    assert.doesNotMatch(item.japaneseHtml, /<(?!\/?(?:ruby|rt)\b)[^>]+>/i, `${item.id}: marcação não permitida`);
    assert.equal((item.japaneseHtml.match(/<ruby>/g) || []).length, (item.japaneseHtml.match(/<\/ruby>/g) || []).length, `${item.id}: ruby desequilibrado`);
    assert.equal((item.japaneseHtml.match(/<rt>/g) || []).length, (item.japaneseHtml.match(/<\/rt>/g) || []).length, `${item.id}: rt desequilibrado`);
    item.questions.forEach(question => assert.equal(question.options[question.answerIndex], question.answer, `${item.id}: gabarito fora das opções`));

    const decision = derived.get(`ja-phase20-reading-${item.id}`);
    assert.ok(decision, `${item.id}: decisão derivada ausente`);
    assert.ok(['approved', 'corrected'].includes(decision.state), `${item.id}: leitura derivada inconclusiva`);
    assert.equal(decision.finalHash, digest(item), `${item.id}: hash derivado divergente`);
    assert.ok(decision.references.length >= 2, `${item.id}: evidência insuficiente`);
}

assert.equal(canonical.length, 272, '91 textos e 181 perguntas devem possuir decisão canônica');
const canonicalStates = canonical.reduce((result, decision) => {
    result[decision.state] = (result[decision.state] || 0) + 1;
    return result;
}, {});
assert.deepEqual(canonicalStates, { corrected: 71, approved: 201 });
for (const decision of canonical) {
    assert.equal(decision.resolutionPhase, '22B', `${decision.id}: fase de resolução divergente`);
    assert.ok(decision.references.length >= 2, `${decision.id}: consenso não localizado`);
    assert.equal(new Set(decision.references.map(reference => reference.sourceId)).size, 2, `${decision.id}: fontes não independentes`);
}

const readingStates = [...derived.values()].reduce((result, decision) => {
    result[decision.state] = (result[decision.state] || 0) + 1;
    return result;
}, {});
assert.deepEqual(readingStates, { corrected: 54, approved: 37 });

const n4Recovered = readings.find(item => item.id === 'ja-reading-n4-1').questions[0];
assert.equal(n4Recovered.answer, 'Muito gentis (とても親切)');
assert.equal(jlpt.length, 1061);
assert.equal(jlpt.filter(item => item.origin === 'reading-comprehension').length, 181);
assert.equal(jlpt.filter(item => item.origin === 'reading-comprehension' && item.editorialStatus === 'not-flagged').length, 181);

const runtime = JSON.stringify(readings);
for (const forbidden of [
    /Beteu água|Beteu chá|tanto親切|tanoshimashu|chikakata|wa互i|頼まれた務む|強い台風和大雨/,
    /kijiti|kite踊rimasu|sharp na shiten|bassera-re|agetasu|iiiwatasaremasu|shikon-sakugo/,
    /自信を持つて|未来の季節|全社を挙げて|不満が醸造|粗末な風合い|1,267字の異なる漢字を学びました/
]) assert.doesNotMatch(runtime, forbidden, `resíduo editorial: ${forbidden}`);

assert.match(runtime, /147字の異なる漢字が収録/);
assert.match(runtime, /1,267字の異なる漢字が収録/);
assert.match(runtime, /仮説を検証/);
assert.match(runtime, /国を挙げて支援/);
assert.match(fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8'), /idiomas-academy-v51/);

console.log('Fase 22B: 91/91 textos e 181/181 questões de Leitura sustentados; 37 leituras aprovadas, 54 corrigidas e nenhuma pendência.');
