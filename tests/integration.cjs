'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const results = [];
const asyncTests = [];

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

function testAsync(name, fn) {
    asyncTests.push({ name, fn });
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

function loadStudySessionFactory() {
    const context = {
        console: { log() {}, warn() {}, error() {} },
        Date,
        Math,
        JSON,
        Set,
        Map,
        localStorage: createStorage()
    };
    context.window = context;
    context.globalThis = context;
    vm.createContext(context);
    runFile(context, 'js/core/study-session.js');
    return context.criarControladorSessaoEstudo;
}

const sampleCourses = {
    A1: [{ id: 'a1_mod_01' }, { id: 'a1_mod_02' }, { id: 'a1_mod_03' }],
    A2: [{ id: 'a2_mod_01' }, { id: 'a2_mod_02' }],
    B1: [{ id: 'b1_mod_01' }, { id: 'b1_mod_02' }],
    B2: [{ id: 'b2_mod_01' }, { id: 'b2_mod_02' }]
};

const sampleEnglishCourses = {
    A1: [{ id: 'en_a1_mod_01' }, { id: 'en_a1_mod_02' }],
    A2: [{ id: 'en_a2_mod_01' }],
    B1: [{ id: 'en_b1_mod_01' }],
    B2: [{ id: 'en_b2_mod_01' }]
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
            CURSO_ENGLISH_B2_DADOS: [{ id: 'en-b2' }],
            CURSO_ESPANHOL_A1_DADOS: [{ id: 'es-a1' }],
            CURSO_ESPANHOL_A2_DADOS: [{ id: 'es-a2' }],
            CURSO_ESPANHOL_B1_DADOS: [{ id: 'es-b1' }],
            CURSO_ESPANHOL_B2_DADOS: [{ id: 'es-b2' }]
        }
    });
    runFile(languageSession, 'js/core/utils.js');
    languageSession.document.setLanguage('english');
    assert.equal(languageSession.getTodosOsCursos().A1[0].id, 'en-a1');
    languageSession.document.setLanguage('spanish');
    assert.equal(languageSession.getTodosOsCursos().A1[0].id, 'es-a1');
});

