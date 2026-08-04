// ============================================================================
// JAPÃO ACADEMY — SISTEMA UNIFICADO DE INICIALIZAÇÃO & BOOTSTRAP (ENTRYPOINT)
// ============================================================================
/**
 * @fileoverview Arquivo Ponto de Entrada (Entrypoint) Principal do Japão Academy.
 * @description Refatorado na Fase 2 para servir exclusivamente como orquestrador
 * de bootstrap, mapeamento de eventos globais e distribuição de chamadas entre
 * os módulos modularizados do sistema.
 *
 * ARQUITETURA DE MÓDULOS CARREGADOS NO DOM:
 * ----------------------------------------------------------------------------
 * 1. CORE MODULES:
 *    - js/core/config.js      : Estado global, modos de curso e preferências
 *    - js/core/constants.js   : Dicionários fonéticos, matrizes e alfabetos
 *    - js/core/utils.js       : Utilitários puros, sanitização e formatação
 *    - js/core/theme.js       : Gestão de tema escuro/claro e transições
 *    - js/core/audio.js       : Síntese e reprodução de áudio fonético
 *    - js/core/toast.js       : Notificações toast em tempo real
 *    - js/core/storage.js     : LocalStorage, Firestore Cloud Sync & Auth
 *    - js/core/dom.js         : Injeção de modais, cabeçalho e heatmap
 *    - js/core/events.js      : Listeners de formulários e Service Worker PWA
 *    - js/core/bootstrap.js   : Orquestrador unificado da inicialização
 *
 * 2. DOMAIN MODULES:
 *    - js/course/*            : Trilha principal de cursos A1-B2 e quizzes
 *    - js/kanji/*             : Motor de ideogramas N5-N1 e canvas motor
 *    - js/phrasal/*           : Navegação e renderização de Phrasal Verbs
 *    - js/pronunciation/*     : Motor de reconhecimento de voz e par mínimo
 *    - js/game/*              : Gamificação (XP, Ranks, Ranking e Minigames)
 *    - js/srs/*               : Algoritmo de Repetição Espaçada (SM-2)
 * ----------------------------------------------------------------------------
 * @version 2.5.0
 * @author Senior Software Architect - Japão Academy
 */

// ============================================================================
// REGISTRO DE EVENTOS GLOBAIS DA APLICAÇÃO (DOMContentLoaded & WIN LOAD)
// ============================================================================

/**
 * Listener Principal de Inicialização da Aplicação.
 * Disparado quando a estrutura do DOM está totalmente carregada e pronta.
 */
document.addEventListener("DOMContentLoaded", function onDOMContentLoaded() {
    console.log("⚡ [Japão Academy] DOM carregado. Iniciando bootstrap dos módulos...");

    try {
        // 1. Invoca o orquestrador unificado de bootstrap
        if (typeof initializeApp === 'function') {
            initializeApp();
        } else if (typeof initApp === 'function') {
            initApp();
        } else {
            console.warn("⚠️ Função initializeApp() não encontrada. Verifique se js/core/bootstrap.js foi incluído.");
        }

        processarRevisaoSolicitadaPeloDashboard();

        // 2. Registro de leitores de teclado e navegação de acessibilidade
        registrarAtalhosDeTecladoGlobais();

        // 3. Monitoramento de estado de rede para modo offline PWA
        registrarObservadorDeConectividade();

    } catch (err) {
        console.error("❌ [Japão Academy] Falha crítica no bootstrap da aplicação:", err);
        if (typeof mostrarErroRecuperavelUX === 'function') mostrarErroRecuperavelUX('dataset', 'Não foi possível carregar a aplicação');
        else if (typeof mostrarToast === 'function') mostrarToast('⚠️ Não foi possível carregar todo o conteúdo. Atualize a página para tentar novamente.');
    }
});

/**
 * Listener Secundário para recursos pesados (Imagens, Canvas e WebFonts).
 */
window.addEventListener("load", function onWindowLoad() {
    console.log("✨ [Japão Academy] Todos os recursos estáticos e fontes carregados com sucesso.");
});

// ============================================================================
// FUNÇÕES AUXILIARES DE EVENTOS E DIAGNÓSTICO
// ============================================================================

/**
 * Registra atalhos globais de acessibilidade e interação por teclado.
 */
