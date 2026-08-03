// ======================================
// MÓDULO CORE - DICIONÁRIO & GLOSSÁRIO UNIVERSAL
// ======================================

let glossarioUniversalData = [];
let glossarioFiltradoData = [];
let dicionarioPaginaAtual = 1;
const ITENS_POR_PAGINA_DICT = 30;
let categoriaAtivaDict = 'tudo';
let subNivelKanjiDict = 'tudo';
let subNivelVocabDict = 'tudo';
let filtroDebounceTimerDict = null;

function carregarTodosOsDatasets(callback) {
    compilarGlossarioUniversal();
    if (typeof callback === 'function') callback();
}

function compilarGlossarioUniversal() {
    console.log("[BOOT] initializeDictionary (compilarGlossarioUniversal)");
    glossarioUniversalData = [];

    const isEnglishMode = (typeof document !== 'undefined' && document.body && (
        document.body.getAttribute('data-lang') === 'english' ||
        document.body.getAttribute('data-mode') === 'pronuncia' ||
        document.body.getAttribute('data-mode') === 'phrasal' ||
        (typeof window !== 'undefined' && window.location && window.location.pathname && window.location.pathname.toLowerCase().includes('ingles'))
    ));

    if (isEnglishMode) {
        // Mode English: Alphabet, Vocabulary, Phrasal Verbs, Phonetics, Grammar
        const alphabetData = typeof ENGLISH_ALPHABET_DATA !== 'undefined' ? ENGLISH_ALPHABET_DATA : (typeof window !== 'undefined' ? window.ENGLISH_ALPHABET_DATA : null);
        if (Array.isArray(alphabetData)) {
            alphabetData.forEach(item => {
                glossarioUniversalData.push({
                    cat: 'alphabet',
                    catLabel: 'ALFABETO',
                    primary: item.letter,
                    secondary: item.ipa || item.name || '',
                    desc: `Nome fonético: "${item.name}" — Exemplo: ${item.example || ''}`,
                    audio: item.letter,
                    level: 'A1',
                    module: 'English Alphabet A-Z'
                });
            });
        }


        ['A1', 'A2', 'B1', 'B2'].forEach(lvl => {
            let courseArr = null;
            if (lvl === 'A1') courseArr = typeof CURSO_ENGLISH_A1_DADOS !== 'undefined' ? CURSO_ENGLISH_A1_DADOS : (typeof window !== 'undefined' ? window.CURSO_ENGLISH_A1_DADOS : null);
            else if (lvl === 'A2') courseArr = typeof CURSO_ENGLISH_A2_DADOS !== 'undefined' ? CURSO_ENGLISH_A2_DADOS : (typeof window !== 'undefined' ? window.CURSO_ENGLISH_A2_DADOS : null);
            else if (lvl === 'B1') courseArr = typeof CURSO_ENGLISH_B1_DADOS !== 'undefined' ? CURSO_ENGLISH_B1_DADOS : (typeof window !== 'undefined' ? window.CURSO_ENGLISH_B1_DADOS : null);
            else if (lvl === 'B2') courseArr = typeof CURSO_ENGLISH_B2_DADOS !== 'undefined' ? CURSO_ENGLISH_B2_DADOS : (typeof window !== 'undefined' ? window.CURSO_ENGLISH_B2_DADOS : null);

            if (Array.isArray(courseArr)) {
                courseArr.forEach(rawMod => {
                    const module = typeof normalizeModule === 'function' ? normalizeModule(rawMod) : rawMod;
                    const drops = module.drops || module.stage2_drops || module.stage1_drops || [];
                    drops.forEach(drop => {
                        if (drop.type === 'grammar_pill' || drop.rule || drop.formula) {
                            glossarioUniversalData.push({
                                cat: 'grammar',
                                catLabel: 'GRAMÁTICA',
                                primary: drop.title || drop.word || '',
                                secondary: drop.formula || '',
                                desc: drop.rule || drop.translation || '',
                                context: drop.example || '',
                                audio: drop.title || drop.example || '',
                                level: lvl,
                                module: module.title
                            });
                        } else if (drop.kanji || drop.word || drop.translation) {
                            glossarioUniversalData.push({
                                cat: 'vocab',
                                catLabel: 'VOCABULÁRIO',
                                primary: drop.word || drop.kanji || '',
                                secondary: drop.ipa || drop.romaji || '',
                                desc: drop.translation || drop.meaning || '',
                                context: drop.timeContext || drop.example || '',
                                audio: drop.word || drop.kanji || drop.romaji || '',
                                level: lvl,
                                module: module.title
                            });
                        }
                    });
                });
            }

        });

        const pvData = typeof PHRASAL_VERBS_DATA !== 'undefined' ? PHRASAL_VERBS_DATA : (typeof PHRASAL_VERBS_DATASETS !== 'undefined' ? PHRASAL_VERBS_DATASETS : (typeof window !== 'undefined' ? (window.PHRASAL_VERBS_DATA || window.PHRASAL_VERBS_DATASETS) : null));
        if (Array.isArray(pvData)) {
            pvData.forEach(mod => {
                (mod.items || []).forEach(pv => {
                    glossarioUniversalData.push({
                        cat: 'phrasal',
                        catLabel: 'PHRASAL VERB',
                        primary: pv.verb,
                        secondary: pv.meaning,
                        desc: pv.explanation || (pv.examples && pv.examples[0] ? pv.examples[0].sentence : ''),
                        context: pv.examples && pv.examples[0] ? `Ex: "${pv.examples[0].sentence}" (${pv.examples[0].translation})` : '',
                        audio: pv.verb,
                        level: mod.level || 'A1',
                        module: mod.title
                    });
                });
            });
        }

        const pronData = typeof PRONUNCIATION_DATA !== 'undefined' ? PRONUNCIATION_DATA : (typeof PRONUNCIA_DATASET !== 'undefined' ? PRONUNCIA_DATASET : (typeof window !== 'undefined' ? (window.PRONUNCIATION_DATA || window.PRONUNCIA_DATASET) : null));
        if (Array.isArray(pronData)) {
            pronData.forEach(section => {
                (section.topics || []).forEach(topic => {
                    glossarioUniversalData.push({
                        cat: 'phonetics',
                        catLabel: 'FONÉTICA',
                        primary: topic.ipaSymbol || topic.title,
                        secondary: topic.title,
                        desc: topic.description || '',
                        context: (topic.rules && topic.rules[0]) ? topic.rules[0] : '',
                        audio: (topic.minimalPairs && topic.minimalPairs[0]) ? topic.minimalPairs[0].word1 : '',
                        level: section.level || 'A1',
                        module: section.sectionTitle
                    });
                });
            });
        }


    } else {
        // Mode Japanese: HIRA/KATA Course Vocab, Course Vocab (A1-B2) & Grammar, then Kanji (N5-N1), Hiragana, Katakana
        const hiraCourse = typeof HIRA_COURSE_DATA !== 'undefined' ? HIRA_COURSE_DATA : (typeof window !== 'undefined' ? window.HIRA_COURSE_DATA : null);
        if (Array.isArray(hiraCourse)) {
            hiraCourse.forEach(mod => {
                if (!mod.isReferenceTable && Array.isArray(mod.vocab)) {
                    mod.vocab.forEach(v => {
                        glossarioUniversalData.push({
                            cat: 'vocab',
                            catLabel: 'VOCABULÁRIO',
                            primary: v.kana,
                            secondary: v.romaji,
                            desc: v.meaning,
                            audio: v.kana,
                            level: 'Hiragana',
                            module: mod.title
                        });
                    });
                }
            });
        }

        const kataCourse = typeof KATA_COURSE_DATA !== 'undefined' ? KATA_COURSE_DATA : (typeof window !== 'undefined' ? window.KATA_COURSE_DATA : null);
        if (Array.isArray(kataCourse)) {
            kataCourse.forEach(mod => {
                if (!mod.isReferenceTable && Array.isArray(mod.vocab)) {
                    mod.vocab.forEach(v => {
                        glossarioUniversalData.push({
                            cat: 'vocab',
                            catLabel: 'VOCABULÁRIO',
                            primary: v.kana,
                            secondary: v.romaji,
                            desc: v.meaning,
                            audio: v.kana,
                            level: 'Katakana',
                            module: mod.title
                        });
                    });
                }
            });
        }

        ['A1', 'A2', 'B1', 'B2'].forEach(lvl => {
            let courseArr = null;
            if (lvl === 'A1') courseArr = typeof CURSO_A1_DADOS !== 'undefined' ? CURSO_A1_DADOS : (typeof window !== 'undefined' ? (window.CURSO_A1_DADOS || window.CURSO_JAPONES_A1_DADOS) : null);
            else if (lvl === 'A2') courseArr = typeof CURSO_A2_DADOS !== 'undefined' ? CURSO_A2_DADOS : (typeof window !== 'undefined' ? (window.CURSO_A2_DADOS || window.CURSO_JAPONES_A2_DADOS) : null);
            else if (lvl === 'B1') courseArr = typeof CURSO_B1_DADOS !== 'undefined' ? CURSO_B1_DADOS : (typeof window !== 'undefined' ? (window.CURSO_B1_DADOS || window.CURSO_JAPONES_B1_DADOS) : null);
            else if (lvl === 'B2') courseArr = typeof CURSO_B2_DADOS !== 'undefined' ? CURSO_B2_DADOS : (typeof window !== 'undefined' ? (window.CURSO_B2_DADOS || window.CURSO_JAPONES_B2_DADOS) : null);

            if (Array.isArray(courseArr)) {
                courseArr.forEach(rawMod => {
                    const module = typeof normalizeModule === 'function' ? normalizeModule(rawMod) : rawMod;
                    const drops = module.drops || module.stage2_drops || module.stage1_drops || [];
                    drops.forEach(drop => {
                        if (drop.type === 'grammar_pill' || drop.rule || drop.formula) {
                            glossarioUniversalData.push({
                                cat: 'grammar',
                                catLabel: 'GRAMÁTICA',
                                primary: drop.title || drop.word || drop.kanji || '',
                                secondary: drop.formula || '',
                                desc: drop.rule || drop.translation || '',
                                context: drop.example || '',
                                audio: drop.title || drop.example || '',
                                level: lvl,
                                module: module.title
                            });
                        } else if (drop.kanji || drop.word || drop.translation) {
                            glossarioUniversalData.push({
                                cat: 'vocab',
                                catLabel: 'VOCABULÁRIO',
                                primary: drop.kanji || drop.word || drop.romaji || '',
                                secondary: drop.romaji || drop.ipa || '',
                                desc: drop.translation || '',
                                context: drop.timeContext || drop.example || '',
                                audio: drop.kanji || drop.word || drop.romaji || '',
                                level: lvl,
                                module: module.title
                            });
                        }
                    });
                    if (rawMod.grammar_points && Array.isArray(rawMod.grammar_points)) {
                        rawMod.grammar_points.forEach(gp => {
                            glossarioUniversalData.push({
                                cat: 'grammar',
                                catLabel: 'GRAMÁTICA',
                                primary: gp.title || gp.pattern || '',
                                secondary: gp.explanation || '',
                                desc: gp.example || '',
                                audio: gp.title || '',
                                level: lvl,
                                module: module.title
                            });
                        });
                    }
                });
            }
        });

        const kanjiMap = [
            { lvl: 'N5', data: typeof kanjiN5Data !== 'undefined' ? kanjiN5Data : (typeof window !== 'undefined' ? window.kanjiN5Data : null) },
            { lvl: 'N4', data: typeof kanjiN4Data !== 'undefined' ? kanjiN4Data : (typeof window !== 'undefined' ? window.kanjiN4Data : null) },
            { lvl: 'N3', data: typeof kanjiN3Data !== 'undefined' ? kanjiN3Data : (typeof window !== 'undefined' ? window.kanjiN3Data : null) },
            { lvl: 'N2', data: typeof kanjiN2Data !== 'undefined' ? kanjiN2Data : (typeof window !== 'undefined' ? window.kanjiN2Data : null) },
            { lvl: 'N1', data: typeof kanjiN1Data !== 'undefined' ? kanjiN1Data : (typeof window !== 'undefined' ? window.kanjiN1Data : null) }
        ];

        kanjiMap.forEach(km => {
            if (Array.isArray(km.data)) {
                km.data.forEach(mod => {
                    (mod.kanjis || []).forEach(k => {
                        glossarioUniversalData.push({
                            cat: 'kanji',
                            catLabel: 'KANJI',
                            primary: k.character,
                            secondary: `Onyomi: ${k.onyomi || '-'} | Kunyomi: ${k.kunyomi || '-'}`,
                            desc: `Significado: ${k.meaning}`,
                            context: k.mnemonic ? `Mnemônica: ${k.mnemonic}` : '',
                            audio: k.character,
                            level: km.lvl,
                            module: mod.title
                        });
                    });

                    if (mod.grammar && typeof mod.grammar === 'object' && mod.grammar.title) {
                        glossarioUniversalData.push({
                            cat: 'grammar',
                            catLabel: 'GRAMÁTICA',
                            primary: mod.grammar.title,
                            secondary: mod.grammar.example || '',
                            desc: mod.grammar.translation || mod.grammar.explanation || '',
                            context: mod.grammar.explanation || '',
                            audio: mod.grammar.example || mod.grammar.title,
                            level: km.lvl,
                            module: mod.title || `Módulo ${mod.module}`
                        });
                    }
                });
            }
        });

        const rawH = typeof RAW_H !== 'undefined' ? RAW_H : (typeof window !== 'undefined' ? window.RAW_H : null);
        if (rawH) {
            Object.keys(rawH).forEach(modKey => {
                if (modKey.startsWith('words_')) {
                    rawH[modKey].forEach(i => {
                        glossarioUniversalData.push({
                            cat: 'vocab',
                            catLabel: 'VOCABULÁRIO',
                            primary: i.k,
                            secondary: i.r,
                            desc: i.m,
                            context: i.a ? `Kanji: ${i.a.join(', ')}` : '',
                            audio: i.k,
                            level: 'Hiragana',
                            module: `Vocabulário Hiragana (${modKey.replace('words_', '')})`
                        });
                    });
                } else if (Array.isArray(rawH[modKey])) {
                    rawH[modKey].forEach(i => {
                        glossarioUniversalData.push({
                            cat: 'hiragana',
                            catLabel: 'HIRAGANA',
                            primary: i.k,
                            secondary: i.r,
                            desc: `Caractere Hiragana — Som: ${i.r}`,
                            audio: i.k,
                            level: 'A1',
                            module: `Tabela Hiragana (${modKey.toUpperCase()})`
                        });
                    });
                }
            });
        }

        const rawK = typeof RAW_K !== 'undefined' ? RAW_K : (typeof window !== 'undefined' ? window.RAW_K : null);
        if (rawK) {
            Object.keys(rawK).forEach(modKey => {
                if (modKey.startsWith('words_')) {
                    rawK[modKey].forEach(i => {
                        glossarioUniversalData.push({
                            cat: 'vocab',
                            catLabel: 'VOCABULÁRIO',
                            primary: i.k,
                            secondary: i.r,
                            desc: i.m,
                            audio: i.k,
                            level: 'Katakana',
                            module: `Vocabulário Katakana (${modKey.replace('words_', '')})`
                        });
                    });
                } else if (Array.isArray(rawK[modKey])) {
                    rawK[modKey].forEach(i => {
                        glossarioUniversalData.push({
                            cat: 'katakana',
                            catLabel: 'KATAKANA',
                            primary: i.k,
                            secondary: i.r,
                            desc: `Caractere Katakana — Som: ${i.r}`,
                            audio: i.k,
                            level: 'A1',
                            module: `Tabela Katakana (${modKey.toUpperCase()})`
                        });
                    });
                }
            });
        }

    }

    if (typeof AppState !== 'undefined' && typeof AppState.setDictionaryCache === 'function') {
        AppState.setDictionaryCache(glossarioUniversalData);
    } else if (typeof window !== 'undefined') {
        window.glossarioUniversalData = glossarioUniversalData;
    }
    renderizarResultadosDicionario('');
}

