'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const JSON_OUTPUT = path.join(ROOT, 'tests', 'JAPANESE_EDITORIAL_OCCURRENCES.json');
const REVIEW_OUTPUT = path.join(ROOT, 'tests', 'JAPANESE_EDITORIAL_REVIEW.md');
const HUMAN_REVIEW_OUTPUT = path.join(ROOT, 'tests', 'JAPANESE_A1_A2_HUMAN_REVIEW.md');
const ADVANCED_HUMAN_REVIEW_OUTPUT = path.join(ROOT, 'tests', 'JAPANESE_B1_B2_HUMAN_REVIEW.md');
const N3_HUMAN_REVIEW_OUTPUT = path.join(ROOT, 'tests', 'JAPANESE_KANJI_N3_HUMAN_REVIEW.md');
const N2_HUMAN_REVIEW_OUTPUT = path.join(ROOT, 'tests', 'JAPANESE_KANJI_N2_HUMAN_REVIEW.md');
const N1_HUMAN_REVIEW_OUTPUT = path.join(ROOT, 'tests', 'JAPANESE_KANJI_N1_HUMAN_REVIEW.md');
const BASIC_HUMAN_REVIEW_OUTPUT = path.join(ROOT, 'tests', 'JAPANESE_KANA_N5_N4_HUMAN_REVIEW.md');
const WRITE_MODE = process.argv.includes('--write');
const JAPANESE = /[\u3040-\u30ff\u3400-\u9fff]/u;
const LATIN = /[A-Za-z]/;
const ENGLISH_INTRUSION = /\b(?:arrival|ancient|decision|loss|melody|method|strategy|study|target)\b/i;

const COURSE_SPECS = [
    { level: 'A1', file: 'database/ja-JP/data_curso_a1.js', variable: 'CURSO_A1_DADOS', count: 31 },
    { level: 'A2', file: 'database/ja-JP/data_curso_a2.js', variable: 'CURSO_A2_DADOS', count: 30 },
    { level: 'B1', file: 'database/ja-JP/data_curso_b1.js', variable: 'CURSO_B1_DADOS', count: 24 },
    { level: 'B2', file: 'database/ja-JP/data_curso_b2.js', variable: 'CURSO_B2_DADOS', count: 20 }
];

const KANJI_SPECS = [
    { level: 'N5', file: 'database/ja-JP/data_kanji_n5.js', variable: 'kanjiN5Data', modules: 11, entries: 201, unique: 104 },
    { level: 'N4', file: 'database/ja-JP/data_kanji_n4.js', variable: 'kanjiN4Data', modules: 16, entries: 289, unique: 147 },
    { level: 'N3', file: 'database/ja-JP/data_kanji_n3.js', variable: 'kanjiN3Data', modules: 19, entries: 360, unique: 353 },
    { level: 'N2', file: 'database/ja-JP/data_kanji_n2.js', variable: 'kanjiN2Data', modules: 21, entries: 375, unique: 342 },
    { level: 'N1', file: 'database/ja-JP/data_kanji_n1.js', variable: 'kanjiN1Data', modules: 25, entries: 990, unique: 822 }
];

// Exceções precisam identificar exatamente dataset, módulo, campo e regra.
const ALLOWLIST = new Map([
    [
        'database/ja-JP/data_kanji_n5.js|1|kanjis[0].examples[1].sentence|kanji-example-missing-target',
        'Exemplo introdutório compara homófonos e demonstra Kanji diferentes do caractere histórico 漢.'
    ]
]);

function read(relativePath) {
    return fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
}

function loadValue(relativePath, variable) {
    const context = { console: { log() {}, warn() {}, error() {} } };
    context.window = context;
    context.globalThis = context;
    vm.createContext(context);
    if (/data_kanji_n[123]\.js$/.test(relativePath)) {
        vm.runInContext(read('js/kanji/romaji-draft.js'), context, { filename: 'js/kanji/romaji-draft.js' });
    }
    vm.runInContext(`${read(relativePath)}\nglobalThis.__auditValue = ${variable};`, context, { filename: relativePath });
    return JSON.parse(JSON.stringify(context.__auditValue));
}

function sample(value) {
    return String(value == null ? '' : value).replace(/\s+/g, ' ').trim().slice(0, 180);
}

function occurrence({ dataset, level, moduleId, field, rule, severity, value, note }) {
    return {
        dataset,
        level,
        moduleId: String(moduleId == null ? '?' : moduleId),
        field,
        rule,
        severity,
        sample: sample(value),
        ...(note ? { note } : {})
    };
}

function addOccurrence(list, data) {
    const key = `${data.dataset}|${data.moduleId}|${data.field}|${data.rule}`;
    const allowedReason = ALLOWLIST.get(key);
    list.push(occurrence(allowedReason
        ? { ...data, severity: 'allowed', note: allowedReason }
        : data));
}

