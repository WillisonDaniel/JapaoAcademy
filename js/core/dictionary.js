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
    const resultsContainer = typeof document !== 'undefined' ? document.getElementById('dict-results-container') : null;
    if (resultsContainer) resultsContainer.setAttribute('aria-busy', 'true');
    glossarioUniversalData = [];

    const isSpanishMode = (typeof document !== 'undefined' && document.body && (
        document.body.getAttribute('data-lang') === 'spanish' ||
        document.body.getAttribute('data-mode') === 'espanhol' ||
        document.body.getAttribute('data-mode') === 'spanish' ||
        (typeof window !== 'undefined' && window.location && window.location.pathname && window.location.pathname.toLowerCase().includes('espanhol'))
    ));

    const isEnglishMode = (typeof document !== 'undefined' && document.body && (
        document.body.getAttribute('data-lang') === 'english' ||
        document.body.getAttribute('data-mode') === 'pronuncia' ||
        document.body.getAttribute('data-mode') === 'phrasal' ||
        (typeof window !== 'undefined' && window.location && window.location.pathname && window.location.pathname.toLowerCase().includes('ingles'))
    ));

    if (isSpanishMode) {
        // Mode Spanish: Alphabet (27 Letras), Falsos Cognatos, Heterotónicos, Regionalismos, Vocabularies A1-B2 & Grammars A1-B2
        const dictData = typeof DICIONARIO_ESPANHOL_DADOS !== 'undefined' ? DICIONARIO_ESPANHOL_DADOS : (typeof DADOS_ESPANHOL_DICIONARIO !== 'undefined' ? DADOS_ESPANHOL_DICIONARIO : (typeof window !== 'undefined' ? (window.DICIONARIO_ESPANHOL_DADOS || window.DADOS_ESPANHOL_DICIONARIO) : null));

        if (dictData) {
            if (Array.isArray(dictData.alfabeto)) {
                dictData.alfabeto.forEach(item => {
                    glossarioUniversalData.push({
                        cat: 'alphabet',
                        catLabel: 'ALFABETO',
                        primary: item.letter,
                        secondary: item.name ? `[ ${item.name} ] ${item.phonetic || ''}` : '',
                        desc: `Exemplo: ${item.example || ''} (${item.translation || ''})`,
                        audio: item.example || item.letter,
                        level: 'A1',
                        module: 'Abecedario del Español'
                    });
                });
            }

            const faTrilhaData = (typeof DADOS_ESPANHOL_FALSOS_AMIGOS_TRILHA !== 'undefined')
                ? DADOS_ESPANHOL_FALSOS_AMIGOS_TRILHA
                : (typeof window !== 'undefined' ? window.DADOS_ESPANHOL_FALSOS_AMIGOS_TRILHA : null);

            if (Array.isArray(faTrilhaData) && faTrilhaData.length > 0) {
                faTrilhaData.forEach(mod => {
                    const drops = mod.stage2_drops || [];
                    drops.forEach(item => {
                        const word = item.word || item.title || '';
                        if (!word) return;
                        glossarioUniversalData.push({
                            cat: 'falsos',
                            catLabel: 'FALSO COGNATO',
                            primary: word,
                            secondary: item.realMeaning || item.rule || '',
                            warning: item.warning || item.formula || '',
                            desc: item.translation || item.example || '',
                            context: item.example ? `Ex: "${item.example}"` : '',
                            audio: item.audio || word,
                            level: mod.level || 'A1',
                            module: mod.title || 'Falsos Cognatos Traiçoeiros'
                        });
                    });
                });
            } else {
                const falsosArr = dictData.falsosCognatos || dictData.falsosAmigos || [];
                if (Array.isArray(falsosArr)) {
                    falsosArr.forEach(item => {
                        glossarioUniversalData.push({
                            cat: 'falsos',
                            catLabel: 'FALSO COGNATO',
                            primary: item.word || item.term || '',
                            secondary: item.realMeaning || item.real_meaning || '',
                            warning: item.warning || (item.falseMeaning ? `NÃO é ${item.falseMeaning}` : ''),
                            desc: item.translation || '',
                            context: item.example ? `Ex: "${item.example}"` : '',
                            audio: item.audio || item.word || item.term || '',
                            level: 'A1-B2',
                            module: 'Falsos Cognatos Traiçoeiros'
                        });
                    });
                }
            }

            const fonRecursosData = (typeof FONETICA_RECURSOS_ESPANHOL_DADOS !== 'undefined')
                ? FONETICA_RECURSOS_ESPANHOL_DADOS
                : (typeof window !== 'undefined' ? window.FONETICA_RECURSOS_ESPANHOL_DADOS : null);

            // 1. Fonética & Pronúncia
            if (fonRecursosData && Array.isArray(fonRecursosData.fonetica)) {
                fonRecursosData.fonetica.forEach(item => {
                    glossarioUniversalData.push({
                        cat: 'fonetica',
                        catLabel: 'FONÉTICA & PRONÚNCIA',
                        primary: item.title,
                        secondary: item.summary,
                        warning: item.rule,
                        desc: item.examples ? item.examples.map(e => `${e.es} (${e.pt})`).join(', ') : '',
                        audio: item.examples && item.examples.length > 0 ? item.examples[0].audio : item.title,
                        examples: item.examples || [],
                        level: item.level || 'A1',
                        module: 'Guia de Fonética Hispânica'
                    });
                });
            }

            // 2. Heterotónicos
            const heterotonicosArr = (fonRecursosData && Array.isArray(fonRecursosData.heterotonicos) && fonRecursosData.heterotonicos.length > 0)
                ? fonRecursosData.heterotonicos
                : (dictData.heterotonicos || []);

            if (Array.isArray(heterotonicosArr)) {
                heterotonicosArr.forEach(item => {
                    glossarioUniversalData.push({
                        cat: 'heterotonicos',
                        catLabel: 'HETEROTÓNICO',
                        primary: item.word,
                        secondary: `PT: ${item.ptStress} ➔ ES: ${item.esStress}`,
                        desc: item.translation || '',
                        context: item.example ? `Ex: "${item.example}"` : '',
                        audio: item.audio || item.word,
                        level: 'A1-B2',
                        module: 'Sílabas Tónicas Diferentes'
                    });
                });
            }

            // 3. Regionalismos
            const regionalismosArr = (fonRecursosData && Array.isArray(fonRecursosData.regionalismos) && fonRecursosData.regionalismos.length > 0)
                ? fonRecursosData.regionalismos
                : (dictData.regionalismos || []);

            if (Array.isArray(regionalismosArr)) {
                regionalismosArr.forEach(item => {
                    const concepto = item.concepto || item.concept || '';
                    const esp = item.espanha || item.es || item.spain || '';
                    const mex = item.mexico || item.mx || '';
                    const arg = item.argentina || item.ar || '';
                    const col = item.colombia || item.co || '';
                    const chi = item.chile || item.cl || '';
                    const ot = item.outros || item.otros || '';
                    glossarioUniversalData.push({
                        cat: 'regionalismos',
                        catLabel: 'REGIONALISMO',
                        primary: concepto,
                        secondary: `🇪🇸 ${esp} | 🇲🇽 ${mex} | 🇦🇷 ${arg} | 🇨🇴 ${col} ${chi ? '| 🇨🇱 ' + chi : ''}`,
                        desc: ot ? `Outros: ${ot}` : '',
                        audio: esp || concepto,
                        level: 'A1-B2',
                        module: 'Variação Linguística Hispânica'
                    });
                });
            }

            // 4. Acentuação Gráfica & Tilde Diacrítica
            if (fonRecursosData && Array.isArray(fonRecursosData.acentuacao)) {
                fonRecursosData.acentuacao.forEach(item => {
                    glossarioUniversalData.push({
                        cat: 'acentuacao',
                        catLabel: 'ACENTUAÇÃO & TILDE',
                        primary: item.title,
                        secondary: item.summary,
                        warning: item.rule,
                        desc: item.examples ? item.examples.map(e => `${e.es} (${e.pt})`).join(' | ') : '',
                        audio: item.examples && item.examples.length > 0 ? item.examples[0].audio : item.title,
                        examples: item.examples || [],
                        level: 'A1-B2',
                        module: 'Guia Mestre de Acentuação'
                    });
                });
            }

            // 5. Sotaques & Dialetos Regionais
            if (fonRecursosData && Array.isArray(fonRecursosData.sotaques)) {
                fonRecursosData.sotaques.forEach(item => {
                    glossarioUniversalData.push({
                        cat: 'sotaques',
                        catLabel: 'SOTAQUES REGIONAIS',
                        primary: `${item.region ? item.region + ' — ' : ''}${item.title}`,
                        secondary: item.summary,
                        warning: item.rule,
                        desc: item.examples ? item.examples.map(e => `${e.es} (${e.pt})`).join(' | ') : '',
                        audio: item.examples && item.examples.length > 0 ? item.examples[0].audio : item.title,
                        examples: item.examples || [],
                        level: 'A1-B2',
                        module: 'Variedades Dialetais do Espanhol'
                    });
                });
            }

            // 6. Prosódia & Fala Nativa
            if (fonRecursosData && Array.isArray(fonRecursosData.prosodia)) {
                fonRecursosData.prosodia.forEach(item => {
                    glossarioUniversalData.push({
                        cat: 'prosodia',
                        catLabel: 'PROSÓDIA & FALA NATIVA',
                        primary: item.title,
                        secondary: item.summary,
                        warning: item.rule,
                        desc: item.examples ? item.examples.map(e => `${e.es} (${e.pt})`).join(' | ') : '',
                        audio: item.examples && item.examples.length > 0 ? item.examples[0].audio : item.title,
                        examples: item.examples || [],
                        level: 'A1-B2',
                        module: 'Prosódia e Fluência Nativa'
                    });
                });
            }

            if (Array.isArray(dictData.vocabulario)) {
                dictData.vocabulario.forEach(v => {
                    glossarioUniversalData.push({
                        cat: 'vocab',
                        catLabel: 'VOCABULÁRIO',
                        primary: v.word,
                        secondary: v.meaning,
                        desc: v.example || '',
                        audio: v.audio || v.word,
                        level: v.level || 'A1',
                        module: 'Glossário de Espanhol'
                    });
                });
            }

            if (Array.isArray(dictData.gramatica)) {
                dictData.gramatica.forEach(g => {
                    glossarioUniversalData.push({
                        cat: 'grammar',
                        catLabel: 'GRAMÁTICA',
                        primary: g.title,
                        secondary: g.formula || '',
                        desc: g.rule || '',
                        context: g.example ? `Ex: "${g.example}"` : '',
                        audio: g.title,
                        level: g.level || 'A1',
                        module: 'Biblioteca Gramatical'
                    });
                });
            }
        }

        ['A1', 'A2', 'B1', 'B2'].forEach(lvl => {
            let courseArr = null;
            if (lvl === 'A1') courseArr = typeof CURSO_ESPANHOL_A1_DADOS !== 'undefined' ? CURSO_ESPANHOL_A1_DADOS : (typeof window !== 'undefined' ? window.CURSO_ESPANHOL_A1_DADOS : null);
            else if (lvl === 'A2') courseArr = typeof CURSO_ESPANHOL_A2_DADOS !== 'undefined' ? CURSO_ESPANHOL_A2_DADOS : (typeof window !== 'undefined' ? window.CURSO_ESPANHOL_A2_DADOS : null);
            else if (lvl === 'B1') courseArr = typeof CURSO_ESPANHOL_B1_DADOS !== 'undefined' ? CURSO_ESPANHOL_B1_DADOS : (typeof window !== 'undefined' ? window.CURSO_ESPANHOL_B1_DADOS : null);
            else if (lvl === 'B2') courseArr = typeof CURSO_ESPANHOL_B2_DADOS !== 'undefined' ? CURSO_ESPANHOL_B2_DADOS : (typeof window !== 'undefined' ? window.CURSO_ESPANHOL_B2_DADOS : null);

            if (Array.isArray(courseArr)) {
                courseArr.forEach(rawMod => {
                    const module = typeof normalizeModule === 'function' ? normalizeModule(rawMod) : rawMod;
                    const drops = module.drops || module.stage2_drops || module.stage1_drops || [];
                    drops.forEach(drop => {
                        if (drop.type === 'grammar_pill' || drop.rule || drop.formula) {
                            glossarioUniversalData.push({
                                cat: 'grammar',
                                catLabel: 'GRAMÁTICA',
                                primary: drop.title || drop.word || drop.Spanish || '',
                                secondary: drop.formula || '',
                                desc: drop.rule || drop.translation || drop.Portuguese || '',
                                context: drop.example || '',
                                audio: drop.title || drop.example || '',
                                level: lvl,
                                module: module.title
                            });
                        } else if (drop.Spanish || drop.word || drop.translation) {
                            glossarioUniversalData.push({
                                cat: 'vocab',
                                catLabel: 'VOCABULÁRIO',
                                primary: drop.Spanish || drop.word || '',
                                secondary: drop.Portuguese || drop.translation || drop.meaning || '',
                                desc: drop.timeContext || drop.example || '',
                                context: drop.example ? `Ex: "${drop.example}"` : '',
                                audio: drop.Audio || drop.Spanish || drop.word || '',
                                level: lvl,
                                module: module.title
                            });
                        }
                    });
                });
            }
        });
    } else if (isEnglishMode) {
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
    } else if (item.cat === 'falsos') {
        catBg = '#fef2f2';
        catBorder = '#fecdd3';
        catText = '#dc2626';
        leftBorderColor = '#ef4444';
    } else if (item.cat === 'heterotonicos') {
        catBg = '#faf5ff';
        catBorder = '#e9d5ff';
        catText = '#7e22ce';
        leftBorderColor = '#a855f7';
    } else if (item.cat === 'regionalismos') {
        catBg = '#f0fdf4';
        catBorder = '#99f6e4';
        catText = '#0d9488';
        leftBorderColor = '#0284c7';
    } else if (item.cat === 'acentuacao') {
        catBg = '#fff1f2';
        catBorder = '#fecdd3';
        catText = '#e11d48';
        leftBorderColor = '#e11d48';
    } else if (item.cat === 'sotaques') {
        catBg = '#f0f9ff';
        catBorder = '#bae6fd';
        catText = '#0284c7';
        leftBorderColor = '#0284c7';
    } else if (item.cat === 'prosodia') {
        catBg = '#f5f3ff';
        catBorder = '#ddd6fe';
        catText = '#8b5cf6';
        leftBorderColor = '#8b5cf6';
    }

    const baseLabel = item.catLabel || (item.cat ? item.cat.toUpperCase() : 'GERAL');
    let badgeLabel = baseLabel;
    if (item.level && item.cat !== 'alphabet' && item.cat !== 'hiragana' && item.cat !== 'katakana') {
        badgeLabel = `${baseLabel} • ${item.level.toUpperCase()}`;
    }
    const isFonetica = (item.cat === 'fonetica' || item.cat === 'acentuacao' || item.cat === 'sotaques' || item.cat === 'prosodia');
    const isFalso = (item.cat === 'falsos');
    const isHeterotonico = (item.cat === 'heterotonicos');
    const isRegionalismo = (item.cat === 'regionalismos');
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
                        ${item.cat === 'hiragana' ? '🌸' : item.cat === 'katakana' ? '⚡' : item.cat === 'kanji' ? '🗺️' : item.cat === 'grammar' ? '💡' : item.cat === 'falsos' ? '⚠️' : item.cat === 'fonetica' ? '🎙️' : item.cat === 'heterotonicos' ? '🗣️' : item.cat === 'regionalismos' ? '🌍' : item.cat === 'acentuacao' ? '✍️' : item.cat === 'sotaques' ? '🎙️' : item.cat === 'prosodia' ? '🎭' : '📚'} ${badgeLabel}
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
                ${isFonetica ? `
                    <div style="margin-bottom:6px;">
                        <div style="font-size:1.4rem; font-weight:bold; color:#0d9488; line-height:1.2; font-family:'Fredoka', sans-serif; margin-bottom:8px;">
                            ${item.primary}
                        </div>
                        ${item.secondary ? `<div style="font-size:0.95rem; font-weight:600; color:var(--text-main, #334155); margin-bottom:10px; line-height:1.4;">${item.secondary}</div>` : ''}
                        ${item.warning ? `
                            <div style="padding:10px 14px; background:#ecfdf5; border:1px solid #a7f3d0; border-radius:10px; font-size:0.88rem; color:#065f46; font-weight:600; margin-bottom:12px; line-height:1.4;">
                                📌 <strong>Regra:</strong> ${item.warning}
                            </div>
                        ` : ''}
                        
                        <div style="font-size:0.88rem; font-weight:700; color:#0d9488; margin-bottom:8px; display:flex; align-items:center; gap:4px;">
                            <span>🔊 Exemplos de Pronúncia:</span>
                        </div>
                        <div style="display:flex; flex-wrap:wrap; gap:8px;">
                            ${(item.examples && item.examples.length > 0) ? item.examples.map(ex => `
                                <span style="background:var(--card-bg, #ffffff); border:1.5px solid #99f6e4; color:#0d9488; padding:5px 12px; border-radius:12px; font-size:0.88rem; font-weight:700; display:inline-flex; align-items:center; gap:6px; box-shadow:0 2px 4px rgba(0,0,0,0.03);">
                                    <span>${ex.es}</span>
                                    <span style="color:var(--text-muted, #64748b); font-weight:500; font-size:0.8rem;">(${ex.pt})</span>
                                    <button onclick="speakKana('${(ex.audio || ex.es).replace(/'/g, "\\'")}')" style="background:#ccfbf1; border:none; color:#0f766e; border-radius:6px; padding:2px 6px; cursor:pointer; font-size:0.8rem;" title="Ouvir pronúncia">🔊</button>
                                </span>
                            `).join('') : (item.desc ? `<div style="font-size:0.88rem; color:#0d9488; font-weight:600;">📌 ${item.desc}</div>` : '')}
                        </div>
                    </div>
                ` : isFalso ? `
                    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">
                        <div>
                            <div style="display:flex; align-items:baseline; gap:8px;">
                                <div style="font-size:1.6rem; font-weight:bold; color:#dc2626; line-height:1.1; font-family:'Fredoka', sans-serif;">
                                    ${item.primary}
                                </div>
                                ${item.audio ? `<button onclick="speakKana('${audioWord}')" style="background:none; border:none; color:#64748b; font-size:1.1rem; cursor:pointer; padding:0 2px;" title="Ouvir áudio">🔊</button>` : ''}
                            </div>
                            <div style="font-size:0.98rem; font-weight:700; color:#059669; margin-top:6px;">
                                ✅ Significado Real: ${item.secondary}
                            </div>
                            ${item.warning ? `
                                <div style="margin-top:6px; padding:6px 12px; background:#fef2f2; border:1px solid #fecdd3; border-radius:8px; font-size:0.85rem; color:#dc2626; font-weight:700;">
                                    ⚠️ ${item.warning}
                                </div>
                            ` : ''}
                            ${item.desc ? `<div style="font-size:0.88rem; color:var(--text-muted, #64748b); margin-top:4px;">${item.desc}</div>` : ''}
                        </div>
                        <button onclick="treinarItemDict('${audioWord}')" style="background:#fff1f2; border:1px solid #fecdd3; color:#e11d48; padding:5px 14px; border-radius:20px; font-weight:700; font-size:0.8rem; cursor:pointer; display:flex; align-items:center; gap:4px; margin-top:4px;">
                            🎴 Treinar
                        </button>
                    </div>
                ` : isHeterotonico ? `
                    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">
                        <div>
                            <div style="display:flex; align-items:baseline; gap:8px;">
                                <div style="font-size:1.6rem; font-weight:bold; color:#7e22ce; line-height:1.1; font-family:'Fredoka', sans-serif;">
                                    ${item.primary}
                                </div>
                                ${item.audio ? `<button onclick="speakKana('${audioWord}')" style="background:none; border:none; color:#64748b; font-size:1.1rem; cursor:pointer; padding:0 2px;" title="Ouvir áudio">🔊</button>` : ''}
                            </div>
                            <div style="margin-top:8px; padding:8px 12px; background:#faf5ff; border:1px solid #e9d5ff; border-radius:10px; font-size:0.88rem; color:#7e22ce; font-weight:700;">
                                🎯 Sílaba Tônica: ${item.secondary}
                            </div>
                            ${item.desc ? `<div style="font-size:0.88rem; color:var(--text-muted, #64748b); margin-top:6px;">${item.desc}</div>` : ''}
                        </div>
                        <button onclick="treinarItemDict('${audioWord}')" style="background:#fff1f2; border:1px solid #fecdd3; color:#e11d48; padding:5px 14px; border-radius:20px; font-weight:700; font-size:0.8rem; cursor:pointer; display:flex; align-items:center; gap:4px; margin-top:4px;">
                            🎴 Treinar
                        </button>
                    </div>
                ` : isRegionalismo ? `
                    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">
                        <div>
                            <div style="font-size:1.4rem; font-weight:bold; color:var(--text-main, #0f172a); margin-bottom:4px; font-family:'Fredoka', sans-serif;">
                                ${item.primary}
                            </div>
                            <div style="font-size:0.9rem; font-weight:600; color:#0d9488; line-height:1.4; margin-top:4px;">
                                ${item.secondary}
                            </div>
                            ${item.desc ? `<div style="font-size:0.85rem; color:var(--text-muted, #64748b); margin-top:4px;">${item.desc}</div>` : ''}
                        </div>
                        <button onclick="treinarItemDict('${audioWord}')" style="background:#fff1f2; border:1px solid #fecdd3; color:#e11d48; padding:5px 14px; border-radius:20px; font-weight:700; font-size:0.8rem; cursor:pointer; display:flex; align-items:center; gap:4px; margin-top:4px;">
                            🎴 Treinar
                        </button>
                    </div>
                ` : isGrammar ? `
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
    if (container) container.setAttribute('aria-busy', 'true');
    document.querySelectorAll('.dict-filter-pill').forEach(btn => {
        btn.setAttribute('aria-pressed', btn.getAttribute('data-cat') === categoriaAtivaDict ? 'true' : 'false');
    });
    document.querySelectorAll('.dict-subfilter-pill').forEach(btn => {
        btn.setAttribute('aria-pressed', btn.getAttribute('data-sub') === subNivelKanjiDict ? 'true' : 'false');
    });
    document.querySelectorAll('.dict-subfilter-pill-vocab').forEach(btn => {
        btn.setAttribute('aria-pressed', btn.getAttribute('data-sub-vocab') === subNivelVocabDict ? 'true' : 'false');
    });

    const isSpanishMode = (typeof document !== 'undefined' && document.body && (
        document.body.getAttribute('data-lang') === 'spanish' ||
        document.body.getAttribute('data-mode') === 'espanhol' ||
        document.body.getAttribute('data-mode') === 'spanish' ||
        (typeof window !== 'undefined' && window.location && window.location.pathname && window.location.pathname.toLowerCase().includes('espanhol'))
    ));

    const isEnglishMode = (typeof document !== 'undefined' && document.body && (
        document.body.getAttribute('data-lang') === 'english' ||
        document.body.getAttribute('data-mode') === 'pronuncia' ||
        document.body.getAttribute('data-mode') === 'phrasal' ||
        (typeof window !== 'undefined' && window.location && window.location.pathname && window.location.pathname.toLowerCase().includes('ingles'))
    ));

    const temBuscaAtiva = String(queryStr || '').trim().length > 0;
    const showAlphabetGrid = (isEnglishMode || isSpanishMode) && !temBuscaAtiva && (categoriaAtivaDict === 'tudo' || categoriaAtivaDict === 'alphabet');

    if (alphabetSection) {
        alphabetSection.style.display = showAlphabetGrid ? 'block' : 'none';
        if (showAlphabetGrid) {
            if (isSpanishMode) renderizarTabelaAlfabetoEspanhol();
            else renderizarTabelaAlfabetoIngles();
        }
    }

    const regionalismosSection = document.getElementById('dict-regionalismos-section');
    const showRegionalismosTable = isSpanishMode && (categoriaAtivaDict === 'regionalismos' || (categoriaAtivaDict === 'tudo' && temBuscaAtiva));
    if (regionalismosSection) {
        regionalismosSection.style.display = showRegionalismosTable ? 'block' : 'none';
        if (showRegionalismosTable) renderizarTabelaRegionalismosEspanhol(queryStr);
    }

    let query = (queryStr || '').trim().toLowerCase();
    const appDictionary = typeof AppState !== 'undefined' ? AppState.dictionary : null;
    const universalData = (appDictionary && Array.isArray(appDictionary.universalGlossary)) ? appDictionary.universalGlossary : glossarioUniversalData;

    if (!Array.isArray(universalData) || universalData.length === 0) {
        console.error('[Dicionário] Nenhum dataset válido ficou disponível para renderização.');
        if (counter) counter.textContent = 'Conteúdo indisponível';
        if (container && typeof aplicarEstadoVazioUX === 'function') {
            aplicarEstadoVazioUX(container, {
                type: 'error',
                icon: '⚠️',
                title: 'Não foi possível carregar o dicionário',
                description: typeof obterMensagemErroUX === 'function' ? obterMensagemErroUX('dataset') : 'O conteúdo não está disponível agora.',
                recommendation: 'Atualize a página para tentar carregar os dados novamente.',
                actionLabel: 'Tentar novamente',
                action: 'window.location.reload()'
            });
            container.setAttribute('aria-busy', 'false');
        }
        return;
    }

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
        const w = (item.warning || '').toLowerCase();
        return p.includes(query) || s.includes(query) || d.includes(query) || c.includes(query) || m.includes(query) || w.includes(query);
    });

    glossarioFiltradoData = resFiltrado;
    if (typeof AppState !== 'undefined' && typeof AppState.setFilteredDictionary === 'function') {
        AppState.setFilteredDictionary(resFiltrado);
    }

    dicionarioPaginaAtual = 1;

    if (counter) {
        counter.innerHTML = `Mostrando <strong>${glossarioFiltradoData.length}</strong> item(ns) encontrado(s)`;
        counter.setAttribute('aria-live', 'polite');
    }

    if (!container) return;

    if (glossarioFiltradoData.length === 0) {
        if (typeof aplicarEstadoVazioUX === 'function') {
            aplicarEstadoVazioUX(container, {
                icon: '🔍',
                title: 'Nenhum resultado encontrado',
                description: query ? `Não encontramos correspondências para “${queryStr.trim()}”.` : 'Os filtros selecionados não possuem itens correspondentes.',
                recommendation: 'Tente outro termo ou limpe os filtros para ver todo o conteúdo.',
                actionLabel: 'Limpar busca e filtros',
                action: 'limparPesquisaDicionarioUX()'
            });
        } else {
            container.textContent = 'Nenhum resultado encontrado. Tente outro termo ou limpe os filtros.';
        }
        container.setAttribute('aria-busy', 'false');
        container.setAttribute('aria-label', 'Resultados do dicionário');
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

    if (typeof limparEstadoVazioUX === 'function') limparEstadoVazioUX(container);
    container.innerHTML = htmlCards;
    if (typeof animarEntradaConteudoUX === 'function') animarEntradaConteudoUX(container);

    if (typeof inicializarTodosOsCanvases === 'function') {
        inicializarTodosOsCanvases();
    }
    container.setAttribute('aria-busy', 'false');
    container.setAttribute('aria-label', 'Resultados do dicionário');
}

function limparPesquisaDicionarioUX() {
    categoriaAtivaDict = 'tudo';
    subNivelKanjiDict = 'tudo';
    subNivelVocabDict = 'tudo';
    const campo = document.getElementById('dict-search-input');
    if (campo) campo.value = '';
    document.querySelectorAll('.dict-filter-pill').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-cat') === 'tudo');
    });
    document.querySelectorAll('.dict-subfilter-pill').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-sub') === 'tudo');
    });
    document.querySelectorAll('.dict-subfilter-pill-vocab').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-sub-vocab') === 'tudo');
    });
    const subKanji = document.getElementById('dict-subfilters-kanji');
    const subVocab = document.getElementById('dict-subfilters-vocab') || document.getElementById('dict-subfilters-level');
    if (subKanji) subKanji.style.display = 'none';
    if (subVocab) subVocab.style.display = 'flex';
    renderizarResultadosDicionario('');
    if (campo && typeof campo.focus === 'function') campo.focus();
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
        const ativo = btn.getAttribute('data-cat') === cat;
        btn.classList.toggle('active', ativo);
        btn.setAttribute('aria-pressed', ativo ? 'true' : 'false');
    });

    const subKanji = document.getElementById('dict-subfilters-kanji');
    const subVocab = document.getElementById('dict-subfilters-vocab') || document.getElementById('dict-subfilters-level');
    if (subKanji) subKanji.style.display = (cat === 'kanji') ? 'flex' : 'none';
    if (subVocab) subVocab.style.display = (cat === 'vocab' || cat === 'grammar' || cat === 'phrasal' || cat === 'phonetics' || cat === 'fonetica' || cat === 'falsos' || cat === 'heterotonicos' || cat === 'regionalismos' || cat === 'tudo') ? 'flex' : 'none';

    renderizarResultadosDicionario(document.getElementById('dict-search-input')?.value || '');
}

function selecionarSubNivelKanji(sub) {
    subNivelKanjiDict = sub;
    document.querySelectorAll('.dict-subfilter-pill').forEach(btn => {
        const ativo = btn.getAttribute('data-sub') === sub;
        btn.classList.toggle('active', ativo);
        btn.setAttribute('aria-pressed', ativo ? 'true' : 'false');
    });
    renderizarResultadosDicionario(document.getElementById('dict-search-input')?.value || '');
}

function selecionarSubNivelVocab(sub) {
    subNivelVocabDict = sub;
    document.querySelectorAll('.dict-subfilter-pill-vocab').forEach(btn => {
        const ativo = btn.getAttribute('data-sub-vocab') === sub;
        btn.classList.toggle('active', ativo);
        btn.setAttribute('aria-pressed', ativo ? 'true' : 'false');
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
    if (typeof fecharModalAcessivel === 'function') fecharModalAcessivel(modalDict);
    else if (modalDict) modalDict.style.display = 'none';
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

function renderizarTabelaAlfabetoEspanhol() {
    const grid = document.getElementById('dict-alphabet-grid');
    const dictData = typeof DICIONARIO_ESPANHOL_DADOS !== 'undefined' ? DICIONARIO_ESPANHOL_DADOS : (typeof DADOS_ESPANHOL_DICIONARIO !== 'undefined' ? DADOS_ESPANHOL_DICIONARIO : null);
    if (!grid || !dictData || !Array.isArray(dictData.alfabeto)) return;
    grid.innerHTML = dictData.alfabeto.map(item => `
        <button class="sound-card" onclick="speakKana('${(item.example || item.letter).replace(/'/g, "\\'")}')" style="background:var(--card-bg, #ffffff); border:1.5px solid var(--border-color, #e2e8f0); border-radius:16px; padding:14px 8px; text-align:center; cursor:pointer; transition:all 0.2s ease; box-shadow:0 2px 4px rgba(0,0,0,0.04); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:4px;">
            <div style="font-size:1.6rem; font-weight:700; color:var(--text-main, #0f172a); font-family:'Fredoka', sans-serif;">${item.letter}</div>
            <div style="font-size:0.92rem; color:#0d9488; font-weight:700; font-family:'Fredoka', sans-serif;">[ ${item.name} ]</div>
            <div style="font-size:0.83rem; color:#0284c7; font-weight:600;">${item.phonetic}</div>
            <div style="font-size:0.8rem; color:var(--text-muted, #475569); font-weight:600; margin-top:2px;">📌 ${item.example} (${item.translation})</div>
        </button>
    `).join('');
}

function renderizarTabelaRegionalismosEspanhol(queryStr = '') {
    const tbody = document.getElementById('dict-regionalismos-tbody');
    const fonRecursosData = (typeof FONETICA_RECURSOS_ESPANHOL_DADOS !== 'undefined')
        ? FONETICA_RECURSOS_ESPANHOL_DADOS
        : (typeof window !== 'undefined' ? window.FONETICA_RECURSOS_ESPANHOL_DADOS : null);
    const dictData = typeof DICIONARIO_ESPANHOL_DADOS !== 'undefined' ? DICIONARIO_ESPANHOL_DADOS : (typeof DADOS_ESPANHOL_DICIONARIO !== 'undefined' ? DADOS_ESPANHOL_DICIONARIO : null);

    const regArray = (fonRecursosData && Array.isArray(fonRecursosData.regionalismos) && fonRecursosData.regionalismos.length > 0)
        ? fonRecursosData.regionalismos
        : (dictData && Array.isArray(dictData.regionalismos) ? dictData.regionalismos : []);

    if (!tbody || regArray.length === 0) return;

    const query = (queryStr || '').trim().toLowerCase();
    const list = regArray.filter(r => {
        if (!query) return true;
        const c = (r.concepto || r.concept || '').toLowerCase();
        const es = (r.espanha || r.es || r.spain || '').toLowerCase();
        const mx = (r.mexico || r.mx || '').toLowerCase();
        const ar = (r.argentina || r.ar || '').toLowerCase();
        const co = (r.colombia || r.co || '').toLowerCase();
        const chi = (r.chile || r.cl || '').toLowerCase();
        const ot = (r.outros || r.otros || '').toLowerCase();
        return c.includes(query) || es.includes(query) || mx.includes(query) || ar.includes(query) || co.includes(query) || chi.includes(query) || ot.includes(query);
    });

    tbody.innerHTML = list.map(r => `
        <tr style="border-bottom: 1px solid var(--border-color, #e2e8f0); transition: background 0.2s;">
            <td style="padding: 12px 16px; font-weight: 700; color: var(--text-main, #0f172a);">${r.concepto || r.concept || ''}</td>
            <td style="padding: 12px 16px; font-weight: 600; color: #ef4444;">🇪🇸 ${r.espanha || r.es || r.spain || '-'}</td>
            <td style="padding: 12px 16px; font-weight: 600; color: #22c55e;">🇲🇽 ${r.mexico || r.mx || '-'}</td>
            <td style="padding: 12px 16px; font-weight: 600; color: #3b82f6;">🇦🇷 ${r.argentina || r.ar || '-'}</td>
            <td style="padding: 12px 16px; font-weight: 600; color: #f59e0b;">🇨🇴 ${r.colombia || r.co || '-'}</td>
            <td style="padding: 12px 16px; font-weight: 600; color: #e11d48;">🇨🇱 ${r.chile || r.cl || '-'}</td>
            <td style="padding: 12px 16px; font-size: 0.85rem; color: var(--text-muted, #64748b);">${r.outros || r.otros || '-'}</td>
        </tr>
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
    window.limparPesquisaDicionarioUX = limparPesquisaDicionarioUX;
    window.carregarMaisItensDicionario = carregarMaisItensDicionario;
    window.selecionarCategoriaDicionario = selecionarCategoriaDicionario;
    window.selecionarSubNivelKanji = selecionarSubNivelKanji;
    window.selecionarSubNivelVocab = selecionarSubNivelVocab;
    window.filtrarGlossarioDebounced = filtrarGlossarioDebounced;
    window.abrirModalDicionario = abrirModalDicionario;
    window.fecharModalDicionario = fecharModalDicionario;
    window.renderizarTabelaAlfabetoIngles = renderizarTabelaAlfabetoIngles;
    window.renderizarTabelaAlfabetoEspanhol = renderizarTabelaAlfabetoEspanhol;
    window.renderizarTabelaRegionalismosEspanhol = renderizarTabelaRegionalismosEspanhol;
    window.toggleFavoritoDict = toggleFavoritoDict;
    window.treinarItemDict = treinarItemDict;
}
