// Medicao central de sessoes de estudo (Etapa 29 - Fase 1).
// Mantem apenas um controlador ativo e persiste somente tempo com interacao real.

(function inicializarModuloSessoesEstudo(global) {
    'use strict';

    const INACTIVITY_MS = 2 * 60 * 1000;
    const MIN_ACTIVE_SECONDS = 15;
    const DRAFT_PREFIX = 'ja_study_session_draft_';
    const VALID_ACTIVITY_TYPES = new Set([
        'course', 'quiz', 'srs', 'kanji', 'kana', 'dictionary',
        'pronunciation', 'phrasal-verbs', 'minigame'
    ]);

    function normalizarIdiomaSessao(valor) {
        if (typeof global.normalizeLanguage === 'function') return global.normalizeLanguage(valor);
        const aliases = {
            'ja': 'ja-JP', 'ja-jp': 'ja-JP', 'japanese': 'ja-JP', 'japones': 'ja-JP',
            'en': 'en-US', 'en-us': 'en-US', 'english': 'en-US', 'ingles': 'en-US',
            'es': 'es-ES', 'es-es': 'es-ES', 'spanish': 'es-ES', 'espanhol': 'es-ES',
            'ru': 'ru-RU', 'ru-ru': 'ru-RU', 'russian': 'ru-RU', 'russo': 'ru-RU',
            'it': 'it-IT', 'it-it': 'it-IT', 'italian': 'it-IT', 'italiano': 'it-IT'
        };
        const chave = String(valor || '').trim().toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/_/g, '-');
        return aliases[chave] || null;
    }

    function obterIdiomaAtualSessao() {
        if (typeof global.getCurrentLanguageCode === 'function') return global.getCurrentLanguageCode();
        const caminho = String(global.location && global.location.pathname || '').toLowerCase();
        const informado = global.document && global.document.body
            ? global.document.body.getAttribute('data-lang')
            : '';
        const normalizado = normalizarIdiomaSessao(informado);
        if (normalizado) return normalizado;
        if (caminho.includes('/en-us/')) return 'en-US';
        if (caminho.includes('/es-es/')) return 'es-ES';
        if (caminho.includes('/ru-ru/')) return 'ru-RU';
        if (caminho.includes('/it-it/')) return 'it-IT';
        return 'ja-JP';
    }

    function gerarIdSessao() {
        if (global.crypto && typeof global.crypto.randomUUID === 'function') return global.crypto.randomUUID();
        return `study-${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;
    }

    function dataLocal(data) {
        if (typeof global.obterDataLocalDashboard === 'function') return global.obterDataLocalDashboard(data);
        const ano = data.getFullYear();
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const dia = String(data.getDate()).padStart(2, '0');
        return `${ano}-${mes}-${dia}`;
    }

    function criarControladorSessaoEstudo(opcoes = {}) {
        const agora = opcoes.now || (() => Date.now());
        const agendar = opcoes.setTimeout || ((fn, ms) => global.setTimeout(fn, ms));
        const cancelar = opcoes.clearTimeout || (id => global.clearTimeout(id));
        const obterUsuario = opcoes.getUser || (() => {
            const fb = global.jaFirebase;
            return fb && fb.auth ? fb.auth.currentUser : null;
        });
        const obterXP = opcoes.getXP || (() => {
            const valor = parseInt(global.localStorage && global.localStorage.getItem('ja_user_xp'), 10);
            return Number.isFinite(valor) && valor >= 0 ? valor : 0;
        });
        const registrar = opcoes.registerSession || ((sessao, uid) => (
            typeof global.registrarSessaoDashboard === 'function'
                ? global.registrarSessaoDashboard(sessao, uid)
                : false
        ));
        const salvarRascunho = opcoes.saveDraft || (() => {});
        const removerRascunho = opcoes.removeDraft || (() => {});
        const limiteInatividade = Number(opcoes.inactivityMs) > 0 ? Number(opcoes.inactivityMs) : INACTIVITY_MS;
        const minimoSegundos = Number(opcoes.minActiveSeconds) >= 0 ? Number(opcoes.minActiveSeconds) : MIN_ACTIVE_SECONDS;

        let sessaoAtiva = null;
        let temporizadorInatividade = null;
        let ultimoRascunhoEm = 0;

        function limparTemporizador() {
            if (temporizadorInatividade !== null) cancelar(temporizadorInatividade);
            temporizadorInatividade = null;
        }

        function acumularAte(instante) {
            if (!sessaoAtiva || sessaoAtiva.activeSince === null) return;
            const decorrido = Math.max(0, instante - sessaoAtiva.activeSince);
            sessaoAtiva.activeMilliseconds += Math.min(decorrido, limiteInatividade);
            sessaoAtiva.activeSince = null;
        }

        function criarSnapshot(instante = agora()) {
            if (!sessaoAtiva) return null;
            const corrente = sessaoAtiva.activeSince === null
                ? 0
                : Math.min(Math.max(0, instante - sessaoAtiva.activeSince), limiteInatividade);
            return {
                id: sessaoAtiva.id,
                userId: sessaoAtiva.userId,
                date: sessaoAtiva.date,
                startedAt: sessaoAtiva.startedAt,
                endedAt: null,
                activeSeconds: Math.floor((sessaoAtiva.activeMilliseconds + corrente) / 1000),
                language: sessaoAtiva.language,
                activityType: sessaoAtiva.activityType,
                contentId: sessaoAtiva.contentId,
                interactionCount: sessaoAtiva.interactionCount,
                activityCount: sessaoAtiva.activityCount,
                xpEarned: Math.max(0, obterXP() - sessaoAtiva.xpAtStart),
                endReason: sessaoAtiva.pauseReason || 'closing',
                savedAt: new Date(instante).toISOString()
            };
        }

        function persistirRascunho(forcar = false) {
            if (!sessaoAtiva) return;
            const instante = agora();
            if (!forcar && instante - ultimoRascunhoEm < 30000) return;
            ultimoRascunhoEm = instante;
            salvarRascunho(criarSnapshot(instante), sessaoAtiva.userId);
        }

        function pausar(motivo = 'inactivity') {
            if (!sessaoAtiva) return false;
            acumularAte(agora());
            limparTemporizador();
            sessaoAtiva.status = 'paused';
            sessaoAtiva.pauseReason = motivo;
            persistirRascunho(true);
            return criarSnapshot();
        }

        function agendarInatividade() {
            limparTemporizador();
            temporizadorInatividade = agendar(() => pausar('inactivity'), limiteInatividade);
        }

        function retomar(contarInteracao = true) {
            if (!sessaoAtiva) return false;
            const instante = agora();
            if (sessaoAtiva.activeSince === null) sessaoAtiva.activeSince = instante;
            sessaoAtiva.status = 'active';
            sessaoAtiva.pauseReason = null;
            if (contarInteracao) sessaoAtiva.interactionCount += 1;
            agendarInatividade();
            persistirRascunho(false);
            return criarSnapshot(instante);
        }

        function finalizar(motivo = 'exit', extras = {}) {
            if (!sessaoAtiva) return false;
            const instante = agora();
            acumularAte(instante);
            limparTemporizador();
            if (Number(extras.activityCountDelta) > 0) sessaoAtiva.activityCount += Math.round(Number(extras.activityCountDelta));
            if (extras.contentId) sessaoAtiva.contentId = String(extras.contentId).slice(0, 160);
            const finalizada = {
                ...criarSnapshot(instante),
                endedAt: new Date(instante).toISOString(),
                activeSeconds: Math.floor(sessaoAtiva.activeMilliseconds / 1000),
                endReason: ['completion', 'exit', 'inactivity', 'closing'].includes(motivo) ? motivo : 'exit'
            };
            const uid = sessaoAtiva.userId;
            sessaoAtiva = null;
            removerRascunho(uid);
            if (finalizada.activeSeconds < minimoSegundos || finalizada.interactionCount < 1) return false;
            registrar(finalizada, uid);
            return finalizada;
        }

        function iniciar(contexto = {}) {
            const usuario = obterUsuario();
            if (!usuario || !usuario.uid) return false;
            const tipo = VALID_ACTIVITY_TYPES.has(contexto.activityType) ? contexto.activityType : null;
            if (!tipo) return false;
            const idioma = normalizarIdiomaSessao(contexto.language);
            if (!idioma) return false;
            const conteudo = String(contexto.contentId || '').slice(0, 160);
            if (sessaoAtiva) {
                const mesmaAtividade = sessaoAtiva.activityType === tipo
                    && sessaoAtiva.language === idioma
                    && sessaoAtiva.contentId === conteudo;
                if (mesmaAtividade) return criarSnapshot();
                finalizar('exit');
            }
            const instante = agora();
            sessaoAtiva = {
                id: String(contexto.id || gerarIdSessao()).slice(0, 120),
                userId: String(usuario.uid).slice(0, 128),
                date: dataLocal(new Date(instante)),
                startedAt: new Date(instante).toISOString(),
                activeMilliseconds: 0,
                activeSince: null,
                language: idioma,
                activityType: tipo,
                contentId: conteudo,
                interactionCount: 0,
                activityCount: 0,
                xpAtStart: obterXP(),
                status: 'pending',
                pauseReason: null
            };
            ultimoRascunhoEm = 0;
            persistirRascunho(true);
            return criarSnapshot(instante);
        }

        function atualizar(dados = {}) {
            if (!sessaoAtiva) return false;
            if (dados.contentId) sessaoAtiva.contentId = String(dados.contentId).slice(0, 160);
            if (Number(dados.activityCountDelta) > 0) sessaoAtiva.activityCount += Math.round(Number(dados.activityCountDelta));
            if (Number(dados.interactionCountDelta) > 0) sessaoAtiva.interactionCount += Math.round(Number(dados.interactionCountDelta));
            if (dados.relevantInteraction) {
                if (sessaoAtiva.activeSince === null) retomar(false);
                else agendarInatividade();
            }
            persistirRascunho(false);
            return criarSnapshot();
        }

        function obterAtiva() {
            return criarSnapshot();
        }

        function recuperar(rascunho) {
            const usuario = obterUsuario();
            if (!usuario || !usuario.uid || !rascunho || rascunho.userId !== String(usuario.uid)) return false;
            removerRascunho(usuario.uid);
            const recuperada = {
                ...rascunho,
                endedAt: rascunho.savedAt || new Date(agora()).toISOString(),
                endReason: 'closing'
            };
            if (Number(recuperada.activeSeconds) < minimoSegundos || Number(recuperada.interactionCount) < 1) return false;
            registrar(recuperada, usuario.uid);
            return recuperada;
        }

        return { iniciar, atualizar, pausar, retomar, finalizar, obterAtiva, recuperar };
    }

    function obterContextoAtividade() {
        if (!global.location || !global.document || !global.document.body) return null;
        const caminho = String(global.location.pathname || '').toLowerCase();
        if (/meu-progresso|\/index\.html$|\/hub_(japones|ingles|espanhol|russo|idiomas)\.html$/.test(caminho)) return null;
        const idioma = obterIdiomaAtualSessao();
        if (!idioma) return null;
        let activityType = null;
        if (/dicionario/.test(caminho)) activityType = 'dictionary';
        else if (/pronuncia/.test(caminho)) activityType = 'pronunciation';
        else if (/phrasal/.test(caminho)) activityType = 'phrasal-verbs';
        else if (/minigame/.test(caminho)) activityType = 'minigame';
        else if (/hiragana|katakana/.test(caminho)) activityType = 'kana';
        else if (/kanji/.test(caminho)) activityType = 'kanji';
        else if (/curso/.test(caminho)) {
            const playerAula = global.document.getElementById('player-aula');
            const playerSRS = global.document.getElementById('player-srs');
            const aulaVisivel = playerAula && global.getComputedStyle(playerAula).display !== 'none';
            const srsVisivel = playerSRS && global.getComputedStyle(playerSRS).display !== 'none';
            if (!aulaVisivel && !srsVisivel) return null;
            activityType = srsVisivel ? 'srs' : 'course';
        }
        if (!activityType) return null;
        return {
            language: idioma,
            activityType,
            contentId: String(global.document.body.getAttribute('data-mode') || caminho.split('/').pop() || '').slice(0, 160)
        };
    }

    function inicializarMedicaoSessoesEstudo() {
        if (!global.document || global.__jaStudySessionController) return global.__jaStudySessionController || false;
        const armazenamento = global.localStorage;
        const controlador = criarControladorSessaoEstudo({
            saveDraft: (rascunho, uid) => {
                try { armazenamento.setItem(`${DRAFT_PREFIX}${encodeURIComponent(uid)}`, JSON.stringify(rascunho)); } catch (e) { }
            },
            removeDraft: uid => {
                try { armazenamento.removeItem(`${DRAFT_PREFIX}${encodeURIComponent(uid)}`); } catch (e) { }
            }
        });
        global.__jaStudySessionController = controlador;
        if (global.document.documentElement) global.document.documentElement.setAttribute('data-study-session-ready', 'true');

        const usuario = global.jaFirebase && global.jaFirebase.auth ? global.jaFirebase.auth.currentUser : null;
        if (usuario && usuario.uid) {
            try {
                const chave = `${DRAFT_PREFIX}${encodeURIComponent(usuario.uid)}`;
                const rascunho = JSON.parse(armazenamento.getItem(chave) || 'null');
                if (rascunho) controlador.recuperar(rascunho);
            } catch (e) { }
        }

        const registrarInteracao = () => {
            if (!controlador.obterAtiva()) {
                const contexto = obterContextoAtividade();
                if (!contexto || !controlador.iniciar(contexto)) return;
            }
            controlador.atualizar({ interactionCountDelta: 1, relevantInteraction: true });
        };
        ['pointerdown', 'keydown', 'input', 'change', 'touchstart'].forEach(tipo => {
            global.document.addEventListener(tipo, registrarInteracao, { passive: true });
        });
        global.document.addEventListener('visibilitychange', () => {
            if (global.document.hidden) controlador.pausar('closing');
        });
        global.addEventListener('pagehide', () => controlador.finalizar('closing'));
        global.addEventListener('beforeunload', () => controlador.finalizar('closing'));
        return controlador;
    }

    global.criarControladorSessaoEstudo = criarControladorSessaoEstudo;
    global.inicializarMedicaoSessoesEstudo = inicializarMedicaoSessoesEstudo;
    global.iniciarSessaoEstudo = contexto => {
        const controlador = inicializarMedicaoSessoesEstudo();
        return controlador ? controlador.iniciar(contexto) : false;
    };
    global.atualizarSessaoEstudo = dados => global.__jaStudySessionController ? global.__jaStudySessionController.atualizar(dados) : false;
    global.pausarSessaoEstudo = motivo => global.__jaStudySessionController ? global.__jaStudySessionController.pausar(motivo) : false;
    global.retomarSessaoEstudo = () => global.__jaStudySessionController ? global.__jaStudySessionController.retomar(true) : false;
    global.finalizarSessaoEstudo = (motivo, extras) => global.__jaStudySessionController ? global.__jaStudySessionController.finalizar(motivo, extras) : false;
    global.obterSessaoEstudoAtiva = () => global.__jaStudySessionController ? global.__jaStudySessionController.obterAtiva() : null;

    if (global.document) {
        if (global.document.readyState === 'loading') global.document.addEventListener('DOMContentLoaded', inicializarMedicaoSessoesEstudo, { once: true });
        else inicializarMedicaoSessoesEstudo();
    }
})(typeof window !== 'undefined' ? window : globalThis);
