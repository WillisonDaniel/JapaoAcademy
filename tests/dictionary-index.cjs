'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.join(ROOT, 'database', 'ja-JP', 'data_dicionario_index.js');
const WRITE_MODE = process.argv.includes('--write');

const DATASETS = [
    'database/ja-JP/data_curso_a1.js',
    'database/ja-JP/data_curso_a2.js',
    'database/ja-JP/data_curso_b1.js',
    'database/ja-JP/data_curso_b2.js',
    'database/ja-JP/data_hiragana.js',
    'database/ja-JP/data_katakana.js',
    'database/ja-JP/data_kanji_n5.js',
    'database/ja-JP/data_kanji_n4.js',
    'database/ja-JP/data_kanji_n3.js',
    'database/ja-JP/data_kanji_n2.js',
    'database/ja-JP/data_kanji_n1.js'
];

function read(relativePath) {
    return fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
}

function runFile(context, relativePath) {
    vm.runInContext(read(relativePath), context, { filename: relativePath });
}

function buildGlossary() {
    const context = {
        console: { log() {}, warn() {}, error() {} },
        Date,
        Math,
        JSON,
        URL,
        document: {
            body: {
                getAttribute: name => name === 'data-lang' ? 'japanese' : (name === 'data-mode' ? 'dict' : null),
                classList: { contains: () => true }
            },
            getElementById: () => null,
            querySelectorAll: () => []
        },
        location: { pathname: '/html/ja-JP/dicionario.html' },
        localStorage: { getItem: () => null, setItem() {}, removeItem() {} }
    };
    context.window = context;
    context.globalThis = context;
    vm.createContext(context);

    DATASETS.forEach(file => runFile(context, file));
    runFile(context, 'js/course/moduleNormalizer.js');
    runFile(context, 'js/core/state.js');
    runFile(context, 'js/core/dictionary.js');
    context.compilarGlossarioUniversal();

    const glossary = JSON.parse(JSON.stringify(context.AppState.dictionary.universalGlossary));
    assert.equal(glossary.length, 3271, 'o índice deve conter exatamente 3271 entradas');
    assert.ok(glossary.every(item => item && typeof item.primary === 'string' && item.primary.trim()), 'há entrada sem termo principal');
    return glossary;
}

function renderIndex(glossary) {
    return '// Arquivo gerado por tests/dictionary-index.cjs. Não editar manualmente.\n' +
        `const JAPANESE_DICTIONARY_INDEX = Object.freeze(${JSON.stringify(glossary)});\n\n` +
        "if (typeof window !== 'undefined') {\n" +
        '    window.JAPANESE_DICTIONARY_INDEX = JAPANESE_DICTIONARY_INDEX;\n' +
        '}\n';
}

const expected = renderIndex(buildGlossary());
if (WRITE_MODE) {
    fs.writeFileSync(OUTPUT, expected, 'utf8');
    console.log(`Índice do dicionário atualizado: ${path.relative(ROOT, OUTPUT)}`);
} else {
    assert.ok(fs.existsSync(OUTPUT), 'índice do dicionário ausente; execute npm run index:dictionary');
    assert.equal(fs.readFileSync(OUTPUT, 'utf8'), expected, 'índice do dicionário desatualizado; execute npm run index:dictionary');
    console.log('✓ índice leve do dicionário contém 3271 entradas e está sincronizado com os datasets japoneses');
}