function hasJapanese(value) {
    return JAPANESE.test(String(value || ''));
}

function isScenarioOnlyContent(content) {
    return Boolean(content && !content.audioText && !content.displayText && content.scenario);
}

function hasValidSpokenContent(content) {
    return Boolean(content && hasJapanese(content.displayText) && hasJapanese(content.audioText));
}

function hasCompleteTextContract(content) {
    return Boolean(content && ['displayText', 'audioText', 'furigana', 'romaji', 'translation', 'scenario']
        .every(field => Object.prototype.hasOwnProperty.call(content, field)));
}

function hasLatinOnly(value) {
    const text = String(value || '');
    return LATIN.test(text) && !hasJapanese(text);
}

function correctOptionCount(question) {
    if (!question || !Array.isArray(question.options)) return 0;
    if (Number.isInteger(question.correctIndex)) {
        return question.correctIndex >= 0 && question.correctIndex < question.options.length ? 1 : 0;
    }
    if (Number.isInteger(question.a)) {
        return question.a >= 0 && question.a < question.options.length ? 1 : 0;
    }
    if (typeof question.a === 'string') {
        return question.options.filter(option => option === question.a).length;
    }
    return question.options.filter(option => option && typeof option === 'object' && (option.isCorrect === true || option.correct === true)).length;
}

function auditQuiz(list, metadata, questions, fieldPrefix, options = {}) {
    if (!Array.isArray(questions) || questions.length === 0) {
        if (options.allowEmpty === true) return;
        addOccurrence(list, { ...metadata, field: fieldPrefix, rule: 'quiz-missing', severity: 'blocking', value: questions });
        return;
    }
    questions.forEach((question, index) => {
        const field = `${fieldPrefix}[${index}]`;
        if (!question || !(question.question || question.q)) {
            addOccurrence(list, { ...metadata, field, rule: 'quiz-question-missing', severity: 'blocking', value: question });
        }
        const isFreeResponse = question && !Array.isArray(question.options) && typeof question.a === 'string' && question.a.trim() && question.type;
        if (isFreeResponse) return;
        if (!Array.isArray(question && question.options) || question.options.length < 2) {
            addOccurrence(list, { ...metadata, field: `${field}.options`, rule: 'quiz-options-invalid', severity: 'blocking', value: question && question.options });
        } else if (correctOptionCount(question) !== 1) {
            addOccurrence(list, { ...metadata, field, rule: 'quiz-answer-invalid', severity: 'blocking', value: question });
        }
    });
}

