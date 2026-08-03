// ======================================
// MÓDULO GAME - MINIGAMES & JOGOS DE FIXAÇÃO
// ======================================

let globalHighScore = 0, globalMaxCombo = 0;
let isInfiniteLives = false, inputMode = 'typing';
let gPlayQueue = [], gLastPicked = "", gPool = [], gCard = null, gScore = 0, gLives = 3, gStreak = 0, gMaxStreak = 0, gProc = false;

const SpeechRecognition = typeof window !== 'undefined' ? (window.SpeechRecognition || window.webkitSpeechRecognition) : null;
let recognition = null;
if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    const isEnglishMode = (typeof document !== 'undefined' && document.body && document.body.getAttribute('data-lang') === 'english') || (typeof window !== 'undefined' && window.location && window.location.pathname.includes('en-US'));
    recognition.lang = isEnglishMode ? 'en-US' : 'ja-JP';
    recognition.interimResults = false;
    recognition.maxAlternatives = 10;
    recognition.onresult = (event) => {
        const btn = document.getElementById('g-mic-btn');
        if (btn) {
            btn.classList.remove('listening');
            btn.innerHTML = '🎙️ Falar Agora';
        }
        let transcripts = [];
        for (let i = 0; i < event.results[0].length; i++) transcripts.push(event.results[0][i].transcript.trim());
        checkSpeechAnswer(transcripts);
    };
    recognition.onerror = (e) => {
        const btn = document.getElementById('g-mic-btn');
        if (btn) {
            btn.classList.remove('listening');
            btn.innerHTML = '🎙️ Falar Agora';
        }
        if (e.error === 'not-allowed') alert("Acesso ao microfone negado!");
        gProc = false;
    };
    recognition.onend = () => {
        const btn = document.getElementById('g-mic-btn');
        if (btn) {
            btn.classList.remove('listening');
            btn.innerHTML = '🎙️ Falar Agora';
        }
        if (!gProc) gProc = false;
    };
}
function isEnglishMinigame() {
    if (typeof document !== 'undefined' && document.body) {
        if (document.body.getAttribute('data-lang') === 'english') return true;
    }
    if (typeof window !== 'undefined' && window.location) {
        return window.location.pathname.includes('/en-US/') || window.location.pathname.includes('minigame_ingles.html');
    }
    return false;
}

function normalizeStringMatch(str) {
    if (!str) return "";
    return str.normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/[^a-zA-Z0-9\s]/g, "")
              .trim()
              .toLowerCase();
}

function formatMinigameLives(lives) {
    if (isInfiniteLives) return "♾️";
    if (typeof lives === 'string' && lives.includes('♾️')) return "♾️";
    const n = parseInt(lives);
    if (isNaN(n) || n <= 0) return "💔";
    return Array(n).fill("❤️").join(" ");
}

