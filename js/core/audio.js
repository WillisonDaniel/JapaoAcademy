// ======================================
// MÓDULO CORE - AUDIO
// ======================================

let velocidadeAudioAtual = 1.0;

function playBeep(type) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        if (type === 'success') {
            osc.frequency.setValueAtTime(587.33, ctx.currentTime);
            osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.25);
        } else {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(150, ctx.currentTime);
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.3);
        }
    } catch (e) { }
}

function alternarVelocidadeAudio(btnElement) {
    velocidadeAudioAtual = (velocidadeAudioAtual === 1.0) ? 0.6 : 1.0;
    const isSlow = (velocidadeAudioAtual === 0.6);
    if (typeof mostrarToast === 'function') {
        mostrarToast(isSlow ? '🐢 <strong>Modo Áudio Lento (0.6x) Ativado!</strong>' : '⚡ <strong>Modo Áudio Normal (1.0x) Ativado!</strong>');
    }

    document.querySelectorAll('.btn-speed-toggle').forEach(btn => {
        btn.innerText = isSlow ? '🐢 Lento (0.6x)' : '⚡ Normal (1.0x)';
        btn.classList.toggle('speed-slow', isSlow);
    });
}

function tocarAudio(texto, rateOverride = null) {
    if (!texto) return;
    if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
        console.warn('[Áudio] Síntese de voz indisponível neste navegador.');
        if (typeof mostrarErroRecuperavelUX === 'function') mostrarErroRecuperavelUX('browser', 'Áudio indisponível');
        else if (typeof mostrarToast === 'function') mostrarToast('⚠️ O áudio não é compatível com este navegador.');
        return;
    }
    try {
        window.speechSynthesis.cancel();

        // Ignorar e remover rigorosamente todas as barras '/' (slashes) e símbolos fonéticos problemáticos
        let textoLimpo = String(texto)
            .replace(/\//g, ' ')
            .replace(/\\/g, ' ')
            .replace(/[\/\\|]/g, ' ')
            .replace(/\.{2,}/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();

        if (!textoLimpo) return;

        const u = new SpeechSynthesisUtterance(textoLimpo);
        const languageCode = typeof getCurrentLanguageCode === 'function' ? getCurrentLanguageCode() : null;
        const languageConfig = typeof getLanguageConfig === 'function' ? getLanguageConfig(languageCode) : null;
        if (languageConfig && languageConfig.speechCode) u.lang = languageConfig.speechCode;
        u.rate = (rateOverride !== null) ? rateOverride : velocidadeAudioAtual;
        u.onerror = event => {
            if (event && (event.error === 'interrupted' || event.error === 'canceled')) return;
            console.warn('[Áudio] Falha na síntese de voz:', event && event.error ? event.error : event);
            if (typeof mostrarErroRecuperavelUX === 'function') mostrarErroRecuperavelUX('audio', 'Falha ao reproduzir o áudio');
            else if (typeof mostrarToast === 'function') mostrarToast('⚠️ O áudio não pôde ser reproduzido. Tente novamente.');
        };
        window.speechSynthesis.speak(u);
    } catch (erro) {
        console.warn('[Áudio] Erro ao iniciar a síntese de voz:', erro);
        if (typeof mostrarErroRecuperavelUX === 'function') mostrarErroRecuperavelUX('audio', 'Falha ao reproduzir o áudio');
        else if (typeof mostrarToast === 'function') mostrarToast('⚠️ O áudio não pôde ser reproduzido. Tente novamente.');
    }
}

function speakKana(texto, rateOverride = null) {
    tocarAudio(texto, rateOverride);
}

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.playBeep = playBeep;
    window.speakKana = speakKana;
    window.tocarAudio = tocarAudio;
    window.alternarVelocidadeAudio = alternarVelocidadeAudio;
}
