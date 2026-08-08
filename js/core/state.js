// ======================================
// MÓDULO CORE - INFRAESTRUTURA DO APPSTATE
// Store Central de Estado da Aplicação & API de Mutadores Centralizados
// ======================================

var AppState = {
    user: {
        progressoGlobal: {},
        xp: 0,
        streak: 0,
        achievements: []
    },

    course: {
        level: 'A1',
        moduleIndex: 0,
        stage: 1,
        dropIndex: 0,
        unlocked: []
    },

    srs: {
        activeDeck: [],
        currentIndex: 0,
        revealed: false,
        filter: 'todos',
        stats: {
            acertos: 0,
            erros: 0
        }
    },

    dictionary: {
        universalGlossary: [],
        filteredGlossary: []
    },

    ui: {
        currentTab: 0,
        currentTheme: 'dark',
        currentLanguage: 'pt-BR',
        currentPage: ''
    },

    runtime: {
        initialized: false,
        bootTimestamp: Date.now(),
        version: '1.0.0'
    },

    // ======================================
    // API OFICIAL DE MUTADORES CENTRALIZADOS (SETTERS)
    // Sincronizam AppState e o estado legado simultaneamente
    // ======================================

    // --- USER SETTERS ---
    setProgress: function (progress) {
        const val = (typeof progress === 'object' && progress !== null) ? progress : {};
        this.user.progressoGlobal = val;
        if (typeof window !== 'undefined') window.progressoGlobal = val;
        return val;
    },

    setXP: function (xp) {
        const val = typeof xp === 'number' && !isNaN(xp) ? Math.max(0, xp) : (parseInt(xp, 10) || 0);
        this.user.xp = val;
        if (typeof localStorage !== 'undefined') {
            try { localStorage.setItem('ja_user_xp', val.toString()); } catch (e) { }
        }
        return val;
    },

    setStreak: function (streak) {
        const val = typeof streak === 'number' && !isNaN(streak) ? Math.max(0, streak) : (parseInt(streak, 10) || 0);
        this.user.streak = val;
        return val;
    },

    setAchievements: function (achievements) {
        const val = Array.isArray(achievements) ? achievements : [];
        this.user.achievements = val;
        return val;
    },

    // --- COURSE SETTERS ---
    setLevel: function (level) {
        const val = typeof level === 'string' && level ? level : 'A1';
        this.course.level = val;
        if (typeof window !== 'undefined') window.nivelAtivo = val;
        return val;
    },

    setModule: function (index) {
        const val = typeof index === 'number' && !isNaN(index) ? Math.max(0, index) : (parseInt(index, 10) || 0);
        this.course.moduleIndex = val;
        if (typeof window !== 'undefined') window.moduloAtivoIndex = val;
        return val;
    },

    setStage: function (stage) {
        const val = typeof stage === 'number' && !isNaN(stage) ? Math.max(1, stage) : (parseInt(stage, 10) || 1);
        this.course.stage = val;
        if (typeof window !== 'undefined') window.etapaAtual = val;
        return val;
    },

    setDrop: function (index) {
        const val = typeof index === 'number' && !isNaN(index) ? Math.max(0, index) : (parseInt(index, 10) || 0);
        this.course.dropIndex = val;
        if (typeof window !== 'undefined') window.dropAtual = val;
        return val;
    },

    setUnlockedModules: function (list) {
        const val = Array.isArray(list) ? list : (list ? [String(list)] : []);
        this.course.unlocked = val;
        if (typeof window !== 'undefined') window.modoDesbloqueado = val.length > 0;
        return val;
    },

    // --- SRS SETTERS ---
    setSRSDeck: function (deck) {
        const val = Array.isArray(deck) ? deck : [];
        this.srs.activeDeck = val;
        if (typeof window !== 'undefined') window.srsSessaoCards = val;
        return val;
    },

    setSRSIndex: function (index) {
        const val = typeof index === 'number' && !isNaN(index) ? Math.max(0, index) : (parseInt(index, 10) || 0);
        this.srs.currentIndex = val;
        if (typeof window !== 'undefined') window.srsIndexAtivo = val;
        return val;
    },

    setSRSReveal: function (state) {
        const val = Boolean(state);
        this.srs.revealed = val;
        if (typeof window !== 'undefined') window.srsCardRevelado = val;
        return val;
    },

    setSRSFilter: function (filter) {
        const val = typeof filter === 'string' && filter ? filter : 'todos';
        this.srs.filter = val;
        if (typeof window !== 'undefined') window.srsModoFiltro = val;
        return val;
    },

    setSRSStats: function (stats) {
        const val = (typeof stats === 'object' && stats !== null) ? stats : { acertos: 0, erros: 0 };
        this.srs.stats = val;
        return val;
    },

    // --- DICTIONARY SETTERS ---
    setDictionaryCache: function (data) {
        const val = Array.isArray(data) ? data : [];
        this.dictionary.universalGlossary = val;
        if (typeof window !== 'undefined') window.glossarioUniversalData = val;
        return val;
    },

    setFilteredDictionary: function (data) {
        const val = Array.isArray(data) ? data : [];
        this.dictionary.filteredGlossary = val;
        if (typeof window !== 'undefined') window.glossarioFiltradoData = val;
        return val;
    },

    // --- UI SETTERS ---
    setUITheme: function (theme) {
        const val = typeof theme === 'string' && theme ? theme : 'dark';
        this.ui.currentTheme = val;
        return val;
    },

    setUILanguage: function (lang) {
        const val = typeof lang === 'string' && lang ? lang : 'pt-BR';
        this.ui.currentLanguage = val;
        return val;
    },

    setUITab: function (tabIndex) {
        const val = typeof tabIndex === 'number' && !isNaN(tabIndex) ? Math.max(0, tabIndex) : (parseInt(tabIndex, 10) || 0);
        this.ui.currentTab = val;
        return val;
    },

    // --- UNIFIED DOMAIN MUTATORS ---
    markModuleCompleted: function (modId, level) {
        if (!modId) return;
        const prog = this.user.progressoGlobal || {};
        if (!Array.isArray(prog.modulosConcluidos)) prog.modulosConcluidos = [];

        const targetId = (typeof modId === 'object' && modId !== null) ? (modId.id || '') : String(modId);
        if (!targetId) return;

        if (!prog.modulosConcluidos.includes(targetId)) {
            prog.modulosConcluidos.push(targetId);
        }
        this.setProgress(prog);
        if (typeof salvarProgressoGlobal === 'function') salvarProgressoGlobal();
        return prog;
    },

    unlockNextModule: function (level, currentModIndex) {
        const prog = this.user.progressoGlobal || {};
        if (!Array.isArray(prog.modulosDesbloqueados)) prog.modulosDesbloqueados = ["a1_mod_01"];

        const lvl = (level || 'A1').toLowerCase();
        const cursos = (typeof getTodosOsCursos === 'function') ? getTodosOsCursos() : {};
        const lista = cursos[level] || cursos[level.toUpperCase()] || [];
        const nextMod = (typeof currentModIndex === 'number' && lista) ? lista[currentModIndex + 1] : null;

        if (nextMod && nextMod.id) {
            if (!prog.modulosDesbloqueados.includes(nextMod.id)) {
                prog.modulosDesbloqueados.push(nextMod.id);
            }
        }

        if (typeof currentModIndex === 'number') {
            const bodyLang = (typeof document !== 'undefined' && document.body) ? (document.body.getAttribute('data-lang') || '') : '';
            const path = (typeof window !== 'undefined' && window.location) ? window.location.pathname.toLowerCase() : '';
            const isSpanish = bodyLang === 'spanish' || bodyLang === 'es-ES' || path.includes('espanhol') || path.includes('es-es');
            const isEnglish = bodyLang === 'english' || bodyLang === 'en-US' || path.includes('ingles') || path.includes('en-us');

            const prefix = isSpanish ? 'es_' : (isEnglish ? 'en_' : '');
            const nextIdFallback = isSpanish
                ? `${prefix}${lvl}_mod_${currentModIndex + 2}`
                : `${prefix}${lvl}_mod_${String(currentModIndex + 2).padStart(2, '0')}`;

            if (!prog.modulosDesbloqueados.includes(nextIdFallback)) {
                prog.modulosDesbloqueados.push(nextIdFallback);
            }
        }

        this.setProgress(prog);
        if (typeof salvarProgressoGlobal === 'function') salvarProgressoGlobal();
        return prog;
    },

    markSpecialModuleCompleted: function (modIdx, courseType) {
        if (modIdx === undefined || modIdx === null || !courseType) return;
        const key = courseType.toLowerCase();
        let progressKey = 'progress_' + key;
        if (key === 'phrasal' || key === 'phrasal_verbs') progressKey = 'progress_phrasal_verbs';
        else if (key === 'kanji' || key === 'kanji_n5') progressKey = 'progress_kanji';

        const prog = this.user.progressoGlobal || {};
        if (!Array.isArray(prog[progressKey])) prog[progressKey] = [];

        if (!prog[progressKey].includes(modIdx)) {
            prog[progressKey].push(modIdx);
        }
        this.setProgress(prog);
        if (typeof salvarProgressoGlobal === 'function') salvarProgressoGlobal();
        return prog;
    },

    unmarkSpecialModuleCompleted: function (modIdx, courseType) {
        if (modIdx === undefined || modIdx === null || !courseType) return;
        const key = courseType.toLowerCase();
        let progressKey = 'progress_' + key;
        if (key === 'phrasal' || key === 'phrasal_verbs') progressKey = 'progress_phrasal_verbs';
        else if (key === 'kanji' || key === 'kanji_n5') progressKey = 'progress_kanji';

        const prog = this.user.progressoGlobal || {};
        if (!Array.isArray(prog[progressKey])) prog[progressKey] = [];

        const idx = prog[progressKey].indexOf(modIdx);
        if (idx > -1) {
            prog[progressKey].splice(idx, 1);
        }
        this.setProgress(prog);
        if (typeof salvarProgressoGlobal === 'function') salvarProgressoGlobal();
        return prog;
    }
};