function buildDictCardHtml(item, cardIndex = 0) {
    let catBg = 'rgba(13, 148, 136, 0.1)';
    let catBorder = '#0d9488';
    let catText = '#0d9488';
    let leftBorderColor = '#0d9488';

    if (item.cat === 'hiragana') {
        catBg = '#fff1f2';
        catBorder = '#fecdd3';
        catText = '#e11d48';
        leftBorderColor = '#e11d48';
    } else if (item.cat === 'katakana') {
        catBg = '#f0fdf4';
        catBorder = '#99f6e4';
        catText = '#0d9488';
        leftBorderColor = '#0d9488';
    } else if (item.cat === 'kanji') {
        catBg = '#fffbeb';
        catBorder = '#fde68a';
        catText = '#d97706';
        leftBorderColor = '#f59e0b';
    } else if (item.cat === 'grammar') {
        catBg = '#fff1f2';
        catBorder = '#fecdd3';
        catText = '#dc2626';
        leftBorderColor = '#dc2626';
    }

    const baseLabel = item.catLabel || (item.cat ? item.cat.toUpperCase() : 'GERAL');
    let badgeLabel = baseLabel;
    if (item.level && item.cat !== 'alphabet' && item.cat !== 'hiragana' && item.cat !== 'katakana') {
        badgeLabel = `${baseLabel} • ${item.level.toUpperCase()}`;
    }
    const isKana = (item.cat === 'hiragana' || item.cat === 'katakana');
    const isKanji = (item.cat === 'kanji');
    const isGrammar = (item.cat === 'grammar');
    const isVocab = (item.cat === 'vocab');
    const hasCanvas = isKana || isKanji;

    const audioWord = (item.audio || item.primary || '').replace(/'/g, "\\'");
    const canvasId = `dict-canvas-${cardIndex}`;

    return `
        <div class="dict-card-item" style="background:var(--card-bg, #ffffff); border:1px solid var(--border-color, #e5e7eb); border-left:4px solid ${leftBorderColor}; border-radius:16px; padding:18px 20px; box-shadow:0 4px 6px -1px rgba(0,0,0,0.05); display:flex; flex-direction:column; justify-content:space-between; gap:12px; text-align:left; position:relative;">
            <div>
                <!-- Line 1: Badge Tag Pill -->
                <div style="margin-bottom:10px;">
                    <span style="background:${catBg}; color:${catText}; border:1px solid ${catBorder}; padding:4px 12px; border-radius:16px; font-size:0.75rem; font-weight:700; text-transform:uppercase; display:inline-block;">
                        ${item.cat === 'hiragana' ? '🌸' : item.cat === 'katakana' ? '⚡' : item.cat === 'kanji' ? '🗺️' : item.cat === 'grammar' ? '💡' : '📚'} ${badgeLabel}
                    </span>
                </div>

                <!-- Line 2: Favoritar Button + Module Title -->
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:14px; flex-wrap:wrap;">
                    <button onclick="toggleFavoritoDict('${audioWord}')" style="background:#fffbeb; border:1px solid #fde68a; color:#d97706; padding:4px 12px; border-radius:10px; font-weight:700; font-size:0.8rem; cursor:pointer; display:flex; align-items:center; gap:4px;">
                        ⭐ Favoritar
                    </button>
                    ${item.module ? `<span style="font-size:0.82rem; color:var(--text-muted, #64748b); font-weight:600; flex:1; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.module}</span>` : ''}
                </div>

                <!-- Line 3: Main Character / Word + Audio Speaker + Romaji + Treinar Button -->
                ${isGrammar ? `
                    <div style="font-size:1.3rem; font-weight:bold; color:#dc2626; line-height:1.3; margin-bottom:8px; font-family:'Fredoka', sans-serif;">
                        ${item.primary}
                    </div>
                ` : isKanji ? `
                    <div style="display:flex; gap:12px; align-items:flex-start; margin-bottom:10px;">
                        <div style="font-size:2.8rem; font-weight:bold; color:#f59e0b; line-height:1; font-family:'Noto Sans JP', sans-serif;">
                            ${item.primary}
                        </div>
                        <div style="flex:1;">
                            <div style="font-size:1.05rem; font-weight:bold; color:var(--text-main, #0f172a); margin-bottom:4px; display:flex; align-items:center; gap:6px;">
                                ${item.desc || item.primary}
                                ${item.audio ? `<button onclick="speakKana('${audioWord}')" style="background:none; border:none; color:#64748b; font-size:1.1rem; cursor:pointer;" title="Ouvir áudio">🔊</button>` : ''}
                            </div>
                            ${item.secondary ? `<div style="font-size:0.85rem; font-weight:600; color:var(--text-muted, #64748b); line-height:1.4;">${item.secondary}</div>` : ''}
                        </div>
                        <button onclick="treinarItemDict('${audioWord}')" style="background:#fff1f2; border:1px solid #fecdd3; color:#e11d48; padding:5px 14px; border-radius:20px; font-weight:700; font-size:0.8rem; cursor:pointer; display:flex; align-items:center; gap:4px; margin-top:2px;">
                            🎴 Treinar
                        </button>
                    </div>
                ` : `
                    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">
                        <div>
                            <div style="display:flex; align-items:baseline; gap:8px;">
                                <div style="font-size:${isKana ? '2.8rem' : '1.6rem'}; font-weight:bold; color:var(--text-main, #0f172a); line-height:1.1; font-family:'Fredoka', 'Noto Sans JP', sans-serif;">
                                    ${item.primary}
                                </div>
                                ${item.audio ? `<button onclick="speakKana('${audioWord}')" style="background:none; border:none; color:#64748b; font-size:1.1rem; cursor:pointer; padding:0 2px;" title="Ouvir áudio">🔊</button>` : ''}
                            </div>
                            ${item.secondary ? `<div style="font-size:0.95rem; font-weight:700; color:#0d9488; margin-top:4px;">${item.secondary}</div>` : ''}
                            ${isVocab && item.desc ? `<div style="font-size:0.92rem; font-weight:700; color:var(--text-main, #334155); margin-top:2px;">${item.desc}</div>` : ''}
                        </div>
                        <button onclick="treinarItemDict('${audioWord}')" style="background:#fff1f2; border:1px solid #fecdd3; color:#e11d48; padding:5px 14px; border-radius:20px; font-weight:700; font-size:0.8rem; cursor:pointer; display:flex; align-items:center; gap:4px; margin-top:4px;">
                            🎴 Treinar
                        </button>
                    </div>
                `}

                ${isKana && item.desc ? `<div style="font-size:0.9rem; font-weight:600; color:var(--text-muted, #64748b); margin-bottom:8px;">${item.desc}</div>` : ''}

                <!-- Grammar Body / Formula Box -->
                ${isGrammar ? `
                    ${item.secondary ? `<div style="font-size:0.92rem; font-weight:600; color:var(--text-main, #334155); margin-bottom:10px; line-height:1.5;">${item.secondary}</div>` : ''}
                    ${item.formula ? `
                        <div style="margin-top:8px; padding:10px 14px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; font-size:0.9rem; color:#dc2626; font-weight:700;">
                            ${item.formula}
                        </div>
                    ` : ''}
                    ${item.desc ? `<div style="margin-top:8px; font-size:0.88rem; font-weight:600; color:var(--text-main, #334155); line-height:1.4;">${item.desc}</div>` : ''}
                ` : ''}

                <!-- Dica / Context Box -->
                ${item.hint ? `
                    <div style="margin-top:8px; padding:10px 14px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; font-size:0.85rem; color:#334155; line-height:1.4;">
                        💡 ${item.hint}
                    </div>
                ` : (item.context ? `
                    <div style="margin-top:8px; padding:10px 14px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; font-size:0.85rem; color:#334155; line-height:1.4;">
                        💡 ${item.context}
                    </div>
                ` : '')}

                <!-- Traço Box (Kana) -->
                ${item.stroke ? `
                    <div style="margin-top:8px; padding:10px 14px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; font-size:0.85rem; color:#334155; line-height:1.4;">
                        ✏️ ${item.stroke}
                    </div>
                ` : ''}

                <!-- Interactive Drawing Canvas + 6 Control Buttons Toolbar -->
                ${hasCanvas ? `
                    <div style="border-top:1px dashed #e2e8f0; margin-top:14px; padding-top:14px; text-align:center;">
                        <!-- Interactive Writing Canvas -->
                        <div style="width:190px; height:190px; margin:0 auto 12px auto; position:relative;">
                            <canvas id="${canvasId}" class="kanji-canvas" width="190" height="190" data-char="${item.primary}" style="width:190px; height:190px; background:#ffffff; border:1px solid #cbd5e1; border-radius:16px; cursor:crosshair; box-shadow:inset 0 1px 2px rgba(0,0,0,0.04); touch-action:none; display:block;"></canvas>
                        </div>

                        <!-- 6 Interactive Toolbar Buttons (2 rows x 3 columns) -->
                        <div style="display:flex; flex-direction:column; gap:6px; max-width:280px; margin:0 auto;">
                            <!-- Row 1: Pincel, Traços, Desfazer -->
                            <div style="display:flex; gap:6px;">
                                <button onclick="ativarPincelCanvas('${canvasId}')" style="background:#ffffff; border:1px solid #cbd5e1; color:#334155; padding:6px 8px; border-radius:10px; font-weight:700; font-size:0.78rem; cursor:pointer; flex:1; display:flex; align-items:center; justify-content:center; gap:3px;">
                                    ✏️ Pincel
                                </button>
                                <button onclick="animarKakijun('${canvasId}')" style="background:#f3e8ff; border:1px solid #c084fc; color:#7e22ce; padding:6px 8px; border-radius:10px; font-weight:700; font-size:0.78rem; cursor:pointer; flex:1; display:flex; align-items:center; justify-content:center; gap:3px;">
                                    🎬 Traços
                                </button>
                                <button onclick="desfazerUltimoTracoCanvas('${canvasId}')" style="background:#e0f2fe; border:1px solid #38bdf8; color:#0369a1; padding:6px 8px; border-radius:10px; font-weight:700; font-size:0.78rem; cursor:pointer; flex:1; display:flex; align-items:center; justify-content:center; gap:3px;">
                                    ↩️ Desfazer
                                </button>
                            </div>
                            <!-- Row 2: Limpar, Guia ON, Verificar -->
                            <div style="display:flex; gap:6px;">
                                <button onclick="limparCanvas('${canvasId}')" style="background:#ffffff; border:1px solid #cbd5e1; color:#334155; padding:6px 8px; border-radius:10px; font-weight:700; font-size:0.78rem; cursor:pointer; flex:1; display:flex; align-items:center; justify-content:center; gap:3px;">
                                    🧹 Limpar
                                </button>
                                <button id="btn-guia-${canvasId}" onclick="alternarGuiaCanvas('${canvasId}')" style="background:#ffffff; border:1px solid #cbd5e1; color:#334155; padding:6px 8px; border-radius:10px; font-weight:700; font-size:0.78rem; cursor:pointer; flex:1; display:flex; align-items:center; justify-content:center; gap:3px;">
                                    👁️ Guia ON
                                </button>
                                <button onclick="verificarTracoCanvas('${canvasId}')" style="background:#dcfce7; border:1px solid #4ade80; color:#15803d; padding:6px 8px; border-radius:10px; font-weight:700; font-size:0.78rem; cursor:pointer; flex:1; display:flex; align-items:center; justify-content:center; gap:3px;">
                                    ✅ Verificar
                                </button>
                            </div>
                        </div>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

function matchesLevel(itemLevel, filterLevel) {
    if (!filterLevel || filterLevel === 'tudo') return true;
    if (!itemLevel) return false;
    if (itemLevel === filterLevel) return true;
    const jlptToCefr = { 'N5': 'A1', 'N4': 'A2', 'N3': 'B1', 'N2': 'B2', 'N1': 'B2' };
    if (jlptToCefr[itemLevel] === filterLevel) return true;
    return false;
}

function renderizarResultadosDicionario(queryStr = '') {
    const container = document.getElementById('dict-results-container');
    const counter = document.getElementById('dict-results-counter');
    const alphabetSection = document.getElementById('dict-alphabet-section');

    const isEnglishMode = (typeof document !== 'undefined' && document.body && (
        document.body.getAttribute('data-lang') === 'english' ||
        document.body.getAttribute('data-mode') === 'pronuncia' ||
        document.body.getAttribute('data-mode') === 'phrasal' ||
        (typeof window !== 'undefined' && window.location && window.location.pathname && window.location.pathname.toLowerCase().includes('ingles'))
    ));

    const showAlphabetGrid = isEnglishMode && (categoriaAtivaDict === 'tudo' || categoriaAtivaDict === 'alphabet');

    if (alphabetSection) {
        alphabetSection.style.display = showAlphabetGrid ? 'block' : 'none';
        if (showAlphabetGrid) renderizarTabelaAlfabetoIngles();
    }

    let query = (queryStr || '').trim().toLowerCase();
    const universalData = (typeof AppState !== 'undefined' && AppState.dictionary && Array.isArray(AppState.dictionary.universalGlossary)) ? AppState.dictionary.universalGlossary : glossarioUniversalData;

    const resFiltrado = universalData.filter(item => {
        if (item.cat === 'alphabet' && (categoriaAtivaDict === 'tudo' || categoriaAtivaDict === 'alphabet')) return false;
        if (categoriaAtivaDict !== 'tudo' && item.cat !== categoriaAtivaDict) return false;

        if (item.cat === 'kanji' && subNivelKanjiDict !== 'tudo' && item.level !== subNivelKanjiDict) return false;

        if (item.cat !== 'kanji' && subNivelVocabDict !== 'tudo' && !matchesLevel(item.level, subNivelVocabDict)) return false;
        if (item.cat === 'kanji' && categoriaAtivaDict === 'tudo' && subNivelVocabDict !== 'tudo' && !matchesLevel(item.level, subNivelVocabDict)) return false;

        if (!query) return true;

        const p = (item.primary || '').toLowerCase();
        const s = (item.secondary || '').toLowerCase();
        const d = (item.desc || '').toLowerCase();
        const c = (item.context || '').toLowerCase();
        const m = (item.module || '').toLowerCase();
        return p.includes(query) || s.includes(query) || d.includes(query) || c.includes(query) || m.includes(query);
    });

    glossarioFiltradoData = resFiltrado;
    if (typeof AppState !== 'undefined' && typeof AppState.setFilteredDictionary === 'function') {
        AppState.setFilteredDictionary(resFiltrado);
    }

    dicionarioPaginaAtual = 1;

    if (counter) {
        counter.innerHTML = `Mostrando <strong>${glossarioFiltradoData.length}</strong> item(ns) encontrado(s)`;
    }

    if (!container) return;

    if (glossarioFiltradoData.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align:center; padding: 3rem 1rem; color: var(--text-muted);">
                🔍 Nenhum resultado encontrado para a busca.
            </div>
        `;
        return;
    }

    const visiveis = glossarioFiltradoData.slice(0, ITENS_POR_PAGINA_DICT);
    let htmlCards = visiveis.map((item, idx) => buildDictCardHtml(item, idx)).join('');

    if (glossarioFiltradoData.length > ITENS_POR_PAGINA_DICT) {
        htmlCards += `
            <div style="grid-column: 1/-1; text-align: center; margin-top: 15px;">
                <button onclick="carregarMaisItensDicionario()" style="padding: 10px 24px; background: var(--current-primary, #3b82f6); color: white; border: none; border-radius: 10px; font-weight: bold; cursor: pointer; box-shadow: var(--shadow);">
                    🔄 Carregar Mais Itens
                </button>
            </div>
        `;
    }

    container.innerHTML = htmlCards;

    if (typeof inicializarTodosOsCanvases === 'function') {
        inicializarTodosOsCanvases();
    }
}

function carregarMaisItensDicionario() {
    const container = document.getElementById('dict-results-container');
    if (!container) return;
    dicionarioPaginaAtual++;
    const inicio = (dicionarioPaginaAtual - 1) * ITENS_POR_PAGINA_DICT;
    const fim = dicionarioPaginaAtual * ITENS_POR_PAGINA_DICT;
    const proximos = glossarioFiltradoData.slice(inicio, fim);

    const btnCarregar = container.querySelector('button[onclick="carregarMaisItensDicionario()"]');
    if (btnCarregar && btnCarregar.parentElement) {
        btnCarregar.parentElement.remove();
    }

    const novosCards = proximos.map((item, idx) => buildDictCardHtml(item, inicio + idx)).join('');

    container.insertAdjacentHTML('beforeend', novosCards);

    if (glossarioFiltradoData.length > fim) {
        container.insertAdjacentHTML('beforeend', `
            <div style="grid-column: 1/-1; text-align: center; margin-top: 15px;">
                <button onclick="carregarMaisItensDicionario()" style="padding: 10px 24px; background: var(--current-primary, #3b82f6); color: white; border: none; border-radius: 10px; font-weight: bold; cursor: pointer; box-shadow: var(--shadow);">
                    🔄 Carregar Mais Itens
                </button>
            </div>
        `);
    }

    if (typeof inicializarTodosOsCanvases === 'function') {
        inicializarTodosOsCanvases();
    }
}

function selecionarCategoriaDicionario(cat) {
    categoriaAtivaDict = cat;
    document.querySelectorAll('.dict-filter-pill').forEach(btn => {
        if (btn.getAttribute('data-cat') === cat) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    const subKanji = document.getElementById('dict-subfilters-kanji');
    const subVocab = document.getElementById('dict-subfilters-vocab') || document.getElementById('dict-subfilters-level');
    if (subKanji) subKanji.style.display = (cat === 'kanji') ? 'flex' : 'none';
    if (subVocab) subVocab.style.display = (cat === 'vocab' || cat === 'grammar' || cat === 'phrasal' || cat === 'phonetics' || cat === 'tudo') ? 'flex' : 'none';

    renderizarResultadosDicionario(document.getElementById('dict-search-input')?.value || '');
}

function selecionarSubNivelKanji(sub) {
    subNivelKanjiDict = sub;
    document.querySelectorAll('.dict-subfilter-pill').forEach(btn => {
        if (btn.getAttribute('data-sub') === sub) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    renderizarResultadosDicionario(document.getElementById('dict-search-input')?.value || '');
}

function selecionarSubNivelVocab(sub) {
    subNivelVocabDict = sub;
    document.querySelectorAll('.dict-subfilter-pill-vocab').forEach(btn => {
        if (btn.getAttribute('data-sub-vocab') === sub) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    renderizarResultadosDicionario(document.getElementById('dict-search-input')?.value || '');
}

function filtrarGlossarioDebounced(query) {
    clearTimeout(filtroDebounceTimerDict);
    filtroDebounceTimerDict = setTimeout(() => {
        renderizarResultadosDicionario(query);
    }, 200);
}

function abrirModalDicionario() {
    if (typeof redirecionarParaDicionario === 'function') {
        redirecionarParaDicionario();
        return;
    }
}

function fecharModalDicionario() {
    const modalDict = document.getElementById('modal-dicionario');
    if (modalDict) modalDict.style.display = 'none';
}

function renderizarTabelaAlfabetoIngles() {
    const grid = document.getElementById('dict-alphabet-grid');
    if (!grid || typeof ENGLISH_ALPHABET_DATA === 'undefined') return;
    grid.innerHTML = ENGLISH_ALPHABET_DATA.map(item => `
        <button class="sound-card" onclick="speakKana('${item.example || item.letter}')" style="background:var(--card-bg, #ffffff); border:1.5px solid var(--border-color, #e2e8f0); border-radius:16px; padding:14px 8px; text-align:center; cursor:pointer; transition:all 0.2s ease; box-shadow:0 2px 4px rgba(0,0,0,0.04); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:4px;">
            <div style="font-size:1.6rem; font-weight:700; color:var(--text-main, #0f172a); font-family:'Fredoka', sans-serif;">${item.letter}</div>
            <div style="font-size:0.92rem; color:#2563eb; font-weight:700; font-family:'Fredoka', sans-serif;">[ ${item.name} ]</div>
            <div style="font-size:0.83rem; color:#0284c7; font-weight:600;">${item.ipa}</div>
            <div style="font-size:0.8rem; color:var(--text-muted, #475569); font-weight:600; margin-top:2px; display:flex; align-items:center; gap:3px;">
                📌 ${item.example}
            </div>
        </button>
    `).join('');
}

function toggleFavoritoDict(word) {
    if (!word) return;
    let favs = [];
    try {
        favs = JSON.parse(localStorage.getItem('ja_favoritos_deck') || '[]');
    } catch(e) { favs = []; }

    const index = favs.indexOf(word);
    if (index > -1) {
        favs.splice(index, 1);
        if (typeof mostrarToast === 'function') mostrarToast(`⭐ Item <strong>${word}</strong> removido dos favoritos!`);
    } else {
        favs.push(word);
        if (typeof mostrarToast === 'function') mostrarToast(`⭐ Item <strong>${word}</strong> adicionado aos favoritos!`);
    }
    localStorage.setItem('ja_favoritos_deck', JSON.stringify(favs));
}

function treinarItemDict(word) {
    if (typeof iniciarSessaoSRS === 'function') {
        iniciarSessaoSRS();
    } else if (typeof mostrarToast === 'function') {
        mostrarToast(`🎴 Treinando <strong>${word}</strong> no SRS!`);
    }
}

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.glossarioUniversalData = glossarioUniversalData;
    window.carregarTodosOsDatasets = carregarTodosOsDatasets;
    window.compilarGlossarioUniversal = compilarGlossarioUniversal;
    window.renderizarResultadosDicionario = renderizarResultadosDicionario;
    window.carregarMaisItensDicionario = carregarMaisItensDicionario;
    window.selecionarCategoriaDicionario = selecionarCategoriaDicionario;
    window.selecionarSubNivelKanji = selecionarSubNivelKanji;
    window.selecionarSubNivelVocab = selecionarSubNivelVocab;
    window.filtrarGlossarioDebounced = filtrarGlossarioDebounced;
    window.abrirModalDicionario = abrirModalDicionario;
    window.fecharModalDicionario = fecharModalDicionario;
    window.renderizarTabelaAlfabetoIngles = renderizarTabelaAlfabetoIngles;
    window.toggleFavoritoDict = toggleFavoritoDict;
    window.treinarItemDict = treinarItemDict;
}