function initGameScreen() {
    if (isEnglishMinigame()) {
        globalHighScore = parseInt(localStorage.getItem('en_highScore')) || 0;
        globalMaxCombo = parseInt(localStorage.getItem('en_maxCombo')) || 0;
    } else {
        globalHighScore = parseInt(localStorage.getItem('ja_highScore')) || 0;
        globalMaxCombo = parseInt(localStorage.getItem('ja_maxCombo')) || 0;
    }

    const hsElem = document.getElementById('menu-high-score');
    const mcElem = document.getElementById('menu-max-combo');
    if (hsElem) hsElem.textContent = globalHighScore;
    if (mcElem) mcElem.textContent = isEnglishMinigame() ? `🔥 ${globalMaxCombo}x` : `${globalMaxCombo}x`;

    document.querySelectorAll('.script-lbl').forEach(lbl => {
        lbl.onclick = () => {
            document.querySelectorAll('.script-lbl').forEach(l => l.classList.remove('active'));
            lbl.classList.add('active');
            const input = lbl.querySelector('input'); if (input) input.checked = true;
        }
    });

    document.querySelectorAll('.mode-lbl').forEach(lbl => {
        lbl.onclick = () => {
            document.querySelectorAll('.mode-lbl').forEach(l => l.classList.remove('active'));
            lbl.classList.add('active');
            const input = lbl.querySelector('input'); if (input) input.checked = true;
        }
    });

    const gameInput = document.getElementById('g-ans-input');
    if (gameInput) {
        gameInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                checkTypingAnswer();
            }
        });

        gameInput.addEventListener('input', function () {
            if (!gCard || isEnglishMinigame()) return;
            let text = this.value;
            const map = gCard.s === 'H' ? (typeof ROMAJI_HIRA_MAP !== 'undefined' ? ROMAJI_HIRA_MAP : {}) : (typeof ROMAJI_KATA_MAP !== 'undefined' ? ROMAJI_KATA_MAP : {});
            const sokuon = gCard.s === 'H' ? 'っ$1' : 'ッ$1'; const nFinal = gCard.s === 'H' ? 'ん$1' : 'ン$1';
            text = text.replace(/([ksthmyrwbpzdjgcfv])\1/gi, sokuon); text = text.replace(/n([bcdfghjklmpqrstvwxz])/gi, nFinal);
            const keys = Object.keys(map).sort((a, b) => b.length - a.length);
            for (let key of keys) text = text.replace(new RegExp(key, 'gi'), map[key]);
            this.value = text;
        });
    }

    document.addEventListener('keydown', function (e) {
        if (document.getElementById('game-play-screen') && document.getElementById('game-play-screen').style.display === 'block') {
            if (inputMode === 'voice' && e.code === 'Space') { e.preventDefault(); startListening(); }
        }
    });
}

function showGameTab(tab) {
    const menuScr = document.getElementById('game-menu-screen');
    const playScr = document.getElementById('game-play-screen');
    const overScr = document.getElementById('game-over-screen');
    if (menuScr) menuScr.style.display = 'none';
    if (playScr) playScr.style.display = 'none';
    if (overScr) overScr.style.display = 'none';

    if (tab === 'menu') {
        if (isEnglishMinigame()) {
            const hs = parseInt(localStorage.getItem('en_highScore')) || 0;
            const mc = parseInt(localStorage.getItem('en_maxCombo')) || 0;
            const hsEl = document.getElementById('menu-high-score');
            const mcEl = document.getElementById('menu-max-combo');
            if (hsEl) hsEl.textContent = hs;
            if (mcEl) mcEl.textContent = `🔥 ${mc}x`;
        } else {
            const hsEl = document.getElementById('menu-high-score');
            const mcEl = document.getElementById('menu-max-combo');
            if (hsEl) hsEl.textContent = globalHighScore;
            if (mcEl) mcEl.textContent = globalMaxCombo;
        }
        if (menuScr) menuScr.style.display = 'block';
    } else if (tab === 'play') {
        if (playScr) playScr.style.display = 'block';
    } else if (tab === 'over') {
        if (overScr) overScr.style.display = 'block';
    }
}

function exitGame() {
    if (isEnglishMinigame()) {
        const enHs = parseInt(localStorage.getItem('en_highScore')) || 0;
        const enMc = parseInt(localStorage.getItem('en_maxCombo')) || 0;
        if (!isInfiniteLives && gScore > enHs) { localStorage.setItem('en_highScore', gScore); }
        if (!isInfiniteLives && gMaxStreak > enMc) { localStorage.setItem('en_maxCombo', gMaxStreak); }
    } else {
        if (!isInfiniteLives && gScore > globalHighScore) { globalHighScore = gScore; localStorage.setItem('ja_highScore', globalHighScore); }
        if (!isInfiniteLives && gMaxStreak > globalMaxCombo) { globalMaxCombo = gMaxStreak; localStorage.setItem('ja_maxCombo', globalMaxCombo); }
    }
    showGameTab('menu');
}

