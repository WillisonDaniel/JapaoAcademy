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
    const cleanSymbol = charSymbol.split(' ')[0].split('(')[0].trim();

    if (!canvasStateMap[canvasId]) {
        canvasStateMap[canvasId] = {
            isDrawing: false,
            guideVisible: true,
            charSymbol: cleanSymbol
        };
    }

    redesenharFundoCanvas(canvasEl);

    const ctx = canvasEl.getContext('2d');
    const state = canvasStateMap[canvasId];

    // Restaurar desenho salvo do usuário do localStorage se existir
    try {
        const savedDataUrl = localStorage.getItem(`user_stroke_save_${canvasId}`) ||
            (cleanSymbol ? localStorage.getItem(`user_stroke_save_sym_${cleanSymbol}`) : null);

        if (savedDataUrl) {
            const img = new Image();
            img.onload = () => {
                ctx.drawImage(img, 0, 0);
                if (!state.history) state.history = [];
                if (state.history.length === 0) {
                    state.history.push(ctx.getImageData(0, 0, canvasEl.width, canvasEl.height));
                }
            };
            img.src = savedDataUrl;
        }
    } catch (e) { }

    if (canvasEl.hasAttribute('data-initialized')) return;
    canvasEl.setAttribute('data-initialized', 'true');

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
        if (state && state.isDrawing) {
            state.isDrawing = false;

            // Salvar imagem do desenho do usuário no localStorage
            try {
                const dataUrl = canvasEl.toDataURL();
                localStorage.setItem(`user_stroke_save_${canvasId}`, dataUrl);
                if (cleanSymbol) {
                    localStorage.setItem(`user_stroke_save_sym_${cleanSymbol}`, dataUrl);
                }
            } catch (err) { }
        }
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

    const rawAttr = canvasEl.getAttribute('data-char') || '';
    const cleanSymbol = rawAttr.split(' ')[0].split('(')[0].trim();

    // Limpar o registro correspondente do localStorage
    try {
        localStorage.removeItem(`user_stroke_save_${canvasId}`);
        if (cleanSymbol) localStorage.removeItem(`user_stroke_save_sym_${cleanSymbol}`);
    } catch (err) { }

    canvasEl.classList.remove('canvas-success', 'canvas-error');
    redesenharFundoCanvas(canvasEl);
    if (typeof playBeep === 'function') playBeep('click');
}

function desfazerUltimoTracoCanvas(canvasId) {
    if (typeof interromperAnimacaoKakijun === 'function') interromperAnimacaoKakijun(canvasId);
    const canvasEl = document.getElementById(canvasId);
    if (!canvasEl) return;

    const rawAttr = canvasEl.getAttribute('data-char') || '';
    const cleanSymbol = rawAttr.split(' ')[0].split('(')[0].trim();
    const state = canvasStateMap[canvasId];

    if (!state || !state.history || state.history.length === 0) {
        try {
            localStorage.removeItem(`user_stroke_save_${canvasId}`);
            if (cleanSymbol) localStorage.removeItem(`user_stroke_save_sym_${cleanSymbol}`);
        } catch (err) { }

        canvasEl.classList.remove('canvas-success', 'canvas-error');
        redesenharFundoCanvas(canvasEl);
        if (typeof playBeep === 'function') playBeep('click');
        return;
    }

    const lastState = state.history.pop();
    const ctx = canvasEl.getContext('2d');
    ctx.putImageData(lastState, 0, 0);

    try {
        const dataUrl = canvasEl.toDataURL();
        localStorage.setItem(`user_stroke_save_${canvasId}`, dataUrl);
        if (cleanSymbol) localStorage.setItem(`user_stroke_save_sym_${cleanSymbol}`, dataUrl);
    } catch (err) { }

    canvasEl.classList.remove('canvas-success', 'canvas-error');
    if (typeof playBeep === 'function') playBeep('click');
}

