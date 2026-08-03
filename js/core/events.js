// ======================================
// MÓDULO CORE - GERENCIAMENTO DE EVENTOS E FORMULÁRIOS
// ======================================

async function executarLoginEmail(e) {
    if (e) e.preventDefault();
    const emailEl = document.getElementById('auth-login-email');
    const passEl = document.getElementById('auth-login-password');
    if (!emailEl || !passEl) return;
    if (typeof fazerLoginEmailSenha === 'function') {
        const res = await fazerLoginEmailSenha(emailEl.value, passEl.value);
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
    if (!emailEl || !passEl) return;
    if (typeof fazerCadastroEmailSenha === 'function') {
        const res = await fazerCadastroEmailSenha(emailEl.value, passEl.value, nameEl ? nameEl.value : '');
        if (res && res.success) {
            if (nameEl) nameEl.value = '';
            emailEl.value = '';
            passEl.value = '';
            if (typeof fecharModalAuth === 'function') fecharModalAuth();
        }
    }
}

async function executarLoginGoogle() {
    if (typeof fazerLoginGoogle === 'function') {
        const res = await fazerLoginGoogle();
        if (res && res.success) {
            if (typeof fecharModalAuth === 'function') fecharModalAuth();
        }
    }
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

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.executarLoginEmail = executarLoginEmail;
    window.executarCadastroEmail = executarCadastroEmail;
    window.executarLoginGoogle = executarLoginGoogle;
    window.setupGlobalKeybindings = setupGlobalKeybindings;
    window.registrarServiceWorker = registrarServiceWorker;
}
