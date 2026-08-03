// ======================================
// MÓDULO PRONÚNCIA - SPEECH RECOGNITION
// ======================================

let activeRecognitionInstance = null;

function testarPronunciaVoz(targetWord, btnId, feedbackId) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const btn = document.getElementById(btnId);
    const fb = document.getElementById(feedbackId);

    if (!SpeechRecognition) {
        if (typeof mostrarToast === 'function') mostrarToast('⚠️ <strong>Navegador sem Suporte:</strong> O reconhecimento de voz exige o Google Chrome, Edge ou Safari.');
        if (fb) {
            fb.style.display = 'block';
            fb.innerHTML = `<span style="color:#ef4444; font-size:0.88rem;">⚠️ Seu navegador não suporta reconhecimento de voz. Recomendamos o Google Chrome ou Edge.</span>`;
        }
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    if (btn) {
        btn.classList.add('listening');
        btn.innerHTML = 'Ouvindo... 🔴';
    }
    if (fb) {
        fb.style.display = 'block';
        fb.innerHTML = `<span style="color:var(--text-muted); font-size:0.88rem;">🎙️ Fale agora em inglês...</span>`;
    }

    recognition.onresult = (event) => {
        const transcript = (event.results && event.results[0] && event.results[0][0] && event.results[0][0].transcript) ? event.results[0][0].transcript : '';
        const cleanTarget = targetWord.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();
        const cleanTrans = transcript.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();

        const isMatch = cleanTrans === cleanTarget || cleanTrans.includes(cleanTarget) || cleanTarget.includes(cleanTrans);

        if (isMatch) {
            if (fb) {
                fb.innerHTML = `<span style="color:#22c55e; font-weight:bold; font-size:0.9rem;">🟢 Perfeito! Reconhecido: "${transcript}"</span>`;
            }
            if (typeof playBeep === 'function') playBeep('success');
            if (typeof adicionarXP === 'function') adicionarXP(10, 'Treino de Pronúncia em Inglês');
            if (typeof mostrarToast === 'function') mostrarToast(`✨ <strong>Excelente Pronúncia!</strong> Ouvimos perfeitamente <strong>"${transcript}"</strong>!`);
        } else {
            if (fb) {
                fb.innerHTML = `<span style="color:#ef4444; font-weight:bold; font-size:0.9rem;">🔴 Quase lá! Ouvimos: "${transcript}". Tente novamente.</span>`;
            }
            if (typeof playBeep === 'function') playBeep('error');
        }
    };

    recognition.onerror = (event) => {
        console.warn('Speech recognition error:', event.error);
        if (fb) {
            fb.innerHTML = `<span style="color:#ef4444; font-size:0.88rem;">⚠️ Não ouvimos com clareza (${event.error}). Fale mais perto do microfone.</span>`;
        }
    };

    recognition.onend = () => {
        if (btn) {
            btn.classList.remove('listening');
            btn.innerHTML = '🎙️ Praticar';
        }
    };

    try {
        recognition.start();
    } catch (err) {
        console.error('Speech recognition start error:', err);
        if (btn) {
            btn.classList.remove('listening');
            btn.innerHTML = '🎙️ Praticar';
        }
    }
}

