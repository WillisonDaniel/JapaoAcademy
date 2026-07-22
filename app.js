// ==========================================
// JAPÃO ACADEMY - CORE SCRIPT (UNIFICADO)
// ==========================================

// Verifica em qual página o usuário está através do atributo HTML
const courseMode = document.body.getAttribute('data-mode');

// Dicionários de utilidade para o sistema
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

// ==========================================
// TEMA ESCURO E TRANSIÇÕES
// ==========================================
function applySavedTheme() {
    const savedTheme = localStorage.getItem('ja_theme');
    const isDark = savedTheme === 'dark';

    if (isDark) {
        document.documentElement.classList.add('dark-theme');
        if (document.body) document.body.classList.add('dark-theme');
    } else {
        document.documentElement.classList.remove('dark-theme');
        if (document.body) document.body.classList.remove('dark-theme');
    }

    const btn = document.querySelector('.theme-btn');
    if (btn) btn.textContent = isDark ? '☀️' : '🌙';
}

applySavedTheme();

function toggleTheme() {
    const isDark = !document.documentElement.classList.contains('dark-theme');

    if (isDark) {
        document.documentElement.classList.add('dark-theme');
        if (document.body) document.body.classList.add('dark-theme');
    } else {
        document.documentElement.classList.remove('dark-theme');
        if (document.body) document.body.classList.remove('dark-theme');
    }

    localStorage.setItem('ja_theme', isDark ? 'dark' : 'light');

    const btn = document.querySelector('.theme-btn');
    if (btn) btn.textContent = isDark ? '☀️' : '🌙';
}

function setupSmoothTransitions() {
    const navLinks = document.querySelectorAll('.course-btn, .home-btn');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetUrl = this.getAttribute('href');
            if (targetUrl && !targetUrl.startsWith('#') && targetUrl !== '') {
                e.preventDefault();
                document.body.classList.add('fade-out-page');
                setTimeout(() => { window.location.href = targetUrl; }, 280);
            }
        });
    });
}

// ==========================================
// SISTEMA DE ÁUDIO SINTETIZADO E BEEPS
// ==========================================
function speakKana(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const cleanText = text.split(' ')[0].trim();
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }
}

function playBeep(type) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        if (type === 'success') {
            osc.frequency.setValueAtTime(587.33, ctx.currentTime);
            osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.25);
        } else {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(150, ctx.currentTime);
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.3);
        }
    } catch (e) { }
}

// ==========================================
// BUSCADOR DE DADOS DOS CURSOS (BLINDADO)
// ==========================================
function getCourseData(mode) {
    if (mode === 'hiragana') {
        return (typeof HIRA_COURSE_DATA !== 'undefined' ? HIRA_COURSE_DATA : (typeof hiraganaData !== 'undefined' ? hiraganaData : null));
    } else if (mode === 'katakana') {
        return (typeof KATA_COURSE_DATA !== 'undefined' ? KATA_COURSE_DATA : (typeof katakanaData !== 'undefined' ? katakanaData : null));
    } else if (mode === 'kanji') {
        return (typeof kanjiN5Data !== 'undefined' ? kanjiN5Data : null);
    }
    return null;
}

// ==========================================
// GESTÃO DE ABAS E MÓDULOS DOS CURSOS
// ==========================================
function renderCourseTabs() {
    const tabsContainer = document.getElementById('tabContainer');
    if (!tabsContainer) return;
    tabsContainer.innerHTML = '';

    const mode = document.body.getAttribute('data-mode') || courseMode;
    const modulesList = getCourseData(mode);
    if (!modulesList) return;

    modulesList.forEach((mod, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'tab-item-wrapper';
        wrapper.setAttribute('data-mod-index', index);

        const btn = document.createElement('button');
        btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = `Módulo ${mod.module || (index + 1)}`;
        btn.onclick = () => {
            document.querySelectorAll('#tabContainer .tab-btn').forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            loadCourseModule(index);
        };

        const isCompleted = eModuloAprendido(index, mode);
        const checkBtn = document.createElement('button');
        checkBtn.className = `tab-check-btn ${isCompleted ? 'completed' : ''}`;
        checkBtn.innerHTML = isCompleted ? '✅' : '⚪';
        checkBtn.title = isCompleted ? 'Módulo Concluído — clique para desmarcar' : 'Marcar como Concluído';
        checkBtn.onclick = (e) => {
            e.stopPropagation();
            toggleModuloConcluido(index, mode);
        };

        wrapper.appendChild(btn);
        wrapper.appendChild(checkBtn);
        tabsContainer.appendChild(wrapper);
    });
}

// ==========================================
// TOAST NOTIFICATION SYSTEM
// ==========================================
function mostrarToast(mensagem, duracao = 3500) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast-notification toast-enter';
    toast.innerHTML = mensagem;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('toast-visible'));
    setTimeout(() => {
        toast.classList.remove('toast-visible');
        toast.classList.add('toast-exit');
        setTimeout(() => toast.remove(), 400);
    }, duracao);
}

// ==========================================
// TOGGLE MANUAL DE CONCLUSÃO DE MÓDULO
// ==========================================
function toggleModuloConcluido(modIdx, mode) {
    const t = mode.toLowerCase();
    let progressKey = null;
    let labelCurso = '';

    if (t === 'hiragana') { progressKey = 'progress_hiragana'; labelCurso = 'Hiragana'; }
    else if (t === 'katakana') { progressKey = 'progress_katakana'; labelCurso = 'Katakana'; }
    else if (t === 'kanji') { progressKey = 'progress_kanji'; labelCurso = 'Kanji'; }
    else return;

    if (!progressoGlobal[progressKey]) progressoGlobal[progressKey] = [];

    const idx = progressoGlobal[progressKey].indexOf(modIdx);
    const modulesList = getCourseData(t);
    const modTitle = modulesList && modulesList[modIdx] ? (modulesList[modIdx].title || `Módulo ${modIdx + 1}`) : `Módulo ${modIdx + 1}`;

    if (idx === -1) {
        progressoGlobal[progressKey].push(modIdx);
        salvarProgressoGlobal();
        const deck = sincronizarBaralhoSRS(t);
        atualizarBadgeSRS(t);
        playBeep('success');
        mostrarToast(`✅ <strong>${modTitle}</strong> de ${labelCurso} concluído! <br><small>${deck.length} cards disponíveis no SRS.</small>`);
    } else {
        progressoGlobal[progressKey].splice(idx, 1);
        salvarProgressoGlobal();
        const deck = sincronizarBaralhoSRS(t);
        atualizarBadgeSRS(t);
        playBeep('error');
        mostrarToast(`↩️ <strong>${modTitle}</strong> de ${labelCurso} desmarcado. <br><small>${deck.length} cards restantes no SRS.</small>`);
    }

    atualizarChecklistTabs(t);
    if (t === 'kanji') atualizarUIProgressoKanji();
}

function atualizarChecklistTabs(mode) {
    const wrappers = document.querySelectorAll('#tabContainer .tab-item-wrapper');
    wrappers.forEach(wrapper => {
        const modIdx = parseInt(wrapper.getAttribute('data-mod-index'));
        const checkBtn = wrapper.querySelector('.tab-check-btn');
        if (!checkBtn) return;
        const isCompleted = eModuloAprendido(modIdx, mode);
        checkBtn.className = `tab-check-btn ${isCompleted ? 'completed' : ''}`;
        checkBtn.innerHTML = isCompleted ? '✅' : '⚪';
        checkBtn.title = isCompleted ? 'Módulo Concluído — clique para desmarcar' : 'Marcar como Concluído';
    });
}

function loadCourseModule(idx) {
    const mode = document.body.getAttribute('data-mode') || courseMode;

    if (mode === 'kanji') {
        renderKanjiModule(idx);
        return;
    }

    const dataBase = getCourseData(mode);
    if (!dataBase || !dataBase[idx]) return;
    const data = dataBase[idx];

    document.querySelectorAll('#tabContainer .tab-btn').forEach((btn, i) => {
        const wrapper = btn.closest('.tab-item-wrapper');
        const wrapperIdx = wrapper ? parseInt(wrapper.getAttribute('data-mod-index')) : i;
        btn.classList.toggle('active', wrapperIdx === idx);
    });
    const display = document.getElementById('moduleDisplay');
    if (!display) return;

    if (data.isReferenceTable) {
        let html = `<h2 class="module-title">${data.title}</h2><p style="margin-bottom:2rem; color:var(--text-muted);">${data.desc}</p>`;
        data.sections.forEach(sec => {
            if (!sec.items) return;
            let itemsHtml = sec.items.map(item => item && item.k ? `<div class="sound-tile" onclick="speakKana('${item.k}')"><span class="tile-kana">${item.k}</span><span class="tile-romaji">${item.r} 🔊</span></div>` : `<div class="sound-tile empty"></div>`).join('');
            html += `<h3 class="section-title">${sec.title}</h3><div class="${sec.cols === 5 ? 'soundboard-grid-5' : 'soundboard-grid-3'}">${itemsHtml}</div>`;
        });
        display.innerHTML = html;
        return;
    }

    let charsHtml = data.chars.map(c => `<div class="char-card"><div><div class="char-header"><span class="char-symbol kana-text">${c.char}</span><div><button class="audio-btn" onclick="speakKana('${c.char.split(' ')[0]}')">🔊</button><span class="char-romaji">${c.romaji}</span></div></div><div class="char-info"><strong>💡 Dica:</strong> ${c.mnemonic}</div></div><div class="char-info" style="margin-top:0.8rem; border-top:1px dashed var(--border-color); padding-top:0.5rem;"><strong>✏️ Traço:</strong> ${c.stroke}</div></div>`).join('');
    let vocabHtml = data.vocab.map(v => `<div class="vocab-card" style="grid-column: ${v.kana.length > 5 ? 'span 2' : 'span 1'};"><div class="vocab-kana kana-text" onclick="speakKana('${v.kana}')">${v.kana} 🔊</div><div class="vocab-romaji">${v.romaji}</div><div class="vocab-meaning">${v.meaning}</div></div>`).join('');
    let quizHtml = data.quiz.map((q, i) => `<div class="question-block"><div class="question-text"><span>${i + 1}. ${q.q}</span><span class="badge ${q.type === 'kana' ? 'kana' : 'romaji'}">${q.type === 'kana' ? (mode === 'hiragana' ? '✨ Vira Hiragana' : '✨ Vira Katakana') : '🔤 Romaji'}</span></div><input type="text" id="cq_${i}" class="quiz-input" ${q.type === 'kana' ? 'oninput="courseConvert(this)"' : ''} onkeydown="if(event.key==='Enter') checkCourseQuiz(${i}, '${q.a.replace(/'/g, "\\'")}', '${q.type}')" placeholder="${q.type === 'kana' ? 'Digite em Romaji...' : 'Ex: ka'}"><button class="quiz-btn" onclick="checkCourseQuiz(${i}, '${q.a.replace(/'/g, "\\'")}', '${q.type}')">Verificar</button><span id="cf_${i}" class="feedback"></span></div>`).join('');

    display.innerHTML = `<h2 class="module-title">${data.title}</h2><p style="margin-bottom:2rem; color:var(--text-muted);">${data.desc}</p><h3 class="section-title">🔤 Caracteres/Regras</h3><div class="char-grid">${charsHtml}</div><h3 class="section-title">📚 Vocabulário Prático</h3><div class="vocab-grid">${vocabHtml}</div><div class="quiz-section"><h3 class="section-title" style="margin-top:0;">🧠 Exercícios</h3>${quizHtml}</div>`;
}

function courseConvert(input) {
    let text = input.value;
    const mode = document.body.getAttribute('data-mode') || courseMode;
    const map = mode === 'hiragana' ? (typeof ROMAJI_HIRA_MAP !== 'undefined' ? ROMAJI_HIRA_MAP : {}) : (typeof ROMAJI_KATA_MAP !== 'undefined' ? ROMAJI_KATA_MAP : {});
    const sokuon = mode === 'hiragana' ? 'っ$1' : 'ッ$1';
    const nFinal = mode === 'hiragana' ? 'ん$1' : 'ン$1';
    text = text.replace(/([ksthmyrwbpzdjgcfv])\1/gi, sokuon);
    text = text.replace(/n([bcdfghjklmpqrstvwxz])/gi, nFinal);
    const keys = Object.keys(map).sort((a, b) => b.length - a.length);
    for (let key of keys) text = text.replace(new RegExp(key, 'gi'), map[key]);
    input.value = text;
}

function checkCourseQuiz(idx, correct, type) {
    const input = document.getElementById(`cq_${idx}`);
    const feed = document.getElementById(`cf_${idx}`);
    let ans = input.value.trim().toLowerCase();
    if (!ans) return;
    const mode = document.body.getAttribute('data-mode') || courseMode;
    if (type === 'kana') { ans = ans.replace(/n$/i, mode === 'hiragana' ? 'ん' : 'ン'); input.value = ans; }
    if (ans === correct.toLowerCase()) { feed.textContent = "✨ Correto!"; feed.className = "feedback correct"; playBeep('success'); }
    else { feed.textContent = `❌ Era: ${correct}`; feed.className = "feedback incorrect"; playBeep('error'); }
}

