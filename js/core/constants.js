// ======================================
// MÓDULO CORE - CONSTANTES E DICIONÁRIOS GLOBAIS
// ======================================

const LANGUAGE_CONFIG = Object.freeze({
    'ja-JP': Object.freeze({ code: 'ja-JP', id: 'japanese', prefix: 'ja', label: 'Japonês', speechCode: 'ja-JP' }),
    'en-US': Object.freeze({ code: 'en-US', id: 'english', prefix: 'en', label: 'Inglês', speechCode: 'en-US' }),
    'es-ES': Object.freeze({ code: 'es-ES', id: 'spanish', prefix: 'es', label: 'Espanhol', speechCode: 'es-ES' }),
    'ru-RU': Object.freeze({ code: 'ru-RU', id: 'russian', prefix: 'ru', label: 'Russo', speechCode: 'ru-RU' }),
    'it-IT': Object.freeze({ code: 'it-IT', id: 'italian', prefix: 'it', label: 'Italiano', speechCode: 'it-IT' })
});

const LANGUAGE_ALIASES = Object.freeze({
    'ja': 'ja-JP', 'ja-jp': 'ja-JP', 'jp': 'ja-JP', 'japanese': 'ja-JP', 'japan': 'ja-JP', 'japones': 'ja-JP', 'japa': 'ja-JP',
    'en': 'en-US', 'en-us': 'en-US', 'english': 'en-US', 'ingles': 'en-US',
    'es': 'es-ES', 'es-es': 'es-ES', 'spanish': 'es-ES', 'espanhol': 'es-ES',
    'ru': 'ru-RU', 'ru-ru': 'ru-RU', 'russian': 'ru-RU', 'russo': 'ru-RU', 'cirilico': 'ru-RU', 'cyrillic': 'ru-RU',
    'it': 'it-IT', 'it-it': 'it-IT', 'italian': 'it-IT', 'italiano': 'it-IT'
});

function normalizeLanguage(value) {
    if (value == null) return null;
    const normalized = String(value).trim().toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/_/g, '-');
    if (!normalized || normalized === 'all' || normalized === 'unknown' || normalized === 'none') return null;
    return LANGUAGE_ALIASES[normalized] || null;
}

function getLanguageConfig(value) {
    const code = normalizeLanguage(value);
    return code ? LANGUAGE_CONFIG[code] : null;
}

function getCurrentLanguageCode() {
    const body = typeof document !== 'undefined' ? document.body : null;
    const root = typeof document !== 'undefined' ? document.documentElement : null;
    const bodyLanguage = body && body.getAttribute ? body.getAttribute('data-lang') : '';
    const rootLanguage = root && root.getAttribute ? root.getAttribute('data-lang') : '';

    for (const explicitValue of [bodyLanguage, rootLanguage]) {
        const explicitCode = normalizeLanguage(explicitValue);
        if (explicitCode) return explicitCode;
        if (explicitValue && String(explicitValue).trim().toLowerCase() === 'all') return null;
        if (explicitValue && String(explicitValue).trim().toLowerCase() !== 'none') return null;
    }

    const stateLanguage = typeof AppState !== 'undefined' && AppState.ui ? AppState.ui.currentLanguage : null;
    const normalizedState = normalizeLanguage(stateLanguage);
    if (normalizedState) return normalizedState;

    const mode = body && body.getAttribute ? body.getAttribute('data-mode') : '';
    const normalizedMode = normalizeLanguage(mode);
    if (normalizedMode) return normalizedMode;

    const path = typeof window !== 'undefined' && window.location
        ? String(window.location.pathname || '').toLowerCase()
        : '';
    if (/\/(?:en-us)(?:\/|$)|ingles|english/.test(path)) return 'en-US';
    if (/\/(?:es-es)(?:\/|$)|espanhol|spanish/.test(path)) return 'es-ES';
    if (/\/(?:ru-ru)(?:\/|$)|russo|russian/.test(path)) return 'ru-RU';
    if (/\/(?:it-it)(?:\/|$)|italiano|italian/.test(path)) return 'it-IT';
    if (/\/(?:ja-jp)(?:\/|$)|japones|japanese/.test(path)) return 'ja-JP';

    return 'ja-JP';
}