function startGame() {
    const isEn = isEnglishMinigame();
    const modeEl = document.querySelector('input[name="script_mode"]:checked');
    const mode = modeEl ? modeEl.value : 'all';

    const inputModeEl = document.querySelector('input[name="input_mode"]:checked');
    inputMode = inputModeEl ? inputModeEl.value : 'typing';
    isInfiniteLives = document.getElementById('g-infinite-lives') ? document.getElementById('g-infinite-lives').checked : false;

    const checkedBoxes = Array.from(document.querySelectorAll('.cat-cb:checked')).map(c => c.value);

    if (!checkedBoxes.length) return alert('Selecione pelo menos uma categoria!');

    if (typeof playBeep === 'function') playBeep('success');
    gPool = [];

    if (isEn) {
        const dataBase = typeof MINIGAME_ENGLISH_DATA !== 'undefined' ? MINIGAME_ENGLISH_DATA : null;

        checkedBoxes.forEach(levelKey => {
            if (dataBase && dataBase[levelKey] && Array.isArray(dataBase[levelKey])) {
                dataBase[levelKey].forEach(item => {
                    gPool.push({ ...item, s: 'EN', c: item.c || `Nível ${levelKey}` });
                });
            } else {
                const courseArrName = `CURSO_ENGLISH_${levelKey}_DADOS`;
                const courseArr = typeof window !== 'undefined' ? window[courseArrName] : null;
                if (courseArr && Array.isArray(courseArr)) {
                    courseArr.forEach(m => {
                        const module = typeof normalizeModule === 'function' ? normalizeModule(m) : m;
                        (module.drops || []).forEach(d => {
                            if (d.kanji && d.translation) {
                                const k = d.kanji.split('/')[0].trim();
                                gPool.push({
                                    k: k,
                                    r: d.romaji || '',
                                    m: d.translation,
                                    s: 'EN',
                                    c: `Nível ${levelKey}`,
                                    a: d.translation.split(/[\/,;]/).map(s => s.trim().toLowerCase())
                                });
                            }
                        });
                    });
                }
            }
        });
    } else {
        const checkedMods = checkedBoxes.filter(val => val.startsWith('mod'));
        const checkedWords = checkedBoxes.filter(val => val.startsWith('words_'));

        let allowedHiraChars = new Set();
        let allowedKataChars = new Set();
        const modsToUse = checkedMods.length > 0 ? checkedMods : ['mod1', 'mod2', 'mod3', 'mod4', 'mod5', 'mod6'];

        modsToUse.forEach(mod => {
            if (typeof RAW_H !== 'undefined' && RAW_H[mod]) { RAW_H[mod].forEach(i => { Array.from(i.k).forEach(ch => allowedHiraChars.add(ch)); }); }
            if (typeof RAW_K !== 'undefined' && RAW_K[mod]) { RAW_K[mod].forEach(i => { Array.from(i.k).forEach(ch => allowedKataChars.add(ch)); }); }
        });

        checkedMods.forEach(cat => {
            let modNum = parseInt(cat.replace('mod', ''));

            if ((mode === 'hiragana' || mode === 'both' || mode === 'all') && typeof RAW_H !== 'undefined' && RAW_H[cat]) {
                RAW_H[cat].forEach(i => gPool.push({ ...i, s: 'H', c: typeof CAT_NAMES !== 'undefined' ? (CAT_NAMES[cat] || cat.toUpperCase()) : cat.toUpperCase() }));
            }
            if ((mode === 'katakana' || mode === 'both' || mode === 'all') && typeof RAW_K !== 'undefined' && RAW_K[cat]) {
                RAW_K[cat].forEach(i => gPool.push({ ...i, s: 'K', c: typeof CAT_NAMES !== 'undefined' ? (CAT_NAMES[cat] || cat.toUpperCase()) : cat.toUpperCase() }));
            }

            const isKanjiMode = mode.startsWith('kanji') || mode === 'kanji' || mode === 'all';
            if (isKanjiMode) {
                const allKanjiDatasets = [
                    { id: 'kanji_n5', data: typeof kanjiN5Data !== 'undefined' ? kanjiN5Data : null, tag: 'Kanji N5' },
                    { id: 'kanji_n4', data: typeof kanjiN4Data !== 'undefined' ? kanjiN4Data : null, tag: 'Kanji N4' },
                    { id: 'kanji_n3', data: typeof kanjiN3Data !== 'undefined' ? kanjiN3Data : null, tag: 'Kanji N3' },
                    { id: 'kanji_n2', data: typeof kanjiN2Data !== 'undefined' ? kanjiN2Data : null, tag: 'Kanji N2' },
                    { id: 'kanji_n1', data: typeof kanjiN1Data !== 'undefined' ? kanjiN1Data : null, tag: 'Kanji N1' }
                ];

                let activeKanjiDatasets = allKanjiDatasets;
                if (mode.startsWith('kanji_n')) {
                    activeKanjiDatasets = allKanjiDatasets.filter(d => d.id === mode);
                }

                activeKanjiDatasets.forEach(ds => {
                    if (ds.data) {
                        let kMod = ds.data.find(m => m.module === modNum);
                        if (kMod && kMod.kanjis && !kMod.isReviewTable) {
                            kMod.kanjis.forEach(item => {
                                let reading = typeof getKanjiReading === 'function' ? getKanjiReading(item) : (item.kunyomi || item.onyomi || '');
                                gPool.push({
                                    k: item.character || item.kanji,
                                    r: reading,
                                    m: item.meaning,
                                    s: 'N',
                                    c: `${ds.tag} • Mód ${modNum}`
                                });
                            });
                        }
                    }
                });
            }
        });

        checkedWords.forEach(cat => {
            if ((mode === 'hiragana' || mode === 'both' || mode === 'all') && typeof RAW_H !== 'undefined' && RAW_H[cat]) {
                RAW_H[cat].forEach(w => { if (Array.from(w.k).every(ch => allowedHiraChars.has(ch))) gPool.push({ ...w, s: 'H', c: typeof CAT_NAMES !== 'undefined' ? (CAT_NAMES[cat] || cat.toUpperCase()) : cat.toUpperCase() }); });
            }
            if ((mode === 'katakana' || mode === 'both' || mode === 'all') && typeof RAW_K !== 'undefined' && RAW_K[cat]) {
                RAW_K[cat].forEach(w => { if (Array.from(w.k).every(ch => allowedKataChars.has(ch))) gPool.push({ ...w, s: 'K', c: typeof CAT_NAMES !== 'undefined' ? (CAT_NAMES[cat] || cat.toUpperCase()) : cat.toUpperCase() }); });
            }
        });
    }

    if (!gPool.length) return alert('Nenhum item encontrado para os filtros selecionados.');

    gPlayQueue = []; gLastPicked = "";
    gScore = 0; gStreak = 0; gMaxStreak = 0; gLives = isInfiniteLives ? "♾️" : 3;

    showGameTab('play');

    if (inputMode === 'typing') {
        const inp = document.getElementById('g-ans-input');
        const mic = document.getElementById('g-mic-btn');
        const hnt = document.getElementById('g-hint-text');
        if (inp) inp.style.display = 'block';
        if (mic) mic.style.display = 'none';
        if (hnt) hnt.innerHTML = 'Pressione <kbd style="background: var(--card-bg); border: 1px solid var(--border-color); padding: 2px 6px; border-radius: 4px; color: var(--text-main);">ENTER</kbd> para confirmar.';
    } else {
        const inp = document.getElementById('g-ans-input');
        const mic = document.getElementById('g-mic-btn');
        const hnt = document.getElementById('g-hint-text');
        if (inp) inp.style.display = 'none';
        if (mic) mic.style.display = 'flex';
        if (hnt) hnt.innerHTML = 'Clique no microfone ou pressione a <kbd style="background: var(--card-bg); border: 1px solid var(--border-color); padding: 2px 6px; border-radius: 4px; color: var(--text-main);">BARRA DE ESPAÇO</kbd> para falar.';
    }

    nextGameCard();
}

