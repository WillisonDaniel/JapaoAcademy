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

test('autoridade central normaliza os quatro idiomas e rejeita valor explicito desconhecido', () => {
    const cases = [
        ['japanese', '/html/ja-JP/curso.html', 'ja-JP'],
        ['english', '/html/en-US/curso_ingles.html', 'en-US'],
        ['spanish', '/html/es-ES/espanhol_curso.html', 'es-ES'],
        ['russian', '/html/ru-RU/russo_curso.html', 'ru-RU']
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

test('SRS produz 16 chaves independentes e preserva decks especiais', () => {
    const context = createContext({ language: 'japanese' });
    runFile(context, 'js/core/constants.js');
    runFile(context, 'js/srs/engine.js');
    const languages = ['ja-JP', 'en-US', 'es-ES', 'ru-RU'];
    const levels = ['a1', 'a2', 'b1', 'b2'];
    const keys = languages.flatMap(language => levels.map(level => context.getDeckKeySRS(level, language)));
    assert.equal(new Set(keys).size, 16);
    assert.equal(context.getDeckKeySRS('a1', 'ja-JP'), 'ja_srs_a1_deck');
    assert.equal(context.getDeckKeySRS('b2', 'ru-RU'), 'ru_srs_b2_deck');
    assert.equal(context.getDeckKeySRS('cirilico'), 'ru_srs_cirilico_deck');
    assert.equal(context.getDeckKeySRS('falsos_amigos'), 'es_srs_falsos_amigos_deck');
    assert.equal(context.getDeckKeySRS('phrasal_verbs'), 'en_srs_phrasal_verbs_deck');
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
    runFile(context, 'js/srs/engine.js');

    assert.equal(context.migrarDecksSRSMultidioma(), true);
    assert.equal(JSON.parse(storage.getItem('ja_srs_a1_deck')).length, 1);
    assert.equal(JSON.parse(storage.getItem('en_srs_a1_deck')).length, 1);
    assert.equal(JSON.parse(storage.getItem('es_srs_a1_deck')).length, 1);
    assert.equal(JSON.parse(storage.getItem('ru_srs_a1_deck')).length, 1);
    assert.equal(JSON.parse(storage.getItem('srs_multilang_unresolved_v1')).length, 1);
    assert.equal(storage.getItem('srs_multilang_migration_v1'), 'true');
    assert.ok(JSON.parse(storage.getItem('srs_multilang_legacy_backup_v1')).sources.ja_srs_deck);

    const firstSnapshot = storage.snapshot();
    assert.equal(context.migrarDecksSRSMultidioma(), true);
    assert.deepEqual(storage.snapshot(), firstSnapshot);
});

test('migracao SRS preserva JSON invalido para recuperacao', () => {
    const storage = createStorage({ ja_srs_deck: '{json-invalido' });
    const context = createContext({ language: 'japanese', storage });
    runFile(context, 'js/core/constants.js');
    runFile(context, 'js/srs/engine.js');
    assert.equal(context.migrarDecksSRSMultidioma(), true);
    const unresolved = JSON.parse(storage.getItem('srs_multilang_unresolved_v1'));
    assert.equal(unresolved[0].reason, 'invalid-json');
    const backup = JSON.parse(storage.getItem('srs_multilang_legacy_backup_v1'));
    assert.equal(backup.sources.ja_srs_deck, '{json-invalido');
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
    runFile(context, 'js/srs/engine.js');

    assert.equal(context.migrarDecksSRSMultidioma(), false);
    assert.equal(storage.getItem('srs_multilang_migration_v1'), null);
    assert.ok(storage.getItem('srs_multilang_legacy_backup_v1'));

    falhar = false;
    assert.equal(context.migrarDecksSRSMultidioma(), true);
    assert.equal(JSON.parse(storage.getItem('ja_srs_a1_deck')).length, 1);
    assert.equal(JSON.parse(storage.getItem('en_srs_a1_deck')).length, 1);
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

    const storageContext = createContext();
    runFile(storageContext, 'js/core/storage.js');
    const cyrillic = storageContext.normalizarTentativaSRS({ id: '1', language: 'ja-JP', deckType: 'cirilico' });
    const falseFriends = storageContext.normalizarTentativaSRS({ id: '2', language: 'ja-JP', deckType: 'falsos_amigos' });
    const phrasal = storageContext.normalizarTentativaSRS({ id: '3', language: 'ja-JP', deckType: 'phrasal_verbs' });
    assert.equal(cyrillic.language, 'ru-RU');
    assert.equal(falseFriends.language, 'es-ES');
    assert.equal(phrasal.language, 'en-US');
});

test('dashboard reconhece quatro idiomas, datasets e filtros', () => {
    const context = createContext({ language: 'all', mode: 'dashboard' });
    runFile(context, 'js/dashboard/meu-progresso.js');
    const russianFilter = plain(context.normalizarFiltrosEstatisticasDashboard({ language: 'ru-RU', period: 30, activity: 'all' }));
    const spanishFilter = plain(context.normalizarFiltrosEstatisticasDashboard({ language: 'es-ES', period: 30, activity: 'all' }));
    assert.equal(russianFilter.language, 'ru-RU');
    assert.equal(spanishFilter.language, 'es-ES');
    vm.runInContext('globalThis.__languageIds = DASHBOARD_LANGUAGE_REGISTRY.map(item => item.id)', context);
    assert.deepEqual(plain(context.__languageIds), ['japanese', 'english', 'spanish', 'russian']);

    for (const page of ['index.html', 'meu-progresso.html']) {
        const html = read(page);
        for (const code of ['ja-JP', 'en-US', 'es-ES', 'ru-RU']) assert.match(html, new RegExp(`value="${code}"`));
        assert.match(html, /js\/core\/course-index\.js/);
        assert.doesNotMatch(html, /database\/(?:ja-JP|en-US|es-ES|ru-RU)\/data_(?:curso|english|espanhol).*_(?:a1|a2|b1|b2)\.js/i);
    }
});

test('Falsos Amigos usa AppState central e curso russo usa nivel SRS ativo', () => {
    const falseFriends = read('js/falsos_amigos/falsos_amigos.js');
    const russianCourse = read('html/ru-RU/russo_curso.html');
    assert.match(falseFriends, /AppState\.user\.progressoGlobal/);
    assert.match(falseFriends, /AppState\.markModuleCompleted\(modId, faNivelAtivo\)/);
    assert.doesNotMatch(falseFriends, /localStorage\.setItem\('ja_progresso_global'/);
    assert.match(russianCourse, /onclick="iniciarSessaoSRS\(\)"/);
    assert.doesNotMatch(russianCourse, /iniciarSessaoSRS\('a1'\)/);
});

test('PWA russa, branding e auditoria mecanica estao protegidos', () => {
    const serviceWorker = read('sw.js');
    const manifest = JSON.parse(read('manifest.json'));
    const packageData = JSON.parse(read('package.json'));
    assert.equal(manifest.name, 'Idiomas Academy');
    assert.equal(packageData.name, 'idiomas-academy');
    for (const [file, language] of [
        ['hub_japones.html', 'Japonês'],
        ['hub_ingles.html', 'Inglês'],
        ['hub_espanhol.html', 'Espanhol'],
        ['hub_russo.html', 'Russo']
    ]) {
        const hub = read(file);
        assert.match(hub, new RegExp(`<title>${language} \\| Idiomas Academy<\\/title>`));
        assert.doesNotMatch(hub, new RegExp(`${language} Academy`));
        assert.match(hub, /href="hub_idiomas\.html" class="home-btn">/);
    }
    assert.match(serviceWorker, /idiomas-academy-v20/);
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
    assert.match(read('tests/RUSSIAN_EDITORIAL_REVIEW.md'), /não deve ser anunciado como linguisticamente certificado/i);
});

const failed = results.filter(result => !result.ok);
if (failed.length > 0) {
    console.error(`\n${failed.length}/${results.length} cenários multidioma falharam.`);
    process.exitCode = 1;
} else {
    console.log(`\n${results.length}/${results.length} cenários multidioma aprovados.`);
}