function auditCourses(occurrences, metrics) {
    const ids = [];
    COURSE_SPECS.forEach(spec => {
        const modules = loadValue(spec.file, spec.variable);
        assert.equal(modules.length, spec.count, `${spec.file}: quantidade de módulos mudou`);
        metrics.course[spec.level] = { modules: modules.length, npcMessages: 0, audioGuides: 0 };

        modules.forEach((module, moduleIndex) => {
            const moduleId = module && module.id;
            const metadata = { dataset: spec.file, level: spec.level, moduleId: moduleId || moduleIndex + 1 };
            if (!moduleId) addOccurrence(occurrences, { ...metadata, field: 'id', rule: 'module-id-missing', severity: 'blocking', value: moduleId });
            ids.push(moduleId);

            if (!module.editorialReview || module.editorialReview.status !== 'pending-human-review') {
                addOccurrence(occurrences, { ...metadata, field: 'editorialReview.status', rule: 'editorial-review-status-invalid', severity: 'blocking', value: module.editorialReview });
            }

            for (const field of ['title', 'stage1_context', 'stage2_drops', 'stage3_practice', 'stage3_5_sentenceBuilder', 'stage4_dialog', 'stage5_quiz']) {
                if (module[field] == null || (Array.isArray(module[field]) && module[field].length === 0)) {
                    addOccurrence(occurrences, { ...metadata, field, rule: 'required-field-missing', severity: 'blocking', value: module[field] });
                }
            }

            const audioGuide = module.stage1_context && module.stage1_context.audioGuide;
            const audioContract = module.stage1_context && module.stage1_context.audio;
            const hasAudioContract = audioContract && typeof audioContract === 'object' && audioContract.displayText !== undefined;
            const auditedAudioGuide = hasAudioContract ? audioContract.displayText : audioGuide;
            metrics.course[spec.level].audioGuides++;
            if (!hasAudioContract || !hasCompleteTextContract(audioContract)) {
                addOccurrence(occurrences, { ...metadata, field: 'stage1_context.audio', rule: 'text-contract-missing', severity: 'blocking', value: audioContract });
            }
            if (hasAudioContract && /\[\s*(?:Seu\s+)?Nome\s*\]/i.test(String(audioContract.audioText || ''))) {
                addOccurrence(occurrences, { ...metadata, field: 'stage1_context.audio.audioText', rule: 'audio-placeholder-invalid', severity: 'blocking', value: audioContract.audioText });
            }
            if (!hasJapanese(auditedAudioGuide) || (hasAudioContract && !hasJapanese(audioContract.audioText))) {
                addOccurrence(occurrences, { ...metadata, field: hasAudioContract ? 'stage1_context.audio' : 'stage1_context.audioGuide', rule: 'audio-guide-no-japanese', severity: 'editorial', value: auditedAudioGuide });
            }
            if (ENGLISH_INTRUSION.test(String(auditedAudioGuide || ''))) {
                addOccurrence(occurrences, { ...metadata, field: hasAudioContract ? 'stage1_context.audio.displayText' : 'stage1_context.audioGuide', rule: 'english-intrusion', severity: 'editorial', value: auditedAudioGuide });
            }

            (module.stage4_dialog || []).forEach((dialogue, dialogueIndex) => {
                const base = `stage4_dialog[${dialogueIndex}]`;
                metrics.course[spec.level].npcMessages++;
                if (!dialogue || !dialogue.npcMessage || !Array.isArray(dialogue.options) || dialogue.options.length < 2) {
                    addOccurrence(occurrences, { ...metadata, field: base, rule: 'dialogue-invalid', severity: 'blocking', value: dialogue });
                    return;
                }
                const content = dialogue.content && typeof dialogue.content === 'object' ? dialogue.content : null;
                if (content && !hasCompleteTextContract(content)) {
                    addOccurrence(occurrences, { ...metadata, field: `${base}.content`, rule: 'text-contract-incomplete', severity: 'blocking', value: content });
                }
                const isScenarioOnly = isScenarioOnlyContent(content);
                const auditedDialogue = content ? content.displayText : dialogue.npcMessage;
                if (!isScenarioOnly && (content ? !hasValidSpokenContent(content) : !hasJapanese(auditedDialogue))) {
                    addOccurrence(occurrences, { ...metadata, field: content ? `${base}.content` : `${base}.npcMessage`, rule: 'dialogue-no-japanese', severity: 'editorial', value: auditedDialogue });
                }
                if (content && /\[\s*(?:Seu\s+)?Nome\s*\]/i.test(String(content.audioText || ''))) {
                    addOccurrence(occurrences, { ...metadata, field: `${base}.content.audioText`, rule: 'audio-placeholder-invalid', severity: 'blocking', value: content.audioText });
                }
                if (ENGLISH_INTRUSION.test(String(auditedDialogue || ''))) {
                    addOccurrence(occurrences, { ...metadata, field: content ? `${base}.content.displayText` : `${base}.npcMessage`, rule: 'english-intrusion', severity: 'editorial', value: auditedDialogue });
                }
                if (dialogue.options.filter(option => option && option.isCorrect === true).length !== 1) {
                    addOccurrence(occurrences, { ...metadata, field: `${base}.options`, rule: 'dialogue-answer-invalid', severity: 'blocking', value: dialogue.options });
                }
            });

            auditQuiz(occurrences, metadata, module.stage5_quiz, 'stage5_quiz');
        });
    });
    if (ids.some(id => !id) || new Set(ids).size !== ids.length) {
        addOccurrence(occurrences, {
            dataset: 'database/ja-JP/data_curso_*.js', level: 'A1-B2', moduleId: '*', field: 'id',
            rule: 'module-id-duplicate', severity: 'blocking', value: `${ids.length}/${new Set(ids).size}`
        });
    }
    assert.equal(ids.length, 105, 'curso japonês deve manter 105 módulos');
}

function auditKanaDataset(occurrences, metrics, spec) {
    const modules = loadValue(spec.file, spec.variable);
    assert.equal(modules.length, 8, `${spec.file}: deve manter oito módulos`);
    metrics.kana[spec.level] = { modules: modules.length, items: 0, quiz: 0 };
    modules.forEach((module, moduleIndex) => {
        const metadata = { dataset: spec.file, level: spec.level, moduleId: moduleIndex + 1 };
        if (!module.title || !module.desc) {
            addOccurrence(occurrences, { ...metadata, field: 'title/desc', rule: 'required-field-missing', severity: 'blocking', value: module });
        }
        const items = module.isReferenceTable
            ? (module.sections || []).flatMap(section => section.items || [])
            : [...(module.chars || []), ...(module.vocab || [])];
        metrics.kana[spec.level].items += items.length;
        items.forEach((item, itemIndex) => {
            const kana = item.char || item.kana || item.k;
            const romaji = item.romaji || item.r;
            if (!kana || !romaji) {
                addOccurrence(occurrences, { ...metadata, field: `items[${itemIndex}]`, rule: 'kana-item-incomplete', severity: 'blocking', value: item });
            } else if (!hasJapanese(kana) && !/\bvs\b/i.test(kana)) {
                addOccurrence(occurrences, { ...metadata, field: `items[${itemIndex}]`, rule: 'kana-script-invalid', severity: 'blocking', value: kana });
            }
        });
        if (!module.isReferenceTable) {
            metrics.kana[spec.level].quiz += (module.quiz || []).length;
            auditQuiz(occurrences, metadata, module.quiz, 'quiz', { allowEmpty: module.isReviewTable === true });
        }
    });
}