function nextGameCard() {
    gProc = false;

    if (gPlayQueue.length === 0) {
        const shuffleFn = typeof shuffleArray === 'function' ? shuffleArray : (arr => [...arr].sort(() => Math.random() - 0.5));
        gPlayQueue = shuffleFn([...gPool]);
        if (gPlayQueue.length > 1 && gPlayQueue[0].k === gLastPicked) {
            const first = gPlayQueue.shift(); gPlayQueue.push(first);
        }
    }

    gCard = gPlayQueue.shift(); gLastPicked = gCard.k;

    const elScore = document.getElementById('g-score');
    const elLives = document.getElementById('g-lives');
    const elCombo = document.getElementById('g-combo');
    const elBadge = document.getElementById('g-badge');

    if (elScore) elScore.textContent = gScore;
    if (elLives) elLives.textContent = formatMinigameLives(gLives);
    if (elCombo) elCombo.textContent = (isInfiniteLives ? '🔥 -' : `🔥 ${gStreak}x`);

    if (elBadge) {
        if (isEnglishMinigame()) {
            elBadge.innerHTML = `🇬🇧 INGLÊS - ${gCard.c || 'Nível'}`;
        } else {
            elBadge.textContent = gCard.s === 'H' ? `HIRAGANA - ${gCard.c}` : gCard.s === 'K' ? `KATAKANA - ${gCard.c}` : `KANJI - ${gCard.c}`;
        }
    }

    const charDiv = document.getElementById('g-big-kana');
    if (charDiv) {
        charDiv.textContent = gCard.k;
        charDiv.style.fontSize = gCard.k.length > 15 ? '2.3rem' : gCard.k.length > 8 ? '3.2rem' : gCard.k.length > 4 ? '4.2rem' : '6.5rem';
    }

    const input = document.getElementById('g-ans-input');
    if (input) {
        input.value = '';
        if (isEnglishMinigame()) {
            input.placeholder = "Digite a tradução em português...";
        } else {
            input.placeholder = "Digite em romaji ou português...";
        }
        if (inputMode === 'typing') input.focus();
    }

    const feed = document.getElementById('g-feedback');
    const cardMain = document.getElementById('g-card-main');
    if (feed) feed.style.opacity = '0';
    if (cardMain) cardMain.className = 'g-card-area';

    if (isEnglishMinigame() && gCard.k && typeof speakKana === 'function') {
        speakKana(gCard.k);
    }
}

