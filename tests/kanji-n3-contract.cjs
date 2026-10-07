'use strict';

const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const read = relativePath => fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
const context = { console };
context.window = context;
context.globalThis = context;
vm.createContext(context);
vm.runInContext(`${read('database/ja-JP/data_kanji_n3.js')}\nglobalThis.__data = kanjiN3Data;`, context, { filename: 'data_kanji_n3.js' });
const modules = JSON.parse(JSON.stringify(context.__data));

function run(name, fn) {
    try {
        fn();
        console.log(`✓ ${name}`);
    } catch (error) {
        console.error(`✗ ${name}`);
        throw error;
    }
}

function complete(content) {
    return content && ['displayText', 'audioText', 'furigana', 'romaji', 'translation', 'scenario']
        .every(field => Object.hasOwn(content, field));
}

run('inventario N3 permanece em 19 modulos, 360 registros e 720 exemplos', () => {
    const entries = modules.flatMap(module => module.kanjis || []);
    const examples = entries.flatMap(kanji => kanji.examples || []);
    assert.equal(modules.length, 19);
    assert.equal(entries.length, 360);
    assert.equal(new Set(entries.map(kanji => kanji.character)).size, 353);
    assert.equal(examples.length, 720);
});

run('todos os exemplos N3 possuem contrato japones completo e rastreavel', () => {
    let pendingCount = 0;
    let correctedCount = 0;
    modules.forEach(module => {
        assert.equal(module.editorialReview.status, 'pending-human-review');
        (module.kanjis || []).forEach(kanji => {
            (kanji.examples || []).forEach(example => {
                assert.ok(complete(example.content));
                assert.match(example.content.displayText, /[\u3040-\u30ff\u3400-\u9fff]/u);
                assert.doesNotMatch(example.content.displayText, /[A-Za-z]/);
                assert.equal(example.content.audioText, example.content.displayText);
                assert.ok(example.content.displayText.includes(kanji.character), `${module.module}/${kanji.character}: alvo ausente`);
                assert.equal(example.content.romaji, example.sentence);
                assert.equal(example.content.translation, example.sentenceMeaning);
                assert.ok(['pending-human-review', 'corrected'].includes(example.editorialReview.status));
                if (example.editorialReview.status === 'corrected') correctedCount++;
                else pendingCount++;
                assert.equal(example.editorialReview.targetReplaced, true);
            });
        });
    });
    assert.equal(correctedCount + pendingCount, 720, 'Total de exemplos N3 deve ser 720');
    assert.equal(correctedCount, 16, 'Quantidade de exemplos N3 corrigidos deve ser 16');
    assert.equal(pendingCount, 704, 'Quantidade de exemplos N3 pendentes deve ser 704');
});

run('dataset N3 é canônico e página kanji_n3.html não carrega romaji-draft', () => {
    const rawData = read('database/ja-JP/data_kanji_n3.js');
    const htmlPage = read('html/ja-JP/kanji_n3.html');
    assert.doesNotMatch(rawData, /KanjiRomajiDraft/);
    assert.doesNotMatch(rawData, /converterFraseRomajiN3/);
    assert.doesNotMatch(htmlPage, /romaji-draft\.js/);
});

run('gramatica N3 possui 18 contratos sem Romaji no texto principal', () => {
    const grammarContracts = modules.filter(module => module.grammar && module.grammar.content);
    assert.equal(grammarContracts.length, 18);
    grammarContracts.forEach(module => {
        assert.ok(complete(module.grammar.content));
        assert.match(module.grammar.content.displayText, /[\u3040-\u30ff\u3400-\u9fff]/u);
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

run('snapshot estrutural N3 preserva tudo fora das correcoes autorizadas', () => {
    const structural = stripEditorial(modules);
    structural.forEach(module => { if (module.readingText) module.readingText = '__AUTHORIZED_READING_TEXT__'; });
    structural[8].kanjis[3].onyomi = '__AUTHORIZED_READING__';
    structural[12].kanjis[11].onyomi = '__AUTHORIZED_READING__';
    const review = structural[18];
    review.description = '__AUTHORIZED_REVIEW_TEXT__';
    for (const field of ['title', 'explanation', 'example', 'translation']) review.grammar[field] = '__AUTHORIZED_REVIEW_TEXT__';
    const hash = crypto.createHash('sha256').update(JSON.stringify(structural)).digest('hex');
    assert.equal(hash, 'c3f7b378adbf6961db8d026e8b376d0ce8946c778cc65c9b51735453467db1e1');
});

run('leituras objetivas e modulo de revisao nao alegam dominio integral', () => {
    assert.equal(modules[8].kanjis[3].onyomi, 'ボウ (BOU) / バク (BAKU)');
    assert.equal(modules[12].kanjis[11].onyomi, 'ゾウ (ZOU)');
    assert.doesNotMatch(JSON.stringify(modules[18]), /370|dom[ií]nio|dominad|mastered/i);
    assert.match(modules[18].grammar.example, /N3の漢字を復習します/);
});

run('auditoria e tabela humana registram N3 sem aprova-lo', () => {
    const report = JSON.parse(read('tests/JAPANESE_EDITORIAL_OCCURRENCES.json'));
    assert.equal(report.summary.bySeverity.blocking, 0);
    assert.equal(report.occurrences.filter(item => item.level === 'N3').length, 0);
    const review = read('tests/JAPANESE_KANJI_N3_HUMAN_REVIEW.md');
    assert.match(review, /pending-human-review/);
    assert.doesNotMatch(review, /\| approved \|/i);
});

console.log('\n7/7 contratos Kanji N3 aprovados mecanicamente.');
