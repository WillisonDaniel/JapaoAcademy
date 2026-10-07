'use strict';
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { spawnSync } = require('node:child_process');
const ROOT = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(ROOT, file), 'utf8');
const context = { console };
context.window = context; context.globalThis = context; vm.createContext(context);
vm.runInContext(`${read('database/ja-JP/data_kanji_n1.js')}\nglobalThis.__data=kanjiN1Data;`, context);
const modules = JSON.parse(JSON.stringify(context.__data));
const JAPANESE = /[\u3040-\u30ff\u3400-\u9fff]/u;
function run(name, fn) { try { fn(); console.log(`✓ ${name}`); } catch (error) { console.error(`✗ ${name}`); throw error; } }
function complete(content) { return content && ['displayText','audioText','furigana','romaji','translation','scenario'].every(field => Object.hasOwn(content, field)); }

run('inventario N1 permanece em 25 modulos, 990 registros e 1980 exemplos', () => {
    const entries = modules.flatMap(module => module.kanjis || []);
    assert.equal(modules.length, 25); assert.equal(entries.length, 990);
    assert.equal(new Set(entries.map(item => item.character)).size, 822);
    assert.equal(entries.flatMap(item => item.examples || []).length, 1980);
});

run('todos os exemplos N1 possuem contrato japones completo e rastreavel', () => modules.forEach(module => {
    assert.equal(module.editorialReview.status, 'pending-human-review');
    (module.kanjis || []).forEach(kanji => (kanji.examples || []).forEach(example => {
        assert.ok(complete(example.content)); assert.match(example.content.displayText, JAPANESE);
        assert.doesNotMatch(example.content.displayText, /[A-Za-z]/);
        assert.equal(example.content.audioText, example.content.displayText);
        assert.ok(example.content.displayText.includes(kanji.character), `${module.module}/${kanji.character}: alvo ausente`);
        assert.equal(example.content.romaji, example.sentence); assert.equal(example.content.translation, example.sentenceMeaning);
        assert.equal(example.editorialReview.status, 'pending-human-review'); assert.equal(example.editorialReview.targetReplaced, true);
    }));
}));

run('gramatica N1 possui 24 contratos sem Romaji no texto principal', () => {
    const contracts = modules.filter(module => module.grammar && module.grammar.content);
    assert.equal(contracts.length, 24);
    contracts.forEach(module => { assert.ok(complete(module.grammar.content)); assert.match(module.grammar.content.displayText, JAPANESE); assert.doesNotMatch(module.grammar.content.displayText, /[A-Za-z]/); });
});

run('565 leituras mantêm 407 conversões mecânicas e 158 decisões editoriais rastreadas', () => {
    const reviews = modules.flatMap(module => (module.kanjis || []).flatMap(kanji => ['onyomi','kunyomi'].flatMap(field =>
        kanji.readingEditorialReview && kanji.readingEditorialReview[field] ? [{ field, value: kanji[field], ...kanji.readingEditorialReview[field] }] : [])));
    assert.equal(reviews.length, 565);
    assert.equal(reviews.filter(item => item.classification === 'mechanically-convertible-onyomi').length, 407);
    assert.equal(reviews.filter(item => item.status === 'corrected' && item.phase === '17').length, 158);
    reviews.filter(item => item.classification === 'mechanically-convertible-onyomi').forEach(item => {
        assert.equal(item.status, 'pending-human-review'); assert.match(item.value, /[ァ-ヶ]/u);
    });
    reviews.filter(item => item.status === 'corrected').forEach(item => {
        assert.ok(item.sourceIds.includes('edrdg-kanjidic2')); assert.notEqual(item.value, item.previousValue);
    });
});

function stripEditorial(value) { if (Array.isArray(value)) return value.map(stripEditorial); if (!value || typeof value !== 'object') return value; const result={}; for (const [key,item] of Object.entries(value)) { if (!['content','editorialReview','readingEditorialReview'].includes(key)) result[key]=stripEditorial(item); } return result; }
run('snapshot estrutural N1 preserva tudo fora dos contratos autorizados', () => {
    const structural = stripEditorial(modules);
    structural.forEach(module => { if (module.readingText) module.readingText = '__AUTHORIZED_READING_TEXT__'; });
    modules.forEach((module, mi) => (module.kanjis || []).forEach((kanji, ki) => {
        for (const field of Object.keys(kanji.readingEditorialReview || {})) structural[mi].kanjis[ki][field]='__AUTHORIZED_READING_CONTRACT__';
    }));
    const hash=crypto.createHash('sha256').update(JSON.stringify(structural)).digest('hex');
    assert.equal(hash, '780adec925c0fff2ccc59e64bc1a8c8689b7703c0dcca2c5389271b7dcbdd9aa');
});

run('auditoria zera exemplos e leituras objetivas N1 da Fase 17', () => {
    const report=JSON.parse(read('tests/JAPANESE_EDITORIAL_OCCURRENCES.json')); const n1=report.occurrences.filter(item=>item.level==='N1');
    assert.equal(report.summary.bySeverity.blocking,0); assert.equal(n1.filter(item=>item.rule.startsWith('kanji-example-')).length,0);
    assert.equal(n1.filter(item=>item.rule==='reading-latin-only').length,0); assert.equal(n1.filter(item=>item.rule==='reading-pending-human-review').length,0);
    const review=read('tests/JAPANESE_KANJI_N1_HUMAN_REVIEW.md'); assert.match(review,/\| corrected \|/i); assert.doesNotMatch(review,/ambiguous-or-foreign/);
});

run('dataset N1 é canônico e página kanji_n1.html não carrega romaji-draft', () => {
    const rawData = read('database/ja-JP/data_kanji_n1.js');
    const htmlPage = read('html/ja-JP/kanji_n1.html');
    assert.doesNotMatch(rawData, /KanjiRomajiDraft/);
    assert.doesNotMatch(rawData, /romaji-draft/);
    assert.doesNotMatch(htmlPage, /romaji-draft\.js/);
});

run('contratos N3 e N2 permanecem estaveis', () => ['kanji-n3-contract.cjs','kanji-n2-contract.cjs'].forEach(file => {
    const result=spawnSync(process.execPath,[path.join(ROOT,'tests',file)],{encoding:'utf8'}); assert.equal(result.status,0,result.stderr||result.stdout);
}));
console.log('\n8/8 contratos Kanji N1 aprovados mecanicamente.');