function processGameResult(isCorrect, heardText = "") {
    const feed = document.getElementById('g-feedback');
    const card = document.getElementById('g-card-main');
    const micBtn = document.getElementById('g-mic-btn');
    const meaningText = gCard.m ? ` ➔ ${gCard.m}` : "";
    let isVoice = micBtn ? micBtn.style.display !== 'none' : false;

    if (isCorrect) {
        if (typeof playBeep === 'function') playBeep('success');
        if (!isEnglishMinigame() && typeof speakKana === 'function') speakKana(gCard.k);

        if (!isInfiniteLives) {
            gStreak++;
            if (gStreak > gMaxStreak) gMaxStreak = gStreak;
            gScore += 10 + Math.floor(gStreak / 5);
        } else {
            gStreak = 0;
            gScore += 10;
        }

        if (typeof registrarAtividadeDiaria === 'function') registrarAtividadeDiaria();
        if (isVoice) {
            const countVoice = (parseInt(localStorage.getItem('ja_voice_answers_count')) || 0) + 1;
            localStorage.setItem('ja_voice_answers_count', countVoice);
            if (typeof checarEConcederConquista === 'function' && countVoice >= 10) checarEConcederConquista('ach_voice_pro');
        }

        if (card) card.classList.add('pop', 'glow-success');
        let heardHtml = (isVoice && heardText) ? `<div style="font-size:0.85rem; color:#15803d; font-weight:normal; margin-top:6px; text-transform:none;">🗣️ Você disse: "${heardText}"</div>` : "";
        if (feed) {
            feed.innerHTML = `✨ Perfeito! (${gCard.r || ''})${meaningText} ${heardHtml}`;
            feed.style.color = '#22c55e';
            feed.style.opacity = '1';
        }
        setTimeout(nextGameCard, 1200);
    } else {
        if (typeof playBeep === 'function') playBeep('error');
        gStreak = 0;
        if (!isInfiniteLives) gLives--;
        if (card) card.classList.add('shake', 'glow-error');
        let heardHtml = (isVoice && heardText) ? `<div style="font-size:0.85rem; color:#b91c1c; font-weight:normal; margin-top:6px; text-transform:none;">🗣️ Microfone ouviu: "${heardText}"</div>` : "";
        if (feed) {
            feed.innerHTML = `❌ Era: ${gCard.k} (${gCard.r || ''})${meaningText} ${heardHtml}`;
            feed.style.color = '#ef4444';
            feed.style.opacity = '1';
        }
        const elLives = document.getElementById('g-lives');
        if (elLives) elLives.textContent = formatMinigameLives(gLives);

        if (!isInfiniteLives && gLives <= 0) {
            if (isEnglishMinigame()) {
                const enHs = parseInt(localStorage.getItem('en_highScore')) || 0;
                const enMc = parseInt(localStorage.getItem('en_maxCombo')) || 0;
                if (gScore > enHs) localStorage.setItem('en_highScore', gScore);
                if (gMaxStreak > enMc) localStorage.setItem('en_maxCombo', gMaxStreak);
            } else {
                if (gScore > globalHighScore) { globalHighScore = gScore; localStorage.setItem('ja_highScore', globalHighScore); }
                if (gMaxStreak > globalMaxCombo) { globalMaxCombo = gMaxStreak; localStorage.setItem('ja_maxCombo', globalMaxCombo); }
            }
            setTimeout(() => {
                showGameTab('over');
                const elFinScore = document.getElementById('g-final-score');
                const elFinCombo = document.getElementById('g-final-combo');
                if (elFinScore) elFinScore.textContent = gScore;
                if (elFinCombo) elFinCombo.textContent = '🔥 ' + gMaxStreak + 'x';
            }, 2000);
        } else {
            setTimeout(() => {
                if (card) card.classList.remove('shake', 'glow-error');
                const inp = document.getElementById('g-ans-input');
                if (inputMode === 'typing' && inp) inp.focus();
                if (inp) inp.value = '';
                gProc = false;
            }, 2000);
        }
    }
}