function auditKanji(occurrences, metrics) {
    const allCharacters = [];
    KANJI_SPECS.forEach(spec => {
        const modules = loadValue(spec.file, spec.variable);
        assert.equal(modules.length, spec.modules, `${spec.file}: quantidade de módulos mudou`);
        const moduleNumbers = modules.map(module => module.module);
        if (new Set(moduleNumbers).size !== modules.length || moduleNumbers.some((number, index) => number !== index + 1)) {
            addOccurrence(occurrences, {
                dataset: spec.file, level: spec.level, moduleId: '*', field: 'module',
                rule: 'module-sequence-invalid', severity: 'blocking', value: moduleNumbers.join(',')
            });
        }

        const characters = [];
        const levelMetrics = { modules: modules.length, entries: 0, unique: 0, examples: 0, readingFields: 0 };
        modules.forEach(module => {
            const metadata = { dataset: spec.file, level: spec.level, moduleId: module.module };
            if (!module.title || !module.description) {
                addOccurrence(occurrences, { ...metadata, field: 'title/description', rule: 'required-field-missing', severity: 'blocking', value: module });
            }
            const contractedLevel = ['N3', 'N2', 'N1'].includes(spec.level);
            if (contractedLevel && (!module.editorialReview || module.editorialReview.status !== 'pending-human-review')) {
                addOccurrence(occurrences, { ...metadata, field: 'editorialReview.status', rule: 'editorial-review-status-invalid', severity: 'blocking', value: module.editorialReview });
            }
            if (contractedLevel && !module.isReviewTable) {
                const grammarContent = module.grammar && module.grammar.content;
                if (!hasCompleteTextContract(grammarContent) || !hasJapanese(grammarContent.displayText) || LATIN.test(grammarContent.displayText)) {
                    addOccurrence(occurrences, { ...metadata, field: 'grammar.content', rule: 'grammar-contract-invalid', severity: 'blocking', value: grammarContent });
                }
            }
            (module.kanjis || []).forEach((kanji, kanjiIndex) => {
                const character = kanji.character || kanji.kanji;
                const base = `kanjis[${kanjiIndex}]`;
                if (!character || !kanji.meaning) {
                    addOccurrence(occurrences, { ...metadata, field: base, rule: 'kanji-item-incomplete', severity: 'blocking', value: kanji });
                }
                characters.push(character);
                allCharacters.push(character);
                for (const readingField of ['onyomi', 'kunyomi']) {
                    const reading = kanji[readingField];
                    if (!reading) {
                        addOccurrence(occurrences, { ...metadata, field: `${base}.${readingField}`, rule: 'reading-missing', severity: 'blocking', value: reading });
                    } else {
                        levelMetrics.readingFields++;
                        if (hasLatinOnly(reading) && reading !== '-') {
                            const review = kanji.readingEditorialReview && kanji.readingEditorialReview[readingField];
                            const contractedPending = review && review.status === 'pending-human-review' && review.legacyValue === reading;
                            if (contractedPending) {
                                addOccurrence(occurrences, { ...metadata, field: `${base}.${readingField}`, rule: 'reading-pending-human-review', severity: 'editorial', value: reading });
                            } else {
                                addOccurrence(occurrences, { ...metadata, field: `${base}.${readingField}`, rule: 'reading-latin-only', severity: 'editorial', value: reading });
                            }
                        }
                    }
                }
                (kanji.examples || []).forEach((example, exampleIndex) => {
                    const exampleBase = `${base}.examples[${exampleIndex}]`;
                    const content = contractedLevel && example && example.content ? example.content : null;
                    const field = content ? `${exampleBase}.content.displayText` : `${exampleBase}.sentence`;
                    const sentence = content ? content.displayText : (example && (example.sentence || example.japanese));
                    levelMetrics.examples++;
                    if (!sentence || !example.word || !example.wordMeaning || !example.sentenceMeaning) {
                        addOccurrence(occurrences, { ...metadata, field: exampleBase, rule: 'kanji-example-incomplete', severity: 'blocking', value: example });
                    }
                    if (contractedLevel && (!hasCompleteTextContract(content) || !example.editorialReview || example.editorialReview.status !== 'pending-human-review')) {
                        addOccurrence(occurrences, { ...metadata, field: exampleBase, rule: 'kanji-example-contract-invalid', severity: 'blocking', value: example });
                    }
                    if (!hasJapanese(sentence)) {
                        addOccurrence(occurrences, { ...metadata, field, rule: 'kanji-example-no-japanese', severity: 'editorial', value: sentence });
                    }
                    if (content && (!hasJapanese(content.audioText) || LATIN.test(content.displayText) || LATIN.test(content.audioText))) {
                        addOccurrence(occurrences, { ...metadata, field: `${exampleBase}.content.audioText`, rule: 'kanji-example-audio-invalid', severity: 'blocking', value: content.audioText });
                    }
                    if (ENGLISH_INTRUSION.test(String(sentence || ''))) {
                        addOccurrence(occurrences, { ...metadata, field, rule: 'english-intrusion', severity: 'editorial', value: sentence });
                    }
                    if (character && !String(sentence || '').includes(character)) {
                        addOccurrence(occurrences, { ...metadata, field, rule: 'kanji-example-missing-target', severity: 'editorial', value: sentence });
                    }
                });
            });
            auditQuiz(occurrences, metadata, module.quiz, 'quiz', { allowEmpty: module.isReviewTable === true });
        });
        levelMetrics.entries = characters.length;
        levelMetrics.unique = new Set(characters).size;
        assert.equal(levelMetrics.entries, spec.entries, `${spec.level}: total de registros mudou`);
        assert.equal(levelMetrics.unique, spec.unique, `${spec.level}: total de caracteres únicos mudou`);
        metrics.kanji[spec.level] = levelMetrics;
    });
    assert.equal(allCharacters.length, 2215, 'total de registros Kanji mudou');
    assert.equal(new Set(allCharacters).size, 1267, 'total global de Kanji únicos mudou');
}

