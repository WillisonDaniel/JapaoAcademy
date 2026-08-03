// ======================================
// MÓDULO SRS - ENGINE & ALGORITMO SM-2
// ======================================

let srsTipoAtivo = 'a1';
let srsSessaoCards = [];
let srsIndexAtivo = 0;
let srsCardRevelado = false;
let srsAcertosSessao = 0;
let srsErrosSessao = 0;

function getDeckKeySRS(tipo) {
    if (!tipo) tipo = (typeof nivelAtivo !== 'undefined' && nivelAtivo) ? nivelAtivo.toLowerCase() : 'a1';
    const t = tipo.toLowerCase();
    if (t === 'hiragana') return 'ja_srs_hiragana_deck';
    if (t === 'katakana') return 'ja_srs_katakana_deck';
    if (t === 'kanji' || t === 'kanji_n5' || t === 'n5') return 'ja_srs_kanji_deck';
    if (t === 'kanji_n4' || t === 'n4') return 'ja_srs_kanji_n4_deck';
    if (t === 'kanji_n3' || t === 'n3') return 'ja_srs_kanji_n3_deck';
    if (t === 'kanji_n2' || t === 'n2') return 'ja_srs_kanji_n2_deck';
    if (t === 'kanji_n1' || t === 'n1') return 'ja_srs_kanji_n1_deck';
    if (t === 'phrasal_verbs' || t === 'phrasal') return 'en_srs_phrasal_verbs_deck';
    if (t === 'a2') return 'ja_srs_a2_deck';
    if (t === 'b1') return 'ja_srs_b1_deck';
    if (t === 'b2') return 'ja_srs_b2_deck';
    return 'ja_srs_deck';
}
function sincronizarBaralhoSRS(tipo = 'a1') {
    if (!tipo) tipo = (typeof nivelAtivo !== 'undefined' && nivelAtivo) ? nivelAtivo.toLowerCase() : 'a1';
    const t = tipo.toLowerCase();
    let deck = typeof carregarDeckSRS === 'function' ? carregarDeckSRS(t) : [];
    let alterado = false;
    let modulosConcluidosNomes = [];

    const isSpecialCourse = ['hiragana', 'katakana', 'kanji', 'kanji_n5', 'kanji_n4', 'kanji_n3', 'kanji_n2', 'kanji_n1', 'phrasal_verbs', 'phrasal'].includes(t);

    let dadosCurso = null;
    if (!isSpecialCourse) {
        dadosCurso = typeof getCourseData === 'function' ? getCourseData(t) : null;
        if (!dadosCurso) {
            const isEnglish = typeof document !== 'undefined' && document.body && document.body.getAttribute('data-lang') === 'english';
            if (isEnglish) {
                if (t === 'a1') dadosCurso = typeof CURSO_ENGLISH_A1_DADOS !== 'undefined' ? CURSO_ENGLISH_A1_DADOS : (typeof window !== 'undefined' ? window.CURSO_ENGLISH_A1_DADOS : null);
                else if (t === 'a2') dadosCurso = typeof CURSO_ENGLISH_A2_DADOS !== 'undefined' ? CURSO_ENGLISH_A2_DADOS : (typeof window !== 'undefined' ? window.CURSO_ENGLISH_A2_DADOS : null);
                else if (t === 'b1') dadosCurso = typeof CURSO_ENGLISH_B1_DADOS !== 'undefined' ? CURSO_ENGLISH_B1_DADOS : (typeof window !== 'undefined' ? window.CURSO_ENGLISH_B1_DADOS : null);
                else if (t === 'b2') dadosCurso = typeof CURSO_ENGLISH_B2_DADOS !== 'undefined' ? CURSO_ENGLISH_B2_DADOS : (typeof window !== 'undefined' ? window.CURSO_ENGLISH_B2_DADOS : null);
            } else {
                if (t === 'a1') dadosCurso = typeof CURSO_A1_DADOS !== 'undefined' ? CURSO_A1_DADOS : (typeof window !== 'undefined' ? window.CURSO_A1_DADOS : null);
                else if (t === 'a2') dadosCurso = typeof CURSO_A2_DADOS !== 'undefined' ? CURSO_A2_DADOS : (typeof window !== 'undefined' ? window.CURSO_A2_DADOS : null);
                else if (t === 'b1') dadosCurso = typeof CURSO_B1_DADOS !== 'undefined' ? CURSO_B1_DADOS : (typeof window !== 'undefined' ? window.CURSO_B1_DADOS : null);
                else if (t === 'b2') dadosCurso = typeof CURSO_B2_DADOS !== 'undefined' ? CURSO_B2_DADOS : (typeof window !== 'undefined' ? window.CURSO_B2_DADOS : null);
            }
        }
    }

    const eModAprendidoLocal = typeof eModuloAprendido === 'function' ? eModuloAprendido : (() => false);

    if (dadosCurso) {
        const tamOrig = deck.length;
        deck = deck.filter(card => {
            const modIdx = dadosCurso.findIndex(m => m.id === card.modId);
            if (modIdx === -1) return false;
            return eModAprendidoLocal(modIdx, t);
        });
        if (deck.length !== tamOrig) alterado = true;

        dadosCurso.forEach((rawMod, modIdx) => {
            const module = typeof normalizeModule === 'function' ? normalizeModule(rawMod) : rawMod;
            if (eModAprendidoLocal(modIdx, t)) {
                modulosConcluidosNomes.push(module.title || `Módulo ${modIdx + 1}`);
                if (module.drops && Array.isArray(module.drops)) {
                    module.drops.forEach((drop, dropIdx) => {
                        const cardId = `${module.id}_d_${dropIdx}`;
                        const jaExiste = deck.some(c => c.id === cardId);
                        if (!jaExiste) {
                            deck.push({
                                id: cardId,
                                modId: module.id,
                                modIdx: modIdx,
                                modTitle: module.title,
                                level: t.toUpperCase(),
                                drop: drop,
                                repetition: 0,
                                interval: 0,
                                easeFactor: 2.5,
                                dueDate: Date.now()
                            });
                            alterado = true;
                        }
                    });
                }
            }
        });
    } else if (t === 'hiragana') {
        if (typeof HIRA_COURSE_DATA !== 'undefined') {
            const tamOrig = deck.length;
            deck = deck.filter(card => eModAprendidoLocal(card.modIdx, 'hiragana'));
            if (deck.length !== tamOrig) alterado = true;

            HIRA_COURSE_DATA.forEach((mod, modIdx) => {
                if (mod.isReferenceTable) return;
                if (eModAprendidoLocal(modIdx, 'hiragana')) {
                    modulosConcluidosNomes.push(mod.title || `Módulo ${modIdx + 1}`);
                    if (mod.chars && Array.isArray(mod.chars)) {
                        mod.chars.forEach(c => {
                            const cardId = `hira_c_${c.char}`;
                            if (!deck.some(d => d.id === cardId)) {
                                deck.push({
                                    id: cardId,
                                    modIdx: modIdx,
                                    modTitle: mod.title,
                                    dropType: 'hira_char',
                                    char: c.char,
                                    romaji: c.romaji,
                                    mnemonic: c.mnemonic,
                                    repetition: 0, interval: 0, easeFactor: 2.5, dueDate: Date.now()
                                });
                                alterado = true;
                            }
                        });
                    }
                    if (mod.vocab && Array.isArray(mod.vocab)) {
                        mod.vocab.forEach(v => {
                            const cardId = `hira_v_${v.kana}`;
                            if (!deck.some(d => d.id === cardId)) {
                                deck.push({
                                    id: cardId,
                                    modIdx: modIdx,
                                    modTitle: mod.title,
                                    dropType: 'hira_vocab',
                                    char: v.kana,
                                    romaji: v.romaji,
                                    meaning: v.meaning,
                                    repetition: 0, interval: 0, easeFactor: 2.5, dueDate: Date.now()
                                });
                                alterado = true;
                            }
                        });
                    }
                }
            });
        }
    } else if (t === 'katakana') {
        if (typeof KATA_COURSE_DATA !== 'undefined') {
            const tamOrig = deck.length;
            deck = deck.filter(card => eModAprendidoLocal(card.modIdx, 'katakana'));
            if (deck.length !== tamOrig) alterado = true;

            KATA_COURSE_DATA.forEach((mod, modIdx) => {
                if (mod.isReferenceTable) return;
                if (eModAprendidoLocal(modIdx, 'katakana')) {
                    modulosConcluidosNomes.push(mod.title || `Módulo ${modIdx + 1}`);
                    if (mod.chars && Array.isArray(mod.chars)) {
                        mod.chars.forEach(c => {
                            const cardId = `kata_c_${c.char}`;
                            if (!deck.some(d => d.id === cardId)) {
                                deck.push({
                                    id: cardId,
                                    modIdx: modIdx,
                                    modTitle: mod.title,
                                    dropType: 'kata_char',
                                    char: c.char,
                                    romaji: c.romaji,
                                    mnemonic: c.mnemonic,
                                    repetition: 0, interval: 0, easeFactor: 2.5, dueDate: Date.now()
                                });
                                alterado = true;
                            }
                        });
                    }
                    if (mod.vocab && Array.isArray(mod.vocab)) {
                        mod.vocab.forEach(v => {
                            const cardId = `kata_v_${v.kana}`;
                            if (!deck.some(d => d.id === cardId)) {
                                deck.push({
                                    id: cardId,
                                    modIdx: modIdx,
                                    modTitle: mod.title,
                                    dropType: 'kata_vocab',
                                    char: v.kana,
                                    romaji: v.romaji,
                                    meaning: v.meaning,
                                    repetition: 0, interval: 0, easeFactor: 2.5, dueDate: Date.now()
                                });
                                alterado = true;
                            }
                        });
                    }
                }
            });
        }
    } else if (t === 'kanji') {
        if (typeof kanjiN5Data !== 'undefined') {
            const tamOrig = deck.length;
            deck = deck.filter(card => eModAprendidoLocal(card.modIdx, 'kanji'));
            if (deck.length !== tamOrig) alterado = true;

            kanjiN5Data.forEach((mod, modIdx) => {
                if (eModAprendidoLocal(modIdx, 'kanji')) {
                    modulosConcluidosNomes.push(mod.title || `Módulo ${mod.module || (modIdx + 1)}`);
                    if (mod.kanjis && Array.isArray(mod.kanjis)) {
                        mod.kanjis.forEach(k => {
                            const cardId = `kanji_${k.character}`;
                            if (!deck.some(d => d.id === cardId)) {
                                deck.push({
                                    id: cardId,
                                    modIdx: modIdx,
                                    modTitle: mod.title || `Módulo ${mod.module || (modIdx + 1)}`,
                                    dropType: 'kanji',
                                    character: k.character,
                                    meaning: k.meaning,
                                    kunyomi: k.kunyomi,
                                    onyomi: k.onyomi,
                                    mnemonic: k.mnemonic,
                                    radicals: k.radicals || [],
                                    examples: k.examples || [],
                                    repetition: 0, interval: 0, easeFactor: 2.5, dueDate: Date.now()
                                });
                                alterado = true;
                            }
                        });
                    }
                }
            });
        }
    } else if (['kanji_n4', 'kanji_n3', 'kanji_n2', 'kanji_n1'].includes(t)) {
        let datasetKanji = null;
        if (t === 'kanji_n4' && typeof kanjiN4Data !== 'undefined') datasetKanji = kanjiN4Data;
        else if (t === 'kanji_n3' && typeof kanjiN3Data !== 'undefined') datasetKanji = kanjiN3Data;
        else if (t === 'kanji_n2' && typeof kanjiN2Data !== 'undefined') datasetKanji = kanjiN2Data;
        else if (t === 'kanji_n1' && typeof kanjiN1Data !== 'undefined') datasetKanji = kanjiN1Data;

        if (datasetKanji) {
            const tamOrig = deck.length;
            deck = deck.filter(card => eModAprendidoLocal(card.modIdx, t));
            if (deck.length !== tamOrig) alterado = true;

            datasetKanji.forEach((mod, modIdx) => {
                if (eModAprendidoLocal(modIdx, t)) {
                    modulosConcluidosNomes.push(mod.title || `Módulo ${mod.module || (modIdx + 1)}`);
                    if (mod.kanjis && Array.isArray(mod.kanjis)) {
                        mod.kanjis.forEach(k => {
                            const cardId = `${t}_${k.character}`;
                            if (!deck.some(d => d.id === cardId)) {
                                deck.push({
                                    id: cardId,
                                    modIdx: modIdx,
                                    modTitle: mod.title || `Módulo ${mod.module || (modIdx + 1)}`,
                                    dropType: 'kanji',
                                    character: k.character,
                                    meaning: k.meaning,
                                    kunyomi: k.kunyomi,
                                    onyomi: k.onyomi,
                                    mnemonic: k.mnemonic,
                                    radicals: k.radicals || [],
                                    examples: k.examples || [],
                                    repetition: 0, interval: 0, easeFactor: 2.5, dueDate: Date.now()
                                });
                                alterado = true;
                            }
                        });
                    }
                }
            });
        }
    } else if (t === 'phrasal_verbs' || t === 'phrasal') {
        if (typeof PHRASAL_VERBS_DATA !== 'undefined') {
            const tamOrig = deck.length;
            deck = deck.filter(card => eModAprendidoLocal(card.modIdx, 'phrasal_verbs'));
            if (deck.length !== tamOrig) alterado = true;

            PHRASAL_VERBS_DATA.forEach((mod, modIdx) => {
                if (eModAprendidoLocal(modIdx, 'phrasal_verbs')) {
                    modulosConcluidosNomes.push(mod.title || `Módulo ${mod.module || (modIdx + 1)}`);
                    if (mod.items && Array.isArray(mod.items)) {
                        mod.items.forEach((item, itemIdx) => {
                            const cardId = `pv_${mod.module || (modIdx + 1)}_${item.id || itemIdx}`;
                            if (!deck.some(d => d.id === cardId)) {
                                deck.push({
                                    id: cardId,
                                    modIdx: modIdx,
                                    modTitle: mod.title || `Módulo ${mod.module || (modIdx + 1)}`,
                                    dropType: 'phrasal_verb',
                                    level: mod.level || 'A1',
                                    item: item,
                                    repetition: 0, interval: 0, easeFactor: 2.5, dueDate: Date.now()
                                });
                                alterado = true;
                            }
                        });
                    }
                }
            });
        }
    }

    if (alterado && typeof salvarDeckSRS === 'function') {
        salvarDeckSRS(t, deck);
    }

    console.log("📚 SRS [" + t + "]: Carregando cards dos módulos concluídos (" + (modulosConcluidosNomes.length > 0 ? modulosConcluidosNomes.join(", ") : "Nenhum") + ") - Total: " + deck.length + " cards.");

    return deck;
}

