// ======================================
// MÓDULO SRS - ENGINE & ALGORITMO SM-2
// ======================================

let srsTipoAtivo = 'a1';
let srsSessaoCards = [];
let srsIndexAtivo = 0;
let srsCardRevelado = false;
let srsAcertosSessao = 0;
let srsErrosSessao = 0;

const SRS_STANDARD_LEVELS = new Set(['a1', 'a2', 'b1', 'b2']);
const SRS_LEGACY_DECK_KEYS = Object.freeze({
    a1: 'ja_srs_deck',
    a2: 'ja_srs_a2_deck',
    b1: 'ja_srs_b1_deck',
    b2: 'ja_srs_b2_deck'
});
const SRS_MIGRATION_V1_MARKER_KEY = 'srs_multilang_migration_v1';
const SRS_MIGRATION_V1_BACKUP_KEY = 'srs_multilang_legacy_backup_v1';
const SRS_MIGRATION_V1_UNRESOLVED_KEY = 'srs_multilang_unresolved_v1';
const SRS_MIGRATION_MARKER_KEY = 'srs_multilang_migration_v2';
const SRS_MIGRATION_BACKUP_KEY = 'srs_multilang_legacy_backup_v2';
const SRS_MIGRATION_UNRESOLVED_KEY = 'srs_multilang_unresolved_v2';
const SRS_MIGRATION_LANGUAGES = Object.freeze(['ja-JP', 'en-US', 'es-ES', 'ru-RU']);

function obterIdiomaDeckSRS(tipo, card) {
    const t = String(tipo || '').toLowerCase();
    if (['phrasal_verbs', 'phrasal'].includes(t)) return 'en-US';
    if (['falsos_amigos', 'falsos'].includes(t)) return 'es-ES';
    if (['cirilico', 'cyrillic', 'russo_cirilico'].includes(t)) return 'ru-RU';
    if (['hiragana', 'katakana', 'kanji', 'kanji_n5', 'kanji_n4', 'kanji_n3', 'kanji_n2', 'kanji_n1', 'n5', 'n4', 'n3', 'n2', 'n1'].includes(t)) return 'ja-JP';

    const explicit = card && typeof normalizeLanguage === 'function'
        ? normalizeLanguage(card.language || card.languageCode || card.lang)
        : null;
    if (explicit) return explicit;

    if (card && typeof getCourseModuleLanguage === 'function') {
        const indexed = getCourseModuleLanguage(card.modId) || getCourseModuleLanguage(card.id);
        if (indexed) return indexed;
    }

    const identity = String(card && `${card.modId || ''} ${card.id || ''}` || '').toLowerCase();
    if (/\bru_(?:a1|a2|b1|b2)_mod_/.test(identity)) return 'ru-RU';
    if (/\bes_(?:a1|a2|b1|b2)_mod_/.test(identity)) return 'es-ES';
    if (/\ben_(?:a1|a2|b1|b2)_mod_/.test(identity)) return 'en-US';
    if (/\bit_(?:a1|a2|b1|b2)_mod_/.test(identity)) return 'it-IT';
    if (/\b(?:a1|a2|b1|b2)_mod_/.test(identity)) return 'ja-JP';
    return null;
}

function getDeckKeySRS(tipo, language) {
    if (!tipo) tipo = (typeof nivelAtivo !== 'undefined' && nivelAtivo) ? nivelAtivo.toLowerCase() : 'a1';
    const t = tipo.toLowerCase();
    if (t === 'hiragana') return 'ja_srs_hiragana_deck';
    if (t === 'katakana') return 'ja_srs_katakana_deck';
    if (t === 'kanji' || t === 'kanji_n5' || t === 'n5') return 'ja_srs_kanji_deck';
    if (t === 'kanji_n4' || t === 'n4') return 'ja_srs_kanji_n4_deck';
    if (t === 'kanji_n3' || t === 'n3') return 'ja_srs_kanji_n3_deck';
    if (t === 'kanji_n2' || t === 'n2') return 'ja_srs_kanji_n2_deck';
    if (t === 'kanji_n1' || t === 'n1') return 'ja_srs_kanji_n1_deck';
    if (t === 'cirilico' || t === 'cyrillic' || t === 'russo_cirilico') return 'ru_srs_cirilico_deck';
    if (t === 'phrasal_verbs' || t === 'phrasal') return 'en_srs_phrasal_verbs_deck';
    if (t === 'falsos_amigos' || t === 'falsos') return 'es_srs_falsos_amigos_deck';
    if (!SRS_STANDARD_LEVELS.has(t)) return null;

    const languageCode = language == null
        ? (typeof getCurrentLanguageCode === 'function' ? getCurrentLanguageCode() : 'ja-JP')
        : (typeof normalizeLanguage === 'function' ? normalizeLanguage(language) : null);
    const config = typeof getLanguageConfig === 'function' ? getLanguageConfig(languageCode) : null;
    return config ? `${config.prefix}_srs_${t}_deck` : null;
}

