'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ROOT = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(ROOT, file), 'utf8');
const tests = [];
const test = (name, fn) => tests.push([name, fn]);
function indexData() { const sandbox = {}; sandbox.window = sandbox; vm.createContext(sandbox); vm.runInContext(`${read('database/ja-JP/data_gramatica_index.js')}\n;globalThis.x=JAPANESE_GRAMMAR_INDEX`, sandbox); return JSON.parse(JSON.stringify(sandbox.x)); }

test('índice preserva somente referências gramaticais explícitas e rastreáveis', () => {
    const data = indexData(); assert.equal(data.references.length, 194); assert.equal(data.forms.length, 13);
    assert.equal(data.references.filter(item => item.framework === 'CEFR').length, 105); assert.equal(data.references.filter(item => item.framework === 'JLPT').length, 89);
    data.references.forEach(item => { assert.ok(item.title && item.rule && item.moduleId && item.route); assert.ok(['CEFR', 'JLPT'].includes(item.framework)); });
});

test('CEFR e JLPT permanecem taxonomias independentes e sem classificação verbal inferida', () => {
    const data = indexData(); data.references.forEach(item => assert.equal(item.framework === 'CEFR', /^[AB][12]$/.test(item.level)));
    data.references.forEach(item => assert.doesNotMatch(Object.keys(item).join(' '), /cefrEquivalent|jlptEquivalent|verbGroup|transitivity|irregularity/i));
    assert.ok(data.references.every(item => item.category === 'sem-categoria'));
});

test('lookup contém apenas transformações com fonte explícita e falha segura para desconhecidas', () => {
    const data = indexData(), source = read('js/japanese/grammar.js'); data.forms.forEach(form => { assert.ok(form.input && form.output && form.referenceId); assert.ok(data.references.some(item => item.id === form.referenceId)); });
    assert.match(source, /normalizeGrammarLookup\(form\.input\) === query/); assert.match(source, /não conjuga entradas arbitrárias/); assert.doesNotMatch(source, /function\s+(?:conjugar|conjugate)|verbGroup|godan|ichidan/i);
});

test('referência usa texto seguro, áudio japonês explícito e apoios sem invenção', () => {
    const data = indexData(), source = read('js/japanese/grammar.js'); const htmlWrites = [...source.matchAll(/innerHTML\s*=\s*([^;]+)/g)].map(match => match[1].trim()); assert.ok(htmlWrites.every(value => value === "''")); assert.match(source, /item\.audioText/); assert.match(source, /tocarAudio\(item\.audioText, 'ja-JP'/); assert.match(source, /nenhum apoio foi inventado/);
    data.references.filter(item => item.audioText).forEach(item => assert.match(item.audioText, /[\u3040-\u30ff\u3400-\u9fff]/u));
});

test('página separa filtros, declara escopo e não cria métricas paralelas', () => {
    const html = read('html/ja-JP/gramatica.html'), source = read('js/japanese/grammar.js'); assert.match(html, /id="grammar-cefr"/); assert.match(html, /id="grammar-jlpt"/); assert.match(html, /não é um conjugador universal/); assert.match(html, /data_gramatica_index\.js/); assert.doesNotMatch(html, /data_curso_[a-b][12]\.js|data_kanji_n[1-5]\.js/);
    assert.doesNotMatch(source, /localStorage|adicionarXP|processarAvaliacaoSRS|b2_certified|desbloquear/i); assert.match(source, /registrarAtividadeDiaria/);
});

test('origens respeitam as rotas protegidas e estados editoriais permanecem públicos', () => {
    const source = read('js/japanese/grammar.js'), data = indexData(); assert.match(source, /\?level=\$\{encodeURIComponent\(item\.level\)\}&module=\$\{item\.moduleIndex\}/); assert.match(source, /\?module=\$\{item\.moduleIndex\}/); assert.equal(data.references.filter(item => item.editorialStatus === 'pending-human-review').length, 108); assert.match(read('html/ja-JP/gramatica.html'), /decisão editorial inconclusiva/);
});

test('hub e PWA incluem página, controlador e índice leve', () => {
    const hub = read('hub_japones.html'), sw = read('sw.js'); assert.match(hub, /html\/ja-JP\/gramatica\.html/); ['html/ja-JP/gramatica.html', 'js/japanese/grammar.js', 'database/ja-JP/data_gramatica_index.js'].forEach(file => assert.match(sw, new RegExp(file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))));
});

let passed = 0;
for (const [name, fn] of tests) { try { fn(); passed += 1; console.log(`✓ ${name}`); } catch (error) { console.error(`✗ ${name}`); throw error; } }
console.log(`\nGramática japonesa: ${passed}/${tests.length} contratos aprovados.`);
