'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const WRITE_MODE = process.argv.includes('--write');

const DICTIONARIES = [
    {
        code: 'ja-JP',
        language: 'japanese',
        mode: 'dict',
        pathname: '/html/ja-JP/dicionario.html',
        globalName: 'JAPANESE_DICTIONARY_INDEX',
        output: 'database/ja-JP/data_dicionario_index.js',
        expectedCount: 3271,
        datasets: [
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
        ]
    },
    {
        code: 'en-US',
        language: 'english',
        mode: 'pronuncia',
        pathname: '/html/en-US/dicionario_ingles.html',
        globalName: 'ENGLISH_DICTIONARY_INDEX',
        output: 'database/en-US/data_dicionario_index.js',
        expectedCount: 647,
        datasets: [
            'database/en-US/data_english_a1.js',
            'database/en-US/data_english_a2.js',
            'database/en-US/data_english_b1.js',
            'database/en-US/data_english_b2.js',
            'database/en-US/data_phrasal_verbs.js',
            'database/en-US/data_pronunciation.js'
        ]
    },
    {
        code: 'es-ES',
        language: 'spanish',
        mode: 'espanhol',
        pathname: '/html/es-ES/espanhol_dicionario.html',
        globalName: 'SPANISH_DICTIONARY_INDEX',
        output: 'database/es-ES/data_dicionario_index.js',
        expectedCount: 1139,
        datasets: [
            'database/es-ES/data_espanhol_a1.js',
            'database/es-ES/data_espanhol_a2.js',
            'database/es-ES/data_espanhol_b1.js',
            'database/es-ES/data_espanhol_b2.js',
            'database/es-ES/data_espanhol_falsos_amigos.js',
            'database/es-ES/data_espanhol_fonetica_recursos.js',
            'database/es-ES/data_espanhol_dicionario.js'
        ],
        buildSupplement(context) {
            return {
                alphabet: vm.runInContext('DICIONARIO_ESPANHOL_DADOS.alfabeto', context),
                regionalismos: vm.runInContext(
                    '(FONETICA_RECURSOS_ESPANHOL_DADOS.regionalismos && FONETICA_RECURSOS_ESPANHOL_DADOS.regionalismos.length) ? FONETICA_RECURSOS_ESPANHOL_DADOS.regionalismos : DICIONARIO_ESPANHOL_DADOS.regionalismos',
                    context
                )
            };
        },
        supplementGlobal: 'SPANISH_DICTIONARY_TABLES'
    },
    {
        code: 'ru-RU',
        language: 'russian',
        mode: 'russo',
        pathname: '/html/ru-RU/russo_dicionario.html',
        globalName: 'RUSSIAN_DICTIONARY_INDEX',
        output: 'database/ru-RU/data_dicionario_index.js',
        expectedCount: 728,
        datasets: [
            'database/ru-RU/data_russo_cirilico.js',
            'database/ru-RU/data_curso_russo_a1.js',
            'database/ru-RU/data_curso_russo_a2.js',
            'database/ru-RU/data_curso_russo_b1.js',
            'database/ru-RU/data_curso_russo_b2.js',
            'database/ru-RU/data_russo_dicionario.js'
        ],
        buildSupplement(context) {
            return vm.runInContext('CASOS_GRAMATICAIS_RUSSO', context);
        },
        supplementGlobal: 'RUSSIAN_DICTIONARY_CASES'
    }
];

function read(relativePath) {
    return fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
}

function runFile(context, relativePath) {
    vm.runInContext(read(relativePath), context, { filename: relativePath });
}

function createContext(config) {
    const context = {
        console: { log() {}, warn() {}, error() {} },
        Date,
        Math,
        JSON,
        URL,
        document: {
            body: {
                getAttribute: name => name === 'data-lang' ? config.language : (name === 'data-mode' ? config.mode : null),
                classList: { contains: () => true }
            },
            getElementById: () => null,
            querySelectorAll: () => []
        },
        location: { pathname: config.pathname },
        localStorage: { getItem: () => null, setItem() {}, removeItem() {} }
    };
    context.window = context;
    context.globalThis = context;
    vm.createContext(context);
    return context;
}

function buildDictionary(config) {
    const context = createContext(config);
    config.datasets.forEach(file => runFile(context, file));
    runFile(context, 'js/course/moduleNormalizer.js');
    runFile(context, 'js/core/state.js');
    runFile(context, 'js/core/dictionary.js');
    context.compilarGlossarioUniversal();

    const glossary = JSON.parse(JSON.stringify(context.AppState.dictionary.universalGlossary));
    if (config.expectedCount !== null) {
        assert.equal(glossary.length, config.expectedCount, `${config.code}: quantidade inesperada de entradas`);
    }
    assert.ok(glossary.length > 0, `${config.code}: indice vazio`);
    assert.ok(glossary.every(item => item && typeof item.primary === 'string' && item.primary.trim()), `${config.code}: ha entrada sem termo principal`);

    const supplement = config.buildSupplement
        ? JSON.parse(JSON.stringify(config.buildSupplement(context)))
        : null;
    return { glossary, supplement };
}

function renderIndex(config, data) {
    let output = '// Arquivo gerado por tests/dictionary-index.cjs. Nao editar manualmente.\n' +
        `const ${config.globalName} = Object.freeze(${JSON.stringify(data.glossary)});\n`;

    if (config.supplementGlobal) {
        output += `const ${config.supplementGlobal} = Object.freeze(${JSON.stringify(data.supplement)});\n`;
    }

    output += "\nif (typeof window !== 'undefined') {\n" +
        `    window.${config.globalName} = ${config.globalName};\n`;
    if (config.supplementGlobal) {
        output += `    window.${config.supplementGlobal} = ${config.supplementGlobal};\n`;
    }
    output += '}\n';
    return output;
}

const summaries = [];
DICTIONARIES.forEach(config => {
    const data = buildDictionary(config);
    const expected = renderIndex(config, data);
    const outputPath = path.join(ROOT, config.output);

    if (WRITE_MODE) {
        fs.writeFileSync(outputPath, expected, 'utf8');
    } else {
        assert.ok(fs.existsSync(outputPath), `${config.code}: indice ausente; execute npm run index:dictionary`);
        assert.equal(fs.readFileSync(outputPath, 'utf8'), expected, `${config.code}: indice desatualizado; execute npm run index:dictionary`);
    }
    summaries.push(`${config.code}=${data.glossary.length}`);
});

console.log(`\u2713 indices leves dos dicionarios sincronizados (${summaries.join(', ')})`);