// ==========================================
// RENDERIZAÇÃO DO CURSO DE KANJI N5 (ESTRUTURA PERFEITA)
// ==========================================
function renderKanjiModule(moduleIndex) {
    const container = document.getElementById('moduleDisplay');
    const dataBase = typeof kanjiN5Data !== 'undefined' ? kanjiN5Data : null;
    if (!container || !dataBase) return;

    const moduleData = dataBase[moduleIndex];
    if (!moduleData) return;

    // Conclusão agora é manual via checklist — não auto-marca ao abrir

    container.innerHTML = '';

    // 1. CABEÇALHO DO MÓDULO (Topo)
    const headerDiv = document.createElement('div');
    headerDiv.className = 'module-header';
    headerDiv.innerHTML = `
        <h2 class="module-title">${moduleData.title}</h2>
        <p style="margin-bottom:2rem; color:var(--text-muted);">${moduleData.description}</p>
    `;
    container.appendChild(headerDiv);

    // VERIFICAÇÃO: Se for a Tabela Geral de Revisão (Módulo 10)
    if (moduleData.isReviewTable) {
        const gridDiv = document.createElement('div');
        gridDiv.className = 'review-grid-container';

        moduleData.kanjis.forEach(item => {
            const cell = document.createElement('div');
            cell.className = 'review-grid-cell';

            cell.innerHTML = `
                <div class="grid-char">${item.character}</div>
                <div class="grid-meaning">${item.meaning}</div>
                <div class="grid-readings">
                    <div><strong>K:</strong> ${item.kunyomi ? item.kunyomi.split(' ')[0] : '-'}</div>
                    <div><strong>O:</strong> ${item.onyomi ? item.onyomi.split(' ')[0] : '-'}</div>
                </div>
                <div class="grid-badge">Módulo ${item.originModule || '?'}</div>
            `;

            cell.addEventListener('click', (e) => {
                playKanjiAudio(item.character, e);
            });

            gridDiv.appendChild(cell);
        });

        container.appendChild(gridDiv);
        return; // Interrompe aqui: o Módulo 10 não tem cards normais nem quiz
    }

    // 2. CARDS DE ESTUDO DO MÓDULO (Meio da página)
    const gridDiv = document.createElement('div');
    gridDiv.className = 'kanji-grid';

    moduleData.kanjis.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'kana-card kanji-card-layout';
        card.style.animationDelay = `${index * 0.05}s`;

        let examplesHTML = '';
        if (item.examples && item.examples.length > 0) {
            examplesHTML = `<div class="kanji-examples-title">Exemplos & Gramática:</div>`;
            item.examples.forEach(ex => {
                examplesHTML += `
                    <div class="kanji-example-item">
                        <div class="ex-word">
                            ${ex.word} <span>(${ex.wordMeaning})</span>
                            <button class="audio-btn" onclick="playKanjiAudio('${ex.sentence}', event)" title="Ouvir frase">🔊</button>
                        </div>
                        <div class="ex-sentence">${ex.sentence}</div>
                        <div class="ex-translation">"${ex.sentenceMeaning}"</div>
                    </div>
                `;
            });
        }

        // Blindagem contra o undefined (só desenha se a dica existir)
        const mnemonicHTML = item.mnemonic
            ? `<div class="kanji-mnemonic">
                 <strong>💡 Dica Mnemônica:</strong> ${item.mnemonic}
               </div>`
            : '';

        card.innerHTML = `
            <div class="kanji-detail-grid">
                <div class="kanji-main-box">
                    <div class="kanji-char">${item.character}</div>
                    <div class="kanji-meaning">${item.meaning}</div>
                    <button class="audio-btn" onclick="playKanjiAudio('${item.character}', event)" style="width:100%; margin-top:12px; padding: 8px;">🔊 Ouvir Kanji</button>
                </div>
                <div class="kanji-info-box">
                    <div class="kanji-reading-group">
                        <span class="reading-label">Kunyomi (Japonês):</span>
                        <div class="reading-val kunyomi-val">${item.kunyomi || '-'}</div>
                    </div>
                    <div class="kanji-reading-group">
                        <span class="reading-label">Onyomi (Chino-Japonês):</span>
                        <div class="reading-val onyomi-val">${item.onyomi || '-'}</div>
                    </div>
                    ${mnemonicHTML}
                    ${examplesHTML}
                </div>
            </div>
        `;

        gridDiv.appendChild(card);
    });

    // Inserimos a grade de estudos no container ANTES dos exercícios
    container.appendChild(gridDiv);

    /// 3. EXERCÍCIOS DE FIXAÇÃO (Final da página)
    if (moduleData.quiz && moduleData.quiz.length > 0) {
        // Usa a função renderQuizQuestion para alternar entre input e múltipla escolha automaticamente
        let quizHtml = moduleData.quiz.map((q, i) => renderQuizQuestion(q, i)).join('');

        const quizDiv = document.createElement('div');
        quizDiv.className = 'quiz-section';
        quizDiv.style.marginTop = '40px';
        quizDiv.innerHTML = `<h3 class="section-title">🧠 Exercícios de Fixação do Módulo</h3>${quizHtml}`;

        // Inserimos o quiz POR ÚLTIMO
        container.appendChild(quizDiv);
    }
}

function playKanjiAudio(text, event) {
    if (event) event.stopPropagation();
    const cleanText = text.replace(/ \(.+\)/g, '').split('(')[0].trim();

    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    }
}

// ==========================================
// MÓDULO DO MINIGAME
// ==========================================
let globalHighScore = 0, globalMaxCombo = 0;
let isInfiniteLives = false, inputMode = 'typing';
let gPlayQueue = [], gLastPicked = "", gPool = [], gCard = null, gScore = 0, gLives = 3, gStreak = 0, gMaxStreak = 0, gProc = false;

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = 'ja-JP'; recognition.interimResults = false; recognition.maxAlternatives = 10;
    recognition.onresult = (event) => {
        document.getElementById('g-mic-btn').classList.remove('listening');
        let transcripts = [];
        for (let i = 0; i < event.results[0].length; i++) transcripts.push(event.results[0][i].transcript.trim());
        checkSpeechAnswer(transcripts);
    };
    recognition.onerror = (e) => {
        document.getElementById('g-mic-btn').classList.remove('listening');
        if (e.error === 'not-allowed') alert("Acesso ao microfone negado!");
        gProc = false;
    };
    recognition.onend = () => { document.getElementById('g-mic-btn').classList.remove('listening'); if (!gProc) gProc = false; }
}

function initGameScreen() {
    globalHighScore = parseInt(localStorage.getItem('ja_highScore')) || 0;
    globalMaxCombo = parseInt(localStorage.getItem('ja_maxCombo')) || 0;
    const hsElem = document.getElementById('menu-high-score');
    const mcElem = document.getElementById('menu-max-combo');
    if (hsElem) hsElem.textContent = globalHighScore;
    if (mcElem) mcElem.textContent = globalMaxCombo;

    document.querySelectorAll('.script-lbl').forEach(lbl => {
        lbl.onclick = () => {
            document.querySelectorAll('.script-lbl').forEach(l => l.classList.remove('active'));
            lbl.classList.add('active');
            const input = lbl.querySelector('input'); if (input) input.checked = true;
        }
    });

    document.querySelectorAll('.mode-lbl').forEach(lbl => {
        lbl.onclick = () => {
            document.querySelectorAll('.mode-lbl').forEach(l => l.classList.remove('active'));
            lbl.classList.add('active');
            const input = lbl.querySelector('input'); if (input) input.checked = true;
        }
    });

    const gameInput = document.getElementById('g-ans-input');
    if (gameInput) {
        gameInput.addEventListener('input', function () {
            if (!gCard) return;
            let text = this.value;
            const map = gCard.s === 'H' ? (typeof ROMAJI_HIRA_MAP !== 'undefined' ? ROMAJI_HIRA_MAP : {}) : (typeof ROMAJI_KATA_MAP !== 'undefined' ? ROMAJI_KATA_MAP : {});
            const sokuon = gCard.s === 'H' ? 'っ$1' : 'ッ$1'; const nFinal = gCard.s === 'H' ? 'ん$1' : 'ン$1';
            text = text.replace(/([ksthmyrwbpzdjgcfv])\1/gi, sokuon); text = text.replace(/n([bcdfghjklmpqrstvwxz])/gi, nFinal);
            const keys = Object.keys(map).sort((a, b) => b.length - a.length);
            for (let key of keys) text = text.replace(new RegExp(key, 'gi'), map[key]);
            this.value = text;
        });
    }

    document.addEventListener('keydown', function (e) {
        if (document.getElementById('game-play-screen') && document.getElementById('game-play-screen').style.display === 'block') {
            if (inputMode === 'voice' && e.code === 'Space') { e.preventDefault(); startListening(); }
        }
    });
}

function showGameTab(tab) {
    document.getElementById('game-menu-screen').style.display = 'none';
    document.getElementById('game-play-screen').style.display = 'none';
    document.getElementById('game-over-screen').style.display = 'none';
    if (tab === 'menu') {
        document.getElementById('menu-high-score').textContent = globalHighScore;
        document.getElementById('menu-max-combo').textContent = globalMaxCombo;
        document.getElementById('game-menu-screen').style.display = 'block';
    } else if (tab === 'play') {
        document.getElementById('game-play-screen').style.display = 'block';
    } else if (tab === 'over') {
        document.getElementById('game-over-screen').style.display = 'block';
    }
}