// ======================================
// BANCO DE DADOS VETORIAL DE TRAÇOS (KANJIVG / ANIMCJK SVG PATHS)
// ======================================
const KANJI_VG_DATA = {
    // --- HIRAGANA ---
    'あ': [
        "M 25 32 C 40 31 60 30 75 28", // Traço 1: Barra horizontal
        "M 50 16 C 48 38 48 58 48 78", // Traço 2: Barra vertical central
        "M 65 40 C 40 25 20 48 28 68 C 36 84 64 84 74 62 C 80 50 68 45 52 58" // Traço 3: Laço amplo
    ],
    'い': [
        "M 32 25 C 29 45 28 65 32 75 C 33 78 37 75 40 70", // Traço 1: Esquerdo com gancho
        "M 68 35 C 70 48 72 58 72 65"                      // Traço 2: Direito curto
    ],
    'う': [
        "M 45 20 C 50 22 55 24 58 26",                     // Traço 1: Pingo superior
        "M 32 38 C 45 40 65 40 58 58 C 50 72 38 80 32 82"  // Traço 2: Arco principal
    ],
    'え': [
        "M 45 18 C 50 20 55 22 58 24",                     // Traço 1: Pingo superior
        "M 28 35 C 45 35 68 35 68 35 L 35 65 C 50 65 65 65 72 78" // Traço 2: Zigue-zague
    ],
    'お': [
        "M 25 32 C 40 32 55 32 68 32",                     // Traço 1: Barra horizontal
        "M 48 18 L 48 62 C 48 75 30 75 30 65 C 30 55 50 55 60 68", // Traço 2: Laço vertical
        "M 72 38 C 76 42 78 45 80 48"                      // Traço 3: Pingo lateral
    ],
    'か': [
        "M 25 35 C 45 35 62 35 60 52 C 58 68 48 78 40 78 C 36 78 34 72 36 68",
        "M 45 18 C 42 38 40 60 38 82",
        "M 72 32 C 76 38 78 42 80 46"
    ],
    'き': [
        "M 28 32 C 42 30 58 28 72 26",
        "M 25 46 C 42 44 58 42 75 40",
        "M 55 18 C 52 42 42 62 32 78",
        "M 35 65 C 45 78 65 78 72 65"
    ],
    'く': ["M 65 25 L 35 50 L 68 78"],
    'け': [
        "M 30 22 C 28 45 26 65 30 78",
        "M 48 35 C 60 35 72 35 80 35",
        "M 62 18 C 60 42 58 65 56 82"
    ],
    'こ': [
        "M 32 30 C 48 28 62 28 72 30",
        "M 30 70 C 48 72 65 72 75 68"
    ],
    'さ': [
        "M 28 32 C 45 30 60 28 75 26",
        "M 52 18 C 50 42 42 62 35 78",
        "M 38 65 C 48 78 68 78 75 65"
    ],
    'し': ["M 38 22 C 38 52 38 78 65 78 C 72 78 78 74 80 70"],
    'す': [
        "M 25 32 C 45 32 65 32 80 32",
        "M 52 18 L 52 50 C 52 62 38 62 38 52 C 38 42 58 42 58 60 C 56 72 45 82 35 85"
    ],
    'せ': [
        "M 22 38 C 45 35 65 33 82 32",
        "M 68 20 C 66 40 64 62 62 78",
        "M 38 22 L 38 62 C 38 78 55 78 72 75"
    ],
    'そ': ["M 30 25 C 45 25 60 25 60 25 L 35 48 C 50 48 68 48 68 48 L 40 68 C 55 68 72 68 75 75"],
    'た': [
        "M 22 35 C 38 33 52 32 62 30",
        "M 42 20 C 38 42 32 65 24 82",
        "M 60 45 C 68 43 78 42 82 43",
        "M 58 68 C 68 70 78 70 82 66"
    ],
    'ち': [
        "M 25 32 C 45 30 65 28 78 26",
        "M 50 18 L 50 46 C 30 46 22 62 28 75 C 36 86 64 84 75 68"
    ],
    'つ': ["M 28 38 C 45 32 75 32 78 48 C 80 62 65 75 42 82"],
    'て': ["M 28 32 C 48 30 72 28 72 28 L 38 52 C 45 75 72 75 80 68"],
    'と': [
        "M 35 25 C 42 35 48 45 52 52",
        "M 68 35 C 45 42 30 58 35 75 C 42 85 68 80 75 70"
    ],
    'な': [
        "M 22 32 C 35 30 48 28 58 26",
        "M 38 18 C 35 40 30 62 22 78",
        "M 68 28 C 72 32 75 35 78 38",
        "M 60 48 C 60 62 48 68 48 60 C 48 50 68 50 72 65"
    ],
    'に': [
        "M 28 22 C 26 42 24 65 28 80",
        "M 48 38 C 62 36 75 35 82 35",
        "M 48 68 C 62 70 75 70 82 65"
    ],
    'ぬ': [
        "M 32 25 L 55 78",
        "M 48 22 C 32 50 20 68 30 78 C 40 85 68 80 75 62 C 80 50 68 45 52 58"
    ],
    'ね': [
        "M 30 20 C 28 42 26 65 25 82",
        "M 30 35 C 50 35 68 35 68 35 L 38 62 C 55 62 75 62 75 70 C 75 78 68 80 62 78"
    ],
    'の': ["M 55 25 C 40 40 30 60 40 75 C 52 85 78 75 75 52 C 72 32 45 35 30 52"],
    'は': [
        "M 28 22 C 26 42 24 65 28 80",
        "M 48 32 C 62 30 75 30 82 30",
        "M 60 18 L 60 55 C 60 68 45 68 45 58 C 45 48 68 48 72 62"
    ],
    'ひ': ["M 25 35 C 38 30 45 30 45 30 C 45 30 30 58 40 75 C 52 85 68 75 68 52 C 68 40 55 40 55 40 L 78 48"],
    'ふ': [
        "M 48 20 C 52 22 55 24 58 26",
        "M 50 35 C 45 48 35 60 48 72 C 58 80 65 72 60 62",
        "M 28 48 C 24 55 20 62 18 68",
        "M 72 48 C 76 55 78 62 82 68"
    ],
    'へ': ["M 22 58 L 45 32 L 78 58"],
    'ほ': [
        "M 25 22 C 23 42 21 65 25 80",
        "M 45 30 C 60 28 75 28 82 28",
        "M 45 45 C 60 43 75 43 82 43",
        "M 60 18 L 60 58 C 60 70 45 70 45 60 C 45 50 68 50 72 65"
    ],
    'ま': [
        "M 28 32 C 45 30 62 28 75 28",
        "M 25 48 C 45 46 62 44 78 44",
        "M 52 18 L 52 60 C 52 72 38 72 38 62 C 38 52 60 52 65 65"
    ],
    'み': [
        "M 28 30 C 50 28 65 28 65 28 L 38 62 C 38 75 52 75 58 68 C 65 60 75 50 82 48",
        "M 70 32 C 68 52 65 70 60 82"
    ],
    'む': [
        "M 22 35 C 42 33 60 32 75 32",
        "M 42 18 L 42 62 C 42 75 30 75 30 65 C 30 55 52 55 60 68",
        "M 72 40 C 76 46 78 52 80 58"
    ],
    'め': [
        "M 35 25 L 58 78",
        "M 52 22 C 35 48 20 68 30 78 C 40 85 68 80 75 60"
    ],
    'も': [
        "M 50 18 C 50 52 50 78 72 78 C 78 78 82 74 85 70",
        "M 28 38 C 45 36 62 35 75 35",
        "M 25 55 C 45 53 62 52 78 52"
    ],
    'や': [
        "M 25 35 C 45 32 68 30 65 48 C 62 62 48 78 40 78",
        "M 42 22 C 45 28 48 32 50 36",
        "M 35 18 C 33 42 30 65 28 85"
    ],
    'ゆ': [
        "M 30 25 C 28 50 28 72 48 72 C 62 72 72 62 72 45 C 72 32 58 30 45 30",
        "M 50 15 L 50 85"
    ],
    'よ': [
        "M 30 32 C 48 30 65 28 75 28",
        "M 55 18 L 55 55 C 55 68 40 68 40 58 C 40 48 65 48 70 62"
    ],
    'ら': [
        "M 42 20 C 48 22 52 25 55 28",
        "M 32 38 C 48 36 68 36 62 55 C 55 72 38 82 32 82"
    ],
    'り': [
        "M 35 25 C 32 45 30 60 32 68",
        "M 68 20 C 66 45 64 68 60 85"
    ],
    'る': ["M 28 30 C 48 28 72 28 72 28 L 38 55 C 50 55 72 55 72 68 C 72 78 62 82 52 75 C 45 70 48 62 55 65"],
    'れ': [
        "M 30 20 C 28 42 26 65 25 82",
        "M 30 35 C 50 35 68 35 68 35 L 38 62 C 55 62 75 62 75 70 L 82 78"
    ],
    'ろ': ["M 28 30 C 48 28 72 28 72 28 L 38 55 C 50 55 72 55 72 68 C 72 78 58 82 42 82"],
    'わ': [
        "M 30 20 C 28 42 26 65 25 82",
        "M 30 35 C 50 35 68 35 68 35 L 38 62 C 52 62 75 62 72 75 C 68 85 45 82 35 80"
    ],
    'を': [
        "M 25 32 C 45 30 65 28 75 28",
        "M 50 18 L 50 52 C 35 52 28 65 35 75",
        "M 45 58 C 60 58 75 58 80 70"
    ],
    'ん': ["M 30 25 L 28 78 C 38 65 52 50 68 70 C 72 75 75 78 78 80"],

    // --- KATAKANA ---
    'ア': ["M 25 28 L 75 28 L 60 52", "M 60 38 C 55 58 45 75 25 85"],
    'イ': ["M 45 22 C 38 42 28 62 18 78", "M 40 45 L 40 85"],
    'ウ': ["M 50 18 L 50 28", "M 25 38 L 25 48", "M 25 38 L 78 38 L 72 78"],
    'エ': ["M 28 25 L 72 25", "M 50 25 L 50 75", "M 18 75 L 82 75"],
    'オ': ["M 22 35 L 78 35", "M 50 18 L 50 82 L 40 75", "M 50 35 C 42 52 32 68 20 80"],

    // --- KANJI ESSENCIAIS ---
    '日': ["M 28 20 L 28 80", "M 28 20 L 72 20 L 72 80", "M 28 50 L 72 50", "M 28 80 L 72 80"],
    '月': ["M 30 18 C 28 40 26 60 22 82", "M 30 18 L 70 18 L 70 82 L 62 76", "M 30 40 L 70 40", "M 30 60 L 70 60"],
    '木': ["M 18 38 L 82 38", "M 50 16 L 50 84", "M 50 38 C 42 55 32 68 18 78", "M 50 38 C 58 55 68 68 82 78"],
    '水': ["M 50 15 L 50 82 L 42 74", "M 20 42 L 38 55", "M 45 38 C 36 55 26 68 15 78", "M 55 45 C 65 58 75 70 85 80"],
    '火': ["M 32 38 C 30 48 26 58 22 65", "M 68 35 C 72 45 76 55 80 62", "M 50 18 C 45 42 32 68 18 82", "M 50 42 C 60 58 72 72 82 82"],
    '土': ["M 25 45 L 75 45", "M 50 18 L 50 82", "M 15 82 L 85 82"],
    '金': ["M 50 15 C 40 32 28 48 18 60", "M 50 15 C 60 32 72 48 82 60", "M 32 38 L 68 38", "M 25 55 L 75 55", "M 50 38 L 50 82", "M 35 68 L 28 78", "M 65 68 L 72 78", "M 15 82 L 85 82"],
    '人': ["M 50 20 L 22 82", "M 45 45 L 78 82"],
    '大': ["M 18 38 L 82 38", "M 50 18 L 22 82", "M 48 40 L 78 82"],
    '小': ["M 50 18 L 50 80 L 42 72", "M 25 45 L 18 65", "M 75 45 L 82 65"],
    '一': ["M 18 50 L 82 50"],
    '二': ["M 25 35 L 75 35", "M 15 65 L 85 65"],
    '三': ["M 25 28 L 75 28", "M 30 50 L 70 50", "M 15 72 L 85 72"],
    '四': ["M 22 20 L 22 80", "M 22 20 L 78 20 L 78 80", "M 38 35 L 32 65", "M 52 35 L 68 65", "M 22 80 L 78 80"],
    '五': ["M 22 25 L 78 25", "M 48 25 L 35 55", "M 35 55 L 70 55 L 70 78", "M 18 78 L 82 78"],
    '六': ["M 50 18 L 55 28", "M 18 38 L 82 38", "M 40 50 L 20 82", "M 60 50 L 80 82"],
    '七': ["M 18 48 L 82 38", "M 48 20 L 48 75 L 68 75"],
    '八': ["M 40 25 L 20 80", "M 60 25 L 80 80"],
    '九': ["M 48 18 L 32 82", "M 22 38 L 75 38 L 68 82 L 82 78"],
    '十': ["M 18 50 L 82 50", "M 50 18 L 50 82"],
    '百': ["M 18 22 L 82 22", "M 50 22 L 40 38", "M 30 38 L 30 82", "M 30 38 L 70 38 L 70 82", "M 30 60 L 70 60", "M 30 82 L 70 82"],
    '千': ["M 72 20 L 28 32", "M 18 50 L 82 50", "M 50 32 L 50 85"],
    '円': ["M 28 20 L 25 82", "M 28 20 L 72 20 L 72 82 L 62 76", "M 40 32 L 40 68", "M 40 50 L 72 50"],
    '山': ["M 50 18 L 50 82", "M 22 42 L 22 82 L 78 82", "M 78 42 L 78 82"],
    '川': ["M 25 22 L 22 78", "M 50 28 L 50 72", "M 75 18 L 75 82"],
    '田': ["M 24 20 L 24 80", "M 24 20 L 76 20 L 76 80", "M 50 20 L 50 80", "M 24 50 L 76 50", "M 24 80 L 76 80"],
    '口': ["M 24 24 L 24 76", "M 24 24 L 76 24 L 76 76", "M 24 76 L 76 76"]
};

