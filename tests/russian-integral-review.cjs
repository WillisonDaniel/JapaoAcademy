const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const SOURCES = [
    ['A1', 'database/ru-RU/data_curso_russo_a1.js', 'CURSO_RUSSO_A1_DADOS'],
    ['A2', 'database/ru-RU/data_curso_russo_a2.js', 'CURSO_RUSSO_A2_DADOS'],
    ['B1', 'database/ru-RU/data_curso_russo_b1.js', 'CURSO_RUSSO_B1_DADOS'],
    ['B2', 'database/ru-RU/data_curso_russo_b2.js', 'CURSO_RUSSO_B2_DADOS']
];

function loadModules(relativePath, variableName) {
    const source = fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
    const context = vm.createContext({ console: { log() {}, warn() {}, error() {} } });
    vm.runInContext(`${source}\nglobalThis.__modules = ${variableName};`, context, { filename: relativePath });
    return JSON.parse(JSON.stringify(context.__modules));
}

function location(level, module, collection, index) {
    return `${level}/${module.id}/${collection}[${index}]`;
}

const byLevel = new Map();
const allModules = [];

for (const [level, relativePath, variableName] of SOURCES) {
    const modules = loadModules(relativePath, variableName);
    assert.equal(modules.length, 24, `${level}: esperados 24 módulos`);
    byLevel.set(level, modules);
    allModules.push(...modules);

    modules.forEach(module => {
        assert.ok(module.id, `${level}: módulo sem ID`);
        assert.ok(module.title, `${level}/${module.id}: módulo sem título`);

        assert.ok(Array.isArray(module.stage3_sentences) && module.stage3_sentences.length > 0,
            `${level}/${module.id}: frases ausentes`);
        module.stage3_sentences.forEach((item, index) => {
            const where = location(level, module, 'stage3_sentences', index);
            assert.equal(item.audio, item.sentence, `${where}: texto e áudio divergentes`);
            assert.equal(item.tokens.join(' '), item.sentence, `${where}: tokens e frase divergentes`);
            assert.ok(item.translation, `${where}: tradução ausente`);
        });
        assert.deepEqual(module.stage3_5_sentenceBuilder, module.stage3_sentences,
            `${level}/${module.id}: construtor de frases fora de sincronia`);

        assert.ok(Array.isArray(module.stage4_dialogue) && module.stage4_dialogue.length > 0,
            `${level}/${module.id}: diálogo ausente`);
        module.stage4_dialogue.forEach((item, index) => {
            const where = location(level, module, 'stage4_dialogue', index);
            assert.equal(item.audio, item.text, `${where}: texto e áudio divergentes`);
            assert.ok(item.translation, `${where}: tradução ausente`);
        });

        const vocabulary = module.drops.filter(item => item.type === 'vocab');
        assert.ok(vocabulary.length > 0, `${level}/${module.id}: vocabulário ausente`);
        vocabulary.forEach((item, index) => {
            const where = location(level, module, 'drops.vocab', index);
            assert.equal(item.audio, item.word, `${where}: palavra e áudio divergentes`);
            assert.ok(item.translation, `${where}: tradução ausente`);
        });

        assert.ok(Array.isArray(module.stage5_quiz) && module.stage5_quiz.length > 0,
            `${level}/${module.id}: quiz ausente`);
        module.stage5_quiz.forEach((item, index) => {
            const where = location(level, module, 'stage5_quiz', index);
            assert.ok(Array.isArray(item.options) && item.options.length >= 2, `${where}: opções inválidas`);
            assert.ok(Number.isInteger(item.correctIndex) && item.correctIndex >= 0 && item.correctIndex < item.options.length,
                `${where}: índice correto inválido`);
            assert.ok(item.explanation, `${where}: explicação ausente`);
        });
    });
}

assert.equal(allModules.length, 96, 'o curso russo deve manter 96 módulos A1–B2');
assert.equal(new Set(allModules.map(module => module.id)).size, 96, 'IDs de módulos russos devem ser únicos');

const serialized = JSON.stringify(allModules);
const forbiddenFragments = [
    'Pequeños', 'reinhada', 'Еехать', 'чтошёл', 'русский языком', 'direitos civil',
    'humor russa', 'Informaçõess', 'Genativo', 'Pluptéia', 'Как se diz', 'Я считаю, que',
    'mục tiêu', 'Узнав truth', 'подписанный signed', 'еженедельный weekly',
    'обязанность duty', 'Fluência Nativa', 'certifique sua fluência',
    'Revisão Geral de Fluidez B2', 'Exame Integrado de Fluidez'
];
forbiddenFragments.forEach(fragment => {
    assert.ok(!serialized.includes(fragment), `fragmento editorial obsoleto encontrado: ${fragment}`);
});

const requiredCorrections = [
    'на Тверской улице',
    'Будьте добры, дайте мне мой ключ.',
    'Он сделал домашнее задание.',
    'подписанный договор',
    'в сфере ИТ',
    'обязанность каждого',
    'еженедельный подкаст',
    'Узнав правду',
    'русским языком',
    'комплексный экзамен',
    'Вы успешно завершили курс русского языка уровня B2.'
];
requiredCorrections.forEach(fragment => {
    assert.ok(serialized.includes(fragment), `correção editorial obrigatória ausente: ${fragment}`);
});

console.log('✓ revisão editorial russa integral: 96 módulos, áudio, tokens, diálogos, vocabulário e quizzes consistentes');
