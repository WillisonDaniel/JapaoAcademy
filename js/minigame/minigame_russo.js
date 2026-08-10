// ============================================================================
// MINIGAME CIRÍLICO ARCADE - LÓGICA DE JOGO E MOTOR DA ARENA (ru-RU)
// RUSSO ACADEMY
// ============================================================================

// ESTADO GLOBAL DO MINIGAME ARCADE
let selectedGameMode = 'letters'; // 'letters' | 'vocab' | 'pegadinha'
let selectedInputMode = 'mc';     // 'mc' | 'typing' | 'voice'
let currentQuestions = [];
let currentIndex = 0;
let lives = 3;
let score = 0;
let combo = 1;
let maxComboInGame = 1;
let timerInterval = null;
let currentRoundTime = 15;
let isAnswering = false;

// Web Speech API
let speechRecognition = null;
let isListening = false;
let lastRecognizedText = '';

// BANCO DE CARTAS DE PEGADINHA CIRÍLICA (3 Segundos)
const PEGADINHAS_CIRILICAS = [
    { prompt: "В в", statement: "Tem som de 'B' como em 'bola'.", isTrue: false, explanation: "É PEGADINHA! A letra В cirílica tem som de 'V' como em 'vinho'." },
    { prompt: "Р р", statement: "Tem som de 'R' vibrante como em 'carro'.", isTrue: true, explanation: "VERDADE! A letra Р cirílica soa como 'R'." },
    { prompt: "С с", statement: "Tem som de 'C' suave ou 'S' de 'sol'.", isTrue: true, explanation: "VERDADE! A letra С cirílica soa como 'S'." },
    { prompt: "Н н", statement: "Tem som de 'H' como em 'hotel'.", isTrue: false, explanation: "É PEGADINHA! A letra Н cirílica tem som de 'N' de 'navio'." },
    { prompt: "У у", statement: "Tem som de 'U' como em 'uva'.", isTrue: true, explanation: "VERDADE! A letra У cirílica soa como 'U'." },
    { prompt: "Х х", statement: "Tem som de 'X' como em 'xícara'.", isTrue: false, explanation: "É PEGADINHA! A letra Х cirílica tem som de 'R' raspado como em 'khleb'." },
    { prompt: "Я я", statement: "Significa o pronome 'Eu' em russo.", isTrue: true, explanation: "VERDADE! Я significa 'Eu' em russo." },
    { prompt: "Ъ ъ", statement: "Tem som de 'Z' forte no final das palavras.", isTrue: false, explanation: "É PEGADINHA! O Sinal Duro Ъ é muto e apenas impede a palatização." },
    { prompt: "Ь ь", statement: "Não tem som próprio, mas suaviza a consoante anterior.", isTrue: true, explanation: "VERDADE! O Sinal Suave Ь suaviza e palatiza a consoante." },
    { prompt: "И и", statement: "Tem som de 'N' de 'navio'.", isTrue: false, explanation: "É PEGADINHA! A letra И cirílica tem som de 'I' de 'ilha'." },
    { prompt: "Ж ж", statement: "Tem som de 'J' forte como em 'janela'.", isTrue: true, explanation: "VERDADE! A letra Ж soa como 'J' forte." },
    { prompt: "Здравствуйте", statement: "Significa 'Adeus' em russo formal.", isTrue: false, explanation: "É PEGADINHA! Здравствуйте significa 'Olá / Como vai?' (Formal)." },
    { prompt: "Спасибо", statement: "Significa 'Obrigado(a)' em russo.", isTrue: true, explanation: "VERDADE! Спасибо significa 'Obrigado'." },
    { prompt: "Пожалуйста", statement: "Significa 'Por favor' ou 'De nada'.", isTrue: true, explanation: "VERDADE! Пожалуйста significa 'Por favor' / 'De nada'." },
    { prompt: "До свидания", statement: "Significa 'Bom dia'.", isTrue: false, explanation: "É PEGADINHA! До свидания significa 'Até logo / Adeus'." },
    { prompt: "Ресторан", statement: "Lê-se 'Restaran' e significa 'Restaurante'.", isTrue: true, explanation: "VERDADE! Ресторан soa 'Restaran' e significa Restaurante." },
    { prompt: "Книга", statement: "Significa 'Caneta'.", isTrue: false, explanation: "É PEGADINHA! Книга significa 'Livro'." },
    { prompt: "Дом", statement: "Significa 'Casa' ou 'Lar'.", isTrue: true, explanation: "VERDADE! Дом significa 'Casa'." },
    { prompt: "Вода", statement: "Significa 'Fogo'.", isTrue: false, explanation: "É PEGADINHA! Вода significa 'Água'." },
    { prompt: "Привет", statement: "É uma saudação informal (Oi / Olá).", isTrue: true, explanation: "VERDADE! Привет é 'Oi / Olá' informal." }
];

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    loadHighScores();
    setupKeyboardInput();
    initSpeechRecognition();
});