function runRuleFixtures() {
    assert.equal(hasJapanese('日本語'), true);
    assert.equal(hasJapanese('Nihongo'), false);
    assert.equal(hasLatinOnly('kubaru'), true);
    assert.equal(hasLatinOnly('くばる (kubaru)'), false);
    assert.equal(ENGLISH_INTRUSION.test('Kuukou ni arrival shimasu.'), true);
    assert.equal(ENGLISH_INTRUSION.test('空港に早く着きます。'), false);
    assert.equal(correctOptionCount({ options: ['a', 'b'], correctIndex: 1 }), 1);
    assert.equal(correctOptionCount({ options: [{ isCorrect: true }, { isCorrect: false }] }), 1);
    assert.equal(correctOptionCount({ options: [{ isCorrect: true }, { isCorrect: true }] }), 2);
    assert.equal(hasValidSpokenContent({ displayText: '日本語です。', audioText: '日本語です。' }), true);
    assert.equal(hasValidSpokenContent({ displayText: 'Nihongo desu.', audioText: 'Nihongo desu.' }), false);
    assert.equal(isScenarioOnlyContent({ displayText: '', audioText: '', scenario: 'A pessoa aguarda.' }), true);
    assert.equal(isScenarioOnlyContent({ displayText: '', audioText: '', scenario: '' }), false);
    assert.equal(hasCompleteTextContract({ displayText: '', audioText: '', furigana: '', romaji: '', translation: '', scenario: '' }), true);
    assert.equal(hasCompleteTextContract({ displayText: '', audioText: '' }), false);
}

function renderCourseHumanReview(levels, title, phase) {
    const cell = value => String(value == null ? '' : value).replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
    const lines = [
        `# ${title}`, '',
        `Conteúdo criado na ${phase}. O status \`pending-human-review\` indica que a validação mecânica passou, mas a redação japonesa ainda requer revisão humana qualificada.`, '',
        '| Módulo | Campo | Japonês | Romaji | Tradução / cenário | Status |',
        '|---|---|---|---|---|---|'
    ];
    for (const spec of COURSE_SPECS.filter(item => levels.includes(item.level))) {
        const modules = loadValue(spec.file, spec.variable);
        modules.forEach(module => {
            const status = module.editorialReview && module.editorialReview.status;
            const audio = module.stage1_context && module.stage1_context.audio;
            lines.push(`| ${cell(module.id)} | stage1_context.audio | ${cell(audio && audio.displayText)} | ${cell(audio && audio.romaji)} | ${cell(audio && audio.translation)} | ${cell(status)} |`);
            (module.stage4_dialog || []).forEach((dialogue, index) => {
                if (!dialogue.content) return;
                const supportText = dialogue.content.translation || dialogue.content.scenario || '';
                lines.push(`| ${cell(module.id)} | stage4_dialog[${index}].content | ${cell(dialogue.content.displayText)} | ${cell(dialogue.content.romaji)} | ${cell(supportText)} | ${cell(status)} |`);
            });
        });
    }
    lines.push('', 'Nenhuma linha desta tabela deve ser marcada como aprovada automaticamente.', '');
    return lines.join('\n');
}

