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
    runFile(context, 'js/core/course-index.js');
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

test('PWA russa, branding e auditoria mecanica estao protegidos', () => {
    const serviceWorker = read('sw.js');
    const manifest = JSON.parse(read('manifest.json'));
    const packageData = JSON.parse(read('package.json'));
    const russianReport = read('tests/RUSSIAN_EDITORIAL_OCCURRENCES.md');
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
    assert.match(serviceWorker, /idiomas-academy-v27/);
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
});

test('hubs e imagens principais respeitam o orçamento leve', () => {
    const hubs = ['hub_idiomas.html', 'hub_japones.html', 'hub_ingles.html', 'hub_espanhol.html', 'hub_russo.html'];
    hubs.forEach(file => {
        const html = read(file);
        const scriptsLocais = Array.from(html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g))
            .map(match => match[1])
            .filter(src => !/^https?:\/\//.test(src));
        assert.ok(scriptsLocais.length <= 15, `${file}: ${scriptsLocais.length} scripts locais`);
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
            maxBytes: 1580 * 1024,
            dataPattern: /database\/ja-JP\/data_curso_[a-b][1-2]\.js/
        },
        {
            file: 'html/en-US/curso_ingles.html',
            locale: 'en-US',
            scripts: 27,
            maxBytes: 1050 * 1024,
            dataPattern: /database\/en-US\/data_english_[a-b][1-2]\.js/
        },
        {
            file: 'html/es-ES/espanhol_curso.html',
            locale: 'es-ES',
            scripts: 27,
            maxBytes: 1610 * 1024,
            dataPattern: /database\/es-ES\/data_espanhol_[a-b][1-2]\.js/
        },
        {
            file: 'html/ru-RU/russo_curso.html',
            locale: 'ru-RU',
            scripts: 27,
            maxBytes: 970 * 1024,
            dataPattern: /database\/ru-RU\/data_curso_russo_[a-b][1-2]\.js/
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
        assert.equal(scriptsLocais.filter(src => course.dataPattern.test(src)).length, 4, `${course.locale}: devem existir quatro datasets A1-B2`);
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
        n5: 700 * 1024,
        n4: 715 * 1024,
        n3: 965 * 1024,
        n2: 1000 * 1024,
        n1: 1770 * 1024
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

        assert.equal(scriptsLocais.length, 25, `${level.toUpperCase()}: quantidade inesperada de scripts locais`);
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

test('dicionarios de ingles, espanhol e russo usam indices leves sem perder recursos auxiliares', () => {
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
            forbiddenData: /database\/ru-RU\/(?:data_curso_russo_|data_russo_cirilico|data_russo_dicionario)/
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
        assert.match(read('sw.js'), new RegExp(`database/${page.locale}/data_dicionario_index\\.js`));
    });

    assert.match(read('database/es-ES/data_dicionario_index.js'), /SPANISH_DICTIONARY_TABLES/);
    assert.match(read('database/ru-RU/data_dicionario_index.js'), /RUSSIAN_DICTIONARY_CASES/);
    assert.match(read('js/core/dictionary.js'), /ENGLISH_DICTIONARY_INDEX/);
    assert.match(read('js/core/dictionary.js'), /SPANISH_DICTIONARY_INDEX/);
    assert.match(read('js/core/dictionary.js'), /RUSSIAN_DICTIONARY_INDEX/);
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

const failed = results.filter(result => !result.ok);
if (failed.length > 0) {
    console.error(`\n${failed.length}/${results.length} cenários multidioma falharam.`);
    process.exitCode = 1;
} else {
    console.log(`\n${results.length}/${results.length} cenários multidioma aprovados.`);
}