const CAT_NAMES = {
    mod1: "Módulo 1",
    mod2: "Módulo 2",
    mod3: "Módulo 3",
    mod4: "Módulo 4",
    mod5: "Módulo 5",
    mod6: "Módulo 6",
    mod7: "Módulo 7",
    mod8: "Módulo 8",
    mod9: "Módulo 9",
    mod10: "Módulo 10",
    words_easy: "Iniciante",
    words_medium: "Médio",
    words_hard: "Avançado"
};

const KANAI_SINGLE_SYLLABLE_MAP = {
    // VOGAIS BÁSICAS
    'a': ['あ', 'ア', '亜', '阿', 'ah', 'uh', 'a'],
    'i': ['い', 'イ', '胃', '井', '意', '伊', 'ee', 'i'],
    'u': ['う', 'ウ', '宇', '鵜', '卯', 'oo', 'u'],
    'e': ['え', 'エ', '絵', '江', '柄', 'eh', 'e'],
    'o': ['お', 'オ', '尾', '男', 'oh', 'o'],

    // LINHA K
    'ka': ['か', 'カ', '加', '可', '科', '蚊', '課', 'ca', 'ka'],
    'ki': ['き', 'キ', '木', '気', '黄', '樹', 'kee', 'key', 'ki'],
    'ku': ['く', 'ク', '九', '区', '苦', '9', 'coo', 'ku'],
    'ke': ['け', 'ケ', '毛', '卦', 'kay', 'ke'],
    'ko': ['こ', 'コ', '子', '小', '古', '個', 'co', 'ko'],

    // LINHA S
    'sa': ['さ', 'サ', '差', '査', '砂', '佐', 'sa'],
    'shi': ['し', 'シ', '四', '死', '市', '氏', '詩', '4', '7', 'si', 'shi', 'shee'],
    'su': ['す', 'ス', '酢', '巣', 'soo', 'su'],
    'se': ['せ', 'セ', '背', '世', '瀬', 'say', 'se'],
    'so': ['そ', 'ソ', '祖', '粗', '诉', 'saw', 'so'],

    // LINHA T
    'ta': ['た', 'タ', '田', '他', '多', 'ta'],
    'chi': ['ち', 'チ', '千', '知', '血', '地', 'ti', 'chi', 'chee'],
    'tsu': ['つ', 'ツ', '津', '都', 'tzu', 'tsu', 'two'],
    'te': ['て', 'テ', '手', 'tay', 'te'],
    'to': ['と', 'ト', '戸', '都', '途', 'toe', 'to'],

    // LINHA N
    'na': ['な', 'ナ', '名', '菜', 'na'],
    'ni': ['に', 'ニ', '二', '似', '荷', '2', 'ni', 'nee', 'nii', 'knee'],
    'nu': ['ぬ', 'ヌ', '沼', 'nu', 'new'],
    'ne': ['ね', 'ネ', '根', '音', 'nee', 'nay', 'ne'],
    'no': ['の', 'ノ', '野', 'no'],

    // LINHA H
    'ha': ['は', 'ハ', '葉', '歯', 'wa', 'ha'],
    'hi': ['ひ', 'ヒ', '火', '日', '非', 'hee', 'hi'],
    'fu': ['ふ', 'フ', '府', '負', 'hu', 'foo', 'fu', 'who'],
    'he': ['へ', 'ヘ', '辺', '屁', 'e', 'hay', 'he'],
    'ho': ['ほ', 'ホ', '歩', '穂', 'ho'],

    // LINHA M
    'ma': ['ま', 'マ', '魔', '真', 'ma'],
    'mi': ['み', 'ミ', '身', '実', '未', '見', 'mee', 'mi'],
    'mu': ['む', 'ム', '無', 'moo', 'mu'],
    'me': ['め', 'メ', '目', '芽', 'may', 'me'],
    'mo': ['も', 'モ', '藻', '模', '喪', 'mo'],

    // LINHA Y
    'ya': ['や', 'ヤ', '矢', '屋', 'ya'],
    'yu': ['ゆ', 'ユ', '湯', '由', 'you', 'yu'],
    'yo': ['よ', 'ヨ', '夜', '世', 'yo'],

    // LINHA R
    'ra': ['ら', 'ラ', '等', '羅', 'ra'],
    'ri': ['り', 'リ', '理', '利', 'ree', 'ri'],
    'ru': ['る', 'ル', '留', '類', 'roo', 'ru'],
    're': ['れ', 'レ', '例', '零', 'ray', 're'],
    'ro': ['ろ', 'ロ', '六', '6', 'row', 'ro'],

    // LINHA W / N
    'wa': ['わ', 'ワ', '輪', '和', 'wa'],
    'wo': ['を', 'ヲ', '尾', 'o', 'wo'],
    'n': ['ん', 'ン', 'm', 'nn', 'ng', 'un', 'um', 'hum', 'uh', 'en', 'an', 'on', 'n'],

    // DAKUON / HANDAKUON (G, Z, D, B, P)
    'ga': ['が', 'ガ', '画', 'ga'],
    'gi': ['ぎ', 'ギ', '技', 'gi', 'ghee'],
    'gu': ['ぐ', 'グ', '具', '愚', '偶', '五', '5', 'gu', 'go', 'goo'],
    'ge': ['げ', 'ゲ', '下', 'gay', 'ge'],
    'go': ['ご', 'ゴ', '五', '語', '午', '後', '5', 'go', 'gu'],

    'za': ['ざ', 'ザ', '座', 'za'],
    'ji': ['じ', 'ジ', '字', '時', 'ぢ', 'ヂ', 'zi', 'dji', 'ji'],
    'zu': ['ず', 'ズ', '図', 'づ', 'ヅ', 'zoo', 'zu'],
    'ze': ['ぜ', 'ゼ', '是', 'say', 'ze'],
    'zo': ['ぞ', 'ゾ', '象', 'zo'],

    'da': ['だ', 'ダ', '打', 'da'],
    'de': ['で', 'デ', '出', 'day', 'de'],
    'do': ['ど', 'ド', '土', 'do'],

    'ba': ['ば', 'バ', '場', 'va', 'ba'],
    'bi': ['び', 'ビ', '美', '微', 'bee', 'vi', 'bi', 'b'],
    'bu': ['ぶ', 'ブ', '部', 'voo', 'boo', 'bu'],
    'be': ['べ', 'ベ', '部', 'bay', 'vey', 'be'],
    'bo': ['ぼ', 'ボ', '墓', '暮', '棒', 'bou', 'vo', 'poh', 'boh', 'bo'],

    'pa': ['ぱ', 'パ', 'pa'],
    'pi': ['ぴ', 'ピ', 'pee', 'pi'],
    'pu': ['ぷ', 'プ', 'poo', 'pu'],
    'pe': ['ぺ', 'ペ', 'pay', 'pe'],
    'po': ['ぽ', 'ポ', 'poh', 'po'],

    // NÚMEROS E OUTROS HOMÓFONOS
    'hachi': ['はち', 'ハチ', '八', '8', 'hachi'],
    'yon': ['よん', 'ヨン', '四', '4', 'yon'],
    'san': ['さん', 'サン', '三', '3', 'san'],
    'ichi': ['いち', 'イチ', '一', '1', 'ichi'],
    'nana': ['なな', 'ナナ', '七', '7', 'nana']
};