function renderKanjiHumanReview(level, phase, file, variable) {
    const cell = value => String(value == null ? '' : value).replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
    const lines = [
        `# Revisão humana — Kanji ${level}`, '',
        `Rascunhos criados na Fase ${phase}. A conversão mecânica e os testes estruturais não aprovam naturalidade, escolha de partículas, flexão ou adequação pedagógica.`, '',
        '| Módulo | Campo | Kanji | Palavra | Japonês | Romaji legado | Tradução | Status |',
        '|---|---|---|---|---|---|---|---|'
    ];
    const modules = loadValue(file, variable);
    modules.forEach(module => {
        if (module.grammar && module.grammar.content) {
            lines.push(`| ${cell(module.module)} | grammar.content | — | — | ${cell(module.grammar.content.displayText)} | ${cell(module.grammar.content.romaji)} | ${cell(module.grammar.content.translation)} | pending-human-review |`);
        }
        (module.kanjis || []).forEach((kanji, kanjiIndex) => {
            for (const readingField of ['onyomi', 'kunyomi']) {
                const readingReview = kanji.readingEditorialReview && kanji.readingEditorialReview[readingField];
                if (!readingReview) continue;
                lines.push(`| ${cell(module.module)} | kanjis[${kanjiIndex}].${readingField} | ${cell(kanji.character)} | leitura: ${cell(readingReview.classification)} | ${cell(kanji[readingField])} | ${cell(readingReview.legacyValue)} | proposta: ${cell(readingReview.proposal)} | ${cell(readingReview.status)} |`);
            }
            (kanji.examples || []).forEach((example, exampleIndex) => {
                const status = example.editorialReview && example.editorialReview.status;
                lines.push(`| ${cell(module.module)} | kanjis[${kanjiIndex}].examples[${exampleIndex}].content | ${cell(kanji.character)} | ${cell(example.word)} | ${cell(example.content && example.content.displayText)} | ${cell(example.content && example.content.romaji)} | ${cell(example.content && example.content.translation)} | ${cell(status)} |`);
            });
        });
    });
    lines.push('', 'Todas as linhas permanecem pendentes até revisão humana qualificada.', '');
    return lines.join('\n');
}

function renderBasicKanjiHumanReview() {
    const cell = value => String(value == null ? '' : value).replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
    const lines = [
        '# Revisão humana — Kanji N5 e N4', '',
        'A Fase 7 preserva leituras latinas incertas e seis correções contextuais N5 como pendentes de revisão humana qualificada.', '',
        '| Nível | Módulo | Campo | Kanji | Valor atual | Valor legado / observação | Status |',
        '|---|---|---|---|---|---|---|'
    ];
    for (const [level, file, variable] of [
        ['N5', 'database/ja-JP/data_kanji_n5.js', 'kanjiN5Data'],
        ['N4', 'database/ja-JP/data_kanji_n4.js', 'kanjiN4Data']
    ]) {
        const modules = loadValue(file, variable);
        modules.forEach(module => (module.kanjis || []).forEach((kanji, kanjiIndex) => {
            for (const field of ['onyomi', 'kunyomi']) {
                const review = kanji.readingEditorialReview && kanji.readingEditorialReview[field];
                if (review) lines.push(`| ${level} | ${cell(module.module)} | kanjis[${kanjiIndex}].${field} | ${cell(kanji.character)} | ${cell(kanji[field])} | ${cell(review.legacyValue)} | ${cell(review.status)} |`);
            }
            (kanji.examples || []).forEach((example, exampleIndex) => {
                if (example.editorialReview) lines.push(`| ${level} | ${cell(module.module)} | kanjis[${kanjiIndex}].examples[${exampleIndex}].sentence | ${cell(kanji.character)} | ${cell(example.sentence)} | correção contextual | ${cell(example.editorialReview.status)} |`);
            });
        }));
    }
    lines.push('', 'A exceção de homófonos N5 permanece documentada na auditoria e não integra as seis correções.', '');
    return lines.join('\n');
}

function summarize(occurrences) {
    const bySeverity = { blocking: 0, editorial: 0, allowed: 0 };
    const byRule = {};
    const byLevel = {};
    occurrences.forEach(item => {
        bySeverity[item.severity] = (bySeverity[item.severity] || 0) + 1;
        byRule[item.rule] = (byRule[item.rule] || 0) + 1;
        byLevel[item.level] = (byLevel[item.level] || 0) + 1;
    });
    return { bySeverity, byRule, byLevel };
}

