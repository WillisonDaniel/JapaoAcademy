// ======================================
// MÓDULO CORE - TOAST
// ======================================

const uxToastActive = new Map();
const uxToastQueue = [];
const UX_TOAST_MAX_VISIBLE = 3;
const uxMotionTimers = new WeakMap();

function animarEntradaConteudoUX(elemento) {
    if (!elemento || !elemento.classList) return;
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timerAnterior = uxMotionTimers.get(elemento);
    if (timerAnterior) clearTimeout(timerAnterior);
    elemento.classList.remove('ux-content-enter-active');
    elemento.classList.add('ux-content-enter-start');
    const iniciar = () => {
        elemento.classList.add('ux-content-enter-active');
        elemento.classList.remove('ux-content-enter-start');
        const timer = setTimeout(() => {
            elemento.classList.remove('ux-content-enter-active');
            uxMotionTimers.delete(elemento);
        }, 220);
        uxMotionTimers.set(elemento, timer);
    };
    if (typeof requestAnimationFrame === 'function') requestAnimationFrame(iniciar);
    else iniciar();
}

function inferirCategoriaToast(mensagem) {
    const texto = String(mensagem || '').toLowerCase();
    if (/❌|erro|falha|não foi possível/.test(texto)) return 'error';
    if (/⚠|offline|atenção|quase|bloqueado/.test(texto)) return 'warning';
    if (/✅|✨|🎉|🏆|sucesso|conclu|salvo|restaurado|bem-vindo|autenticado/.test(texto)) return 'success';
    return 'info';
}

