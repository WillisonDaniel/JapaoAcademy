'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { spawnSync } = require('node:child_process');

const ROOT = path.resolve(__dirname, '..');
const results = [];
const WALK_EXCLUDED_DIRECTORIES = new Set(['.git', 'node_modules', 'livros', 'scratch']);

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
        if (WALK_EXCLUDED_DIRECTORIES.has(entry.name)) continue;
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
    if (/data_kanji_n[123]\.js$/.test(relativePath)) runFile(context, 'js/kanji/romaji-draft.js');
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
    assert.equal(files.length, 95, 'quantidade inesperada de arquivos JavaScript');
    for (const file of files) {
        const check = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });
        assert.equal(check.status, 0, `${path.relative(ROOT, file)}: ${check.stderr.trim()}`);
    }
});

test('43 paginas HTML e referencias locais validas', () => {
    const pages = walk(ROOT, '.html');
    assert.equal(pages.length, 43, 'a quantidade de paginas HTML mudou');
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
    assert.equal(srsPages.length, 16, 'quantidade inesperada de paginas com painel SRS');
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
    assert.match(toast, /labels\.success\s*&&\s*uxButtonStates\.has\(botao\)/);
    assert.match(toast, /botao\.setAttribute\('aria-busy',\s*'true'\)/);
    assert.match(toast, /botao\.setAttribute\('aria-busy',\s*'false'\)/);
    for (const estado of ['local', 'syncing', 'synced', 'error', 'offline']) {
        assert.match(toast, new RegExp(`\\b${estado}:`), `estado ${estado} ausente`);
    }

    assert.match(dom, /syncStatus\.id\s*=\s*'sync-status-indicator'/);
    assert.match(dom, /syncStatus\.setAttribute\('role',\s*'status'\)/);
    assert.match(dom, /btn-auth-login-submit/);
    assert.match(dom, /\['btn-auth-login-submit', 'btn-auth-register-submit', 'btn-auth-google'\]/);
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
        if (relative === 'index.html' || relative === 'html/ja-JP/meu-progresso.html') continue;
        const html = fs.readFileSync(page, 'utf8');
        const constants = html.indexOf('js/core/constants.js');
        const state = html.indexOf('js/core/state.js');
        assert.ok(constants >= 0, `${path.relative(ROOT, page)} nao carrega constants.js`);
        assert.ok(state > constants, `${path.relative(ROOT, page)} nao carrega state.js depois de constants.js`);
    }
});

test('estrutura dos vinte datasets de cursos principais', () => {
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
        ['database/ru-RU/data_curso_russo_b2.js', 'CURSO_RUSSO_B2_DADOS', 24, 'B2'],
        ['database/it-IT/data_curso_italiano_a1.js', 'CURSO_ITALIANO_A1_DADOS', 30, 'A1'],
        ['database/it-IT/data_curso_italiano_a2.js', 'CURSO_ITALIANO_A2_DADOS', 30, 'A2'],
        ['database/it-IT/data_curso_italiano_b1.js', 'CURSO_ITALIANO_B1_DADOS', 24, 'B1'],
        ['database/it-IT/data_curso_italiano_b2.js', 'CURSO_ITALIANO_B2_DADOS', 24, 'B2']
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

    const italianBosses = loadValue('database/it-IT/data_italiano_minigame_conjugacao.js', 'BANCO_BOSS_IRREGULARES_ITALIANO');
    assert.equal(italianBosses.length, 10, 'total de chefões italianos');
    italianBosses.forEach((item, index) => {
        assert.equal(item.wrong.length, 3, `chefão italiano ${index}: total de distratores`);
        assert.equal(item.wrong.includes(item.correct), false, `chefão italiano ${index}: resposta correta repetida`);
        assert.equal(new Set([item.correct, ...item.wrong]).size, 4, `chefão italiano ${index}: alternativas não são únicas`);
    });
});

