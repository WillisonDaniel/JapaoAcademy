// ======================================
// MÓDULO COURSE - CAMADA DE NORMALIZAÇÃO
// ======================================

function firstDefined(...values) {
    return values.find(value => value !== undefined && value !== null);
}

/**
 * Mantém separados os componentes de uma entrada textual do curso.
 * O segundo argumento existe somente para compatibilidade com schemas legados;
 * nenhum apoio de leitura ou tradução é fabricado quando a fonte não o fornece.
 */
function normalizeTextContent(rawContent, legacyFallbacks = {}) {
    const source = typeof rawContent === 'string'
        ? { displayText: rawContent, audioText: rawContent }
        : ((rawContent && typeof rawContent === 'object') ? rawContent : {});
    const displayText = String(firstDefined(source.displayText, legacyFallbacks.displayText, '') || '');
    const audioText = String(firstDefined(source.audioText, legacyFallbacks.audioText, displayText) || '');

    return {
        displayText,
        audioText,
        furigana: String(firstDefined(source.furigana, legacyFallbacks.furigana, '') || ''),
        romaji: String(firstDefined(source.romaji, legacyFallbacks.romaji, '') || ''),
        translation: String(firstDefined(source.translation, legacyFallbacks.translation, '') || ''),
        scenario: String(firstDefined(source.scenario, legacyFallbacks.scenario, '') || '')
    };
}

/**
 * Normaliza um módulo do curso para a estrutura padrão desacoplada de schemas do banco.
 *
 * @param {Object} rawModule Módulo original do banco de dados
 * @returns {Object} Módulo normalizado no padrão:
 * { id, title, context, drops, practice, dialog, sentenceBuilder, quiz, metadata }
 */
