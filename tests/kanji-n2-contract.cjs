'use strict';

const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { spawnSync } = require('node:child_process');

const ROOT = path.resolve(__dirname, '..');
const read = relativePath => fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
const context = { console };
context.window = context;
context.globalThis = context;
vm.createContext(context);
vm.runInContext(`${read('database/ja-JP/data_kanji_n2.js')}\nglobalThis.__data = kanjiN2Data;`, context, { filename: 'data_kanji_n2.js' });
const modules = JSON.parse(JSON.stringify(context.__data));
const JAPANESE = /[\u3040-\u30ff\u3400-\u9fff]/u;

function run(name, fn) {
    try { fn(); console.log(`✓ ${name}`); }
    catch (error) { console.error(`✗ ${name}`); throw error; }
}

function complete(content) {
    return content && ['displayText', 'audioText', 'furigana', 'romaji', 'translation', 'scenario']
        .every(field => Object.hasOwn(content, field));
}

run('inventario N2 permanece em 21 modulos, 375 registros e 750 exemplos', () => {
    const entries = modules.flatMap(module => module.kanjis || []);
    const examples = entries.flatMap(kanji => kanji.examples || []);
    assert.equal(modules.length, 21);
    assert.equal(entries.length, 375);
    assert.equal(new Set(entries.map(kanji => kanji.character)).size, 342);
    assert.equal(examples.length, 750);
});

run('todos os exemplos N2 possuem contrato japones completo e rastreavel', () => {
    modules.forEach(module => {
        assert.equal(module.editorialReview.status, 'pending-human-review');
        (module.kanjis || []).forEach(kanji => (kanji.examples || []).forEach(example => {
            assert.ok(complete(example.content));
            assert.match(example.content.displayText, JAPANESE);
            assert.doesNotMatch(example.content.displayText, /[A-Za-z]/);
            assert.equal(example.content.audioText, example.content.displayText);
            assert.ok(example.content.displayText.includes(kanji.character), `${module.module}/${kanji.character}: alvo ausente`);
            assert.equal(example.content.romaji, example.sentence);
            assert.equal(example.content.translation, example.sentenceMeaning);
            assert.equal(example.editorialReview.status, 'pending-human-review');
            assert.equal(example.editorialReview.targetReplaced, true);
        }));
    });
});

run('dataset N2 é canônico e página kanji_n2.html não carrega romaji-draft', () => {
    const rawData = read('database/ja-JP/data_kanji_n2.js');
    const htmlPage = read('html/ja-JP/kanji_n2.html');
    assert.doesNotMatch(rawData, /KanjiRomajiDraft/);
    assert.doesNotMatch(rawData, /romaji-draft/);
    assert.doesNotMatch(htmlPage, /romaji-draft\.js/);
});

run('gramatica N2 possui 20 contratos sem Romaji no texto principal', () => {
    const contracts = modules.filter(module => module.grammar && module.grammar.content);
    assert.equal(contracts.length, 20);
    contracts.forEach(module => {
        assert.ok(complete(module.grammar.content));
        assert.match(module.grammar.content.displayText, JAPANESE);
        assert.doesNotMatch(module.grammar.content.displayText, /[A-Za-z]/);
    });
});

function stripEditorial(value) {
    if (Array.isArray(value)) return value.map(stripEditorial);
    if (!value || typeof value !== 'object') return value;
    const result = {};
    for (const [key, item] of Object.entries(value)) {
        if (['content', 'editorialReview'].includes(key)) continue;
        result[key] = stripEditorial(item);
    }
    return result;
}

run('snapshot estrutural N2 preserva tudo fora das correcoes autorizadas', () => {
    const structural = stripEditorial(modules);
    structural.forEach(module => { if (module.readingText) module.readingText = '__AUTHORIZED_READING_TEXT__'; });
    structural[4].kanjis[7].onyomi = '__AUTHORIZED_READING__';
    structural[14].kanjis[3].onyomi = '__AUTHORIZED_READING__';
    structural[20].description = '__AUTHORIZED_REVIEW_TEXT__';
    const hash = crypto.createHash('sha256').update(JSON.stringify(structural)).digest('hex');
    assert.equal(hash, '79f0d8d544479d7d046fd839c39012a0dbfb04f0ac33c4ed83101dedcc44c0ed');
});

run('leituras e revisao N2 usam Kana e inventario real', () => {
    assert.equal(modules[4].kanjis[7].onyomi, 'キン (KIN)');
    assert.equal(modules[14].kanjis[3].onyomi, 'ダツ (DATSU)');
    assert.match(modules[20].description, /375 registros/);
    assert.doesNotMatch(modules[20].description, /380|todos os .* aprendidos|dom[ií]nio/i);
});

run('auditoria e tabela humana registram N2 sem aprova-lo', () => {
    const report = JSON.parse(read('tests/JAPANESE_EDITORIAL_OCCURRENCES.json'));
    assert.equal(report.summary.bySeverity.blocking, 0);
    assert.equal(report.occurrences.filter(item => item.level === 'N2').length, 0);
    const review = read('tests/JAPANESE_KANJI_N2_HUMAN_REVIEW.md');
    assert.match(review, /pending-human-review/);
    assert.doesNotMatch(review, /\| approved \|/i);
});

run('contrato N3 permanece identico apos compartilhar o helper', () => {
    const result = spawnSync(process.execPath, [path.join(ROOT, 'tests', 'kanji-n3-contract.cjs')], { encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr || result.stdout);
    assert.match(result.stdout, /7\/7 contratos Kanji N3/);
});

console.log('\n8/8 contratos Kanji N2 aprovados mecanicamente.');
