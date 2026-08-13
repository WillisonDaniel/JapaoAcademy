'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { normalizeModule, normalizeTextContent } = require('../js/course/moduleNormalizer.js');

const ROOT = path.resolve(__dirname, '..');
const read = relativePath => fs.readFileSync(path.join(ROOT, relativePath), 'utf8');

function run(name, fn) {
    try {
        fn();
        console.log(`✓ ${name}`);
    } catch (error) {
        console.error(`✗ ${name}`);
        throw error;
    }
}

run('contrato textual preserva fallback legado sem inventar apoios', () => {
    const normalized = normalizeTextContent({}, { displayText: '猫', audioText: '猫' });
    assert.deepEqual(normalized, {
        displayText: '猫',
        audioText: '猫',
        furigana: '',
        romaji: '',
        translation: '',
        scenario: ''
    });
});

run('normalizador separa todos os campos explicitos', () => {
    const normalized = normalizeTextContent({
        displayText: '学校へ行きます。',
        audioText: '学校へ行きます。',
        furigana: 'がっこうへいきます。',
        romaji: 'gakkou e ikimasu',
        translation: 'Vou à escola.',
        scenario: 'Na saída de casa.'
    }, { displayText: 'legado', audioText: 'legado' });
    assert.equal(normalized.displayText, '学校へ行きます。');
    assert.equal(normalized.audioText, '学校へ行きます。');
    assert.equal(normalized.furigana, 'がっこうへいきます。');
    assert.equal(normalized.romaji, 'gakkou e ikimasu');
    assert.equal(normalized.translation, 'Vou à escola.');
    assert.equal(normalized.scenario, 'Na saída de casa.');
});

run('modulo legado recebe aliases novos sem perder os antigos', () => {
    const normalized = normalizeModule({
        id: 'a1_fixture',
        title: 'Fixture',
        stage1_context: { audioGuide: 'Ohayou gozaimasu!' },
        stage2_drops: [{ kanji: '猫', romaji: 'neko', translation: 'Gato' }],
        stage4_dialog: [{ npcName: 'A', npcMessage: 'おはよう。', scenario: 'De manhã.' }]
    });

    assert.equal(normalized.context.audioGuide, 'Ohayou gozaimasu!');
    assert.equal(normalized.context.audio.displayText, 'Ohayou gozaimasu!');
    assert.equal(normalized.context.audio.audioText, 'Ohayou gozaimasu!');
    assert.equal(normalized.drops[0].kanji, '猫');
    assert.equal(normalized.drops[0].content.displayText, '猫');
    assert.equal(normalized.drops[0].content.audioText, '猫');
    assert.equal(normalized.dialog[0].translation, 'De manhã.');
    assert.equal(normalized.dialog[0].content.translation, '');
    assert.equal(normalized.dialog[0].content.scenario, 'De manhã.');
    assert.equal(Object.hasOwn(normalized, 'canDo'), false);
});

run('modulo novo prioriza contrato, separa cenario e expoe can-do declarado', () => {
    const normalized = normalizeModule({
        id: 'a1_contract_fixture',
        title: 'Fixture nova',
        canDo: 'Apresentar-se em uma situação informal.',
        drops: [{
            kanji: 'fallback',
            content: { displayText: '私です。', audioText: '私です。', furigana: 'わたしです。', romaji: 'watashi desu', translation: 'Sou eu.' }
        }],
        dialog: [{
            text: 'fallback',
            content: { displayText: 'はじめまして。', audioText: 'はじめまして。', translation: 'Muito prazer.', scenario: 'Primeiro encontro.' }
        }]
    });

    assert.equal(normalized.canDo, 'Apresentar-se em uma situação informal.');
    assert.equal(normalized.drops[0].content.displayText, '私です。');
    assert.equal(normalized.dialog[0].content.translation, 'Muito prazer.');
    assert.equal(normalized.dialog[0].content.scenario, 'Primeiro encontro.');
});

function createPlayerContext() {
    const context = vm.createContext({
        console,
        setTimeout() {},
        getCurrentLanguageCode: () => 'ja-JP',
        getOpcoesLeitura: () => ({ kanji: true, kana: true, furigana: true, romaji: false })
    });
    vm.runInContext(read('js/core/utils.js'), context, { filename: 'js/core/utils.js' });
    vm.runInContext(read('js/course/course.js'), context, { filename: 'js/course/course.js' });
    return context;
}

run('player respeita Furigana e Romaji das preferencias existentes', () => {
    const context = createPlayerContext();
    let rendered = context.renderizarTextoPrincipalCurso({ displayText: '学校', furigana: 'がっこう', romaji: 'gakkou' });
    assert.match(rendered.mainHtml, /<ruby/);
    assert.match(rendered.mainHtml, /<rt>がっこう<\/rt>/);
    assert.equal(rendered.romajiHtml, '');

    context.getOpcoesLeitura = () => ({ kanji: true, kana: true, furigana: false, romaji: true });
    rendered = context.renderizarTextoPrincipalCurso({ displayText: '学校', furigana: 'がっこう', romaji: 'gakkou' });
    assert.doesNotMatch(rendered.mainHtml, /<rt>/);
    assert.match(rendered.romajiHtml, /gakkou/);
});

run('player preserva apoio fonetico dos outros idiomas', () => {
    const context = createPlayerContext();
    context.getCurrentLanguageCode = () => 'en-US';
    const rendered = context.renderizarTextoPrincipalCurso({ displayText: 'thought', romaji: 'θɔːt' });
    assert.equal(rendered.mainHtml, 'thought');
    assert.equal(rendered.romajiHtml, 'θɔːt');

    const legacy = context.obterConteudoTextualCurso({
        content: { displayText: 'legacy normalized', scenario: 'duplicated', _contractExplicit: false }
    }, { displayText: 'legacy', audioText: 'legacy', translation: 'Legado', scenario: 'Legado' });
    assert.equal(legacy.displayText, 'legacy');
    assert.equal(legacy.translation, 'Legado');
    assert.equal(legacy.scenario, '');

    const explicit = context.obterConteudoTextualCurso({
        content: { displayText: 'explicit', audioText: 'explicit', translation: 'Novo', scenario: 'Cena', _contractExplicit: true }
    }, { displayText: 'legacy' });
    assert.equal(explicit.displayText, 'explicit');
    assert.equal(explicit.scenario, 'Cena');
});

run('botao de audio usa somente audioText e nao cria handler inline', () => {
    const context = createPlayerContext();
    const html = context.criarBotaoAudioCurso('学校へ行きます。', 'Ouvir linha');
    assert.match(html, /data-course-audio-text="学校へ行きます。"/);
    assert.doesNotMatch(html, /onclick=/);

    let listener = null;
    let spoken = null;
    const button = {
        addEventListener(type, callback) {
            assert.equal(type, 'click');
            listener = callback;
        },
        getAttribute(name) {
            assert.equal(name, 'data-course-audio-text');
            return '学校へ行きます。';
        }
    };
    context.speakKana = text => { spoken = text; };
    context.ativarBotoesAudioCurso({ querySelectorAll: () => [button] });
    listener();
    assert.equal(spoken, '学校へ行きます。');
});

run('inventario japones permanece com 105 modulos', () => {
    const metrics = JSON.parse(read('tests/JAPANESE_EDITORIAL_OCCURRENCES.json')).metrics;
    assert.equal(Object.values(metrics.course).reduce((sum, item) => sum + item.modules, 0), 105);
});

console.log('\n8/8 contratos textuais do player aprovados.');
