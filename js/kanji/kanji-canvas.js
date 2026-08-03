// ======================================
// MÓDULO KANJI - MOTOR DE ESCRITA INTERATIVA (CANVAS ENGINE)
// ======================================

const canvasStateMap = {};
let ultimoCanvasAtivoId = null;

// Escutador global de teclado para atalho Ctrl+Z / Cmd+Z (Desfazer Traço)
if (typeof window !== 'undefined') {
    window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
            const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
            if (activeTag === 'input' || activeTag === 'textarea') return;

            let targetId = ultimoCanvasAtivoId;
            const hoveredCanvas = document.querySelector('.kanji-canvas:hover');
            if (hoveredCanvas && hoveredCanvas.id) {
                targetId = hoveredCanvas.id;
            }

            if (targetId) {
                e.preventDefault();
                desfazerUltimoTracoCanvas(targetId);
            }
        }
    });
}

function getCanvasPos(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    let clientX = 0;
    let clientY = 0;

    if (event.touches && event.touches.length > 0) {
        clientX = event.touches[0].clientX;
        clientY = event.touches[0].clientY;
    } else if (event.changedTouches && event.changedTouches.length > 0) {
        clientX = event.changedTouches[0].clientX;
        clientY = event.changedTouches[0].clientY;
    } else {
        clientX = event.clientX;
        clientY = event.clientY;
    }

    const rw = (rect.width && rect.width > 0) ? rect.width : canvas.width;
    const rh = (rect.height && rect.height > 0) ? rect.height : canvas.height;

    const scaleX = canvas.width / rw;
    const scaleY = canvas.height / rh;

    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;

    return {
        x: isNaN(x) ? 0 : x,
        y: isNaN(y) ? 0 : y
    };
}