function gravarEPronunciar(textoEsperado, btnElementId) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        if (typeof mostrarToast === 'function') mostrarToast('⚠️ <strong>Recurso não suportado:</strong> Seu navegador não suporta o Reconhecimento de Voz da Web Speech API. Tente no Google Chrome ou Edge.');
        return;
    }

    const btnEl = document.getElementById(btnElementId) || (typeof event !== 'undefined' && event ? event.currentTarget : null);

    if (activeRecognitionInstance) {
        activeRecognitionInstance.stop();
        activeRecognitionInstance = null;
        if (btnEl) {
            btnEl.classList.remove('recording-active');
            btnEl.innerHTML = '🎙️ Treinar Pronúncia';
        }
        return;
    }

    const isEnglish = (document.body && document.body.getAttribute('data-lang') === 'english') || window.location.pathname.includes('en-US');
    const recognition = new SpeechRecognition();
    recognition.lang = isEnglish ? 'en-US' : 'ja-JP';
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;

    activeRecognitionInstance = recognition;

    if (btnEl) {
        btnEl.classList.add('recording-active');
        btnEl.innerHTML = '🔴 Escutando... Fale!';
    }
    if (typeof mostrarToast === 'function') mostrarToast(isEnglish ? '🎙️ <strong>Listening in English...</strong> Speak out loud!' : '🎙️ <strong>Escutando em Japonês...</strong> Fale em voz alta!');
    if (typeof playBeep === 'function') playBeep('click');

    recognition.onresult = (e) => {
        activeRecognitionInstance = null;
        if (btnEl) {
            btnEl.classList.remove('recording-active');
            btnEl.innerHTML = '🎙️ Treinar Pronúncia';
        }

        const transcripts = [];
        for (let i = 0; i < e.results.length; i++) {
            for (let j = 0; j < e.results[i].length; j++) {
                transcripts.push(e.results[i][j].transcript.trim());
            }
        }

        const normalizarTextoLocal = typeof normalizarTexto === 'function' ? normalizarTexto : (t => t.toLowerCase().trim());
        const rawExpected = normalizarTextoLocal(textoEsperado);
        let matchScore = 0;
        let bestTranscript = transcripts[0] || '';

        transcripts.forEach(tr => {
            const normTr = normalizarTextoLocal(tr);
            if (normTr === rawExpected) {
                matchScore = 1.0;
                bestTranscript = tr;
            } else if (normTr.includes(rawExpected) || rawExpected.includes(normTr)) {
                matchScore = Math.max(matchScore, 0.85);
                bestTranscript = tr;
            } else {
                const lenMax = Math.max(normTr.length, rawExpected.length) || 1;
                let sameCount = 0;
                for (let c = 0; c < Math.min(normTr.length, rawExpected.length); c++) {
                    if (normTr[c] === rawExpected[c]) sameCount++;
                }
                const score = sameCount / lenMax;
                if (score > matchScore) {
                    matchScore = score;
                    bestTranscript = tr;
                }
            }
        });

        if (matchScore >= 0.70) {
            if (typeof playBeep === 'function') playBeep('success');
            if (typeof mostrarToast === 'function') mostrarToast(`🎉 <strong>Pronúncia Correta!</strong> Ouvi: <em>"${bestTranscript}"</em> (+10 XP)`);
            if (typeof adicionarXP === 'function') adicionarXP(10, isEnglish ? 'Pronúncia Aprovada em Inglês' : 'Pronúncia Aprovada em Japonês');
            if (isEnglish) {
                const cur = (parseInt(localStorage.getItem('ja_en_voice_answers_count')) || 0) + 1;
                localStorage.setItem('ja_en_voice_answers_count', cur.toString());
                if (typeof checarConquistasGerais === 'function') checarConquistasGerais();
            } else {
                const cur = (parseInt(localStorage.getItem('ja_voice_answers_count')) || 0) + 1;
                localStorage.setItem('ja_voice_answers_count', cur.toString());
                if (typeof checarConquistasGerais === 'function') checarConquistasGerais();
            }
            if (typeof dispararConfeti === 'function') dispararConfeti({ particleCount: 40, spread: 50, origin: { y: 0.8 } });
        } else {
            if (typeof playBeep === 'function') playBeep('error');
            if (typeof mostrarToast === 'function') mostrarToast(`🎧 <strong>Quase! Tente novamente.</strong> Ouvi: <em>"${bestTranscript}"</em> (Esperado: "${textoEsperado}")`);
        }
    };

    recognition.onerror = (e) => {
        activeRecognitionInstance = null;
        if (btnEl) {
            btnEl.classList.remove('recording-active');
            btnEl.innerHTML = '🎙️ Treinar Pronúncia';
        }
        if (e.error !== 'no-speech' && e.error !== 'aborted') {
            if (typeof mostrarToast === 'function') mostrarToast(`⚠️ <strong>Erro no Microfone:</strong> ${e.error}. Verifique se concedeu permissão.`);
        }
    };

    recognition.onend = () => {
        activeRecognitionInstance = null;
        if (btnEl) {
            btnEl.classList.remove('recording-active');
            btnEl.innerHTML = '🎙️ Treinar Pronúncia';
        }
    };

    try {
        recognition.start();
    } catch (err) {
        activeRecognitionInstance = null;
        if (btnEl) {
            btnEl.classList.remove('recording-active');
            btnEl.innerHTML = '🎙️ Treinar Pronúncia';
        }
    }
}

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.activeRecognitionInstance = activeRecognitionInstance;
    window.testarPronunciaVoz = testarPronunciaVoz;
    window.gravarEPronunciar = gravarEPronunciar;
}
