'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ROOT = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(ROOT, file), 'utf8');
const tests = [], test = (name, fn) => tests.push([name, fn]);
function dashboardApi() {
    const window = { addEventListener() {} }, sandbox = { window, document: {}, localStorage: { getItem() { return null; }, setItem() {} }, console: { log() {}, warn() {}, error() {} }, URL, Date, Intl, Math, Object, Array, Map, Set, JSON, Number, String, RegExp };
    vm.createContext(sandbox); vm.runInContext(read('js/dashboard/meu-progresso.js'), sandbox, { filename: 'meu-progresso.js' }); return sandbox.window;
}

test('hub japonês agrupa todas as rotas em quatro habilidades', () => {
    const hub = read('hub_japones.html'); ['foundations', 'comprehension', 'production', 'tracking'].forEach(group => assert.match(hub, new RegExp(`data-skill-group="${group}"`)));
    ['curso.html', 'hiragana.html', 'katakana.html', 'kanji.html', 'gramatica.html', 'escuta.html', 'leitura.html', 'dicionario.html', 'escrita.html', 'minigame.html', 'jlpt.html', 'meu-progresso.html'].forEach(route => assert.match(hub, new RegExp(route.replace('.', '\\.'))));
});

test('hub remove alegações públicas imprecisas e mantém transparência editorial', () => {
    const hub = read('hub_japones.html'); assert.doesNotMatch(hub, /plataforma definitiva|para dominar|Minigame Oficial|Vocabulário de Proficiência/i); assert.match(hub, /não constituem listas oficiais/); assert.match(hub, /pendentes.*decisão editorial baseada em evidências/i); assert.match(hub, /não substitui revisão editorial qualificada/);
});

test('classificação japonesa usa somente idioma, tipo e prefixos explícitos', () => {
    const api = dashboardApi(); assert.equal(api.classificarHabilidadeJaponesaSessao({ language: 'ja-JP', contentId: 'listening-1', activityType: 'course' }), 'listening'); assert.equal(api.classificarHabilidadeJaponesaSessao({ language: 'ja-JP', contentId: 'reading-1', activityType: 'course' }), 'reading'); assert.equal(api.classificarHabilidadeJaponesaSessao({ language: 'ja-JP', contentId: 'grammar-1', activityType: 'course' }), 'grammar'); assert.equal(api.classificarHabilidadeJaponesaSessao({ language: 'ja-JP', contentId: 'writing-1', activityType: 'course' }), 'writing'); assert.equal(api.classificarHabilidadeJaponesaSessao({ language: 'ja-JP', contentId: 'jlpt-practice', activityType: 'course' }), 'jlpt'); assert.equal(api.classificarHabilidadeJaponesaSessao({ language: 'ja-JP', activityType: 'unknown' }), 'other'); assert.equal(api.classificarHabilidadeJaponesaSessao({ language: 'it-IT', contentId: 'reading-1' }), null);
});

test('resumo soma apenas sessões reais e preserva última atividade', () => {
    const api = dashboardApi(), rows = JSON.parse(JSON.stringify(api.criarResumoHabilidadesJaponesDashboard({ sessions: [
        { language: 'ja-JP', contentId: 'reading-a', activityType: 'course', activeSeconds: 60, endedAt: '2026-08-01T12:00:00.000Z' },
        { language: 'ja-JP', contentId: 'reading-b', activityType: 'course', activeSeconds: 90, endedAt: '2026-08-03T12:00:00.000Z' },
        { language: 'ja-JP', contentId: 'writing-a', activityType: 'course', activeSeconds: 45, endedAt: '2026-08-02T12:00:00.000Z' },
        { language: 'en-US', contentId: 'reading-x', activityType: 'course', activeSeconds: 999 }
    ] }))); const reading = rows.find(item => item.id === 'reading'), writing = rows.find(item => item.id === 'writing'); assert.equal(reading.sessionCount, 2); assert.equal(reading.activeSeconds, 150); assert.equal(reading.lastActivity, '2026-08-03T12:00:00.000Z'); assert.equal(writing.activeSeconds, 45); assert.equal(rows.some(item => item.activeSeconds === 999), false); assert.deepEqual(JSON.parse(JSON.stringify(api.criarResumoHabilidadesJaponesDashboard({ dailyAggregates: { x: { activeSeconds: 5000 } } }))), []);
});

test('Dashboard expõe estado vazio e não cria persistência paralela', () => {
    const html = read('meu-progresso.html'), source = read('js/dashboard/meu-progresso.js'); assert.match(html, /Ainda não há sessões japonesas registradas por habilidade/); assert.match(source, /criarResumoHabilidadesJaponesDashboard/); const block = source.slice(source.indexOf('const JAPANESE_SKILL_REGISTRY'), source.indexOf('function formatarUltimaAtividadeHabilidadeJaponesa')); assert.doesNotMatch(block, /localStorage|setItem|salvar|Firebase|dailyAggregates/);
});

test('cadeia documental das fases 0–13 está materializada', () => {
    const reports = ['00_BASELINE_INVENTARIO', '01_CORRECOES_OBJETIVAS', '02_AUDITORIA_EDITORIAL', '03A_CONTRATO_TEXTUAL_PLAYER', '03B_CORRECAO_A1_A2', '03C_CORRECAO_B1_B2', '04_RECUPERACAO_KANJI_N3', '05_RECUPERACAO_KANJI_N2', '06_RECUPERACAO_KANJI_N1', '07_CONSOLIDACAO_RECURSOS', '08_ESCUTA_PRONUNCIA_SHADOWING', '09_BIBLIOTECA_LEITURA_GRADUADA', '10_REFERENCIA_GRAMATICAL_CONJUGACAO', '11_PRODUCAO_ESCRITA_GUIADA', '12_PREPARACAO_JLPT']; reports.forEach(name => assert.ok(fs.existsSync(path.join(ROOT, `tests/FASE_JAPONES_${name}.md`)), name));
    ['01_correcoes_objetivas', '02_auditoria_editorial', '03a_contrato_textual_player', '03b_correcao_a1_a2', '03c_correcao_b1_b2', '04_recuperacao_kanji_n3', '05_recuperacao_kanji_n2', '06_recuperacao_kanji_n1', '07_consolidacao_recursos', '08_escuta_pronuncia_shadowing', '09_biblioteca_leitura_graduada', '10_referencia_gramatical_conjugacao', '11_producao_escrita_guiada', '12_preparacao_jlpt', '13_hub_dashboard_release'].forEach(name => assert.ok(fs.existsSync(path.join(ROOT, `plan/japones_fase_${name}.md`)), name));
    assert.ok(fs.existsSync(path.join(ROOT, 'tests/FASE_JAPONES_13_HUB_DASHBOARD_RELEASE.md')));
    assert.ok(fs.existsSync(path.join(ROOT, 'roadmap/JAPONES_ACADEMY_RELEASE_CHECKLIST.md')));
});

test('PWA final referencia hub e Dashboard sem ampliar o contrato de dados', () => {
    const sw = read('sw.js'), packageJson = JSON.parse(read('package.json')); assert.match(sw, /idiomas-academy-v47/); assert.match(sw, /hub_japones\.html/); assert.match(sw, /meu-progresso\.html/); assert.equal(packageJson.scripts['test:japanese-release'], 'node tests/japanese-release-contract.cjs');
});

let passed = 0;
for (const [name, fn] of tests) { try { fn(); passed += 1; console.log(`✓ ${name}`); } catch (error) { console.error(`✗ ${name}`); throw error; } }
console.log(`\nRelease japonês: ${passed}/${tests.length} contratos aprovados.`);