const KANJI_HOMOPHONE_MAP = KANAI_SINGLE_SYLLABLE_MAP;
const singleKanjiMap = KANAI_SINGLE_SYLLABLE_MAP;

const ALPHABET_LETTER_MAP = {
    'b': ['bi'], 'B': ['bi'],
    'd': ['di', 'de'], 'D': ['di', 'de'],
    'g': ['ji', 'gi'], 'G': ['ji', 'gi'],
    'k': ['ka', 'kei'], 'K': ['ka', 'kei'],
    'p': ['pi'], 'P': ['pi'],
    't': ['chi', 'te'], 'T': ['chi', 'te'],
    'v': ['bi'], 'V': ['bi'],
    'c': ['shi', 'si'], 'C': ['shi', 'si'],
    'z': ['zi', 'ze'], 'Z': ['zi', 'ze'],
    'm': ['mi'], 'M': ['mi'],
    'n': ['n'], 'N': ['n'],
    'r': ['ri'], 'R': ['ri'],
    's': ['su'], 'S': ['su'],
    'f': ['fu'], 'F': ['fu'],
    'h': ['ha'], 'H': ['ha'],
    'j': ['ji'], 'J': ['ji'],
    'l': ['ru'], 'L': ['ru'],
    'w': ['wa'], 'W': ['wa'],
    'y': ['ya'], 'Y': ['ya']
};

