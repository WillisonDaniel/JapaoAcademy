// ======================================
// MÓDULO COURSE - CAMADA DE NORMALIZAÇÃO
// ======================================

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
    const context = rawModule.context || rawModule.stage1_context || {};

    // 3. Drops (stage1_drops / stage2_drops -> drops)
    const rawDrops = rawModule.drops || rawModule.stage2_drops || rawModule.stage1_drops || [];
    const drops = (Array.isArray(rawDrops) ? rawDrops : []).map(item => {
        if (!item || typeof item !== 'object') return item;
        return {
            ...item,
            type: item.type || 'vocab',
            kanji: item.kanji || item.word || item.english || '',
            romaji: item.romaji || item.ipa || '',
            translation: item.translation || item.meaning || item.portuguese || ''
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

    // 5. Dialog (stage4_dialog / stage3_dialogues -> dialog)
    const rawDialog = rawModule.dialog || rawModule.stage4_dialog || rawModule.stage3_dialogues || rawModule.dialogues || [];
    const dialog = (Array.isArray(rawDialog) ? rawDialog : []).map(item => {
        if (!item || typeof item !== 'object') return item;
        const speaker = item.speaker || item.npcName || 'Pessoa';
        const text = item.text !== undefined ? item.text : (item.npcMessage !== undefined ? item.npcMessage : '');
        const translation = item.translation !== undefined ? item.translation : (item.scenario !== undefined ? item.scenario : '');
        const options = normalizeOptions(item.options, item.correctIndex);
        return {
            ...item,
            speaker,
            npcName: speaker,
            text,
            npcMessage: text,
            translation,
            scenario: translation,
            options
        };
    });

    // 6. SentenceBuilder (stage4_sentence_builder / stage3_5_sentenceBuilder -> sentenceBuilder)
    const rawSB = rawModule.sentenceBuilder || rawModule.stage3_5_sentenceBuilder || rawModule.stage4_sentence_builder || [];
    const sentenceBuilder = (Array.isArray(rawSB) ? rawSB : []).map(item => {
        if (!item || typeof item !== 'object') return item;
        const sentenceEn = item.sentenceEn || item.sentenceJp || item.target || '';
        const translation = item.translation || item.target || '';
        const chunks = Array.isArray(item.chunks) ? item.chunks : [];
        return {
            ...item,
            sentenceEn,
            translation,
            chunks
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

    return {
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
}

// Garantir compatibilidade global em navegadores e módulos Node.js
if (typeof window !== 'undefined') {
    window.normalizeModule = normalizeModule;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { normalizeModule };
}