function loadHighScores() {
    const hs = localStorage.getItem('russo_arcade_highscore') || '0';
    const mc = localStorage.getItem('russo_arcade_maxcombo') || '1';
    const cfgHs = document.getElementById('cfg-high-score');
    const cfgMc = document.getElementById('cfg-max-combo');
    if (cfgHs) cfgHs.textContent = hs;
    if (cfgMc) cfgMc.textContent = mc;
}

function selectGameMode(mode) {
    selectedGameMode = mode;
    const cardLetters = document.getElementById('card-mode-letters');
    const cardVocab = document.getElementById('card-mode-vocab');
    const cardPegadinha = document.getElementById('card-mode-pegadinha');

    if (cardLetters) cardLetters.classList.toggle('selected', mode === 'letters');
    if (cardVocab) cardVocab.classList.toggle('selected', mode === 'vocab');
    if (cardPegadinha) cardPegadinha.classList.toggle('selected', mode === 'pegadinha');

    const subLetters = document.getElementById('subfilter-letters-box');
    const subVocab = document.getElementById('subfilter-vocab-box');
    const inputModeSec = document.getElementById('setup-input-mode-section');

    if (subLetters) subLetters.style.display = mode === 'letters' ? 'block' : 'none';
    if (subVocab) subVocab.style.display = mode === 'vocab' ? 'block' : 'none';
    if (inputModeSec) inputModeSec.style.display = mode === 'pegadinha' ? 'none' : 'block';

    if (typeof playBeep === 'function') playBeep('click');
}

function selectInputMode(mode) {
    selectedInputMode = mode;
    const cardMc = document.getElementById('card-input-mc');
    const cardTyping = document.getElementById('card-input-typing');
    const cardVoice = document.getElementById('card-input-voice');

    if (cardMc) cardMc.classList.toggle('selected', mode === 'mc');
    if (cardTyping) cardTyping.classList.toggle('selected', mode === 'typing');
    if (cardVoice) cardVoice.classList.toggle('selected', mode === 'voice');

    if (typeof playBeep === 'function') playBeep('click');
}

// MONTAGEM DO BANCO DE PERGUNTAS DA PARTIDA
function buildQuestionPool() {
    let pool = [];

    if (selectedGameMode === 'pegadinha') {
        PEGADINHAS_CIRILICAS.forEach(item => {
            pool.push({
                prompt: item.prompt,
                sub: `Afirmação: "${item.statement}"`,
                isTrue: item.isTrue,
                explanation: item.explanation,
                audioText: item.prompt.split(' ')[0]
            });
        });
    } else if (selectedGameMode === 'letters') {
        const subFilterEl = document.getElementById('filter-letters-select');
        const subFilter = subFilterEl ? subFilterEl.value : 'all';

        if (typeof DADOS_RUSSO_CIRILICO !== 'undefined' && DADOS_RUSSO_CIRILICO.modules) {
            DADOS_RUSSO_CIRILICO.modules.forEach(mod => {
                if (subFilter === 'all' || String(mod.id) === String(subFilter)) {
                    (mod.chars || []).forEach(ch => {
                        pool.push({
                            prompt: ch.char,
                            sub: `Som / Transliteração da letra (${ch.type})`,
                            answer: ch.romaji,
                            audioText: ch.char.split(' ')[0],
                            distractors: generateLetterDistractors(ch.romaji)
                        });
                    });
                }
            });
        }
    } else {
        // Modo Vocabulário
        const subFilterEl = document.getElementById('filter-vocab-select');
        const subFilter = subFilterEl ? subFilterEl.value : 'all';
        const courses = [];

        if (typeof CURSO_RUSSO_A1_DADOS !== 'undefined' && (subFilter === 'all' || subFilter === 'A1')) courses.push(...CURSO_RUSSO_A1_DADOS);
        if (typeof CURSO_RUSSO_A2_DADOS !== 'undefined' && (subFilter === 'all' || subFilter === 'A2')) courses.push(...CURSO_RUSSO_A2_DADOS);
        if (typeof CURSO_RUSSO_B1_DADOS !== 'undefined' && (subFilter === 'all' || subFilter === 'B1')) courses.push(...CURSO_RUSSO_B1_DADOS);
        if (typeof CURSO_RUSSO_B2_DADOS !== 'undefined' && (subFilter === 'all' || subFilter === 'B2')) courses.push(...CURSO_RUSSO_B2_DADOS);

        courses.forEach(mod => {
            (mod.drops || []).forEach(drop => {
                if (drop.type === 'vocab' && drop.word && drop.translation) {
                    pool.push({
                        prompt: drop.word,
                        sub: `Tradução / Significado em Português`,
                        answer: drop.translation,
                        audioText: drop.word,
                        distractors: generateVocabDistractors(drop.translation)
                    });
                }
            });
        });
    }

    // Embaralhar perguntas
    return pool.sort(() => Math.random() - 0.5);
}