function exitGame() {
    if (!isInfiniteLives && gScore > globalHighScore) { globalHighScore = gScore; localStorage.setItem('ja_highScore', globalHighScore); }
    if (!isInfiniteLives && gMaxStreak > globalMaxCombo) { globalMaxCombo = gMaxStreak; localStorage.setItem('ja_maxCombo', globalMaxCombo); }
    showGameTab('menu');
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function startGame() {
    const mode = document.querySelector('input[name="script_mode"]:checked').value;
    inputMode = document.querySelector('input[name="input_mode"]:checked').value;
    isInfiniteLives = document.getElementById('g-infinite-lives').checked;

    const checkedMods = Array.from(document.querySelectorAll('.cat-cb:checked')).map(c => c.value).filter(val => val.startsWith('mod'));
    const checkedWords = Array.from(document.querySelectorAll('.cat-cb:checked')).map(c => c.value).filter(val => val.startsWith('words_'));

    if (!checkedMods.length && !checkedWords.length) return alert('Selecione pelo menos uma categoria!');

    playBeep('success');

    let allowedHiraChars = new Set();
    let allowedKataChars = new Set();
    const modsToUse = checkedMods.length > 0 ? checkedMods : ['mod1', 'mod2', 'mod3', 'mod4', 'mod5', 'mod6'];

    modsToUse.forEach(mod => {
        if (typeof RAW_H !== 'undefined' && RAW_H[mod]) { RAW_H[mod].forEach(i => { Array.from(i.k).forEach(ch => allowedHiraChars.add(ch)); }); }
        if (typeof RAW_K !== 'undefined' && RAW_K[mod]) { RAW_K[mod].forEach(i => { Array.from(i.k).forEach(ch => allowedKataChars.add(ch)); }); }
    });

    gPool = [];
    checkedMods.forEach(cat => {
        let modNum = parseInt(cat.replace('mod', ''));

        // Carrega Hiragana
        if ((mode === 'hiragana' || mode === 'both' || mode === 'all') && typeof RAW_H !== 'undefined' && RAW_H[cat]) {
            RAW_H[cat].forEach(i => gPool.push({ ...i, s: 'H', c: CAT_NAMES[cat] || cat.toUpperCase() }));
        }
        // Carrega Katakana
        if ((mode === 'katakana' || mode === 'both' || mode === 'all') && typeof RAW_K !== 'undefined' && RAW_K[cat]) {
            RAW_K[cat].forEach(i => gPool.push({ ...i, s: 'K', c: CAT_NAMES[cat] || cat.toUpperCase() }));
        }
        // Carrega Kanjis do N5 correspondentes ao módulo selecionado
        if ((mode === 'kanji' || mode === 'all') && typeof kanjiN5Data !== 'undefined') {
            let kMod = kanjiN5Data.find(m => m.module === modNum);
            if (kMod && kMod.kanjis && !kMod.isReviewTable) {
                kMod.kanjis.forEach(item => {
                    let reading = getKanjiReading(item);
                    gPool.push({
                        k: item.character,
                        r: reading,
                        m: item.meaning,
                        s: 'N', // Identificador para Kanji
                        c: `Módulo ${modNum} (Kanji)`
                    });
                });
            }
        }
    });

    // Vocabulário avançado/médio (caso selecionado)
    checkedWords.forEach(cat => {
        if ((mode === 'hiragana' || mode === 'both' || mode === 'all') && typeof RAW_H !== 'undefined' && RAW_H[cat]) {
            RAW_H[cat].forEach(w => { if (Array.from(w.k).every(ch => allowedHiraChars.has(ch))) gPool.push({ ...w, s: 'H', c: CAT_NAMES[cat] || cat.toUpperCase() }); });
        }
        if ((mode === 'katakana' || mode === 'both' || mode === 'all') && typeof RAW_K !== 'undefined' && RAW_K[cat]) {
            RAW_K[cat].forEach(w => { if (Array.from(w.k).every(ch => allowedKataChars.has(ch))) gPool.push({ ...w, s: 'K', c: CAT_NAMES[cat] || cat.toUpperCase() }); });
        }
    });

    if (!gPool.length) return alert('Nenhum item encontrado para os filtros selecionados.');

    gPlayQueue = []; gLastPicked = "";
    gScore = 0; gStreak = 0; gMaxStreak = 0; gLives = isInfiniteLives ? "♾️" : 3;

    showGameTab('play');

    if (inputMode === 'typing') {
        document.getElementById('g-ans-input').style.display = 'block';
        document.getElementById('g-mic-btn').style.display = 'none';
        document.getElementById('g-hint-text').innerHTML = 'Pressione <kbd style="background: var(--card-bg); border: 1px solid var(--border-color); padding: 2px 6px; border-radius: 4px; color: var(--text-main);">ENTER</kbd> para confirmar.';
    } else {
        document.getElementById('g-ans-input').style.display = 'none';
        document.getElementById('g-mic-btn').style.display = 'flex';
        document.getElementById('g-hint-text').innerHTML = 'Clique no microfone ou pressione a <kbd style="background: var(--card-bg); border: 1px solid var(--border-color); padding: 2px 6px; border-radius: 4px; color: var(--text-main);">BARRA DE ESPAÇO</kbd> para falar.';
    }

    nextGameCard();
}

function nextGameCard() {
    gProc = false;

    if (gPlayQueue.length === 0) {
        gPlayQueue = shuffleArray([...gPool]);
        if (gPlayQueue.length > 1 && gPlayQueue[0].k === gLastPicked) {
            const first = gPlayQueue.shift(); gPlayQueue.push(first);
        }
    }

    gCard = gPlayQueue.shift(); gLastPicked = gCard.k;

    document.getElementById('g-score').textContent = gScore;
    document.getElementById('g-lives').textContent = gLives;
    document.getElementById('g-combo').textContent = (isInfiniteLives ? '-' : gStreak + 'x');
    document.getElementById('g-badge').textContent = gCard.s === 'H' ? `HIRAGANA - ${gCard.c}` : gCard.s === 'K' ? `KATAKANA - ${gCard.c}` : `KANJI - ${gCard.c}`;

    const charDiv = document.getElementById('g-big-kana');
    charDiv.textContent = gCard.k;
    charDiv.style.fontSize = gCard.k.length > 4 ? '3.5rem' : gCard.k.length > 2 ? '4.5rem' : '7.5rem';

    const input = document.getElementById('g-ans-input');
    input.value = ''; if (inputMode === 'typing') input.focus();
    document.getElementById('g-feedback').style.opacity = '0';
    document.getElementById('g-card-main').className = 'g-card-area';
}

function processGameResult(isCorrect, heardText = "") {
    const feed = document.getElementById('g-feedback'); const card = document.getElementById('g-card-main');
    const meaningText = gCard.m ? ` ➔ ${gCard.m}` : ""; let isVoice = document.getElementById('g-mic-btn').style.display !== 'none';

    if (isCorrect) {
        playBeep('success'); speakKana(gCard.k);
        if (!isInfiniteLives) { gStreak++; if (gStreak > gMaxStreak) gMaxStreak = gStreak; gScore += 10 + Math.floor(gStreak / 5); }
        else { gStreak = 0; gScore += 10; }

        card.classList.add('pop', 'glow-success');
        let heardHtml = (isVoice && heardText) ? `<div style="font-size:0.85rem; color:#15803d; font-weight:normal; margin-top:6px; text-transform:none;">🗣️ Você disse: "${heardText}"</div>` : "";
        feed.innerHTML = `✨ Perfeito! (${gCard.r})${meaningText} ${heardHtml}`; feed.style.color = '#22c55e'; feed.style.opacity = '1';
        setTimeout(nextGameCard, 1200);
    } else {
        playBeep('error'); gStreak = 0; if (!isInfiniteLives) gLives--;
        card.classList.add('shake', 'glow-error');
        let heardHtml = (isVoice && heardText) ? `<div style="font-size:0.85rem; color:#b91c1c; font-weight:normal; margin-top:6px; text-transform:none;">🗣️ Microfone ouviu: "${heardText}"</div>` : "";
        feed.innerHTML = `❌ Era: ${gCard.k} (${gCard.r})${meaningText} ${heardHtml}`; feed.style.color = '#ef4444'; feed.style.opacity = '1';
        document.getElementById('g-lives').textContent = gLives;

        if (!isInfiniteLives && gLives <= 0) {
            if (gScore > globalHighScore) { globalHighScore = gScore; localStorage.setItem('ja_highScore', globalHighScore); }
            if (gMaxStreak > globalMaxCombo) { globalMaxCombo = gMaxStreak; localStorage.setItem('ja_maxCombo', globalMaxCombo); }
            setTimeout(() => { showGameTab('over'); document.getElementById('g-final-score').textContent = gScore; document.getElementById('g-final-combo').textContent = gMaxStreak + 'x'; }, 2000);
        } else {
            setTimeout(() => { card.classList.remove('shake', 'glow-error'); if (inputMode === 'typing') document.getElementById('g-ans-input').focus(); document.getElementById('g-ans-input').value = ''; gProc = false; }, 2000);
        }
    }
}

function checkTypingAnswer() {
    if (gProc) return;
    const input = document.getElementById('g-ans-input'); let ans = input.value.trim(); if (!ans) return; gProc = true;
    const isCorrect = ans === gCard.k || ans.toLowerCase() === gCard.r.toLowerCase() || (typeof wanakana !== 'undefined' && wanakana.toRomaji(ans) === gCard.r.toLowerCase());
    processGameResult(isCorrect);
}

function startListening() {
    if (gProc) return;
    if (!recognition) return alert("Seu navegador não suporta reconhecimento de voz.");
    document.getElementById('g-mic-btn').classList.add('listening');
    try { recognition.start(); } catch (e) { }
}

function cleanJapaneseText(text) {
    if (!text) return "";
    return text.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[\u3000-\u303F\uFF00-\uFFEF.,!?;:。、\sっッー~"'\u200B\uFEFF]/g, "")
        .trim();
}

function normalizePhonetic(text) {
    if (!text) return "";
    
    // 1. Limpeza estrita de pontuação japonesa e ocidental ANTES do Wanakana
    let clean = cleanJapaneseText(text);

    // 2. Fallback de letra isolada do alfabeto ocidental (ex: "B." / "B" -> "bi")
    if (ALPHABET_LETTER_MAP[clean]) {
        let mapped = ALPHABET_LETTER_MAP[clean];
        clean = Array.isArray(mapped) ? mapped[0] : mapped;
    }

    clean = clean.toLowerCase();

    // 3. Substituição de V inicial por B (ex: 'vo' -> 'bo', 'va' -> 'ba')
    if (/^v[aeiou]/i.test(clean)) {
        clean = 'b' + clean.slice(1);
    }
    
    // 4. Desduplicação de vogais finais repetidas (ex: 'booo' -> 'bo', 'neee' -> 'ne')
    clean = clean.replace(/([aeiou])\1+$/g, "$1");

    // 5. Conversão para Romaji via Wanakana
    let romaji = (typeof wanakana !== 'undefined') ? wanakana.toRomaji(clean) : clean;
    romaji = romaji.toLowerCase();

    // 6. Limpeza estrita DEPOIS do Wanakana (garante remoção de pontos/espaços residuais)
    romaji = romaji.replace(/[^a-z0-9]/g, "").trim();

    // 7. Normalização de vogais longas equivalentes
    romaji = romaji
        .replace(/ou/g, "o")
        .replace(/oo/g, "o")
        .replace(/ei/g, "e")
        .replace(/ee/g, "e")
        .replace(/uu/g, "u")
        .replace(/ii/g, "i")
        .replace(/aa/g, "a");

    // 8. Desduplicação final de vogais no romaji
    romaji = romaji.replace(/([aeiou])\1+$/g, "$1");

    return romaji;
}

function levenshtein(a, b) {
    const matrix = []; 
    for (let i = 0; i <= b.length; i++) matrix[i] = [i]; 
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, 
                    Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

function checkSpeechAnswer(transcripts) {
    if (gProc) return; 
    gProc = true; 
    let isCorrect = false; 
    let heardText = transcripts[0] || "...";

    // Resposta esperada convertida para Romaji limpo (Moeda Única de Comparação)
    let rawExpectedKana = cleanJapaneseText(gCard.k);
    let expectedRomaji = normalizePhonetic(gCard.k || gCard.r);

    console.log(`[Speech Debug] Target: "${gCard.k}" (Romaji Esperado: "${expectedRomaji}") | Hypotheses:`, transcripts);

    const isSingleSyllable = expectedRomaji.length <= 4 && (KANAI_SINGLE_SYLLABLE_MAP[expectedRomaji] || expectedRomaji.length <= 3);

    for (let t of transcripts) {
        // 1. Limpeza Estrita de Entrada (Sanitization Japonesa & Ocidental)
        let rawClean = cleanJapaneseText(t);

        // 2. Mapeamento Fallback de Letras Ocidentais Isoladas
        let alphabetFallbackRomajis = ALPHABET_LETTER_MAP[rawClean] || [];
        if (typeof alphabetFallbackRomajis === 'string') alphabetFallbackRomajis = [alphabetFallbackRomajis];

        // 3. Normalização Universal para Romaji (Moeda Única)
        let romajiConvertido = normalizePhonetic(t);

        console.log(`🎤 Microfone ouviu: "${t}" -> Limpo: "${rawClean}" -> Romaji: "${romajiConvertido}" -> Esperado: "${expectedRomaji}"`);

        // Trata vogais isoladas (ex: "ha" para "a")
        if (/^[aeiou]$/.test(expectedRomaji) && romajiConvertido === `h${expectedRomaji}`) {
            romajiConvertido = expectedRomaji;
        }

        // ==========================================
        // CRITÉRIO 1: COMPARAÇÃO DE MOEDA ÚNICA (ROMAJI <-> ROMAJI)
        // Katakana (ゼ。) <-> Hiragana (ぜ) -> ze === ze!
        // ==========================================
        if (
            romajiConvertido === expectedRomaji || 
            alphabetFallbackRomajis.includes(expectedRomaji)
        ) {
            isCorrect = true;
            heardText = t;
            break;
        }

        // ==========================================
        // CRITÉRIO 2: EQUIVALÊNCIA DIRETA DE KANA LIMPO
        // ==========================================
        if (rawClean === rawExpectedKana || (gCard.a && gCard.a.includes(rawClean))) {
            isCorrect = true;
            heardText = t;
            break;
        }

        // ==========================================
        // CRITÉRIO 3: HOMÓFONOS E KANJIS MAPEADOS
        // ==========================================
        const homophoneList = KANJI_HOMOPHONE_MAP[expectedRomaji] || [];
        if (
            homophoneList.includes(rawClean) || 
            homophoneList.includes(romajiConvertido)
        ) {
            isCorrect = true;
            heardText = t;
            break;
        }

        // ==========================================
        // CRITÉRIO 4: TOLERÂNCIA DAKUON / HANDAKUON
        // (ex: 'go' para 'gu', 'be' para 'bi', 'ze' para 'zo')
        // ==========================================
        let inSameDakuonFamily = DAKUON_FAMILIES.some(family => 
            family.includes(expectedRomaji) && (family.includes(romajiConvertido) || alphabetFallbackRomajis.some(r => family.includes(r)))
        );
        if (inSameDakuonFamily) {
            isCorrect = true;
            heardText = t;
            break;
        }

        // Prefixo para 1 sílaba (ex: "nii" para "ni")
        if (isSingleSyllable) {
            if (romajiConvertido.startsWith(expectedRomaji) || rawClean.startsWith(rawExpectedKana)) {
                isCorrect = true;
                heardText = t;
                break;
            }
            continue;
        }

        // ==========================================
        // FLUXO PARA PALAVRAS DE 2 OU MAIS SÍLABAS
        // ==========================================
        if (expectedRomaji === "n" || rawExpectedKana === "ん" || rawExpectedKana === "ン") {
            if (["m", "n", "nn", "ng", "um", "un", "hum", "uh", "en", "an", "on"].includes(romajiConvertido)) {
                isCorrect = true; 
                heardText = t;
                break;
            }
        }

        let maxAllowedDist = expectedRomaji.length >= 8 ? 3 : (expectedRomaji.length <= 4 ? 1 : 2);
        let dist = levenshtein(romajiConvertido, expectedRomaji);
        if (
            dist <= maxAllowedDist || 
            romajiConvertido.includes(expectedRomaji) || 
            expectedRomaji.includes(romajiConvertido)
        ) {
            isCorrect = true;
            heardText = t;
            break;
        }
    }

    processGameResult(isCorrect, heardText);
}

// ==========================================
// INICIALIZAÇÃO ÚNICA DA APLICAÇÃO
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    applySavedTheme();
    setupSmoothTransitions();

    const mode = document.body.getAttribute('data-mode') || courseMode;

    if (mode === 'curso' || mode === 'japa') {
        document.documentElement.style.setProperty('--current-primary', 'var(--japa-primary)');
        atualizarUIProgresso();
    } else if (mode === 'hiragana' || mode === 'katakana' || mode === 'kanji') {
        let primaryColor = 'var(--hira-primary)';
        if (mode === 'katakana') primaryColor = 'var(--kata-primary)';
        if (mode === 'kanji') primaryColor = 'var(--kanji-primary)';

        document.documentElement.style.setProperty('--current-primary', primaryColor);

        // Se estiver na pagina do Hub de Kanjis (kanji.html)
        if (document.getElementById('dashboard-progresso-kanji')) {
            atualizarUIProgressoKanji();
        } else if (document.getElementById('tabContainer')) {
            renderCourseTabs();
            loadCourseModule(0);
        }
        atualizarBadgeSRS(mode);
    } else if (mode === 'game') {
        document.documentElement.style.setProperty('--current-primary', 'var(--game-primary)');
        initGameScreen();
    }
});

function renderQuizQuestion(questionObj, index) {
    let html = `<div class="quiz-question">`;
    html += `<p><strong>Questão ${index + 1}:</strong> ${questionObj.q}</p>`;

    if (questionObj.type === "choice") {
        questionObj.options.forEach(option => {
            html += `<button class="quiz-option-btn" onclick="checkAnswer(this, '${option}', '${questionObj.a}')">${option}</button>`;
        });

    } else {
        // Renderiza input e botão de texto modernos lado a lado
        html += `<div class="quiz-input-group">`;
        html += `<input type="text" id="quiz-input-${index}" class="quiz-input" placeholder="Digite em romaji ou português..." onkeydown="if(event.key==='Enter') checkTextAnswer(${index}, '${questionObj.a}')">`;
        html += `<button class="quiz-btn" onclick="checkTextAnswer(${index}, '${questionObj.a}')">Responder</button>`;
        html += `</div>`;
        html += `<span id="quiz-feedback-${index}" class="quiz-feedback-text"></span>`;
    }

    html += `</div>`;
    return html;
}

function checkTextAnswer(index, correct) {
    const input = document.getElementById(`quiz-input-${index}`);
    const feedback = document.getElementById(`quiz-feedback-${index}`);
    if (!input || !feedback) return;

    const val = input.value.trim().toLowerCase();
    if (!val) return;

    if (val === correct.toLowerCase()) {
        input.style.borderColor = '#22c55e';
        input.style.backgroundColor = '#f0fdf4';
        feedback.textContent = "✨ Correto!";
        feedback.className = "quiz-feedback-text correct";
        playBeep('success');
    } else {
        input.style.borderColor = '#ef4444';
        input.style.backgroundColor = '#fef2f2';
        feedback.textContent = `❌ Incorreto. A resposta certa era: ${correct}`;
        feedback.className = "quiz-feedback-text incorrect";
        playBeep('error');
    }
}

function checkAnswer(buttonElement, selected, correct) {
    const parentBlock = buttonElement.closest('.quiz-question');
    const allButtons = parentBlock.querySelectorAll('.quiz-option-btn');

    // Desativa todos os botões daquela questão para impedir novos cliques
    allButtons.forEach(btn => btn.disabled = true);

    // Compara ignorando maiúsculas/minúsculas e espaços extras
    const isCorrect = selected.trim().toLowerCase() === correct.trim().toLowerCase();

    if (isCorrect) {
        buttonElement.style.backgroundColor = '#22c55e';
        buttonElement.style.color = '#fff';
        buttonElement.style.borderColor = '#22c55e';
        playBeep('success');
    } else {
        // Pinta de vermelho o botão que o usuário errou
        buttonElement.style.backgroundColor = '#ef4444';
        buttonElement.style.color = '#fff';
        buttonElement.style.borderColor = '#ef4444';
        playBeep('error');

        // Destaca automaticamente qual era a alternativa correta em verde
        allButtons.forEach(btn => {
            if (btn.textContent.trim().toLowerCase() === correct.trim().toLowerCase()) {
                btn.style.backgroundColor = '#22c55e';
                btn.style.color = '#fff';
                btn.style.borderColor = '#22c55e';
            }
        });
    }
}

function getKanjiReading(item) {
    if (item.kunyomi && item.kunyomi !== '-') {
        let clean = item.kunyomi.split('/')[0].split('(')[0].trim();
        return clean.toLowerCase();
    } else if (item.onyomi && item.onyomi !== '-') {
        let clean = item.onyomi.split('/')[0].split('(')[0].trim();
        return clean.toLowerCase();
    }
    return item.meaning.toLowerCase();
}

// ==========================================
// MOTOR UNIFICADO DO CURSO DE JAPONÊS (JAPÃO ACADEMY)
// ==========================================

let nivelAtivo = 'A1'; // 'A1', 'A2', 'B1' ou 'B2'
let modoDesbloqueado = JSON.parse(localStorage.getItem('ja_modo_desbloqueado')) || false;
let nomeUsuario = localStorage.getItem('ja_nome_usuario') || 'Estudante';
let moduloAtivoIndex = 0;
let etapaAtual = 1;
let dropAtual = 0;

// ESTRUTURA UNIFICADA DOS 4 NÍVEIS DO CURSO (105 MÓDULOS NO TOTAL)
function getTodosOsCursos() {
    return {
        A1: (typeof CURSO_A1_DADOS !== 'undefined') ? CURSO_A1_DADOS : [],
        A2: (typeof CURSO_A2_DADOS !== 'undefined') ? CURSO_A2_DADOS : [],
        B1: (typeof CURSO_B1_DADOS !== 'undefined') ? CURSO_B1_DADOS : [],
        B2: (typeof CURSO_B2_DADOS !== 'undefined') ? CURSO_B2_DADOS : []
    };
}

function obterModuloPorId(id) {
    const cursos = getTodosOsCursos();
    for (const lvl in cursos) {
        const mod = cursos[lvl].find(m => m.id === id);
        if (mod) return mod;
    }
    return null;
}

// PERSISTÊNCIA UNIFICADA EM LOCALSTORAGE UNDER 'japao_academy_progress'
let progressoGlobal = carregarProgressoGlobal();

function carregarProgressoGlobal() {
    const salvo = localStorage.getItem('japao_academy_progress');
    let res = null;
    if (salvo) {
        try {
            res = JSON.parse(salvo);
        } catch (e) {
            console.error("Erro ao ler japao_academy_progress:", e);
        }
    }

    if (!res) {
        // Migração transparente de storages antigos se existirem
        const legacyA1Done = JSON.parse(localStorage.getItem('ja_modulos_concluidos')) || [];
        const legacyA2Done = JSON.parse(localStorage.getItem('ja_modulos_concluidos_a2')) || [];
        const legacyB1Done = JSON.parse(localStorage.getItem('ja_modulos_concluidos_b1')) || [];
        const legacyB2Done = JSON.parse(localStorage.getItem('ja_modulos_concluidos_b2')) || [];

        const legacyA1Desb = JSON.parse(localStorage.getItem('ja_progresso_a1')) || [0];
        const legacyA2Desb = JSON.parse(localStorage.getItem('ja_progresso_a2')) || [0];
        const legacyB1Desb = JSON.parse(localStorage.getItem('ja_progresso_b1')) || [0];
        const legacyB2Desb = JSON.parse(localStorage.getItem('ja_progresso_b2')) || [0];

        const cursos = getTodosOsCursos();
        const conc = [];
        const desb = ["a1_mod_01"];

        if (cursos.A1) {
            legacyA1Done.forEach(idx => { if (cursos.A1[idx]) conc.push(cursos.A1[idx].id); });
            legacyA1Desb.forEach(idx => { if (cursos.A1[idx]) desb.push(cursos.A1[idx].id); });
        }
        if (cursos.A2) {
            legacyA2Done.forEach(idx => { if (cursos.A2[idx]) conc.push(cursos.A2[idx].id); });
            legacyA2Desb.forEach(idx => { if (cursos.A2[idx]) desb.push(cursos.A2[idx].id); });
        }
        if (cursos.B1) {
            legacyB1Done.forEach(idx => { if (cursos.B1[idx]) conc.push(cursos.B1[idx].id); });
            legacyB1Desb.forEach(idx => { if (cursos.B1[idx]) desb.push(cursos.B1[idx].id); });
        }
        if (cursos.B2) {
            legacyB2Done.forEach(idx => { if (cursos.B2[idx]) conc.push(cursos.B2[idx].id); });
            legacyB2Desb.forEach(idx => { if (cursos.B2[idx]) desb.push(cursos.B2[idx].id); });
        }

        res = {
            modulosConcluidos: Array.from(new Set(conc)),
            modulosDesbloqueados: Array.from(new Set(desb)),
            xpTotal: 0,
            nivelAtual: "A1"
        };
    }

    if (!Array.isArray(res.modulosConcluidos)) res.modulosConcluidos = [];
    if (!Array.isArray(res.modulosDesbloqueados)) res.modulosDesbloqueados = ["a1_mod_01"];
    if (!Array.isArray(res.progress_hiragana)) res.progress_hiragana = [];
    if (!Array.isArray(res.progress_katakana)) res.progress_katakana = [];
    if (!Array.isArray(res.progress_kanji)) res.progress_kanji = [];
    res.progress_curso_principal = res.modulosConcluidos;

    // Sincroniza leitura dedicada do japao_academy_kanji_progress
    const kanjiSalvo = localStorage.getItem('japao_academy_kanji_progress');
    if (kanjiSalvo) {
        try {
            const kData = JSON.parse(kanjiSalvo);
            if (kData && Array.isArray(kData.progress_kanji)) {
                res.progress_kanji = Array.from(new Set([...res.progress_kanji, ...kData.progress_kanji]));
            }
        } catch (e) { }
    }

    localStorage.setItem('japao_academy_progress', JSON.stringify(res));
    return res;
}

function salvarProgressoGlobal() {
    localStorage.setItem('japao_academy_progress', JSON.stringify(progressoGlobal));
    
    // Sincroniza legados para retrocompatibilidade
    const cursos = getTodosOsCursos();
    if (cursos.A1) {
        const concIdx = cursos.A1.map((m, i) => progressoGlobal.modulosConcluidos.includes(m.id) ? i : -1).filter(i => i !== -1);
        const desbIdx = cursos.A1.map((m, i) => (progressoGlobal.modulosDesbloqueados.includes(m.id) || i === 0) ? i : -1).filter(i => i !== -1);
        localStorage.setItem('ja_modulos_concluidos', JSON.stringify(concIdx));
        localStorage.setItem('ja_progresso_a1', JSON.stringify(desbIdx));
    }
    if (cursos.A2) {
        const concIdx = cursos.A2.map((m, i) => progressoGlobal.modulosConcluidos.includes(m.id) ? i : -1).filter(i => i !== -1);
        const desbIdx = cursos.A2.map((m, i) => (progressoGlobal.modulosDesbloqueados.includes(m.id) || i === 0) ? i : -1).filter(i => i !== -1);
        localStorage.setItem('ja_modulos_concluidos_a2', JSON.stringify(concIdx));
        localStorage.setItem('ja_progresso_a2', JSON.stringify(desbIdx));
    }
    if (cursos.B1) {
        const concIdx = cursos.B1.map((m, i) => progressoGlobal.modulosConcluidos.includes(m.id) ? i : -1).filter(i => i !== -1);
        const desbIdx = cursos.B1.map((m, i) => (progressoGlobal.modulosDesbloqueados.includes(m.id) || i === 0) ? i : -1).filter(i => i !== -1);
        localStorage.setItem('ja_modulos_concluidos_b1', JSON.stringify(concIdx));
        localStorage.setItem('ja_progresso_b1', JSON.stringify(desbIdx));
    }
    if (cursos.B2) {
        const concIdx = cursos.B2.map((m, i) => progressoGlobal.modulosConcluidos.includes(m.id) ? i : -1).filter(i => i !== -1);
        const desbIdx = cursos.B2.map((m, i) => (progressoGlobal.modulosDesbloqueados.includes(m.id) || i === 0) ? i : -1).filter(i => i !== -1);
        localStorage.setItem('ja_modulos_concluidos_b2', JSON.stringify(concIdx));
        localStorage.setItem('ja_progresso_b2', JSON.stringify(desbIdx));
    }

    // Persistência isolada de Kanji no localStorage em 'japao_academy_kanji_progress'
    const concKanjiCount = (progressoGlobal.progress_kanji || []).length;
    localStorage.setItem('japao_academy_kanji_progress', JSON.stringify({
        progress_kanji: progressoGlobal.progress_kanji || [],
        xpTotal: concKanjiCount * 100,
        modulosConcluidosN5: progressoGlobal.progress_kanji || []
    }));
}

// ==========================================
// LÓGICA DE PROGRESSÃO E HUB DO CURSO DE KANJI (N5 a N1)
// ==========================================
function eNivelKanjiDesbloqueado(nivelJLPT) {
    if (modoDesbloqueado) return true;
    const lvl = (nivelJLPT || 'N5').toUpperCase();
    if (lvl === 'N5') return true;

    // N4 só desbloqueia após concluir TODOS os módulos do N5 (10 módulos)
    if (lvl === 'N4') {
        const totalN5 = (typeof kanjiN5Data !== 'undefined' ? kanjiN5Data.length : 10);
        const concN5 = (progressoGlobal.progress_kanji || []).length;
        return concN5 >= totalN5;
    }
    if (lvl === 'N3') return eNivelKanjiDesbloqueado('N4') && false;
    if (lvl === 'N2') return eNivelKanjiDesbloqueado('N3') && false;
    if (lvl === 'N1') return eNivelKanjiDesbloqueado('N2') && false;
    return false;
}

function abrirTrilhaKanji(nivelJLPT) {
    const lvl = (nivelJLPT || 'N5').toUpperCase();

    if (lvl === 'N5') {
        window.location.href = 'kanji_n5.html';
        return;
    }

    if (!eNivelKanjiDesbloqueado(lvl)) {
        const nivelAnterior = (lvl === 'N4') ? 'N5' : (lvl === 'N3') ? 'N4' : (lvl === 'N2') ? 'N3' : 'N2';
        alert(`🔒 Conclua todos os módulos do Nível ${nivelAnterior} para liberar o Nível ${lvl}!`);
        return;
    }

    alert(`✨ O Nível ${lvl} estará disponível em breve no Japão Academy!`);
}

function calcularProgressoKanjiGlobal() {
    const totalN5 = (typeof kanjiN5Data !== 'undefined' ? kanjiN5Data.length : 10);
    const concCount = (progressoGlobal.progress_kanji || []).length;
    const percentual = totalN5 > 0 ? Math.min(100, Math.round((concCount / totalN5) * 100)) : 0;
    const xpCalculado = concCount * 100;

    const elPercent = document.getElementById('progresso-kanji-percent');
    const elXP = document.getElementById('progresso-kanji-xp');
    const elBar = document.getElementById('progresso-kanji-bar');
    const elSubtext = document.getElementById('progresso-kanji-subtext');

    if (elPercent) elPercent.innerText = `${percentual}%`;
    if (elXP) elXP.innerText = `${xpCalculado} XP`;
    if (elBar) elBar.style.width = `${percentual}%`;
    if (elSubtext) elSubtext.innerText = `${concCount} / ${totalN5} Módulos Dominados no N5`;

    return { percentual, concCount, totalN5, xpCalculado };
}

function atualizarUIProgressoKanji() {
    calcularProgressoKanjiGlobal();

    ['N5', 'N4', 'N3', 'N2', 'N1'].forEach(lvl => {
        const card = document.getElementById(`card-kanji-${lvl.toLowerCase()}`);
        const tag = document.getElementById(`tag-kanji-${lvl.toLowerCase()}`);
        const desb = eNivelKanjiDesbloqueado(lvl);

        if (card) {
            if (desb) {
                card.classList.remove('bloqueado');
                if (tag) {
                    tag.innerText = "DISPONÍVEL";
                    tag.style.background = (lvl === 'N5') ? "#22c55e" : "#b45309";
                }
            } else {
                card.classList.add('bloqueado');
                if (tag) {
                    tag.innerText = "🔒 BLOQUEADO";
                    tag.style.background = "var(--text-muted)";
                }
            }
        }
    });
}

// LÓGICA DE VERIFICAÇÃO DE DESBLOQUEIO DE NÍVEIS E MÓDULOS (PROGRESSÃO GRADUAL)
function eNivelDesbloqueado(nivel) {
    if (modoDesbloqueado) return true;
    const lvl = nivel.toUpperCase();
    if (lvl === 'A1') return true;
    if (lvl === 'A2') return progressoGlobal.modulosConcluidos.includes('a1_mod_31');
    if (lvl === 'B1') return progressoGlobal.modulosConcluidos.includes('a2_mod_30');
    if (lvl === 'B2') return progressoGlobal.modulosConcluidos.includes('b1_mod_24');
    return false;
}

function eModuloDesbloqueado(modId, nivel, idx) {
    if (modoDesbloqueado) return true;
    if (!eNivelDesbloqueado(nivel)) return false;
    if (idx === 0) return true;
    if (progressoGlobal.modulosDesbloqueados.includes(modId)) return true;

    const cursos = getTodosOsCursos();
    const dadosLvl = cursos[nivel.toUpperCase()];
    if (dadosLvl && idx > 0) {
        const modAnterior = dadosLvl[idx - 1];
        return modAnterior ? progressoGlobal.modulosConcluidos.includes(modAnterior.id) : false;
    }
    return false;
}

function eModuloAprendido(modIdx, nivel = 'a1') {
    if (modoDesbloqueado) return true;
    const t = nivel ? nivel.toLowerCase() : 'a1';

    if (t === 'hiragana') {
        return (progressoGlobal.progress_hiragana || []).includes(modIdx);
    }
    if (t === 'katakana') {
        return (progressoGlobal.progress_katakana || []).includes(modIdx);
    }
    if (t === 'kanji') {
        return (progressoGlobal.progress_kanji || []).includes(modIdx);
    }

    const cursos = getTodosOsCursos();
    const lvlKey = t.toUpperCase();
    const dadosLvl = cursos[lvlKey];
    if (!dadosLvl || !dadosLvl[modIdx]) return false;
    return progressoGlobal.modulosConcluidos.includes(dadosLvl[modIdx].id);
}

function concluirModuloHiragana(modIdx) {
    if (!progressoGlobal.progress_hiragana) progressoGlobal.progress_hiragana = [];
    if (!progressoGlobal.progress_hiragana.includes(modIdx)) {
        progressoGlobal.progress_hiragana.push(modIdx);
        salvarProgressoGlobal();
        sincronizarBaralhoSRS('hiragana');
    }
}

function concluirModuloKatakana(modIdx) {
    if (!progressoGlobal.progress_katakana) progressoGlobal.progress_katakana = [];
    if (!progressoGlobal.progress_katakana.includes(modIdx)) {
        progressoGlobal.progress_katakana.push(modIdx);
        salvarProgressoGlobal();
        sincronizarBaralhoSRS('katakana');
    }
}

function concluirModuloKanji(modIdx) {
    if (!progressoGlobal.progress_kanji) progressoGlobal.progress_kanji = [];
    if (!progressoGlobal.progress_kanji.includes(modIdx)) {
        progressoGlobal.progress_kanji.push(modIdx);
        salvarProgressoGlobal();
        sincronizarBaralhoSRS('kanji');
    }
}

function getDadosCursoAtivo() {
    const cursos = getTodosOsCursos();
    return cursos[nivelAtivo.toUpperCase()] || [];
}

// CÁLCULO GLOBAL DE CONCLUSÃO E XP
function calcularProgressoGlobal() {
    const cursos = getTodosOsCursos();
    let totalModulos = 0;
    let concluidosCount = 0;
    let xpCalculado = 0;

    ['A1', 'A2', 'B1', 'B2'].forEach(lvl => {
        const mods = cursos[lvl] || [];
        totalModulos += mods.length;
        mods.forEach(m => {
            if (progressoGlobal.modulosConcluidos.includes(m.id)) {
                concluidosCount++;
                xpCalculado += (m.xpReward || 100);
            }
        });
    });

    const percentualTotal = totalModulos > 0 ? Math.round((concluidosCount / totalModulos) * 100) : 0;
    progressoGlobal.xpTotal = xpCalculado;
    salvarProgressoGlobal();

    const elPercent = document.getElementById('progresso-global-percent');
    const elXP = document.getElementById('progresso-global-xp');
    const elBar = document.getElementById('progresso-global-bar');

    if (elPercent) elPercent.innerText = `${percentualTotal}%`;
    if (elXP) elXP.innerText = `${xpCalculado} XP`;
    if (elBar) elBar.style.width = `${percentualTotal}%`;

    return { percentualTotal, concluidosCount, totalModulos, xpCalculado };
}

function fNome(texto) {
    if (!texto) return "";
    return texto.replace(/\[\s*(Seu )?Nome\s*\]/gi, `<strong style="color: #e63946; text-decoration: underline;">${nomeUsuario}</strong>`);
}

function atualizarNomeUsuario(valor) {
    nomeUsuario = valor.trim() || 'Estudante';
    localStorage.setItem('ja_nome_usuario', nomeUsuario);
}

// Sincroniza os botões e cadeados na tela com a memória salva
function atualizarUIProgresso() {
    const check = document.getElementById('check-desbloquear');
    if (check) check.checked = modoDesbloqueado;

    const inputNome = document.getElementById('input-nome-usuario');
    if (inputNome && nomeUsuario !== 'Estudante') inputNome.value = nomeUsuario;

    calcularProgressoGlobal();

    // Atualiza cards de Nível no Hub
    const cardA1 = document.getElementById('card-nivel-a1');
    const cardA2 = document.getElementById('card-nivel-a2');
    const cardB1 = document.getElementById('card-nivel-b1');
    const cardB2 = document.getElementById('card-nivel-b2');

    const tagA1 = document.getElementById('tag-nivel-a1');
    const tagA2 = document.getElementById('tag-nivel-a2');
    const tagB1 = document.getElementById('tag-nivel-b1');
    const tagB2 = document.getElementById('tag-nivel-b2');

    if (cardA1) cardA1.classList.remove('bloqueado');
    
    if (cardA2) {
        if (eNivelDesbloqueado('A2')) {
            cardA2.classList.remove('bloqueado');
            if (tagA2) { tagA2.innerText = "DISPONÍVEL"; tagA2.style.background = "#e63946"; }
        } else {
            cardA2.classList.add('bloqueado');
            if (tagA2) { tagA2.innerText = "🔒 BLOQUEADO"; tagA2.style.background = "var(--text-muted)"; }
        }
    }
    if (cardB1) {
        if (eNivelDesbloqueado('B1')) {
            cardB1.classList.remove('bloqueado');
            if (tagB1) { tagB1.innerText = "DISPONÍVEL"; tagB1.style.background = "#028090"; }
        } else {
            cardB1.classList.add('bloqueado');
            if (tagB1) { tagB1.innerText = "🔒 BLOQUEADO"; tagB1.style.background = "var(--text-muted)"; }
        }
    }
    if (cardB2) {
        if (eNivelDesbloqueado('B2')) {
            cardB2.classList.remove('bloqueado');
            if (tagB2) { tagB2.innerText = "DISPONÍVEL"; tagB2.style.background = "#b45309"; }
        } else {
            cardB2.classList.add('bloqueado');
            if (tagB2) { tagB2.innerText = "🔒 BLOQUEADO"; tagB2.style.background = "var(--text-muted)"; }
        }
    }

    const btnCertHub = document.getElementById('btn-ver-certificado-hub');
    if (btnCertHub) {
        btnCertHub.style.display = progressoGlobal.b2_certified ? 'block' : 'none';
    }

    const cursos = getTodosOsCursos();
    const prefixos = { A1: '', A2: 'a2-', B1: 'b1-', B2: 'b2-' };

    ['A1', 'A2', 'B1', 'B2'].forEach(lvl => {
        const pfx = prefixos[lvl];
        const dadosLvl = cursos[lvl];
        if (dadosLvl) {
            dadosLvl.forEach((mod, idx) => {
                const btn = document.getElementById(`mod-${pfx}${idx}-btn`);
                if (!btn) return;

                const desbloqueado = eModuloDesbloqueado(mod.id, lvl, idx);
                const concluido = progressoGlobal.modulosConcluidos.includes(mod.id);

                if (desbloqueado) {
                    btn.disabled = false;
                    btn.classList.remove('bloqueado');
                    btn.innerHTML = concluido ? `✅ ${fNome(mod.title)}` : `🔓 ${fNome(mod.title)}`;
                } else {
                    btn.disabled = true;
                    btn.classList.add('bloqueado');
                    btn.innerHTML = `🔒 ${fNome(mod.title)} (Bloqueado)`;
                }
            });
        }
    });

    atualizarBadgeSRS();
}

function initApp() {
    progressoGlobal = carregarProgressoGlobal();
    if (progressoGlobal.nivelAtual) nivelAtivo = progressoGlobal.nivelAtual;
    calcularProgressoGlobal();
    atualizarUIProgresso();
    console.log("🚀 Japão Academy Inicializado | Nível Ativo:", nivelAtivo, "| Módulos Concluídos:", progressoGlobal.modulosConcluidos.length, "/ 105");
}

document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

// ==========================================
// SISTEMA DE SRS MODULAR E ISOLADO POR CURSO
// ==========================================
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
    if (t === 'kanji') return 'ja_srs_kanji_deck';
    if (t === 'a2') return 'ja_srs_a2_deck';
    if (t === 'b1') return 'ja_srs_b1_deck';
    if (t === 'b2') return 'ja_srs_b2_deck';
    return 'ja_srs_deck';
}