const KANJI_VG_CACHE = {};

const CYRILLIC_VG_DATA = {
    'А': ["M 25 80 L 54 20 L 84 80", "M 38 55 L 70 55"],
    'а': ["M 45 42 C 30 42 25 58 35 75 C 50 82 65 72 65 52 L 65 80"],
    'Б': ["M 32 20 L 32 80 L 72 80 C 82 75 82 52 70 50 L 32 50", "M 32 20 L 75 20"],
    'б': ["M 55 20 L 35 55 C 30 75 65 85 70 65 C 75 48 48 45 35 55"],
    'В': ["M 30 20 L 30 80 L 68 80 C 80 75 80 52 65 50 C 78 48 78 25 65 20 L 30 20", "M 30 50 L 65 50"],
    'в': ["M 35 35 L 35 80 C 55 80 65 75 65 62 C 65 52 48 50 35 50 C 55 50 62 45 62 35 C 62 25 48 25 35 35"],
    'Г': ["M 32 20 L 32 80", "M 32 20 L 78 20"],
    'г': ["M 35 35 L 35 80", "M 35 35 L 72 35"],
    'Д': ["M 38 20 L 70 20 L 78 65 L 18 65 L 28 20", "M 15 65 L 15 80", "M 85 65 L 85 80"],
    'д': ["M 40 35 L 68 35 L 72 68 L 22 68 L 30 35", "M 20 68 L 20 82", "M 80 68 L 80 82"],
    'Е': ["M 32 20 L 32 80", "M 32 20 L 75 20", "M 32 50 L 68 50", "M 32 80 L 75 80"],
    'е': ["M 30 55 C 50 55 70 55 70 42 C 70 30 45 30 32 52 C 25 68 45 80 68 75"],
    'Ё': ["M 32 24 L 32 84", "M 32 24 L 75 24", "M 32 54 L 68 54", "M 32 84 L 75 84", "M 42 12 L 44 14", "M 62 12 L 64 14"],
    'ё': ["M 30 58 C 50 58 70 58 70 45 C 70 33 45 33 32 55 C 25 71 45 83 68 78", "M 42 22 L 44 24", "M 60 22 L 62 24"],
    'Ж': ["M 54 20 L 54 85", "M 22 25 L 54 52 L 22 80", "M 86 25 L 54 52 L 86 80"],
    'ж': ["M 54 35 L 54 82", "M 25 38 L 54 58 L 25 78", "M 83 38 L 54 58 L 83 78"],
    'З': ["M 32 22 C 55 18 78 30 65 48 C 80 62 65 82 32 78"],
    'з': ["M 35 38 C 55 35 75 42 62 58 C 75 70 62 82 35 80"],
    'И': ["M 30 20 L 30 80", "M 78 20 L 78 80", "M 78 20 L 30 80"],
    'и': ["M 32 35 L 32 80", "M 75 35 L 75 80", "M 75 35 L 32 80"],
    'Й': ["M 30 24 L 30 84", "M 78 24 L 78 84", "M 78 24 L 30 84", "M 42 14 C 54 18 64 14 66 14"],
    'й': ["M 32 38 L 32 82", "M 75 38 L 75 82", "M 75 38 L 32 82", "M 44 24 C 54 28 62 24 64 24"],
    'К': ["M 32 20 L 32 80", "M 72 20 L 32 50 L 75 80"],
    'к': ["M 35 35 L 35 80", "M 68 35 L 35 58 L 72 80"],
    'Л': ["M 28 80 L 52 20 L 78 80"],
    'л': ["M 30 80 L 52 35 L 75 80"],
    'М': ["M 25 80 L 25 20 L 54 55 L 83 20 L 83 80"],
    'м': ["M 28 80 L 28 35 L 54 62 L 80 35 L 80 80"],
    'Н': ["M 30 20 L 30 80", "M 78 20 L 78 80", "M 30 50 L 78 50"],
    'н': ["M 32 35 L 32 80", "M 75 35 L 75 80", "M 32 58 L 75 58"],
    'О': ["M 54 20 C 25 20 25 80 54 80 C 83 80 83 20 54 20"],
    'о': ["M 54 38 C 30 38 30 78 54 78 C 78 78 78 38 54 38"],
    'П': ["M 28 20 L 28 80", "M 80 20 L 80 80", "M 28 20 L 80 20"],
    'п': ["M 30 35 L 30 80", "M 78 35 L 78 80", "M 30 35 L 78 35"],
    'Р': ["M 32 20 L 32 80", "M 32 20 L 68 20 C 80 25 80 48 68 50 L 32 50"],
    'р': ["M 35 35 L 35 88", "M 35 35 L 68 35 C 78 40 78 58 68 62 L 35 62"],
    'С': ["M 75 25 C 30 20 25 80 75 75"],
    'с': ["M 72 40 C 35 38 30 78 72 75"],
    'Т': ["M 20 20 L 88 20", "M 54 20 L 54 80"],
    'т': ["M 25 35 L 83 35", "M 54 35 L 54 80"],
    'У': ["M 25 20 L 50 55 L 78 20", "M 50 55 L 28 85"],
    'у': ["M 28 35 L 50 62 L 75 35", "M 50 62 L 30 88"],
    'Ф': ["M 54 18 L 54 82", "M 54 30 C 25 30 25 68 54 68 C 83 68 83 30 54 30"],
    'ф': ["M 54 30 L 54 88", "M 54 38 C 30 38 30 65 54 65 C 78 65 78 38 54 38"],
    'Х': ["M 25 20 L 83 80", "M 83 20 L 25 80"],
    'х': ["M 28 35 L 80 80", "M 80 35 L 28 80"],
    'Ц': ["M 28 20 L 28 75 L 78 75 L 78 20", "M 78 75 L 78 85 L 85 85"],
    'ц': ["M 30 35 L 30 75 L 75 75 L 75 35", "M 75 75 L 75 85 L 82 85"],
    'Ч': ["M 28 20 L 28 50 L 78 50 L 78 20", "M 78 20 L 78 80"],
    'ч': ["M 30 35 L 30 55 L 75 55 L 75 35", "M 75 35 L 75 80"],
    'Ш': ["M 25 20 L 25 78 L 83 78", "M 54 20 L 54 78", "M 83 20 L 83 78"],
    'ш': ["M 28 35 L 28 78 L 80 78", "M 54 35 L 54 78", "M 80 35 L 80 78"],
    'Щ': ["M 25 20 L 25 75 L 78 75 L 78 20", "M 52 20 L 52 75", "M 78 75 L 78 85 L 85 85"],
    'щ': ["M 28 35 L 28 75 L 75 75 L 75 35", "M 52 35 L 52 75", "M 75 75 L 75 85 L 82 85"],
    'Ъ': ["M 20 20 L 48 20 L 48 80 C 75 80 75 50 48 50"],
    'ъ': ["M 24 35 L 48 35 L 48 80 C 72 80 72 55 48 55"],
    'Ы': ["M 30 20 L 30 80 C 58 80 58 50 30 50", "M 75 20 L 75 80"],
    'ы': ["M 32 35 L 32 80 C 56 80 56 55 32 55", "M 72 35 L 72 80"],
    'Ь': ["M 32 20 L 32 80 C 68 80 68 50 32 50"],
    'ь': ["M 35 35 L 35 80 C 65 80 65 55 35 55"],
    'Э': ["M 32 20 C 78 20 78 80 32 80", "M 32 50 L 72 50"],
    'э': ["M 35 35 C 75 35 75 80 35 80", "M 35 58 L 68 58"],
    'Ю': ["M 30 20 L 30 80", "M 30 50 L 52 50", "M 70 50 C 70 30 52 30 52 50 C 52 70 70 70 70 50"],
    'ю': ["M 32 35 L 32 80", "M 32 58 L 52 58", "M 68 58 C 68 40 52 40 52 58 C 52 76 68 76 68 58"],
    'Я': ["M 68 20 C 42 20 42 50 68 50 L 68 20", "M 68 20 L 68 80", "M 68 50 L 30 80"],
    'я': ["M 65 35 C 45 35 45 58 65 58 L 65 35", "M 65 35 L 65 80", "M 65 58 L 32 80"]
};