function generateLetterDistractors(correctRomaji) {
    const allRomajis = ['A', 'B', 'V', 'G', 'D', 'E', 'YO', 'ZH', 'Z', 'I', 'Y', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'F', 'KH', 'TS', 'CH', 'SH', 'SCH', 'YI', 'YU', 'YA'];
    const filtered = allRomajis.filter(r => r.toLowerCase() !== correctRomaji.toLowerCase());
    filtered.sort(() => Math.random() - 0.5);
    return filtered.slice(0, 3);
}

function generateVocabDistractors(correctTrans) {
    const commonDistractors = ['Olá / Oi', 'Obrigado', 'Por favor', 'Água', 'Amigo', 'Professor', 'Sim', 'Não', 'Bom dia', 'Trabalho', 'Estudante', 'Casa', 'Cidade', 'Livro', 'Viagem'];
    const filtered = commonDistractors.filter(d => d.toLowerCase() !== correctTrans.toLowerCase());
    filtered.sort(() => Math.random() - 0.5);
    return filtered.slice(0, 3);
}

// INICIAR O JOGO
function startGame() {
    currentQuestions = buildQuestionPool();
    if (currentQuestions.length === 0) {
        alert('Nenhuma pergunta encontrada para os filtros selecionados.');
        return;
    }

    currentIndex = 0;
    lives = 3;
    score = 0;
    combo = 1;
    maxComboInGame = 1;
    isAnswering = false;

    const screenCfg = document.getElementById('screen-config');
    const screenRes = document.getElementById('screen-results');
    const screenGame = document.getElementById('screen-game');

    if (screenCfg) screenCfg.style.display = 'none';
    if (screenRes) screenRes.style.display = 'none';
    if (screenGame) screenGame.style.display = 'block';

    // Ajustar visibilidade dos containers de resposta
    const containerMc = document.getElementById('mode-mc-container');
    const containerTyping = document.getElementById('mode-typing-container');
    const containerVoice = document.getElementById('mode-voice-container');
    const containerPegadinha = document.getElementById('mode-pegadinha-container');

    const isPegadinha = selectedGameMode === 'pegadinha';

    if (containerMc) containerMc.style.display = (!isPegadinha && selectedInputMode === 'mc') ? 'grid' : 'none';
    if (containerTyping) containerTyping.style.display = (!isPegadinha && selectedInputMode === 'typing') ? 'flex' : 'none';
    if (containerVoice) containerVoice.style.display = (!isPegadinha && selectedInputMode === 'voice') ? 'flex' : 'none';
    if (containerPegadinha) containerPegadinha.style.display = isPegadinha ? 'block' : 'none';

    updateHUD();
    renderCurrentQuestion();
    if (typeof playBeep === 'function') playBeep('click');
}