test('progresso de desbloqueio de modulos permanece isolado por idioma', () => {
    const storage = createStorage();
    const session = loadCoreSession(storage, {
        globals: {
            CURSO_A1_DADOS: [{ id: 'a1_mod_01' }, { id: 'a1_mod_02' }],
            CURSO_ENGLISH_A1_DADOS: [{ id: 'en_a1_mod_01' }, { id: 'en_a1_mod_02' }],
            CURSO_ESPANHOL_A1_DADOS: [{ id: 'es_a1_mod_1' }, { id: 'es_a1_mod_2' }]
        }
    });
    runFile(session, 'js/course/course.js');

    // Concluir Módulo 1 em Japonês
    session.document.setLanguage('ja-JP');
    session.AppState.markModuleCompleted('a1_mod_01', 'A1');
    session.AppState.unlockNextModule('A1', 0);

    assert.equal(session.eModuloDesbloqueado('a1_mod_02', 'A1', 1), true, 'Japonês Modulo 2 desbloqueado');

    // Módulos 2 de Inglês e Espanhol devem continuar BLOQUEADOS
    session.document.setLanguage('english');
    assert.equal(session.eModuloDesbloqueado('en_a1_mod_02', 'A1', 1), false, 'Inglês Modulo 2 bloqueado');

    session.document.setLanguage('spanish');
    assert.equal(session.eModuloDesbloqueado('es_a1_mod_2', 'A1', 1), false, 'Espanhol Modulo 2 bloqueado');
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

test('dashboard calcula somente metricas reais e tolera armazenamento corrompido', () => {
    const agora = Date.now();
    const storage = createStorage({
        ja_user_xp: '350',
        ja_srs_deck: JSON.stringify([
            { id: 'due', dueDate: agora - 1000 },
            { id: 'future', dueDate: agora + 60000 }
        ]),
        ja_srs_a2_deck: '{json-invalido',
        japao_academy_progress: JSON.stringify({
            modulosConcluidos: ['a1_mod_01', 'en_a1_mod_01'],
            progress_kanji: [0, 1],
            progress_phrasal_verbs: [0]
        })
    });
    const session = loadCoreSession(storage, {
        getTodosOsCursos: () => sampleCourses,
        globals: {
            addEventListener() {},
            CURSO_A1_DADOS: sampleCourses.A1,
            CURSO_A2_DADOS: sampleCourses.A2,
            CURSO_B1_DADOS: sampleCourses.B1,
            CURSO_B2_DADOS: sampleCourses.B2,
            CURSO_ENGLISH_A1_DADOS: sampleEnglishCourses.A1,
            CURSO_ENGLISH_A2_DADOS: sampleEnglishCourses.A2,
            CURSO_ENGLISH_B1_DADOS: sampleEnglishCourses.B1,
            CURSO_ENGLISH_B2_DADOS: sampleEnglishCourses.B2,
            CURSO_ESPANHOL_A1_DADOS: [{ id: 'es-a1-1' }],
            CURSO_ESPANHOL_A2_DADOS: [{ id: 'es-a2-1' }],
            CURSO_ESPANHOL_B1_DADOS: [{ id: 'es-b1-1' }],
            CURSO_ESPANHOL_B2_DADOS: [{ id: 'es-b2-1' }]
        }
    });
    session.AppState.setProgress(JSON.parse(storage.getItem('japao_academy_progress')));
    runFile(session, 'js/dashboard/meu-progresso.js');

    const geral = session.obterResumoGeralDashboard();
    const srs = session.obterResumoSRSDashboard(agora);
    const serie = session.criarSerieSemanalDashboard({
        activityByDate: { '2026-08-03': 3 },
        studyMinutesByDate: {}
    }, new Date(2026, 7, 3, 12));

    assert.equal(geral.xp, 350);
    assert.equal(geral.concluidos, 2);
    assert.equal(geral.modulosExtras, 3);
    assert.equal(geral.idiomasDisponiveis, 3);
    assert.equal(geral.idiomas[0].label, 'Japonês');
    assert.equal(geral.idiomas[0].concluidos, 1);
    assert.equal(geral.idiomas[1].label, 'Inglês');
    assert.equal(geral.idiomas[1].concluidos, 1);
    assert.equal(geral.idiomas[2].label, 'Espanhol');
    assert.equal(srs.pendentes, 1);
    assert.equal(srs.tipoPrioritario, 'a1');
    assert.equal(serie.metric, 'activities');
    assert.equal(serie.serie.at(-1).value, 3);
    assert.equal(session.obterNomeDashboard({ displayName: '<img src=x onerror=alert(1)>' }), '<img src=x onerror=alert(1)>');
});

test('estatisticas avancadas aplicam periodos e filtros sem estimar dados ausentes', () => {
    const storage = createStorage();
    const session = loadCoreSession(storage, {
        getTodosOsCursos: () => sampleCourses,
        globals: { addEventListener() {} }
    });
    runFile(session, 'js/dashboard/meu-progresso.js');
    const dados = {
        version: 2,
        dailyGoalMinutes: 20,
        activityByDate: { '2026-08-01': 1, '2026-08-02': 3, '2026-08-03': 2, '2026-08-04': 99 },
        studySecondsByDate: { '2026-08-02': 900, '2026-08-03': 1800, '2026-08-04': 99999 },
        dailyAggregates: {
            '2026-08-02': {
                activeSeconds: 900, activities: 3, interactions: 5, sessionCount: 1, xpEarned: 20,
                languages: { 'en-US': 900 }, activityTypes: { srs: 900 }
            },
            '2026-08-03': {
                activeSeconds: 1800, activities: 2, interactions: 4, sessionCount: 1, xpEarned: 50,
                languages: { 'ja-JP': 1800 }, activityTypes: { course: 1800 }
            }
        },
        sessions: [
            {
                id: 'en-srs', date: '2026-08-02', activeSeconds: 900, language: 'en-US', activityType: 'srs',
                activityCount: 3, interactionCount: 5, xpEarned: 20
            },
            {
                id: 'ja-course', date: '2026-08-03', activeSeconds: 1800, language: 'ja-JP', activityType: 'course',
                activityCount: 2, interactionCount: 4, xpEarned: 50
            },
            {
                id: 'invalid-future', date: '2026-08-04', activeSeconds: -20, language: 'ja-JP', activityType: 'course',
                activityCount: -3, interactionCount: 1, xpEarned: -10
            }
        ]
    };
    const hoje = new Date(2026, 7, 3, 12);
    const geral = session.calcularEstatisticasDashboard(dados, { period: 7, language: 'all', activity: 'all' }, hoje, { count: 2 });
    assert.equal(geral.filters.period, 7);
    assert.equal(geral.minutesToday.value, 30);
    assert.equal(geral.minutes7.value, 45);
    assert.equal(geral.minutes30.value, 45);
    assert.equal(geral.minutes7.partial, true);
    assert.equal(geral.activeDays, 3);
    assert.equal(geral.dailyAverage.value, 22.5);
    assert.equal(geral.activities, 6);
    assert.equal(geral.sessions, 2);
    assert.equal(geral.reviews, 3);
    assert.equal(geral.accuracy.available, false);
    assert.equal(geral.goalsReached.value, 1);
    assert.equal(geral.goalsReached.eligibleDays, 2);
    assert.equal(geral.goalRate.value, 50);
    assert.equal(geral.bestStreak, 3);
    assert.equal(geral.xpEarned.value, 70);
    assert.equal(geral.languageDistribution.entries[0].key, 'ja-JP');
    assert.equal(geral.languageDistribution.entries[0].percent, 67);
    assert.equal(geral.activityDistribution.entries[0].key, 'course');

    const japones = session.calcularEstatisticasDashboard(dados, { period: 30, language: 'ja-JP', activity: 'all' }, hoje);
    assert.equal(japones.filters.period, 30);
    assert.equal(japones.minutes30.value, 30);
    assert.equal(japones.activities, 2);
    assert.equal(japones.sessions, 1);
    assert.equal(japones.reviews, 0);
    assert.equal(japones.xpEarned.value, 50);

    const srs = session.calcularEstatisticasDashboard(dados, { period: 90, language: 'all', activity: 'srs' }, hoje);
    assert.equal(srs.filters.period, 90);
    assert.equal(srs.minutes30.value, 15);
    assert.equal(srs.activities, 3);
    assert.equal(srs.reviews, 3);
    assert.equal(srs.activityDistribution.entries[0].key, 'srs');

    const vazio = session.calcularEstatisticasDashboard({}, { period: 7 }, hoje);
    assert.equal(vazio.minutesToday.available, false);
    assert.equal(vazio.dailyAverage.available, false);
    assert.equal(vazio.goalRate.available, false);
    assert.equal(vazio.accuracy.available, false);
    assert.equal(vazio.languageDistribution.metric, 'none');

    const somenteFuturo = session.calcularEstatisticasDashboard({
        studySecondsByDate: { '2026-08-04': 600 },
        dailyAggregates: { '2026-08-04': { activeSeconds: 600, sessionCount: 1 } }
    }, { period: 7 }, hoje);
    assert.equal(somenteFuturo.minutesToday.available, false);
    assert.equal(somenteFuturo.minutes7.value, 0);
});

test('graficos usam periodos filtrados, metricas reais e estados sem dados', () => {
    const session = loadCoreSession(createStorage(), {
        getTodosOsCursos: () => sampleCourses,
        globals: { addEventListener() {} }
    });
    runFile(session, 'js/dashboard/meu-progresso.js');
    const hoje = new Date(2026, 7, 3, 12);
    const dados = {
        version: 2,
        dailyGoalMinutes: 15,
        studySecondsByDate: { '2026-08-02': 900, '2026-08-03': 1800 },
        dailyAggregates: {
            '2026-08-02': {
                activeSeconds: 900, activities: 3, interactions: 3, sessionCount: 1, xpEarned: 10,
                languages: { 'en-US': 900 }, activityTypes: { srs: 900 }
            },
            '2026-08-03': {
                activeSeconds: 1800, activities: 2, interactions: 2, sessionCount: 1, xpEarned: 20,
                languages: { 'ja-JP': 1800 }, activityTypes: { course: 1800 }
            }
        },
        sessions: [
            { id: 'srs', date: '2026-08-02', activeSeconds: 900, language: 'en-US', activityType: 'srs', activityCount: 3, interactionCount: 3 },
            { id: 'course', date: '2026-08-03', activeSeconds: 1800, language: 'ja-JP', activityType: 'course', activityCount: 2, interactionCount: 2 }
        ]
    };

    [7, 30, 90].forEach(periodo => {
        const estatisticas = session.calcularEstatisticasDashboard(dados, { period: periodo }, hoje);
        const minutos = session.criarDadosGraficoEvolucaoDashboard(estatisticas, 'minutes');
        assert.equal(minutos.points.length, periodo);
        assert.equal(minutos.points.at(-1).value, 30);
        assert.equal(minutos.hasData, true);
    });

    const estatisticas = session.calcularEstatisticasDashboard(dados, { period: 7 }, hoje);
    const atividades = session.criarDadosGraficoEvolucaoDashboard(estatisticas, 'activities');
    const revisoes = session.criarDadosGraficoEvolucaoDashboard(estatisticas, 'reviews');
    assert.equal(atividades.points.at(-1).value, 2);
    assert.equal(revisoes.points.at(-2).value, 3);
    assert.equal(revisoes.points.at(-1).value, 0);

    const idiomas = session.criarDadosGraficoDistribuicaoDashboard(estatisticas, 'language');
    const atividadesDistribuidas = session.criarDadosGraficoDistribuicaoDashboard(estatisticas, 'activity');
    assert.equal(idiomas.metric, 'time');
    assert.equal(idiomas.entries[0].key, 'ja-JP');
    assert.equal(idiomas.entries[0].percent, 67);
    assert.equal(atividadesDistribuidas.entries[0].key, 'course');

    const vazio = session.calcularEstatisticasDashboard({}, { period: 7 }, hoje);
    const graficoVazio = session.criarDadosGraficoEvolucaoDashboard(vazio, 'minutes');
    const distribuicaoVazia = session.criarDadosGraficoDistribuicaoDashboard(vazio, 'language');
    assert.equal(graficoVazio.hasData, false);
    assert.equal(graficoVazio.max, 0);
    assert.equal(distribuicaoVazia.hasData, false);
    assert.equal(vazio.accuracy.available, false);
});

test('calendario mensal usa datas locais, metas e agregados reais', () => {
    const session = loadCoreSession(createStorage(), {
        getTodosOsCursos: () => sampleCourses,
        globals: { addEventListener() {} }
    });
    runFile(session, 'js/dashboard/meu-progresso.js');
    const dados = {
        version: 2,
        dailyGoalMinutes: 20,
        activityByDate: { '2024-02-10': 2, '2024-02-29': 1 },
        studySecondsByDate: { '2024-02-10': 600, '2024-02-29': 1800 },
        dailyAggregates: {
            '2024-02-10': { activeSeconds: 600, activities: 2, sessionCount: 1, languages: { 'ja-JP': 600 } },
            '2024-02-29': { activeSeconds: 1800, activities: 1, sessionCount: 1, languages: { 'en-US': 1800 } }
        },
        sessions: [
            { id: 'review-1', date: '2024-02-10', language: 'ja-JP', activityType: 'srs', activeSeconds: 600, activityCount: 4 },
            { id: 'course-1', date: '2024-02-29', language: 'en-US', activityType: 'course', activeSeconds: 1800, activityCount: 1 }
        ]
    };
    const hoje = new Date(2024, 2, 1, 0, 5);
    const fevereiro = session.criarDadosCalendarioDashboard(dados, new Date(2024, 1, 1, 23, 59), hoje);
    assert.equal(fevereiro.days.length, 29, 'ano bissexto perdeu o dia 29');
    assert.equal(fevereiro.leadingDays, 4);
    assert.equal(fevereiro.metric, 'minutes');
    assert.equal(fevereiro.hasData, true);
    assert.equal(fevereiro.canGoNext, true);
    const dia10 = fevereiro.days.find(dia => dia.day === 10);
    const dia29 = fevereiro.days.find(dia => dia.day === 29);
    assert.equal(dia10.activeSeconds, 600);
    assert.equal(dia10.activities, 2);
    assert.equal(dia10.reviews, 4);
    assert.deepEqual(plain(dia10.languages), ['ja-JP']);
    assert.equal(dia10.goalMet, false);
    assert.equal(dia10.accuracy.available, false);
    assert.equal(dia29.goalMet, true);
    assert.equal(dia29.intensity, 4);

    const atual = session.criarDadosCalendarioDashboard(dados, new Date(2024, 2, 1), hoje);
    assert.equal(atual.canGoNext, false);
    assert.equal(atual.days[0].isToday, true);
    assert.equal(atual.days[1].isFuture, true);

    const viradaAno = session.criarDadosCalendarioDashboard({}, '2025-12', new Date(2026, 0, 2, 0, 1));
    assert.equal(viradaAno.year, 2025);
    assert.equal(viradaAno.month, 11);
    assert.equal(viradaAno.canGoNext, true);

    const futuroLimitado = session.criarDadosCalendarioDashboard({}, '2026-12', new Date(2026, 0, 2, 23, 59));
    assert.equal(futuroLimitado.year, 2026);
    assert.equal(futuroLimitado.month, 0);
    assert.equal(futuroLimitado.hasData, false);

    const somenteAtividades = session.criarDadosCalendarioDashboard({
        activityByDate: { '2026-01-01': 3 }
    }, '2026-01', new Date(2026, 0, 2, 12));
    assert.equal(somenteAtividades.metric, 'activities');
    assert.ok(somenteAtividades.days[0].intensity > 0);
});

test('dashboard migra v1, registra sessoes idempotentes e limita retencao', () => {
    const uid = 'session-user';
    const storage = createStorage({
        [`ja_dashboard_data_${uid}`]: JSON.stringify({
            version: 1,
            dailyGoalMinutes: 30,
            firstAccessDate: '2026-01-01',
            activityByDate: { '2026-08-03': 2 },
            studyMinutesByDate: { '2026-08-03': 2.5 },
            sessions: []
        })
    });
    const session = loadCoreSession(storage, { getTodosOsCursos: () => sampleCourses });
    const migrated = session.carregarDadosDashboard(uid);
    assert.equal(migrated.version, 3);
    assert.ok(Array.isArray(migrated.srsHistory));
    assert.equal(migrated.dailyGoalMinutes, 30);
    assert.equal(migrated.studySecondsByDate['2026-08-03'], 150);
    assert.equal(migrated.firstAccessDate, '2026-01-01');

    const record = {
        id: 'session-fixed',
        date: '2026-08-03',
        startedAt: '2026-08-03T12:00:00.000Z',
        endedAt: '2026-08-03T12:01:00.000Z',
        activeSeconds: 60,
        language: 'ja-JP',
        activityType: 'kana',
        contentId: 'hiragana-1',
        interactionCount: 4,
        activityCount: 1,
        xpEarned: 10,
        endReason: 'completion'
    };
    session.registrarSessaoDashboard(record, uid, false);
    session.registrarSessaoDashboard(record, uid, false);
    const stored = session.carregarDadosDashboard(uid);
    assert.equal(stored.sessions.length, 1);
    assert.equal(stored.dailyAggregates['2026-08-03'].sessionCount, 1);
    assert.equal(stored.dailyAggregates['2026-08-03'].activeSeconds, 210);
    assert.equal(stored.lifetimeTotals.sessions, 1);

    assert.equal(session.registrarSessaoDashboard({ ...record, id: 'anonymous' }, '', false), false);
    assert.equal(session.registrarSessaoDashboard({ ...record, id: 'short', activeSeconds: 14 }, uid, false), false);

    const many = [];
    for (let index = 0; index < 205; index++) {
        many.push({ ...record, id: `retained-${index}`, endedAt: new Date(Date.UTC(2026, 0, 1, 0, index)).toISOString() });
    }
    const normalized = session.normalizarDadosDashboard({ version: 2, sessions: many });
    assert.equal(normalized.sessions.length, 200);
    assert.equal(normalized.sessions[0].id, 'retained-5');

    const activityByDate = {};
    for (let index = 0; index < 370; index++) {
        const date = new Date(Date.UTC(2025, 0, 1 + index)).toISOString().slice(0, 10);
        activityByDate[date] = 1;
    }
    const retainedDays = session.normalizarDadosDashboard({ version: 2, activityByDate });
    assert.equal(Object.keys(retainedDays.activityByDate).length, 366);
});

test('controlador mede tempo ativo, pausa e impede temporizadores concorrentes', () => {
    const criarControlador = loadStudySessionFactory();
    let now = Date.parse('2026-08-03T12:00:00.000Z');
    let timerSequence = 0;
    const timers = new Map();
    const registered = [];
    const createController = user => criarControlador({
        now: () => now,
        getUser: () => user,
        getXP: () => 100,
        registerSession: session => registered.push(plain(session)),
        saveDraft() {},
        removeDraft() {},
        setTimeout: fn => { const id = ++timerSequence; timers.set(id, fn); return id; },
        clearTimeout: id => timers.delete(id)
    });

    const anonymous = createController(null);
    assert.equal(anonymous.iniciar({ language: 'ja-JP', activityType: 'course' }), false);

    const controller = createController({ uid: 'timer-user' });
    controller.iniciar({ language: 'ja-JP', activityType: 'course', contentId: 'a1-1' });
    controller.atualizar({ interactionCountDelta: 1, relevantInteraction: true });
    assert.equal(timers.size, 1, 'mais de um temporizador foi mantido');
    now += 60000;
    const paused = controller.pausar('closing');
    assert.equal(paused.activeSeconds, 60);
    assert.equal(timers.size, 0);
    now += 300000;
    controller.atualizar({ interactionCountDelta: 1, relevantInteraction: true });
    now += 30000;
    const completed = controller.finalizar('completion', { activityCountDelta: 1 });
    assert.equal(completed.activeSeconds, 90);
    assert.equal(completed.interactionCount, 2);
    assert.equal(completed.activityCount, 1);
    assert.equal(registered.length, 1);

    controller.iniciar({ language: 'ja-JP', activityType: 'kana', contentId: 'hira-1' });
    controller.atualizar({ interactionCountDelta: 1, relevantInteraction: true });
    now += 120000;
    const inactivityCallback = timers.values().next().value;
    inactivityCallback();
    assert.equal(controller.obterAtiva().activeSeconds, 120);
    assert.equal(timers.size, 0);
    now += 600000;
    controller.atualizar({ interactionCountDelta: 1, relevantInteraction: true });
    now += 20000;
    controller.iniciar({ language: 'ja-JP', activityType: 'srs', contentId: 'a1' });
    assert.equal(registered.length, 2, 'troca de atividade nao finalizou a anterior');
    assert.equal(controller.obterAtiva().activityType, 'srs');
    assert.equal(timers.size, 0, 'nova sessao pendente iniciou temporizador sem interacao');

    controller.atualizar({ interactionCountDelta: 1, relevantInteraction: true });
    now += 10000;
    assert.equal(controller.finalizar('exit'), false, 'sessao curta gerou tempo artificial');
    assert.equal(registered.length, 2);
});

test('mesclagem de sessoes une IDs sem duplicar agregados', () => {
    const session = loadCoreSession(createStorage(), { getTodosOsCursos: () => sampleCourses });
    const base = {
        version: 2,
        dailyGoalMinutes: 15,
        sessions: [{
            id: 'same', date: '2026-08-03', startedAt: '2026-08-03T10:00:00.000Z', endedAt: '2026-08-03T10:01:00.000Z',
            activeSeconds: 60, language: 'ja-JP', activityType: 'course', interactionCount: 2, activityCount: 1, xpEarned: 5
        }]
    };
    const remote = {
        version: 2,
        dailyGoalMinutes: 30,
        preferenceUpdatedAt: '2026-08-03T11:00:00.000Z',
        sessions: [
            base.sessions[0],
            { ...base.sessions[0], id: 'remote-only', activeSeconds: 30, endedAt: '2026-08-03T11:00:00.000Z' }
        ]
    };
    const merged = session.mesclarDadosDashboard(base, remote);
    assert.equal(merged.sessions.length, 2);
    assert.equal(merged.dailyAggregates['2026-08-03'].sessionCount, 2);
    assert.equal(merged.dailyAggregates['2026-08-03'].activeSeconds, 90);
    assert.equal(merged.lifetimeTotals.sessions, 2);
    assert.equal(merged.dailyGoalMinutes, 30);

    const localAggregated = {
        ...base,
        dailyAggregates: { '2026-08-03': { sessionIds: ['same'], activeSeconds: 60, activities: 1, interactions: 2, xpEarned: 5, sessionCount: 1, languages: { 'ja-JP': 60 }, activityTypes: { course: 60 } } }
    };
    const remoteAggregated = {
        ...remote,
        sessions: [remote.sessions[1]],
        dailyAggregates: { '2026-08-03': { sessionIds: ['remote-only'], activeSeconds: 30, activities: 1, interactions: 2, xpEarned: 5, sessionCount: 1, languages: { 'ja-JP': 30 }, activityTypes: { course: 30 } } }
    };
    const mergedDisjoint = session.mesclarDadosDashboard(localAggregated, remoteAggregated);
    assert.equal(mergedDisjoint.dailyAggregates['2026-08-03'].activeSeconds, 90);
    assert.equal(mergedDisjoint.dailyAggregates['2026-08-03'].sessionCount, 2);

    const legacyPreference = session.mesclarDadosDashboard(
        { version: 2, dailyGoalMinutes: 15 },
        { version: 1, dailyGoalMinutes: 45 }
    );
    assert.equal(legacyPreference.dailyGoalMinutes, 45, 'preferencia v1 remota foi ignorada em perfil local vazio');

    const mixedAggregates = session.mesclarDadosDashboard(
        { version: 2, dailyAggregates: { '2026-08-02': { activeSeconds: 120, activities: 1 } } },
        { version: 2, dailyAggregates: { '2026-08-02': { activeSeconds: 60, activities: 4 } } }
    );
    assert.equal(mixedAggregates.dailyAggregates['2026-08-02'].activeSeconds, 120);
    assert.equal(mixedAggregates.dailyAggregates['2026-08-02'].activities, 4);
});

testAsync('login Google aguarda e restaura progresso e XP do Firestore', async () => {
    const progressoNuvemLegado = {
        modulosConcluidos: [],
        modulosDesbloqueados: ['a1_mod_01'],
        xpTotal: 0,
        nivelAtual: 'A1',
        progress_hiragana: [0, 1, 2, 3, 4, 5, 6, 7]
    };
    const storage = createStorage({
        japao_academy_progress: JSON.stringify({
            modulosConcluidos: [],
            modulosDesbloqueados: ['a1_mod_01'],
            xpTotal: 0,
            nivelAtual: 'A1'
        }),
        ja_user_xp: '0'
    });
    const user = { uid: 'google-user', displayName: 'Teste Google' };
    let liberarLeitura;
    const leituraNuvem = new Promise(resolve => { liberarLeitura = resolve; });
    const backupsEnviados = [];
    const firebase = {
        auth: { currentUser: user },
        db: {},
        doc: (...partes) => partes.join('/'),
        getDoc: () => leituraNuvem,
        setDoc: async (ref, dados) => { backupsEnviados.push({ ref, dados }); },
        GoogleAuthProvider: function GoogleAuthProvider() {},
        signInWithPopup: async () => ({ user })
    };
    const session = loadCoreSession(storage, {
        getTodosOsCursos: () => sampleCourses,
        globals: {
            jaFirebase: firebase,
            getCourseData: mode => mode === 'hiragana' ? new Array(8).fill({}) : null
        }
    });

    let loginFinalizado = false;
    const loginPromise = session.fazerLoginGoogle().then(resultado => {
        loginFinalizado = true;
        return resultado;
    });
    await Promise.resolve();
    await Promise.resolve();
    assert.equal(loginFinalizado, false, 'login Google nao aguardou a leitura do Firestore');
    assert.equal(storage.getItem('ja_user_xp'), '0', 'login terminou de restaurar antes da resposta do Firestore');

    liberarLeitura({
        exists: () => true,
        data: () => ({ progressoGlobal: progressoNuvemLegado })
    });
    const resultadoLogin = await loginPromise;

    assert.equal(resultadoLogin.success, true);
    assert.equal(session.location.href, '../../index.html');
    assert.deepEqual(plain(JSON.parse(storage.getItem('japao_academy_progress')).progress_hiragana), [0, 1, 2, 3, 4, 5, 6, 7]);
    assert.equal(storage.getItem('ja_user_xp'), '504');
    assert.equal(session.AppState.user.xp, 504);
    assert.equal(Math.floor(session.AppState.user.xp / 100) + 1, 6);

    session.AppState.setXP(725);
    await session.salvarSilenciosamenteNaNuvem();
    assert.equal(backupsEnviados.length, 1);
    assert.equal(backupsEnviados[0].dados.xpTotal, 725);
});

testAsync('meta e atividade do dashboard persistem por usuario e sincronizam sem perda', async () => {
    const uid = 'dashboard-user';
    const storage = createStorage({
        ja_activity_history: JSON.stringify({ '2026-08-03': 2 }),
        ja_favoritos_deck: JSON.stringify(['favorito-1']),
        [`ja_dashboard_data_${uid}`]: '{json-invalido'
    });
    const backups = [];
    const firebase = {
        auth: { currentUser: { uid } },
        db: {},
        doc: (...partes) => partes.join('/'),
        setDoc: async (ref, dados) => { backups.push({ ref, dados }); },
        getDoc: async () => ({
            exists: () => true,
            data: () => ({
                progressoGlobal: { modulosConcluidos: [], modulosDesbloqueados: ['a1_mod_01'] },
                xpTotal: 0,
                dashboardData: {
                    version: 1,
                    dailyGoalMinutes: 30,
                    firstAccessDate: '2026-08-03',
                    activityByDate: { '2026-08-03': 4 },
                    studyMinutesByDate: {},
                    sessions: []
                },
                favoritos: ['favorito-nuvem']
            })
        })
    };
    const session = loadCoreSession(storage, {
        getTodosOsCursos: () => sampleCourses,
        globals: { jaFirebase: firebase }
    });

    const normalizados = session.carregarDadosDashboard(uid);
    assert.equal(normalizados.dailyGoalMinutes, 15);
    assert.equal(normalizados.activityByDate['2026-08-03'], 2);

    session.definirMetaDiariaDashboard(45, uid);
    session.registrarAtividadeDashboard('2026-08-03', 1, uid);
    await session.salvarSilenciosamenteNaNuvem();
    const ultimoBackup = backups.at(-1).dados;
    assert.equal(ultimoBackup.dashboardData.dailyGoalMinutes, 45);
    assert.equal(ultimoBackup.dashboardData.activityByDate['2026-08-03'], 3);
    assert.deepEqual(plain(ultimoBackup.favoritos), ['favorito-1']);

    await session.sincronizarProgressoComFirestore({ uid });
    const restaurados = session.carregarDadosDashboard(uid);
    assert.equal(restaurados.dailyGoalMinutes, 45);
    assert.equal(restaurados.activityByDate['2026-08-03'], 4);
    assert.deepEqual(plain(JSON.parse(storage.getItem('ja_favoritos_deck'))), ['favorito-nuvem']);
});

testAsync('login por email e cadastro direcionam ao dashboard sem loop', async () => {
    const criarFirebase = ({ cadastro = false } = {}) => {
        const user = { uid: cadastro ? 'new-user' : 'email-user', email: 'aluno@example.com', displayName: cadastro ? null : 'Aluno' };
        const auth = { currentUser: user };
        return {
            user,
            api: {
                auth,
                db: {},
                doc: (...partes) => partes.join('/'),
                getDoc: async () => cadastro
                    ? { exists: () => false, data: () => ({}) }
                    : {
                        exists: () => true,
                        data: () => ({
                            progressoGlobal: { modulosConcluidos: [], modulosDesbloqueados: ['a1_mod_01'] },
                            xpTotal: 0
                        })
                    },
                setDoc: async () => {},
                signInWithEmailAndPassword: async () => ({ user }),
                createUserWithEmailAndPassword: async () => ({ user }),
                updateProfile: async (target, profile) => { target.displayName = profile.displayName; }
            }
        };
    };

    const loginFirebase = criarFirebase();
    const loginSession = loadCoreSession(createStorage(), {
        getTodosOsCursos: () => sampleCourses,
        globals: { jaFirebase: loginFirebase.api }
    });
    const login = await loginSession.fazerLoginEmailSenha('aluno@example.com', 'segredo');
    assert.equal(login.success, true);
    assert.equal(loginSession.location.href, '../../index.html');

    const cadastroFirebase = criarFirebase({ cadastro: true });
    const cadastroSession = loadCoreSession(createStorage(), {
        getTodosOsCursos: () => sampleCourses,
        globals: { jaFirebase: cadastroFirebase.api }
    });
    const cadastro = await cadastroSession.fazerCadastroEmailSenha('novo@example.com', 'segredo', 'Novo Aluno');
    assert.equal(cadastro.success, true);
    assert.equal(cadastro.user.displayName, 'Novo Aluno');
    assert.equal(cadastroSession.location.href, '../../index.html');
    cadastroSession.location.pathname = '/index.html';
    assert.equal(cadastroSession.irParaMeuProgresso(), false, 'dashboard redirecionou para si mesmo');
});

test('fluxo completo de integracao do SRS com historico, taxa de acertos e insights locais', () => {
    const uid = 'srs-integration-user';
    const storage = createStorage();
    const session = loadCoreSession(storage, { getTodosOsCursos: () => sampleCourses });
    runFile(session, 'js/dashboard/meu-progresso.js');

    const tentativaCorrect = {
        id: 'att-1',
        timestamp: '2026-08-04T10:00:00.000Z',
        date: '2026-08-04',
        userId: uid,
        language: 'ja-JP',
        deckType: 'a1',
        cardId: 'c1',
        contentLabel: 'Konnichiwa',
        quality: 3,
        result: 'correct'
    };
    const tentativaError = {
        id: 'att-2',
        timestamp: '2026-08-04T10:05:00.000Z',
        date: '2026-08-04',
        userId: uid,
        language: 'ja-JP',
        deckType: 'a1',
        cardId: 'c2',
        contentLabel: 'Arigatou',
        quality: 1,
        result: 'error'
    };

    session.registrarTentativaSRS(tentativaCorrect, uid);
    session.registrarTentativaSRS(tentativaError, uid);

    const dados = session.carregarDadosDashboard(uid);
    assert.equal(dados.srsHistory.length, 2);

    const stats = session.calcularEstatisticasDashboard(dados, { period: 30 }, new Date(2026, 7, 4, 12));
    assert.equal(stats.accuracy.available, true);
    assert.equal(stats.accuracy.correct, 1);
    assert.equal(stats.accuracy.errors, 1);
    assert.equal(stats.accuracy.value, 50);

    const insights = session.calcularInsightsDashboard(dados, stats, { count: 5 });
    assert.ok(insights.length <= 3, 'insights excedem o limite maximo de 3');
});

(async () => {
    for (const { name, fn } of asyncTests) {
        try {
            await fn();
            results.push({ name, ok: true });
            console.log(`\u2713 ${name}`);
        } catch (error) {
            results.push({ name, ok: false });
            console.error(`\u2717 ${name}`);
            console.error(`  ${error.stack || error.message}`);
        }
    }

    const failed = results.filter(result => !result.ok);
    console.log(`\n${results.length - failed.length}/${results.length} cenarios de integracao aprovados.`);
    if (failed.length > 0) process.exitCode = 1;
})();
