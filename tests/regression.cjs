'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { spawnSync } = require('node:child_process');

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
        console.error(`  ${error.message}`);
    }
}

function read(relativePath) {
    return fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
}

function walk(directory, extension) {
    const output = [];
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        if (entry.name === '.git' || entry.name === 'node_modules') continue;
        const fullPath = path.join(directory, entry.name);
        if (entry.isDirectory()) output.push(...walk(fullPath, extension));
        else if (fullPath.endsWith(extension)) output.push(fullPath);
    }
    return output;
}

function createStorage(initial = {}) {
    const values = new Map(Object.entries(initial));
    return {
        getItem: key => values.has(key) ? values.get(key) : null,
        setItem: (key, value) => values.set(key, String(value)),
        removeItem: key => values.delete(key),
        clear: () => values.clear()
    };
}

function createContext(extra = {}) {
    const context = {
        console: { log() {}, warn() {}, error() {} },
        Date,
        Math,
        JSON,
        URL,
        localStorage: createStorage(),
        ...extra
    };
    context.window = context;
    context.globalThis = context;
    vm.createContext(context);
    return context;
}

function runFile(context, relativePath) {
    vm.runInContext(read(relativePath), context, { filename: relativePath });
}

function loadValue(relativePath, expression) {
    const context = createContext();
    vm.runInContext(`${read(relativePath)}\n;globalThis.__testValue = ${expression};`, context, {
        filename: relativePath
    });
    return context.__testValue;
}

function assertQuiz(questions, label) {
    assert.ok(Array.isArray(questions) && questions.length > 0, `${label}: lista vazia`);
    questions.forEach((question, index) => {
        assert.ok(question && typeof question.question === 'string' && question.question.trim(), `${label}[${index}]: pergunta ausente`);
        assert.ok(Array.isArray(question.options) && question.options.length >= 2, `${label}[${index}]: opcoes invalidas`);
        if (question.options.every(option => typeof option === 'string')) {
            assert.ok(Number.isInteger(question.correctIndex), `${label}[${index}]: indice correto ausente`);
            assert.ok(question.correctIndex >= 0 && question.correctIndex < question.options.length, `${label}[${index}]: indice correto invalido`);
        } else {
            const correct = question.options.filter(option => option && option.isCorrect === true).length;
            assert.equal(correct, 1, `${label}[${index}]: deve haver exatamente uma resposta correta`);
        }
    });
}

test('sintaxe dos arquivos JavaScript', () => {
    const files = walk(ROOT, '.js');
    assert.equal(files.length, 69, 'quantidade inesperada de arquivos JavaScript');
    for (const file of files) {
        const check = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });
        assert.equal(check.status, 0, `${path.relative(ROOT, file)}: ${check.stderr.trim()}`);
    }
});

