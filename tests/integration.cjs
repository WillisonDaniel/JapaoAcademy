'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const results = [];

function test(name, fn) {
    try {
        fn();
        results.push({ name, ok: true });
        console.log(`\u2713 ${name}`);
    } catch (error) {
        results.push({ name, ok: false });
        console.error(`\u2717 ${name}`);
        console.error(`  ${error.stack || error.message}`);
    }
}

function createStorage(initial = {}) {
    const values = new Map(Object.entries(initial).map(([key, value]) => [key, String(value)]));
    return {
        get length() { return values.size; },
        key(index) { return Array.from(values.keys())[index] || null; },
        getItem(key) { return values.has(key) ? values.get(key) : null; },
        setItem(key, value) { values.set(key, String(value)); },
        removeItem(key) { values.delete(key); },
        clear() { values.clear(); },
        snapshot() { return Object.fromEntries(values); }
    };
}

function createDom(language = 'japanese', mode = 'curso') {
    const elements = new Map();
    const ids = [
        'hub-cursos', 'hub-niveis', 'player-aula',
        'trilha-a1', 'trilha-a2', 'trilha-b1', 'trilha-b2'
    ];
    ids.forEach(id => elements.set(id, { id, style: { display: '' } }));
    let currentLanguage = language;
    let currentMode = mode;
    const body = {
        getAttribute(name) {
            if (name === 'data-lang') return currentLanguage;
            if (name === 'data-mode') return currentMode;
            return null;
        },
        classList: { contains: () => true }
    };
    return {
        body,
        head: { appendChild() {} },
        documentElement: { style: { setProperty() {} } },
        createElement: () => ({ style: {}, classList: { add() {}, remove() {} } }),
        getElementById: id => elements.get(id) || null,
        querySelector: () => null,
        querySelectorAll: () => [],
        setLanguage(value) { currentLanguage = value; },
        setMode(value) { currentMode = value; },
        elements
    };
}

function createSession(storage, options = {}) {
    const document = createDom(options.language, options.mode);
    const context = {
        console: { log() {}, warn() {}, error() {} },
        Date,
        Math,
        JSON,
        URL,
        Set,
        Map,
        localStorage: storage,
        document,
        location: { pathname: options.pathname || '/html/ja-JP/curso.html' },
        alertMessages: [],
        alert(message) { this.alertMessages.push(message); },
        scrollCalls: [],
        scrollTo(x, y) { this.scrollCalls.push([x, y]); },
        getTodosOsCursos: options.getTodosOsCursos || (() => ({})),
        ...options.globals
    };
    context.window = context;
    context.globalThis = context;
    vm.createContext(context);
    return context;
}

function runFile(context, relativePath) {
    const source = fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
    vm.runInContext(source, context, { filename: relativePath });
}

function loadCoreSession(storage, options = {}) {
    const context = createSession(storage, options);
    runFile(context, 'js/core/config.js');
    runFile(context, 'js/core/state.js');
    runFile(context, 'js/core/storage.js');
    return context;
}

function plain(value) {
    return JSON.parse(JSON.stringify(value));
}

const sampleCourses = {
    A1: [{ id: 'a1_mod_01' }, { id: 'a1_mod_02' }, { id: 'a1_mod_03' }],
    A2: [{ id: 'a2_mod_01' }, { id: 'a2_mod_02' }],
    B1: [{ id: 'b1_mod_01' }, { id: 'b1_mod_02' }],
    B2: [{ id: 'b2_mod_01' }, { id: 'b2_mod_02' }]
};

test('fluxo completo de usuario novo', () => {
    const storage = createStorage();
    const session = loadCoreSession(storage, { getTodosOsCursos: () => sampleCourses });
    const initialProgress = session.carregarProgressoGlobal();
    session.AppState.setProgress(initialProgress);

    assert.deepEqual(plain(initialProgress.modulosConcluidos), []);
    assert.deepEqual(plain(initialProgress.modulosDesbloqueados), ['a1_mod_01', 'a2_mod_01', 'b1_mod_01', 'b2_mod_01']);
    assert.equal(session.AppState.course.level, 'A1');
    assert.equal(session.nomeUsuario, 'Estudante');
    runFile(session, 'js/course/course.js');
    assert.equal(session.eNivelDesbloqueado('A2'), false, 'A2 foi liberado antes da conclusao do A1');

    session.AppState.markModuleCompleted('a1_mod_01', 'A1');
    session.AppState.unlockNextModule('A1', 0);
    session.AppState.setXP(100);

    const persisted = JSON.parse(storage.getItem('japao_academy_progress'));
    assert.ok(persisted.modulosConcluidos.includes('a1_mod_01'));
    assert.ok(persisted.modulosDesbloqueados.includes('a1_mod_02'));
    assert.equal(storage.getItem('ja_user_xp'), '100');
    assert.equal(session.progressoGlobal, session.AppState.user.progressoGlobal);
});