function renderReview(payload) {
    const { occurrences, summary, metrics } = payload;
    const sortedRules = Object.entries(summary.byRule).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    const lines = [
        '# Auditoria editorial japonesa', '',
        'Relatório gerado por `npm run audit:japanese`. A auditoria identifica consistência mecânica e dívida editorial; não substitui revisão humana de japonês.', '',
        '## Resultado', '',
        `- Bloqueadores técnicos: ${summary.bySeverity.blocking}`,
        `- Ocorrências editoriais: ${summary.bySeverity.editorial}`,
        `- Exceções documentadas: ${summary.bySeverity.allowed}`,
        `- Total de ocorrências: ${occurrences.length}`, '',
        '## Inventário validado', '',
        `- Curso principal: ${Object.values(metrics.course).reduce((sum, item) => sum + item.modules, 0)} módulos`,
        `- Kana: ${Object.values(metrics.kana).reduce((sum, item) => sum + item.modules, 0)} módulos`,
        `- Kanji: ${Object.values(metrics.kanji).reduce((sum, item) => sum + item.modules, 0)} módulos`,
        `- Registros Kanji: ${Object.values(metrics.kanji).reduce((sum, item) => sum + item.entries, 0)}`,
        `- Caracteres Kanji únicos globais: 1.267`, '',
        '## Ocorrências por nível', '',
        '| Nível | Ocorrências |', '|---|---:|',
        ...Object.entries(summary.byLevel).sort().map(([level, count]) => `| ${level} | ${count} |`), '',
        '## Ocorrências por regra', '',
        '| Regra | Quantidade |', '|---|---:|',
        ...sortedRules.map(([rule, count]) => `| ${rule} | ${count} |`), '',
        '## Amostras prioritárias', '',
        '| Severidade | Nível | Módulo | Regra | Campo | Amostra |', '|---|---|---|---|---|---|'
    ];
    occurrences.filter(item => item.severity !== 'allowed').slice(0, 30).forEach(item => {
        const cell = value => String(value).replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
        lines.push(`| ${cell(item.severity)} | ${cell(item.level)} | ${cell(item.moduleId)} | ${cell(item.rule)} | ${cell(item.field)} | ${cell(item.sample)} |`);
    });
    lines.push('', '## Limite da validação', '', 'Ocorrências editoriais são backlog mensurável e não bloqueiam o baseline legado. Somente falhas estruturais novas fazem a auditoria falhar. Conteúdo permanece sujeito à revisão humana qualificada.', '');
    return lines.join('\n');
}

function audit() {
    runRuleFixtures();
    const occurrences = [];
    const metrics = { course: {}, kana: {}, kanji: {} };
    auditCourses(occurrences, metrics);
    auditKanaDataset(occurrences, metrics, { level: 'Hiragana', file: 'database/ja-JP/data_hiragana.js', variable: 'HIRA_COURSE_DATA' });
    auditKanaDataset(occurrences, metrics, { level: 'Katakana', file: 'database/ja-JP/data_katakana.js', variable: 'KATA_COURSE_DATA' });
    auditKanji(occurrences, metrics);

    const dictionary = read('database/ja-JP/data_dicionario_index.js');
    const minigame = read('database/ja-JP/data_minigame_kanji_index.js');
    assert.match(dictionary, /"primary":"ソング","secondary":"songu"/, 'índice do dicionário não contém Katakana corrigido');
    assert.match(minigame, /const JAPANESE_MINIGAME_KANJI_INDEX/, 'índice do minigame Kanji ausente');

    return { schemaVersion: 1, generatedBy: 'tests/japanese-editorial-audit.cjs', metrics, summary: summarize(occurrences), occurrences };
}

const payload = audit();
const jsonReport = `${JSON.stringify(payload, null, 2)}\n`;
const reviewReport = renderReview(payload);
const humanReviewReport = renderCourseHumanReview(['A1', 'A2'], 'Revisão humana — Japonês A1 e A2', 'Fase 3B');
const advancedHumanReviewReport = renderCourseHumanReview(['B1', 'B2'], 'Revisão humana — Japonês B1 e B2', 'Fase 3C');
const n3HumanReviewReport = renderKanjiHumanReview('N3', 4, 'database/ja-JP/data_kanji_n3.js', 'kanjiN3Data');
const n2HumanReviewReport = renderKanjiHumanReview('N2', 5, 'database/ja-JP/data_kanji_n2.js', 'kanjiN2Data');
const n1HumanReviewReport = renderKanjiHumanReview('N1', 6, 'database/ja-JP/data_kanji_n1.js', 'kanjiN1Data');
const basicHumanReviewReport = renderBasicKanjiHumanReview();
const blockers = payload.summary.bySeverity.blocking;