function checkTypingAnswer() {
    if (gProc) return;
    const input = document.getElementById('g-ans-input');
    let ans = input ? input.value.trim() : '';
    if (!ans) return;
    gProc = true;

    if (isEnglishMinigame()) {
        const normAns = normalizeStringMatch(ans);
        const normMainM = normalizeStringMatch(gCard.m);
        const variations = (gCard.a || []).map(normalizeStringMatch);
        const slashes = (gCard.m || '').split(/[\/,;]/).map(normalizeStringMatch);

        const allValid = [normMainM, ...variations, ...slashes].filter(Boolean);

        let isCorrect = allValid.some(v => v === normAns || (normAns.length >= 3 && (v.includes(normAns) || normAns.includes(v))));
        processGameResult(isCorrect);
    } else {
        const isCorrect = ans === gCard.k || ans.toLowerCase() === gCard.r.toLowerCase() || (typeof wanakana !== 'undefined' && wanakana.toRomaji(ans) === gCard.r.toLowerCase());
        processGameResult(isCorrect);
    }
}

function startListening() {
    if (gProc) return;
    if (!recognition) return alert("Seu navegador não suporta reconhecimento de voz.");
    const btn = document.getElementById('g-mic-btn');
    if (btn) {
        btn.classList.add('listening');
        btn.innerHTML = '🔴 Ouvindo... (Fale agora)';
    }

    if (isEnglishMinigame()) {
        recognition.lang = 'en-US';
    } else {
        recognition.lang = 'ja-JP';
    }

    try { recognition.start(); } catch (e) { }
}