function showConfigScreen() {
    clearInterval(timerInterval);
    const screenGame = document.getElementById('screen-game');
    const screenRes = document.getElementById('screen-results');
    const screenCfg = document.getElementById('screen-config');

    if (screenGame) screenGame.style.display = 'none';
    if (screenRes) screenRes.style.display = 'none';
    if (screenCfg) screenCfg.style.display = 'block';

    loadHighScores();
}

function updateHUD() {
    const hearts = '❤️'.repeat(Math.max(0, lives)) + '🖤'.repeat(Math.max(0, 3 - lives));
    const livesEl = document.getElementById('game-lives');
    const scoreEl = document.getElementById('game-score');
    const comboEl = document.getElementById('game-combo');

    if (livesEl) livesEl.textContent = hearts;
    if (scoreEl) scoreEl.textContent = score;
    if (comboEl) comboEl.textContent = `🔥 x${combo}`;
}

// RENDERIZAR QUESTÃO ATUAL
function renderCurrentQuestion() {
    if (currentIndex >= currentQuestions.length || lives <= 0) {
        endGame();
        return;
    }

    isAnswering = false;
    const q = currentQuestions[currentIndex];

    const promptTextEl = document.getElementById('prompt-text');
    const promptSubEl = document.getElementById('prompt-sub');
    const feedbackBanner = document.getElementById('pegadinha-feedback-banner');

    if (promptTextEl) promptTextEl.textContent = q.prompt;
    if (promptSubEl) promptSubEl.textContent = q.sub;
    if (feedbackBanner) feedbackBanner.style.display = 'none';

    // Pronunciar texto automaticamente
    speakRussian(q.audioText || q.prompt);

    currentRoundTime = (selectedGameMode === 'pegadinha') ? 3 : 15;

    // Se for Múltipla Escolha
    if (selectedGameMode !== 'pegadinha' && selectedInputMode === 'mc') {
        const options = [q.answer, ...q.distractors].sort(() => Math.random() - 0.5);
        options.forEach((opt, idx) => {
            const btn = document.getElementById(`mc-btn-${idx}`);
            if (btn) {
                btn.textContent = opt;
                btn.className = 'mc-btn';
                btn.dataset.answer = opt;
            }
        });
    }

    // Se for Digitação
    if (selectedGameMode !== 'pegadinha' && selectedInputMode === 'typing') {
        const input = document.getElementById('type-input');
        if (input) {
            input.value = '';
            input.focus();
        }
    }

    // Se for Voz
    if (selectedGameMode !== 'pegadinha' && selectedInputMode === 'voice') {
        const statusEl = document.getElementById('voice-status');
        const transcriptEl = document.getElementById('voice-transcript');
        if (statusEl) statusEl.textContent = 'Clique no microfone para falar em Russo';
        if (transcriptEl) transcriptEl.textContent = '...';
        lastRecognizedText = '';
    }

    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    const bar = document.getElementById('timer-bar');
    if (bar) bar.style.width = '100%';

    const startTime = Date.now();
    timerInterval = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const remaining = Math.max(0, currentRoundTime - elapsed);
        const pct = (remaining / currentRoundTime) * 100;
        if (bar) bar.style.width = `${pct}%`;

        if (remaining <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 50);
}

// RESPOSTA POR PEGADINHA (VERDADE / PEGADINHA - 3s)
function checkAnswerPegadinha(userChoice) {
    if (isAnswering) return;
    isAnswering = true;
    clearInterval(timerInterval);

    const q = currentQuestions[currentIndex];
    const isCorrect = (userChoice === q.isTrue);
    const feedbackBanner = document.getElementById('pegadinha-feedback-banner');

    if (feedbackBanner) {
        feedbackBanner.style.display = 'block';
        if (isCorrect) {
            feedbackBanner.style.background = 'rgba(16, 185, 129, 0.2)';
            feedbackBanner.style.border = '1px solid #10b981';
            feedbackBanner.style.color = '#10b981';
            feedbackBanner.innerHTML = `✅ <strong>CORRETO!</strong> ${q.explanation}`;
        } else {
            feedbackBanner.style.background = 'rgba(239, 68, 68, 0.2)';
            feedbackBanner.style.border = '1px solid #ef4444';
            feedbackBanner.style.color = '#ef4444';
            feedbackBanner.innerHTML = `❌ <strong>ERRADO!</strong> ${q.explanation}`;
        }
    }

    if (isCorrect) {
        handleSuccess();
    } else {
        handleFailure();
    }
}