test('33 paginas HTML e referencias locais validas', () => {
    const pages = walk(ROOT, '.html');
    assert.equal(pages.length, 33, 'a quantidade de paginas HTML mudou');
    const missing = [];
    const referencePattern = /\b(?:src|href)\s*=\s*["']([^"']+)["']/gi;

    for (const page of pages) {
        const html = fs.readFileSync(page, 'utf8');
        for (const match of html.matchAll(referencePattern)) {
            const reference = match[1].trim();
            if (!reference || /^(?:https?:|\/\/|data:|mailto:|tel:|javascript:|#)/i.test(reference)) continue;
            const cleanReference = reference.split(/[?#]/, 1)[0];
            if (!cleanReference) continue;
            const target = path.resolve(path.dirname(page), cleanReference);
            if (!fs.existsSync(target)) missing.push(`${path.relative(ROOT, page)} -> ${reference}`);
        }
    }
    assert.deepEqual(missing, [], `referencias inexistentes:\n${missing.join('\n')}`);
});

test('skeletons da Etapa 28B preservam o contrato acessivel', () => {
    const style = read('style.css');
    assert.match(style, /\.dict-skeleton-card\s*\{/);
    assert.match(style, /#moduleDisplay\[aria-busy="true"\]/);
    assert.match(style, /prefers-reduced-motion:\s*reduce/);

    const dictionaries = [
        read('html/ja-JP/dicionario.html'),
        read('html/en-US/dicionario_ingles.html')
    ];
    dictionaries.forEach(html => {
        assert.match(html, /id="dict-results-container"[^>]*aria-busy="true"/);
        assert.match(html, /class="dict-skeleton-card"[^>]*aria-hidden="true"/);
    });

    const srsPages = walk(ROOT, '.html').filter(page => fs.readFileSync(page, 'utf8').includes('class="banner-srs"'));
    assert.equal(srsPages.length, 15, 'quantidade inesperada de paginas com painel SRS');
    srsPages.forEach(page => {
        const html = fs.readFileSync(page, 'utf8');
        assert.match(html, /class="banner-srs"[^>]*aria-busy="true"/, `${path.relative(ROOT, page)} sem estado inicial do SRS`);
    });

    assert.match(read('js/core/dictionary.js'), /container\.setAttribute\('aria-busy', 'false'\)/);
    assert.match(read('js/srs/deck.js'), /banner\.setAttribute\('aria-busy', 'false'\)/);
});

test('feedback da Etapa 28C preserva botoes e sincronizacao', () => {
    const toast = read('js/core/toast.js');
    const dom = read('js/core/dom.js');
    const events = read('js/core/events.js');
    const storage = read('js/core/storage.js');
    const review = read('js/srs/review.js');
    const course = read('js/course/course.js');
    const css = read('style.css');

    assert.match(toast, /async function executarComFeedbackBotao\s*\(/);
    assert.match(toast, /finally\s*\{\s*restaurarEstadoBotao\(botao\)/);
    assert.match(toast, /botao\.setAttribute\('aria-busy',\s*'true'\)/);
    assert.match(toast, /botao\.setAttribute\('aria-busy',\s*'false'\)/);
    for (const estado of ['local', 'syncing', 'synced', 'error', 'offline']) {
        assert.match(toast, new RegExp(`\\b${estado}:`), `estado ${estado} ausente`);
    }

    assert.match(dom, /syncStatus\.id\s*=\s*'sync-status-indicator'/);
    assert.match(dom, /syncStatus\.setAttribute\('role',\s*'status'\)/);
    assert.match(dom, /btn-auth-login-submit/);
    assert.match(dom, /btn-cloud-save/);
    assert.match(dom, /btn-reset-progress/);

    assert.match(events, /pending:\s*'Entrando\.\.\.'/);
    assert.match(events, /pending:\s*'Criando conta\.\.\.'/);
    assert.match(events, /pending:\s*'Conectando\.\.\.'/);
    assert.match(events, /pending:\s*'Salvando\.\.\.'/);
    assert.match(events, /pending:\s*'Carregando\.\.\.'/);
    assert.match(storage, /atualizarIndicadorSincronizacao\('syncing'\)/);
    assert.match(review, /Preparando revisão\.\.\./);
    assert.match(course, /Concluindo módulo\.\.\./);

    assert.match(css, /\.sync-status-indicator/);
    assert.match(css, /button\.ux-button-loading/);
    assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
});

test('estados vazios e erros da Etapa 28D seguem o contrato seguro', () => {
    const toast = read('js/core/toast.js');
    const srsDeck = read('js/srs/deck.js');
    const srsReview = read('js/srs/review.js');
    const dictionary = read('js/core/dictionary.js');
    const ranking = read('js/game/ranking.js');
    const dom = read('js/core/dom.js');
    const storage = read('js/core/storage.js');
    const audio = read('js/core/audio.js');
    const speech = read('js/pronunciation/speech-recognition.js');
    const css = read('style.css');

    assert.match(toast, /function criarEstadoVazioUX\s*\(/);
    assert.match(toast, /function aplicarEstadoVazioUX\s*\(/);
    assert.match(toast, /function mostrarErroRecuperavelUX\s*\(/);
    assert.match(toast, /container\.setAttribute\('aria-live'/);
    assert.match(css, /\.ux-empty-state/);
    assert.match(css, /\.ux-empty-state-error/);

    const estadosObrigatorios = [
        [srsDeck, 'Nenhuma revisão pendente'],
        [srsDeck, 'Nenhum favorito neste baralho'],
        [srsDeck, 'Caderno de erros vazio'],
        [dictionary, 'Nenhum resultado encontrado'],
        [ranking, 'Nenhuma conquista desbloqueada'],
        [dom, 'Nenhuma atividade recente'],
        [storage, 'Nenhum progresso salvo na nuvem']
    ];
    for (const [fonte, titulo] of estadosObrigatorios) {
        assert.ok(fonte.includes(titulo), `estado vazio ausente: ${titulo}`);
    }

    assert.doesNotMatch(srsReview, /alert\s*\(/);
    assert.match(dictionary, /actionLabel:\s*'Limpar busca e filtros'/);
    assert.match(storage, /mostrarErroRecuperavelUX\('save'/);
    assert.match(storage, /mostrarErroRecuperavelUX\('load'/);
    assert.doesNotMatch(storage, /mostrarToast\s*\(`[^`]*\$\{err\.message/);
    assert.match(audio, /u\.onerror\s*=/);
    assert.match(speech, /function obterMensagemErroReconhecimentoVoz\s*\(/);
    assert.match(speech, /'not-allowed':\s*'O acesso ao microfone foi bloqueado/);
});

test('AppState e carregado depois das constantes em todas as paginas', () => {
    for (const page of walk(ROOT, '.html')) {
        const relative = path.relative(ROOT, page).replace(/\\/g, '/');
        if (relative === 'meu-progresso.html' || relative === 'html/ja-JP/meu-progresso.html') continue;
        const html = fs.readFileSync(page, 'utf8');
        const constants = html.indexOf('js/core/constants.js');
        const state = html.indexOf('js/core/state.js');
        assert.ok(constants >= 0, `${path.relative(ROOT, page)} nao carrega constants.js`);
        assert.ok(state > constants, `${path.relative(ROOT, page)} nao carrega state.js depois de constants.js`);
    }
});

test('estrutura dos doze cursos principais', () => {
    const courses = [
        ['database/ja-JP/data_curso_a1.js', 'CURSO_A1_DADOS', 31, 'A1'],
        ['database/ja-JP/data_curso_a2.js', 'CURSO_A2_DADOS', 30, 'A2'],
        ['database/ja-JP/data_curso_b1.js', 'CURSO_B1_DADOS', 24, 'B1'],
        ['database/ja-JP/data_curso_b2.js', 'CURSO_B2_DADOS', 20, 'B2'],
        ['database/en-US/data_english_a1.js', 'CURSO_ENGLISH_A1_DADOS', 30, 'A1'],
        ['database/en-US/data_english_a2.js', 'CURSO_ENGLISH_A2_DADOS', 30, 'A2'],
        ['database/en-US/data_english_b1.js', 'CURSO_ENGLISH_B1_DADOS', 24, 'B1'],
        ['database/en-US/data_english_b2.js', 'CURSO_ENGLISH_B2_DADOS', 20, 'B2'],
        ['database/es-ES/data_espanhol_a1.js', 'CURSO_ESPANHOL_A1_DADOS', 30, 'A1'],
        ['database/es-ES/data_espanhol_a2.js', 'CURSO_ESPANHOL_A2_DADOS', 30, 'A2'],
        ['database/es-ES/data_espanhol_b1.js', 'CURSO_ESPANHOL_B1_DADOS', 24, 'B1'],
        ['database/es-ES/data_espanhol_b2.js', 'CURSO_ESPANHOL_B2_DADOS', 24, 'B2'],
        ['database/ru-RU/data_curso_russo_a1.js', 'CURSO_RUSSO_A1_DADOS', 24, 'A1'],
        ['database/ru-RU/data_curso_russo_a2.js', 'CURSO_RUSSO_A2_DADOS', 24, 'A2'],
        ['database/ru-RU/data_curso_russo_b1.js', 'CURSO_RUSSO_B1_DADOS', 24, 'B1'],
        ['database/ru-RU/data_curso_russo_b2.js', 'CURSO_RUSSO_B2_DADOS', 24, 'B2']
    ];

    for (const [file, variable, expectedCount, level] of courses) {
        const modules = loadValue(file, variable);
        assert.equal(modules.length, expectedCount, `${file}: quantidade de modulos`);
        assert.equal(new Set(modules.map(module => module.id)).size, modules.length, `${file}: IDs duplicados`);
        modules.forEach((module, index) => {
            const label = `${file} modulo ${index + 1}`;
            assert.ok(module.id && module.title, `${label}: identidade incompleta`);
            assert.equal(module.level, level, `${label}: nivel incorreto`);
            assert.ok(module.stage1_context && module.stage1_context.missionDescription, `${label}: contexto ausente`);
            assert.ok(Array.isArray(module.stage2_drops) && module.stage2_drops.length > 0, `${label}: drops ausentes`);
            assertQuiz(module.stage3_practice, `${label} pratica`);
            assertQuiz(module.stage5_quiz, `${label} quiz`);
            assert.ok(Array.isArray(module.stage3_5_sentenceBuilder) && module.stage3_5_sentenceBuilder.length > 0, `${label}: construtor de frases ausente`);
            assert.ok(Array.isArray(module.stage4_dialog) && module.stage4_dialog.length > 0, `${label}: dialogo ausente`);
        });
    }
});

test('bases especiais e minigame preservam os totais esperados', () => {
    const datasets = [
        ['database/ja-JP/data_hiragana.js', 'HIRA_COURSE_DATA', 8],
        ['database/ja-JP/data_katakana.js', 'KATA_COURSE_DATA', 8],
        ['database/ja-JP/data_kanji_n5.js', 'kanjiN5Data', 11],
        ['database/ja-JP/data_kanji_n4.js', 'kanjiN4Data', 16],
        ['database/ja-JP/data_kanji_n3.js', 'kanjiN3Data', 19],
        ['database/ja-JP/data_kanji_n2.js', 'kanjiN2Data', 21],
        ['database/ja-JP/data_kanji_n1.js', 'kanjiN1Data', 25],
        ['database/en-US/data_pronunciation.js', 'PRONUNCIATION_DATA', 4]
    ];
    datasets.forEach(([file, variable, count]) => {
        const data = loadValue(file, variable);
        assert.ok(Array.isArray(data), `${file}: formato invalido`);
        assert.equal(data.length, count, `${file}: total alterado`);
    });

    const phrasal = loadValue('database/en-US/data_phrasal_verbs.js', 'PHRASAL_VERBS_DATA');
    assert.equal(phrasal.length, 28, 'total de modulos de phrasal verbs');
    const phrasalItems = phrasal.flatMap(module => module.items || []);
    assert.equal(phrasalItems.length, 168, 'total de phrasal verbs');
    assert.equal(new Set(phrasalItems.map(item => item.id)).size, 168, 'IDs duplicados em phrasal verbs');

    const minigame = loadValue('database/en-US/data_minigame_ingles.js', 'MINIGAME_ENGLISH_DATA');
    const expected = { A1: 92, A2: 70, B1: 48, B2: 40 };
    Object.entries(expected).forEach(([level, count]) => {
        assert.ok(Array.isArray(minigame[level]), `minigame ${level}: formato invalido`);
        assert.equal(minigame[level].length, count, `minigame ${level}: total alterado`);
    });
});

test('mutadores do AppState sincronizam estado e pontes legadas', () => {
    const context = createContext();
    runFile(context, 'js/core/state.js');
    const state = context.AppState;
    assert.ok(state, 'AppState nao foi exposto');

    state.setXP(120);
    state.setStreak(7);
    state.setLevel('B2');
    state.setModule(11);
    state.setStage(4);
    state.setDrop(2);
    state.setSRSDeck([{ id: 'card-1' }]);
    state.setSRSIndex(1);
    state.setDictionaryCache([{ primary: 'teste' }]);

    assert.equal(state.user.xp, 120);
    assert.equal(context.localStorage.getItem('ja_user_xp'), '120');
    assert.equal(state.user.streak, 7);
    assert.equal(context.nivelAtivo, 'B2');
    assert.equal(context.moduloAtivoIndex, 11);
    assert.equal(context.etapaAtual, 4);
    assert.equal(context.dropAtual, 2);
    assert.equal(context.srsSessaoCards[0].id, 'card-1');
    assert.equal(context.srsIndexAtivo, 1);
    assert.equal(context.glossarioUniversalData[0].primary, 'teste');

    state.setProgress({ modulosConcluidos: [], modulosDesbloqueados: [] });
    state.markModuleCompleted('b2_mod_12', 'B2');
    state.unlockNextModule('B2', 11);
    assert.ok(state.user.progressoGlobal.modulosConcluidos.includes('b2_mod_12'));
    assert.ok(state.user.progressoGlobal.modulosDesbloqueados.includes('b2_mod_13'));
    state.markSpecialModuleCompleted(2, 'kanji_n4');
    assert.ok(state.user.progressoGlobal.progress_kanji_n4.includes(2));
    state.unmarkSpecialModuleCompleted(2, 'kanji_n4');
    assert.ok(!state.user.progressoGlobal.progress_kanji_n4.includes(2));
});

test('persistencia otimizada preserva opcoes e formatos legados', () => {
    let reads = 0;
    const storage = createStorage({
        ja_opt_kanji: 'false',
        ja_opt_kana: 'true',
        ja_opt_furigana: 'false',
        ja_opt_romaji: 'true'
    });
    const originalGetItem = storage.getItem;
    storage.getItem = key => {
        reads++;
        return originalGetItem(key);
    };
    const courses = {
        A1: [{ id: 'a1_mod_01' }, { id: 'a1_mod_02' }],
        A2: [{ id: 'a2_mod_01' }, { id: 'a2_mod_02' }],
        B1: [{ id: 'b1_mod_01' }, { id: 'b1_mod_02' }],
        B2: [{ id: 'b2_mod_01' }, { id: 'b2_mod_02' }]
    };
    const context = createContext({
        localStorage: storage,
        getTodosOsCursos: () => courses,
        progressoGlobal: {
            modulosConcluidos: ['a1_mod_02', 'a2_mod_01', 'b2_mod_02'],
            modulosDesbloqueados: ['a1_mod_01', 'a2_mod_02', 'b1_mod_02'],
            progress_kanji: [0, 2]
        }
    });
    runFile(context, 'js/core/storage.js');

    assert.deepEqual(JSON.parse(JSON.stringify(context.getOpcoesLeitura())), {
        kanji: false,
        kana: true,
        furigana: false,
        romaji: true
    });
    assert.equal(reads, 4, 'cada opcao deve ser lida uma unica vez');

    context.salvarProgressoGlobal();
    assert.deepEqual(JSON.parse(storage.getItem('ja_modulos_concluidos')), [1]);
    assert.deepEqual(JSON.parse(storage.getItem('ja_progresso_a1')), [0]);
    assert.deepEqual(JSON.parse(storage.getItem('ja_modulos_concluidos_a2')), [0]);
    assert.deepEqual(JSON.parse(storage.getItem('ja_progresso_a2')), [0, 1]);
    assert.deepEqual(JSON.parse(storage.getItem('ja_modulos_concluidos_b1')), []);
    assert.deepEqual(JSON.parse(storage.getItem('ja_progresso_b1')), [0, 1]);
    assert.deepEqual(JSON.parse(storage.getItem('ja_modulos_concluidos_b2')), [1]);
    assert.deepEqual(JSON.parse(storage.getItem('ja_progresso_b2')), [0]);
});

test('favoritos, caderno de erros e badge SRS permanecem integrados', () => {
    const elements = {
        'srs-badge-count': {},
        'srs-banner-desc': {},
        'btn-iniciar-srs': {},
        'player-srs': { style: { display: 'none' } }
    };
    const context = createContext({
        document: {
            body: { getAttribute: name => name === 'data-mode' ? 'curso' : null },
            getElementById: id => elements[id] || null,
            querySelectorAll: () => []
        },
        location: { pathname: '/html/ja-JP/curso.html' }
    });
    runFile(context, 'js/core/state.js');
    runFile(context, 'js/core/constants.js');
    runFile(context, 'js/srs/engine.js');
    runFile(context, 'js/srs/deck.js');

    context.salvarFavoritosDeck(['favorito-1']);
    context.salvarCadernoErros(['erro-1']);
    assert.equal(context.eFavoritado('favorito-1'), true);
    assert.deepEqual(Array.from(context.getCadernoErros()), ['erro-1']);

    context.localStorage.setItem('ja_srs_a1_deck', JSON.stringify([
        { id: 'a1_mod_01_d_0', modId: 'a1_mod_01', dueDate: Date.now() - 1000 }
    ]));
    context.atualizarBadgeSRS('a1');
    assert.equal(elements['srs-badge-count'].innerText, 1);
    assert.match(elements['srs-banner-desc'].innerText, /1 item/);
});

test('sincronizacao do deck SRS evita duplicatas e preserva cards', () => {
    const course = [{
        id: 'a1_mod_01',
        title: 'Modulo de teste',
        drops: [
            { type: 'vocab', kanji: '一', romaji: 'ichi' },
            { type: 'vocab', kanji: '二', romaji: 'ni' }
        ]
    }];
    let storedDeck = [{
        id: 'a1_mod_01_d_0',
        modId: 'a1_mod_01',
        modIdx: 0,
        interval: 3,
        easeFactor: 2.5,
        dueDate: 123
    }];
    let saves = 0;
    const context = createContext({
        getCourseData: () => course,
        normalizeModule: module => module,
        eModuloAprendido: () => true,
        carregarDeckSRS: () => storedDeck,
        salvarDeckSRS: (_type, deck) => {
            storedDeck = deck;
            saves++;
        }
    });
    runFile(context, 'js/srs/engine.js');

    const firstSync = context.sincronizarBaralhoSRS('a1');
    assert.equal(firstSync.length, 2);
    assert.equal(new Set(firstSync.map(card => card.id)).size, 2);
    assert.equal(firstSync[0].interval, 3, 'card existente foi alterado');
    assert.equal(saves, 1);

    const secondSync = context.sincronizarBaralhoSRS('a1');
    assert.equal(secondSync.length, 2);
    assert.equal(saves, 1, 'deck sem mudancas foi salvo novamente');
});

test('compilacao do dicionario japones mantem o glossario completo', () => {
    const context = createContext({
        document: {
            body: { getAttribute: () => 'japanese', classList: { contains: () => true } },
            getElementById: () => null,
            querySelectorAll: () => []
        },
        location: { pathname: '/html/ja-JP/dicionario.html' }
    });
    const datasetFiles = [
        'database/ja-JP/data_curso_a1.js',
        'database/ja-JP/data_curso_a2.js',
        'database/ja-JP/data_curso_b1.js',
        'database/ja-JP/data_curso_b2.js',
        'database/ja-JP/data_hiragana.js',
        'database/ja-JP/data_katakana.js',
        'database/ja-JP/data_kanji_n5.js',
        'database/ja-JP/data_kanji_n4.js',
        'database/ja-JP/data_kanji_n3.js',
        'database/ja-JP/data_kanji_n2.js',
        'database/ja-JP/data_kanji_n1.js'
    ];
    datasetFiles.forEach(file => runFile(context, file));
    runFile(context, 'js/course/moduleNormalizer.js');
    runFile(context, 'js/core/state.js');
    runFile(context, 'js/core/dictionary.js');
    context.compilarGlossarioUniversal();

    const glossary = context.AppState.dictionary.universalGlossary;
    assert.equal(glossary.length, 3271);
    assert.ok(glossary.every(item => item.primary && item.primary.trim()), 'ha entradas sem termo principal');
});

test('algoritmo SRS atualiza intervalo, facilidade e indice', () => {
    const outcomes = {
        1: { interval: 1, easeFactor: 2.3 },
        2: { interval: 1, easeFactor: 2.35 },
        3: { interval: 1, easeFactor: 2.5 },
        4: { interval: 3, easeFactor: 2.65 }
    };

    for (const [qualityText, expected] of Object.entries(outcomes)) {
        const quality = Number(qualityText);
        const card = { id: `card-${quality}`, repetition: 0, interval: 0, easeFactor: 2.5, dueDate: 0 };
        let savedDeck = null;
        const context = createContext({
            carregarDeckSRS: () => [card],
            salvarDeckSRS: (_type, deck) => { savedDeck = deck; },
            renderizarCardSRS() {},
            atualizarBadgeSRS() {},
            registrarErroSRS() {},
            playBeep() {}
        });
        runFile(context, 'js/core/state.js');
        runFile(context, 'js/srs/engine.js');
        context.AppState.setSRSDeck([card]);
        context.AppState.setSRSIndex(0);
        context.processarAvaliacaoSRS(quality);

        assert.ok(savedDeck, `qualidade ${quality}: deck nao foi salvo`);
        assert.equal(card.interval, expected.interval, `qualidade ${quality}: intervalo`);
        assert.ok(Math.abs(card.easeFactor - expected.easeFactor) < 1e-9, `qualidade ${quality}: fator de facilidade`);
        assert.equal(context.AppState.srs.currentIndex, 1, `qualidade ${quality}: indice nao avancou`);
        assert.ok(card.dueDate > Date.now(), `qualidade ${quality}: vencimento nao foi atualizado`);
    }
});

test('transicoes e acessibilidade da Etapa 28E permanecem padronizadas', () => {
    const style = read('style.css');
    assert.match(style, /:where\(a, button, input, select, textarea, \[tabindex\]\):focus-visible/);
    assert.match(style, /\.ux-content-enter-active\s*\{[\s\S]*?opacity:\s*1;[\s\S]*?transform:\s*translateY\(0\)/);
    assert.match(style, /@media \(prefers-reduced-motion:\s*reduce\)/);
    assert.match(style, /\.toast-error\s*\{\s*border-left-color:/);
    assert.match(style, /\.toast-close/);

    const toast = read('js/core/toast.js');
    assert.match(toast, /const UX_TOAST_MAX_VISIBLE = 3/);
    assert.match(toast, /uxToastQueue\.some\(item => item\.signature === signature\)/);
    assert.match(toast, /role', item\.type === 'error' \? 'alert' : 'status'/);
    assert.match(toast, /aria-label="Fechar notifica/);
    assert.match(toast, /matchMedia\('\(prefers-reduced-motion: reduce\)'\)/);

    const dom = read('js/core/dom.js');
    assert.match(dom, /function prepararModalAcessivel/);
    assert.match(dom, /modal\.setAttribute\('aria-modal', 'true'\)/);
    assert.match(dom, /event\.key !== 'Tab'/);
    assert.match(dom, /uxModalTriggers\.get\(modal\)/);
    assert.match(dom, /event\.key === 'ArrowRight'/);
    assert.match(dom, /<label for="auth-login-email"/);
    assert.match(dom, /<label for="auth-reg-password"/);
    assert.match(dom, /role="tablist"/);

    const certificatePages = [
        read('html/ja-JP/curso.html'),
        read('html/en-US/curso_ingles.html')
    ];
    certificatePages.forEach(html => {
        assert.match(html, /id="modal-certificado"[^>]*role="dialog"[^>]*aria-modal="true"/);
    });

    const labelledInputs = [
        ['html/ja-JP/dicionario.html', 'Pesquisar no dicionário japonês'],
        ['html/en-US/dicionario_ingles.html', 'Pesquisar no dicionário inglês'],
        ['html/en-US/pronuncia_ingles.html', 'Pesquisar conteúdo de pronúncia'],
        ['html/ja-JP/minigame.html', 'Resposta do minigame'],
        ['html/en-US/minigame_ingles.html', 'Resposta do minigame']
    ];
    labelledInputs.forEach(([file, label]) => {
        assert.ok(read(file).includes(`aria-label="${label}"`), `${file} sem nome acessivel`);
    });

    const dictionary = read('js/core/dictionary.js');
    assert.match(dictionary, /setAttribute\('aria-pressed', ativo \? 'true' : 'false'\)/);
});

test('responsividade e cache final da Etapa 28F permanecem protegidos', () => {
    const style = read('style.css');
    assert.match(style, /\.g-setup-grid,\s*\n\s*\.g-options-grid\s*\{\s*\n\s*grid-template-columns:\s*minmax\(0, 1fr\) !important;/);
    assert.match(style, /\.kanji-card-layout,\s*[\s\S]*?\.kanji-info-box\s*\{\s*\n\s*min-width:\s*0;/);
    assert.match(style, /\.kanji-main-box \.audio-btn\s*\{\s*\n\s*white-space:\s*normal;/);

    const japaneseMinigame = read('html/ja-JP/minigame.html');
    assert.match(japaneseMinigame, /class="g-setup-grid"/);
    assert.match(japaneseMinigame, /class="g-options-grid"/);

    const pages = walk(ROOT, '.html');
    assert.equal(pages.length, 33);
    pages.forEach(page => {
        const html = fs.readFileSync(page, 'utf8');
        const relative = path.relative(ROOT, page).replace(/\\/g, '/');
        if (relative === 'index.html' || relative === 'meu-progresso.html' || relative === 'html/ja-JP/meu-progresso.html') {
            assert.match(html, /style\.css\?v=29[a-z]?/, `${relative} sem cache visual 29 global`);
        } else {
            assert.match(html, /style\.css\?v=28f/, `${relative} sem cache visual 28F`);
        }
    });

    assert.match(read('sw.js'), /const CACHE_NAME = 'idiomas-academy-v19'/);
});

test('dashboard Meu Progresso usa dados reais e acesso seguro', () => {
    const html = read('index.html');
    const legacyRedirect = read('html/ja-JP/meu-progresso.html');
    const dashboard = read('js/dashboard/meu-progresso.js');
    const storage = read('js/core/storage.js');
    const dom = read('js/core/dom.js');
    const app = read('app.js');
    const css = read('style.css');
    const serviceWorker = read('sw.js');

    assert.match(html, /data-mode="dashboard"/);
    assert.match(html, /data-lang="all"/);
    assert.match(html, /Meu Progresso - Idiomas Academy/);
    assert.match(html, /id="dashboard-languages-grid"/);
    assert.match(html, /database\/ja-JP\/data_curso_a1\.js/);
    assert.match(html, /database\/en-US\/data_english_a1\.js/);
    assert.match(html, /id="dashboard-signed-out"[^>]*hidden/);
    assert.match(html, /id="dashboard-first-access"[^>]*hidden/);
    assert.match(html, /id="dashboard-goal-bar"[^>]*role="progressbar"/);
    assert.match(html, /id="dashboard-course-progress"[^>]*role="progressbar"/);
    assert.match(html, /id="dashboard-weekly-summary"[^>]*aria-label=/);
    assert.match(html, /option value="15">15 minutos/);
    assert.doesNotMatch(html, /chart\.js|highcharts|d3\.js/i);

    assert.match(storage, /const DASHBOARD_DATA_VERSION = 4/);
    assert.match(storage, /ja_dashboard_data_\$\{uidSeguro\}/);
    assert.match(storage, /dashboardData:\s*carregarDadosDashboard|backup\.dashboardData\s*=\s*carregarDadosDashboard/);
    assert.match(storage, /DASHBOARD_DAILY_GOALS = \[10, 15, 20, 30, 45, 60\]/);
    assert.match(storage, /await sincronizarProgressoComFirestore\(userCred\.user\)/);
    assert.match(storage, /function escaparTextoAuth\s*\(/);
    assert.match(storage, /const nomeSeguro = escaparTextoAuth/);
    assert.ok((storage.match(/irParaMeuProgresso\(\);/g) || []).length >= 3, 'login e cadastro nao redirecionam ao dashboard');

    assert.match(dashboard, /dias\.some\(item => item\.minutes > 0\)/);
    assert.match(dashboard, /metric:\s*usarMinutos \? 'minutes' : 'activities'/);
    assert.match(dashboard, /const DASHBOARD_LANGUAGE_REGISTRY = \[/);
    assert.match(dashboard, /id: 'japanese'/);
    assert.match(dashboard, /id: 'english'/);
    assert.match(dashboard, /function obterResumoIdiomaDashboard\s*\(/);
    assert.match(dashboard, /function renderizarIdiomasDashboard\s*\(/);
    assert.match(dashboard, /mensagem\.textContent/);
    assert.match(dashboard, /saudacao\.textContent/);
    assert.doesNotMatch(dom, /btnAuth\.innerHTML\s*=\s*`[^`]*\$\{displayName\}/);
    assert.match(dom, /btnProgress\.textContent = '📊 Meu Progresso'/);
    assert.match(app, /processarRevisaoSolicitadaPeloDashboard/);
    assert.match(app, /parametros\.delete\('iniciar_srs'\)/);

    assert.match(css, /\.dashboard-page:not\(\.dashboard-authenticated\) #xp-profile-widget-container/);
    assert.match(css, /@media \(max-width: 480px\)/);
    assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
    assert.match(legacyRedirect, /window\.location\.replace\('\.\.\/\.\.\/index\.html'\)/);
    assert.match(serviceWorker, /'\.\/meu-progresso\.html'/);
    assert.match(serviceWorker, /js\/dashboard\/meu-progresso\.js/);
});

test('medicao de sessoes da Etapa 29 usa API central e retencao limitada', () => {
    const storage = read('js/core/storage.js');
    const sessions = read('js/core/study-session.js');
    const events = read('js/core/events.js');
    const serviceWorker = read('sw.js');
    const course = read('js/course/course.js');
    const tabs = read('js/course/tabs.js');
    const srsEngine = read('js/srs/engine.js');
    const srsReview = read('js/srs/review.js');
    const pronunciation = read('js/pronunciation/quiz.js');

    assert.match(storage, /DASHBOARD_SESSION_LIMIT = 200/);
    assert.match(storage, /DASHBOARD_DAILY_RETENTION_DAYS = 366/);
    assert.match(storage, /DASHBOARD_SESSION_MIN_ACTIVE_SECONDS = 15/);
    assert.match(storage, /function registrarSessaoDashboard\s*\(/);
    assert.match(storage, /function mesclarDadosDashboard\s*\(/);
    assert.match(storage, /mesclarDadosDashboard\(dadosLocais, dadosNuvem\.dashboardData\)/);
    assert.match(sessions, /const INACTIVITY_MS = 2 \* 60 \* 1000/);
    assert.match(sessions, /visibilitychange/);
    assert.match(sessions, /pagehide/);
    assert.match(sessions, /function criarControladorSessaoEstudo\s*\(/);
    assert.match(sessions, /global\.iniciarSessaoEstudo/);
    assert.match(sessions, /global\.finalizarSessaoEstudo/);
    assert.match(sessions, /data-study-session-ready/);
    assert.match(events, /new URL\('study-session\.js\?v=29f2', document\.currentScript\.src\)/);
    assert.match(serviceWorker, /'\.\/js\/core\/study-session\.js'/);
    assert.match(course, /iniciarSessaoEstudo\(\{ language: idioma, activityType: 'course'/);
    assert.match(course, /finalizarSessaoEstudo\('completion'/);
    assert.match(tabs, /finalizarSessaoEstudo\('completion'/);
    assert.match(srsEngine, /atualizarSessaoEstudo\(\{ activityCountDelta: 1/);
    assert.match(srsReview, /activityType: 'srs'/);
    assert.match(pronunciation, /activityType: 'quiz'/);
});

test('estatisticas avancadas da Etapa 29 preservam dados reais e acessibilidade', () => {
    const html = read('index.html');
    const dashboard = read('js/dashboard/meu-progresso.js');
    const css = read('style.css');
    const serviceWorker = read('sw.js');

    assert.match(html, /id="dashboard-statistics-card"/);
    assert.match(html, /id="dashboard-filter-period"/);
    assert.match(html, /option value="7">7 dias/);
    assert.match(html, /option value="30" selected>30 dias/);
    assert.match(html, /option value="90">90 dias/);
    assert.match(html, /id="dashboard-filter-language"/);
    assert.match(html, /id="dashboard-filter-activity"/);
    assert.match(html, /id="dashboard-statistics-status"[^>]*aria-live="polite"/);
    assert.match(html, /id="dashboard-stat-accuracy">Dados insuficientes/);
    assert.match(html, /id="dashboard-language-distribution"/);
    assert.match(html, /id="dashboard-activity-distribution"/);
    assert.match(html, /meu-progresso\.js\?v=30/);
    assert.doesNotMatch(html, /chart\.js|highcharts|d3\.js/i);

    assert.match(dashboard, /function calcularEstatisticasDashboard\s*\(/);
    assert.match(dashboard, /function criarLinhasDiariasEstatisticasDashboard\s*\(/);
    assert.match(dashboard, /accuracy:\s*\{ value: accuracyValue, available:/);
    assert.match(dashboard, /Dias que alcançaram a meta ÷ dias medidos elegíveis/);
    assert.match(dashboard, /filtro\.addEventListener\('change'/);
    assert.match(dashboard, /renderizarGraficosDashboard\(estatisticas\)/);
    assert.match(css, /\.dashboard-advanced-stats-grid/);
    assert.match(css, /\.dashboard-statistics-filters/);
    assert.match(css, /\.dashboard-distributions-grid/);
    assert.match(serviceWorker, /const CACHE_NAME = 'idiomas-academy-v19'/);
    assert.match(serviceWorker, /meu-progresso\.js\?v=30/);
});

test('graficos de aprendizado da Etapa 29 usam dados reais e alternativa acessivel', () => {
    const html = read('index.html');
    const dashboard = read('js/dashboard/meu-progresso.js');
    const css = read('style.css');

    assert.match(html, /id="dashboard-evolution-metric"/);
    assert.match(html, /option value="minutes">Minutos estudados/);
    assert.match(html, /option value="activities">Atividades concluídas/);
    assert.match(html, /option value="reviews">Revisões realizadas/);
    assert.match(html, /id="dashboard-weekly-chart"[^>]*role="img"/);
    assert.match(html, /id="dashboard-weekly-summary"[^>]*dashboard-sr-chart-summary/);
    assert.match(html, /id="dashboard-review-chart-empty"/);
    assert.match(html, /id="dashboard-distribution-dimension"/);
    assert.match(html, /id="dashboard-distribution-chart-summary"[^>]*aria-label=/);
    assert.doesNotMatch(html, /chart\.js|highcharts|d3\.js/i);

    assert.match(dashboard, /function criarDadosGraficoEvolucaoDashboard\s*\(/);
    assert.match(dashboard, /function criarDadosGraficoDistribuicaoDashboard\s*\(/);
    assert.match(dashboard, /function renderizarGraficoEvolucaoDashboard\s*\(/);
    assert.match(dashboard, /function renderizarGraficoDistribuicaoDashboard\s*\(/);
    assert.match(dashboard, /document\.createElementNS\('http:\/\/www\.w3\.org\/2000\/svg'/);
    assert.match(dashboard, /function renderizarGraficoRevisoesDashboard/);
    assert.match(dashboard, /if \(weeklyCard\) weeklyCard\.hidden = false/);

    assert.match(css, /\.dashboard-charts-grid/);
    assert.match(css, /\.dashboard-chart-line/);
    assert.match(css, /\.dashboard-distribution-chart-bar/);
    assert.match(css, /\.dashboard-sr-chart-summary/);
    assert.match(css, /@media \(max-width: 800px\)[\s\S]*?\.dashboard-charts-grid/);
    assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
});

test('calendario de estudos da Etapa 29 preserva datas locais e navegacao acessivel', () => {
    const html = read('index.html');
    const dashboard = read('js/dashboard/meu-progresso.js');
    const css = read('style.css');
    const storage = read('js/core/storage.js');

    assert.match(html, /id="dashboard-calendar-card"/);
    assert.match(html, /id="dashboard-calendar-previous"[^>]*aria-label="Mostrar mês anterior"/);
    assert.match(html, /id="dashboard-calendar-next"[^>]*aria-label="Mostrar próximo mês"/);
    assert.match(html, /id="dashboard-calendar-month"[^>]*aria-live="polite"/);
    assert.match(html, /id="dashboard-calendar-grid"[^>]*role="grid"/);
    assert.match(html, /id="dashboard-calendar-empty"[^>]*hidden/);
    assert.match(html, /id="dashboard-calendar-day-summary"[^>]*aria-live="polite"[^>]*tabindex="-1"/);
    assert.match(html, /id="dashboard-calendar-day-results">Dados insuficientes/);

    assert.match(dashboard, /function criarResumoDiaCalendarioDashboard\s*\(/);
    assert.match(dashboard, /function criarDadosCalendarioDashboard\s*\(/);
    assert.match(dashboard, /function renderizarCalendarioDashboard\s*\(/);
    assert.match(dashboard, /function navegarTecladoCalendarioDashboard\s*\(/);
    assert.match(dashboard, /ArrowLeft:\s*-1, ArrowRight:\s*1, ArrowUp:\s*-7, ArrowDown:\s*7/);
    assert.match(dashboard, /botao\.disabled = dia\.isFuture/);
    assert.match(dashboard, /botao\.setAttribute\('aria-label', criarRotuloDiaCalendarioDashboard/);
    assert.match(dashboard, /meta\.classList\.toggle\('is-complete', dia\.goalMet\)/);
    assert.match(dashboard, /accuracy:\s*\{ available: hasAccuracy, correct: hasAccuracy \? correct : null, errors: hasAccuracy \? errors : null \}/);
    assert.match(storage, /const DASHBOARD_DATA_VERSION = 4/);

    assert.match(css, /\.dashboard-calendar-grid/);
    assert.match(css, /grid-template-columns:\s*repeat\(7, minmax\(0, 1fr\)\)/);
    assert.match(css, /\.dashboard-calendar-day-button\.is-today/);
    assert.match(css, /\.dashboard-calendar-day-button\.is-goal-met/);
    assert.match(css, /\.dashboard-calendar-day-button\.intensity-4/);
    assert.match(css, /@media \(max-width: 480px\)[\s\S]*?\.dashboard-calendar-day-button/);
});

test('historico de revisoes SRS da Etapa 29 registra tentativas e deduplica por ID', () => {
    const storage = read('js/core/storage.js');
    const engine = read('js/srs/engine.js');
    const html = read('index.html');
    const dashboard = read('js/dashboard/meu-progresso.js');

    assert.match(storage, /DASHBOARD_SRS_HISTORY_LIMIT = 500/);
    assert.match(storage, /function normalizarTentativaSRS/);
    assert.match(storage, /function normalizarHistoricoSRSDashboard/);
    assert.match(storage, /function registrarTentativaSRS/);
    assert.match(engine, /registrarTentativaSRS\(\{/);
    assert.match(html, /id="dashboard-srs-history-card"/);
    assert.match(html, /id="dashboard-srs-history-list"/);
    assert.match(dashboard, /function renderizarHistoricoSRSDashboard/);
});

test('insights personalizados locais da Etapa 29 sao deterministicos e limitados a tres', () => {
    const html = read('index.html');
    const dashboard = read('js/dashboard/meu-progresso.js');
    const css = read('style.css');

    assert.match(html, /id="dashboard-insights-card"/);
    assert.match(html, /id="dashboard-insights-grid"/);
    assert.match(dashboard, /function calcularInsightsDashboard/);
    assert.match(dashboard, /function renderizarInsightsDashboard/);
    assert.match(dashboard, /candidatos\.slice\(0, 3\)/);
    assert.match(css, /\.dashboard-insights-grid/);
    assert.match(css, /\.dashboard-insight-card/);
});

test('regressoes corrigidas na Etapa 22 permanecem protegidas', () => {
    const b2 = loadValue('database/ja-JP/data_curso_b2.js', 'CURSO_B2_DADOS');
    assert.equal(b2[11].id, 'b2_mod_12', 'ID do modulo B2 12 voltou a colidir');
    assert.ok(b2[11].stage3_5_sentenceBuilder.length >= 2, 'construtor do modulo B2 12 esta incompleto');

    const firebase = read('firebase-init.js');
    assert.match(firebase, /firebase-auth\.js["'];/);
    assert.match(firebase, /\bupdateProfile\b/);
    assert.match(firebase, /window\.jaFirebase\s*=\s*\{[\s\S]*?\bupdateProfile\b[\s\S]*?\}/);

    const events = read('js/core/events.js');
    assert.match(events, /new URL\('\.\.\/\.\.\/sw\.js',\s*document\.currentScript\.src\)/);
    assert.match(events, /serviceWorker\.register\(SERVICE_WORKER_URL\)/);

    const course = read('js/course/course.js');
    const scrollCalls = course.match(/scrollTo\s*\(/g) || [];
    assert.ok(scrollCalls.length >= 3, 'reposicionamento no topo nao esta presente nas tres transicoes');
});

const failed = results.filter(result => !result.ok);
console.log(`\n${results.length - failed.length}/${results.length} grupos de regressao aprovados.`);
if (failed.length > 0) {
    console.error('\nFAILS:', failed.map(f => `\n- ${f.name}: ${f.error.message}`).join(''));
    process.exitCode = 1;
}