function processarAvaliacaoSRS(qualidade) {
    const sessaoCards = (typeof AppState !== 'undefined' && AppState.srs && AppState.srs.activeDeck) ? AppState.srs.activeDeck : (typeof srsSessaoCards !== 'undefined' ? srsSessaoCards : []);
    const indexAtivo = (typeof AppState !== 'undefined' && AppState.srs && typeof AppState.srs.currentIndex === 'number') ? AppState.srs.currentIndex : (typeof srsIndexAtivo !== 'undefined' ? srsIndexAtivo : 0);
    const cardData = sessaoCards[indexAtivo];
    if (!cardData) return;

    let deck = typeof carregarDeckSRS === 'function' ? carregarDeckSRS(srsTipoAtivo) : [];
    const cardRef = deck.find(c => c.id === cardData.id);
    const agora = Date.now();
    const UM_DIA_MS = 86400000;

    if (cardRef) {
        if (qualidade === 1) {
            cardRef.repetition = 0;
            cardRef.interval = 1;
            cardRef.easeFactor = Math.max(1.3, cardRef.easeFactor - 0.2);
            srsErrosSessao++;
            if (typeof registrarErroSRS === 'function') registrarErroSRS(cardData.id);
            if (typeof playBeep === 'function') playBeep('error');
        } else if (qualidade === 2) {
            cardRef.repetition += 1;
            cardRef.interval = Math.max(1, Math.round((cardRef.interval || 1) * 1.2));
            cardRef.easeFactor = Math.max(1.3, cardRef.easeFactor - 0.15);
            srsAcertosSessao++;
            if (typeof playBeep === 'function') playBeep('success');
        } else if (qualidade === 3) {
            cardRef.repetition += 1;
            cardRef.interval = cardRef.interval === 0 ? 1 : Math.round((cardRef.interval || 1) * cardRef.easeFactor);
            srsAcertosSessao++;
            if (typeof playBeep === 'function') playBeep('success');
        } else if (qualidade === 4) {
            cardRef.repetition += 1;
            cardRef.easeFactor += 0.15;
            cardRef.interval = cardRef.interval === 0 ? 3 : Math.round((cardRef.interval || 1) * cardRef.easeFactor * 1.3);
            srsAcertosSessao++;
            if (typeof playBeep === 'function') playBeep('success');
        }

        cardRef.dueDate = agora + (cardRef.interval * UM_DIA_MS);
        if (typeof salvarDeckSRS === 'function') salvarDeckSRS(srsTipoAtivo, deck);
    }

    if (typeof AppState !== 'undefined' && typeof AppState.setSRSIndex === 'function') {
        AppState.setSRSIndex(indexAtivo + 1);
    } else {
        srsIndexAtivo++;
    }
    if (typeof renderizarCardSRS === 'function') renderizarCardSRS();
    if (typeof atualizarBadgeSRS === 'function') {
        atualizarBadgeSRS(srsTipoAtivo);
    }
}

function initializeSRS(mode) {
    console.log("[BOOT] initializeSRS (mode: " + mode + ")");
    if (typeof atualizarBadgeSRS === 'function') atualizarBadgeSRS(mode);
}


// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.srsTipoAtivo = srsTipoAtivo;
    window.srsSessaoCards = srsSessaoCards;
    window.srsIndexAtivo = srsIndexAtivo;
    window.srsCardRevelado = srsCardRevelado;
    window.srsAcertosSessao = srsAcertosSessao;
    window.srsErrosSessao = srsErrosSessao;
    window.getDeckKeySRS = getDeckKeySRS;
    window.sincronizarBaralhoSRS = sincronizarBaralhoSRS;
    window.processarAvaliacaoSRS = processarAvaliacaoSRS;
    window.initializeSRS = initializeSRS;
}
