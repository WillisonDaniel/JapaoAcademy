'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ROOT = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(ROOT, file), 'utf8');
const tests = [], test = (name, fn) => tests.push([name, fn]);
function indexData() { const sandbox = {}; sandbox.window = sandbox; vm.createContext(sandbox); vm.runInContext(`${read('database/ja-JP/data_jlpt_pratica_index.js')}\n;globalThis.x=JAPANESE_JLPT_PRACTICE_INDEX`, sandbox); return JSON.parse(JSON.stringify(sandbox.x)); }
function controller() { const sandbox = { console: { log() {}, warn() {}, error() {} }, Map, Set, Date, clearInterval, setInterval }; vm.createContext(sandbox); vm.runInContext(`${read('js/japanese/jlpt.js')}\n;globalThis.x={normalizeJlptAnswer,selectJlptSession,jlptOriginHref}`, sandbox); return sandbox.x; }

test('índice preserva 1060 questões explícitas e a exclusão N4 conhecida', () => {
    const data = indexData(), review = read('tests/JAPANESE_JLPT_HUMAN_REVIEW.md'); assert.equal(data.length, 1060); assert.equal(new Set(data.map(item => item.id)).size, 1060); assert.match(review, /Questões examinadas: \*\*1061\*\*/); assert.match(review, /Questões publicadas: \*\*1060\*\*/); assert.match(review, /Muito gentis \(tanto親切\)/);
});

test('contagens por nível e origem correspondem aos datasets', () => {
    const data = indexData(), counts = Object.fromEntries(['N5', 'N4', 'N3', 'N2', 'N1'].map(level => [level, data.filter(item => item.level === level).length])); assert.deepEqual(counts, { N5: 122, N4: 181, N3: 217, N2: 240, N1: 300 }); assert.equal(data.filter(item => item.origin === 'module-quiz').length, 880); assert.equal(data.filter(item => item.origin === 'reading-comprehension').length, 180);
});

test('escolhas sempre contêm o gabarito e itens digitados preservam resposta explícita', () => {
    indexData().forEach(item => { assert.ok(item.question && item.answer); if (item.options.length) { assert.equal(item.type, 'choice'); assert.equal(item.options[item.answerIndex], item.answer); } else assert.notEqual(item.type, 'choice'); });
});

test('seleção é determinística, balanceada e não mistura níveis ou origens', () => {
    const data = indexData(), api = controller(), first = JSON.parse(JSON.stringify(api.selectJlptSession(data, 'N3', 'module-quiz', 20))), second = JSON.parse(JSON.stringify(api.selectJlptSession(data, 'N3', 'module-quiz', 20))); assert.deepEqual(first.map(item => item.id), second.map(item => item.id)); assert.equal(first.length, 20); assert.ok(first.every(item => item.level === 'N3' && item.origin === 'module-quiz')); assert.ok(new Set(first.map(item => item.moduleId)).size >= 18);
});

test('resposta digitada usa normalização conservadora sem sinônimos ou transliteração', () => {
    const api = controller(); assert.equal(api.normalizeJlptAnswer('  KAKIJUN  '), 'kakijun'); assert.equal(api.normalizeJlptAnswer('カタカナ'), 'カタカナ'); assert.notEqual(api.normalizeJlptAnswer('かたかな'), api.normalizeJlptAnswer('katakana')); const source = read('js/japanese/jlpt.js'); assert.doesNotMatch(source, /wanakana|transliter|synonym|romajiTo/i);
});

test('resultado e cronômetro são internos, sem escala ou previsão oficial', () => {
    const html = read('html/ja-JP/jlpt.html'), source = read('js/japanese/jlpt.js'); assert.match(html, /não possui afiliação com o JLPT/); assert.match(html, /não prevê aprovação nem proficiência/); assert.match(html, /cronômetro pessoal, sem limite/); assert.match(source, /correspondem aos gabaritos armazenados/); assert.doesNotMatch(source, /pass probability|aprova(?:do|ção)|scaledScore|pontuação oficial/i);
});

test('respostas ficam em memória e nenhuma progressão paralela é alterada', () => {
    const source = read('js/japanese/jlpt.js'); assert.match(source, /jlptAnswers = new Map/); assert.doesNotMatch(source, /localStorage|sessionStorage|firebase|fetch\(|XMLHttpRequest|adicionarXP|processarAvaliacaoSRS|b2_certified|desbloquear/i); assert.match(source, /registrarAtividadeDiaria/); assert.match(source, /\?module=\$\{item\.moduleIndex\}/);
});

test('página carrega índice leve e PWA inclui os três recursos', () => {
    const html = read('html/ja-JP/jlpt.html'), sw = read('sw.js'), hub = read('hub_japones.html'); assert.match(html, /data_jlpt_pratica_index\.js/); assert.doesNotMatch(html, /data_kanji_n[1-5]\.js/); assert.match(hub, /html\/ja-JP\/jlpt\.html/); ['html/ja-JP/jlpt.html', 'js/japanese/jlpt.js', 'database/ja-JP/data_jlpt_pratica_index.js'].forEach(file => assert.match(sw, new RegExp(file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))));
});

let passed = 0;
for (const [name, fn] of tests) { try { fn(); passed += 1; console.log(`✓ ${name}`); } catch (error) { console.error(`✗ ${name}`); throw error; } }
console.log(`\nPreparação JLPT: ${passed}/${tests.length} contratos aprovados.`);
