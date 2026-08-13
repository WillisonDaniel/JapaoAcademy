// ======================================
// MÓDULO CORE - UTILS
// ======================================

function escapeHTML(str) {
    if (typeof str !== 'string') return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function renderizarRadicaisKanji(radicals) {
    if (!radicals || !Array.isArray(radicals) || radicals.length === 0) return '';

    const itensHTML = radicals.map(r => {
        const charSeguro = typeof escapeHTML === 'function' ? escapeHTML(r.char || '') : (r.char || '');
        const nomeSeguro = typeof escapeHTML === 'function' ? escapeHTML(r.name || '') : (r.name || '');
        return `
            <span class="radical-badge" title="${nomeSeguro}">
                <span class="kana-text radical-char">${charSeguro}</span>
                <span class="radical-name">${nomeSeguro}</span>
            </span>
        `;
    }).join('<span class="radical-plus">+</span>');

    return `
        <div class="kanji-radicals-box">
            <span class="radical-title">🧩 Radicais Formadores:</span>
            <div class="radicals-list">${itensHTML}</div>
        </div>
    `;
}

function normalizarTexto(txt) {
    if (!txt) return '';
    return String(txt)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\s\d]/gi, '')
        .trim();
}

function shuffleArray(arr) {
    if (!Array.isArray(arr)) return [];
    const cop = [...arr];
    for (let i = cop.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cop[i], cop[j]] = [cop[j], cop[i]];
    }
    return cop;
}