function carregarDeckSRS(tipo) {
    const key = getDeckKeySRS(tipo);
    return JSON.parse(localStorage.getItem(key)) || [];
}

function salvarDeckSRS(tipo, deck) {
    const key = getDeckKeySRS(tipo);
    localStorage.setItem(key, JSON.stringify(deck));
}

// Sincroniza os itens aprendidos da modalidade especificada com o seu baralho isolado
function sincronizarBaralhoSRS(tipo = 'a1') {
    if (!tipo) tipo = (typeof nivelAtivo !== 'undefined' && nivelAtivo) ? nivelAtivo.toLowerCase() : 'a1';
    const t = tipo.toLowerCase();
    let deck = carregarDeckSRS(t);
    let alterado = false;
    let modulosConcluidosNomes = [];

    let dadosCurso = null;
    if (t === 'a1' && typeof CURSO_A1_DADOS !== 'undefined') dadosCurso = CURSO_A1_DADOS;
    else if (t === 'a2' && typeof CURSO_A2_DADOS !== 'undefined') dadosCurso = CURSO_A2_DADOS;
    else if (t === 'b1' && typeof CURSO_B1_DADOS !== 'undefined') dadosCurso = CURSO_B1_DADOS;
    else if (t === 'b2' && typeof CURSO_B2_DADOS !== 'undefined') dadosCurso = CURSO_B2_DADOS;

    if (dadosCurso) {
        const tamOrig = deck.length;
        deck = deck.filter(card => {
            const modIdx = dadosCurso.findIndex(m => m.id === card.modId);
            if (modIdx === -1) return false;
            return eModuloAprendido(modIdx, t);
        });
        if (deck.length !== tamOrig) alterado = true;

        dadosCurso.forEach((mod, modIdx) => {
            if (eModuloAprendido(modIdx, t)) {
                modulosConcluidosNomes.push(mod.title || `Módulo ${modIdx + 1}`);
                if (mod.stage2_drops && Array.isArray(mod.stage2_drops)) {
                    mod.stage2_drops.forEach((drop, dropIdx) => {
                        const cardId = `${mod.id}_d_${dropIdx}`;
                        const jaExiste = deck.some(c => c.id === cardId);
                        if (!jaExiste) {
                            deck.push({
                                id: cardId,
                                modId: mod.id,
                                modIdx: modIdx,
                                modTitle: mod.title,
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
            deck = deck.filter(card => eModuloAprendido(card.modIdx, 'hiragana'));
            if (deck.length !== tamOrig) alterado = true;

            HIRA_COURSE_DATA.forEach((mod, modIdx) => {
                if (mod.isReferenceTable) return;
                if (eModuloAprendido(modIdx, 'hiragana')) {
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
            deck = deck.filter(card => eModuloAprendido(card.modIdx, 'katakana'));
            if (deck.length !== tamOrig) alterado = true;

            KATA_COURSE_DATA.forEach((mod, modIdx) => {
                if (mod.isReferenceTable) return;
                if (eModuloAprendido(modIdx, 'katakana')) {
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
            deck = deck.filter(card => eModuloAprendido(card.modIdx, 'kanji'));
            if (deck.length !== tamOrig) alterado = true;

            kanjiN5Data.forEach((mod, modIdx) => {
                if (eModuloAprendido(modIdx, 'kanji')) {
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
    }

    if (alterado) {
        salvarDeckSRS(t, deck);
    }

    // AUDITORIA NO CONSOLE (Requisito 5)
    console.log("📚 SRS [" + t + "]: Carregando cards dos módulos concluídos (" + (modulosConcluidosNomes.length > 0 ? modulosConcluidosNomes.join(", ") : "Nenhum") + ") - Total: " + deck.length + " cards.");

    return deck;
}

function obterCardsParaRevisarHoje(tipo) {
    if (!tipo) tipo = (typeof nivelAtivo !== 'undefined' && nivelAtivo) ? nivelAtivo.toLowerCase() : 'a1';
    const deck = sincronizarBaralhoSRS(tipo);
    const agora = Date.now();
    return deck.filter(c => c.dueDate <= agora);
}

function atualizarBadgeSRS(tipo) {
    if (!tipo) {
        const mode = document.body.getAttribute('data-mode') || 'curso';
        tipo = (mode === 'curso' || mode === 'japa') ? (typeof nivelAtivo !== 'undefined' && nivelAtivo ? nivelAtivo.toLowerCase() : 'a1') : mode;
    }
    const tUpper = tipo.toUpperCase();
    const deck = sincronizarBaralhoSRS(tipo);
    const agora = Date.now();
    const pendentes = deck.filter(c => c.dueDate <= agora);

    const badge = document.getElementById('srs-badge-count');
    const desc = document.getElementById('srs-banner-desc');
    const btn = document.getElementById('btn-iniciar-srs');

    if (badge) badge.innerText = pendentes.length;
    if (desc) {
        if (deck.length === 0) {
            desc.innerText = "Você ainda não concluiu nenhum módulo deste curso. Conclua pelo menos o Módulo 1 para liberar seus primeiros cards de revisão!";
            if (btn) btn.innerText = "Iniciar Revisão ➔";
        } else if (pendentes.length === 0) {
            desc.innerText = `✨ Suas revisões de hoje estão em dia! Pratique com seu baralho de ${tUpper} (${deck.length} cards liberados).`;
            if (btn) btn.innerText = "Prática Livre do Baralho ➔";
        } else {
            desc.innerText = `🔥 Você tem ${pendentes.length} item(ns) de ${tUpper} aguardando revisão hoje!`;
            if (btn) btn.innerText = "Iniciar Revisão ➔";
        }
    }
}

function iniciarSessaoSRS(tipo) {
    if (!tipo) {
        const mode = document.body.getAttribute('data-mode') || 'curso';
        tipo = (mode === 'curso' || mode === 'japa') ? (typeof nivelAtivo !== 'undefined' && nivelAtivo ? nivelAtivo.toLowerCase() : 'a1') : mode;
    }
    srsTipoAtivo = tipo;

    const deck = sincronizarBaralhoSRS(tipo);
    if (deck.length === 0) {
        alert("Você ainda não concluiu nenhum módulo deste curso. Conclua pelo menos o Módulo 1 para liberar seus primeiros cards de revisão!");
        return;
    }

    const agora = Date.now();
    let pendentes = deck.filter(c => c.dueDate <= agora);

    if (pendentes.length === 0) {
        pendentes = [...deck].sort(() => Math.random() - 0.5);
    } else {
        pendentes = [...pendentes].sort(() => Math.random() - 0.5);
    }

    srsSessaoCards = pendentes;
    srsIndexAtivo = 0;
    srsAcertosSessao = 0;
    srsErrosSessao = 0;

    const hub = document.getElementById('hub-niveis');
    const trilha = document.getElementById('trilha-a1');
    const studyArea = document.getElementById('study-area');
    const playerAula = document.getElementById('player-aula');
    const playerSRS = document.getElementById('player-srs');

    if (hub) hub.style.display = 'none';
    if (trilha) trilha.style.display = 'none';
    if (studyArea) studyArea.style.display = 'none';
    if (playerAula) playerAula.style.display = 'none';
    if (playerSRS) playerSRS.style.display = 'block';

    renderizarCardSRS();
}

function fecharSessaoSRS() {
    const playerSRS = document.getElementById('player-srs');
    const hub = document.getElementById('hub-niveis');
    const studyArea = document.getElementById('study-area');

    if (playerSRS) playerSRS.style.display = 'none';
    if (hub) hub.style.display = 'block';
    if (studyArea) studyArea.style.display = 'block';

    atualizarUIProgresso();
    atualizarBadgeSRS(srsTipoAtivo);
}

function renderizarCardSRS() {
    const container = document.getElementById('conteudo-card-srs');
    if (!container || srsSessaoCards.length === 0) return;

    if (srsIndexAtivo >= srsSessaoCards.length) {
        renderizarConclusaoSRS();
        return;
    }

    srsCardRevelado = false;
    const cardData = srsSessaoCards[srsIndexAtivo];

    const elemTitulo = document.getElementById('srs-etapa-titulo');
    if (elemTitulo) elemTitulo.innerText = `Revisão SRS (${srsIndexAtivo + 1} de ${srsSessaoCards.length})`;

    let frenteHTML = "";
    let versoHTML = "";

    if (cardData.dropType === 'hira_char' || cardData.dropType === 'kata_char') {
        const modalidade = cardData.dropType.startsWith('hira') ? 'HIRAGANA' : 'KATAKANA';
        const cor = cardData.dropType.startsWith('hira') ? '#d90429' : '#028090';
        frenteHTML = `
            <div class="srs-card-type" style="color: ${cor};">🔤 ${modalidade} • ${cardData.modTitle}</div>
            <div class="srs-kanji kana-text">${cardData.char}</div>
            <button onclick="speakKana('${cardData.char}')" class="srs-audio-btn">🔊 Pronúncia</button>
            <p style="color: var(--text-muted); margin-top: 1rem;">Qual é a leitura e a dica mnemônica deste Kana?</p>
        `;
        versoHTML = `
            <div class="srs-card-type" style="color: ${cor};">✨ Leitura e Mnemônica</div>
            <div class="srs-romaji">${cardData.romaji}</div>
            <div style="background: var(--bg-color); border: 1px dashed var(--border-color); padding: 12px; border-radius: 10px; margin-top: 10px; text-align: left; font-size: 0.95rem;">
                <strong>💡 Dica:</strong> ${cardData.mnemonic}
            </div>
        `;
    } else if (cardData.dropType === 'hira_vocab' || cardData.dropType === 'kata_vocab') {
        const modalidade = cardData.dropType.startsWith('hira') ? 'HIRAGANA' : 'KATAKANA';
        const cor = cardData.dropType.startsWith('hira') ? '#d90429' : '#028090';
        frenteHTML = `
            <div class="srs-card-type" style="color: ${cor};">📚 VOCABULÁRIO • ${cardData.modTitle}</div>
            <div class="srs-kanji kana-text" style="font-size: 3rem;">${cardData.char}</div>
            <button onclick="speakKana('${cardData.char}')" class="srs-audio-btn">🔊 Pronúncia</button>
            <p style="color: var(--text-muted); margin-top: 1rem;">Tente lembrar da pronúncia (romaji) e tradução!</p>
        `;
        versoHTML = `
            <div class="srs-card-type" style="color: ${cor};">✨ Resposta Revelada</div>
            <div class="srs-romaji">${cardData.romaji}</div>
            <div class="srs-translation">${cardData.meaning}</div>
        `;
    } else if (cardData.dropType === 'kanji') {
        let exHtml = "";
        if (cardData.examples && cardData.examples.length > 0) {
            const ex = cardData.examples[0];
            exHtml = `
                <div style="background: var(--bg-color); border: 1px solid var(--border-color); padding: 10px; border-radius: 8px; margin-top: 10px; text-align: left;">
                    <div style="font-weight: bold; color: #b45309;">Exemplo: ${ex.word}</div>
                    <div style="font-size: 0.85rem; color: var(--text-main);">${ex.wordMeaning}</div>
                    <div style="font-size: 0.8rem; color: var(--text-muted); font-style: italic; margin-top: 4px;">"${ex.sentence}"</div>
                </div>
            `;
        }
        frenteHTML = `
            <div class="srs-card-type" style="color: #b45309;">🏯 KANJI N5 • ${cardData.modTitle}</div>
            <div class="srs-kanji kana-text">${cardData.character}</div>
            <button onclick="speakKana('${cardData.character}')" class="srs-audio-btn">🔊 Pronúncia</button>
            <p style="color: var(--text-muted); margin-top: 1rem;">Quais são as leituras (Kun/On) e o significado deste Kanji?</p>
        `;
        versoHTML = `
            <div class="srs-card-type" style="color: #b45309;">✨ Ideograma Revelado</div>
            <div class="srs-translation" style="color: #b45309; font-size: 1.4rem; margin-bottom: 0.8rem;">${cardData.meaning}</div>
            <div style="display: flex; gap: 10px; justify-content: center; margin-bottom: 10px; font-size: 0.9rem;">
                <span style="background: rgba(34, 197, 94, 0.1); color: #16a34a; border: 1px solid #22c55e; padding: 4px 10px; border-radius: 6px;"><strong>Kun:</strong> ${cardData.kunyomi}</span>
                <span style="background: rgba(59, 130, 246, 0.1); color: #2563eb; border: 1px solid #3b82f6; padding: 4px 10px; border-radius: 6px;"><strong>On:</strong> ${cardData.onyomi}</span>
            </div>
            ${exHtml}
        `;
    } else {
        const drop = cardData.drop || {};
        const nivelLabel = (cardData.level || (srsTipoAtivo ? srsTipoAtivo.toUpperCase() : 'A1'));
        if (drop.type === 'vocab') {
            frenteHTML = `
                <div class="srs-card-type">📖 Vocabulário ${nivelLabel} • ${fNome(cardData.modTitle)}</div>
                <div class="srs-kanji">${drop.kanji}</div>
                <button onclick="tocarAudio('${drop.romaji}')" class="srs-audio-btn">🔊 Ouvir Pronúncia</button>
                <p style="color: var(--text-muted); margin-top: 1rem;">Tente lembrar da pronúncia e da tradução!</p>
            `;
            versoHTML = `
                <div class="srs-card-type">✨ Resposta Revelada</div>
                <div class="srs-romaji">${drop.romaji}</div>
                <div class="srs-translation">${drop.translation}</div>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.8rem;">💡 ${drop.timeContext || ''}</p>
            `;
        } else {
            frenteHTML = `
                <div class="srs-card-type" style="color: #e63946;">💡 Pílula Gramatical ${nivelLabel} • ${fNome(cardData.modTitle)}</div>
                <h3 style="font-size: 1.5rem; margin: 1rem 0;">${fNome(drop.title)}</h3>
                <p style="color: var(--text-muted);">Qual é a regra e a fórmula desta pílula gramatical?</p>
            `;
            versoHTML = `
                <div class="srs-card-type" style="color: #e63946;">✨ Regra Gramatical</div>
                <p style="font-weight: 600; margin-bottom: 0.8rem;">${fNome(drop.rule)}</p>
                <div style="background: var(--bg-color); border: 2px solid var(--border-color); padding: 10px 15px; border-radius: 8px; font-weight: bold; color: #e63946; margin: 10px 0;">
                    <code>${fNome(drop.formula)}</code>
                </div>
                <p><small style="color: var(--text-muted);">Exemplo: ${fNome(drop.example)}</small></p>
            `;
        }
    }

    container.innerHTML = `
        <div class="srs-card-box ${srsCardRevelado ? 'revelado' : ''}" id="box-flashcard">
            <div class="srs-card-frente">${frenteHTML}</div>
            <div class="srs-card-verso" style="display: ${srsCardRevelado ? 'block' : 'none'};">${versoHTML}</div>
        </div>
    `;

    const btnRevelar = document.getElementById('btn-revelar-srs');
    const painelAvaliacao = document.getElementById('painel-avaliacao-srs');
    if (btnRevelar) btnRevelar.style.display = 'block';
    if (painelAvaliacao) painelAvaliacao.style.display = 'none';
}

function revelarRespostaSRS() {
    srsCardRevelado = true;
    const verso = document.querySelector('.srs-card-verso');
    if (verso) verso.style.display = 'block';

    const cardData = srsSessaoCards[srsIndexAtivo];
    if (cardData) {
        if (cardData.char) speakKana(cardData.char);
        else if (cardData.character) speakKana(cardData.character);
        else if (cardData.drop && cardData.drop.romaji) tocarAudio(cardData.drop.romaji);
    }

    const btnRevelar = document.getElementById('btn-revelar-srs');
    const painelAvaliacao = document.getElementById('painel-avaliacao-srs');
    if (btnRevelar) btnRevelar.style.display = 'none';
    if (painelAvaliacao) painelAvaliacao.style.display = 'grid';
}

function processarAvaliacaoSRS(qualidade) {
    const cardData = srsSessaoCards[srsIndexAtivo];
    if (!cardData) return;

    let deck = carregarDeckSRS(srsTipoAtivo);
    const cardRef = deck.find(c => c.id === cardData.id);
    const agora = Date.now();
    const UM_DIA_MS = 86400000;

    if (cardRef) {
        if (qualidade === 1) {
            cardRef.repetition = 0;
            cardRef.interval = 1;
            cardRef.easeFactor = Math.max(1.3, cardRef.easeFactor - 0.2);
            srsErrosSessao++;
            playBeep('error');
        } else if (qualidade === 2) {
            cardRef.repetition += 1;
            cardRef.interval = Math.max(1, Math.round((cardRef.interval || 1) * 1.2));
            cardRef.easeFactor = Math.max(1.3, cardRef.easeFactor - 0.15);
            srsAcertosSessao++;
            playBeep('success');
        } else if (qualidade === 3) {
            cardRef.repetition += 1;
            cardRef.interval = cardRef.interval === 0 ? 1 : Math.round((cardRef.interval || 1) * cardRef.easeFactor);
            srsAcertosSessao++;
            playBeep('success');
        } else if (qualidade === 4) {
            cardRef.repetition += 1;
            cardRef.easeFactor += 0.15;
            cardRef.interval = cardRef.interval === 0 ? 3 : Math.round((cardRef.interval || 1) * cardRef.easeFactor * 1.3);
            srsAcertosSessao++;
            playBeep('success');
        }

        cardRef.dueDate = agora + (cardRef.interval * UM_DIA_MS);
        salvarDeckSRS(srsTipoAtivo, deck);
    }

    srsIndexAtivo++;
    renderizarCardSRS();
}

function renderizarConclusaoSRS() {
    const container = document.getElementById('conteudo-card-srs');
    const xpGanho = (srsAcertosSessao * 5) + (srsSessaoCards.length * 2);

    container.innerHTML = `
        <span style="font-size: 4rem; animation: pop 0.5s;">🧠</span>
        <h2 style="color: #22c55e;">Sessão de Revisão Concluída!</h2>
        <p style="font-size: 1.1rem; color: var(--text-muted);">Parabéns, <strong>${nomeUsuario}</strong>! Você fortaleceu sua memória de longo prazo.</p>
        
        <div style="display: flex; gap: 15px; justify-content: center; margin: 1.5rem 0;">
            <div style="background: var(--bg-color); border: 2px solid var(--border-color); padding: 12px 20px; border-radius: 10px;">
                <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Cards Revisados</div>
                <div style="font-size: 1.8rem; font-weight: bold; color: var(--text-main);">${srsSessaoCards.length}</div>
            </div>
            <div style="background: var(--bg-color); border: 2px solid var(--border-color); padding: 12px 20px; border-radius: 10px;">
                <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">XP Adquirido</div>
                <div style="font-size: 1.8rem; font-weight: bold; color: #fbbf24;">+${xpGanho} XP</div>
            </div>
        </div>

        <button onclick="fecharSessaoSRS()" style="background: linear-gradient(135deg, #22c55e, #15803d); color: white; border: none; padding: 0.8rem 2rem; border-radius: 12px; font-weight: bold; font-size: 1.05rem; cursor: pointer;">
            Concluir e Voltar ao Hub ➔
        </button>
    `;

    const btnRevelar = document.getElementById('btn-revelar-srs');
    const painelAvaliacao = document.getElementById('painel-avaliacao-srs');
    if (btnRevelar) btnRevelar.style.display = 'none';
    if (painelAvaliacao) painelAvaliacao.style.display = 'none';
}

// Funções do Modal de Opções
function abrirOpcoesCurso() {
    const modal = document.getElementById('modal-opcoes');
    if (modal) {
        atualizarUIProgresso();
        modal.style.display = 'flex';
    }
}

function fecharOpcoesCurso() {
    const modal = document.getElementById('modal-opcoes');
    if (modal) modal.style.display = 'none';
}

function alternarDesbloqueio(ativo) {
    modoDesbloqueado = ativo;
    localStorage.setItem('ja_modo_desbloqueado', JSON.stringify(ativo));
    atualizarUIProgresso();
}

function resetarProgressoCurso() {
    if (!confirm("Tem certeza que deseja resetar todo o seu progresso do curso, simulados e certificado?")) return;

    modoDesbloqueado = false;
    nivelAtivo = 'A1';
    moduloAtivoIndex = 0;
    etapaAtual = 1;
    dropAtual = 0;
    nomeUsuario = 'Estudante';
    simuladoB2Submetido = false;
    respostasSimuladoB2 = {};

    progressoGlobal = {
        modulosConcluidos: [],
        modulosDesbloqueados: ["a1_mod_01"],
        progress_hiragana: [],
        progress_katakana: [],
        progress_kanji: [],
        xpTotal: 0,
        nivelAtual: "A1",
        b2_certified: false,
        b2_score: 0,
        cert_date: null,
        cert_hash: null
    };
    progressoGlobal.progress_curso_principal = progressoGlobal.modulosConcluidos;

    localStorage.removeItem('ja_modo_desbloqueado');
    localStorage.removeItem('japao_academy_progress');
    localStorage.removeItem('ja_progresso_a1');
    localStorage.removeItem('ja_modulos_concluidos');
    localStorage.removeItem('ja_progresso_a2');
    localStorage.removeItem('ja_modulos_concluidos_a2');
    localStorage.removeItem('ja_progresso_b1');
    localStorage.removeItem('ja_modulos_concluidos_b1');
    localStorage.removeItem('ja_progresso_b2');
    localStorage.removeItem('ja_modulos_concluidos_b2');
    localStorage.removeItem('ja_nome_usuario');
    localStorage.removeItem('ja_srs_deck');
    localStorage.removeItem('ja_srs_a2_deck');
    localStorage.removeItem('ja_srs_b1_deck');
    localStorage.removeItem('ja_srs_b2_deck');
    localStorage.removeItem('ja_srs_hiragana_deck');
    localStorage.removeItem('ja_srs_katakana_deck');
    localStorage.removeItem('ja_srs_kanji_deck');

    const inputNome = document.getElementById('input-nome-usuario');
    if (inputNome) inputNome.value = "";

    const modalCert = document.getElementById('modal-certificado');
    if (modalCert) modalCert.style.display = 'none';

    const btnCertHub = document.getElementById('btn-ver-certificado-hub');
    if (btnCertHub) btnCertHub.style.display = 'none';

    salvarProgressoGlobal();
    calcularProgressoGlobal();
    atualizarUIProgresso();
    voltarAoHub();

    alert("Progresso, simulados e certificado reiniciados com sucesso!");
    fecharOpcoesCurso();
}

// Navegação entre telas do Curso
function abrirTrilha(nivel) {
    if (!eNivelDesbloqueado(nivel)) {
        const nAnterior = (nivel === 'A2') ? 'A1' : (nivel === 'B1') ? 'A2' : 'B1';
        alert(`🔒 O Nível ${nivel} está bloqueado! Conclua o Módulo Final do Nível ${nAnterior} para desbloquear.`);
        return;
    }

    nivelAtivo = nivel;
    progressoGlobal.nivelAtual = nivel;
    salvarProgressoGlobal();

    if (document.getElementById('hub-niveis')) document.getElementById('hub-niveis').style.display = 'none';

    if (nivel === 'A1') {
        if (document.getElementById('trilha-a2')) document.getElementById('trilha-a2').style.display = 'none';
        if (document.getElementById('trilha-b1')) document.getElementById('trilha-b1').style.display = 'none';
        if (document.getElementById('trilha-b2')) document.getElementById('trilha-b2').style.display = 'none';
        if (document.getElementById('trilha-a1')) document.getElementById('trilha-a1').style.display = 'block';
    } else if (nivel === 'A2') {
        if (document.getElementById('trilha-a1')) document.getElementById('trilha-a1').style.display = 'none';
        if (document.getElementById('trilha-b1')) document.getElementById('trilha-b1').style.display = 'none';
        if (document.getElementById('trilha-b2')) document.getElementById('trilha-b2').style.display = 'none';
        if (document.getElementById('trilha-a2')) document.getElementById('trilha-a2').style.display = 'block';
    } else if (nivel === 'B1') {
        if (document.getElementById('trilha-a1')) document.getElementById('trilha-a1').style.display = 'none';
        if (document.getElementById('trilha-a2')) document.getElementById('trilha-a2').style.display = 'none';
        if (document.getElementById('trilha-b2')) document.getElementById('trilha-b2').style.display = 'none';
        if (document.getElementById('trilha-b1')) document.getElementById('trilha-b1').style.display = 'block';
    } else if (nivel === 'B2') {
        if (document.getElementById('trilha-a1')) document.getElementById('trilha-a1').style.display = 'none';
        if (document.getElementById('trilha-a2')) document.getElementById('trilha-a2').style.display = 'none';
        if (document.getElementById('trilha-b1')) document.getElementById('trilha-b1').style.display = 'none';
        if (document.getElementById('trilha-b2')) document.getElementById('trilha-b2').style.display = 'block';
    }

    atualizarUIProgresso();
    const dadosCurso = getDadosCursoAtivo();
    const modPrimeiro = dadosCurso[0];
    console.log("📍 Nível carregado:", nivelAtivo, "| Módulo:", modPrimeiro ? modPrimeiro.id : "N/A");
}

function voltarAoHub() {
    if (document.getElementById('trilha-a1')) document.getElementById('trilha-a1').style.display = 'none';
    if (document.getElementById('trilha-a2')) document.getElementById('trilha-a2').style.display = 'none';
    if (document.getElementById('trilha-b1')) document.getElementById('trilha-b1').style.display = 'none';
    if (document.getElementById('trilha-b2')) document.getElementById('trilha-b2').style.display = 'none';
    if (document.getElementById('hub-niveis')) document.getElementById('hub-niveis').style.display = 'block';
}

function iniciarModulo(index, nivel = nivelAtivo || 'A1') {
    if (!eNivelDesbloqueado(nivel)) {
        alert(`🔒 O Nível ${nivel} está bloqueado!`);
        return;
    }

    nivelAtivo = nivel;
    const dadosCurso = getDadosCursoAtivo();
    const mod = dadosCurso[index];

    if (!mod) return;

    if (!eModuloDesbloqueado(mod.id, nivel, index)) {
        alert("🔒 Conclua o Módulo anterior para desbloquear esta lição!");
        return;
    }

    moduloAtivoIndex = index;
    if (document.getElementById('trilha-a1')) document.getElementById('trilha-a1').style.display = 'none';
    if (document.getElementById('trilha-a2')) document.getElementById('trilha-a2').style.display = 'none';
    if (document.getElementById('trilha-b1')) document.getElementById('trilha-b1').style.display = 'none';
    if (document.getElementById('trilha-b2')) document.getElementById('trilha-b2').style.display = 'none';
    document.getElementById('player-aula').style.display = 'block';
    etapaAtual = 1;
    dropAtual = 0;

    console.log("📍 Nível carregado:", nivelAtivo, "| Módulo:", mod.id);
    renderizarEtapa();
}

function fecharAula() {
    document.getElementById('player-aula').style.display = 'none';
    if (nivelAtivo === 'B2' && document.getElementById('trilha-b2')) {
        document.getElementById('trilha-b2').style.display = 'block';
    } else if (nivelAtivo === 'B1' && document.getElementById('trilha-b1')) {
        document.getElementById('trilha-b1').style.display = 'block';
    } else if (nivelAtivo === 'A2' && document.getElementById('trilha-a2')) {
        document.getElementById('trilha-a2').style.display = 'block';
    } else if (document.getElementById('trilha-a1')) {
        document.getElementById('trilha-a1').style.display = 'block';
    }
    atualizarUIProgresso();
}

// Renderização das 5 Etapas
function renderizarEtapa() {
    const container = document.getElementById('conteudo-etapa');
    const dadosCurso = getDadosCursoAtivo();
    if (!container || !dadosCurso || dadosCurso.length === 0) return;

    const mod = dadosCurso[moduloAtivoIndex];
    if (!mod) return;

    document.getElementById('etapa-titulo').innerText = `Etapa ${etapaAtual} de 5`;

    const btnVoltarEtapa = document.getElementById('btn-voltar-etapa');
    if (btnVoltarEtapa) {
        btnVoltarEtapa.style.display = (etapaAtual === 1) ? 'none' : 'inline-block';
    }

    // ETAPA 1: CONTEXTO
    if (etapaAtual === 1) {
        container.innerHTML = `
            <span style="font-size: 3rem;">🌅</span>
            <h3>${fNome(mod.title)}</h3>
            <p style="max-width: 500px; margin: 0 auto; color: var(--text-muted);">
                <strong>🎯 ${fNome(mod.stage1_context.missionTitle)}:</strong><br>
                ${fNome(mod.stage1_context.missionDescription)}
            </p>
            <button onclick="tocarAudio('${mod.stage1_context.audioGuide}')" style="margin-top: 1rem;">
                🔊 Ouvir Frase Guia: "${mod.stage1_context.audioGuide}"
            </button>
        `;
    }
    // ETAPA 2: DROPS (VOCAB / GRAMÁTICA)
    else if (etapaAtual === 2) {
        const drop = mod.stage2_drops[dropAtual];
        if (drop.type === 'vocab') {
            const icones = ['🌅', '☀️', '🌙', '⭐', '🗣️'];
            container.innerHTML = `
                <span style="font-size: 2.5rem;">${icones[dropAtual % icones.length] || '📖'}</span>
                <div style="font-size: 0.85rem; color: var(--text-muted); font-weight: bold; text-transform: uppercase;">
                    Card de Vocabulário (${dropAtual + 1}/${mod.stage2_drops.length})
                </div>
                <h2 style="font-size: 2.5rem; margin: 0.5rem 0; color: var(--text-main);">${drop.kanji}</h2>
                <p style="font-size: 1.2rem; color: #e63946; font-weight: bold;">${drop.romaji}</p>
                <p style="font-size: 1.1rem; font-weight: 600; margin-top: 0.5rem;">${drop.translation}</p>
                <p style="font-size: 0.9rem; color: var(--text-muted);"><small>💡 ${drop.timeContext}</small></p>
                <button onclick="tocarAudio('${drop.romaji}')" style="margin-top: 0.8rem;">🔊 Pronúncia Nativa</button>
            `;
        } else {
            container.innerHTML = `
                <span style="font-size: 2.5rem;">🧩</span>
                <div style="font-size: 0.85rem; color: #e63946; font-weight: bold; text-transform: uppercase;">💡 Pílula Gramatical</div>
                <h3 style="margin: 0.5rem 0;">${fNome(drop.title)}</h3>
                <p style="max-width: 500px; margin: 0 auto; color: var(--text-muted);">${fNome(drop.rule)}</p>
                <div style="background: var(--bg-color); border: 2px solid var(--border-color); padding: 12px 20px; border-radius: 10px; margin: 15px auto; max-width: 350px; font-weight: bold; color: #e63946;">
                    <code>${fNome(drop.formula)}</code>
                </div>
                <p><small style="color: var(--text-muted);">Exemplo: ${fNome(drop.example)}</small></p>
            `;
        }
        const btnAvancar = document.getElementById('btn-avancar');
        if (btnAvancar) btnAvancar.innerText = (dropAtual < mod.stage2_drops.length - 1) ? "Próximo Card ➔" : "Ir para Prática ➔";
    }
    // ETAPA 3: PRÁTICA EM MASSA
    else if (etapaAtual === 3) {
        let praticasHTML = "";

        mod.stage3_practice.forEach((p, idx) => {
            let opcoesHTML = p.options.map((opt) =>
                `<button onclick="verificarRespostaPraticaMassa(${idx}, ${opt.isCorrect}, this)" class="btn-opcao-pratica" style="display:block; margin: 8px auto; width: 100%; max-width: 420px; text-align: left; padding: 10px 15px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-color); color: var(--text-main); font-weight: 600; cursor: pointer; transition: 0.2s;">
                    ${fNome(opt.label)}
                </button>`
            ).join('');

            praticasHTML += `
                <div class="box-pratica" style="background: var(--card-bg); border: 2px solid var(--border-color); border-radius: 12px; padding: 20px; margin-bottom: 20px; text-align: left; box-shadow: var(--shadow); width: 100%; max-width: 500px;">
                    <span style="font-size: 0.8rem; color: #e63946; font-weight: bold; text-transform: uppercase;">Exercício ${idx + 1} de ${mod.stage3_practice.length}</span>
                    <p style="margin: 8px 0 15px 0; font-weight: bold; font-size: 1.05rem; color: var(--text-main);">${fNome(p.question)}</p>
                    ${opcoesHTML}
                    <div id="fb-pratica-${idx}" style="margin-top: 10px; font-weight: bold; font-size: 0.95rem;"></div>
                </div>
            `;
        });

        container.innerHTML = `
            <span style="font-size: 2.5rem;">✏️</span>
            <h3>Prática Guiada Intensiva</h3>
            <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Resolva os desafios abaixo para consolidar sua memória:</p>
            <div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
                ${praticasHTML}
            </div>
        `;
    }
    // ETAPA 4: DIÁLOGO EM MASSA
    else if (etapaAtual === 4) {
        let dialogosHTML = "";

        mod.stage4_dialog.forEach((d, idx) => {
            let opcoesHTML = d.options.map((opt) =>
                `<button onclick="verificarDialogoMassa(${idx}, '${opt.feedback}', ${opt.isCorrect}, this)" style="display:block; margin: 8px auto; width: 100%; max-width: 420px; text-align: left; padding: 10px 15px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-color); color: var(--text-main); font-weight: 600; cursor: pointer; transition: 0.2s;">
                    💬 ${fNome(opt.text)}
                </button>`
            ).join('');

            dialogosHTML += `
                <div class="box-dialogo" style="background: var(--card-bg); border: 2px solid var(--border-color); border-radius: 12px; padding: 20px; margin-bottom: 25px; text-align: left; box-shadow: var(--shadow); width: 100%; max-width: 500px;">
                    <span style="font-size: 0.8rem; color: #e63946; font-weight: bold; text-transform: uppercase;">Simulação ${idx + 1} de ${mod.stage4_dialog.length}</span>
                    <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 4px;">📍 ${fNome(d.scenario)}</p>
                    <div style="background: var(--bg-color); border-left: 4px solid #e63946; padding: 12px 16px; margin: 15px 0; border-radius: 0 8px 8px 0;">
                        <strong style="color: #e63946;">${fNome(d.npcName)}:</strong><br>
                        <span style="font-size: 1.05rem; font-weight: 600; color: var(--text-main);">${fNome(d.npcMessage)}</span>
                    </div>
                    <p style="font-weight: bold; margin-bottom: 8px; font-size: 0.95rem;">Sua resposta:</p>
                    ${opcoesHTML}
                    <div id="fb-dialogo-${idx}" style="margin-top: 12px; font-weight: bold; font-size: 0.95rem;"></div>
                </div>
            `;
        });

        container.innerHTML = `
            <span style="font-size: 2.5rem;">🗣️</span>
            <h3>Imersão no Mundo Real</h3>
            <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Escolha a melhor resposta social para cada situação:</p>
            <div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
                ${dialogosHTML}
            </div>
        `;
    }
    // ETAPA 5: QUIZ E CONCLUSÃO
    else if (etapaAtual === 5) {
        if (mod.id === 'b2_mod_20' && mod.stage5_quiz && !simuladoB2Submetido && !progressoGlobal.b2_certified) {
            renderizarSimuladoB2(container, mod);
            return;
        }

        const proximoIndex = moduloAtivoIndex + 1;
        const temProximo = (proximoIndex < dadosCurso.length);
        const proximoMod = temProximo ? dadosCurso[proximoIndex] : null;

        if (mod.id === 'b2_mod_20' && progressoGlobal.b2_certified) {
            container.innerHTML = `
                <span style="font-size: 4rem; animation: pop 0.5s;">🏆🎓</span>
                <h2 style="color: #d97706; font-size: 2rem;">PARABÉNS, GRADUADO B2!</h2>
                <p style="font-size: 1.15rem; color: var(--text-main); margin-top: 8px;">
                    Parabéns, <strong>${nomeUsuario}</strong>! Você concluiu com êxito toda a jornada de Japonês (A1 ➔ B2)!
                </p>
                <div style="background: #fffbeb; border: 2px solid #f59e0b; padding: 20px; border-radius: 12px; max-width: 450px; margin: 20px auto; box-shadow: var(--shadow);">
                    <div style="font-size: 0.85rem; color: #92400e; text-transform: uppercase; font-weight: bold;">Status de Formatura</div>
                    <div style="font-size: 1.5rem; font-weight: bold; color: #d97706; margin: 6px 0;">100% CONCLUÍDO • CERTIFICADO LIBERADO</div>
                    <div style="font-size: 0.9rem; color: var(--text-muted);">Pontuação no Simulado: ${progressoGlobal.b2_score || 30}/30 (${Math.round(((progressoGlobal.b2_score || 30)/30)*100)}%)</div>
                </div>
                <button onclick="abrirModalCertificado()" style="background: linear-gradient(135deg, #d97706, #b45309); color: white; border: none; padding: 14px 28px; border-radius: 12px; font-weight: bold; font-size: 1.1rem; cursor: pointer; box-shadow: 0 4px 15px rgba(217, 119, 6, 0.4); margin-top: 10px;">
                    🎓 Gerar Certificado de Fluência B2
                </button>
            `;
        } else {
            container.innerHTML = `
                <span style="font-size: 4rem; animation: pop 0.5s;">🏆</span>
                <h2 style="color: #22c55e;">Módulo Concluído!</h2>
                <p style="font-size: 1.1rem; color: var(--text-muted);">Parabéns, <strong>${nomeUsuario}</strong>! Você finalizou: <strong>${fNome(mod.title)}</strong>!</p>
                <div style="background: var(--bg-color); border: 2px solid var(--border-color); padding: 15px; border-radius: 12px; max-width: 250px; margin: 15px auto;">
                    <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Recompensa</div>
                    <div style="font-size: 2.2rem; font-weight: bold; color: #fbbf24;">+${mod.xpReward} XP</div>
                </div>
                ${temProximo
                    ? `<p style="color: #22c55e; font-weight: bold;">🔓 Módulo ${proximoIndex + 1}: ${fNome(proximoMod.title)} (Desbloqueado!)</p>`
                    : `<p style="color: #3b82f6; font-weight: bold;">🎉 Você completou todas as lições disponíveis até agora!</p>`}
            `;
        }

        const btnAvancar = document.getElementById('btn-avancar');
        if (btnAvancar) {
            btnAvancar.style.display = 'inline-block';
            btnAvancar.innerText = "Concluir e Voltar ➔";
        }

        const modId = mod.id;
        if (!progressoGlobal.modulosConcluidos.includes(modId)) {
            progressoGlobal.modulosConcluidos.push(modId);
        }

        if (temProximo) {
            const proxId = proximoMod.id;
            if (!progressoGlobal.modulosDesbloqueados.includes(proxId)) {
                progressoGlobal.modulosDesbloqueados.push(proxId);
            }
        } else {
            // Desbloqueia o 1º módulo do próximo nível se concluiu o último módulo do nível atual
            const cursos = getTodosOsCursos();
            if (nivelAtivo === 'A1' && cursos.A2 && cursos.A2[0]) {
                const proxId = cursos.A2[0].id;
                if (!progressoGlobal.modulosDesbloqueados.includes(proxId)) {
                    progressoGlobal.modulosDesbloqueados.push(proxId);
                }
            } else if (nivelAtivo === 'A2' && cursos.B1 && cursos.B1[0]) {
                const proxId = cursos.B1[0].id;
                if (!progressoGlobal.modulosDesbloqueados.includes(proxId)) {
                    progressoGlobal.modulosDesbloqueados.push(proxId);
                }
            } else if (nivelAtivo === 'B1' && cursos.B2 && cursos.B2[0]) {
                const proxId = cursos.B2[0].id;
                if (!progressoGlobal.modulosDesbloqueados.includes(proxId)) {
                    progressoGlobal.modulosDesbloqueados.push(proxId);
                }
            }
        }

        salvarProgressoGlobal();
        calcularProgressoGlobal();
        atualizarUIProgresso();
        sincronizarBaralhoSRS();
    }
}

// ==========================================
// SIMULADO FINAL B2 E CERTIFICAÇÃO OFICIAL
// ==========================================
let simuladoB2Submetido = false;
let respostasSimuladoB2 = {};

function selecionarOpcaoSimuladoB2(qIndex, optIndex) {
    respostasSimuladoB2[qIndex] = optIndex;
    const qBox = document.getElementById(`box-q-b2-${qIndex}`);
    if (qBox) {
        const btns = qBox.querySelectorAll('.btn-simulado-opt');
        btns.forEach((b, i) => {
            if (i === optIndex) {
                b.style.border = '2px solid #d97706';
                b.style.backgroundColor = 'rgba(217, 119, 6, 0.15)';
                b.style.color = '#d97706';
            } else {
                b.style.border = '1px solid var(--border-color)';
                b.style.backgroundColor = 'var(--bg-color)';
                b.style.color = 'var(--text-main)';
            }
        });
    }
}

function renderizarSimuladoB2(container, mod) {
    let quizHTML = "";
    mod.stage5_quiz.forEach((q, idx) => {
        let opts = q.options.map((opt, oIdx) => `
            <button class="btn-simulado-opt" onclick="selecionarOpcaoSimuladoB2(${idx}, ${oIdx})" style="display:block; margin: 8px 0; width: 100%; text-align: left; padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-color); color: var(--text-main); font-weight: 600; cursor: pointer; transition: 0.2s;">
                ${oIdx + 1}) ${fNome(opt)}
            </button>
        `).join('');

        quizHTML += `
            <div id="box-q-b2-${idx}" style="background: var(--card-bg); border: 2px solid var(--border-color); border-radius: 12px; padding: 18px; margin-bottom: 20px; text-align: left; box-shadow: var(--shadow);">
                <span style="font-size: 0.8rem; color: #d97706; font-weight: bold; text-transform: uppercase;">Questão ${idx + 1} de 30</span>
                <p style="margin: 8px 0 14px 0; font-weight: bold; font-size: 1.05rem; color: var(--text-main);">${fNome(q.question)}</p>
                ${opts}
            </div>
        `;
    });

    container.innerHTML = `
        <span style="font-size: 3rem;">📝</span>
        <h3>Simulado Final de Proficiency B2</h3>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem; max-width: 600px; margin-left: auto; margin-right: auto;">
            Responda às 30 questões abrangendo os Níveis A1, A2, B1 e B2. É necessário alcançar no mínimo <strong>80% de acertos (24/30)</strong> para emitir o Certificado Oficial.
        </p>
        <div style="max-width: 650px; margin: 0 auto;">
            ${quizHTML}
            <button onclick="submeterSimuladoB2()" style="background: linear-gradient(135deg, #22c55e, #15803d); color: white; border: none; padding: 14px 30px; border-radius: 12px; font-weight: bold; font-size: 1.1rem; cursor: pointer; width: 100%; margin-top: 15px; box-shadow: 0 4px 15px rgba(34, 197, 94, 0.4);">
                🎯 Finalizar e Corrigir Simulado Final B2
            </button>
        </div>
    `;

    const btnAvancar = document.getElementById('btn-avancar');
    if (btnAvancar) btnAvancar.style.display = 'none';
}

function submeterSimuladoB2() {
    const dadosCurso = getDadosCursoAtivo();
    const mod = dadosCurso[moduloAtivoIndex];
    if (!mod || !mod.stage5_quiz) return;

    let totalQ = mod.stage5_quiz.length;
    let respondidas = Object.keys(respostasSimuladoB2).length;

    if (respondidas < totalQ) {
        if (!confirm(`Você respondeu ${respondidas} de ${totalQ} questões. Deseja enviar o simulado assim mesmo?`)) return;
    }

    let acertos = 0;
    mod.stage5_quiz.forEach((q, idx) => {
        if (respostasSimuladoB2[idx] === q.correctIndex) {
            acertos++;
        }
    });

    const percent = Math.round((acertos / totalQ) * 100);
    const container = document.getElementById('conteudo-etapa');
    const btnAvancar = document.getElementById('btn-avancar');
    simuladoB2Submetido = true;

    if (acertos >= 24) {
        progressoGlobal.b2_certified = true;
        progressoGlobal.b2_score = acertos;
        if (!progressoGlobal.cert_date) progressoGlobal.cert_date = new Date().toLocaleDateString('pt-BR');
        if (!progressoGlobal.cert_hash) {
            progressoGlobal.cert_hash = 'JA-B2-' + Math.floor(100000 + Math.random() * 900000) + '-' + Date.now().toString(36).toUpperCase();
        }
        if (!progressoGlobal.modulosConcluidos.includes(mod.id)) {
            progressoGlobal.modulosConcluidos.push(mod.id);
        }
        salvarProgressoGlobal();
        calcularProgressoGlobal();
        atualizarUIProgresso();

        container.innerHTML = `
            <span style="font-size: 4rem; animation: pop 0.5s;">🏆🎓</span>
            <h2 style="color: #22c55e; font-size: 2rem;">APROVADO NO SIMULADO FINAL B2!</h2>
            <p style="font-size: 1.15rem; color: var(--text-main); margin-top: 10px;">
                Parabéns, <strong>${nomeUsuario}</strong>! Você atingiu <strong>${acertos}/30 acertos (${percent}%)</strong>!
            </p>
            <div style="background: #ecfdf5; border: 2px solid #10b981; padding: 20px; border-radius: 12px; max-width: 450px; margin: 20px auto; box-shadow: var(--shadow);">
                <div style="font-size: 0.85rem; color: #047857; text-transform: uppercase; font-weight: bold;">Status de Formatura</div>
                <div style="font-size: 1.5rem; font-weight: bold; color: #059669; margin: 6px 0;">100% CONCLUÍDO • CERTIFICADO LIBERADO</div>
                <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 4px;">Você concluiu toda a jornada de Japonês A1 ➔ B2 do ecossistema Japão Academy!</p>
            </div>
            <button onclick="abrirModalCertificado()" style="background: linear-gradient(135deg, #d97706, #b45309); color: white; border: none; padding: 14px 28px; border-radius: 12px; font-weight: bold; font-size: 1.1rem; cursor: pointer; box-shadow: 0 4px 15px rgba(217, 119, 6, 0.4); margin-top: 10px;">
                🎓 Gerar Certificado de Fluência B2
            </button>
        `;
        if (btnAvancar) {
            btnAvancar.style.display = 'inline-block';
            btnAvancar.innerText = "Concluir e Voltar ➔";
        }
    } else {
        container.innerHTML = `
            <span style="font-size: 4rem; animation: pop 0.5s;">📊</span>
            <h2 style="color: #e63946;">Resultado do Simulado Final</h2>
            <p style="font-size: 1.15rem; color: var(--text-main);">
                Você acertou <strong>${acertos} de 30 questões (${percent}%)</strong>.
            </p>
            <div style="background: #fef2f2; border: 2px solid #ef4444; padding: 18px; border-radius: 12px; max-width: 450px; margin: 20px auto; box-shadow: var(--shadow);">
                <div style="font-size: 0.85rem; color: #991b1b; text-transform: uppercase; font-weight: bold;">Nota de Corte Não Atingida</div>
                <p style="font-size: 0.95rem; color: #b91c1c; margin-top: 6px; line-height: 1.5;">
                    Para obter a Certificação Oficial B2 do Japão Academy, é necessário acertar no mínimo <strong>24 de 30 questões (80%)</strong>.
                </p>
            </div>
            <button onclick="refazerSimuladoB2()" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; border: none; padding: 12px 26px; border-radius: 12px; font-weight: bold; font-size: 1.05rem; cursor: pointer; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4); margin-top: 10px;">
                🔄 Refazer Simulado B2
            </button>
        `;
        if (btnAvancar) btnAvancar.style.display = 'none';
    }
}

function refazerSimuladoB2() {
    simuladoB2Submetido = false;
    respostasSimuladoB2 = {};
    const container = document.getElementById('conteudo-etapa');
    const dadosCurso = getDadosCursoAtivo();
    const mod = dadosCurso[moduloAtivoIndex];
    if (mod) renderizarSimuladoB2(container, mod);
}

function abrirModalCertificado() {
    const modal = document.getElementById('modal-certificado');
    if (!modal) return;

    const elNome = document.getElementById('cert-nome-aluno');
    const elData = document.getElementById('cert-data');
    const elHash = document.getElementById('cert-hash');

    if (elNome) elNome.innerText = nomeUsuario || 'Estudante';
    if (elData) elData.innerText = progressoGlobal.cert_date || new Date().toLocaleDateString('pt-BR');
    if (elHash) {
        if (!progressoGlobal.cert_hash) {
            progressoGlobal.cert_hash = 'JA-B2-' + Math.floor(100000 + Math.random() * 900000) + '-' + Date.now().toString(36).toUpperCase();
            salvarProgressoGlobal();
        }
        elHash.innerText = progressoGlobal.cert_hash;
    }

    modal.style.display = 'flex';
}

function fecharModalCertificado() {
    const modal = document.getElementById('modal-certificado');
    if (modal) modal.style.display = 'none';
}

function imprimirCertificado() {
    window.print();
}

// Avançar e Voltar Etapas
function avancarEtapa() {
    const dadosCurso = getDadosCursoAtivo();
    if (!dadosCurso || dadosCurso.length === 0) return;
    const mod = dadosCurso[moduloAtivoIndex];
    if (!mod) return;

    if (etapaAtual === 2 && dropAtual < mod.stage2_drops.length - 1) {
        dropAtual++;
        renderizarEtapa();
    } else if (etapaAtual < 5) {
        etapaAtual++;
        dropAtual = 0;
        const btnAvancar = document.getElementById('btn-avancar');
        if (btnAvancar) btnAvancar.innerText = "Avançar ➔";
        renderizarEtapa();
    } else {
        fecharAula();
    }
}

function voltarEtapa() {
    const dadosCurso = getDadosCursoAtivo();
    if (!dadosCurso || dadosCurso.length === 0) return;
    const mod = dadosCurso[moduloAtivoIndex];
    if (!mod) return;

    if (etapaAtual === 2 && dropAtual > 0) {
        dropAtual--;
        renderizarEtapa();
    } else if (etapaAtual > 1) {
        etapaAtual--;
        if (etapaAtual === 2) {
            dropAtual = mod.stage2_drops.length - 1;
        } else {
            dropAtual = 0;
        }
        const btnAvancar = document.getElementById('btn-avancar');
        if (btnAvancar) btnAvancar.innerText = "Avançar ➔";
        renderizarEtapa();
    }
}

// Funções de feedback e áudio (Área Multi-Questões)
function verificarRespostaPraticaMassa(idx, isCorrect, btnElement) {
    const fb = document.getElementById(`fb-pratica-${idx}`);
    if (!fb) return;

    const parent = btnElement.parentElement;
    parent.querySelectorAll('button').forEach(b => b.style.opacity = '0.6');
    btnElement.style.opacity = '1';

    if (isCorrect) {
        btnElement.style.borderColor = '#22c55e';
        btnElement.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
        fb.innerHTML = "<span style='color: #22c55e;'>✨ Correto! Mandou muito bem!</span>";
        playBeep('success');
    } else {
        btnElement.style.borderColor = '#ef4444';
        btnElement.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
        fb.innerHTML = "<span style='color: #ef4444;'>❌ Ops, resposta incorreta. Tente outra!</span>";
        playBeep('error');
    }
}

function verificarDialogoMassa(idx, feedback, isCorrect, btnElement) {
    const fb = document.getElementById(`fb-dialogo-${idx}`);
    if (!fb) return;

    const parent = btnElement.parentElement;
    parent.querySelectorAll('button').forEach(b => b.style.opacity = '0.6');
    btnElement.style.opacity = '1';

    const cor = isCorrect ? '#22c55e' : '#ef4444';
    if (isCorrect) {
        btnElement.style.borderColor = '#22c55e';
        btnElement.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
        playBeep('success');
    } else {
        btnElement.style.borderColor = '#ef4444';
        btnElement.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
        playBeep('error');
    }
    fb.innerHTML = `<span style="color: ${cor};">${fNome(feedback)}</span>`;
}

function tocarAudio(texto) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(texto);
        u.lang = 'ja-JP';
        window.speechSynthesis.speak(u);
    }
}