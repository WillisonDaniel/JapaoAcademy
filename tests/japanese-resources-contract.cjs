'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const results = [];
const read = relativePath => fs.readFileSync(path.join(ROOT, relativePath), 'utf8');

function test(name, fn) {
    try {
        fn();
        results.push({ name, ok: true });
        console.log(`\u2713 ${name}`);
    } catch (error) {
        results.push({ name, ok: false });
        console.error(`\u2717 ${name}\n  ${error.message}`);
    }
}

function loadExpression(relativePath, expression) {
    const context = { console: { log() {}, warn() {}, error() {} } };
    context.window = context;
    context.globalThis = context;
    vm.createContext(context);
    vm.runInContext(`${read(relativePath)}\n;globalThis.__value = ${expression};`, context, { filename: relativePath });
    return context.__value;
}

test('registro central cobre os sete recursos japoneses', () => {
    const registry = loadExpression('js/core/constants.js', 'JAPANESE_RESOURCE_REGISTRY');
    assert.deepEqual(Object.keys(registry), ['hiragana', 'katakana', 'kanji_n5', 'kanji_n4', 'kanji_n3', 'kanji_n2', 'kanji_n1']);
    assert.equal(registry.kanji_n5.deckType, 'kanji');
    assert.equal(registry.kanji_n1.route, 'kanji_n1.html');
    assert.equal(registry.katakana.minigameMode, 'katakana');
});

test('chaves persistidas dos decks japoneses permanecem inalteradas', () => {
    const source = read('js/srs/engine.js');
    const expected = {
        hiragana: 'ja_srs_hiragana_deck', katakana: 'ja_srs_katakana_deck',
        kanji: 'ja_srs_kanji_deck', kanji_n4: 'ja_srs_kanji_n4_deck',
        kanji_n3: 'ja_srs_kanji_n3_deck', kanji_n2: 'ja_srs_kanji_n2_deck', kanji_n1: 'ja_srs_kanji_n1_deck'
    };
    Object.entries(expected).forEach(([type, key]) => assert.match(source, new RegExp(`t === '${type}'.*return '${key}'`)));
});

test('sete exemplos N5 saneados permanecem rastreáveis sem exceção ativa', () => {
    const n5 = read('database/ja-JP/data_kanji_n5.js');
    ['訓読みで「食べる」と読みます。', '訓読みで「見る」と読みます。', '音読みの例は「水曜日」です。',
        '音読みの例は「学校」です。', '部首の木の下で人が休みます。', '部首として河と海を比べます。']
        .forEach(sentence => assert.ok(n5.includes(sentence), sentence));
    const occurrences = JSON.parse(read('tests/JAPANESE_EDITORIAL_OCCURRENCES.json'));
    assert.equal(occurrences.summary.byLevel.N5 || 0, 0);
    assert.equal(occurrences.summary.byLevel.N4 || 0, 0);
    assert.equal(occurrences.summary.byRule['reading-pending-human-review'] || 0, 0);
    assert.equal(occurrences.summary.bySeverity.allowed, 0);
    const ledger = JSON.parse(read('tests/JAPANESE_EDITORIAL_LEDGER.json'));
    assert.ok(ledger.decisions.some(decision => decision.id === 'ja-n5-m01-kanji-00-example-01' && decision.state === 'corrected'));
});

test('snapshots estruturais N5 e N4 preservam modulos, itens e quizzes', () => {
    const n5 = loadExpression('database/ja-JP/data_kanji_n5.js', 'kanjiN5Data');
    const n4 = loadExpression('database/ja-JP/data_kanji_n4.js', 'kanjiN4Data');
    const summarize = modules => JSON.parse(JSON.stringify(modules.map(module => [module.module, (module.kanjis || []).length, (module.quiz || []).length, Boolean(module.isReviewTable)])));
    assert.deepEqual(summarize(n5), [[1,6,10,false],[2,14,10,false],[3,15,10,false],[4,10,10,false],[5,10,10,false],[6,10,10,false],[7,10,10,false],[8,10,10,false],[9,11,10,false],[10,9,10,false],[11,96,0,true]]);
    assert.deepEqual(summarize(n4), [[1,10,10,false],[2,10,10,false],[3,10,10,false],[4,10,10,false],[5,10,10,false],[6,10,10,false],[7,10,10,false],[8,10,10,false],[9,10,10,false],[10,10,10,false],[11,10,10,false],[12,10,10,false],[13,10,10,false],[14,10,10,false],[15,10,10,false],[16,139,0,true]]);
});

test('acoes finais de Kana conectam SRS, minigame e dicionario', () => {
    const render = read('js/kanji/kanji-render.js');
    assert.match(render, /moduleIndex !== moduleCount - 1/);
    assert.match(render, /iniciarSessaoSRS\(resource\.deckType\)/);
    assert.match(render, /minigame\.html\?mode=\$\{resource\.minigameMode\}/);
    assert.match(render, /dicionario\.html\?cat=\$\{resource\.id\}/);
});

test('dicionario leve oferece rotas validas sem carregar datasets integrais', () => {
    const dictionary = read('js/core/dictionary.js');
    const html = read('html/ja-JP/dicionario.html');
    const index = loadExpression('database/ja-JP/data_dicionario_index.js', 'JAPANESE_DICTIONARY_INDEX');
    assert.equal(index.length, 3271);
    assert.match(dictionary, /getDictionaryJapaneseResource/);
    assert.match(dictionary, /Abrir trilha/);
    assert.match(dictionary, /\?review=1/);
    assert.doesNotMatch(html, /data_kanji_n[1-5]\.js|data_hiragana\.js|data_katakana\.js/);
});

test('erro real do minigame alimenta o caderno; acerto nao o altera', () => {
    const game = read('js/game/minigames.js');
    const errorBranch = game.slice(game.indexOf('} else {', game.indexOf('function processGameResult')), game.indexOf('function checkTypingAnswer'));
    assert.match(errorBranch, /registrarErroSRS\(gCard\.k\)/);
    const successBranch = game.slice(game.indexOf('if \(isCorrect\)'), game.indexOf('} else {', game.indexOf('if \(isCorrect\)')));
    assert.doesNotMatch(successBranch, /registrarErroSRS/);
    assert.match(read('js/core/constants.js'), /function registrarErroSRS\(itemId\)/);
});

test('escrita registra somente atividade real e preserva estados indisponiveis', () => {
    const canvas = read('js/kanji/kanji-canvas.js');
    const check = canvas.slice(canvas.indexOf('function verificarTracoCanvas'), canvas.indexOf('\nfunction ', canvas.indexOf('function verificarTracoCanvas') + 10));
    assert.match(check, /registrarAtividadeDiaria/);
    assert.doesNotMatch(check, /processarAvaliacaoSRS|registrarErroSRS/);
    assert.match(canvas, /Ordem de traços indisponível offline para este caractere/);
    assert.match(canvas, /Não foi possível carregar a ordem de traços deste caractere/);
    assert.doesNotMatch(canvas, /fallback.*(?:stroke|traço)|generic.*(?:stroke|traço)/i);
});

const failed = results.filter(result => !result.ok);
console.log(`\nRecursos japoneses: ${results.length - failed.length}/${results.length} contratos aprovados.`);
if (failed.length) process.exit(1);