function obterVersaoCardSRS(card) {
    if (!card || typeof card !== 'object') return 0;
    const datas = [card.updatedAt, card.lastReviewedAt, card.reviewedAt]
        .map(value => value ? new Date(value).getTime() : 0)
        .filter(Number.isFinite);
    return Math.max(0, Number(card.dueDate) || 0, ...datas);
}

function mesclarCardMigradoSRS(deck, card) {
    const id = card && card.id != null ? String(card.id) : '';
    if (!id) {
        deck.push(card);
        return;
    }
    const index = deck.findIndex(item => item && String(item.id) === id);
    if (index === -1) {
        deck.push(card);
        return;
    }
    if (obterVersaoCardSRS(card) >= obterVersaoCardSRS(deck[index])) deck[index] = card;
}

function migrarDecksSRSMultidioma() {
    if (typeof localStorage === 'undefined') return false;
    if (localStorage.getItem(SRS_MIGRATION_MARKER_KEY) === 'true') return true;

    try {
        let snapshot;
        const backupExistente = localStorage.getItem(SRS_MIGRATION_BACKUP_KEY);
        if (backupExistente != null) {
            snapshot = JSON.parse(backupExistente);
            if (!snapshot || snapshot.version !== 2 || !snapshot.legacySources || !snapshot.destinations) {
                throw new Error('backup-v2-invalid');
            }
        } else {
            const legacySources = {};
            Object.values(SRS_LEGACY_DECK_KEYS).forEach(key => { legacySources[key] = localStorage.getItem(key); });

            const v1BackupRaw = localStorage.getItem(SRS_MIGRATION_V1_BACKUP_KEY);

            const destinations = {};
            SRS_MIGRATION_LANGUAGES.forEach(languageCode => {
                SRS_STANDARD_LEVELS.forEach(level => {
                    const key = getDeckKeySRS(level, languageCode);
                    destinations[key] = localStorage.getItem(key);
                });
            });

            snapshot = {
                version: 2,
                createdAt: new Date().toISOString(),
                legacySources,
                destinations,
                v1: {
                    marker: localStorage.getItem(SRS_MIGRATION_V1_MARKER_KEY),
                    backupRaw: v1BackupRaw,
                    unresolvedRaw: localStorage.getItem(SRS_MIGRATION_V1_UNRESOLVED_KEY)
                }
            };
            localStorage.setItem(SRS_MIGRATION_BACKUP_KEY, JSON.stringify(snapshot));
        }

        const destinations = {};
        SRS_MIGRATION_LANGUAGES.forEach(languageCode => {
            SRS_STANDARD_LEVELS.forEach(level => {
                const key = getDeckKeySRS(level, languageCode);
                let existing = [];
                const raw = snapshot.destinations[key];
                if (raw != null) {
                    const parsed = JSON.parse(raw);
                    if (!Array.isArray(parsed)) throw new Error(`destination-not-array:${key}`);
                    existing = parsed;
                }
                destinations[key] = existing;
            });
        });

        const unresolved = [];
        const unresolvedSignatures = new Set();
        const adicionarNaoResolvido = entry => {
            const signature = JSON.stringify([
                entry.sourceKey || '', entry.level || '', entry.reason || '',
                entry.card && entry.card.id || '', entry.rawValue || ''
            ]);
            if (unresolvedSignatures.has(signature)) return;
            unresolvedSignatures.add(signature);
            unresolved.push(entry);
        };
        const migrarCard = (card, level, sourceKey) => {
            const languageCode = obterIdiomaDeckSRS(level, card);
            const targetKey = languageCode ? getDeckKeySRS(level, languageCode) : null;
            if (!targetKey) {
                adicionarNaoResolvido({ sourceKey, level, reason: 'language-unresolved', card });
                return;
            }
            mesclarCardMigradoSRS(destinations[targetKey], {
                ...card,
                language: languageCode,
                level: String(card.level || level).toUpperCase()
            });
        };

        const processarFontesLegadas = (sources, origin) => Object.entries(SRS_LEGACY_DECK_KEYS).forEach(([level, sourceKey]) => {
            const raw = sources && sources[sourceKey];
            if (!raw) return;
            let cards;
            try {
                cards = JSON.parse(raw);
            } catch (error) {
                adicionarNaoResolvido({ sourceKey, level, reason: 'invalid-json', rawValue: raw, origin });
                return;
            }
            if (!Array.isArray(cards)) {
                adicionarNaoResolvido({ sourceKey, level, reason: 'not-an-array', rawValue: raw, origin });
                return;
            }
            cards.forEach(card => migrarCard(card, level, sourceKey));
        });
        processarFontesLegadas(snapshot.legacySources, 'current');

        if (snapshot.v1 && snapshot.v1.backupRaw) {
            try {
                const v1Backup = JSON.parse(snapshot.v1.backupRaw);
                if (v1Backup && v1Backup.sources && typeof v1Backup.sources === 'object') {
                    processarFontesLegadas(v1Backup.sources, 'v1-backup');
                }
            } catch (error) {
                adicionarNaoResolvido({ sourceKey: SRS_MIGRATION_V1_BACKUP_KEY, reason: 'invalid-json', rawValue: snapshot.v1.backupRaw });
            }
        }

        if (snapshot.v1 && snapshot.v1.unresolvedRaw) {
            try {
                const anteriores = JSON.parse(snapshot.v1.unresolvedRaw);
                if (Array.isArray(anteriores)) anteriores.forEach(entry => {
                    if (entry && entry.card && SRS_STANDARD_LEVELS.has(String(entry.level || '').toLowerCase())) {
                        migrarCard(entry.card, String(entry.level).toLowerCase(), entry.sourceKey || 'v1-unresolved');
                    } else if (entry) {
                        adicionarNaoResolvido({ ...entry, migratedFrom: 'v1' });
                    }
                });
            } catch (error) {
                adicionarNaoResolvido({ sourceKey: SRS_MIGRATION_V1_UNRESOLVED_KEY, reason: 'invalid-json', rawValue: snapshot.v1.unresolvedRaw });
            }
        }

        Object.entries(destinations).forEach(([key, deck]) => {
            if (deck.length > 0 || snapshot.destinations[key] != null) localStorage.setItem(key, JSON.stringify(deck));
        });
        localStorage.setItem(SRS_MIGRATION_UNRESOLVED_KEY, JSON.stringify(unresolved));
        localStorage.setItem(SRS_MIGRATION_MARKER_KEY, 'true');
        return true;
    } catch (error) {
        console.warn('Não foi possível concluir a migração multidioma do SRS. O backup foi preservado.', error);
        return false;
    }
}
function sincronizarBaralhoSRS(tipo = 'a1') {
    if (!tipo) tipo = (typeof nivelAtivo !== 'undefined' && nivelAtivo) ? nivelAtivo.toLowerCase() : 'a1';
    const t = tipo.toLowerCase();
    let deck = typeof carregarDeckSRS === 'function' ? carregarDeckSRS(t) : [];
    const idiomaDeck = obterIdiomaDeckSRS(t) || (typeof getCurrentLanguageCode === 'function' ? getCurrentLanguageCode() : 'ja-JP');
    let alterado = false;
    let modulosConcluidosNomes = [];
    let deckIds = null;
    const adicionarCardSeNovo = (cardId, criarCard) => {
        if (!deckIds) deckIds = new Set(deck.map(card => card.id));
        if (deckIds.has(cardId)) return false;
        deck.push(criarCard());
        deckIds.add(cardId);
        alterado = true;
        return true;
    };

    const isSpecialCourse = ['hiragana', 'katakana', 'kanji', 'kanji_n5', 'kanji_n4', 'kanji_n3', 'kanji_n2', 'kanji_n1', 'phrasal_verbs', 'phrasal', 'falsos_amigos', 'falsos', 'cirilico', 'cyrillic', 'russo_cirilico'].includes(t);

    if (t === 'cirilico' || t === 'cyrillic' || t === 'russo_cirilico') {
        if (typeof DADOS_RUSSO_CIRILICO !== 'undefined') {
            const tamOrig = deck.length;
            deck = deck.filter(card => {
                const isDone = localStorage.getItem(`cyrillic_mod_done_${card.modId}`) === 'true';
                return isDone;
            });
            if (deck.length !== tamOrig) alterado = true;

            DADOS_RUSSO_CIRILICO.modules.forEach((mod) => {
                const isDone = localStorage.getItem(`cyrillic_mod_done_${mod.id}`) === 'true';
                if (isDone) {
                    modulosConcluidosNomes.push(mod.title || `Módulo ${mod.id}`);
                    if (mod.chars && Array.isArray(mod.chars)) {
                        mod.chars.forEach((c, charIdx) => {
                            const cardId = `cyr_c_${mod.id}_${charIdx}_${c.char.split(' ')[0]}`;
                            adicionarCardSeNovo(cardId, () => ({
                                id: cardId,
                                modId: mod.id,
                                modIdx: mod.id - 1,
                                modTitle: mod.title,
                                dropType: 'cyr_char',
                                char: c.char,
                                romaji: c.romaji,
                                mnemonic: c.mnemonic,
                                repetition: 0,
                                interval: 0,
                                easeFactor: 2.5,
                                dueDate: Date.now()
                            }));
                        });
                    }
                    if (mod.vocab && Array.isArray(mod.vocab)) {
                        mod.vocab.forEach((v, vIdx) => {
                            const cardId = `cyr_v_${mod.id}_${vIdx}_${v.word}`;
                            adicionarCardSeNovo(cardId, () => ({
                                id: cardId,
                                modId: mod.id,
                                modIdx: mod.id - 1,
                                modTitle: mod.title,
                                dropType: 'cyr_vocab',
                                char: v.word,
                                romaji: v.romaji,
                                meaning: v.meaning,
                                repetition: 0,
                                interval: 0,
                                easeFactor: 2.5,
                                dueDate: Date.now()
                            }));
                        });
                    }
                }
            });
        }
    }

    let dadosCurso = null;
    if (!isSpecialCourse) {
        dadosCurso = typeof getCourseData === 'function' ? getCourseData(t) : null;
        if (!dadosCurso && typeof getTodosOsCursos === 'function') {
            const cursos = getTodosOsCursos();
            dadosCurso = cursos && cursos[t.toUpperCase()] ? cursos[t.toUpperCase()] : null;
        }
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
                        adicionarCardSeNovo(cardId, () => ({
                                id: cardId,
                                modId: module.id,
                                modIdx: modIdx,
                                modTitle: module.title,
                                level: t.toUpperCase(),
                                language: idiomaDeck,
                                drop: drop,
                                repetition: 0,
                                interval: 0,
                                easeFactor: 2.5,
                                dueDate: Date.now()
                            }));
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
                            adicionarCardSeNovo(cardId, () => ({
                                    id: cardId,
                                    modIdx: modIdx,
                                    modTitle: mod.title,
                                    dropType: 'hira_char',
                                    char: c.char,
                                    romaji: c.romaji,
                                    mnemonic: c.mnemonic,
                                    repetition: 0, interval: 0, easeFactor: 2.5, dueDate: Date.now()
                                }));
                        });
                    }
                    if (mod.vocab && Array.isArray(mod.vocab)) {
                        mod.vocab.forEach(v => {
                            const cardId = `hira_v_${v.kana}`;
                            adicionarCardSeNovo(cardId, () => ({
                                    id: cardId,
                                    modIdx: modIdx,
                                    modTitle: mod.title,
                                    dropType: 'hira_vocab',
                                    char: v.kana,
                                    romaji: v.romaji,
                                    meaning: v.meaning,
                                    repetition: 0, interval: 0, easeFactor: 2.5, dueDate: Date.now()
                                }));
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
                            adicionarCardSeNovo(cardId, () => ({
                                    id: cardId,
                                    modIdx: modIdx,
                                    modTitle: mod.title,
                                    dropType: 'kata_char',
                                    char: c.char,
                                    romaji: c.romaji,
                                    mnemonic: c.mnemonic,
                                    repetition: 0, interval: 0, easeFactor: 2.5, dueDate: Date.now()
                                }));
                        });
                    }
                    if (mod.vocab && Array.isArray(mod.vocab)) {
                        mod.vocab.forEach(v => {
                            const cardId = `kata_v_${v.kana}`;
                            adicionarCardSeNovo(cardId, () => ({
                                    id: cardId,
                                    modIdx: modIdx,
                                    modTitle: mod.title,
                                    dropType: 'kata_vocab',
                                    char: v.kana,
                                    romaji: v.romaji,
                                    meaning: v.meaning,
                                    repetition: 0, interval: 0, easeFactor: 2.5, dueDate: Date.now()
                                }));
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
                            adicionarCardSeNovo(cardId, () => ({
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
                                }));
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
                            adicionarCardSeNovo(cardId, () => ({
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
                                }));
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
                            adicionarCardSeNovo(cardId, () => ({
                                    id: cardId,
                                    modIdx: modIdx,
                                    modTitle: mod.title || `Módulo ${mod.module || (modIdx + 1)}`,
                                    dropType: 'phrasal_verb',
                                    level: mod.level || 'A1',
                                    item: item,
                                    repetition: 0, interval: 0, easeFactor: 2.5, dueDate: Date.now()
                                }));
                        });
                    }
                }
            });
        }
    } else if (t === 'falsos_amigos' || t === 'falsos') {
        const faData = typeof DADOS_ESPANHOL_FALSOS_AMIGOS_TRILHA !== 'undefined' ? DADOS_ESPANHOL_FALSOS_AMIGOS_TRILHA : [];
        if (Array.isArray(faData) && faData.length > 0) {
            const tamOrig = deck.length;
            deck = deck.filter(card => eModAprendidoLocal(card.modIdx, 'falsos_amigos'));
            if (deck.length !== tamOrig) alterado = true;

            faData.forEach((mod, modIdx) => {
                if (eModAprendidoLocal(modIdx, 'falsos_amigos')) {
                    modulosConcluidosNomes.push(mod.title || `Módulo ${modIdx + 1}`);
                    const drops = mod.stage2_drops || [];
                    drops.forEach((item, itemIdx) => {
                        const cardId = `fa_${mod.id}_${itemIdx}`;
                        adicionarCardSeNovo(cardId, () => ({
                            id: cardId,
                            modIdx: modIdx,
                            modTitle: mod.title || `Módulo ${modIdx + 1}`,
                            dropType: 'false_friend_card',
                            level: mod.level || 'A1',
                            item: item,
                            repetition: 0, interval: 0, easeFactor: 2.5, dueDate: Date.now()
                        }));
                    });
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

    if (typeof atualizarSessaoEstudo === 'function') {
        atualizarSessaoEstudo({ activityCountDelta: 1, contentId: String(cardData.id || '') });
    }

    let deck = typeof carregarDeckSRS === 'function' ? carregarDeckSRS(srsTipoAtivo) : [];
    const cardRef = deck.find(c => c.id === cardData.id);
    const agora = Date.now();
    const UM_DIA_MS = 86400000;
    const intervaloAnterior = cardRef ? Math.max(0, Number(cardRef.interval) || 0) : 0;

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

    let contentLabel = 'Card SRS';
    if (cardData) {
        if (cardData.drop && cardData.drop.kanji) contentLabel = cardData.drop.kanji;
        else if (cardData.character) contentLabel = cardData.character;
        else if (cardData.char) contentLabel = cardData.char;
        else if (cardData.modTitle) contentLabel = cardData.modTitle;
        else if (cardData.item && cardData.item.phrase) contentLabel = cardData.item.phrase;
        else if (cardData.id) contentLabel = String(cardData.id);
    }
    const idioma = obterIdiomaDeckSRS(srsTipoAtivo, cardData)
        || (typeof getCurrentLanguageCode === 'function' ? getCurrentLanguageCode() : null)
        || 'unknown';
    const novoIntervalo = cardRef ? Math.max(0, Number(cardRef.interval) || 0) : 0;
    const proximaRevisao = cardRef ? Number(cardRef.dueDate) || (agora + UM_DIA_MS) : (agora + UM_DIA_MS);
    const sessaoId = (typeof window !== 'undefined' && window.estudoSessaoAtiva) ? window.estudoSessaoAtiva.id : '';

    if (typeof registrarTentativaSRS === 'function') {
        registrarTentativaSRS({
            id: `srs_${agora}_${Math.random().toString(36).slice(2, 9)}`,
            timestamp: new Date(agora).toISOString(),
            date: typeof obterDataLocalDashboard === 'function' ? obterDataLocalDashboard(new Date(agora)) : new Date(agora).toISOString().slice(0, 10),
            language: idioma,
            deckType: srsTipoAtivo,
            cardId: String(cardData.id || ''),
            contentLabel: String(contentLabel).replace(/<[^>]*>/g, '').trim(),
            quality: qualidade,
            result: qualidade === 1 ? 'error' : 'correct',
            previousInterval: intervaloAnterior,
            newInterval: novoIntervalo,
            nextDueDate: proximaRevisao,
            sessionId: sessaoId
        });
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
    window.obterIdiomaDeckSRS = obterIdiomaDeckSRS;
    window.getDeckKeySRS = getDeckKeySRS;
    window.migrarDecksSRSMultidioma = migrarDecksSRSMultidioma;
    window.sincronizarBaralhoSRS = sincronizarBaralhoSRS;
    window.processarAvaliacaoSRS = processarAvaliacaoSRS;
    window.initializeSRS = initializeSRS;
}