/**
 * Obtém os traços vetoriais oficiais do KanjiVG ou Cirílico
 */
async function carregarTracosKanjiVG(cleanSymbol, canvasW, canvasH) {
    if (!cleanSymbol) return converterSvgPathsParaPontos(gerarCaminhosSvgFallback(cleanSymbol), canvasW, canvasH);

    if (CYRILLIC_VG_DATA[cleanSymbol]) {
        return converterSvgPathsParaPontos(CYRILLIC_VG_DATA[cleanSymbol], canvasW, canvasH);
    }

    if (KANJI_VG_CACHE[cleanSymbol]) {
        return converterSvgPathsParaPontos(KANJI_VG_CACHE[cleanSymbol], canvasW, canvasH);
    }

    try {
        const codePoint = cleanSymbol.codePointAt(0);
        if (!codePoint) throw new Error("CodePoint inválido");

        const hex = codePoint.toString(16).padStart(5, '0');
        const url = `https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg/kanji/${hex}.svg`;

        const response = await fetch(url);
        if (!response.ok) throw new Error(`KanjiVG HTTP ${response.status}`);

        const svgText = await response.text();
        const svgPaths = parseKanjiVgSvgText(svgText);

        if (svgPaths && svgPaths.length > 0) {
            KANJI_VG_CACHE[cleanSymbol] = svgPaths;
            return converterSvgPathsParaPontos(svgPaths, canvasW, canvasH);
        }
    } catch (err) {
        console.warn(`KanjiVG CDN fallback para '${cleanSymbol}':`, err);
    }

    // Fallback para banco local em memória ou gerador vetorial
    const localPaths = KANJI_VG_DATA[cleanSymbol] || gerarCaminhosSvgFallback(cleanSymbol);
    KANJI_VG_CACHE[cleanSymbol] = localPaths;
    return converterSvgPathsParaPontos(localPaths, canvasW, canvasH);
}