// RESPOSTA POR MÚLTIPLA ESCOLHA
function checkAnswerMC(btnIndex) {
    if (isAnswering) return;
    isAnswering = true;
    clearInterval(timerInterval);

    const q = currentQuestions[currentIndex];
    const btn = document.getElementById(`mc-btn-${btnIndex}`);
    const selectedText = btn ? btn.dataset.answer : '';

    if (selectedText.toLowerCase() === q.answer.toLowerCase()) {
        if (btn) btn.classList.add('correct');
        handleSuccess();
    } else {
        if (btn) btn.classList.add('wrong');
        for (let i = 0; i < 4; i++) {
            const b = document.getElementById(`mc-btn-${i}`);
            if (b && b.dataset.answer.toLowerCase() === q.answer.toLowerCase()) {
                b.classList.add('correct');
            }
        }
        handleFailure();
    }
}

// RESPOSTA POR DIGITAÇÃO
function checkAnswerTyping() {
    if (isAnswering) return;
    isAnswering = true;
    clearInterval(timerInterval);

    const q = currentQuestions[currentIndex];
    const input = document.getElementById('type-input');
    const userVal = input ? input.value.trim().toLowerCase() : '';

    const targetAnswer = q.answer.toLowerCase();
    const altAnswer = (q.prompt || '').toLowerCase();

    if (userVal === targetAnswer || userVal === altAnswer) {
        if (input) input.style.borderColor = '#10b981';
        handleSuccess();
    } else {
        if (input) input.style.borderColor = '#ef4444';
        handleFailure();
    }
}

// RESPOSTA POR VOZ
function checkAnswerVoice() {
    if (isAnswering) return;
    isAnswering = true;
    clearInterval(timerInterval);

    const q = currentQuestions[currentIndex];
    const userVal = lastRecognizedText.trim().toLowerCase();
    const target = (q.prompt || q.audioText || '').toLowerCase();

    if (userVal.includes(target) || target.includes(userVal)) {
        handleSuccess();
    } else {
        handleFailure();
    }
}

// SUCESSO NA RODADA
function handleSuccess() {
    if (typeof playBeep === 'function') playBeep('correct');
    const gainedScore = 100 * combo;
    score += gainedScore;
    combo++;
    if (combo > maxComboInGame) maxComboInGame = combo;

    updateHUD();

    setTimeout(() => {
        currentIndex++;
        renderCurrentQuestion();
    }, selectedGameMode === 'pegadinha' ? 1000 : 800);
}

// FALHA NA RODADA
function handleFailure() {
    if (typeof playBeep === 'function') playBeep('wrong');
    lives--;
    combo = 1;
    updateHUD();

    setTimeout(() => {
        if (lives <= 0) {
            endGame();
        } else {
            currentIndex++;
            renderCurrentQuestion();
        }
    }, selectedGameMode === 'pegadinha' ? 1200 : 1000);
}

function handleTimeout() {
    if (isAnswering) return;
    isAnswering = true;

    if (selectedGameMode === 'pegadinha') {
        const q = currentQuestions[currentIndex];
        const feedbackBanner = document.getElementById('pegadinha-feedback-banner');
        if (feedbackBanner) {
            feedbackBanner.style.display = 'block';
            feedbackBanner.style.background = 'rgba(239, 68, 68, 0.2)';
            feedbackBanner.style.border = '1px solid #ef4444';
            feedbackBanner.style.color = '#ef4444';
            feedbackBanner.innerHTML = `⏰ <strong>TEMPO ESGOTADO (3s)!</strong> ${q ? q.explanation : ''}`;
        }
    }

    handleFailure();
}

// TECLADO VIRTUAL CIRÍLICO
function pressKbd(char) {
    const input = document.getElementById('type-input');
    if (!input) return;
    if (char === 'BACK') {
        input.value = input.value.slice(0, -1);
    } else if (char === 'CLEAR') {
        input.value = '';
    } else {
        input.value += char.toLowerCase();
    }
    input.focus();
    if (typeof playBeep === 'function') playBeep('click');
}

function setupKeyboardInput() {
    const input = document.getElementById('type-input');
    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkAnswerTyping();
            }
        });
    }
}