function registrarAtalhosDeTecladoGlobais() {
    window.addEventListener("keydown", function(event) {
        // Tecla ESC fecha modais abertos no sistema
        if (event.key === "Escape") {
            if (typeof fecharModalAuth === 'function') fecharModalAuth();
            if (typeof fecharModalOfensiva === 'function') fecharModalOfensiva();
            if (typeof fecharModalConquistas === 'function') fecharModalConquistas();
            if (typeof fecharModalDicionario === 'function') fecharModalDicionario();
            if (typeof fecharOpcoesCurso === 'function') fecharOpcoesCurso();
            if (typeof fecharModalCertificado === 'function') fecharModalCertificado();
        }
    });
}

/**
 * Monitora alternância entre conexão Online / Offline para exibição de toasts.
 */
function registrarObservadorDeConectividade() {
    window.addEventListener("online", function() {
        if (typeof atualizarIndicadorSincronizacao === 'function') atualizarIndicadorSincronizacao('syncing');
        if (typeof mostrarToast === 'function') {
            mostrarToast("🟢 Conexão restabelecida! Sincronizando com a nuvem...");
        }
        if (typeof salvarSilenciosamenteNaNuvem === 'function') {
            salvarSilenciosamenteNaNuvem();
        } else if (typeof atualizarIndicadorSincronizacao === 'function') {
            atualizarIndicadorSincronizacao('local');
        }
    });

    window.addEventListener("offline", function() {
        if (typeof atualizarIndicadorSincronizacao === 'function') atualizarIndicadorSincronizacao('offline');
        if (typeof mostrarToast === 'function') {
            mostrarToast("📡 Modo Offline ativado. Seus dados estão salvos localmente!");
        }
    });
}

function processarRevisaoSolicitadaPeloDashboard() {
    if (typeof window === 'undefined' || !window.location || typeof URLSearchParams === 'undefined') return;
    const parametros = new URLSearchParams(window.location.search || '');
    const tipo = parametros.get('iniciar_srs');
    const tiposPermitidos = new Set(['a1', 'a2', 'b1', 'b2', 'hiragana', 'katakana', 'kanji', 'kanji_n4', 'kanji_n3', 'kanji_n2', 'kanji_n1', 'phrasal_verbs']);
    if (!tipo || !tiposPermitidos.has(tipo) || typeof iniciarSessaoSRS !== 'function') return;

    parametros.delete('iniciar_srs');
    if (window.history && typeof window.history.replaceState === 'function') {
        const consulta = parametros.toString();
        window.history.replaceState({}, '', `${window.location.pathname}${consulta ? `?${consulta}` : ''}${window.location.hash || ''}`);
    }
    const iniciar = () => iniciarSessaoSRS(tipo);
    if (typeof requestAnimationFrame === 'function') requestAnimationFrame(iniciar);
    else setTimeout(iniciar, 0);
}

// ============================================================================
// REGISTRO DE SYMBOLS E COMPATIBILIDADE GLOBAL NO OBJETO WINDOW
// ============================================================================

if (typeof window !== 'undefined') {
    window.JAPAO_ACADEMY_BOOTSTRAP_READY = true;
    window.processarRevisaoSolicitadaPeloDashboard = processarRevisaoSolicitadaPeloDashboard;

    /**
     * Retorna um relatório completo de telemetria e estado dos módulos ativados.
     * @returns {Object} Dados do estado do app
     */
    window.getJapaoAcademyStatus = function() {
        return {
            status: "OK",
            version: "2.5.0",
            mode: (typeof courseMode !== 'undefined' ? courseMode : document.body.getAttribute('data-mode')),
            nivelAtivo: (typeof nivelAtivo !== 'undefined' ? nivelAtivo : 'A1'),
            nomeUsuario: (typeof nomeUsuario !== 'undefined' ? nomeUsuario : 'Estudante'),
            modoDesbloqueado: (typeof modoDesbloqueado !== 'undefined' ? modoDesbloqueado : false),
            progresso: typeof progressoGlobal !== 'undefined' ? progressoGlobal : null,
            modulesLoaded: {
                config: typeof courseMode !== 'undefined',
                constants: typeof CAT_NAMES !== 'undefined',
                utils: typeof formatarTextoJapones === 'function',
                theme: typeof toggleTheme === 'function',
                storage: typeof salvarProgressoGlobal === 'function',
                dom: typeof garantirElementosCabecalhoEModal === 'function',
                events: typeof executarLoginEmail === 'function',
                bootstrap: typeof initializeApp === 'function'
            }
        };
    };
}
