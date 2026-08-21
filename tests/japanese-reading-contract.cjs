'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..'), results = [];
const read = file => fs.readFileSync(path.join(ROOT, file), 'utf8');
function test(name, fn) { try { fn(); results.push(true); console.log(`\u2713 ${name}`); } catch (error) { results.push(false); console.error(`\u2717 ${name}\n  ${error.message}`); } }
function indexData() { const context = {}; context.window = context; vm.createContext(context); vm.runInContext(`${read('database/ja-JP/data_leitura_index.js')}\n;globalThis.x=JAPANESE_READING_INDEX`, context); return JSON.parse(JSON.stringify(context.x)); }

test('biblioteca preserva snapshot real de 91 leituras Kanji', () => {
    const items = indexData(), counts = Object.fromEntries(['N5','N4','N3','N2','N1'].map(level => [level, items.filter(item => item.referenceLevel === level).length]));
    assert.equal(items.length, 91); assert.deepEqual(counts, { N5:11, N4:16, N3:19, N2:20, N1:25 });
    assert.equal(items.reduce((sum, item) => sum + item.questions.length, 0), 181);
    assert.equal(items.filter(item => item.editorialStatus === 'pending-human-review').length, 0);
    assert.equal(items.filter(item => item.editorialStatus === 'not-flagged').length, 91);
    assert.equal(new Set(items.map(item => item.id)).size, items.length);
});

test('textos mantem somente ruby/rt e questoes com resposta original valida', () => {
    indexData().forEach(item => {
        assert.doesNotMatch(item.japaneseHtml, /<(?!\/?(?:ruby|rt)\b)[^>]+>/i);
        assert.equal(item.charCount, Array.from(item.plainText).length);
        item.questions.forEach(question => assert.equal(question.options[question.answerIndex], question.answer));
    });
    assert.match(read('js/japanese/reading.js'), /sanitizeReadingHtml\(item\.japaneseHtml\)/);
    assert.match(read('js/japanese/reading.js'), /allowed = new Set\(\['RUBY', 'RT'\]\)/);
});

test('pagina usa indice leve e separa JLPT de CEFR', () => {
    const html = read('html/ja-JP/leitura.html');
    assert.match(html, /data_leitura_index\.js/); assert.doesNotMatch(html, /data_kanji_n[1-5]\.js/);
    assert.match(html, /referências pedagógicas JLPT/); assert.match(html, /não constituem listas oficiais/);
    assert.doesNotMatch(read('tests/japanese-reading-index.cjs'), /CEFR|A1.*N5|jlptToCefr/i);
});

test('apoios e audio usam conteudo existente sem gerar metricas', () => {
    const source = read('js/japanese/reading.js');
    assert.match(source, /getOpcoesLeitura/); assert.match(source, /tocarAudio\(item\.plainText, 'ja-JP', 0\.65\)/);
    assert.match(source, /Sem exercício de compreensão nesta leitura/); assert.match(source, /question\.options\.forEach/);
    assert.doesNotMatch(source, /adicionarXP|processarAvaliacaoSRS|registrarErroSRS|localStorage|readingSpeed|wordsPerMinute/);
});

test('origens e filtros sao rastreaveis sem contornar nivel Kanji', () => {
    const source = read('js/japanese/reading.js'), render = read('js/kanji/kanji-render.js');
    assert.match(source, /item\.route\}\?module=\$\{item\.moduleIndex\}/); assert.match(source, /URLSearchParams/);
    assert.match(render, /eNivelKanjiDesbloqueado\(level\)/); assert.match(render, /requestedModule < data\.length/);
});

test('hub e PWA incluem biblioteca, controlador e indice', () => {
    const sw = read('sw.js'); assert.match(read('hub_japones.html'), /html\/ja-JP\/leitura\.html/);
    assert.match(sw, /html\/ja-JP\/leitura\.html/); assert.match(sw, /js\/japanese\/reading\.js/); assert.match(sw, /database\/ja-JP\/data_leitura_index\.js/);
    assert.match(read('package.json'), /"index:reading:check"/);
});

const passed = results.filter(Boolean).length; console.log(`\nLeitura japonesa: ${passed}/${results.length} contratos aprovados.`); if (passed !== results.length) process.exit(1);