function normalizeModule(rawModule) {
    if (!rawModule || typeof rawModule !== 'object') {
        return {
            id: '',
            title: '',
            context: {},
            drops: [],
            practice: [],
            dialog: [],
            sentenceBuilder: [],
            quiz: [],
            metadata: {}
        };
    }

    // Se já estiver normalizado (flag interna), apenas retorna o próprio módulo
    if (rawModule._normalized) {
        return rawModule;
    }

    // 1. Top-Level Id & Title
    const id = rawModule.id || '';
    const title = rawModule.title || '';

    // 2. Context (stage1_context -> context)
    const rawContext = rawModule.context || rawModule.stage1_context || {};
    const contextBase = (rawContext && typeof rawContext === 'object') ? rawContext : {};
    const explicitContextAudio = (contextBase.audio && typeof contextBase.audio === 'object')
        ? { ...contextBase, ...contextBase.audio }
        : (typeof contextBase.audio === 'string' ? contextBase.audio : contextBase);
    const audioGuide = typeof contextBase.audioGuide === 'string' ? contextBase.audioGuide : '';
    const context = {
        ...contextBase,
        audio: {
            ...normalizeTextContent(explicitContextAudio, {
                displayText: audioGuide,
                audioText: audioGuide,
                furigana: contextBase.furigana,
                romaji: contextBase.romaji,
                translation: contextBase.translation,
                scenario: contextBase.scenario
            }),
            _contractExplicit: Boolean(contextBase.audio || contextBase.displayText || contextBase.audioText)
        }
    };

    // 3. Drops (stage1_drops / stage2_drops -> drops)
    const rawDrops = rawModule.drops || rawModule.stage2_drops || rawModule.stage1_drops || [];
    const drops = (Array.isArray(rawDrops) ? rawDrops : []).map(item => {
        if (!item || typeof item !== 'object') return item;
        const kanji = item.kanji || item.word || item.english || item.spanish || item.Spanish || item.texto || '';
        const romaji = item.romaji || item.ipa || item.pronunciation || '';
        const translation = item.translation || item.meaning || item.portuguese || item.Portuguese || '';
        const explicitContent = (item.content && typeof item.content === 'object') ? item.content : {};
        return {
            ...item,
            type: item.type || 'vocab',
            kanji,
            romaji,
            translation,
            content: {
                ...normalizeTextContent({ ...item, ...explicitContent }, {
                    displayText: kanji,
                    audioText: kanji || romaji,
                    furigana: item.furigana || item.kana || item.reading,
                    romaji,
                    translation,
                    scenario: item.scenario
                }),
                _contractExplicit: Boolean(item.content || item.displayText !== undefined || item.audioText !== undefined)
            }
        };
    });

    // Helper interno para normalizar opções de múltipla escolha
    function normalizeOptions(options, parentCorrectIndex) {
        if (!Array.isArray(options)) return [];
        return options.map((opt, oIdx) => {
            if (typeof opt === 'object' && opt !== null) {
                const label = opt.label !== undefined ? opt.label : (opt.text !== undefined ? opt.text : '');
                const text = opt.text !== undefined ? opt.text : label;
                const isCorrect = opt.correct !== undefined ? Boolean(opt.correct) :
                                  (opt.isCorrect !== undefined ? Boolean(opt.isCorrect) : (parentCorrectIndex === oIdx));
                return {
                    ...opt,
                    label,
                    text,
                    correct: isCorrect,
                    isCorrect
                };
            } else {
                const strOpt = String(opt);
                const isCorrect = (parentCorrectIndex === oIdx);
                return {
                    label: strOpt,
                    text: strOpt,
                    correct: isCorrect,
                    isCorrect
                };
            }
        });
    }

    // 4. Practice (stage2_practice / stage3_practice -> practice)
    const rawPractice = rawModule.practice || rawModule.stage3_practice || rawModule.stage2_practice || [];
    const practice = (Array.isArray(rawPractice) ? rawPractice : []).map(item => {
        if (!item || typeof item !== 'object') return item;
        const question = item.question !== undefined ? item.question : (item.q !== undefined ? item.q : (item.prompt !== undefined ? item.prompt : ''));
        const options = normalizeOptions(item.options, item.correctIndex);
        return {
            ...item,
            question,
            options
        };
    });

    // 5. Dialog (stage4_dialog / stage3_dialogues / stage4_dialogue -> dialog)
    const rawDialog = rawModule.dialog || rawModule.stage4_dialog || rawModule.stage4_dialogue || rawModule.stage3_dialogues || rawModule.dialogues || [];
    const dialog = (Array.isArray(rawDialog) ? rawDialog : []).map(item => {
        if (!item || typeof item !== 'object') return item;
        const speaker = item.speaker || item.npcName || 'Pessoa';
        const text = item.text !== undefined ? item.text : (item.npcMessage !== undefined ? item.npcMessage : '');
        const explicitTranslation = item.translation !== undefined ? item.translation : '';
        const scenario = item.scenario !== undefined ? item.scenario : '';
        const translation = explicitTranslation || scenario;
        const options = normalizeOptions(item.options, item.correctIndex);
        const explicitContent = (item.content && typeof item.content === 'object') ? item.content : {};
        return {
            ...item,
            speaker,
            npcName: speaker,
            text,
            npcMessage: text,
            translation,
            scenario: translation,
            content: {
                ...normalizeTextContent({ ...item, ...explicitContent }, {
                    displayText: text,
                    audioText: text,
                    furigana: item.furigana || item.kana || item.reading,
                    romaji: item.romaji,
                    translation: explicitTranslation,
                    scenario
                }),
                _contractExplicit: Boolean(item.content || item.displayText !== undefined || item.audioText !== undefined)
            },
            options
        };
    });

    // 6. SentenceBuilder (stage4_sentence_builder / stage3_5_sentenceBuilder / stage3_sentences -> sentenceBuilder)
    const rawSB = rawModule.sentenceBuilder || rawModule.stage3_5_sentenceBuilder || rawModule.stage3_sentences || rawModule.stage4_sentence_builder || [];
    const sentenceBuilder = (Array.isArray(rawSB) ? rawSB : []).map(item => {
        if (!item || typeof item !== 'object') return item;
        const sentenceEn = item.sentenceEn || item.sentenceJp || item.sentenceEs || item.target || '';
        const translation = item.translation || item.target || item.portuguese || item.Portuguese || '';
        let chunks = (Array.isArray(item.chunks) && item.chunks.length > 0) ? item.chunks : ((Array.isArray(item.words) && item.words.length > 0) ? item.words : ((Array.isArray(item.tokens) && item.tokens.length > 0) ? item.tokens : []));
        if ((!Array.isArray(chunks) || chunks.length === 0) && (item.sentence || item.sentenceRu || item.sentenceEn || item.sentenceEs || item.target)) {
            const rawText = item.sentence || item.sentenceRu || item.sentenceEn || item.sentenceEs || item.target || '';
            chunks = rawText.split(/\s+/).filter(Boolean);
        }
        return {
            ...item,
            sentenceEn,
            sentenceEs: item.sentenceEs || sentenceEn,
            translation,
            chunks,
            words: chunks,
            tokens: chunks
        };
    });

    // 7. Quiz (stage5_quiz -> quiz)
    const rawQuiz = rawModule.quiz || rawModule.stage5_quiz || [];
    const quiz = (Array.isArray(rawQuiz) ? rawQuiz : []).map(item => {
        if (!item || typeof item !== 'object') return item;
        const question = item.question !== undefined ? item.question : (item.q !== undefined ? item.q : (item.prompt !== undefined ? item.prompt : ''));
        const options = normalizeOptions(item.options, item.correctIndex);
        const correctOpt = options.find(o => o.isCorrect);
        const a = item.a || item.answer || (correctOpt ? correctOpt.label : '');
        return {
            ...item,
            question,
            options,
            a,
            answer: a
        };
    });

    // 8. Metadata (Campos complementares e de referência)
    const metadata = {
        level: rawModule.level || null,
        section: rawModule.section || null,
        sectionTitle: rawModule.sectionTitle || null,
        xpReward: rawModule.xpReward || null,
        isReferenceTable: rawModule.isReferenceTable || false,
        desc: rawModule.desc || null,
        sections: rawModule.sections || null,
        chars: rawModule.chars || null,
        vocab: rawModule.vocab || null,
        _sourceVar: rawModule._sourceVar || null
    };

    const canDo = firstDefined(rawModule.canDo, contextBase.canDo);
    const normalized = {
        _normalized: true,
        id,
        title,
        context,
        drops,
        practice,
        dialog,
        sentenceBuilder,
        quiz,
        metadata
    };
    if (canDo !== undefined && canDo !== null && String(canDo).trim()) {
        normalized.canDo = String(canDo);
    }
    return normalized;
}

// Garantir compatibilidade global em navegadores e módulos Node.js
if (typeof window !== 'undefined') {
    window.normalizeModule = normalizeModule;
    window.normalizeTextContent = normalizeTextContent;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { normalizeModule, normalizeTextContent };
}
