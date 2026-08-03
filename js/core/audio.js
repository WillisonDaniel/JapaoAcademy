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
    if ('speechSynthesis' in window) {
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
        const isEnglish = (document.body && document.body.getAttribute('data-lang') === 'english') || window.location.pathname.includes('en-US');
        u.lang = isEnglish ? 'en-US' : 'ja-JP';
        u.rate = (rateOverride !== null) ? rateOverride : velocidadeAudioAtual;
        window.speechSynthesis.speak(u);
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