test('fluxo de usuario antigo migra chaves legadas sem perder progresso', () => {
    const storage = createStorage({
        ja_modulos_concluidos: JSON.stringify([0, 2]),
        ja_modulos_concluidos_a2: JSON.stringify([0]),
        ja_progresso_a1: JSON.stringify([0, 1, 2]),
        ja_progresso_a2: JSON.stringify([0, 1]),
        japao_academy_kanji_progress: JSON.stringify({ progress_kanji: [1, 3] }),
        ja_nome_usuario: 'Usuario Antigo',
        ja_user_xp: '875'
    });
    const session = loadCoreSession(storage, { getTodosOsCursos: () => sampleCourses });
    const migrated = session.carregarProgressoGlobal();
    session.AppState.setProgress(migrated);
    session.syncAppStateMirror();

    assert.equal(session.nomeUsuario, 'Usuario Antigo');
    assert.deepEqual(plain(migrated.modulosConcluidos), ['a1_mod_01', 'a1_mod_03', 'a2_mod_01']);
    assert.deepEqual(plain(migrated.modulosDesbloqueados), ['a1_mod_01', 'a1_mod_02', 'a1_mod_03', 'a2_mod_01', 'a2_mod_02', 'b1_mod_01', 'b2_mod_01']);
    assert.deepEqual(plain(migrated.progress_kanji), [1, 3]);
    assert.equal(session.AppState.user.xp, 875);
    assert.ok(storage.getItem('japao_academy_progress'), 'formato consolidado nao foi criado');
});

test('troca entre niveis e cursos mantem estado coerente', () => {
    const storage = createStorage();
    const session = loadCoreSession(storage, { getTodosOsCursos: () => sampleCourses });
    session.AppState.setProgress(session.carregarProgressoGlobal());
    session.modoDesbloqueado = true;
    runFile(session, 'js/course/course.js');

    session.abrirTrilha('A2');
    assert.equal(session.AppState.course.level, 'A2');
    assert.equal(session.nivelAtivo, 'A2');
    assert.equal(session.document.elements.get('trilha-a2').style.display, 'block');
    assert.equal(session.document.elements.get('trilha-a1').style.display, 'none');

    session.abrirTrilha('B1');
    assert.equal(session.AppState.course.level, 'B1');
    assert.equal(session.nivelAtivo, 'B1');
    assert.equal(session.document.elements.get('trilha-b1').style.display, 'block');
    assert.equal(session.scrollCalls.length, 2);

    const languageSession = createSession(createStorage(), {
        globals: {
            CURSO_A1_DADOS: [{ id: 'ja-a1' }],
            CURSO_A2_DADOS: [{ id: 'ja-a2' }],
            CURSO_B1_DADOS: [{ id: 'ja-b1' }],
            CURSO_B2_DADOS: [{ id: 'ja-b2' }],
            CURSO_ENGLISH_A1_DADOS: [{ id: 'en-a1' }],
            CURSO_ENGLISH_A2_DADOS: [{ id: 'en-a2' }],
            CURSO_ENGLISH_B1_DADOS: [{ id: 'en-b1' }],
            CURSO_ENGLISH_B2_DADOS: [{ id: 'en-b2' }]
        }
    });
    runFile(languageSession, 'js/core/utils.js');
    assert.equal(languageSession.getTodosOsCursos().A1[0].id, 'ja-a1');
    languageSession.document.setLanguage('english');
    assert.equal(languageSession.getTodosOsCursos().A1[0].id, 'en-a1');
});