test('minigame japonês monta os mesmos pools a partir do índice leve', () => {
    let selectedMode = 'kanji_n5';
    const elements = new Map();
    const element = () => ({
        style: {},
        classList: { add() {}, remove() {} },
        focus() {},
        textContent: '',
        innerHTML: '',
        value: '',
        checked: false,
        className: ''
    });
    [
        'game-menu-screen', 'game-play-screen', 'game-over-screen', 'g-infinite-lives',
        'g-ans-input', 'g-mic-btn', 'g-hint-text', 'g-score', 'g-lives', 'g-combo',
        'g-badge', 'g-big-kana', 'g-feedback', 'g-card-main'
    ].forEach(id => elements.set(id, element()));

    const context = createContext({
        document: {
            body: { getAttribute: () => null },
            getElementById: id => elements.get(id) || null,
            querySelector: selector => {
                if (selector === 'input[name="script_mode"]:checked') return { value: selectedMode };
                if (selector === 'input[name="input_mode"]:checked') return { value: 'typing' };
                return null;
            },
            querySelectorAll: selector => selector === '.cat-cb:checked' ? [{ value: 'mod1' }] : [],
            addEventListener() {}
        }
    });
    runFile(context, 'database/ja-JP/data_minigame_kanji_index.js');
    runFile(context, 'js/game/minigames.js');

    context.startGame();
    const n5Pool = vm.runInContext('JSON.parse(JSON.stringify(gPool))', context);
    const n5Expected = vm.runInContext('JSON.parse(JSON.stringify(JAPANESE_MINIGAME_KANJI_INDEX.kanji_n5[1]))', context);
    assert.deepEqual(n5Pool, n5Expected);

    selectedMode = 'kanji_all';
    context.startGame();
    const allPoolLength = vm.runInContext('gPool.length', context);
    const allExpectedLength = vm.runInContext(
        "Object.values(JAPANESE_MINIGAME_KANJI_INDEX).reduce((total, level) => total + level[1].length, 0)",
        context
    );
    assert.equal(allPoolLength, allExpectedLength);
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
    runFile(context, 'js/kanji/romaji-draft.js');
    datasetFiles.forEach(file => runFile(context, file));
    runFile(context, 'js/course/moduleNormalizer.js');
    runFile(context, 'js/core/state.js');
    runFile(context, 'js/core/dictionary.js');
    context.compilarGlossarioUniversal();

    const glossary = context.AppState.dictionary.universalGlossary;
    assert.equal(glossary.length, 3271);
    assert.ok(glossary.every(item => item.primary && item.primary.trim()), 'ha entradas sem termo principal');

    const indexedContext = createContext({
        document: {
            body: { getAttribute: name => name === 'data-lang' ? 'japanese' : (name === 'data-mode' ? 'dict' : null), classList: { contains: () => true } },
            getElementById: () => null,
            querySelectorAll: () => []
        },
        location: { pathname: '/html/ja-JP/dicionario.html' }
    });
    runFile(indexedContext, 'database/ja-JP/data_dicionario_index.js');
    runFile(indexedContext, 'js/core/state.js');
    runFile(indexedContext, 'js/core/dictionary.js');
    indexedContext.compilarGlossarioUniversal();
    assert.deepEqual(
        JSON.parse(JSON.stringify(indexedContext.AppState.dictionary.universalGlossary)),
        JSON.parse(JSON.stringify(glossary)),
        'o índice leve diverge do glossário compilado a partir dos datasets'
    );
});

test('indices leves de ingles, espanhol, russo e italiano preservam os glossarios compilados', () => {
    const dictionaries = [
        {
            code: 'en-US',
            language: 'english',
            mode: 'pronuncia',
            pathname: '/html/en-US/dicionario_ingles.html',
            index: 'database/en-US/data_dicionario_index.js',
            count: 647,
            datasets: [
                'database/en-US/data_english_a1.js',
                'database/en-US/data_english_a2.js',
                'database/en-US/data_english_b1.js',
                'database/en-US/data_english_b2.js',
                'database/en-US/data_phrasal_verbs.js',
                'database/en-US/data_pronunciation.js'
            ]
        },
        {
            code: 'es-ES',
            language: 'spanish',
            mode: 'espanhol',
            pathname: '/html/es-ES/espanhol_dicionario.html',
            index: 'database/es-ES/data_dicionario_index.js',
            count: 1139,
            datasets: [
                'database/es-ES/data_espanhol_a1.js',
                'database/es-ES/data_espanhol_a2.js',
                'database/es-ES/data_espanhol_b1.js',
                'database/es-ES/data_espanhol_b2.js',
                'database/es-ES/data_espanhol_falsos_amigos.js',
                'database/es-ES/data_espanhol_fonetica_recursos.js',
                'database/es-ES/data_espanhol_dicionario.js'
            ]
        },
        {
            code: 'ru-RU',
            language: 'russian',
            mode: 'russo',
            pathname: '/html/ru-RU/russo_dicionario.html',
            index: 'database/ru-RU/data_dicionario_index.js',
            count: 728,
            datasets: [
                'database/ru-RU/data_russo_cirilico.js',
                'database/ru-RU/data_curso_russo_a1.js',
                'database/ru-RU/data_curso_russo_a2.js',
                'database/ru-RU/data_curso_russo_b1.js',
                'database/ru-RU/data_curso_russo_b2.js',
                'database/ru-RU/data_russo_dicionario.js'
            ]
        },
        {
            code: 'it-IT',
            language: 'italian',
            mode: 'italiano',
            pathname: '/html/it-IT/italiano_dicionario.html',
            index: 'database/it-IT/data_dicionario_index.js',
            count: 1011,
            datasets: [
                'database/it-IT/data_curso_italiano_a1.js',
                'database/it-IT/data_curso_italiano_a2.js',
                'database/it-IT/data_curso_italiano_b1.js',
                'database/it-IT/data_curso_italiano_b2.js',
                'database/it-IT/data_italiano_dicionario.js',
                'database/it-IT/data_italiano_fonetica_recursos.js'
            ]
        }
    ];

    dictionaries.forEach(config => {
        const documentStub = {
            body: {
                getAttribute: name => name === 'data-lang' ? config.language : (name === 'data-mode' ? config.mode : null),
                classList: { contains: () => true }
            },
            getElementById: () => null,
            querySelectorAll: () => []
        };
        const sourceContext = createContext({ document: documentStub, location: { pathname: config.pathname } });
        config.datasets.forEach(file => runFile(sourceContext, file));
        runFile(sourceContext, 'js/course/moduleNormalizer.js');
        runFile(sourceContext, 'js/core/state.js');
        runFile(sourceContext, 'js/core/dictionary.js');
        sourceContext.compilarGlossarioUniversal();
        const sourceGlossary = JSON.parse(JSON.stringify(sourceContext.AppState.dictionary.universalGlossary));
        assert.equal(sourceGlossary.length, config.count, `${config.code}: quantidade compilada inesperada`);

        const indexedContext = createContext({ document: documentStub, location: { pathname: config.pathname } });
        runFile(indexedContext, config.index);
        runFile(indexedContext, 'js/core/state.js');
        runFile(indexedContext, 'js/core/dictionary.js');
        indexedContext.compilarGlossarioUniversal();
        assert.deepEqual(
            JSON.parse(JSON.stringify(indexedContext.AppState.dictionary.universalGlossary)),
            sourceGlossary,
            `${config.code}: indice leve diverge do glossario original`
        );
    });
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
    assert.equal(pages.length, 43);
    pages.forEach(page => {
        const html = fs.readFileSync(page, 'utf8');
        const relative = path.relative(ROOT, page).replace(/\\/g, '/');
        if (relative === 'index.html') {
            assert.match(html, /url=hub_idiomas\.html/, 'index.html deve redirecionar para hub_idiomas.html');
            return;
        }
        if (relative === 'meu-progresso.html' || relative === 'html/ja-JP/meu-progresso.html') {
            assert.match(html, /style\.css\?v=29[a-z]?/, `${relative} sem cache visual 29 global`);
        } else {
            assert.match(html, /style\.css\?v=28f/, `${relative} sem cache visual 28F`);
        }
    });

    assert.match(read('sw.js'), /const CACHE_NAME = 'idiomas-academy-v50'/);
});