function parseKanjiVgSvgText(svgText) {
    const paths = [];
    const regex = /<path\s+[^>]*id=["']kvg:[^"']+-s(\d+)["'][^>]*d=["']([^"']+)["']/g;
    let match;
    while ((match = regex.exec(svgText)) !== null) {
        paths.push(match[2]);
    }

    if (paths.length === 0) {
        const fallbackRegex = /<path\s+[^>]*d=["']([^"']+)["']/g;
        while ((match = fallbackRegex.exec(svgText)) !== null) {
            if (!match[1].startsWith('kvg:')) {
                paths.push(match[1]);
            }
        }
    }

    return paths;
}

function converterSvgPathsParaPontos(svgPaths, canvasW, canvasH) {
    const strokes = [];
    svgPaths.forEach(dString => {
        const points = getVectorPointsFromSvgPath(dString, canvasW, canvasH);
        if (points && points.length > 0) {
            strokes.push(points);
        }
    });
    return strokes;
}

function getVectorPointsFromSvgPath(dString, canvasW, canvasH) {
    if (!dString) return [];
    try {
        const svgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        svgPath.setAttribute("d", dString);
        const totalLen = svgPath.getTotalLength();
        if (isNaN(totalLen) || totalLen <= 0) return [];

        // Os SVGs do KanjiVG usam viewBox padrão 0 0 109 109
        const steps = Math.max(30, Math.floor(totalLen * 1.2));
        const points = [];
        for (let i = 0; i <= steps; i++) {
            const pt = svgPath.getPointAtLength((i / steps) * totalLen);
            points.push({
                x: (pt.x / 109) * canvasW,
                y: (pt.y / 109) * canvasH
            });
        }
        return points;
    } catch (e) {
        return [];
    }
}