function assinaturaToast(mensagem) {
    return String(mensagem || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function processarFilaToastUX() {
    if (uxToastActive.size >= UX_TOAST_MAX_VISIBLE || uxToastQueue.length === 0) return;
    const proximo = uxToastQueue.shift();
    exibirToastUX(proximo);
}

function fecharToastUX(toast) {
    if (!toast || toast.dataset.uxClosing === 'true') return;
    toast.dataset.uxClosing = 'true';
    if (toast._uxTimer) clearTimeout(toast._uxTimer);
    toast.classList.remove('toast-visible');
    toast.classList.add('toast-exit');
    setTimeout(() => {
        const assinatura = toast.dataset.uxSignature;
        if (assinatura) uxToastActive.delete(assinatura);
        toast.remove();
        processarFilaToastUX();
    }, 280);
}

function exibirToastUX(item) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.setAttribute('role', 'region');
        container.setAttribute('aria-label', 'Notificações');
        container.setAttribute('aria-live', 'polite');
        if (document.body) {
            document.body.appendChild(container);
        }
    }
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${item.type} toast-enter`;
    toast.dataset.uxSignature = item.signature;
    toast.setAttribute('role', item.type === 'error' ? 'alert' : 'status');
    toast.setAttribute('aria-live', item.type === 'error' ? 'assertive' : 'polite');
    toast.setAttribute('aria-atomic', 'true');
    toast.innerHTML = `
        <div class="toast-content">${item.message}</div>
        ${item.dismissible ? '<button type="button" class="toast-close" aria-label="Fechar notificação">×</button>' : ''}
    `;
    const botaoFechar = toast.querySelector('.toast-close');
    if (botaoFechar) botaoFechar.addEventListener('click', () => fecharToastUX(toast));
    container.appendChild(toast);
    uxToastActive.set(item.signature, toast);

    if (typeof requestAnimationFrame === 'function') {
        requestAnimationFrame(() => toast.classList.add('toast-visible'));
    } else {
        toast.classList.add('toast-visible');
    }

    toast._uxTimer = setTimeout(() => fecharToastUX(toast), item.duration);
}

function mostrarToast(mensagem, duracao = 3500, opcoes = {}) {
    if (duracao && typeof duracao === 'object') {
        opcoes = duracao;
        duracao = opcoes.duration || 3500;
    }
    const type = opcoes.type || inferirCategoriaToast(mensagem);
    const signature = assinaturaToast(mensagem);
    if (!signature || uxToastActive.has(signature) || uxToastQueue.some(item => item.signature === signature)) {
        return uxToastActive.get(signature) || null;
    }
    const item = {
        message: mensagem,
        duration: Math.max(1200, Number(duracao) || 3500),
        type,
        signature,
        dismissible: opcoes.dismissible != null ? !!opcoes.dismissible : type === 'error'
    };
    if (uxToastActive.size >= UX_TOAST_MAX_VISIBLE) uxToastQueue.push(item);
    else exibirToastUX(item);
    return uxToastActive.get(signature) || null;
}

function escaparHtmlUX(valor) {
    return String(valor == null ? '' : valor)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function criarEstadoVazioUX(opcoes = {}) {
    const icone = escaparHtmlUX(opcoes.icon || 'ℹ️');
    const titulo = escaparHtmlUX(opcoes.title || 'Nada por aqui ainda');
    const descricao = escaparHtmlUX(opcoes.description || 'Não há itens disponíveis neste momento.');
    const recomendacao = opcoes.recommendation
        ? `<span class="ux-empty-recommendation">${escaparHtmlUX(opcoes.recommendation)}</span>`
        : '';
    const acao = opcoes.actionLabel && opcoes.action
        ? `<button type="button" class="ux-empty-action" onclick="${opcoes.action}">${escaparHtmlUX(opcoes.actionLabel)}</button>`
        : '';
    const classeCompacta = opcoes.compact ? ' ux-empty-state-compact' : '';
    const tipo = opcoes.type === 'error' ? 'error' : 'empty';

    return `
        <span class="ux-empty-state ux-empty-state-${tipo}${classeCompacta}" data-ux-state="${tipo}">
            <span class="ux-empty-icon" aria-hidden="true">${icone}</span>
            <span class="ux-empty-content">
                <strong class="ux-empty-title">${titulo}</strong>
                <span class="ux-empty-description">${descricao}</span>
                ${recomendacao}
                ${acao}
            </span>
        </span>
    `;
}

function aplicarEstadoVazioUX(container, opcoes = {}) {
    if (!container) return false;
    container.innerHTML = criarEstadoVazioUX(opcoes);
    container.setAttribute('role', opcoes.type === 'error' ? 'alert' : 'status');
    container.setAttribute('aria-live', opcoes.type === 'error' ? 'assertive' : 'polite');
    container.setAttribute('aria-atomic', 'true');
    container.setAttribute('data-ux-empty-active', 'true');
    animarEntradaConteudoUX(container);
    return true;
}

function limparEstadoVazioUX(container) {
    if (!container) return;
    container.removeAttribute('data-ux-empty-active');
    container.removeAttribute('role');
    container.removeAttribute('aria-live');
    container.removeAttribute('aria-atomic');
}

const uxErrorMessages = {
    network: 'Não foi possível concluir a operação. Verifique sua conexão e tente novamente.',
    firebase: 'Não foi possível acessar a nuvem agora. Seus dados locais continuam seguros.',
    save: 'Não foi possível salvar na nuvem. Verifique sua conexão e tente novamente.',
    load: 'Não foi possível restaurar o backup. Tente novamente quando a conexão estiver estável.',
    auth: 'Não foi possível entrar com esses dados. Confira as informações e tente novamente.',
    register: 'Não foi possível criar a conta. Confira os dados informados e tente novamente.',
    audio: 'O áudio não pôde ser reproduzido. Verifique o volume do dispositivo e tente novamente.',
    voice: 'O reconhecimento de voz não está disponível agora. Verifique o microfone e tente novamente.',
    dataset: 'O conteúdo desta área não pôde ser carregado. Atualize a página para tentar novamente.',
    browser: 'Este recurso não é compatível com o navegador atual.'
};

function obterMensagemErroUX(tipo) {
    return uxErrorMessages[tipo] || uxErrorMessages.network;
}

function mostrarErroRecuperavelUX(tipo, titulo) {
    const mensagem = obterMensagemErroUX(tipo);
    if (typeof mostrarToast === 'function') {
        mostrarToast(`⚠️ <strong>${escaparHtmlUX(titulo || 'Não foi possível concluir')}</strong><br><small>${escaparHtmlUX(mensagem)}</small>`, 7000, { type: 'error', dismissible: true });
    }
    return mensagem;
}

const uxButtonStates = new WeakMap();
const uxSyncLabels = {
    local: { label: 'Salvo localmente', icon: '●' },
    syncing: { label: 'Sincronizando', icon: '↻' },
    synced: { label: 'Sincronizado', icon: '✓' },
    error: { label: 'Falha ao sincronizar', icon: '!' },
    offline: { label: 'Offline', icon: '●' }
};
let uxSyncState = (typeof navigator !== 'undefined' && navigator.onLine === false) ? 'offline' : 'local';

function iniciarEstadoBotao(botao, textoPendente) {
    if (!botao || uxButtonStates.has(botao) || botao.getAttribute('aria-busy') === 'true') return false;
    uxButtonStates.set(botao, {
        html: botao.innerHTML,
        disabled: !!botao.disabled
    });
    botao.disabled = true;
    botao.setAttribute('aria-busy', 'true');
    botao.classList.add('ux-button-loading');
    botao.textContent = textoPendente || 'Processando...';
    return true;
}

function restaurarEstadoBotao(botao) {
    if (!botao) return;
    const estadoOriginal = uxButtonStates.get(botao);
    if (!estadoOriginal) return;
    botao.innerHTML = estadoOriginal.html;
    botao.disabled = estadoOriginal.disabled;
    botao.setAttribute('aria-busy', 'false');
    botao.classList.remove('ux-button-loading', 'ux-button-success');
    uxButtonStates.delete(botao);
}

function aguardarFeedbackBotao(duracao) {
    return new Promise(resolve => setTimeout(resolve, duracao));
}

async function executarComFeedbackBotao(botao, textos, acao) {
    const labels = textos || {};
    if (!iniciarEstadoBotao(botao, labels.pending)) return { success: false, blocked: true };
    try {
        const resultado = await acao();
        const sucesso = resultado !== false && !(resultado && resultado.success === false);
        if (sucesso && labels.success && uxButtonStates.has(botao)) {
            botao.textContent = labels.success;
            botao.setAttribute('aria-busy', 'false');
            botao.classList.remove('ux-button-loading');
            botao.classList.add('ux-button-success');
            await aguardarFeedbackBotao(labels.successDuration || 650);
        }
        return resultado;
    } finally {
        restaurarEstadoBotao(botao);
    }
}

function atualizarIndicadorSincronizacao(estado) {
    const estadoNormalizado = uxSyncLabels[estado] ? estado : 'local';
    uxSyncState = estadoNormalizado;
    if (typeof window !== 'undefined') window.uxSyncState = uxSyncState;
    if (typeof document === 'undefined') return;
    const indicador = document.getElementById('sync-status-indicator');
    if (!indicador) return;
    const config = uxSyncLabels[estadoNormalizado];
    indicador.className = `sync-status-indicator sync-status-${estadoNormalizado}`;
    indicador.setAttribute('data-sync-state', estadoNormalizado);
    indicador.setAttribute('aria-label', config.label);
    indicador.title = config.label;
    indicador.innerHTML = `<span class="sync-status-icon" aria-hidden="true">${config.icon}</span><span>${config.label}</span>`;
}

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.mostrarToast = mostrarToast;
    window.fecharToastUX = fecharToastUX;
    window.animarEntradaConteudoUX = animarEntradaConteudoUX;
    window.criarEstadoVazioUX = criarEstadoVazioUX;
    window.aplicarEstadoVazioUX = aplicarEstadoVazioUX;
    window.limparEstadoVazioUX = limparEstadoVazioUX;
    window.obterMensagemErroUX = obterMensagemErroUX;
    window.mostrarErroRecuperavelUX = mostrarErroRecuperavelUX;
    window.iniciarEstadoBotao = iniciarEstadoBotao;
    window.restaurarEstadoBotao = restaurarEstadoBotao;
    window.executarComFeedbackBotao = executarComFeedbackBotao;
    window.atualizarIndicadorSincronizacao = atualizarIndicadorSincronizacao;
    window.uxSyncState = uxSyncState;
}