test('dashboard Meu Progresso usa dados reais e acesso seguro', () => {
    const html = read('meu-progresso.html');
    const indexRedirect = read('index.html');
    const legacyRedirect = read('html/ja-JP/meu-progresso.html');
    const dashboard = read('js/dashboard/meu-progresso.js');
    const storage = read('js/core/storage.js');
    const dom = read('js/core/dom.js');
    const app = read('app.js');
    const css = read('style.css');
    const serviceWorker = read('sw.js');

    assert.match(indexRedirect, /url=hub_idiomas\.html/);
    assert.match(indexRedirect, /window\.location\.replace\('hub_idiomas\.html'\)/);
    assert.match(legacyRedirect, /url=\.\.\/\.\.\/meu-progresso\.html/);
    assert.match(legacyRedirect, /window\.location\.replace\('\.\.\/\.\.\/meu-progresso\.html'\)/);

    assert.match(html, /data-mode="dashboard"/);
    assert.match(html, /data-lang="all"/);
    assert.match(html, /Meu Progresso - Idiomas Academy/);
    assert.match(html, /id="dashboard-languages-grid"/);
    assert.match(html, /js\/core\/course-index\.js/);
    assert.doesNotMatch(html, /database\/(?:ja-JP|en-US|es-ES|ru-RU)\/data_(?:curso|english|espanhol).*_(?:a1|a2|b1|b2)\.js/i);
    assert.match(html, /id="dashboard-signed-out"[^>]*hidden/);
    assert.match(html, /id="dashboard-first-access"[^>]*hidden/);
    assert.doesNotMatch(html, /href="index\.html"/);
    assert.equal((html.match(/href="hub_idiomas\.html"/g) || []).length, 4);
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
    assert.match(legacyRedirect, /window\.location\.replace\('\.\.\/\.\.\/meu-progresso\.html'\)/);
    assert.match(serviceWorker, /'\.\/meu-progresso\.html'/);
    assert.match(serviceWorker, /js\/dashboard\/meu-progresso\.js/);
});