test('reload restaura persistentes e reinicia estado transitorio', () => {
    const sharedStorage = createStorage();
    const firstSession = loadCoreSession(sharedStorage, { getTodosOsCursos: () => sampleCourses });
    firstSession.AppState.setProgress(firstSession.carregarProgressoGlobal());
    firstSession.AppState.markModuleCompleted('a1_mod_01', 'A1');
    firstSession.AppState.unlockNextModule('A1', 0);
    firstSession.AppState.setXP(420);
    firstSession.localStorage.setItem('ja_streak_data', JSON.stringify({ count: 9 }));
    firstSession.localStorage.setItem('ja_unlocked_achievements', JSON.stringify({ primeiro_passo: true }));
    firstSession.AppState.setLevel('B2');
    firstSession.AppState.setModule(11);
    firstSession.AppState.setStage(4);
    firstSession.AppState.setDrop(2);

    const reloaded = loadCoreSession(sharedStorage, { getTodosOsCursos: () => sampleCourses });
    reloaded.AppState.setProgress(reloaded.carregarProgressoGlobal());
    reloaded.syncAppStateMirror();

    assert.ok(reloaded.AppState.user.progressoGlobal.modulosConcluidos.includes('a1_mod_01'));
    assert.ok(reloaded.AppState.user.progressoGlobal.modulosDesbloqueados.includes('a1_mod_02'));
    assert.equal(reloaded.AppState.user.xp, 420);
    assert.equal(reloaded.AppState.user.streak, 9);
    assert.deepEqual(plain(reloaded.AppState.user.achievements), ['primeiro_passo']);
    assert.equal(reloaded.AppState.course.level, 'A1');
    assert.equal(reloaded.AppState.course.moduleIndex, 0);
    assert.equal(reloaded.AppState.course.stage, 1);
    assert.equal(reloaded.AppState.course.dropIndex, 0);
});

test('localStorage, AppState e pontes legadas sincronizam nos dois sentidos', () => {
    const storage = createStorage();
    const session = loadCoreSession(storage, { getTodosOsCursos: () => sampleCourses });
    session.AppState.setProgress(session.carregarProgressoGlobal());

    session.AppState.setXP(250);
    session.AppState.setLevel('A2');
    session.AppState.setModule(3);
    session.AppState.setStage(5);
    session.AppState.setDrop(1);
    session.AppState.setSRSDeck([{ id: 'card-1' }]);
    session.AppState.setSRSIndex(1);
    session.AppState.setDictionaryCache([{ primary: '日本' }]);

    assert.equal(storage.getItem('ja_user_xp'), '250');
    assert.equal(session.nivelAtivo, 'A2');
    assert.equal(session.moduloAtivoIndex, 3);
    assert.equal(session.etapaAtual, 5);
    assert.equal(session.dropAtual, 1);
    assert.equal(session.srsSessaoCards[0].id, 'card-1');
    assert.equal(session.glossarioUniversalData[0].primary, '日本');

    storage.setItem('ja_user_xp', '999');
    storage.setItem('ja_streak_data', JSON.stringify({ count: 15 }));
    session.nivelAtivo = 'B1';
    session.moduloAtivoIndex = 7;
    session.etapaAtual = 3;
    session.dropAtual = 4;
    session.srsSessaoCards = [{ id: 'card-legado' }];
    session.srsIndexAtivo = 0;
    session.glossarioUniversalData = [{ primary: 'legacy' }];
    session.syncAppStateMirror();

    assert.equal(session.AppState.user.xp, 999);
    assert.equal(session.AppState.user.streak, 15);
    assert.equal(session.AppState.course.level, 'B1');
    assert.equal(session.AppState.course.moduleIndex, 7);
    assert.equal(session.AppState.course.stage, 3);
    assert.equal(session.AppState.course.dropIndex, 4);
    assert.equal(session.AppState.srs.activeDeck[0].id, 'card-legado');
    assert.equal(session.AppState.dictionary.universalGlossary[0].primary, 'legacy');
    assert.equal(session.AppState.runtime.initialized, true);
});

const failed = results.filter(result => !result.ok);
console.log(`\n${results.length - failed.length}/${results.length} cenarios de integracao aprovados.`);
if (failed.length > 0) process.exitCode = 1;