function renderQuizQuestion(questionObj, index) {
    const qText = questionObj.question || questionObj.q || questionObj.prompt || '';
    let html = `<div class="quiz-question">`;
    html += `<p><strong>Questão ${index + 1}:</strong> ${qText}</p>`;

    const correctOpt = Array.isArray(questionObj.options) ? questionObj.options.find(o => typeof o === 'object' && o !== null && o.isCorrect) : null;
    const correctOptLabel = correctOpt ? correctOpt.label : (Array.isArray(questionObj.options) && typeof questionObj.correctIndex === 'number' ? (typeof questionObj.options[questionObj.correctIndex] === 'object' ? questionObj.options[questionObj.correctIndex]?.label : questionObj.options[questionObj.correctIndex]) : '');
    const rawAns = questionObj.a || questionObj.answer || correctOptLabel || '';
    const safeAns = String(rawAns).replace(/'/g, "\\'");

    if (questionObj.type === "choice" || (questionObj.options && Array.isArray(questionObj.options) && questionObj.options.length > 0)) {
        const shuffledOpts = [...questionObj.options].sort(() => Math.random() - 0.5);
        shuffledOpts.forEach(option => {
            const optLabel = typeof option === 'object' && option !== null ? (option.label || option.text || '') : String(option);
            const safeOpt = optLabel.replace(/'/g, "\\'");
            html += `<button class="quiz-option-btn" onclick="checkAnswer(this, '${safeOpt}', '${safeAns}')">${optLabel}</button>`;
        });

    } else {
        html += `<div class="quiz-input-group">`;
        html += `<input type="text" id="quiz-input-${index}" class="quiz-input" aria-label="Resposta da questão ${index + 1}" placeholder="Digite em romaji ou português..." onkeydown="if(event.key==='Enter') checkTextAnswer(${index}, '${safeAns}')">`;
        html += `<button class="quiz-btn" onclick="checkTextAnswer(${index}, '${safeAns}')">Responder</button>`;
        html += `</div>`;
        html += `<span id="quiz-feedback-${index}" class="quiz-feedback-text" role="status" aria-live="polite"></span>`;
    }

    html += `</div>`;
    return html;
}

function checkTextAnswer(index, correct) {
    const input = document.getElementById(`quiz-input-${index}`);
    const feedback = document.getElementById(`quiz-feedback-${index}`);
    if (!input || !feedback) return;

    const val = input.value.trim().toLowerCase();
    if (!val) return;

    if (val === correct.toLowerCase()) {
        input.style.borderColor = '#22c55e';
        input.style.backgroundColor = '#f0fdf4';
        feedback.textContent = "✨ Correto!";
        feedback.className = "quiz-feedback-text correct";
        if (typeof playBeep === 'function') playBeep('success');
    } else {
        input.style.borderColor = '#ef4444';
        input.style.backgroundColor = '#fef2f2';
        feedback.textContent = `❌ Incorreto. A resposta certa era: ${correct}`;
        feedback.className = "quiz-feedback-text incorrect";
        if (typeof playBeep === 'function') playBeep('error');
    }
}

function checkAnswer(buttonElement, selected, correct) {
    const parentBlock = buttonElement.closest('.quiz-question');
    const allButtons = parentBlock.querySelectorAll('.quiz-option-btn');

    allButtons.forEach(btn => btn.disabled = true);

    const isCorrect = selected.trim().toLowerCase() === correct.trim().toLowerCase();

    if (isCorrect) {
        buttonElement.style.backgroundColor = '#22c55e';
        buttonElement.style.color = '#fff';
        buttonElement.style.borderColor = '#22c55e';
        if (typeof playBeep === 'function') playBeep('success');
    } else {
        buttonElement.style.backgroundColor = '#ef4444';
        buttonElement.style.color = '#fff';
        buttonElement.style.borderColor = '#ef4444';
        if (typeof playBeep === 'function') playBeep('error');

        allButtons.forEach(btn => {
            if (btn.textContent.trim().toLowerCase() === correct.trim().toLowerCase()) {
                btn.style.backgroundColor = '#22c55e';
                btn.style.color = '#fff';
                btn.style.borderColor = '#22c55e';
            }
        });
    }
}

function getKanjiReading(item) {
    if (!item) return '';
    if (item.kunyomi && item.kunyomi !== '-') {
        let clean = item.kunyomi.split('/')[0].split('(')[0].trim();
        return clean.toLowerCase();
    } else if (item.onyomi && item.onyomi !== '-') {
        let clean = item.onyomi.split('/')[0].split('(')[0].trim();
        return clean.toLowerCase();
    }
    return (item.meaning || '').toLowerCase();
}

function getTodosOsCursos() {
    const languageCode = typeof getCurrentLanguageCode === 'function' ? getCurrentLanguageCode() : 'ja-JP';
    const isSpanish = languageCode === 'es-ES';
    const isEnglish = languageCode === 'en-US';
    const isRussian = languageCode === 'ru-RU';
    const isItalian = languageCode === 'it-IT';

    if (isItalian) {
        return {
            A1: (typeof CURSO_ITALIANO_A1_DADOS !== 'undefined') ? CURSO_ITALIANO_A1_DADOS : (typeof window !== 'undefined' ? window.CURSO_ITALIANO_A1_DADOS : []),
            A2: (typeof CURSO_ITALIANO_A2_DADOS !== 'undefined') ? CURSO_ITALIANO_A2_DADOS : (typeof window !== 'undefined' ? window.CURSO_ITALIANO_A2_DADOS : []),
            B1: (typeof CURSO_ITALIANO_B1_DADOS !== 'undefined') ? CURSO_ITALIANO_B1_DADOS : (typeof window !== 'undefined' ? window.CURSO_ITALIANO_B1_DADOS : []),
            B2: (typeof CURSO_ITALIANO_B2_DADOS !== 'undefined') ? CURSO_ITALIANO_B2_DADOS : (typeof window !== 'undefined' ? window.CURSO_ITALIANO_B2_DADOS : [])
        };
    }

    if (isRussian) {
        return {
            A1: (typeof CURSO_RUSSO_A1_DADOS !== 'undefined') ? CURSO_RUSSO_A1_DADOS : (typeof window !== 'undefined' ? window.CURSO_RUSSO_A1_DADOS : []),
            A2: (typeof CURSO_RUSSO_A2_DADOS !== 'undefined') ? CURSO_RUSSO_A2_DADOS : (typeof window !== 'undefined' ? window.CURSO_RUSSO_A2_DADOS : []),
            B1: (typeof CURSO_RUSSO_B1_DADOS !== 'undefined') ? CURSO_RUSSO_B1_DADOS : (typeof window !== 'undefined' ? window.CURSO_RUSSO_B1_DADOS : []),
            B2: (typeof CURSO_RUSSO_B2_DADOS !== 'undefined') ? CURSO_RUSSO_B2_DADOS : (typeof window !== 'undefined' ? window.CURSO_RUSSO_B2_DADOS : [])
        };
    }
    if (isSpanish) {
        return {
            A1: (typeof CURSO_ESPANHOL_A1_DADOS !== 'undefined') ? CURSO_ESPANHOL_A1_DADOS : [],
            A2: (typeof CURSO_ESPANHOL_A2_DADOS !== 'undefined') ? CURSO_ESPANHOL_A2_DADOS : [],
            B1: (typeof CURSO_ESPANHOL_B1_DADOS !== 'undefined') ? CURSO_ESPANHOL_B1_DADOS : [],
            B2: (typeof CURSO_ESPANHOL_B2_DADOS !== 'undefined') ? CURSO_ESPANHOL_B2_DADOS : []
        };
    }
    if (isEnglish) {
        return {
            A1: (typeof CURSO_ENGLISH_A1_DADOS !== 'undefined') ? CURSO_ENGLISH_A1_DADOS : [],
            A2: (typeof CURSO_ENGLISH_A2_DADOS !== 'undefined') ? CURSO_ENGLISH_A2_DADOS : [],
            B1: (typeof CURSO_ENGLISH_B1_DADOS !== 'undefined') ? CURSO_ENGLISH_B1_DADOS : [],
            B2: (typeof CURSO_ENGLISH_B2_DADOS !== 'undefined') ? CURSO_ENGLISH_B2_DADOS : []
        };
    }
    return {
        A1: (typeof CURSO_A1_DADOS !== 'undefined') ? CURSO_A1_DADOS : [],
        A2: (typeof CURSO_A2_DADOS !== 'undefined') ? CURSO_A2_DADOS : [],
        B1: (typeof CURSO_B1_DADOS !== 'undefined') ? CURSO_B1_DADOS : [],
        B2: (typeof CURSO_B2_DADOS !== 'undefined') ? CURSO_B2_DADOS : []
    };
}

function obterModuloPorId(id) {
    const cursos = getTodosOsCursos();
    for (const lvl in cursos) {
        const mod = cursos[lvl].find(m => m.id === id);
        if (mod) return mod;
    }
    return null;
}

function getDadosCursoAtivo() {
    const mode = (typeof document !== 'undefined' && document.body) ? (document.body.getAttribute('data-mode') || (typeof courseMode !== 'undefined' ? courseMode : null)) : null;

    if (mode === 'hiragana') {
        return (typeof HIRA_COURSE_DATA !== 'undefined') ? HIRA_COURSE_DATA : ((typeof hiraganaData !== 'undefined') ? hiraganaData : []);
    } else if (mode === 'katakana') {
        return (typeof KATA_COURSE_DATA !== 'undefined') ? KATA_COURSE_DATA : ((typeof katakanaData !== 'undefined') ? katakanaData : []);
    } else if (mode === 'kanji' || mode === 'kanji_n5') {
        return (typeof kanjiN5Data !== 'undefined') ? kanjiN5Data : [];
    } else if (mode === 'kanji_n4') {
        return (typeof kanjiN4Data !== 'undefined') ? kanjiN4Data : [];
    } else if (mode === 'kanji_n3') {
        return (typeof kanjiN3Data !== 'undefined') ? kanjiN3Data : [];
    } else if (mode === 'kanji_n2') {
        return (typeof kanjiN2Data !== 'undefined') ? kanjiN2Data : [];
    } else if (mode === 'kanji_n1') {
        return (typeof kanjiN1Data !== 'undefined') ? kanjiN1Data : [];
    } else if (mode === 'phrasal_verbs' || mode === 'phrasal') {
        return (typeof PHRASAL_VERBS_DATA !== 'undefined') ? PHRASAL_VERBS_DATA : [];
    }

    const cursos = getTodosOsCursos();
    const lvl = (typeof AppState !== 'undefined' && AppState.course && AppState.course.level)
        ? AppState.course.level.toUpperCase()
        : ((typeof nivelAtivo !== 'undefined' && nivelAtivo) ? nivelAtivo.toUpperCase() : 'A1');
    return cursos[lvl] || cursos.A1 || [];
}

function fNome(texto) {
    if (!texto) return "";
    const nomeSeguro = typeof escapeHTML === 'function' ? escapeHTML(typeof nomeUsuario !== 'undefined' ? nomeUsuario : 'Estudante') : (typeof nomeUsuario !== 'undefined' ? nomeUsuario : 'Estudante');
    return texto.replace(/\[\s*(Seu )?Nome\s*\]/gi, `<strong style="color: #e63946; text-decoration: underline;">${nomeSeguro}</strong>`);
}

function formatarTextoJapones(item) {
    const opts = typeof getOpcoesLeitura === 'function' ? getOpcoesLeitura() : { kanji: true, kana: true, furigana: true, romaji: true };

    let rawText = "";
    let rawKana = "";
    let rawRomaji = "";

    if (typeof item === 'string') {
        rawText = item.trim();
    } else if (item && typeof item === 'object') {
        rawText = (item.kanji || item.word || item.english || item.spanish || item.Spanish || item.texto || item.japanese || item.text || "").trim();
        rawKana = (item.kana || item.reading || "").trim();
        rawRomaji = (item.romaji || item.ipa || item.pronunciation || "").trim();
    }

    if (!rawText) {
        return { htmlJapones: "", htmlRomaji: "", htmlCompleto: "", temKanji: false };
    }

    if (rawText.includes('<ruby>')) {
        let htmlJap = rawText;
        if (!opts.furigana) {
            htmlJap = htmlJap.replace(/<rt>.*?<\/rt>/gi, '');
        }
        if (!opts.kanji && opts.kana) {
            htmlJap = rawText.replace(/<ruby>(.*?)<rt>(.*?)<\/rt><\/ruby>/gi, '$2');
        } else if (!opts.kanji && !opts.kana) {
            htmlJap = '';
        }

        let htmlRom = (opts.romaji && rawRomaji) ? `<span class="japanese-romaji-text">${rawRomaji}</span>` : "";
        let htmlComp = htmlJap;
        if (htmlRom) htmlComp += ` <small class="japanese-romaji-text">(${rawRomaji})</small>`;

        return {
            htmlJapones: htmlJap,
            htmlRomaji: htmlRom,
            htmlCompleto: htmlComp,
            temKanji: true
        };
    }

    let kanjiPart = rawText;
    let kanaPart = rawKana;

    const matchParentheses = rawText.match(/^([^\(（]+)[\(（]([^\)）]+)[\)）](.*)$/);
    if (matchParentheses) {
        const part1 = matchParentheses[1].trim();
        const part2 = matchParentheses[2].trim();

        const p1HasKanji = /[\u4e00-\u9faf]/.test(part1);
        const p2HasKanji = /[\u4e00-\u9faf]/.test(part2);
        const p1HasJapanese = /[\u3040-\u30ff]/.test(part1);
        const p2HasJapanese = /[\u3040-\u30ff]/.test(part2);

        if (p1HasKanji && p2HasJapanese && !p2HasKanji) {
            kanjiPart = part1;
            kanaPart = part2;
        } else if (!p1HasKanji && p1HasJapanese && p2HasKanji) {
            kanaPart = part1;
            kanjiPart = part2;
        } else if ((p1HasJapanese || p1HasKanji) && !p2HasJapanese && !p2HasKanji) {
            kanjiPart = part1;
            if (!rawRomaji) rawRomaji = part2;
        }
    }

    const temKanji = /[\u4e00-\u9faf]/.test(kanjiPart);
    let htmlJapones = "";

    if (!temKanji) {
        if (opts.kana) {
            htmlJapones = `<span class="japanese-kana-text kana-text">${kanjiPart}</span>`;
        } else {
            htmlJapones = "";
        }
    } else {
        if (opts.kanji && opts.furigana) {
            if (kanaPart) {
                htmlJapones = `<ruby class="japanese-ruby-text">${kanjiPart}<rt>${kanaPart}</rt></ruby>`;
            } else {
                htmlJapones = `<span class="japanese-kanji-text">${kanjiPart}</span>`;
            }
        } else if (opts.kanji && !opts.furigana) {
            htmlJapones = `<span class="japanese-kanji-text">${kanjiPart}</span>`;
        } else if (!opts.kanji && opts.kana) {
            htmlJapones = `<span class="japanese-kana-text kana-text">${kanaPart || kanjiPart}</span>`;
        } else {
            htmlJapones = "";
        }
    }

    let htmlRomaji = "";
    if (opts.romaji && rawRomaji) {
        htmlRomaji = `<span class="japanese-romaji-text">${rawRomaji}</span>`;
    }

    let htmlCompleto = "";
    if (htmlJapones && htmlRomaji) {
        htmlCompleto = `${htmlJapones} <small class="japanese-romaji-text">(${rawRomaji})</small>`;
    } else if (htmlJapones) {
        htmlCompleto = htmlJapones;
    } else if (htmlRomaji) {
        htmlCompleto = htmlRomaji;
    }

    return {
        htmlJapones,
        htmlRomaji,
        htmlCompleto,
        temKanji,
        kanjiPart,
        kanaPart,
        rawRomaji
    };
}

const processarExibicaoJapones = formatarTextoJapones;

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.escapeHTML = escapeHTML;
    window.renderizarRadicaisKanji = renderizarRadicaisKanji;
    window.normalizarTexto = normalizarTexto;
    window.shuffleArray = shuffleArray;
    window.renderQuizQuestion = renderQuizQuestion;
    window.checkTextAnswer = checkTextAnswer;
    window.checkAnswer = checkAnswer;
    window.getKanjiReading = getKanjiReading;
    window.getTodosOsCursos = getTodosOsCursos;
    window.obterModuloPorId = obterModuloPorId;
    window.getDadosCursoAtivo = getDadosCursoAtivo;
    window.fNome = fNome;
    window.formatarTextoJapones = formatarTextoJapones;
    window.processarExibicaoJapones = processarExibicaoJapones;
}