const DAKUON_FAMILIES = [
    ['ba', 'bi', 'bu', 'be', 'bo'],
    ['za', 'ji', 'zu', 'ze', 'zo'],
    ['ga', 'gi', 'gu', 'ge', 'go'],
    ['da', 'ji', 'dzu', 'de', 'do'],
    ['pa', 'pi', 'pu', 'pe', 'po']
];

const ENGLISH_ALPHABET_DATA = [
    { letter: "A a", name: "ei", ipa: "/eɪ/", example: "Apple" },
    { letter: "B b", name: "bee", ipa: "/biː/", example: "Book" },
    { letter: "C c", name: "cee", ipa: "/siː/", example: "Cat" },
    { letter: "D d", name: "dee", ipa: "/diː/", example: "Dog" },
    { letter: "E e", name: "ee", ipa: "/iː/", example: "Elephant" },
    { letter: "F f", name: "ef", ipa: "/ɛf/", example: "Fish" },
    { letter: "G g", name: "jee", ipa: "/dʒiː/", example: "Goat" },
    { letter: "H h", name: "aitch", ipa: "/eɪtʃ/", example: "House" },
    { letter: "I i", name: "ai", ipa: "/aɪ/", example: "Ice" },
    { letter: "J j", name: "jay", ipa: "/dʒeɪ/", example: "Juice" },
    { letter: "K k", name: "kay", ipa: "/keɪ/", example: "Key" },
    { letter: "L l", name: "el", ipa: "/ɛl/", example: "Lion" },
    { letter: "M m", name: "em", ipa: "/ɛm/", example: "Milk" },
    { letter: "N n", name: "en", ipa: "/ɛn/", example: "Nest" },
    { letter: "O o", name: "oh", ipa: "/oʊ/", example: "Orange" },
    { letter: "P p", name: "pee", ipa: "/piː/", example: "Pen" },
    { letter: "Q q", name: "cue", ipa: "/kjuː/", example: "Queen" },
    { letter: "R r", name: "ar", ipa: "/ɑːr/", example: "Red" },
    { letter: "S s", name: "es", ipa: "/ɛs/", example: "Sun" },
    { letter: "T t", name: "tee", ipa: "/tiː/", example: "Tea" },
    { letter: "U u", name: "you", ipa: "/juː/", example: "Umbrella" },
    { letter: "V v", name: "vee", ipa: "/viː/", example: "Van" },
    { letter: "W w", name: "double-you", ipa: "/ˈdʌbəl.juː/", example: "Water" },
    { letter: "X x", name: "ex", ipa: "/ɛks/", example: "Xylophone" },
    { letter: "Y y", name: "wy", ipa: "/waɪ/", example: "Yellow" },
    { letter: "Z z", name: "zee", ipa: "/ziː/", example: "Zebra" }
];

