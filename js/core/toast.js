// ======================================
// MÓDULO CORE - TOAST
// ======================================

function mostrarToast(mensagem, duracao = 3500) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.setAttribute('role', 'alert');
        container.setAttribute('aria-live', 'polite');
        if (document.body) {
            document.body.appendChild(container);
        }
    }
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-notification toast-enter';
    toast.innerHTML = mensagem;
    container.appendChild(toast);

    if (typeof requestAnimationFrame === 'function') {
        requestAnimationFrame(() => toast.classList.add('toast-visible'));
    } else {
        toast.classList.add('toast-visible');
    }

    setTimeout(() => {
        toast.classList.remove('toast-visible');
        toast.classList.add('toast-exit');
        setTimeout(() => toast.remove(), 400);
    }, duracao);
}

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.mostrarToast = mostrarToast;
}
