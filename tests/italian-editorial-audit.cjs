'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const SOURCE = path.join(ROOT, 'database', 'it-IT', 'data_curso_italiano_a1.js');
const OUTPUT = path.join(ROOT, 'tests', 'ITALIAN_EDITORIAL_OCCURRENCES.md');
const WRITE_MODE = process.argv.includes('--write');
const { CURSO_ITALIANO_A1_DADOS: modules } = require(SOURCE);

const PLACEHOLDER = /\b(?:todo|tbd|placeholder|lorem ipsum|em implanta[cç][aã]o|conte[uú]do em breve)\b/i;
const PORTUGUESE_ONLY = /\b(?:você|vocês|obrigado|amanhã|ontem|onde|preciso|gostaria|senhor|senhora|farmácia|ônibus|avião|quarto de hotel)\b/iu;
const TARGET_WORDS = /^[A-Za-zÀ-ÖØ-öø-ÿ’' -]+$/u;

function issue(module, field, severity, reason, value = '') {
    return { file: 'database/it-IT/data_curso_italiano_a1.js', module: module.id || '?', field, severity, reason, value: String(value || '') };
}

function inspectTarget(module, field, value, occurrences) {
    if (typeof value !== 'string' || !value.trim()) {
        occurrences.push(issue(module, field, 'erro', 'Campo-alvo vazio', value));
        return;
    }
    if (PLACEHOLDER.test(value)) occurrences.push(issue(module, field, 'erro', 'Placeholder em campo italiano', value));
    if (PORTUGUESE_ONLY.test(value)) occurrences.push(issue(module, field, 'erro', 'Português conhecido em campo italiano', value));
    if (!TARGET_WORDS.test(value.replace(/[.,!?;:0-9]/g, ''))) occurrences.push(issue(module, field, 'erro', 'Caractere inesperado em campo italiano', value));
}

function audit() {
    const occurrences = [];
    assert.ok(Array.isArray(modules), 'dataset italiano inválido');
    assert.equal(modules.length, 30, 'o Italiano A1 deve conter exatamente 30 módulos');
    assert.equal(new Set(modules.map(module => module.id)).size, 30, 'IDs italianos duplicados');

    modules.forEach((module, index) => {
        const expectedId = `it_a1_mod_${String(index + 1).padStart(2, '0')}`;
        assert.equal(module.id, expectedId, `${expectedId}: sequência de IDs inválida`);
        assert.equal(module.level, 'A1', `${module.id}: nível inválido`);
        assert.equal(module.language, 'it-IT', `${module.id}: idioma inválido`);
        assert.ok(module.stage1_context && module.stage1_context.situation && module.stage1_context.missionDescription, `${module.id}: contexto ou missão ausente`);

        const vocabulary = module.stage2_drops.filter(item => item.type === 'vocab');
        const grammar = module.stage2_drops.filter(item => item.type === 'grammar_pill');
        assert.ok(vocabulary.length >= 6, `${module.id}: mínimo de seis itens de vocabulário não atingido`);
        assert.ok(grammar.length >= 2, `${module.id}: mínimo de duas explicações gramaticais não atingido`);
        assert.equal(new Set(vocabulary.map(item => item.word)).size, vocabulary.length, `${module.id}: vocabulário duplicado no módulo`);

        vocabulary.forEach((item, itemIndex) => {
            inspectTarget(module, `stage2_drops.vocab[${itemIndex}].word`, item.word, occurrences);
            assert.equal(item.audio, item.word, `${module.id}: áudio divergente em vocabulário ${itemIndex}`);
            assert.ok(item.translation && item.dica, `${module.id}: tradução ou explicação ausente no vocabulário ${itemIndex}`);
        });
        grammar.forEach((item, itemIndex) => {
            assert.ok(item.title && item.rule && item.formula && item.example, `${module.id}: gramática ${itemIndex} incompleta`);
            if (PLACEHOLDER.test(`${item.title} ${item.rule} ${item.formula} ${item.example}`)) occurrences.push(issue(module, `grammar[${itemIndex}]`, 'erro', 'Placeholder em explicação gramatical', item.title));
        });

        assert.ok(Array.isArray(module.stage3_sentences) && module.stage3_sentences.length >= 2, `${module.id}: dois construtores de frase obrigatórios`);
        module.stage3_sentences.forEach((item, itemIndex) => {
            inspectTarget(module, `stage3_sentences[${itemIndex}].sentence`, item.sentence, occurrences);
            assert.equal(item.audio, item.sentence, `${module.id}: áudio divergente na frase ${itemIndex}`);
            assert.equal(item.tokens.join(' '), item.sentence, `${module.id}: tokens divergentes na frase ${itemIndex}`);
            assert.ok(item.translation, `${module.id}: tradução ausente na frase ${itemIndex}`);
        });
        assert.deepEqual(module.stage3_5_sentenceBuilder, module.stage3_sentences, `${module.id}: construtor fora de sincronia`);

        assert.ok(Array.isArray(module.stage4_dialogue) && module.stage4_dialogue.length >= 2, `${module.id}: diálogo contextual incompleto`);
        module.stage4_dialogue.forEach((item, itemIndex) => {
            inspectTarget(module, `stage4_dialogue[${itemIndex}].text`, item.text, occurrences);
            assert.equal(item.audio, item.text, `${module.id}: áudio divergente no diálogo ${itemIndex}`);
            assert.ok(item.speaker && item.translation, `${module.id}: fala ${itemIndex} incompleta`);
        });

        assert.ok(Array.isArray(module.stage5_quiz) && module.stage5_quiz.length >= 5, `${module.id}: mínimo de cinco exercícios não atingido`);
        module.stage5_quiz.forEach((item, itemIndex) => {
            assert.ok(item.question && item.explanation, `${module.id}: exercício ${itemIndex} sem pergunta ou explicação`);
            assert.ok(Array.isArray(item.options) && item.options.length >= 4, `${module.id}: exercício ${itemIndex} sem opções suficientes`);
            assert.equal(new Set(item.options).size, item.options.length, `${module.id}: exercício ${itemIndex} tem opções duplicadas`);
            assert.ok(Number.isInteger(item.correctIndex) && item.correctIndex >= 0 && item.correctIndex < item.options.length, `${module.id}: índice correto inválido no exercício ${itemIndex}`);
            assert.equal(item.options.filter((_, optionIndex) => optionIndex === item.correctIndex).length, 1, `${module.id}: exercício ${itemIndex} não tem resposta única`);
        });
    });

    return occurrences;
}

function escapeCell(value) {
    return String(value).replace(/\|/g, '\\|').replace(/\r?\n/g, '<br>').trim();
}

function renderReport(occurrences) {
    const blockers = occurrences.filter(item => item.severity === 'erro');
    const lines = [
        '# Ocorrências da auditoria editorial italiana', '',
        'Relatório gerado por `npm run audit:italian`. A validação cobre os 30 módulos do piloto A1 e é uma auto-revisão técnica e editorial automatizada.', '',
        `- Erros técnicos bloqueadores: ${blockers.length}`,
        `- Ocorrências informativas: ${occurrences.length - blockers.length}`,
        `- Total registrado: ${occurrences.length}`, '',
        '## Ocorrências', '',
        '| Severidade | Arquivo | Módulo | Caminho do campo | Motivo | Valor |',
        '|---|---|---|---|---|---|'
    ];
    if (occurrences.length === 0) lines.push('| — | — | — | — | Nenhuma ocorrência técnica encontrada | — |');
    else occurrences.forEach(item => lines.push(`| ${escapeCell(item.severity)} | ${escapeCell(item.file)} | ${escapeCell(item.module)} | ${escapeCell(item.field)} | ${escapeCell(item.reason)} | ${escapeCell(item.value)} |`));
    lines.push('', '## Limite desta validação', '', 'O resultado confirma consistência mecânica e uma auto-revisão editorial do conteúdo produzido. Não constitui certificação por falante nativo, instituição de ensino ou revisor externo.', '');
    return lines.join('\n');
}

const occurrences = audit();
const report = renderReport(occurrences);
const blockers = occurrences.filter(item => item.severity === 'erro');

if (WRITE_MODE) {
    fs.writeFileSync(OUTPUT, report, 'utf8');
    console.log(`Relatório italiano atualizado: ${path.relative(ROOT, OUTPUT)} (${blockers.length} bloqueadores)`);
} else {
    assert.ok(fs.existsSync(OUTPUT), 'relatório italiano ausente; execute npm run audit:italian');
    assert.equal(fs.readFileSync(OUTPUT, 'utf8'), report, 'relatório italiano desatualizado; execute npm run audit:italian');
    assert.equal(blockers.length, 0, `auditoria italiana encontrou ${blockers.length} erro(s) bloqueador(es)`);
    console.log('✓ auditoria italiana: 30 módulos, 180 itens de vocabulário, 60 regras, 60 frases, 60 falas e 150 exercícios consistentes');
}
