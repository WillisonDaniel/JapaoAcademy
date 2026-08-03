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
    assert.equal(files.length, 50, 'quantidade inesperada de arquivos JavaScript');
    for (const file of files) {
        const check = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });
        assert.equal(check.status, 0, `${path.relative(ROOT, file)}: ${check.stderr.trim()}`);
    }
});

test('19 paginas HTML e referencias locais validas', () => {
    const pages = walk(ROOT, '.html');
    assert.equal(pages.length, 19, 'a quantidade de paginas HTML mudou');
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

test('AppState e carregado depois das constantes em todas as paginas', () => {
    for (const page of walk(ROOT, '.html')) {
        const html = fs.readFileSync(page, 'utf8');
        const constants = html.indexOf('js/core/constants.js');
        const state = html.indexOf('js/core/state.js');
        assert.ok(constants >= 0, `${path.relative(ROOT, page)} nao carrega constants.js`);
        assert.ok(state > constants, `${path.relative(ROOT, page)} nao carrega state.js depois de constants.js`);
    }
});

test('estrutura dos oito cursos principais', () => {
    const courses = [
        ['database/ja-JP/data_curso_a1.js', 'CURSO_A1_DADOS', 31, 'A1'],
        ['database/ja-JP/data_curso_a2.js', 'CURSO_A2_DADOS', 30, 'A2'],
        ['database/ja-JP/data_curso_b1.js', 'CURSO_B1_DADOS', 24, 'B1'],
        ['database/ja-JP/data_curso_b2.js', 'CURSO_B2_DADOS', 20, 'B2'],
        ['database/en-US/data_english_a1.js', 'CURSO_ENGLISH_A1_DADOS', 30, 'A1'],
        ['database/en-US/data_english_a2.js', 'CURSO_ENGLISH_A2_DADOS', 30, 'A2'],
        ['database/en-US/data_english_b1.js', 'CURSO_ENGLISH_B1_DADOS', 24, 'B1'],
        ['database/en-US/data_english_b2.js', 'CURSO_ENGLISH_B2_DADOS', 20, 'B2']
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
if (failed.length > 0) process.exitCode = 1;