test('apelido do usuario permanece escapado em resultados HTML', () => {
    const courseQuiz = read('js/course/quiz.js');
    const srsReview = read('js/srs/review.js');

    for (const source of [courseQuiz, srsReview]) {
        assert.match(source, /const nomeSeguro = typeof escapeHTML === 'function' \? escapeHTML\(String\(nome\)\) : 'Estudante'/);
        assert.match(source, /<strong>\$\{nomeSeguro\}<\/strong>/);
        assert.doesNotMatch(source, /<strong>\$\{nome\}<\/strong>/);
    }
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
    const html = read('meu-progresso.html');
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
    assert.match(html, /meu-progresso\.js\?v=31/);
    assert.doesNotMatch(html, /chart\.js|highcharts|d3\.js/i);

    assert.match(dashboard, /function calcularEstatisticasDashboard\s*\(/);
    assert.match(dashboard, /function criarLinhasDiariasEstatisticasDashboard\s*\(/);
    assert.match(dashboard, /accuracy:\s*\{ value: accuracyValue, available:/);
    assert.match(dashboard, /renderizarGraficoRevisoesDashboard\(estatisticas\)/);
    assert.match(dashboard, /estatisticas\.accuracy\.available[\s\S]*?estatisticas\.accuracy\.value/);
    assert.doesNotMatch(dashboard, /Acertos e erros histÃ³ricos serÃ£o registrados na Fase 5/);
    assert.doesNotMatch(html, /Fase 5/);
    assert.match(dashboard, /Dias que alcançaram a meta ÷ dias medidos elegíveis/);
    assert.match(dashboard, /filtro\.addEventListener\('change'/);
    assert.match(dashboard, /renderizarGraficosDashboard\(estatisticas\)/);
    assert.match(css, /\.dashboard-advanced-stats-grid/);
    assert.match(css, /\.dashboard-statistics-filters/);
    assert.match(css, /\.dashboard-distributions-grid/);
    assert.match(serviceWorker, /const CACHE_NAME = 'idiomas-academy-v50'/);
    assert.match(serviceWorker, /meu-progresso\.js\?v=31/);
});

test('graficos de aprendizado da Etapa 29 usam dados reais e alternativa acessivel', () => {
    const html = read('meu-progresso.html');
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
    const html = read('meu-progresso.html');
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
    const html = read('meu-progresso.html');
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
    const html = read('meu-progresso.html');
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

test('integridade pedagogica japonesa da Fase 1 permanece protegida', () => {
    const kanjiRender = read('js/kanji/kanji-render.js');
    const kanjiCanvas = read('js/kanji/kanji-canvas.js');
    const kanjiHub = read('html/ja-JP/kanji.html');
    const kanjiN1Page = read('html/ja-JP/kanji_n1.html');
    const coursePage = read('html/ja-JP/curso.html');
    const courseQuiz = read('js/course/quiz.js');
    const hiragana = loadValue('database/ja-JP/data_hiragana.js', 'HIRA_COURSE_DATA');
    const katakana = loadValue('database/ja-JP/data_katakana.js', 'KATA_COURSE_DATA');

    for (const [mode, level] of Object.entries({
        kanji: 'N5',
        kanji_n4: 'N4',
        kanji_n3: 'N3',
        kanji_n2: 'N2',
        kanji_n1: 'N1'
    })) {
        assert.match(kanjiRender, new RegExp(`${mode}:\\s*'${level}'`), `${mode}: nivel gramatical incorreto`);
    }
    assert.match(kanjiRender, /grammarLevelByMode\[mode\] \|\| 'N5'/);

    assert.doesNotMatch(kanjiCanvas, /gerarCaminhosSvgFallback/);
    assert.match(kanjiCanvas, /Ordem de traços indisponível offline para este caractere/);
    assert.match(kanjiCanvas, /Não foi possível carregar a ordem de traços deste caractere/);
    assert.match(kanjiCanvas, /Forma aproximada de/);
    assert.match(kanjiRender, />✅ Verificar forma</);
    assert.match(kanjiCanvas, /adicionarXP\(30, 'Cobertura Mestre da Forma \(≥90%\)'\)/);
    assert.match(kanjiCanvas, /adicionarXP\(15, 'Cobertura Excelente da Forma \(≥70%\)'\)/);
    assert.match(kanjiCanvas, /adicionarXP\(10, 'Forma Reconhecida'\)/);

    const katakanaText = JSON.stringify(katakana);
    assert.match(katakanaText, /ソング/);
    assert.match(katakanaText, /songu/);
    assert.doesNotMatch(katakanaText, /ソン(?:"|\\)/);
    assert.match(hiragana[5].desc, /combinações principais/);
    assert.match(hiragana[5].desc, /Módulo 8/);

    const levelSpecs = [
        ['N5', 'database/ja-JP/data_kanji_n5.js', 'kanjiN5Data', 201, 104],
        ['N4', 'database/ja-JP/data_kanji_n4.js', 'kanjiN4Data', 289, 147],
        ['N3', 'database/ja-JP/data_kanji_n3.js', 'kanjiN3Data', 360, 353],
        ['N2', 'database/ja-JP/data_kanji_n2.js', 'kanjiN2Data', 375, 342],
        ['N1', 'database/ja-JP/data_kanji_n1.js', 'kanjiN1Data', 990, 822]
    ];
    const allCharacters = [];
    let allEntries = 0;
    for (const [level, file, variable, expectedEntries, expectedUnique] of levelSpecs) {
        const modules = loadValue(file, variable);
        const characters = modules.flatMap(module => module.kanjis || [])
            .map(item => item.character || item.kanji)
            .filter(Boolean);
        assert.equal(characters.length, expectedEntries, `${level}: total de registros mudou`);
        assert.equal(new Set(characters).size, expectedUnique, `${level}: total de caracteres unicos mudou`);
        allEntries += characters.length;
        allCharacters.push(...characters);
    }
    assert.equal(allEntries, 2215);
    assert.equal(new Set(allCharacters).size, 1267);
    assert.match(kanjiHub, /2\.215 registros de estudo/);
    assert.match(kanjiHub, /1\.267 caracteres únicos/);
    assert.match(kanjiHub, /Não constitui uma lista oficial de Kanji do JLPT/);

    const kanjiN1 = loadValue('database/ja-JP/data_kanji_n1.js', 'kanjiN1Data');
    const finalModule = kanjiN1.at(-1);
    assert.equal(finalModule.editorialReview.status, 'pending-human-review');
    assert.doesNotMatch(kanjiN1Page, /2[\.,]136/);
    assert.doesNotMatch(JSON.stringify(finalModule), /2[\.,]136/);

    assert.match(coursePage, /CERTIFICADO DE CONCLUSÃO — JAPONÊS B2/);
    assert.match(coursePage, /105 Módulos/);
    assert.match(coursePage, /IDENTIFICADOR LOCAL/);
    assert.doesNotMatch(coursePage, /CERTIFICADO DE CONCLUSÃO & PROFICIENCY|120 Horas-Aula|CÓDIGO DE AUTENTICIDADE|VERIFIED PROFICIENCY|Certificado de Fluência B2/);
    assert.match(courseQuiz, /Avaliação final da trilha B2/);
    assert.match(courseQuiz, /certificado de conclusão da trilha/);
    assert.doesNotMatch(courseQuiz, /Simulado Final de Proficiency B2|Certificado Oficial|Certificado de Fluência B2/);
});

test('auditoria editorial japonesa da Fase 2 permanece permanente e deterministica', () => {
    const audit = read('tests/japanese-editorial-audit.cjs');
    const packageJson = JSON.parse(read('package.json'));
    const occurrences = JSON.parse(read('tests/JAPANESE_EDITORIAL_OCCURRENCES.json'));
    const review = read('tests/JAPANESE_EDITORIAL_REVIEW.md');

    assert.equal(packageJson.scripts['audit:japanese'], 'node tests/japanese-editorial-audit.cjs --write');
    assert.equal(packageJson.scripts['audit:japanese:check'], 'node tests/japanese-editorial-audit.cjs');
    assert.match(packageJson.scripts.test, /node tests\/japanese-editorial-audit\.cjs/);

    for (const rule of [
        'module-id-duplicate',
        'audio-guide-no-japanese',
        'dialogue-no-japanese',
        'english-intrusion',
        'reading-latin-only',
        'kanji-example-no-japanese',
        'kanji-example-missing-target',
        'quiz-answer-invalid'
    ]) {
        assert.match(audit, new RegExp(`rule: '${rule}'`), `regra ausente: ${rule}`);
    }
    assert.match(audit, /function runRuleFixtures\(\)/);
    assert.match(audit, /const ALLOWLIST = new Map\((?:\[)?/);
    assert.doesNotMatch(audit, /ALLOWLIST.*(?:N1|N2|N3).*\*/s, 'allowlist ampla por nível não é permitida');

    assert.equal(occurrences.schemaVersion, 1);
    assert.equal(occurrences.summary.bySeverity.blocking, 0);
    assert.equal(occurrences.summary.bySeverity.editorial, 0, 'a fila objetiva concluída não deve reaparecer');
    assert.equal(Object.values(occurrences.metrics.course).reduce((sum, item) => sum + item.modules, 0), 105);
    assert.equal(Object.values(occurrences.metrics.kana).reduce((sum, item) => sum + item.modules, 0), 16);
    assert.equal(Object.values(occurrences.metrics.kanji).reduce((sum, item) => sum + item.modules, 0), 92);
    assert.equal(Object.values(occurrences.metrics.kanji).reduce((sum, item) => sum + item.entries, 0), 2215);
    assert.match(review, /Bloqueadores técnicos: 0/);
    assert.match(review, /não substitui revisão humana/i);
});

test('contrato textual japones da Fase 3A permanece separado e retrocompativel', () => {
    const normalizer = read('js/course/moduleNormalizer.js');
    const course = read('js/course/course.js');
    const packageJson = JSON.parse(read('package.json'));
    const contractTest = read('tests/course-text-contract.cjs');

    assert.match(normalizer, /function normalizeTextContent\(rawContent, legacyFallbacks = \{\}\)/);
    for (const field of ['displayText', 'audioText', 'furigana', 'romaji', 'translation', 'scenario']) {
        assert.match(normalizer, new RegExp(`${field}:`), `campo textual ausente: ${field}`);
    }
    assert.match(normalizer, /audio: \{/);
    assert.match(normalizer, /_contractExplicit/);
    assert.match(normalizer, /normalized\.canDo = String\(canDo\)/);
    assert.match(course, /data-course-audio-text/);
    assert.match(course, /criarBotaoAudioCurso\(content\.audioText/);
    assert.match(course, /course-dialogue-translation/);
    assert.match(course, /course-dialogue-scenario/);
    assert.doesNotMatch(course, /const speakWord = speechText/);
    assert.doesNotMatch(course, /onclick="speakKana\('\$\{speakWord\}/);
    assert.equal(packageJson.scripts['test:japanese-text'], 'node tests/course-text-contract.cjs');
    assert.match(packageJson.scripts.test, /node tests\/course-text-contract\.cjs/);
    assert.match(contractTest, /inventario japones permanece com 105 modulos/);
});

test('correcao editorial A1 e A2 da Fase 3B permanece rastreavel', () => {
    const a1 = read('database/ja-JP/data_curso_a1.js');
    const a2 = read('database/ja-JP/data_curso_a2.js');
    const audit = read('tests/japanese-editorial-audit.cjs');
    const occurrences = JSON.parse(read('tests/JAPANESE_EDITORIAL_OCCURRENCES.json'));
    const humanReview = read('tests/JAPANESE_A1_A2_HUMAN_REVIEW.md');
    const multilang = read('tests/multilang.cjs');

    assert.match(a1, /const A1_EDITORIAL_CONTRACT = \[/);
    assert.match(a2, /const A2_EDITORIAL_AUDIO = \[/);
    assert.match(a2, /const A2_DIALOGUE_CONTRACT = \{/);
    assert.match(a1, /pending-human-review/);
    assert.match(a2, /pending-human-review/);
    assert.match(a2, /A2コース修了です/);
    assert.doesNotMatch(a2, /audioText:\s*"?\[Seu Nome\]/);
    assert.match(audit, /function isScenarioOnlyContent\(content\)/);
    assert.match(audit, /audio-placeholder-invalid/);
    assert.match(audit, /editorial-review-status-invalid/);
    assert.equal(occurrences.summary.bySeverity.blocking, 0);
    assert.equal(occurrences.occurrences.filter(item => ['A1', 'A2'].includes(item.level)).length, 0);
    assert.match(humanReview, /stage1_context\.audio/);
    assert.match(humanReview, /stage4_dialog\[0\]\.content/);
    assert.match(humanReview, /Nenhuma linha desta tabela deve ser marcada como aprovada automaticamente/);
    assert.match(a2, /applyA2Phase21BEditorialReview/);
    assert.match(multilang, /maxBytes: 1625 \* 1024/);
});

test('correcao editorial B1 e B2 da Fase 3C permanece rastreavel', () => {
    const b1 = read('database/ja-JP/data_curso_b1.js');
    const b2 = read('database/ja-JP/data_curso_b2.js');
    const audit = read('tests/japanese-editorial-audit.cjs');
    const occurrences = JSON.parse(read('tests/JAPANESE_EDITORIAL_OCCURRENCES.json'));
    const humanReview = read('tests/JAPANESE_B1_B2_HUMAN_REVIEW.md');
    const contractTest = read('tests/course-text-contract.cjs');

    assert.match(b1, /const B1_EDITORIAL_AUDIO = \[/);
    assert.match(b1, /const B1_DIALOGUE_CONTRACT = \{/);
    assert.match(b2, /const B2_EDITORIAL_AUDIO = \[/);
    assert.match(b2, /const B2_DIALOGUE_CONTRACT = \{/);
    assert.match(b1, /pending-human-review/);
    assert.match(b2, /pending-human-review/);
    assert.match(b2, /B2コースの修了証をお渡しいたします/);
    assert.doesNotMatch(b2, /audioText:\s*"?\[Seu Nome\]/);
    assert.match(audit, /function hasCompleteTextContract\(content\)/);
    assert.match(audit, /ADVANCED_HUMAN_REVIEW_OUTPUT/);
    assert.equal(occurrences.summary.bySeverity.blocking, 0);
    assert.equal(occurrences.occurrences.filter(item => ['B1', 'B2'].includes(item.level)).length, 0);
    assert.match(humanReview, /stage1_context\.audio/);
    assert.match(humanReview, /stage4_dialog\[0\]\.content/);
    assert.match(contractTest, /B1 e B2 possuem os 176 contratos editoriais previstos/);
    assert.match(contractTest, /eb603690932c3ca4f8044a72b7a8325ebe2a49f2576467bb1f63933fcd6262d6/);
    assert.match(contractTest, /ce2fc286bc4a1869dd9082277de2ddea38ccd3d73b2cbc5db9c27a8c76b55de4/);
});

test('recuperacao Kanji N3 da Fase 4 permanece rastreavel e nao aprovada', () => {
    const n3 = read('database/ja-JP/data_kanji_n3.js');
    const render = read('js/kanji/kanji-render.js');
    const audit = read('tests/japanese-editorial-audit.cjs');
    const contract = read('tests/kanji-n3-contract.cjs');
    const occurrences = JSON.parse(read('tests/JAPANESE_EDITORIAL_OCCURRENCES.json'));
    const review = read('tests/JAPANESE_KANJI_N3_HUMAN_REVIEW.md');
    const packageJson = JSON.parse(read('package.json'));

    assert.match(n3, /KanjiRomajiDraft\.sentence/);
    assert.match(n3, /const N3_EXAMPLE_OVERRIDES = \[/);
    assert.match(n3, /pending-human-review/);
    assert.match(n3, /ボウ \(BOU\) \/ バク \(BAKU\)/);
    assert.match(n3, /ゾウ \(ZOU\)/);
    assert.doesNotMatch(n3, /370 N3 kanji complete mastered|370 Kanjis Dominados|Domínio integral dos 370/i);
    assert.match(render, /const content = ex\.content/);
    assert.match(render, /data-kanji-audio/);
    assert.match(render, /content \? content\.audioText/);
    assert.doesNotMatch(render, /onclick="playKanjiAudio\('\$\{s\.replace/);
    assert.match(audit, /kanji-example-contract-invalid/);
    assert.match(audit, /kanji-example-audio-invalid/);
    assert.match(audit, /N3_HUMAN_REVIEW_OUTPUT/);
    assert.equal(occurrences.summary.bySeverity.blocking, 0);
    assert.equal(occurrences.occurrences.filter(item => item.level === 'N3').length, 0);
    assert.match(contract, /720 exemplos/);
    assert.match(contract, /23d00eb9b56f99c918566cfa032ea8b6b4a4501c2c63c99a220a9a4233cd3043/);
    assert.match(review, /Todas as linhas permanecem pendentes/);
    assert.equal(packageJson.scripts['test:japanese-kanji-n3'], 'node tests/kanji-n3-contract.cjs');
    assert.match(packageJson.scripts.test, /node tests\/kanji-n3-contract\.cjs/);
});

test('recuperacao Kanji N2 da Fase 5 permanece rastreavel e nao aprovada', () => {
    const n2 = read('database/ja-JP/data_kanji_n2.js');
    const helper = read('js/kanji/romaji-draft.js');
    const audit = read('tests/japanese-editorial-audit.cjs');
    const contract = read('tests/kanji-n2-contract.cjs');
    const occurrences = JSON.parse(read('tests/JAPANESE_EDITORIAL_OCCURRENCES.json'));
    const review = read('tests/JAPANESE_KANJI_N2_HUMAN_REVIEW.md');
    const n2Page = read('html/ja-JP/kanji_n2.html');
    const n3Page = read('html/ja-JP/kanji_n3.html');
    const packageJson = JSON.parse(read('package.json'));

    assert.match(n2, /KanjiRomajiDraft\.apply\(kanjiN2Data/);
    assert.match(n2, /キン \(KIN\)/);
    assert.match(n2, /ダツ \(DATSU\)/);
    assert.match(n2, /375 registros apresentados/);
    assert.doesNotMatch(n2, /todos os 380 Kanjis aprendidos/i);
    assert.match(helper, /global\.KanjiRomajiDraft/);
    assert.match(helper, /pending-human-review/);
    assert.ok(n2Page.indexOf('romaji-draft.js') < n2Page.indexOf('data_kanji_n2.js'));
    assert.ok(n3Page.indexOf('romaji-draft.js') < n3Page.indexOf('data_kanji_n3.js'));
    assert.match(audit, /N2_HUMAN_REVIEW_OUTPUT/);
    assert.equal(occurrences.summary.bySeverity.blocking, 0);
    assert.equal(occurrences.occurrences.filter(item => item.level === 'N2').length, 0);
    assert.match(contract, /750 exemplos/);
    assert.match(contract, /5a70dff97bf428118a9c509c9ba54419f9b5a66f5cd4bff20358521426e8d02e/);
    assert.match(review, /Todas as linhas permanecem pendentes/);
    assert.equal(packageJson.scripts['test:japanese-kanji-n2'], 'node tests/kanji-n2-contract.cjs');
    assert.match(packageJson.scripts.test, /node tests\/kanji-n2-contract\.cjs/);
});

test('recuperacao Kanji N1 da Fase 6 e decisões da Fase 17 permanecem rastreáveis', () => {
    const n1 = read('database/ja-JP/data_kanji_n1.js');
    const render = read('js/kanji/kanji-render.js');
    const audit = read('tests/japanese-editorial-audit.cjs');
    const contract = read('tests/kanji-n1-contract.cjs');
    const occurrences = JSON.parse(read('tests/JAPANESE_EDITORIAL_OCCURRENCES.json'));
    const review = read('tests/JAPANESE_KANJI_N1_HUMAN_REVIEW.md');
    const page = read('html/ja-JP/kanji_n1.html');
    const packageJson = JSON.parse(read('package.json'));

    assert.match(n1, /KanjiRomajiDraft\.apply\(kanjiN1Data/);
    assert.match(n1, /mechanically-convertible-onyomi/);
    assert.match(n1, /ambiguous-or-foreign/);
    assert.match(n1, /legacyValue/);
    assert.match(n1, /N1_READING_EDITORIAL_CORRECTIONS/);
    assert.match(render, /Leitura pendente de revisão editorial/);
    assert.ok(page.indexOf('romaji-draft.js') < page.indexOf('data_kanji_n1.js'));
    assert.match(audit, /reading-pending-human-review/);
    assert.match(audit, /N1_HUMAN_REVIEW_OUTPUT/);
    assert.equal(occurrences.summary.bySeverity.blocking, 0);
    const n1Occurrences = occurrences.occurrences.filter(item => item.level === 'N1');
    assert.equal(n1Occurrences.filter(item => item.rule.startsWith('kanji-example-')).length, 0);
    assert.equal(n1Occurrences.filter(item => item.rule === 'reading-pending-human-review').length, 0);
    assert.match(contract, /565 leituras/);
    assert.match(contract, /fb568a7a2762c5391aa128332a23eebb6c7027a8bf4c8c9618dbfcc6fbedcf6d/);
    assert.match(review, /\| corrected \|/i);
    assert.equal(packageJson.scripts['test:japanese-kanji-n1'], 'node tests/kanji-n1-contract.cjs');
    assert.match(packageJson.scripts.test, /node tests\/kanji-n1-contract\.cjs/);
});

test('consolidacao dos recursos japoneses da Fase 7 permanece integrada', () => {
    const packageJson = JSON.parse(read('package.json'));
    const contract = read('tests/japanese-resources-contract.cjs');
    assert.equal(packageJson.scripts['test:japanese-resources'], 'node tests/japanese-resources-contract.cjs');
    assert.match(packageJson.scripts.test, /node tests\/japanese-resources-contract\.cjs/);
    assert.match(contract, /registro central cobre os sete recursos japoneses/);
    assert.match(contract, /snapshots estruturais N5 e N4/);
    assert.match(read('tests/FASE_JAPONES_07_CONSOLIDACAO_RECURSOS.md'), /252 pendências editoriais/);
});

test('escuta, pronuncia e shadowing da Fase 8 permanecem transparentes', () => {
    const packageJson = JSON.parse(read('package.json'));
    const contract = read('tests/japanese-listening-contract.cjs');
    assert.equal(packageJson.scripts['test:japanese-listening'], 'node tests/japanese-listening-contract.cjs');
    assert.match(packageJson.scripts.test, /node tests\/japanese-listening-(?:index|contract)\.cjs/);
    assert.match(contract, /319/);
    assert.match(read('html/ja-JP/escuta.html'), /não avalia pronúncia/);
    assert.match(read('js/japanese/listening.js'), /activityType: 'pronunciation'/);
    assert.doesNotMatch(read('js/japanese/listening.js'), /adicionarXP|processarAvaliacaoSRS|localStorage/);
});

test('biblioteca de leitura graduada da Fase 9 permanece rastreavel', () => {
    const packageJson = JSON.parse(read('package.json'));
    assert.equal(packageJson.scripts['test:japanese-reading'], 'node tests/japanese-reading-contract.cjs');
    assert.match(packageJson.scripts.test, /node tests\/japanese-reading-(?:index|contract)\.cjs/);
    assert.match(read('tests/japanese-reading-contract.cjs'), /91 leituras Kanji/);
    assert.match(read('html/ja-JP/leitura.html'), /não constituem listas oficiais/);
    assert.doesNotMatch(read('js/japanese/reading.js'), /adicionarXP|processarAvaliacaoSRS|localStorage/);
});

test('referencia gramatical da Fase 10 permanece conservadora e rastreavel', () => {
    const packageJson = JSON.parse(read('package.json'));
    assert.equal(packageJson.scripts['test:japanese-grammar'], 'node tests/japanese-grammar-contract.cjs');
    assert.match(packageJson.scripts.test, /node tests\/japanese-grammar-(?:index|contract)\.cjs/);
    assert.match(read('tests/japanese-grammar-contract.cjs'), /194/);
    assert.match(read('html/ja-JP/gramatica.html'), /não é um conjugador universal/);
    assert.doesNotMatch(read('js/japanese/grammar.js'), /adicionarXP|processarAvaliacaoSRS|localStorage/);
});

test('producao escrita guiada da Fase 11 permanece privada e transparente', () => {
    const packageJson = JSON.parse(read('package.json'));
    assert.equal(packageJson.scripts['test:japanese-writing'], 'node tests/japanese-writing-contract.cjs');
    assert.match(packageJson.scripts.test, /node tests\/japanese-writing-(?:index|contract)\.cjs/);
    assert.match(read('tests/japanese-writing-contract.cjs'), /210 modelos explícitos/);
    assert.match(read('html/ja-JP/escrita.html'), /não é salvo nem enviado/);
    assert.doesNotMatch(read('js/japanese/writing.js'), /adicionarXP|processarAvaliacaoSRS|localStorage|fetch\(/);
});

test('preparacao JLPT da Fase 12 permanece interna e nao oficial', () => {
    const packageJson = JSON.parse(read('package.json'));
    assert.equal(packageJson.scripts['test:japanese-jlpt'], 'node tests/japanese-jlpt-contract.cjs');
    assert.match(packageJson.scripts.test, /node tests\/japanese-jlpt-(?:index|contract)\.cjs/);
    assert.match(read('tests/japanese-jlpt-contract.cjs'), /1060 questões explícitas/);
    assert.match(read('html/ja-JP/jlpt.html'), /não possui afiliação com o JLPT/);
    assert.doesNotMatch(read('js/japanese/jlpt.js'), /adicionarXP|processarAvaliacaoSRS|localStorage|fetch\(/);
});

test('hub e Dashboard da Fase 13 usam habilidades e sessoes reais', () => {
    const packageJson = JSON.parse(read('package.json'));
    assert.equal(packageJson.scripts['test:japanese-release'], 'node tests/japanese-release-contract.cjs');
    assert.match(packageJson.scripts.test, /node tests\/japanese-release-contract\.cjs/);
    assert.match(read('hub_japones.html'), /data-skill-group="foundations"/);
    assert.match(read('meu-progresso.html'), /dashboard-japanese-skills-grid/);
    assert.match(read('js/dashboard/meu-progresso.js'), /criarResumoHabilidadesJaponesDashboard/);
});

test('redesign japones usa colecoes progressivas sem alterar dados ou canvases', () => {
    const hub = read('hub_japones.html'), experienceCss = read('japanese-experience.css');
    assert.doesNotMatch(hub, /jp-group-count/);
    assert.match(experienceCss, /\.japanese-experience > header > \.home-btn\s*\{[^}]*position: absolute/s);
    assert.match(experienceCss, /\.jp-hero-summary\s*\{[^}]*grid-template-columns: repeat\(3,/s);
    assert.match(experienceCss, /\.jp-group-heading\s*\{[^}]*text-align: center/s);
    assert.doesNotMatch(experienceCss, /Idiomas Academy";/);
    const reading = read('js/japanese/reading.js'), grammar = read('js/japanese/grammar.js'), writing = read('js/japanese/writing.js');
    [reading, grammar, writing].forEach(source => {
        assert.match(source, /JapaneseUI\.createProgressiveCollection/);
        assert.match(source, /batchSize: 12/);
        assert.match(source, /Exibindo \$\{n\} de \$\{a\.length\}/);
        assert.match(source, /Carregar mais/);
    });
    const kanji = read('js/kanji/kanji-render.js');
    assert.match(kanji, /batchSize: 60/);
    assert.match(kanji, /batchSize: 6/);
    assert.match(kanji, /afterRender\(\)/);
    assert.match(kanji, /inicializarTodosOsCanvases/);
    assert.match(read('js/kanji/kanji-canvas.js'), /data-initialized/);
    assert.doesNotMatch(kanji, /pending-human-review.*=/);
    ['escuta', 'leitura', 'gramatica', 'escrita', 'jlpt'].forEach(page => {
        const html = read(`html/ja-JP/${page}.html`);
        assert.doesNotMatch(html, /<style>/);
        assert.match(html, /japanese-experience\.css\?v=46/);
        assert.match(html, /class="japanese-experience jp-study-page/);
    });
    const events = read('js/core/events.js'), sw = read('sw.js');
    assert.match(sw, /idiomas-academy-v50/);
    assert.match(sw, /japanese-experience\.css/);
    assert.match(events, /controllerchange/);
    assert.match(events, /Nova versão disponível/);
    assert.match(events, /obterSessaoEstudoAtiva/);
    assert.match(events, /Recarregar agora/);
});

const failed = results.filter(result => !result.ok);
console.log(`\n${results.length - failed.length}/${results.length} grupos de regressao aprovados.`);
if (failed.length > 0) {
    console.error('\nFAILS:', failed.map(f => `\n- ${f.name}: ${f.error.message}`).join(''));
    process.exitCode = 1;
}