// RECONHECIMENTO DE VOZ (WEB SPEECH API)
function initSpeechRecognition() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
        speechRecognition = new SpeechRec();
        speechRecognition.lang = 'ru-RU';
        speechRecognition.continuous = false;
        speechRecognition.interimResults = true;

        speechRecognition.onstart = () => {
            isListening = true;
            const btnMic = document.getElementById('btn-mic');
            const statusEl = document.getElementById('voice-status');
            if (btnMic) btnMic.classList.add('listening');
            if (statusEl) statusEl.textContent = 'Escutando em Russo (ru-RU)... Fale agora!';
        };

        speechRecognition.onresult = (e) => {
            const transcript = Array.from(e.results)
                .map(r => r[0].transcript)
                .join('');
            lastRecognizedText = transcript;
            const transcriptEl = document.getElementById('voice-transcript');
            if (transcriptEl) transcriptEl.textContent = transcript;
        };

        speechRecognition.onerror = (e) => {
            console.error('Speech error:', e.error);
            const statusEl = document.getElementById('voice-status');
            const btnMic = document.getElementById('btn-mic');
            if (statusEl) statusEl.textContent = 'Erro no microfone. Tente novamente.';
            if (btnMic) btnMic.classList.remove('listening');
            isListening = false;
        };

        speechRecognition.onend = () => {
            isListening = false;
            const btnMic = document.getElementById('btn-mic');
            const statusEl = document.getElementById('voice-status');
            if (btnMic) btnMic.classList.remove('listening');
            if (lastRecognizedText && statusEl) {
                statusEl.textContent = 'Voz capturada! Clique em Validar Voz.';
            }
        };
    } else {
        const statusEl = document.getElementById('voice-status');
        if (statusEl) statusEl.textContent = 'Reconhecimento de voz não suportado neste navegador.';
    }
}

function toggleVoiceRecognition() {
    if (!speechRecognition) {
        alert('Navegador não suporta Web Speech API para ru-RU.');
        return;
    }
    if (isListening) {
        speechRecognition.stop();
    } else {
        lastRecognizedText = '';
        speechRecognition.start();
    }
}

// ÁUDIO TTS RUSSO
function speakRussian(text) {
    if ('speechSynthesis' in window && text) {
        window.speechSynthesis.cancel();
        const cleanText = text.split(' ')[0].split('(')[0].trim();
        const msg = new SpeechSynthesisUtterance(cleanText);
        msg.lang = 'ru-RU';
        msg.rate = 0.85;
        window.speechSynthesis.speak(msg);
    }
}

function playCurrentAudio() {
    const q = currentQuestions[currentIndex];
    if (q) speakRussian(q.audioText || q.prompt);
}

// FIM DE JOGO E RECOMPENSAS XP
function endGame() {
    clearInterval(timerInterval);
    const screenGame = document.getElementById('screen-game');
    const screenRes = document.getElementById('screen-results');
    if (screenGame) screenGame.style.display = 'none';
    if (screenRes) screenRes.style.display = 'block';

    const prevHigh = parseInt(localStorage.getItem('russo_arcade_highscore') || '0', 10);
    const prevCombo = parseInt(localStorage.getItem('russo_arcade_maxcombo') || '1', 10);

    const isNewRecord = score > prevHigh;
    if (score > prevHigh) localStorage.setItem('russo_arcade_highscore', score);
    if (maxComboInGame > prevCombo) localStorage.setItem('russo_arcade_maxcombo', maxComboInGame);

    const xpEarned = Math.round(score / 5);
    if (typeof adicionarXP === 'function' && xpEarned > 0) {
        adicionarXP(xpEarned, 'Minigame Cirílico Arcade');
    }

    const resTitle = document.getElementById('results-title');
    const resScore = document.getElementById('res-score');
    const resCombo = document.getElementById('res-combo');
    const resXp = document.getElementById('res-xp');

    if (resTitle) resTitle.textContent = isNewRecord ? '🎉 NOVO RECORDE!' : '🎮 Fim de Jogo!';
    if (resScore) resScore.textContent = score;
    if (resCombo) resCombo.textContent = `x${maxComboInGame}`;
    if (resXp) resXp.textContent = `+${xpEarned} XP`;

    if (isNewRecord && typeof confetti === 'function') {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    }
}
