'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
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

function loadDataset(relativePath, variable) {
    const context = vm.createContext({ console });
    vm.runInContext(`${read(relativePath)}\nglobalThis.__value = ${variable};`, context, { filename: relativePath });
    return JSON.parse(JSON.stringify(context.__value));
}

function stripEditorialFields(value) {
    if (Array.isArray(value)) return value.map(stripEditorialFields);
    if (!value || typeof value !== 'object') return value;
    const result = {};
    for (const [key, item] of Object.entries(value)) {
        if (['audio', 'content', 'canDo', 'editorialReview'].includes(key)) continue;
        result[key] = stripEditorialFields(item);
    }
    return result;
}

run('migracoes A1 a B2 preservam os snapshots estruturais anteriores', () => {
    const fixtures = [
        ['database/ja-JP/data_curso_a1.js', 'CURSO_A1_DADOS', '65ad0ac679822ecee0f92d3e46d3b8f2c3975bb96ff1c15f6c4f04176b1e61e1'],
        ['database/ja-JP/data_curso_a2.js', 'CURSO_A2_DADOS', '44179791ab39cbc5f321fde9a32de50c797c2f3cd7beeb4e8fd2965ad6f8a9ff'],
        ['database/ja-JP/data_curso_b1.js', 'CURSO_B1_DADOS', '5a26923d65d10de65b41e445d87bfd9213429c203b19d317afcc7bd1973fd754'],
        ['database/ja-JP/data_curso_b2.js', 'CURSO_B2_DADOS', '5609f87f3d464fd364bbcbf69427dc6ccd9c272fec0de3b58312820efb7e782f']
    ];
    fixtures.forEach(([file, variable, expected]) => {
        const structural = JSON.stringify(stripEditorialFields(loadDataset(file, variable)));
        assert.equal(crypto.createHash('sha256').update(structural).digest('hex'), expected, `${variable}: estrutura legada mudou`);
    });
});

run('A1 e A2 possuem os 150 contratos editoriais previstos', () => {
    const a1 = loadDataset('database/ja-JP/data_curso_a1.js', 'CURSO_A1_DADOS');
    const a2 = loadDataset('database/ja-JP/data_curso_a2.js', 'CURSO_A2_DADOS');
    const modules = [...a1, ...a2];
    const audioContracts = modules.filter(module => module.stage1_context && module.stage1_context.audio).length;
    const dialogueContracts = modules.flatMap(module => module.stage4_dialog || []).filter(dialogue => dialogue.content).length;
    assert.equal(audioContracts, 61);
    assert.equal(dialogueContracts, 89);
    assert.equal(audioContracts + dialogueContracts, 150);
    assert.equal(modules.filter(module => module.canDo).length, 61);
    assert.equal(modules.filter(module => module.editorialReview && module.editorialReview.status === 'pending-human-review').length, 39);
    assert.equal(modules.filter(module => module.editorialReview && module.editorialReview.status === 'approved').length, 1);
    assert.equal(modules.filter(module => module.editorialReview && module.editorialReview.status === 'corrected').length, 21);
    modules.flatMap(module => module.stage4_dialog || []).forEach(dialogue => {
        if (dialogue.content) assert.doesNotMatch(dialogue.content.audioText || '', /\[\s*(?:Seu\s+)?Nome\s*\]/i);
    });
});

run('auditoria reduz a zero as ocorrencias alvo de A1 e A2', () => {
    const report = JSON.parse(read('tests/JAPANESE_EDITORIAL_OCCURRENCES.json'));
    const target = report.occurrences.filter(item => ['A1', 'A2'].includes(item.level) && ['audio-guide-no-japanese', 'dialogue-no-japanese'].includes(item.rule));
    assert.equal(target.length, 0);
    assert.equal(report.summary.bySeverity.blocking, 0);
    assert.match(read('tests/JAPANESE_A1_A2_HUMAN_REVIEW.md'), /pending-human-review/);
    assert.match(read('tests/JAPANESE_A1_A2_HUMAN_REVIEW.md'), /\| a1_mod_01 \|[^\n]+\| approved \|/i);
});

run('B1 e B2 possuem os 165 contratos editoriais previstos', () => {
    const b1 = loadDataset('database/ja-JP/data_curso_b1.js', 'CURSO_B1_DADOS');
    const b2 = loadDataset('database/ja-JP/data_curso_b2.js', 'CURSO_B2_DADOS');
    const modules = [...b1, ...b2];
    const audioContracts = modules.filter(module => module.stage1_context && module.stage1_context.audio).length;
    const dialogueContracts = modules.flatMap(module => module.stage4_dialog || []).filter(dialogue => dialogue.content).length;
    assert.equal(audioContracts, 44);
    assert.equal(dialogueContracts, 121);
    assert.equal(audioContracts + dialogueContracts, 165);
    assert.equal(modules.filter(module => module.canDo).length, 44);
    assert.equal(modules.filter(module => module.editorialReview && module.editorialReview.status === 'pending-human-review').length, 44);
    modules.flatMap(module => module.stage4_dialog || []).forEach(dialogue => {
        if (dialogue.content) assert.doesNotMatch(dialogue.content.audioText || '', /\[\s*(?:Seu\s+)?Nome\s*\]/i);
    });
});

run('auditoria reduz a zero as ocorrencias alvo de B1 e B2', () => {
    const report = JSON.parse(read('tests/JAPANESE_EDITORIAL_OCCURRENCES.json'));
    const target = report.occurrences.filter(item => ['B1', 'B2'].includes(item.level) && ['audio-guide-no-japanese', 'dialogue-no-japanese'].includes(item.rule));
    assert.equal(target.length, 0);
    assert.equal(report.summary.bySeverity.blocking, 0);
    const humanReview = read('tests/JAPANESE_B1_B2_HUMAN_REVIEW.md');
    assert.match(humanReview, /pending-human-review/);
    assert.doesNotMatch(humanReview, /\| approved \|/i);
});

console.log('\n13/13 contratos textuais do player aprovados.');