function redesenharFundoCanvas(canvasEl) {
    if (!canvasEl) return;
    const canvasId = canvasEl.id;
    const rawAttr = canvasEl.getAttribute('data-char') || '';
    const cleanSymbol = rawAttr.split(' ')[0].split('(')[0].trim();

    if (!canvasStateMap[canvasId]) {
        canvasStateMap[canvasId] = {
            isDrawing: false,
            guideVisible: true,
            charSymbol: cleanSymbol
        };
    } else {
        canvasStateMap[canvasId].charSymbol = cleanSymbol;
    }

    const state = canvasStateMap[canvasId];
    const ctx = canvasEl.getContext('2d');
    const w = canvasEl.width;
    const h = canvasEl.height;

    // 1. Limpa o canvas totalmente
    ctx.clearRect(0, 0, w, h);

    // 2. Linhas guia ortogonais discretas (retículo central)
    ctx.save();
    ctx.strokeStyle = document.documentElement.classList.contains('dark-theme') ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);

    ctx.beginPath();
    ctx.moveTo(w / 2, 0); ctx.lineTo(w / 2, h);
    ctx.moveTo(0, h / 2); ctx.lineTo(w, h / 2);
    ctx.stroke();
    ctx.restore();

    // 3. Guia de Molde Translúcido do Caractere (se visível)
    if (state.guideVisible && state.charSymbol) {
        ctx.save();
        const isDark = document.documentElement.classList.contains('dark-theme');
        ctx.font = `${Math.round(h * 0.65)}px 'Noto Sans JP', sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.16)' : 'rgba(0, 0, 0, 0.14)';
        ctx.fillText(state.charSymbol, w / 2, h / 2 + (h * 0.05));
        ctx.restore();
    }
}

function inicializarCanvasInterativo(canvasEl) {
    if (!canvasEl) return;
    const canvasId = canvasEl.id;
    const charSymbol = canvasEl.getAttribute('data-char') || '';

    if (!canvasStateMap[canvasId]) {
        canvasStateMap[canvasId] = {
            isDrawing: false,
            guideVisible: true,
            charSymbol: charSymbol
        };
    }

    redesenharFundoCanvas(canvasEl);

    if (canvasEl.hasAttribute('data-initialized')) return;
    canvasEl.setAttribute('data-initialized', 'true');

    const ctx = canvasEl.getContext('2d');

    function iniciarTraco(e) {
        if (e.type === 'touchstart') e.preventDefault();
        const state = canvasStateMap[canvasId];
        if (!state) return;

        if (typeof interromperAnimacaoKakijun === 'function') interromperAnimacaoKakijun(canvasId);
        ultimoCanvasAtivoId = canvasId;

        // Salva o snapshot atual para permitir desfazer o traço
        if (!state.history) state.history = [];
        const snapCtx = canvasEl.getContext('2d');
        state.history.push(snapCtx.getImageData(0, 0, canvasEl.width, canvasEl.height));
        if (state.history.length > 25) state.history.shift();

        state.isDrawing = true;

        const isDark = document.documentElement.classList.contains('dark-theme');
        ctx.lineWidth = 7;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = isDark ? '#38bdf8' : '#e63946';

        const pos = getCanvasPos(canvasEl, e);
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
    }

    function desenharTraco(e) {
        const state = canvasStateMap[canvasId];
        if (!state || !state.isDrawing) return;
        if (e.type === 'touchmove') e.preventDefault();

        const pos = getCanvasPos(canvasEl, e);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
    }

    function finalizarTraco(e) {
        const state = canvasStateMap[canvasId];
        if (state) state.isDrawing = false;
    }

    // Eventos de Foco e Mouse Hover
    canvasEl.addEventListener('mouseenter', () => { ultimoCanvasAtivoId = canvasId; });
    canvasEl.addEventListener('focus', () => { ultimoCanvasAtivoId = canvasId; });

    // Eventos de Mouse
    canvasEl.addEventListener('mousedown', iniciarTraco);
    canvasEl.addEventListener('mousemove', desenharTraco);
    canvasEl.addEventListener('mouseup', finalizarTraco);
    canvasEl.addEventListener('mouseleave', finalizarTraco);

    // Eventos de Touch Mobile / Tablet
    canvasEl.addEventListener('touchstart', iniciarTraco, { passive: false });
    canvasEl.addEventListener('touchmove', desenharTraco, { passive: false });
    canvasEl.addEventListener('touchend', finalizarTraco, { passive: false });
}

function inicializarTodosOsCanvases() {
    setTimeout(() => {
        document.querySelectorAll('.kanji-canvas').forEach(canvas => {
            inicializarCanvasInterativo(canvas);
        });
    }, 50);
}

function limparCanvas(canvasId) {
    if (typeof interromperAnimacaoKakijun === 'function') interromperAnimacaoKakijun(canvasId);
    const canvasEl = document.getElementById(canvasId);
    if (!canvasEl) return;
    const state = canvasStateMap[canvasId];
    if (state) state.history = [];
    canvasEl.classList.remove('canvas-success', 'canvas-error');
    redesenharFundoCanvas(canvasEl);
    if (typeof playBeep === 'function') playBeep('click');
}

function desfazerUltimoTracoCanvas(canvasId) {
    if (typeof interromperAnimacaoKakijun === 'function') interromperAnimacaoKakijun(canvasId);
    const canvasEl = document.getElementById(canvasId);
    if (!canvasEl) return;

    const state = canvasStateMap[canvasId];
    if (!state || !state.history || state.history.length === 0) {
        canvasEl.classList.remove('canvas-success', 'canvas-error');
        redesenharFundoCanvas(canvasEl);
        if (typeof playBeep === 'function') playBeep('click');
        return;
    }

    const lastState = state.history.pop();
    const ctx = canvasEl.getContext('2d');
    ctx.putImageData(lastState, 0, 0);

    canvasEl.classList.remove('canvas-success', 'canvas-error');
    if (typeof playBeep === 'function') playBeep('click');
}

function animarKakijun(canvasId) {
    const canvasEl = document.getElementById(canvasId);
    if (!canvasEl) return;

    const rawAttr = canvasEl.getAttribute('data-char') || '';
    const cleanSymbol = rawAttr.split(' ')[0].split('(')[0].trim();
    if (!cleanSymbol) return;

    if (!canvasStateMap[canvasId]) {
        canvasStateMap[canvasId] = {
            isDrawing: false,
            guideVisible: true,
            charSymbol: cleanSymbol
        };
    }

    const state = canvasStateMap[canvasId];
    interromperAnimacaoKakijun(canvasId);

    state.animating = true;
    canvasEl.classList.remove('canvas-success', 'canvas-error');

    const w = canvasEl.width;
    const h = canvasEl.height;
    const ctx = canvasEl.getContext('2d');

    // 1. Criar canvas temporario para capturar os pontos do stencil
    const offscreen = document.createElement('canvas');
    offscreen.width = w;
    offscreen.height = h;
    const offCtx = offscreen.getContext('2d');

    offCtx.fillStyle = '#000000';
    offCtx.font = `${Math.round(h * 0.65)}px 'Noto Sans JP', sans-serif`;
    offCtx.textAlign = 'center';
    offCtx.textBaseline = 'middle';
    offCtx.fillText(cleanSymbol, w / 2, h / 2 + (h * 0.05));

    const maskData = offCtx.getImageData(0, 0, w, h).data;

    const points = [];
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const idx = (y * w + x) * 4;
            if (maskData[idx + 3] > 40) {
                points.push({ x, y });
            }
        }
    }

    if (points.length === 0) {
        state.animating = false;
        return;
    }

    // 2. Limpa o canvas e redesenha o fundo
    redesenharFundoCanvas(canvasEl);

    const isDark = document.documentElement.classList.contains('dark-theme');
    const strokeColor = isDark ? '#38bdf8' : '#e63946';

    let currentStep = 0;
    const batchSize = Math.max(10, Math.floor(points.length / 50));

    if (typeof mostrarToast === 'function') mostrarToast(`🎬 <strong>Animando traços de "${cleanSymbol}"...</strong>`);
    if (typeof playBeep === 'function') playBeep('click');

    function step() {
        if (!state.animating) return;

        ctx.fillStyle = strokeColor;
        const limit = Math.min(currentStep + batchSize, points.length);

        for (let i = currentStep; i < limit; i++) {
            const pt = points[i];
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
            ctx.fill();
        }

        currentStep = limit;

        if (currentStep < points.length) {
            state.animFrameId = requestAnimationFrame(step);
        } else {
            state.animating = false;
            state.animFrameId = null;
            if (typeof playBeep === 'function') playBeep('success');
        }
    }

    state.animFrameId = requestAnimationFrame(step);
}

function interromperAnimacaoKakijun(canvasId) {
    const state = canvasStateMap[canvasId];
    if (state && state.animating) {
        state.animating = false;
        if (state.animFrameId) {
            cancelAnimationFrame(state.animFrameId);
            state.animFrameId = null;
        }
    }
}

function alternarGuiaCanvas(canvasId) {
    const canvasEl = document.getElementById(canvasId);
    if (!canvasEl) return;

    if (!canvasStateMap[canvasId]) {
        canvasStateMap[canvasId] = {
            isDrawing: false,
            guideVisible: true,
            charSymbol: canvasEl.getAttribute('data-char') || ''
        };
    }

    const state = canvasStateMap[canvasId];
    state.guideVisible = !state.guideVisible;

    const btn = document.getElementById(`btn-guia-${canvasId}`);
    if (btn) {
        btn.innerText = state.guideVisible ? '👁️ Guia ON' : '🙈 Guia OFF';
        btn.classList.toggle('btn-guia-off', !state.guideVisible);
    }

    redesenharFundoCanvas(canvasEl);
    if (typeof playBeep === 'function') playBeep('click');
}

function ativarPincelCanvas(canvasId) {
    const canvasEl = document.getElementById(canvasId);
    if (canvasEl) {
        canvasEl.focus();
        if (typeof mostrarToast === 'function') mostrarToast('🖌️ <strong>Modo Pincel Ativo:</strong> Desenhe os traços na caixa!');
    }
}

function verificarTracoCanvas(canvasId) {
    const canvasEl = document.getElementById(canvasId);
    if (!canvasEl) return;

    const rawAttr = canvasEl.getAttribute('data-char') || '';
    const cleanSymbol = rawAttr.split(' ')[0].split('(')[0].trim();
    if (!cleanSymbol) return;

    const w = canvasEl.width;
    const h = canvasEl.height;
    const ctx = canvasEl.getContext('2d');

    // 1. Criar canvas temporário em memória (off-screen) para servir como MÁSCARA MODELO
    const offscreen = document.createElement('canvas');
    offscreen.width = w;
    offscreen.height = h;
    const offCtx = offscreen.getContext('2d');

    offCtx.fillStyle = '#000000';
    offCtx.font = `${Math.round(h * 0.65)}px 'Noto Sans JP', sans-serif`;
    offCtx.textAlign = 'center';
    offCtx.textBaseline = 'middle';
    offCtx.fillText(cleanSymbol, w / 2, h / 2 + (h * 0.05));

    // 2. Capturar array de pixels da MÁSCARA e do DESENHO DO USUÁRIO
    const targetImgData = offCtx.getImageData(0, 0, w, h).data;
    const userImgData = ctx.getImageData(0, 0, w, h).data;

    let pixelsLetraAlvo = 0;
    let pixelsAcerto = 0;
    let pixelsErro = 0;

    for (let i = 0; i < targetImgData.length; i += 4) {
        const isTarget = targetImgData[i + 3] > 40;
        if (isTarget) pixelsLetraAlvo++;

        const r = userImgData[i];
        const g = userImgData[i + 1];
        const b = userImgData[i + 2];
        const a = userImgData[i + 3];

        // Identifica se o usuário desenhou no pixel (qualquer opacidade alpha > 80)
        const isUserStroke = (a > 80);

        if (isUserStroke) {
            if (isTarget) {
                pixelsAcerto++;
            } else {
                pixelsErro++;
            }
        }
    }

    canvasEl.classList.remove('canvas-success', 'canvas-error');

    const totalDesenhado = pixelsAcerto + pixelsErro;
    if (totalDesenhado < 40) {
        canvasEl.classList.add('canvas-error');
        if (typeof playBeep === 'function') playBeep('error');
        if (typeof mostrarToast === 'function') mostrarToast('⚠️ <strong>Desenho em Branco:</strong> Desenhe o caractere na caixa antes de verificar!');
        return;
    }

    // 3. Regra de Avaliação Rígida (50% de Cobertura e máx 30% de Penalidade)
    const taxaCobertura = pixelsAcerto / (pixelsLetraAlvo || 1);
    const taxaPenalidade = pixelsErro / (pixelsAcerto + 1);

    const aprovado = (taxaCobertura >= 0.50) && (taxaPenalidade < 0.30);

    if (aprovado) {
        canvasEl.classList.add('canvas-success');
        if (typeof playBeep === 'function') playBeep('success');
        const pct = Math.round(taxaCobertura * 100);
        if (typeof mostrarToast === 'function') mostrarToast(`✨ <strong>Excelente!</strong> Traço de <strong>"${cleanSymbol}"</strong> aprovado com <strong>${pct}% de precisão!</strong>`);

        // Recompensa de XP e efeito de confeti por precisão no traço
        if (taxaCobertura >= 0.90) {
            if (typeof adicionarXP === 'function') adicionarXP(30, 'Precisão Mestre no Traço (≥90%)');
            if (typeof dispararConfeti === 'function') dispararConfeti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
        } else if (taxaCobertura >= 0.70) {
            if (typeof adicionarXP === 'function') adicionarXP(15, 'Precisão Excelente no Traço (≥70%)');
        } else {
            if (typeof adicionarXP === 'function') adicionarXP(10, 'Traço Aprovado');
        }

        if (typeof registrarAtividadeDiaria === 'function') registrarAtividadeDiaria();
    } else {
        canvasEl.classList.add('canvas-error');
        if (typeof playBeep === 'function') playBeep('error');

        if (taxaPenalidade >= 0.30) {
            if (typeof mostrarToast === 'function') mostrarToast(`❌ <strong>Traço Fora da Guia:</strong> Evite rabiscar fora do contorno da letra (${Math.round(taxaPenalidade * 100)}% excedente).`);
        } else {
            if (typeof mostrarToast === 'function') mostrarToast(`❌ <strong>Traço Incompleto:</strong> Cobertura atual em <strong>${Math.round(taxaCobertura * 100)}%</strong>. Exige no mínimo 50%.`);
        }
    }
}

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.canvasStateMap = canvasStateMap;
    window.getCanvasPos = getCanvasPos;
    window.redesenharFundoCanvas = redesenharFundoCanvas;
    window.inicializarCanvasInterativo = inicializarCanvasInterativo;
    window.inicializarTodosOsCanvases = inicializarTodosOsCanvases;
    window.limparCanvas = limparCanvas;
    window.desfazerUltimoTracoCanvas = desfazerUltimoTracoCanvas;
    window.animarKakijun = animarKakijun;
    window.interromperAnimacaoKakijun = interromperAnimacaoKakijun;
    window.alternarGuiaCanvas = alternarGuiaCanvas;
    window.ativarPincelCanvas = ativarPincelCanvas;
    window.verificarTracoCanvas = verificarTracoCanvas;
}