if (WRITE_MODE) {
    fs.writeFileSync(JSON_OUTPUT, jsonReport, 'utf8');
    fs.writeFileSync(REVIEW_OUTPUT, reviewReport, 'utf8');
    fs.writeFileSync(HUMAN_REVIEW_OUTPUT, humanReviewReport, 'utf8');
    fs.writeFileSync(ADVANCED_HUMAN_REVIEW_OUTPUT, advancedHumanReviewReport, 'utf8');
    fs.writeFileSync(N3_HUMAN_REVIEW_OUTPUT, n3HumanReviewReport, 'utf8');
    fs.writeFileSync(N2_HUMAN_REVIEW_OUTPUT, n2HumanReviewReport, 'utf8');
    fs.writeFileSync(N1_HUMAN_REVIEW_OUTPUT, n1HumanReviewReport, 'utf8');
    fs.writeFileSync(BASIC_HUMAN_REVIEW_OUTPUT, basicHumanReviewReport, 'utf8');
    console.log(`Relatórios japoneses atualizados: ${path.relative(ROOT, JSON_OUTPUT)} e ${path.relative(ROOT, REVIEW_OUTPUT)} (${blockers} bloqueadores, ${payload.summary.bySeverity.editorial} editoriais)`);
} else {
    assert.ok(fs.existsSync(JSON_OUTPUT), 'relatório JSON japonês ausente; execute npm run audit:japanese');
    assert.ok(fs.existsSync(REVIEW_OUTPUT), 'relatório Markdown japonês ausente; execute npm run audit:japanese');
    assert.ok(fs.existsSync(HUMAN_REVIEW_OUTPUT), 'tabela de revisão humana A1/A2 ausente; execute npm run audit:japanese');
    assert.ok(fs.existsSync(ADVANCED_HUMAN_REVIEW_OUTPUT), 'tabela de revisão humana B1/B2 ausente; execute npm run audit:japanese');
    assert.ok(fs.existsSync(N3_HUMAN_REVIEW_OUTPUT), 'tabela de revisão humana Kanji N3 ausente; execute npm run audit:japanese');
    assert.ok(fs.existsSync(N2_HUMAN_REVIEW_OUTPUT), 'tabela de revisão humana Kanji N2 ausente; execute npm run audit:japanese');
    assert.ok(fs.existsSync(N1_HUMAN_REVIEW_OUTPUT), 'tabela de revisão humana Kanji N1 ausente; execute npm run audit:japanese');
    assert.ok(fs.existsSync(BASIC_HUMAN_REVIEW_OUTPUT), 'tabela de revisão humana Kanji N5/N4 ausente; execute npm run audit:japanese');
    assert.equal(fs.readFileSync(JSON_OUTPUT, 'utf8'), jsonReport, 'relatório JSON japonês desatualizado; execute npm run audit:japanese');
    assert.equal(fs.readFileSync(REVIEW_OUTPUT, 'utf8'), reviewReport, 'relatório Markdown japonês desatualizado; execute npm run audit:japanese');
    assert.equal(fs.readFileSync(HUMAN_REVIEW_OUTPUT, 'utf8'), humanReviewReport, 'tabela de revisão humana A1/A2 desatualizada; execute npm run audit:japanese');
    assert.equal(fs.readFileSync(ADVANCED_HUMAN_REVIEW_OUTPUT, 'utf8'), advancedHumanReviewReport, 'tabela de revisão humana B1/B2 desatualizada; execute npm run audit:japanese');
    assert.equal(fs.readFileSync(N3_HUMAN_REVIEW_OUTPUT, 'utf8'), n3HumanReviewReport, 'tabela de revisão humana Kanji N3 desatualizada; execute npm run audit:japanese');
    assert.equal(fs.readFileSync(N2_HUMAN_REVIEW_OUTPUT, 'utf8'), n2HumanReviewReport, 'tabela de revisão humana Kanji N2 desatualizada; execute npm run audit:japanese');
    assert.equal(fs.readFileSync(N1_HUMAN_REVIEW_OUTPUT, 'utf8'), n1HumanReviewReport, 'tabela de revisão humana Kanji N1 desatualizada; execute npm run audit:japanese');
    assert.equal(fs.readFileSync(BASIC_HUMAN_REVIEW_OUTPUT, 'utf8'), basicHumanReviewReport, 'tabela de revisão humana Kanji N5/N4 desatualizada; execute npm run audit:japanese');
    assert.equal(blockers, 0, `auditoria japonesa encontrou ${blockers} bloqueador(es) técnico(s)`);
    console.log(`✓ auditoria japonesa: 105 módulos principais, 16 módulos Kana e 92 módulos Kanji; ${payload.summary.bySeverity.editorial} ocorrência(s) editorial(is) inventariada(s)`);
}
