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
        results.push({ name, ok: false, error });
        console.error(`\u2717 ${name}`);
        console.error(`  ${error.stack || error.message}`);
    }
}

function read(relativePath) {
    return fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
}

function listFiles(directory, extension) {
    return fs.readdirSync(path.join(ROOT, directory), { withFileTypes: true }).flatMap(entry => {
        const relative = path.join(directory, entry.name);
        return entry.isDirectory() ? listFiles(relative, extension) : (entry.name.endsWith(extension) ? [relative] : []);
    });
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

function createContext(options = {}) {
    const attributes = {
        'data-lang': options.language == null ? null : options.language,
        'data-mode': options.mode == null ? 'curso' : options.mode
    };
    const body = {
        getAttribute(name) { return Object.prototype.hasOwnProperty.call(attributes, name) ? attributes[name] : null; }
    };
    const document = options.document === false ? undefined : {
        body,
        documentElement: { getAttribute: () => null },
        getElementById: () => null,
        querySelectorAll: () => []
    };
    const context = {
        console: { log() {}, warn() {}, error() {} },
        Date,
        Math,
        JSON,
        URL,
        Set,
        Map,
        localStorage: options.storage || createStorage(),
        location: { pathname: options.pathname || '/html/ja-JP/curso.html' },
        ...options.globals
    };
    if (document) context.document = document;
    context.window = context;
    context.globalThis = context;
    vm.createContext(context);
    return context;
}

function runFile(context, relativePath) {
    vm.runInContext(read(relativePath), context, { filename: relativePath });
}

function plain(value) {
    return JSON.parse(JSON.stringify(value));
}

test('autoridade central normaliza os cinco idiomas e rejeita valor explicito desconhecido', () => {
    const cases = [
        ['japanese', '/html/ja-JP/curso.html', 'ja-JP'],
        ['english', '/html/en-US/curso_ingles.html', 'en-US'],
        ['spanish', '/html/es-ES/espanhol_curso.html', 'es-ES'],
        ['russian', '/html/ru-RU/russo_curso.html', 'ru-RU'],
        ['italiano', '/hub_italiano.html', 'it-IT']
    ];
    cases.forEach(([language, pathname, expected]) => {
        const context = createContext({ language, pathname });
        runFile(context, 'js/core/constants.js');
        assert.equal(context.getCurrentLanguageCode(), expected);
        assert.equal(context.normalizeLanguage(language), expected);
        assert.equal(context.getLanguageConfig(expected).code, expected);
    });

    const unknown = createContext({ language: 'klingon', pathname: '/html/ja-JP/curso.html' });
    runFile(unknown, 'js/core/constants.js');
    assert.equal(unknown.getCurrentLanguageCode(), null);
});

test('audio italiano usa it-IT e apresenta fallback quando sintese nao existe', () => {
    const spoken = [];
    function Utterance(textValue) { this.text = textValue; }
    const context = createContext({
        language: 'italiano',
        pathname: '/html/it-IT/italiano_curso.html',
        globals: {
            SpeechSynthesisUtterance: Utterance,
            speechSynthesis: { cancel() {}, speak(value) { spoken.push(value); } }
        }
    });
    runFile(context, 'js/core/constants.js');
    runFile(context, 'js/core/audio.js');
    context.tocarAudio('Buongiorno');
    assert.equal(spoken.length, 1);
    assert.equal(spoken[0].lang, 'it-IT');

    const messages = [];
    const fallback = createContext({
        language: 'italian',
        globals: { mostrarErroRecuperavelUX(type, message) { messages.push([type, message]); } }
    });
    runFile(fallback, 'js/core/constants.js');
    runFile(fallback, 'js/core/audio.js');
    fallback.tocarAudio('Ciao');
    assert.deepEqual(plain(messages), [['browser', 'Áudio indisponível']]);
});

test('SRS produz 20 chaves independentes e preserva decks especiais', () => {
    const context = createContext({ language: 'japanese' });
    runFile(context, 'js/core/constants.js');
    runFile(context, 'js/core/course-index.js');
    runFile(context, 'js/srs/engine.js');
    const languages = ['ja-JP', 'en-US', 'es-ES', 'ru-RU', 'it-IT'];
    const levels = ['a1', 'a2', 'b1', 'b2'];
    const keys = languages.flatMap(language => levels.map(level => context.getDeckKeySRS(level, language)));
    assert.equal(new Set(keys).size, 20);
    assert.equal(context.getDeckKeySRS('a1', 'ja-JP'), 'ja_srs_a1_deck');
    assert.equal(context.getDeckKeySRS('b2', 'ru-RU'), 'ru_srs_b2_deck');
    assert.equal(context.getDeckKeySRS('a1', 'it-IT'), 'it_srs_a1_deck');
    assert.equal(context.getDeckKeySRS('cirilico'), 'ru_srs_cirilico_deck');
    assert.equal(context.getDeckKeySRS('falsos_amigos'), 'es_srs_falsos_amigos_deck');
    assert.equal(context.getDeckKeySRS('phrasal_verbs'), 'en_srs_phrasal_verbs_deck');
    assert.equal(context.obterIdiomaDeckSRS('cirilico', { language: 'ja-JP' }), 'ru-RU');
});

test('toda pagina que executa o SRS carrega antes o indice leve', () => {
    const htmlFiles = listFiles('.', '.html');
    htmlFiles.forEach(file => {
        const html = read(file);
        const enginePosition = html.indexOf('js/srs/engine.js');
        if (enginePosition === -1) return;
        const indexPosition = html.indexOf('js/core/course-index.js');
        assert.ok(indexPosition >= 0 && indexPosition < enginePosition, `${file} deve carregar o indice antes do SRS`);
    });
});

test('migracao SRS separa deck misto, preserva backup e e idempotente', () => {
    const legacyCards = [
        { id: 'a1_mod_01_d_0', modId: 'a1_mod_01', dueDate: 10 },
        { id: 'en_a1_mod_01_d_0', modId: 'en_a1_mod_01', dueDate: 20 },
        { id: 'es_a1_mod_1_d_0', modId: 'es_a1_mod_1', dueDate: 30 },
        { id: 'ru_a1_mod_01_d_0', modId: 'ru_a1_mod_01', dueDate: 40 },
        { id: 'legacy-sem-identidade', dueDate: 50 }
    ];
    const storage = createStorage({ ja_srs_deck: JSON.stringify(legacyCards) });
    const context = createContext({ language: 'japanese', storage });
    runFile(context, 'js/core/constants.js');
    runFile(context, 'js/core/course-index.js');
    runFile(context, 'js/srs/engine.js');

    assert.equal(context.migrarDecksSRSMultidioma(), true);
    assert.equal(JSON.parse(storage.getItem('ja_srs_a1_deck')).length, 1);
    assert.equal(JSON.parse(storage.getItem('en_srs_a1_deck')).length, 1);
    assert.equal(JSON.parse(storage.getItem('es_srs_a1_deck')).length, 1);
    assert.equal(JSON.parse(storage.getItem('ru_srs_a1_deck')).length, 1);
    assert.equal(JSON.parse(storage.getItem('srs_multilang_unresolved_v2')).length, 1);
    assert.equal(storage.getItem('srs_multilang_migration_v2'), 'true');
    assert.ok(JSON.parse(storage.getItem('srs_multilang_legacy_backup_v2')).legacySources.ja_srs_deck);

    const firstSnapshot = storage.snapshot();
    assert.equal(context.migrarDecksSRSMultidioma(), true);
    assert.deepEqual(storage.snapshot(), firstSnapshot);
});

test('migracao SRS preserva JSON invalido para recuperacao', () => {
    const storage = createStorage({ ja_srs_deck: '{json-invalido' });
    const context = createContext({ language: 'japanese', storage });
    runFile(context, 'js/core/constants.js');
    runFile(context, 'js/core/course-index.js');
    runFile(context, 'js/srs/engine.js');
    assert.equal(context.migrarDecksSRSMultidioma(), true);
    const unresolved = JSON.parse(storage.getItem('srs_multilang_unresolved_v2'));
    assert.equal(unresolved[0].reason, 'invalid-json');
    const backup = JSON.parse(storage.getItem('srs_multilang_legacy_backup_v2'));
    assert.equal(backup.legacySources.ja_srs_deck, '{json-invalido');
});

test('migracao SRS retoma escrita interrompida a partir do backup', () => {
    const storage = createStorage({
        ja_srs_deck: JSON.stringify([
            { id: 'a1_mod_01_d_0', modId: 'a1_mod_01' },
            { id: 'en_a1_mod_01_d_0', modId: 'en_a1_mod_01' }
        ])
    });
    const setItemOriginal = storage.setItem.bind(storage);
    let falhar = true;
    storage.setItem = (key, value) => {
        if (falhar && key === 'en_srs_a1_deck') throw new Error('quota simulada');
        setItemOriginal(key, value);
    };
    const context = createContext({ language: 'japanese', storage });
    runFile(context, 'js/core/constants.js');
    runFile(context, 'js/core/course-index.js');
    runFile(context, 'js/srs/engine.js');

    assert.equal(context.migrarDecksSRSMultidioma(), false);
    assert.equal(storage.getItem('srs_multilang_migration_v2'), null);
    assert.ok(storage.getItem('srs_multilang_legacy_backup_v2'));

    falhar = false;
    assert.equal(context.migrarDecksSRSMultidioma(), true);
    assert.equal(JSON.parse(storage.getItem('ja_srs_a1_deck')).length, 1);
    assert.equal(JSON.parse(storage.getItem('en_srs_a1_deck')).length, 1);
});

test('migracao SRS v2 respeita metadado antes do indice e prefixo', () => {
    const storage = createStorage({
        ja_srs_deck: JSON.stringify([
            { id: 'a1_mod_01_d_0', modId: 'a1_mod_01', language: 'ru-RU' }
        ])
    });
    const context = createContext({ language: 'japanese', storage });
    runFile(context, 'js/core/constants.js');
    runFile(context, 'js/core/course-index.js');
    runFile(context, 'js/srs/engine.js');

    assert.equal(context.migrarDecksSRSMultidioma(), true);
    assert.equal(storage.getItem('ja_srs_a1_deck'), null);
    assert.equal(JSON.parse(storage.getItem('ru_srs_a1_deck'))[0].language, 'ru-RU');
});

test('migracao SRS v2 usa o indice antes dos prefixos conhecidos', () => {
    const storage = createStorage({ ja_srs_deck: JSON.stringify([{ id: 'card-sem-prefixo', modId: 'modulo-indexado' }]) });
    const context = createContext({
        language: 'japanese',
        storage,
        globals: { getCourseModuleLanguage: identity => identity === 'modulo-indexado' ? 'es-ES' : null }
    });
    runFile(context, 'js/core/constants.js');
    runFile(context, 'js/srs/engine.js');

    assert.equal(context.migrarDecksSRSMultidioma(), true);
    assert.equal(JSON.parse(storage.getItem('es_srs_a1_deck'))[0].id, 'card-sem-prefixo');
});

test('migracao SRS v2 reprocessa artefatos v1 sem modifica-los', () => {
    const v1Backup = JSON.stringify({
        sources: { ja_srs_deck: JSON.stringify([{ id: 'en_a1_mod_01_d_0', modId: 'en_a1_mod_01', dueDate: 10 }]) }
    });
    const v1Unresolved = JSON.stringify([
        { sourceKey: 'ja_srs_deck', level: 'a1', reason: 'language-unresolved', card: { id: 'ru_a1_mod_01_d_0', modId: 'ru_a1_mod_01' } },
        { sourceKey: 'ja_srs_deck', level: 'a1', reason: 'language-unresolved', card: { id: 'ambiguo-v1' } }
    ]);
    const storage = createStorage({
        srs_multilang_migration_v1: 'true',
        srs_multilang_legacy_backup_v1: v1Backup,
        srs_multilang_unresolved_v1: v1Unresolved
    });
    const context = createContext({ language: 'japanese', storage });
    runFile(context, 'js/core/constants.js');
    runFile(context, 'js/core/course-index.js');
    runFile(context, 'js/srs/engine.js');

    assert.equal(context.migrarDecksSRSMultidioma(), true);
    assert.equal(JSON.parse(storage.getItem('en_srs_a1_deck')).length, 1);
    assert.equal(JSON.parse(storage.getItem('ru_srs_a1_deck')).length, 1);
    assert.equal(JSON.parse(storage.getItem('srs_multilang_unresolved_v2')).length, 1);
    assert.equal(storage.getItem('srs_multilang_migration_v1'), 'true');
    assert.equal(storage.getItem('srs_multilang_legacy_backup_v1'), v1Backup);
    assert.equal(storage.getItem('srs_multilang_unresolved_v1'), v1Unresolved);
});

test('migracao SRS v2 preserva o cartao mais recente e isola os 16 decks', () => {
    const languages = ['ja', 'en', 'es', 'ru'];
    const levels = ['a1', 'a2', 'b1', 'b2'];
    const initial = {};
    for (const language of languages) for (const level of levels) {
        initial[`${language}_srs_${level}_deck`] = JSON.stringify([{ id: `${language}-${level}-existente`, dueDate: 1 }]);
    }
    initial.ja_srs_deck = JSON.stringify([
        { id: 'en-a1-existente', language: 'en-US', dueDate: 99 },
        { id: 'novo-russo', language: 'ru-RU', dueDate: 2 }
    ]);
    const storage = createStorage(initial);
    const context = createContext({ language: 'japanese', storage });
    runFile(context, 'js/core/constants.js');
    runFile(context, 'js/core/course-index.js');
    runFile(context, 'js/srs/engine.js');

    assert.equal(context.migrarDecksSRSMultidioma(), true);
    const english = JSON.parse(storage.getItem('en_srs_a1_deck'));
    assert.equal(english.length, 1);
    assert.equal(english[0].dueDate, 99);
    assert.equal(JSON.parse(storage.getItem('ru_srs_a1_deck')).length, 2);
    for (const language of languages) for (const level of levels) {
        const deck = JSON.parse(storage.getItem(`${language}_srs_${level}_deck`));
        if (language === 'en' && level === 'a1') continue;
        if (language === 'ru' && level === 'a1') continue;
        assert.deepEqual(deck, [{ id: `${language}-${level}-existente`, dueDate: 1 }]);
    }
});

test('sessoes e historico persistem codigos canonicos', () => {
    const sessionContext = createContext({ document: false, globals: { crypto: null } });
    runFile(sessionContext, 'js/core/study-session.js');
    const controller = sessionContext.criarControladorSessaoEstudo({
        getUser: () => ({ uid: 'user-1' }),
        getXP: () => 0,
        now: () => Date.parse('2026-08-09T12:00:00Z'),
        setTimeout: () => 1,
        clearTimeout: () => {},
        minActiveSeconds: 0
    });
    assert.equal(controller.iniciar({ language: 'russian', activityType: 'course', contentId: 'ru-a1' }).language, 'ru-RU');
    controller.finalizar('switch');
    assert.equal(controller.iniciar({ language: 'italiano', activityType: 'course', contentId: 'it-a1' }).language, 'it-IT');

    const storageContext = createContext();
    runFile(storageContext, 'js/core/storage.js');
    const cyrillic = storageContext.normalizarTentativaSRS({ id: '1', language: 'ja-JP', deckType: 'cirilico' });
    const falseFriends = storageContext.normalizarTentativaSRS({ id: '2', language: 'ja-JP', deckType: 'falsos_amigos' });
    const phrasal = storageContext.normalizarTentativaSRS({ id: '3', language: 'ja-JP', deckType: 'phrasal_verbs' });
    assert.equal(cyrillic.language, 'ru-RU');
    assert.equal(falseFriends.language, 'es-ES');
    assert.equal(phrasal.language, 'en-US');
});

test('dashboard reconhece cinco idiomas, datasets e filtros', () => {
    const context = createContext({ language: 'all', mode: 'dashboard' });
    runFile(context, 'js/dashboard/meu-progresso.js');
    const russianFilter = plain(context.normalizarFiltrosEstatisticasDashboard({ language: 'ru-RU', period: 30, activity: 'all' }));
    const spanishFilter = plain(context.normalizarFiltrosEstatisticasDashboard({ language: 'es-ES', period: 30, activity: 'all' }));
    const italianFilter = plain(context.normalizarFiltrosEstatisticasDashboard({ language: 'it-IT', period: 30, activity: 'all' }));
    assert.equal(russianFilter.language, 'ru-RU');
    assert.equal(spanishFilter.language, 'es-ES');
    assert.equal(italianFilter.language, 'it-IT');
    vm.runInContext('globalThis.__languageIds = DASHBOARD_LANGUAGE_REGISTRY.map(item => item.id)', context);
    assert.deepEqual(plain(context.__languageIds), ['japanese', 'english', 'spanish', 'russian', 'italian']);

    for (const page of ['meu-progresso.html']) {
        const html = read(page);
        for (const code of ['ja-JP', 'en-US', 'es-ES', 'ru-RU', 'it-IT']) assert.match(html, new RegExp(`value="${code}"`));
        assert.match(html, /js\/core\/course-index\.js/);
        assert.doesNotMatch(html, /database\/(?:ja-JP|en-US|es-ES|ru-RU|it-IT)\/data_(?:curso|english|espanhol).*_(?:a1|a2|b1|b2)\.js/i);
    }
    const indexHtml = read('index.html');
    assert.match(indexHtml, /url=hub_idiomas\.html/);
    assert.match(indexHtml, /window\.location\.replace\('hub_idiomas\.html'\)/);

    const legacyProgresso = read('html/ja-JP/meu-progresso.html');
    assert.match(legacyProgresso, /url=\.\.\/\.\.\/meu-progresso\.html/);
    assert.match(legacyProgresso, /window\.location\.replace\('\.\.\/\.\.\/meu-progresso\.html'\)/);

    for (const key of ['it_srs_a1_deck', 'it_srs_a2_deck', 'it_srs_b1_deck', 'it_srs_b2_deck']) {
        assert.match(read('js/dashboard/meu-progresso.js'), new RegExp(`key: '${key}'`));
    }
});

test('curso italiano inclui A1, A2, B1 e B2 e isola indice, decks e progresso', () => {
    const context = createContext({ language: 'italian', pathname: '/html/it-IT/italiano_curso.html' });
    runFile(context, 'js/core/constants.js');
    runFile(context, 'js/core/course-index.js');
    runFile(context, 'database/it-IT/data_curso_italiano_a1.js');
    runFile(context, 'database/it-IT/data_curso_italiano_a2.js');
    runFile(context, 'database/it-IT/data_curso_italiano_b1.js');
    runFile(context, 'database/it-IT/data_curso_italiano_b2.js');
    runFile(context, 'js/core/utils.js');
    runFile(context, 'js/srs/engine.js');
    assert.equal(context.getCurrentLanguageCode(), 'it-IT');
    assert.equal(context.getCourseModuleIds('it-IT', 'A1').length, 30);
    assert.equal(context.getCourseModuleIds('it-IT', 'A2').length, 30);
    assert.equal(context.getCourseModuleIds('it-IT', 'B1').length, 24);
    assert.equal(context.getCourseModuleIds('it-IT', 'B2').length, 24);
    assert.equal(context.getCourseModuleLanguage('it_a1_mod_17_card_2'), 'it-IT');
    assert.equal(context.getCourseData('italiano').length, 30);
    assert.equal(context.getTodosOsCursos().A1.length, 30);
    assert.equal(context.getTodosOsCursos().A2.length, 30);
    assert.equal(context.getTodosOsCursos().B1.length, 24);
    assert.equal(context.getTodosOsCursos().B2.length, 24);
    assert.deepEqual(plain(Object.keys(context.getTodosOsCursos()).filter(level => context.getTodosOsCursos()[level].length)), ['A1', 'A2', 'B1', 'B2']);
    assert.equal(context.getDeckKeySRS('a1'), 'it_srs_a1_deck');
    assert.equal(context.getDeckKeySRS('a2'), 'it_srs_a2_deck');
    assert.equal(context.getDeckKeySRS('b1'), 'it_srs_b1_deck');
    assert.equal(context.getDeckKeySRS('b2'), 'it_srs_b2_deck');

    const html = read('html/it-IT/italiano_curso.html');
    assert.doesNotMatch(html, /Ativar (?:Kanji|Kana|Furigana|Romaji)/);

    const minigameHtml = read('html/it-IT/italiano_minigame_conjugacao.html');
    const minigameScript = read('js/minigame/minigame_conjugacao.js');
    assert.match(minigameHtml, /id="btn-mode-typing"/);
    assert.match(minigameHtml, /id="arcade-typing-input"/);
    assert.match(minigameHtml, /js\/core\/study-session\.js/);
    assert.match(minigameScript, /iniciarSessaoEstudo\(/);
    assert.match(minigameScript, /atualizarSessaoEstudo\(/);
    assert.match(minigameScript, /finalizarSessaoEstudo\(/);
    assert.doesNotMatch(minigameScript, /registrarSessaoEstudo\(/);
});

test('Falsos Amigos usa AppState central e curso russo usa nivel SRS ativo', () => {
    const falseFriends = read('js/falsos_amigos/falsos_amigos.js');
    const russianCourse = read('html/ru-RU/russo_curso.html');
    const app = read('app.js');
    assert.match(falseFriends, /AppState\.user\.progressoGlobal/);
    assert.match(falseFriends, /AppState\.markModuleCompleted\(modId, faNivelAtivo\)/);
    assert.doesNotMatch(falseFriends, /localStorage\.setItem\('ja_progresso_global'/);
    assert.match(russianCourse, /onclick="iniciarSessaoSRS\(\)"/);
    assert.doesNotMatch(russianCourse, /iniciarSessaoSRS\('a1'\)/);
    assert.match(app, /tiposPermitidos[^;]+falsos_amigos/s);
    assert.match(app, /tiposPermitidos[^;]+cirilico/s);
});

test('Dashboard inicia revisoes especiais solicitadas pela URL', () => {
    for (const tipo of ['falsos_amigos', 'cirilico']) {
        const chamadas = [];
        const location = {
            pathname: tipo === 'cirilico' ? '/html/ru-RU/russo_alfabeto.html' : '/html/es-ES/espanhol_falsos_amigos.html',
            search: `?iniciar_srs=${tipo}`,
            hash: ''
        };
        const document = {
            body: { getAttribute: () => null },
            addEventListener() {}
        };
        const context = createContext({
            document: false,
            globals: {
                document,
                location,
                URLSearchParams,
                history: { replaceState() {} },
                addEventListener() {},
                requestAnimationFrame(callback) { callback(); },
                iniciarSessaoSRS(valor) { chamadas.push(valor); }
            }
        });
        runFile(context, 'app.js');
        context.processarRevisaoSolicitadaPeloDashboard();
        assert.deepEqual(chamadas, [tipo]);
    }
});

test('XP sincroniza imediatamente pelo AppState sem reescrever progresso legado', () => {
    const legacyProgress = JSON.stringify({ xp: 5, modulosConcluidos: ['legado'] });
    const storage = createStorage({ ja_user_xp: '100', ja_progresso_global: legacyProgress });
    const context = createContext({ storage });
    runFile(context, 'js/core/state.js');
    context.syncAppStateMirror();

    const originalSetXP = context.AppState.setXP.bind(context.AppState);
    let setCalls = 0;
    context.AppState.setXP = value => {
        setCalls++;
        return originalSetXP(value);
    };
    runFile(context, 'js/game/xp.js');

    context.adicionarXP(50, 'teste');
    assert.equal(context.AppState.user.xp, 150);
    assert.equal(storage.getItem('ja_user_xp'), '150');
    context.removerXP(20, 'teste');
    assert.equal(context.AppState.user.xp, 130);
    assert.equal(storage.getItem('ja_user_xp'), '130');
    assert.equal(setCalls, 2);
    assert.equal(storage.getItem('ja_progresso_global'), legacyProgress);
    assert.doesNotMatch(read('js/game/xp.js'), /localStorage\.setItem\('ja_progresso_global'/);
    assert.doesNotMatch(read('js/core/storage.js'), /localStorage\.setItem\('ja_progresso_global'/);
});

test('XP mantem fallback moderno quando o AppState nao esta disponivel', () => {
    const storage = createStorage({ ja_user_xp: '20' });
    const context = createContext({ storage });
    runFile(context, 'js/game/xp.js');
    context.adicionarXP(5);
    assert.equal(storage.getItem('ja_user_xp'), '25');
});

test('XP hibrido por idioma e cargos tematicos operam nos cinco idiomas', () => {
    const storage = createStorage({ ja_user_xp: '300' });
    const context = createContext({ storage });
    runFile(context, 'js/game/xp.js');

    const xpInicial = context.obterXPPorIdioma();
    assert.equal(xpInicial.japanese, 300);
    assert.equal(xpInicial.english, 0);

    assert.equal(context.normalizarIdiomaCargo('ja-JP'), 'japanese');
    assert.equal(context.normalizarIdiomaCargo('english'), 'english');
    assert.equal(context.normalizarIdiomaCargo('es-ES'), 'spanish');
    assert.equal(context.normalizarIdiomaCargo('ru-RU'), 'russian');
    assert.equal(context.normalizarIdiomaCargo('it-IT'), 'italian');
    assert.equal(context.normalizarIdiomaCargo('desconhecido'), 'global');

    // 1. Matriz Japonesa
    assert.deepEqual(plain(context.obterCargoPorNivel(1, 'japanese')), { minLvl: 1, titulo: 'Aprendiz', icone: '⛩️' });
    assert.deepEqual(plain(context.obterCargoPorNivel(3, 'japanese')), { minLvl: 3, titulo: 'Samurai', icone: '⚔️' });
    assert.deepEqual(plain(context.obterCargoPorNivel(5, 'japanese')), { minLvl: 5, titulo: 'Ninja', icone: '🥷' });
    assert.deepEqual(plain(context.obterCargoPorNivel(10, 'japanese')), { minLvl: 10, titulo: 'Shogun', icone: '🏯' });
    assert.deepEqual(plain(context.obterCargoPorNivel(20, 'japanese')), { minLvl: 20, titulo: 'Daimyo', icone: '👑' });
    assert.deepEqual(plain(context.obterCargoPorNivel(50, 'japanese')), { minLvl: 50, titulo: 'Kami', icone: '🐉' });

    // 2. Matriz Inglesa
    assert.deepEqual(plain(context.obterCargoPorNivel(1, 'english')), { minLvl: 1, titulo: 'Rookie', icone: '🗽' });
    assert.deepEqual(plain(context.obterCargoPorNivel(3, 'english')), { minLvl: 3, titulo: 'Explorer', icone: '🧭' });
    assert.deepEqual(plain(context.obterCargoPorNivel(5, 'english')), { minLvl: 5, titulo: 'Pioneer', icone: '🚀' });
    assert.deepEqual(plain(context.obterCargoPorNivel(10, 'english')), { minLvl: 10, titulo: 'Master', icone: '🎩' });
    assert.deepEqual(plain(context.obterCargoPorNivel(20, 'english')), { minLvl: 20, titulo: 'Legend', icone: '🦅' });
    assert.deepEqual(plain(context.obterCargoPorNivel(50, 'english')), { minLvl: 50, titulo: 'Titan', icone: '⚡' });

    // 3. Matriz Espanhola
    assert.deepEqual(plain(context.obterCargoPorNivel(1, 'spanish')), { minLvl: 1, titulo: 'Novato', icone: '🌾' });
    assert.deepEqual(plain(context.obterCargoPorNivel(3, 'spanish')), { minLvl: 3, titulo: 'Hidalgo', icone: '🗡️' });
    assert.deepEqual(plain(context.obterCargoPorNivel(5, 'spanish')), { minLvl: 5, titulo: 'Conquistador', icone: '🏰' });
    assert.deepEqual(plain(context.obterCargoPorNivel(10, 'spanish')), { minLvl: 10, titulo: 'Maestro', icone: '🎭' });
    assert.deepEqual(plain(context.obterCargoPorNivel(20, 'spanish')), { minLvl: 20, titulo: 'Matador', icone: '🐂' });
    assert.deepEqual(plain(context.obterCargoPorNivel(50, 'spanish')), { minLvl: 50, titulo: 'Leyenda', icone: '🔥' });

    // 4. Matriz Russa
    assert.deepEqual(plain(context.obterCargoPorNivel(1, 'russian')), { minLvl: 1, titulo: 'Uchenik', icone: '📖' });
    assert.deepEqual(plain(context.obterCargoPorNivel(3, 'russian')), { minLvl: 3, titulo: 'Bogatyr', icone: '🛡️' });
    assert.deepEqual(plain(context.obterCargoPorNivel(5, 'russian')), { minLvl: 5, titulo: 'Boyar', icone: '🏰' });
    assert.deepEqual(plain(context.obterCargoPorNivel(10, 'russian')), { minLvl: 10, titulo: 'Voivoda', icone: '⚔️' });
    assert.deepEqual(plain(context.obterCargoPorNivel(20, 'russian')), { minLvl: 20, titulo: 'Tsar', icone: '👑' });
    assert.deepEqual(plain(context.obterCargoPorNivel(50, 'russian')), { minLvl: 50, titulo: 'Lenda', icone: '🐻' });

    // 5. Matriz Italiana
    assert.deepEqual(plain(context.obterCargoPorNivel(1, 'italian')), { minLvl: 1, titulo: 'Novizio', icone: '🍕' });
    assert.deepEqual(plain(context.obterCargoPorNivel(3, 'italian')), { minLvl: 3, titulo: 'Gladiatore', icone: '🏛️' });
    assert.deepEqual(plain(context.obterCargoPorNivel(5, 'italian')), { minLvl: 5, titulo: 'Cavaliere', icone: '⚔️' });
    assert.deepEqual(plain(context.obterCargoPorNivel(10, 'italian')), { minLvl: 10, titulo: 'Console', icone: '📜' });
    assert.deepEqual(plain(context.obterCargoPorNivel(20, 'italian')), { minLvl: 20, titulo: 'Rinascimentale', icone: '🎨' });
    assert.deepEqual(plain(context.obterCargoPorNivel(50, 'italian')), { minLvl: 50, titulo: 'Imperatore', icone: '🦅' });

    // 6. Matriz Global
    assert.deepEqual(plain(context.obterCargoPorNivel(1, 'global')), { minLvl: 1, titulo: 'Iniciante', icone: '🌱' });
    assert.deepEqual(plain(context.obterCargoPorNivel(10, 'global')), { minLvl: 10, titulo: 'Aprendiz de Idiomas', icone: '📖' });
    assert.deepEqual(plain(context.obterCargoPorNivel(25, 'global')), { minLvl: 25, titulo: 'Explorador Cultural', icone: '🧭' });
    assert.deepEqual(plain(context.obterCargoPorNivel(50, 'global')), { minLvl: 50, titulo: 'Bilíngue', icone: '📚' });
    assert.deepEqual(plain(context.obterCargoPorNivel(100, 'global')), { minLvl: 100, titulo: 'Trilíngue', icone: '🌍' });
    assert.deepEqual(plain(context.obterCargoPorNivel(150, 'global')), { minLvl: 150, titulo: 'Quadrilíngue', icone: '🏛️' });
    assert.deepEqual(plain(context.obterCargoPorNivel(200, 'global')), { minLvl: 200, titulo: 'Poliglota', icone: '👑' });
    assert.deepEqual(plain(context.obterCargoPorNivel(250, 'global')), { minLvl: 250, titulo: 'Mestre dos Idiomas', icone: '🌟' });

    // Concessao cumulativa nos 5 idiomas
    context.adicionarXP(100, 'aula ingles', 'english');
    context.adicionarXP(200, 'aula espanhol', 'spanish');
    context.adicionarXP(300, 'aula russo', 'russian');
    context.adicionarXP(400, 'aula italiano', 'italian');

    assert.equal(storage.getItem('ja_user_xp'), '1300');
    const xpFinal = context.obterXPPorIdioma();
    assert.equal(xpFinal.japanese, 300);
    assert.equal(xpFinal.english, 100);
    assert.equal(xpFinal.spanish, 200);
    assert.equal(xpFinal.russian, 300);
    assert.equal(xpFinal.italian, 400);

    // Deducao controlada
    context.removerXP(50, 'desmarcar', 'italian');
    assert.equal(storage.getItem('ja_user_xp'), '1250');
    assert.equal(context.obterXPPorIdioma().italian, 350);
});

test('widget do cabecalho contextual e modal com abas operam nos cinco idiomas e global', () => {
    const storage = createStorage({
        ja_user_xp: '1200',
        ja_xp_per_language: JSON.stringify({ japanese: 950, english: 250, spanish: 0, russian: 0, italian: 0 })
    });
    const container = { innerHTML: '' };
    const modalDinamico = { innerHTML: '' };
    const context = createContext({
        language: 'english',
        pathname: '/html/en-US/curso_ingles.html',
        storage
    });
    context.document.getElementById = id => {
        if (id === 'xp-profile-widget-container') return container;
        if (id === 'modal-cargos-conteudo-dinamico') return modalDinamico;
        return null;
    };
    runFile(context, 'js/game/xp.js');

    assert.equal(context.obterIdiomaPaginaAtual(), 'english');
    assert.equal(context.obterXPDoIdioma('english'), 250);
    assert.equal(context.obterXPDoIdioma('japanese'), 950);
    assert.equal(context.obterXPDoIdioma('global'), 1200);

    context.atualizarHeaderXP();
    assert.match(container.innerHTML, /Nível 3 • Explorer/);
    assert.match(container.innerHTML, /250 XP/);
    assert.match(container.innerHTML, /abrirModalNiveisECargos\('english'\)/);

    const conteudoAbaIngles = context.renderizarConteudoAbaCargos('english');
    assert.match(conteudoAbaIngles, /Nível 3 • Explorer/);
    assert.match(conteudoAbaIngles, /✓ Conquistado/);
    assert.match(conteudoAbaIngles, /⚡ Próximo/);
    assert.match(conteudoAbaIngles, /🔒 Nível 10/);
    assert.match(conteudoAbaIngles, /trocarAbaModalCargos\('japanese'\)/);

    const conteudoAbaJapones = context.renderizarConteudoAbaCargos('japanese');
    assert.match(conteudoAbaJapones, /Nível 10 • Shogun/);
    assert.match(conteudoAbaJapones, /950 XP/);

    const conteudoAbaGlobal = context.renderizarConteudoAbaCargos('global');
    assert.match(conteudoAbaGlobal, /Nível 13 • Aprendiz de Idiomas/);
    assert.match(conteudoAbaGlobal, /1200 XP/);
});

test('mural de patentes dos 5 idiomas integra com meu-progresso.html e meu-progresso.js', () => {
    const html = read('meu-progresso.html');
    assert.match(html, /id="dashboard-ranks-card"/);
    assert.match(html, /id="dashboard-ranks-grid"/);
    assert.match(html, /Mural de Patentes por Idioma/);

    const storage = createStorage({
        ja_user_xp: '2000',
        ja_xp_per_language: JSON.stringify({
            japanese: 1000,
            english: 500,
            spanish: 300,
            russian: 150,
            italian: 50
        })
    });
    const grid = { innerHTML: '' };
    const context = createContext({
        language: 'japanese',
        pathname: '/meu-progresso.html',
        storage
    });
    context.document.getElementById = id => {
        if (id === 'dashboard-ranks-grid') return grid;
        return null;
    };
    runFile(context, 'js/game/xp.js');
    runFile(context, 'js/dashboard/meu-progresso.js');

    context.renderizarMuralPatentesDashboard();
    assert.match(grid.innerHTML, /🇯🇵 Japonês/);
    assert.match(grid.innerHTML, /Shogun/);
    assert.match(grid.innerHTML, /Nível 11/);
    assert.match(grid.innerHTML, /1000 XP/);
    assert.match(grid.innerHTML, /abrirModalNiveisECargos\('japanese'\)/);

    assert.match(grid.innerHTML, /🇺🇸 Inglês/);
    assert.match(grid.innerHTML, /Pioneer/);
    assert.match(grid.innerHTML, /Nível 6/);
    assert.match(grid.innerHTML, /500 XP/);
    assert.match(grid.innerHTML, /abrirModalNiveisECargos\('english'\)/);

    assert.match(grid.innerHTML, /🇪🇸 Espanhol/);
    assert.match(grid.innerHTML, /Hidalgo/);
    assert.match(grid.innerHTML, /Nível 4/);
    assert.match(grid.innerHTML, /300 XP/);

    assert.match(grid.innerHTML, /🇷🇺 Russo/);
    assert.match(grid.innerHTML, /Uchenik/);
    assert.match(grid.innerHTML, /Nível 2/);
    assert.match(grid.innerHTML, /150 XP/);

    assert.match(grid.innerHTML, /🇮🇹 Italiano/);
    assert.match(grid.innerHTML, /Novizio/);
    assert.match(grid.innerHTML, /Nível 1/);
    assert.match(grid.innerHTML, /50 XP/);
});

test('sincronizacao Firebase cria backup e mescla XP por idioma sem perdas', () => {
    const storage = createStorage({
        ja_user_xp: '1000',
        ja_xp_per_language: JSON.stringify({
            japanese: 500,
            english: 300,
            spanish: 100,
            russian: 100,
            italian: 0
        })
    });
    const context = createContext({
        language: 'japanese',
        pathname: '/meu-progresso.html',
        storage
    });
    runFile(context, 'js/core/constants.js');
    runFile(context, 'js/core/state.js');
    runFile(context, 'js/game/xp.js');
    runFile(context, 'js/core/storage.js');

    assert.equal(typeof context.obterTodosXPsPorIdioma, 'function');
    assert.equal(typeof context.definirTodosXPsPorIdioma, 'function');
    assert.deepEqual(plain(context.obterTodosXPsPorIdioma()), {
        japanese: 500,
        english: 300,
        spanish: 100,
        russian: 100,
        italian: 0
    });

    const backup = context.criarBackupNuvem();
    assert.ok(backup.xpPorIdioma, 'backup da nuvem deve conter xpPorIdioma');
    assert.equal(backup.xpPorIdioma.japanese, 500);
    assert.equal(backup.xpPorIdioma.english, 300);

    const dadosNuvem = {
        progressoGlobal: {},
        xpTotal: 1200,
        xpPorIdioma: {
            japanese: 400,
            english: 300,
            spanish: 200,
            russian: 100,
            italian: 200
        }
    };

    context.aplicarDadosDoBackup(dadosNuvem, 'test-uid');

    const mesclado = plain(JSON.parse(storage.getItem('ja_xp_per_language')));
    assert.equal(mesclado.japanese, 500); // 500 local > 400 nuvem
    assert.equal(mesclado.english, 300);
    assert.equal(mesclado.spanish, 200);  // 200 nuvem > 100 local
    assert.equal(mesclado.russian, 100);
    assert.equal(mesclado.italian, 200);  // 200 nuvem > 0 local
});

test('motor de navegacao instantanea pre-carrega rotas e integra ao precache', () => {
    const instantNavSource = read('js/core/instant-nav.js');
    assert.match(instantNavSource, /link\.rel = 'prefetch'/);
    assert.match(instantNavSource, /link\.as = 'document'/);
    assert.match(instantNavSource, /fetch\(targetUrl\.href, \{ priority: 'low', cache: 'force-cache' \}\)/);
    assert.match(instantNavSource, /mouseover/);
    assert.match(instantNavSource, /touchstart/);
    assert.match(instantNavSource, /focusin/);

    const swSource = read('sw.js');
    assert.match(swSource, /'\.\/js\/core\/instant-nav\.js'/);

    for (const page of ['hub_idiomas.html', 'meu-progresso.html', 'hub_japones.html', 'hub_ingles.html', 'hub_espanhol.html', 'hub_russo.html', 'hub_italiano.html']) {
        const html = read(page);
        assert.match(html, /js\/core\/instant-nav\.js/);
    }
});

test('PWA russa, branding e auditoria mecanica estao protegidos', () => {
    const serviceWorker = read('sw.js');
    const dom = read('js/core/dom.js');
    const manifest = JSON.parse(read('manifest.json'));
    const packageData = JSON.parse(read('package.json'));
    const russianReport = read('tests/RUSSIAN_EDITORIAL_OCCURRENCES.md');
    assert.equal(manifest.name, 'Idiomas Academy');
    assert.equal(packageData.name, 'idiomas-academy');
    for (const [file, language] of [
        ['hub_japones.html', 'Japonês'],
        ['hub_ingles.html', 'Inglês'],
        ['hub_espanhol.html', 'Espanhol'],
        ['hub_russo.html', 'Russo'],
        ['hub_italiano.html', 'Italiano']
    ]) {
        const hub = read(file);
        assert.match(hub, new RegExp(`<title>${language} \\| Idiomas Academy<\\/title>`));
        assert.doesNotMatch(hub, new RegExp(`${language} Academy`));
        assert.match(hub, /href="hub_idiomas\.html" class="home-btn">/);
    }
    assert.match(serviceWorker, /idiomas-academy-v44/);
    assert.match(serviceWorker, /Abra o dicionário online primeiro/);
    assert.match(serviceWorker, /italiano_dicionario\.html/);
    assert.match(read('js/srs/engine.js'), /SRS_MIGRATION_LANGUAGES = Object\.freeze\(\['ja-JP', 'en-US', 'es-ES', 'ru-RU'\]\)/);
    assert.match(dom, /const currentLanguageCode = typeof getCurrentLanguageCode === 'function'/);
    assert.match(dom, /const readingOptionsHtml = currentLanguageCode === 'ja-JP' \? `/);
    assert.doesNotMatch(dom, /const readingOptionsHtml = isEnglishMode \?/);
    assert.match(serviceWorker, /cache\.addAll\(ASSETS_TO_CACHE\)/);
    assert.match(serviceWorker, /ignoreSearch:\s*true/);
    for (const asset of [
        'hub_russo.html', 'russo_curso.html', 'russo_alfabeto.html', 'russo_dicionario.html',
        'russo_minigame.html', 'data_curso_russo_a1.js', 'data_curso_russo_b2.js',
        'data_russo_cirilico.js', 'data_russo_dicionario.js', 'minigame_russo.js'
    ]) assert.match(serviceWorker, new RegExp(asset.replace('.', '\\.')));

    const russianSources = [
        'database/ru-RU/data_curso_russo_a1.js',
        'database/ru-RU/data_curso_russo_a2.js',
        'database/ru-RU/data_curso_russo_b1.js',
        'database/ru-RU/data_curso_russo_b2.js'
    ].map(read).join('\n');
    assert.doesNotMatch(russianSources, /Где\s+(?:você|voce)|ide[\u0400-\u04FF]/i);
    assert.match(russianReport, /Erros técnicos bloqueadores: 0/);
    assert.match(russianReport, /Arquivo \| Módulo \| Caminho do campo \| Motivo \| Valor/);
    assert.match(packageData.scripts['audit:russian'], /--write/);
    assert.match(packageData.scripts['audit:russian:check'], /russian-editorial-audit\.cjs/);
    assert.match(packageData.scripts['qa:dashboard'], /dashboard-visual-server\.cjs/);
    assert.doesNotMatch(read('meu-progresso.html'), /data-dashboard-qa-fixture/);
    assert.match(read('tests/RUSSIAN_EDITORIAL_REVIEW.md'), /não deve ser anunciado como linguisticamente certificado/i);
    assert.match(read('tests/ITALIAN_EDITORIAL_OCCURRENCES.md'), /Erros técnicos bloqueadores: 0/);
    assert.match(read('tests/ITALIAN_EDITORIAL_REVIEW.md'), /não deve ser anunciado como certificado por falante nativo/i);
    assert.match(packageData.scripts['audit:italian'], /--write/);
    assert.match(packageData.scripts['audit:italian:check'], /italian-editorial-audit\.cjs/);
});

test('hubs e imagens principais respeitam o orçamento leve', () => {
    const hubs = ['hub_idiomas.html', 'hub_japones.html', 'hub_ingles.html', 'hub_espanhol.html', 'hub_russo.html', 'hub_italiano.html'];
    hubs.forEach(file => {
        const html = read(file);
        const scriptsLocais = Array.from(html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g))
            .map(match => match[1])
            .filter(src => !/^https?:\/\//.test(src));
        assert.ok(scriptsLocais.length <= 16, `${file}: ${scriptsLocais.length} scripts locais`);
        assert.match(html, /<body\b[^>]*\bdata-page="hub"/);
        assert.doesNotMatch(html, /<script[^>]+src="database\//);
        assert.doesNotMatch(html, /js\/(?:course|kanji|phrasal|pronunciation|minigame)\//);
        assert.doesNotMatch(html, /js\/core\/(?:dictionary|course-index)\.js/);
    });
    assert.match(read('js/core/bootstrap.js'), /shouldLoadModuleNormalizer\s*&&[^\n]+normalizeModule/);
    assert.match(read('js/core/events.js'), /getAttribute\('data-page'\) === 'hub'\) return/);

    const dimensoesPng = file => {
        const buffer = fs.readFileSync(path.join(ROOT, file));
        assert.equal(buffer.toString('ascii', 1, 4), 'PNG', `${file}: PNG inválido`);
        return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20), bytes: buffer.length };
    };
    const logo = dimensoesPng('logo.png');
    const favicon192 = dimensoesPng('favicon.png');
    const favicon512 = dimensoesPng('favicon-512.png');
    assert.deepEqual([logo.width, logo.height], [1024, 1024]);
    assert.deepEqual([favicon192.width, favicon192.height], [192, 192]);
    assert.deepEqual([favicon512.width, favicon512.height], [512, 512]);
    assert.ok(logo.bytes + favicon192.bytes + favicon512.bytes <= 1024 * 1024, 'imagens principais excedem 1 MB');

    const manifest = JSON.parse(read('manifest.json'));
    const serviceWorker = read('sw.js');
    assert.equal(manifest.icons[0].src, 'favicon.png');
    assert.equal(manifest.icons[0].sizes, '192x192');
    assert.equal(manifest.icons[1].src, 'favicon-512.png');
    assert.equal(manifest.icons[1].sizes, '512x512');
    assert.match(serviceWorker, /'\.\/favicon-512\.png'/);
});

test('hub de Kanji carrega somente os dados e módulos necessários', () => {
    const file = 'html/ja-JP/kanji.html';
    const html = read(file);
    const scripts = Array.from(html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g))
        .map(match => match[1]);
    const scriptsLocais = scripts.filter(src => !/^https?:\/\//.test(src));
    const bytesLocais = scriptsLocais.reduce((total, src) => {
        const caminho = path.resolve(ROOT, path.dirname(file), src.split(/[?#]/)[0]);
        return total + fs.statSync(caminho).size;
    }, 0);

    assert.ok(scriptsLocais.length <= 21, `${scriptsLocais.length} scripts locais no hub de Kanji`);
    assert.ok(bytesLocais <= 750 * 1024, `${Math.round(bytesLocais / 1024)} KB no hub de Kanji`);
    assert.deepEqual(
        scriptsLocais.filter(src => /database\/ja-JP\/data_kanji_n\d\.js/.test(src)),
        ['../../database/ja-JP/data_kanji_n5.js']
    );
    assert.doesNotMatch(html, /wanakana/);
    assert.doesNotMatch(html, /js\/(?:course|phrasal|pronunciation|minigame)\//);
    assert.doesNotMatch(html, /js\/core\/dictionary\.js/);
    assert.doesNotMatch(html, /js\/kanji\/kanji-canvas\.js/);
    assert.match(html, /js\/kanji\/kanji-render\.js/);
    assert.match(read('js/core/bootstrap.js'), /getElementById\('tabContainer'\)/);
});

test('cursos principais carregam apenas os motores comuns de aula e progresso', () => {
    const courses = [
        {
            file: 'html/ja-JP/curso.html',
            locale: 'ja-JP',
            scripts: 27,
            // Baseline recalibrado para os 151 contratos textuais A1/A2 da Fase 3B.
            // Fase 18: 173 correções editoriais rastreadas nos quatro datasets, sem novas dependências.
            maxBytes: 1690 * 1024,
            dataPattern: /database\/ja-JP\/data_curso_[a-b][1-2]\.js/
        },
        {
            file: 'html/en-US/curso_ingles.html',
            locale: 'en-US',
            scripts: 27,
            maxBytes: 1060 * 1024,
            dataPattern: /database\/en-US\/data_english_[a-b][1-2]\.js/
        },
        {
            file: 'html/es-ES/espanhol_curso.html',
            locale: 'es-ES',
            scripts: 27,
            maxBytes: 1625 * 1024,
            dataPattern: /database\/es-ES\/data_espanhol_[a-b][1-2]\.js/
        },
        {
            file: 'html/ru-RU/russo_curso.html',
            locale: 'ru-RU',
            scripts: 27,
            maxBytes: 985 * 1024,
            dataPattern: /database\/ru-RU\/data_curso_russo_[a-b][1-2]\.js/,
            dataCount: 4
        },
        {
            file: 'html/it-IT/italiano_curso.html',
            locale: 'it-IT',
            scripts: 27,
            maxBytes: 1060 * 1024,
            dataPattern: /database\/it-IT\/data_curso_italiano_[a-b][1-2]\.js/,
            dataCount: 4
        }
    ];

    courses.forEach(course => {
        const html = read(course.file);
        const scriptsLocais = Array.from(html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g))
            .map(match => match[1])
            .filter(src => !/^https?:\/\//.test(src));
        const bytesLocais = scriptsLocais.reduce((total, src) => {
            const caminho = path.resolve(ROOT, path.dirname(course.file), src.split(/[?#]/)[0]);
            return total + fs.statSync(caminho).size;
        }, 0);

        assert.equal(scriptsLocais.length, course.scripts, `${course.locale}: quantidade inesperada de scripts`);
        assert.ok(bytesLocais <= course.maxBytes, `${course.locale}: ${Math.round(bytesLocais / 1024)} KB locais`);
        assert.equal(scriptsLocais.filter(src => course.dataPattern.test(src)).length, course.dataCount || 4, `${course.locale}: quantidade inesperada de datasets`);
        assert.match(html, /js\/course\/moduleNormalizer\.js/);
        assert.ok(
            html.indexOf('js/course/moduleNormalizer.js') < html.indexOf('js/course/course.js'),
            `${course.locale}: o normalizador deve carregar antes do motor de aula`
        );
        assert.match(html, /js\/course\/tabs\.js/);
        assert.match(html, /js\/course\/course\.js/);
        assert.match(html, /js\/course\/quiz\.js/);
        assert.match(html, /js\/game\/xp\.js/);
        assert.match(html, /js\/game\/ranking\.js/);
        assert.match(html, /js\/core\/course-index\.js/);
        assert.match(html, /js\/srs\/(?:engine|deck|review)\.js/);
        assert.doesNotMatch(html, /canvas-confetti/);
        assert.doesNotMatch(html, /js\/core\/dictionary\.js/);
        assert.doesNotMatch(html, /js\/(?:phrasal|pronunciation|minigame|kanji)\//);
        assert.doesNotMatch(html, /js\/game\/minigames\.js/);
        assert.match(read('sw.js'), new RegExp(course.file.replaceAll('/', '\\/')));
    });
});

test('trilhas JLPT carregam apenas o dataset e os motores usados pela pagina', () => {
    const budgets = {
        // A Fase 1 e 2 de gamificação multidioma acrescentam a matriz oficial de cargos e abas nos 5 idiomas.
        n5: 725 * 1024,
        n4: 735 * 1024,
        // O contrato editorial N3 acrescenta conversão e metadados de revisão em tempo de execução.
        n3: 998 * 1024,
        n2: 1033 * 1024,
        n1: 1823 * 1024
    };

    Object.entries(budgets).forEach(([level, maxBytes]) => {
        const file = `html/ja-JP/kanji_${level}.html`;
        const html = read(file);
        const scriptsLocais = Array.from(html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g))
            .map(match => match[1])
            .filter(src => !/^https?:\/\//.test(src));
        const bytesLocais = scriptsLocais.reduce((total, src) => {
            const caminho = path.resolve(ROOT, path.dirname(file), src.split(/[?#]/)[0]);
            return total + fs.statSync(caminho).size;
        }, 0);

        const usesDraftHelper = ['n3', 'n2', 'n1'].includes(level);
        assert.equal(scriptsLocais.length, usesDraftHelper ? 26 : 25, `${level.toUpperCase()}: quantidade inesperada de scripts locais`);
        if (usesDraftHelper) {
            assert.equal(scriptsLocais[0], '../../js/kanji/romaji-draft.js', `${level.toUpperCase()}: helper deve preceder o dataset`);
        } else {
            assert.doesNotMatch(html, /js\/kanji\/romaji-draft\.js/);
        }
        assert.ok(bytesLocais <= maxBytes, `${level.toUpperCase()}: ${Math.round(bytesLocais / 1024)} KB locais`);
        assert.deepEqual(
            scriptsLocais.filter(src => /database\/ja-JP\/data_kanji_n\d\.js/.test(src)),
            [`../../database/ja-JP/data_kanji_${level}.js`]
        );
        assert.match(html, /js\/course\/tabs\.js/);
        assert.match(html, /js\/course\/course\.js/);
        assert.match(html, /js\/course\/quiz\.js/);
        assert.match(html, /js\/kanji\/kanji-render\.js/);
        assert.match(html, /js\/kanji\/kanji-canvas\.js/);
        assert.match(html, /js\/srs\/(?:engine|deck|review)\.js/);
        assert.doesNotMatch(html, /wanakana/);
        assert.doesNotMatch(html, /js\/core\/dictionary\.js/);
        assert.doesNotMatch(html, /js\/(?:phrasal|pronunciation|minigame)\//);
        assert.doesNotMatch(html, /js\/game\/minigames\.js/);
        assert.match(read('sw.js'), new RegExp(`html/ja-JP/kanji_${level}\\.html`));
    });
});

test('dicionário japonês usa índice pré-compilado equivalente e leve', () => {
    const file = 'html/ja-JP/dicionario.html';
    const html = read(file);
    const scriptsLocais = Array.from(html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g))
        .map(match => match[1])
        .filter(src => !/^https?:\/\//.test(src));
    const bytesLocais = scriptsLocais.reduce((total, src) => {
        const caminho = path.resolve(ROOT, path.dirname(file), src.split(/[?#]/)[0]);
        return total + fs.statSync(caminho).size;
    }, 0);

    assert.ok(scriptsLocais.length <= 22, `${scriptsLocais.length} scripts locais no dicionário japonês`);
    assert.ok(bytesLocais <= 1600 * 1024, `${Math.round(bytesLocais / 1024)} KB no dicionário japonês`);
    assert.match(html, /database\/ja-JP\/data_dicionario_index\.js/);
    assert.doesNotMatch(html, /database\/ja-JP\/(?:data_curso_|data_kanji_|data_hiragana|data_katakana)/);
    assert.doesNotMatch(html, /js\/(?:course|phrasal|pronunciation|minigame)\//);
    assert.doesNotMatch(html, /js\/kanji\/kanji-render\.js/);
    assert.match(html, /js\/kanji\/kanji-canvas\.js/);
    assert.match(read('sw.js'), /database\/ja-JP\/data_dicionario_index\.js/);
    assert.match(read('package.json'), /"index:dictionary:check"/);
});

test('dicionarios de ingles, espanhol, russo e italiano usam indices leves sem perder recursos auxiliares', () => {
    const pages = [
        {
            file: 'html/en-US/dicionario_ingles.html',
            locale: 'en-US',
            maxScripts: 21,
            maxBytes: 700 * 1024,
            forbiddenData: /database\/en-US\/(?:data_english_|data_phrasal_verbs|data_pronunciation)/
        },
        {
            file: 'html/es-ES/espanhol_dicionario.html',
            locale: 'es-ES',
            maxScripts: 19,
            maxBytes: 850 * 1024,
            forbiddenData: /database\/es-ES\/data_espanhol_/
        },
        {
            file: 'html/ru-RU/russo_dicionario.html',
            locale: 'ru-RU',
            maxScripts: 18,
            maxBytes: 620 * 1024,
            forbiddenData: /database\/ru-RU\/(?:data_curso_russo_|data_russo_cirilico|data_russo_dicionario)/,
            precached: true
        },
        {
            file: 'html/it-IT/italiano_dicionario.html',
            locale: 'it-IT',
            maxScripts: 21,
            maxBytes: 750 * 1024,
            forbiddenData: /database\/it-IT\/(?:data_curso_italiano_|data_italiano_dicionario)/,
            precached: false
        }
    ];

    pages.forEach(page => {
        const html = read(page.file);
        const scriptsLocais = Array.from(html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g))
            .map(match => match[1])
            .filter(src => !/^https?:\/\//.test(src));
        const bytesLocais = scriptsLocais.reduce((total, src) => {
            const caminho = path.resolve(ROOT, path.dirname(page.file), src.split(/[?#]/)[0]);
            return total + fs.statSync(caminho).size;
        }, 0);

        assert.ok(scriptsLocais.length <= page.maxScripts, `${page.locale}: ${scriptsLocais.length} scripts locais`);
        assert.ok(bytesLocais <= page.maxBytes, `${page.locale}: ${Math.round(bytesLocais / 1024)} KB locais`);
        assert.match(html, new RegExp(`database/${page.locale}/data_dicionario_index\\.js`));
        assert.doesNotMatch(html, page.forbiddenData);
        assert.doesNotMatch(html, /js\/course\/(?:moduleNormalizer|tabs|course|quiz)\.js/);
        assert.doesNotMatch(html, /js\/(?:phrasal|pronunciation|minigame)\//);
        const indexPattern = new RegExp(`database/${page.locale}/data_dicionario_index\\.js`);
        if (page.precached === false) assert.doesNotMatch(read('sw.js'), indexPattern);
        else assert.match(read('sw.js'), indexPattern);
    });

    assert.match(read('database/es-ES/data_dicionario_index.js'), /SPANISH_DICTIONARY_TABLES/);
    assert.match(read('database/ru-RU/data_dicionario_index.js'), /RUSSIAN_DICTIONARY_CASES/);
    assert.match(read('js/core/dictionary.js'), /ENGLISH_DICTIONARY_INDEX/);
    assert.match(read('js/core/dictionary.js'), /SPANISH_DICTIONARY_INDEX/);
    assert.match(read('js/core/dictionary.js'), /RUSSIAN_DICTIONARY_INDEX/);
    assert.match(read('js/core/dictionary.js'), /ITALIAN_DICTIONARY_INDEX/);
    assert.match(read('js/core/dictionary.js'), /!isRussianMode && !isItalianMode/);
    assert.ok(JSON.parse(read('database/it-IT/data_dicionario_index.js').match(/Object\.freeze\((\[.*\])\);/)[1]).length >= 250);
});

test('minigame japonês usa conjunto leve e equivalente de Kanji', () => {
    const file = 'html/ja-JP/minigame.html';
    const html = read(file);
    const scriptsLocais = Array.from(html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g))
        .map(match => match[1])
        .filter(src => !/^https?:\/\//.test(src));
    const bytesLocais = scriptsLocais.reduce((total, src) => {
        const caminho = path.resolve(ROOT, path.dirname(file), src.split(/[?#]/)[0]);
        return total + fs.statSync(caminho).size;
    }, 0);

    assert.ok(scriptsLocais.length <= 19, `${scriptsLocais.length} scripts locais no minigame japonês`);
    assert.ok(bytesLocais <= 500 * 1024, `${Math.round(bytesLocais / 1024)} KB no minigame japonês`);
    assert.match(html, /database\/ja-JP\/data_minigame_kanji_index\.js/);
    assert.doesNotMatch(html, /database\/ja-JP\/data_kanji_n\d\.js/);
    assert.doesNotMatch(html, /js\/(?:course|phrasal|pronunciation|kanji)\//);
    assert.doesNotMatch(html, /js\/core\/(?:dictionary|course-index)\.js/);
    assert.doesNotMatch(html, /js\/srs\//);
    assert.match(read('js/game/minigames.js'), /JAPANESE_MINIGAME_KANJI_INDEX/);
    assert.match(read('sw.js'), /database\/ja-JP\/data_minigame_kanji_index\.js/);
    assert.match(read('package.json'), /"index:minigame:check"/);
});

test('escuta japonesa usa indice leve, voz local e nenhuma avaliacao artificial', () => {
    const file = 'html/ja-JP/escuta.html';
    const html = read(file);
    const scriptsLocais = Array.from(html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g))
        .map(match => match[1]).filter(src => !/^https?:\/\//.test(src));
    const bytesLocais = scriptsLocais.reduce((total, src) => {
        const caminho = path.resolve(ROOT, path.dirname(file), src.split(/[?#]/)[0]);
        return total + fs.statSync(caminho).size;
    }, 0);
    assert.ok(scriptsLocais.length <= 18, `${scriptsLocais.length} scripts locais na escuta japonesa`);
    // Fase 18: 44 diálogos B1/B2 recuperados elevaram o índice de 265 para 309 itens.
    assert.ok(bytesLocais <= 415 * 1024, `${Math.round(bytesLocais / 1024)} KB na escuta japonesa`);
    assert.match(html, /database\/ja-JP\/data_escuta_index\.js/);
    assert.doesNotMatch(html, /data_curso_[a-b][1-2]\.js|js\/srs\//);
    assert.match(read('js/japanese/listening.js'), /activityType: 'pronunciation'/);
    assert.doesNotMatch(read('js/japanese/listening.js'), /adicionarXP|processarAvaliacaoSRS|localStorage/);
    assert.match(read('sw.js'), /html\/ja-JP\/escuta\.html/);
});

test('biblioteca japonesa usa indice leve e niveis JLPT sem equivalencia CEFR', () => {
    const file = 'html/ja-JP/leitura.html', html = read(file);
    const scripts = Array.from(html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)).map(match => match[1]).filter(src => !/^https?:\/\//.test(src));
    const bytes = scripts.reduce((sum, src) => sum + fs.statSync(path.resolve(ROOT, path.dirname(file), src.split(/[?#]/)[0])).size, 0);
    assert.ok(scripts.length <= 18); assert.ok(bytes <= 435 * 1024, `${Math.round(bytes / 1024)} KB na biblioteca japonesa`);
    assert.match(html, /data_leitura_index\.js/); assert.doesNotMatch(html, /data_kanji_n[1-5]\.js/);
    assert.match(read('js/japanese/reading.js'), /sanitizeReadingHtml/);
    assert.doesNotMatch(read('tests/japanese-reading-index.cjs'), /jlptToCefr|A1.*N5/i);
});

test('referencia gramatical japonesa usa indice leve e taxonomias independentes', () => {
    const file = 'html/ja-JP/gramatica.html', html = read(file);
    const scripts = Array.from(html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)).map(match => match[1]).filter(src => !/^https?:\/\//.test(src));
    const bytes = scripts.reduce((sum, src) => sum + fs.statSync(path.resolve(ROOT, path.dirname(file), src.split(/[?#]/)[0])).size, 0);
    assert.ok(scripts.length <= 18); assert.ok(bytes <= 550 * 1024, `${Math.round(bytes / 1024)} KB na referência gramatical japonesa`);
    assert.match(html, /data_gramatica_index\.js/); assert.doesNotMatch(html, /data_curso_[a-b][1-2]\.js|data_kanji_n[1-5]\.js/);
    assert.match(html, /id="grammar-cefr"/); assert.match(html, /id="grammar-jlpt"/);
    assert.doesNotMatch(read('tests/japanese-grammar-index.cjs'), /cefrEquivalent|jlptEquivalent|jlptToCefr/i);
});

test('oficina de escrita japonesa usa modelos leves sem persistir texto livre', () => {
    const file = 'html/ja-JP/escrita.html', html = read(file);
    const scripts = Array.from(html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)).map(match => match[1]).filter(src => !/^https?:\/\//.test(src));
    const bytes = scripts.reduce((sum, src) => sum + fs.statSync(path.resolve(ROOT, path.dirname(file), src.split(/[?#]/)[0])).size, 0);
    assert.ok(scripts.length <= 18); assert.ok(bytes <= 525 * 1024, `${Math.round(bytes / 1024)} KB na oficina de escrita japonesa`);
    assert.match(html, /data_escrita_index\.js/); assert.doesNotMatch(html, /data_curso_[a-b][1-2]\.js/);
    const source = read('js/japanese/writing.js'); assert.match(source, /normalizeWritingComparison/); assert.doesNotMatch(source, /localStorage|sessionStorage|fetch\(|firebase/i);
});

test('preparacao JLPT usa indice leve e nao mistura referencia com escala oficial', () => {
    const file = 'html/ja-JP/jlpt.html', html = read(file);
    const scripts = Array.from(html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)).map(match => match[1]).filter(src => !/^https?:\/\//.test(src));
    const bytes = scripts.reduce((sum, src) => sum + fs.statSync(path.resolve(ROOT, path.dirname(file), src.split(/[?#]/)[0])).size, 0);
    assert.ok(scripts.length <= 17); assert.ok(bytes <= 900 * 1024, `${Math.round(bytes / 1024)} KB na preparação JLPT`);
    assert.match(html, /data_jlpt_pratica_index\.js/); assert.doesNotMatch(html, /data_kanji_n[1-5]\.js/);
    const source = read('js/japanese/jlpt.js'); assert.match(source, /selectJlptSession/); assert.doesNotMatch(source, /localStorage|sessionStorage|scaledScore|cefr/i);
});

test('hub japonês final permanece leve e Dashboard ignora sessoes de outros idiomas', () => {
    const file = 'hub_japones.html', html = read(file);
    const scripts = Array.from(html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)).map(match => match[1]).filter(src => !/^https?:\/\//.test(src));
    const bytes = scripts.reduce((sum, src) => sum + fs.statSync(path.resolve(ROOT, path.dirname(file), src.split(/[?#]/)[0])).size, 0);
    assert.ok(scripts.length <= 16); assert.ok(bytes <= 350 * 1024, `${Math.round(bytes / 1024)} KB no hub japonês final`);
    assert.equal((html.match(/data-skill-group=/g) || []).length, 4); assert.match(html, /meu-progresso\.html/);
    const dashboard = read('js/dashboard/meu-progresso.js'); assert.match(dashboard, /sessao\.language !== 'ja-JP'/); assert.doesNotMatch(dashboard.slice(dashboard.indexOf('const JAPANESE_SKILL_REGISTRY'), dashboard.indexOf('function formatarUltimaAtividadeHabilidadeJaponesa')), /dailyAggregates|localStorage/);
});

const failed = results.filter(result => !result.ok);
if (failed.length > 0) {
    console.error(`\n${failed.length}/${results.length} cenários multidioma falharam.`);
    process.exitCode = 1;
} else {
    console.log(`\n${results.length}/${results.length} cenários multidioma aprovados.`);
}