function getCourseData(mode) {
    if (!mode) return null;
    const m = String(mode).toLowerCase();

    if (m === 'hiragana') {
        return typeof HIRA_COURSE_DATA !== 'undefined' ? HIRA_COURSE_DATA : (typeof window !== 'undefined' && window.HIRA_COURSE_DATA ? window.HIRA_COURSE_DATA : null);
    }
    if (m === 'katakana') {
        return typeof KATA_COURSE_DATA !== 'undefined' ? KATA_COURSE_DATA : (typeof window !== 'undefined' && window.KATA_COURSE_DATA ? window.KATA_COURSE_DATA : null);
    }
    if (m === 'kanji' || m === 'kanji_n5' || m === 'n5') {
        return typeof kanjiN5Data !== 'undefined' ? kanjiN5Data : (typeof window !== 'undefined' && window.kanjiN5Data ? window.kanjiN5Data : null);
    }
    if (m === 'kanji_n4' || m === 'n4') {
        return typeof kanjiN4Data !== 'undefined' ? kanjiN4Data : (typeof window !== 'undefined' && window.kanjiN4Data ? window.kanjiN4Data : null);
    }
    if (m === 'kanji_n3' || m === 'n3') {
        return typeof kanjiN3Data !== 'undefined' ? kanjiN3Data : (typeof window !== 'undefined' && window.kanjiN3Data ? window.kanjiN3Data : null);
    }
    if (m === 'kanji_n2' || m === 'n2') {
        return typeof kanjiN2Data !== 'undefined' ? kanjiN2Data : (typeof window !== 'undefined' && window.kanjiN2Data ? window.kanjiN2Data : null);
    }
    if (m === 'kanji_n1' || m === 'n1') {
        return typeof kanjiN1Data !== 'undefined' ? kanjiN1Data : (typeof window !== 'undefined' && window.kanjiN1Data ? window.kanjiN1Data : null);
    }
    if (m === 'phrasal_verbs' || m === 'phrasal') {
        return typeof PHRASAL_VERBS_DATA !== 'undefined' ? PHRASAL_VERBS_DATA : (typeof window !== 'undefined' && window.PHRASAL_VERBS_DATA ? window.PHRASAL_VERBS_DATA : null);
    }
    if (m === 'pronuncia' || m === 'pronunciation') {
        return typeof PRONUNCIATION_TOPICS !== 'undefined' ? PRONUNCIATION_TOPICS : (typeof window !== 'undefined' && window.PRONUNCIATION_TOPICS ? window.PRONUNCIATION_TOPICS : null);
    }
    if (m === 'curso' || m === 'japa' || m === 'spanish' || m === 'espanhol' || m === 'ingles' || m === 'english' || m === 'russian' || m === 'russo' || m === 'a1' || m === 'a2' || m === 'b1' || m === 'b2') {
        const languageCode = normalizeLanguage(m) || getCurrentLanguageCode();
        const isSpanish = languageCode === 'es-ES';
        const isEnglish = languageCode === 'en-US';
        const isRussian = languageCode === 'ru-RU';

        const lvl = (typeof AppState !== 'undefined' && AppState.course && AppState.course.level)
            ? String(AppState.course.level).toUpperCase()
            : ((typeof mode === 'string' && ['A1','A2','B1','B2'].includes(mode.toUpperCase()))
                ? mode.toUpperCase()
                : ((typeof nivelAtivo !== 'undefined' && nivelAtivo) ? String(nivelAtivo).toUpperCase() : 'A1'));

        if (isRussian) {
            if (lvl === 'A1') return typeof CURSO_RUSSO_A1_DADOS !== 'undefined' ? CURSO_RUSSO_A1_DADOS : (typeof window !== 'undefined' ? window.CURSO_RUSSO_A1_DADOS : null);
            if (lvl === 'A2') return typeof CURSO_RUSSO_A2_DADOS !== 'undefined' ? CURSO_RUSSO_A2_DADOS : (typeof window !== 'undefined' ? window.CURSO_RUSSO_A2_DADOS : null);
            if (lvl === 'B1') return typeof CURSO_RUSSO_B1_DADOS !== 'undefined' ? CURSO_RUSSO_B1_DADOS : (typeof window !== 'undefined' ? window.CURSO_RUSSO_B1_DADOS : null);
            if (lvl === 'B2') return typeof CURSO_RUSSO_B2_DADOS !== 'undefined' ? CURSO_RUSSO_B2_DADOS : (typeof window !== 'undefined' ? window.CURSO_RUSSO_B2_DADOS : null);
        } else if (isSpanish) {
            if (lvl === 'A1') return typeof CURSO_ESPANHOL_A1_DADOS !== 'undefined' ? CURSO_ESPANHOL_A1_DADOS : (typeof window !== 'undefined' ? window.CURSO_ESPANHOL_A1_DADOS : null);
            if (lvl === 'A2') return typeof CURSO_ESPANHOL_A2_DADOS !== 'undefined' ? CURSO_ESPANHOL_A2_DADOS : (typeof window !== 'undefined' ? window.CURSO_ESPANHOL_A2_DADOS : null);
            if (lvl === 'B1') return typeof CURSO_ESPANHOL_B1_DADOS !== 'undefined' ? CURSO_ESPANHOL_B1_DADOS : (typeof window !== 'undefined' ? window.CURSO_ESPANHOL_B1_DADOS : null);
            if (lvl === 'B2') return typeof CURSO_ESPANHOL_B2_DADOS !== 'undefined' ? CURSO_ESPANHOL_B2_DADOS : (typeof window !== 'undefined' ? window.CURSO_ESPANHOL_B2_DADOS : null);
        } else if (isEnglish) {
            if (lvl === 'A1') return typeof CURSO_ENGLISH_A1_DADOS !== 'undefined' ? CURSO_ENGLISH_A1_DADOS : (typeof window !== 'undefined' ? window.CURSO_ENGLISH_A1_DADOS : null);
            if (lvl === 'A2') return typeof CURSO_ENGLISH_A2_DADOS !== 'undefined' ? CURSO_ENGLISH_A2_DADOS : (typeof window !== 'undefined' ? window.CURSO_ENGLISH_A2_DADOS : null);
            if (lvl === 'B1') return typeof CURSO_ENGLISH_B1_DADOS !== 'undefined' ? CURSO_ENGLISH_B1_DADOS : (typeof window !== 'undefined' ? window.CURSO_ENGLISH_B1_DADOS : null);
            if (lvl === 'B2') return typeof CURSO_ENGLISH_B2_DADOS !== 'undefined' ? CURSO_ENGLISH_B2_DADOS : (typeof window !== 'undefined' ? window.CURSO_ENGLISH_B2_DADOS : null);
        } else {
            if (lvl === 'A1') return typeof CURSO_A1_DADOS !== 'undefined' ? CURSO_A1_DADOS : (typeof window !== 'undefined' ? window.CURSO_A1_DADOS : null);
            if (lvl === 'A2') return typeof CURSO_A2_DADOS !== 'undefined' ? CURSO_A2_DADOS : (typeof window !== 'undefined' ? window.CURSO_A2_DADOS : null);
            if (lvl === 'B1') return typeof CURSO_B1_DADOS !== 'undefined' ? CURSO_B1_DADOS : (typeof window !== 'undefined' ? window.CURSO_B1_DADOS : null);
            if (lvl === 'B2') return typeof CURSO_B2_DADOS !== 'undefined' ? CURSO_B2_DADOS : (typeof window !== 'undefined' ? window.CURSO_B2_DADOS : null);
        }
    }
    return null;
}
// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.LANGUAGE_CONFIG = LANGUAGE_CONFIG;
    window.normalizeLanguage = normalizeLanguage;
    window.getLanguageConfig = getLanguageConfig;
    window.getCurrentLanguageCode = getCurrentLanguageCode;
    window.CAT_NAMES = CAT_NAMES;
    window.KANAI_SINGLE_SYLLABLE_MAP = KANAI_SINGLE_SYLLABLE_MAP;
    window.KANJI_HOMOPHONE_MAP = KANJI_HOMOPHONE_MAP;
    window.singleKanjiMap = singleKanjiMap;
    window.ALPHABET_LETTER_MAP = ALPHABET_LETTER_MAP;
    window.DAKUON_FAMILIES = DAKUON_FAMILIES;
    window.ENGLISH_ALPHABET_DATA = ENGLISH_ALPHABET_DATA;
    window.getCourseData = getCourseData;
}