function cleanJapaneseText(text) {
    if (!text) return "";
    return text.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[\u3000-\u303F\uFF00-\uFFEF.,!?;:。、\sっッー~"'\u200B\uFEFF]/g, "")
        .trim();
}

function normalizePhonetic(text) {
    if (!text) return "";

    let clean = cleanJapaneseText(text);

    const letterMap = typeof ALPHABET_LETTER_MAP !== 'undefined' ? ALPHABET_LETTER_MAP : {};
    if (letterMap[clean]) {
        let mapped = letterMap[clean];
        clean = Array.isArray(mapped) ? mapped[0] : mapped;
    }

    clean = clean.toLowerCase();

    if (/^v[aeiou]/i.test(clean)) {
        clean = 'b' + clean.slice(1);
    }

    clean = clean.replace(/([aeiou])\1+$/g, "$1");

    let romaji = (typeof wanakana !== 'undefined') ? wanakana.toRomaji(clean) : clean;
    romaji = romaji.toLowerCase();
    romaji = romaji.replace(/[^a-z0-9]/g, "").trim();

    romaji = romaji
        .replace(/ou/g, "o")
        .replace(/oo/g, "o")
        .replace(/ei/g, "e")
        .replace(/ee/g, "e")
        .replace(/uu/g, "u")
        .replace(/ii/g, "i")
        .replace(/aa/g, "a");

    romaji = romaji.replace(/([aeiou])\1+$/g, "$1");

    return romaji;
}

function levenshtein(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

function checkSpeechAnswer(transcripts) {
    if (gProc) return;
    gProc = true;
    let isCorrect = false;
    let heardText = transcripts[0] || "...";

    if (isEnglishMinigame()) {
        const normTargetEng = normalizeStringMatch(gCard.k);
        const normTargetPt = normalizeStringMatch(gCard.m);
        const variationsPt = (gCard.a || []).map(normalizeStringMatch);

        for (let t of transcripts) {
            const normHeard = normalizeStringMatch(t);
            console.log(`🎤 [EN Speech] Microfone ouviu: "${t}" -> Norm: "${normHeard}" | Target EN: "${normTargetEng}" | Target PT: "${normTargetPt}"`);

            if (
                normHeard === normTargetEng ||
                normHeard === normTargetPt ||
                variationsPt.includes(normHeard) ||
                (normHeard.length >= 3 && normTargetEng.includes(normHeard)) ||
                (normHeard.length >= 3 && normHeard.includes(normTargetEng))
            ) {
                isCorrect = true;
                heardText = t;
                break;
            }
        }
        processGameResult(isCorrect, heardText);
        return;
    }

    let rawExpectedKana = cleanJapaneseText(gCard.k);
    let expectedRomaji = normalizePhonetic(gCard.r || gCard.k);

    console.log(`[Speech Debug] Target: "${gCard.k}" (Romaji Esperado: "${expectedRomaji}") | Hypotheses:`, transcripts);

    const singleSylMap = typeof KANAI_SINGLE_SYLLABLE_MAP !== 'undefined' ? KANAI_SINGLE_SYLLABLE_MAP : {};
    const isSingleSyllable = expectedRomaji.length <= 4 && (singleSylMap[expectedRomaji] || expectedRomaji.length <= 3);

    for (let t of transcripts) {
        let rawClean = cleanJapaneseText(t);

        const letterMap = typeof ALPHABET_LETTER_MAP !== 'undefined' ? ALPHABET_LETTER_MAP : {};
        let alphabetFallbackRomajis = letterMap[rawClean] || [];
        if (typeof alphabetFallbackRomajis === 'string') alphabetFallbackRomajis = [alphabetFallbackRomajis];

        let romajiConvertido = normalizePhonetic(t);

        console.log(`🎤 Microfone ouviu: "${t}" -> Limpo: "${rawClean}" -> Romaji: "${romajiConvertido}" -> Esperado: "${expectedRomaji}"`);

        if (/^[aeiou]$/.test(expectedRomaji) && romajiConvertido === `h${expectedRomaji}`) {
            romajiConvertido = expectedRomaji;
        }

        if (
            romajiConvertido === expectedRomaji ||
            alphabetFallbackRomajis.includes(expectedRomaji)
        ) {
            isCorrect = true;
            heardText = t;
            break;
        }

        if (rawClean === rawExpectedKana || (gCard.a && gCard.a.includes(rawClean))) {
            isCorrect = true;
            heardText = t;
            break;
        }

        const homophoneMap = typeof KANJI_HOMOPHONE_MAP !== 'undefined' ? KANJI_HOMOPHONE_MAP : {};
        const homophoneList = homophoneMap[expectedRomaji] || [];
        if (
            homophoneList.includes(rawClean) ||
            homophoneList.includes(romajiConvertido)
        ) {
            isCorrect = true;
            heardText = t;
            break;
        }

        const dakuonFamList = typeof DAKUON_FAMILIES !== 'undefined' ? DAKUON_FAMILIES : [];
        let inSameDakuonFamily = dakuonFamList.some(family =>
            family.includes(expectedRomaji) && (family.includes(romajiConvertido) || alphabetFallbackRomajis.some(r => family.includes(r)))
        );
        if (inSameDakuonFamily) {
            isCorrect = true;
            heardText = t;
            break;
        }

        if (isSingleSyllable) {
            if (romajiConvertido.startsWith(expectedRomaji) || rawClean.startsWith(rawExpectedKana)) {
                isCorrect = true;
                heardText = t;
                break;
            }
            continue;
        }

        if (expectedRomaji === "n" || rawExpectedKana === "ん" || rawExpectedKana === "ン") {
            if (["m", "n", "nn", "ng", "um", "un", "hum", "uh", "en", "an", "on"].includes(romajiConvertido)) {
                isCorrect = true;
                heardText = t;
                break;
            }
        }

        let maxAllowedDist = expectedRomaji.length >= 8 ? 3 : (expectedRomaji.length <= 4 ? 1 : 2);
        let dist = levenshtein(romajiConvertido, expectedRomaji);
        if (
            dist <= maxAllowedDist ||
            romajiConvertido.includes(expectedRomaji) ||
            expectedRomaji.includes(romajiConvertido)
        ) {
            isCorrect = true;
            heardText = t;
            break;
        }
    }

    processGameResult(isCorrect, heardText);
}

function initializeGame() {
    console.log("[BOOT] initializeGame");
    document.documentElement.style.setProperty('--current-primary', 'var(--game-primary)');
    if (typeof initGameScreen === 'function') initGameScreen();
}


// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.isEnglishMinigame = isEnglishMinigame;
    window.normalizeStringMatch = normalizeStringMatch;
    window.formatMinigameLives = formatMinigameLives;
    window.initGameScreen = initGameScreen;
    window.showGameTab = showGameTab;
    window.exitGame = exitGame;
    window.startGame = startGame;
    window.nextGameCard = nextGameCard;
    window.processGameResult = processGameResult;
    window.checkTypingAnswer = checkTypingAnswer;
    window.startListening = startListening;
    window.cleanJapaneseText = cleanJapaneseText;
    window.normalizePhonetic = normalizePhonetic;
    window.levenshtein = levenshtein;
    window.checkSpeechAnswer = checkSpeechAnswer;
    window.initializeGame = initializeGame;
}
