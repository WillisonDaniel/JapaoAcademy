// ======================================
// MÓDULO CORE - BOOTSTRAP DE INICIALIZAÇÃO DE APLICAÇÃO
// ======================================

function initializeApp() {

    const shouldLoadModuleNormalizer = typeof document !== 'undefined'
        && !!document.getElementById('tabContainer');

    if (shouldLoadModuleNormalizer && typeof window !== 'undefined' && typeof window.normalizeModule === 'undefined') {
        const isSubdir = window.location.pathname.includes('/html/');
        const scriptPath = (isSubdir ? '../../' : '') + 'js/course/moduleNormalizer.js';
        const script = document.createElement('script');
        script.src = scriptPath;
        document.head.appendChild(script);
        console.log('[BOOT] 📦 Carregando dinamicamente moduleNormalizer.js...');
    }

    const pageUrl = (typeof window !== 'undefined' && window.location) ? window.location.pathname : 'unknown';
    const bodyLang = (typeof document !== 'undefined' && document.body) ? (document.body.getAttribute('data-lang') || 'none') : 'none';
    const mode = (typeof document !== 'undefined' && document.body) ? (document.body.getAttribute('data-mode') || (typeof courseMode !== 'undefined' ? courseMode : null)) : null;

    console.log(`[BOOT] 📍 Página Atual: ${pageUrl} | data-mode: "${mode}" | data-lang: "${bodyLang}"`);

    if (typeof initializeTheme === 'function') {
        console.log("[BOOT] Executando: initializeTheme");
        initializeTheme();
    } else {
        console.warn("[BOOT] IGNORADO: initializeTheme (função indisponível)");
    }

    if (typeof carregarProgressoGlobal === 'function') {
        console.log("[BOOT] Executando: initializeStorage (carregarProgressoGlobal)");
        AppState.setProgress(carregarProgressoGlobal());
    }
    if (typeof progressoGlobal !== 'undefined' && progressoGlobal.nivelAtual) {
        AppState.setLevel(progressoGlobal.nivelAtual);
    }
    if (typeof calcularProgressoGlobal === 'function') calcularProgressoGlobal();
    if (typeof atualizarUIProgresso === 'function') atualizarUIProgresso();

    if (mode === 'curso' || mode === 'japa') {
        console.log("[BOOT] Executando: initializeCourse (matched mode: " + mode + ")");
        if (typeof initializeCourse === 'function') initializeCourse(mode);
    }

    if (mode === 'hiragana' || mode === 'katakana' || (mode && mode.startsWith('kanji'))) {
        console.log("[BOOT] Executando: initializeKanji (matched mode: " + mode + ")");
        if (typeof initializeKanji === 'function') initializeKanji(mode);
    }

    if (mode === 'game') {
        console.log("[BOOT] Executando: initializeGame (matched mode: game)");
        if (typeof initializeGame === 'function') initializeGame(mode);
    }

    if (mode === 'pronuncia') {
        console.log("[BOOT] Executando: initializePronunciation (matched mode: pronuncia)");
        if (typeof initializePronunciation === 'function') initializePronunciation(mode);
    }

    if (mode === 'phrasal_verbs' || mode === 'phrasal') {
        console.log("[BOOT] Executando: initializePhrasalVerbs (matched mode: " + mode + ")");
        if (typeof filtrarNivelPhrasalVerbs === 'function') filtrarNivelPhrasalVerbs('A1');
    }

    if (mode === 'dict' || (typeof document !== 'undefined' && document.getElementById('dict-search-input'))) {
        console.log("[BOOT] Executando: initializeDictionary (compilarGlossarioUniversal)");
        if (typeof compilarGlossarioUniversal === 'function') compilarGlossarioUniversal();
    }

    if (typeof document !== 'undefined' && document.getElementById('tabContainer')) {
        console.log("[BOOT] Executando: renderCourseTabs & loadCourseModule(0)");
        if (typeof renderCourseTabs === 'function') renderCourseTabs();
        if (typeof loadCourseModule === 'function') loadCourseModule(0);
    }


    if (typeof garantirElementosCabecalhoEModal === 'function') {
        console.log("[BOOT] Executando: initializeDOM (garantirElementosCabecalhoEModal)");
        garantirElementosCabecalhoEModal();
    }
    if (typeof aplicarOpcoesLeituraNaInterface === 'function') aplicarOpcoesLeituraNaInterface();
    if (typeof sincronizarOpcoesModal === 'function') sincronizarOpcoesModal();
    if (typeof atualizarHeaderStreak === 'function') atualizarHeaderStreak();
    if (typeof checarConquistasGerais === 'function') checarConquistasGerais();


    // Migração e descontaminação do SRS
    try {
        if (typeof migrarDecksSRSMultidioma === 'function') migrarDecksSRSMultidioma();
        const rawGenDeck = localStorage.getItem('ja_srs_a1_deck');
        if (rawGenDeck) {
            const parsedGen = JSON.parse(rawGenDeck);
            if (Array.isArray(parsedGen)) {
                const temKanjiAdv = parsedGen.some(c => c && c.id && (
                    c.id.startsWith('kanji_n3') ||
                    c.id.startsWith('kanji_n2') ||
                    c.id.startsWith('kanji_n1')
                ));
                if (temKanjiAdv) {
                    const deckFiltrado = parsedGen.filter(c => !(c && c.id && (
                        c.id.startsWith('kanji_n3') ||
                        c.id.startsWith('kanji_n2') ||
                        c.id.startsWith('kanji_n1')
                    )));
                    if (deckFiltrado.length === 0) {
                        localStorage.removeItem('ja_srs_a1_deck');
                    } else {
                        localStorage.setItem('ja_srs_a1_deck', JSON.stringify(deckFiltrado));
                    }
                }
            }
        }
    } catch (e) {
        console.warn("Aviso na migração/descontaminação do SRS:", e);
    }

    ['kanji_n3', 'kanji_n2', 'kanji_n1'].forEach(kLvl => {
        if (typeof sincronizarBaralhoSRS === 'function') sincronizarBaralhoSRS(kLvl);
    });

    if (mode && typeof initializeSRS === 'function') {
        initializeSRS(mode);
    }

    if (typeof inicializarAuthObserverFirebase === 'function') {
        inicializarAuthObserverFirebase();
    }

    if (typeof syncAppStateMirror === 'function') {
        syncAppStateMirror();
    }

    const modulosLen = (typeof progressoGlobal !== 'undefined' && progressoGlobal.modulosConcluidos) ? progressoGlobal.modulosConcluidos.length : 0;
    const navNivel = typeof nivelAtivo !== 'undefined' ? nivelAtivo : 'A1';
    console.log("🚀 Idiomas Academy inicializado | Nível ativo:", navNivel, "| Módulos concluídos:", modulosLen);
}

const initApp = initializeApp;

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.initializeApp = initializeApp;
    window.initApp = initApp;
}
