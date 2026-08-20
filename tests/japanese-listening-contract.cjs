'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const results = [];
const read = file => fs.readFileSync(path.join(ROOT, file), 'utf8');
function test(name, fn) {
    try { fn(); results.push(true); console.log(`\u2713 ${name}`); }
    catch (error) { results.push(false); console.error(`\u2717 ${name}\n  ${error.message}`); }
}
function loadIndex() {
    const context = {}; context.window = context; vm.createContext(context);
    vm.runInContext(`${read('database/ja-JP/data_escuta_index.js')}\n;globalThis.__index = JAPANESE_LISTENING_INDEX;`, context);
    return JSON.parse(JSON.stringify(context.__index));
}

test('indice auditivo possui snapshot deterministico A1-B2', () => {
    const items = loadIndex();
    const counts = Object.fromEntries(['A1', 'A2', 'B1', 'B2'].map(level => [level, items.filter(item => item.level === level).length]));
    assert.deepEqual(counts, { A1: 29, A2: 117, B1: 96, B2: 73 });
    assert.equal(items.length, 315);
    assert.equal(new Set(items.map(item => item.id)).size, items.length);
    items.forEach(item => {
        assert.match(item.audioText, /[\u3040-\u30ff\u3400-\u9fff]/u);
        assert.ok(item.translation && item.moduleId && Number.isInteger(item.moduleIndex));
        assert.ok(['pending-human-review', 'not-flagged'].includes(item.editorialStatus));
    });
});

test('motor de audio aceita callbacks e preserva ja-JP e velocidades', () => {
    const spoken = [];
    function Utterance(text) { this.text = text; }
    const context = {
        console: { log() {}, warn() {}, error() {} }, SpeechSynthesisUtterance: Utterance,
        speechSynthesis: { cancel() {}, speak(value) { spoken.push(value); } }
    };
    context.window = context; vm.createContext(context); vm.runInContext(read('js/core/audio.js'), context);
    const onend = () => {};
    assert.equal(context.tocarAudio('日本語です。', 'ja-JP', 0.65, { onend }), true);
    assert.equal(spoken[0].lang, 'ja-JP'); assert.equal(spoken[0].rate, 0.65); assert.equal(spoken[0].onend, onend);
    const unsupported = { console: context.console, window: null }; unsupported.window = unsupported; vm.createContext(unsupported); vm.runInContext(read('js/core/audio.js'), unsupported);
    assert.equal(unsupported.tocarAudio('日本語'), false);
});

test('pagina declara sintese, privacidade, filtros e estados acessiveis', () => {
    const html = read('html/ja-JP/escuta.html');
    const sharedStyles = read('japanese-experience.css');
    assert.match(html, /áudio é sintetizado pelo seu dispositivo/);
    assert.match(html, /não avalia pronúncia/);
    assert.match(html, /Nenhum áudio gravado é persistido/);
    assert.match(html, /aria-live="polite"/);
    assert.match(sharedStyles, /prefers-reduced-motion/);
    assert.match(html, /japanese-experience\.css/);
    ['A1', 'A2', 'B1', 'B2'].forEach(level => assert.match(html, new RegExp(`<option>${level}<\\/option>`)));
    assert.doesNotMatch(html, /canvas-confetti|wanakana|https:\/\/(?!fonts\.googleapis)/);
});

test('escuta e shadowing nao criam nota, XP, SRS ou persistencia paralela', () => {
    const source = read('js/japanese/listening.js');
    assert.match(source, /tocarAudio\(item\.audioText, 'ja-JP', rate, handlers\)/);
    assert.match(source, /registrarAtividadeDiaria/);
    assert.match(source, /activityType: 'pronunciation'/);
    assert.match(source, /data-self-review/);
    assert.doesNotMatch(source, /adicionarXP|processarAvaliacaoSRS|registrarErroSRS|localStorage|AppState|accuracy|similarity/);
});

test('microfone e transcricao sao opcionais e iniciados somente por clique', () => {
    const source = read('js/japanese/listening.js');
    assert.match(source, /window\.SpeechRecognition \|\| window\.webkitSpeechRecognition/);
    assert.match(source, /addEventListener\('click', startListeningTranscription\)/);
    assert.match(source, /Transcrição bruta do navegador/);
    assert.match(source, /Permissão do microfone negada/);
    assert.doesNotMatch(source.slice(0, source.indexOf('function startListeningTranscription')), /\.start\(\)/);
});

test('origem retorna ao curso sem contornar desbloqueio', () => {
    const listening = read('js/japanese/listening.js'); const course = read('js/course/course.js');
    assert.match(listening, /curso\.html\?level=\$\{encodeURIComponent\(item\.level\)\}&module=\$\{item\.moduleIndex\}/);
    assert.match(course, /eNivelDesbloqueado\(requestedLevel\)/);
    assert.match(course, /eModuloDesbloqueado\(target\.id, requestedLevel, requestedModule\)/);
});

test('hub e PWA incluem pagina, controlador e indice', () => {
    const hub = read('hub_japones.html'), sw = read('sw.js');
    assert.match(hub, /html\/ja-JP\/escuta\.html/);
    assert.match(sw, /html\/ja-JP\/escuta\.html/); assert.match(sw, /js\/japanese\/listening\.js/); assert.match(sw, /database\/ja-JP\/data_escuta_index\.js/);
    assert.match(read('package.json'), /"index:listening:check"/);
});

const passed = results.filter(Boolean).length;
console.log(`\nEscuta japonesa: ${passed}/${results.length} contratos aprovados.`);
if (passed !== results.length) process.exit(1);
