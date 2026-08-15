'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.join(ROOT, 'database', 'ja-JP', 'data_minigame_kanji_index.js');
const WRITE_MODE = process.argv.includes('--write');

const SOURCES = [
    ['kanji_n5', 'Kanji N5', 'database/ja-JP/data_kanji_n5.js', 'kanjiN5Data'],
    ['kanji_n4', 'Kanji N4', 'database/ja-JP/data_kanji_n4.js', 'kanjiN4Data'],
    ['kanji_n3', 'Kanji N3', 'database/ja-JP/data_kanji_n3.js', 'kanjiN3Data'],
    ['kanji_n2', 'Kanji N2', 'database/ja-JP/data_kanji_n2.js', 'kanjiN2Data'],
    ['kanji_n1', 'Kanji N1', 'database/ja-JP/data_kanji_n1.js', 'kanjiN1Data']
];

function read(relativePath) {
    return fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
}

function loadDataset(relativePath, variableName) {
    const context = { console: { log() {}, warn() {}, error() {} } };
    context.window = context;
    context.globalThis = context;
    vm.createContext(context);
    if (/data_kanji_n[123]\.js$/.test(relativePath)) {
        vm.runInContext(read('js/kanji/romaji-draft.js'), context, { filename: 'js/kanji/romaji-draft.js' });
    }
    vm.runInContext(`${read(relativePath)}\nglobalThis.__dataset = ${variableName};`, context, { filename: relativePath });
    return JSON.parse(JSON.stringify(context.__dataset));
}

function getReading(item) {
    if (item.kunyomi && item.kunyomi !== '-') return item.kunyomi.split('/')[0].split('(')[0].trim().toLowerCase();
    if (item.onyomi && item.onyomi !== '-') return item.onyomi.split('/')[0].split('(')[0].trim().toLowerCase();
    return String(item.meaning || '').toLowerCase();
}

function buildIndex() {
    const index = {};
    let total = 0;

    for (const [levelId, label, relativePath, variableName] of SOURCES) {
        const dataset = loadDataset(relativePath, variableName);
        assert.ok(Array.isArray(dataset), `${relativePath}: dataset inválido`);
        index[levelId] = {};
        for (let moduleNumber = 1; moduleNumber <= 10; moduleNumber++) {
            const module = dataset.find(item => item && item.module === moduleNumber);
            const cards = module && Array.isArray(module.kanjis) && !module.isReviewTable
                ? module.kanjis.map(item => ({
                    k: item.character || item.kanji,
                    r: getReading(item),
                    m: item.meaning,
                    s: 'N',
                    c: `${label} • Mód ${moduleNumber}`
                }))
                : [];
            assert.ok(cards.every(card => card.k && card.r && card.m), `${relativePath}: cartão incompleto no módulo ${moduleNumber}`);
            index[levelId][moduleNumber] = cards;
            total += cards.length;
        }
    }

    assert.equal(total, 1015, 'o índice do minigame deve conter exatamente 1015 cartões');
    return { index, total };
}

function renderIndex(index) {
    return '// Arquivo gerado por tests/minigame-index.cjs. Não editar manualmente.\n' +
        `const JAPANESE_MINIGAME_KANJI_INDEX = Object.freeze(${JSON.stringify(index)});\n\n` +
        "if (typeof window !== 'undefined') {\n" +
        '    window.JAPANESE_MINIGAME_KANJI_INDEX = JAPANESE_MINIGAME_KANJI_INDEX;\n' +
        '}\n';
}

const built = buildIndex();
const expected = renderIndex(built.index);
if (WRITE_MODE) {
    fs.writeFileSync(OUTPUT, expected, 'utf8');
    console.log(`Índice do minigame atualizado: ${path.relative(ROOT, OUTPUT)} (${built.total} cartões)`);
} else {
    assert.ok(fs.existsSync(OUTPUT), 'índice do minigame ausente; execute npm run index:minigame');
    assert.equal(fs.readFileSync(OUTPUT, 'utf8'), expected, 'índice do minigame desatualizado; execute npm run index:minigame');
    console.log(`✓ índice leve do minigame contém ${built.total} cartões e está sincronizado com os datasets de Kanji`);
}