// Exposição global segura sem sobrescrever o objeto se já existir
if (typeof window !== 'undefined') {
    if (!window.AppState) {
        window.AppState = AppState;
    }
}

/**
 * Função de sincronização espelhada (Mirror Sync)
 * Copia os valores das variáveis globais legadas para o AppState
 * SEM alterar nenhuma leitura, escrita ou comportamento das variáveis existentes.
 */
function syncAppStateMirror() {
    if (typeof window === 'undefined' || !window.AppState) return;
    try {
        const state = window.AppState;

        // User Mirror
        if (typeof progressoGlobal !== 'undefined') state.user.progressoGlobal = progressoGlobal;
        if (typeof localStorage !== 'undefined') {
            const rawXp = localStorage.getItem('ja_user_xp');
            state.user.xp = rawXp !== null ? (parseInt(rawXp, 10) || 0) : 0;

            const rawStreak = localStorage.getItem('ja_streak_data');
            if (rawStreak) {
                try {
                    const parsed = JSON.parse(rawStreak);
                    state.user.streak = parsed.count || 0;
                } catch (e) { }
            }

            const rawAch = localStorage.getItem('ja_unlocked_achievements');
            if (rawAch) {
                try {
                    state.user.achievements = Object.keys(JSON.parse(rawAch));
                } catch (e) { }
            }
        }

        // Course Mirror
        if (typeof nivelAtivo !== 'undefined') state.course.level = nivelAtivo;
        if (typeof moduloAtivoIndex !== 'undefined') state.course.moduleIndex = moduloAtivoIndex;
        if (typeof etapaAtual !== 'undefined') state.course.stage = etapaAtual;
        if (typeof dropAtual !== 'undefined') state.course.dropIndex = dropAtual;
        if (typeof modoDesbloqueado !== 'undefined') state.course.unlocked = modoDesbloqueado ? ['ALL'] : [];

        // SRS Mirror
        if (typeof srsSessaoCards !== 'undefined') state.srs.activeDeck = srsSessaoCards;
        if (typeof srsIndexAtivo !== 'undefined') state.srs.currentIndex = srsIndexAtivo;
        if (typeof srsCardRevelado !== 'undefined') state.srs.revealed = srsCardRevelado;
        if (typeof srsModoFiltro !== 'undefined') state.srs.filter = srsModoFiltro;

        // Dictionary Mirror
        if (typeof glossarioUniversalData !== 'undefined') state.dictionary.universalGlossary = glossarioUniversalData;
        if (typeof glossarioFiltradoData !== 'undefined') state.dictionary.filteredGlossary = glossarioFiltradoData;

        // UI Mirror
        if (typeof document !== 'undefined') {
            state.ui.currentPage = (typeof window !== 'undefined' && window.location) ? window.location.pathname : '';
            state.ui.currentLanguage = (document.body && document.body.getAttribute) ? (document.body.getAttribute('data-lang') || 'pt-BR') : 'pt-BR';
            state.ui.currentTheme = (document.body && document.body.classList) ? (document.body.classList.contains('dark-theme') ? 'dark' : 'light') : 'dark';
        }

        state.runtime.initialized = true;
    } catch (e) {
        console.warn('[AppState] Aviso na sincronização espelhada:', e);
    }
}

// Exposição global da função de sincronização
if (typeof window !== 'undefined') {
    window.syncAppStateMirror = syncAppStateMirror;
}
