// ======================================
// MÓDULO CORE - GERENCIAMENTO DE EVENTOS E FORMULÁRIOS
// ======================================

async function executarLoginEmail(e) {
    if (e) e.preventDefault();
    const emailEl = document.getElementById('auth-login-email');
    const passEl = document.getElementById('auth-login-password');
    const botao = document.getElementById('btn-auth-login-submit');
    if (!emailEl || !passEl) return;
    if (typeof fazerLoginEmailSenha === 'function') {
        const acao = () => fazerLoginEmailSenha(emailEl.value, passEl.value);
        const res = typeof executarComFeedbackBotao === 'function'
            ? await executarComFeedbackBotao(botao, { pending: 'Entrando...', success: 'Entrada concluída' }, acao)
            : await acao();
        if (res && res.success) {
            emailEl.value = '';
            passEl.value = '';
            if (typeof fecharModalAuth === 'function') fecharModalAuth();
        }
    }
}

async function executarCadastroEmail(e) {
    if (e) e.preventDefault();
    const nameEl = document.getElementById('auth-reg-name');
    const emailEl = document.getElementById('auth-reg-email');
    const passEl = document.getElementById('auth-reg-password');
    const botao = document.getElementById('btn-auth-register-submit');
    if (!emailEl || !passEl) return;
    if (typeof fazerCadastroEmailSenha === 'function') {
        const acao = () => fazerCadastroEmailSenha(emailEl.value, passEl.value, nameEl ? nameEl.value : '');
        const res = typeof executarComFeedbackBotao === 'function'
            ? await executarComFeedbackBotao(botao, { pending: 'Criando conta...', success: 'Conta criada' }, acao)
            : await acao();
        if (res && res.success) {
            if (nameEl) nameEl.value = '';
            emailEl.value = '';
            passEl.value = '';
            if (typeof fecharModalAuth === 'function') fecharModalAuth();
        }
    }
}

async function executarLoginGoogle(botao) {
    if (typeof fazerLoginGoogle === 'function') {
        const acao = () => fazerLoginGoogle();
        const res = typeof executarComFeedbackBotao === 'function'
            ? await executarComFeedbackBotao(botao || document.getElementById('btn-auth-google'), { pending: 'Conectando...', success: 'Conectado' }, acao)
            : await acao();
        if (res && res.success) {
            if (typeof fecharModalAuth === 'function') fecharModalAuth();
        }
    }
}

async function executarSalvarNuvem(botao) {
    if (typeof salvarProgressoNaNuvem !== 'function') return;
    const acao = () => salvarProgressoNaNuvem();
    return typeof executarComFeedbackBotao === 'function'
        ? executarComFeedbackBotao(botao || document.getElementById('btn-cloud-save'), { pending: 'Salvando...', success: 'Salvo na nuvem' }, acao)
        : acao();
}

async function executarCarregarNuvem(botao) {
    if (typeof carregarProgressoDaNuvem !== 'function') return;
    const acao = () => carregarProgressoDaNuvem();
    return typeof executarComFeedbackBotao === 'function'
        ? executarComFeedbackBotao(botao || document.getElementById('btn-cloud-load'), { pending: 'Carregando...', success: 'Dados restaurados' }, acao)
        : acao();
}

function setupGlobalKeybindings() {
    if (typeof window === 'undefined') return;
    window.addEventListener('keydown', (e) => {
        if (e.target && ['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
            return;
        }
    });
}

// Service Worker PWA (Offline)
// Resolve a partir deste script para funcionar tanto na raiz quanto nas páginas
// internas (html/ja-JP e html/en-US), inclusive quando o site está em subpasta.
const SERVICE_WORKER_URL = (typeof document !== 'undefined' && document.currentScript)
    ? new URL('../../sw.js', document.currentScript.src).href
    : './sw.js';
const STUDY_SESSION_SCRIPT_URL = (typeof document !== 'undefined' && document.currentScript)
    ? new URL('study-session.js?v=29f2', document.currentScript.src).href
    : './js/core/study-session.js?v=29f2';

function carregarMedidorSessoesEstudo() {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;
    if (document.body && document.body.getAttribute('data-page') === 'hub') return;
    if (typeof window.inicializarMedicaoSessoesEstudo === 'function' || document.querySelector('script[data-study-session]')) return;
    const script = document.createElement('script');
    script.src = STUDY_SESSION_SCRIPT_URL;
    script.dataset.studySession = 'true';
    script.async = false;
    document.head.appendChild(script);
}

function registrarServiceWorker() {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register(SERVICE_WORKER_URL)
                .then(reg => console.log('⚡ Service Worker PWA Ativo!', reg.scope))
                .catch(err => console.error('Erro ao registrar PWA:', err));
        });
    }
}

// Inicializa os listeners globais
registrarServiceWorker();
setupGlobalKeybindings();
carregarMedidorSessoesEstudo();

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.executarLoginEmail = executarLoginEmail;
    window.executarCadastroEmail = executarCadastroEmail;
    window.executarLoginGoogle = executarLoginGoogle;
    window.executarSalvarNuvem = executarSalvarNuvem;
    window.executarCarregarNuvem = executarCarregarNuvem;
    window.setupGlobalKeybindings = setupGlobalKeybindings;
    window.registrarServiceWorker = registrarServiceWorker;
    window.carregarMedidorSessoesEstudo = carregarMedidorSessoesEstudo;
}