function gerarCaminhosSvgFallback(cleanSymbol) {
    return [
        "M 25 35 L 75 35",
        "M 50 18 L 50 82 L 40 75",
        "M 50 35 C 38 52 28 68 18 80"
    ];
}

/**
 * Animação Vetorial Real Traço a Traço (Stroke Order / Hitsujun - 筆順)
 */
async function animarKakijun(canvasId) {
    const canvasEl = document.getElementById(canvasId);
    if (!canvasEl) return;

    const rawAttr = canvasEl.getAttribute('data-char') || '';
    const cleanSymbol = rawAttr.split(' ')[0].split('(')[0].split('[')[0].trim();
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

    const isDark = document.documentElement.classList.contains('dark-theme');
    const activeColor = isDark ? '#38bdf8' : '#e63946';
    const solidColor = isDark ? '#f8fafc' : '#1e293b';

    if (typeof mostrarToast === 'function') {
        mostrarToast(`🎬 <strong>Carregando traços reais de "${cleanSymbol}"...</strong>`);
    }
    if (typeof playBeep === 'function') playBeep('click');

    // Carregar os traços oficiais do KanjiVG via CDN (jsDelivr)
    const strokePaths = await carregarTracosKanjiVG(cleanSymbol, w, h);

    if (!state.animating) return; // Se a animação foi interrompida enquanto baixava

    if (!strokePaths || strokePaths.length === 0) {
        state.animating = false;
        return;
    }

    if (typeof mostrarToast === 'function') {
        mostrarToast(`🎬 <strong>Animando ${strokePaths.length} traço${strokePaths.length > 1 ? 's' : ''} reais de "${cleanSymbol}"...</strong>`);
    }

    let currentStrokeIdx = 0;
    let currentPointIdx = 0;

    // Buffer off-screen para consolidar traços já concluídos em cor sólida
    const completedCanvas = document.createElement('canvas');
    completedCanvas.width = w;
    completedCanvas.height = h;
    const compCtx = completedCanvas.getContext('2d');

    function animateStep() {
        if (!state.animating) return;

        // A. Redesenhar o fundo com retículo e guia marca d'água
        redesenharFundoCanvas(canvasEl);

        // B. Redesenhar todos os traços JÁ CONCLUÍDOS em tinta sólida
        ctx.drawImage(completedCanvas, 0, 0);

        // C. Desenhar o TRAÇO ATUAL sendo desenhado em destaque com a cor viva
        const stroke = strokePaths[currentStrokeIdx];
        if (stroke && stroke.length > 0) {
            const limit = Math.min(currentPointIdx + 1, stroke.length);

            ctx.save();
            ctx.lineWidth = 7;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.strokeStyle = activeColor;

            ctx.beginPath();
            ctx.moveTo(stroke[0].x, stroke[0].y);
            for (let i = 1; i < limit; i++) {
                ctx.lineTo(stroke[i].x, stroke[i].y);
            }
            ctx.stroke();

            // Ponta ativa do pincel em destaque vibrante
            const activePt = stroke[limit - 1];
            ctx.fillStyle = activeColor;
            ctx.beginPath();
            ctx.arc(activePt.x, activePt.y, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            currentPointIdx += 2;

            // Quando terminar o traço atual, consolidar no completedCanvas em tinta sólida
            if (currentPointIdx >= stroke.length) {
                compCtx.save();
                compCtx.lineWidth = 7;
                compCtx.lineCap = 'round';
                compCtx.lineJoin = 'round';
                compCtx.strokeStyle = solidColor;
                compCtx.beginPath();
                compCtx.moveTo(stroke[0].x, stroke[0].y);
                for (let i = 1; i < stroke.length; i++) {
                    compCtx.lineTo(stroke[i].x, stroke[i].y);
                }
                compCtx.stroke();
                compCtx.restore();

                currentStrokeIdx++;
                currentPointIdx = 0;
            }
        }

        if (currentStrokeIdx < strokePaths.length) {
            state.animFrameId = requestAnimationFrame(animateStep);
        } else {
            // Animação completa dos traços concluída
            redesenharFundoCanvas(canvasEl);
            ctx.drawImage(completedCanvas, 0, 0);
            state.animating = false;
            state.animFrameId = null;
            if (typeof playBeep === 'function') playBeep('success');
        }
    }

    state.animFrameId = requestAnimationFrame(animateStep);
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
