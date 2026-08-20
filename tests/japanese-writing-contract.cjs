'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ROOT = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(ROOT, file), 'utf8');
const tests = [], test = (name, fn) => tests.push([name, fn]);
function indexData() { const sandbox = {}; sandbox.window = sandbox; vm.createContext(sandbox); vm.runInContext(`${read('database/ja-JP/data_escrita_index.js')}\n;globalThis.x=JAPANESE_WRITING_INDEX`, sandbox); return JSON.parse(JSON.stringify(sandbox.x)); }

test('índice preserva os 210 modelos explícitos sem exclusões', () => {
    const data = indexData(), review = read('tests/JAPANESE_WRITING_EDITORIAL_REVIEW.md'); assert.equal(data.length, 210); assert.equal(new Set(data.map(item => item.id)).size, 210); assert.match(review, /Modelos examinados: \*\*210\*\*/); assert.match(review, /Modelos excluídos sem inferência: \*\*0\*\*/); assert.doesNotMatch(review, /frase-e-blocos-divergentes/);
});

test('cada modelo mantém frase, tradução, blocos, origem e status editorial reais', () => {
    const data = indexData(); data.forEach(item => { assert.equal(item.framework, 'CEFR'); assert.ok(['A1', 'A2', 'B1', 'B2'].includes(item.level)); assert.ok(item.sentence && item.translation && item.chunks.length); assert.equal(item.route, 'curso.html'); assert.ok(['pending-human-review', 'not-flagged'].includes(item.editorialStatus)); assert.equal(item.chunks.join('').normalize('NFKC').replace(/\s+/gu, ''), item.sentence.normalize('NFKC').replace(/\s+/gu, '')); }); assert.equal(data.filter(item => item.editorialStatus === 'pending-human-review').length, 40);
});

test('oficina oferece três modos e comparação mecânica transparente', () => {
    const html = read('html/ja-JP/escrita.html'), source = read('js/japanese/writing.js'); ['order', 'copy', 'recall'].forEach(mode => assert.match(html, new RegExp(`data-writing-mode="${mode}"`))); assert.match(source, /normalize\('NFKC'\)/); assert.match(source, /difere do modelo registrado/); assert.match(source, /não significa que a variante seja linguisticamente errada/); assert.doesNotMatch(source, /gramaticalmente (?:correto|perfeito)|texto correto|fluente|profici/i);
});

test('blocos são operáveis por teclado e podem ser movidos ou removidos', () => {
    const source = read('js/japanese/writing.js'); assert.match(source, /createElement\('button'\)/); assert.match(source, /Mover bloco para cima/); assert.match(source, /Mover bloco para baixo/); assert.match(source, /remove\.textContent = 'Remover'/); assert.match(read('html/ja-JP/escrita.html'), /aria-live="polite"/);
});

test('texto digitado permanece efêmero e nenhuma métrica pedagógica paralela é criada', () => {
    const source = read('js/japanese/writing.js'), html = read('html/ja-JP/escrita.html'); assert.doesNotMatch(source, /localStorage|sessionStorage|firebase|fetch\(|XMLHttpRequest|adicionarXP|processarAvaliacaoSRS|b2_certified|desbloquear/i); assert.match(source, /registrarAtividadeDiaria/); assert.doesNotMatch(source, /writing-input.*registrarAtividade|registerWritingActivity\([^,]+,\s*response/); assert.match(html, /não é salvo nem enviado/); assert.match(html, /Nenhum texto digitado é persistido/);
});

test('áudio e origem usam apenas o modelo e o fluxo protegido do curso', () => {
    const source = read('js/japanese/writing.js'); assert.match(source, /tocarAudio\(item\.sentence, 'ja-JP', 1\)/); assert.match(source, /\?level=\$\{encodeURIComponent\(item\.level\)\}&module=\$\{item\.moduleIndex\}/); assert.doesNotMatch(source, /romaji|transliter/i);
});

test('página carrega somente índice leve e PWA inclui os três recursos', () => {
    const html = read('html/ja-JP/escrita.html'), sw = read('sw.js'), hub = read('hub_japones.html'); assert.match(html, /data_escrita_index\.js/); assert.doesNotMatch(html, /data_curso_[a-b][1-2]\.js/); assert.match(hub, /html\/ja-JP\/escrita\.html/); ['html/ja-JP/escrita.html', 'js/japanese/writing.js', 'database/ja-JP/data_escrita_index.js'].forEach(file => assert.match(sw, new RegExp(file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))));
});

let passed = 0;
for (const [name, fn] of tests) { try { fn(); passed += 1; console.log(`✓ ${name}`); } catch (error) { console.error(`✗ ${name}`); throw error; } }
console.log(`\nEscrita japonesa: ${passed}/${tests.length} contratos aprovados.`);
