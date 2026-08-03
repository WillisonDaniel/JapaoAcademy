// ======================================
// MÓDULO PRONÚNCIA - QUIZ INTERATIVO
// ======================================

let pronunciaQuizState = {
    mode: 'select',
    level: 'all',
    questions: [],
    currentIndex: 0,
    score: 0,
    answered: false
};

function obterQuestoesPronuncia(levelFilter = 'all') {
    const dataBase = typeof PRONUNCIATION_DATA !== 'undefined' ? PRONUNCIATION_DATA : [];
    let allQs = [];

    dataBase.forEach(secData => {
        if (levelFilter !== 'all' && secData.level !== levelFilter) return;

        (secData.topics || []).forEach(t => {
            if (t.quiz && Array.isArray(t.quiz)) {
                t.quiz.forEach(q => {
                    const shuffledOptions = q.options && Array.isArray(q.options)
                        ? [...q.options].sort(() => Math.random() - 0.5)
                        : (q.options || []);
                    allQs.push({
                        ...q,
                        options: shuffledOptions,
                        level: secData.level,
                        levelBadge: secData.levelBadge,
                        topicTitle: t.title
                    });
                });
            }
        });
    });

    return allQs;
}

function obterHighScoresPronuncia() {
    try {
        const raw = localStorage.getItem('pronuncia_quiz_highscores');
        return raw ? JSON.parse(raw) : {};
    } catch (e) {
        return {};
    }
}

function salvarHighScorePronuncia(level, pct) {
    try {
        const current = obterHighScoresPronuncia();
        const prev = current[level] || 0;
        if (pct > prev) {
            current[level] = pct;
            localStorage.setItem('pronuncia_quiz_highscores', JSON.stringify(current));
        }
    } catch (e) {
        console.warn('Erro ao salvar high score no localStorage', e);
    }
}

function abrirModoQuizPronuncia(mode = 'select', level = 'A1', btn = null) {
    if (btn && btn.parentElement) {
        btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }

    const container = document.getElementById('pronunciaDisplay');
    if (!container) return;

    if (mode === 'select') {
        renderQuizSelectionHub(container);
        return;
    }

    if (mode === 'start') {
        let qs = obterQuestoesPronuncia(level);
        if (level === 'all') {
            qs = qs.sort(() => Math.random() - 0.5).slice(0, 10);
        }

        if (!qs || qs.length === 0) {
            container.innerHTML = `<div style="text-align:center; padding:40px; color:var(--text-muted);">Nenhuma questão encontrada para este nível no momento.</div>`;
            return;
        }

        pronunciaQuizState = {
            mode: 'quiz',
            level: level,
            questions: qs,
            currentIndex: 0,
            score: 0,
            answered: false
        };

        renderPronunciaQuizQuestion();
    }
}

function renderQuizSelectionHub(container) {
    const highScores = obterHighScoresPronuncia();
    const levels = [
        { id: 'A1', name: 'Desafio Nível A1', badge: '🔵 Level A1', desc: 'Sons Vocálicos, H aspirado/mudo, Números e Consoantes Finais.' },
        { id: 'A2', name: 'Desafio Nível A2', badge: '🟢 Level A2', desc: 'Sufixo -ED do Passado, Plurais -S, Som TH e Vogal Schwa.' },
        { id: 'B1', name: 'Desafio Nível B1', badge: '🟡 Level B1', desc: 'Connected Speech I, Flap T, Word Stress e Homófonos.' },
        { id: 'B2', name: 'Desafio Nível B2', badge: '🔴 Level B2', desc: 'Assimilação, Elisão, Entonação, Diftongos e Marcas Globais.' }
    ];

    let cardsHtml = levels.map(lvl => {
        const qs = obterQuestoesPronuncia(lvl.id);
        const hs = highScores[lvl.id] !== undefined ? `${highScores[lvl.id]}%` : 'Sem registro';
        const isPassed = (highScores[lvl.id] || 0) >= 80;
        const checkBadge = isPassed ? `<span style="background:rgba(34, 197, 94, 0.15); color:#22c55e; border:1px solid #22c55e; padding:3px 8px; border-radius:8px; font-weight:bold; font-size:0.85rem;">✅ Domínio Aprovado (${hs})</span>` : (highScores[lvl.id] ? `<span style="background:rgba(234, 179, 8, 0.15); color:#d97706; border:1px solid #d97706; padding:3px 8px; border-radius:8px; font-weight:bold; font-size:0.85rem;">Recorde: ${hs}</span>` : '');

        return `
            <div class="quiz-select-card" onclick="abrirModoQuizPronuncia('start', '${lvl.id}')">
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                        <span class="badge" style="background:rgba(168, 85, 247, 0.15); color:#a855f7; border:1px solid #a855f7; font-weight:bold; padding:4px 10px; border-radius:10px;">${lvl.badge}</span>
                        ${checkBadge}
                    </div>
                    <h3 style="font-size:1.3rem; margin:0 0 8px 0; color:var(--text-main); font-family:'Fredoka', sans-serif;">${lvl.name}</h3>
                    <p style="color:var(--text-muted); font-size:0.92rem; margin:0 0 14px 0;">${lvl.desc}</p>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px dashed var(--border-color); padding-top:12px; margin-top:12px;">
                    <small style="color:var(--text-muted); font-weight:bold;">📝 ${qs.length} questões</small>
                    <span style="color:#a855f7; font-weight:bold; font-size:0.95rem;">Iniciar Desafio ➔</span>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div style="background:var(--card-bg); border:2px solid var(--border-color); border-radius:16px; padding:24px; margin-bottom:28px; box-shadow:var(--shadow);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px;">
                <div>
                    <h2 style="font-size:1.6rem; color:#a855f7; margin:0 0 6px 0; font-family:'Fredoka', sans-serif;">🧠 Modo Quiz / Avaliação de Pronúncia</h2>
                    <p style="color:var(--text-muted); margin:0; font-size:0.98rem;">Escolha um nível específico para testar sua evolução ou faça o simulado rápido misturado.</p>
                </div>
                <button onclick="abrirModoQuizPronuncia('start', 'all')" style="background:linear-gradient(135deg, #a855f7, #7c3aed); color:#fff; border:none; padding:12px 20px; border-radius:12px; font-weight:bold; font-size:1rem; cursor:pointer; box-shadow:0 4px 12px rgba(168, 85, 247, 0.3);">
                    ⚡ Quiz Rápido Geral (10 Questões Mistas)
                </button>
            </div>

            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:16px; margin-top:20px;">
                ${cardsHtml}
            </div>
        </div>
    `;
}

function renderPronunciaQuizQuestion() {
    const container = document.getElementById('pronunciaDisplay');
    if (!container) return;

    const { questions, currentIndex, answered } = pronunciaQuizState;
    const currentQ = questions[currentIndex];
    if (!currentQ) {
        finalizarQuizPronuncia();
        return;
    }

    const total = questions.length;
    const pctProgress = Math.round(((currentIndex + 1) / total) * 100);

    const optionsHtml = currentQ.options.map((opt, optIdx) => {
        return `
            <button id="quiz-opt-${optIdx}" class="quiz-opt-btn" onclick="responderQuizPronuncia('${opt.replace(/'/g, "\\'")}', this)" ${answered ? 'disabled' : ''}>
                <span>${opt}</span>
                <span class="opt-icon" style="font-weight:bold;"></span>
            </button>
        `;
    }).join('');

    container.innerHTML = `
        <div style="background:var(--card-bg); border:2px solid var(--border-color); border-radius:16px; padding:24px; margin-bottom:28px; box-shadow:var(--shadow); max-width:800px; margin-left:auto; margin-right:auto;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:10px;">
                <span class="badge" style="background:rgba(168, 85, 247, 0.15); color:#a855f7; border:1px solid #a855f7; font-weight:bold; padding:4px 12px; border-radius:10px;">
                    ${currentQ.levelBadge || '🧠 Quiz de Pronúncia'}
                </span>
                <span style="font-weight:bold; color:var(--text-muted); font-size:0.95rem;">
                    Pergunta ${currentIndex + 1} de ${total}
                </span>
            </div>

            <div style="width:100%; background:var(--bg-color); height:8px; border-radius:10px; overflow:hidden; margin-bottom:20px; border:1px solid var(--border-color);">
                <div style="width:${pctProgress}%; background:linear-gradient(90deg, #028090, #a855f7); height:100%; transition:width 0.3s ease;"></div>
            </div>

            <small style="color:#028090; font-weight:bold; display:block; margin-bottom:6px;">📌 Tópico: ${currentQ.topicTitle || 'Fonética'}</small>
            <h3 style="font-size:1.35rem; color:var(--text-main); margin:0 0 20px 0; font-family:'Fredoka', sans-serif; line-height:1.4;">
                ${currentQ.q}
            </h3>

            <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:20px;">
                ${optionsHtml}
            </div>

            <div id="quiz-explanation-panel" class="quiz-explanation-box" style="display:none; background:var(--bg-color); border:1px solid var(--border-color); border-radius:12px; padding:16px; margin-bottom:20px;">
                <strong id="quiz-feedback-title" style="font-size:1rem; display:block; margin-bottom:6px;"></strong>
                <p style="margin:0; color:var(--text-main); font-size:0.95rem; line-height:1.5;">💡 <strong>Explicação:</strong> ${currentQ.explanation}</p>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-color); padding-top:16px;">
                <button onclick="abrirModoQuizPronuncia('select')" style="background:transparent; color:var(--text-muted); border:1px solid var(--border-color); padding:8px 16px; border-radius:10px; font-weight:bold; cursor:pointer;">
                    ⬅ Cancelar Quiz
                </button>
                <button id="btn-quiz-next" onclick="proximaPerguntaQuizPronuncia()" style="display:none; background:#a855f7; color:#fff; border:none; padding:10px 22px; border-radius:10px; font-weight:bold; font-size:1rem; cursor:pointer; box-shadow:0 4px 12px rgba(168, 85, 247, 0.3);">
                    ${currentIndex + 1 === total ? 'Ver Resultado Final 🏁' : 'Próxima Pergunta ➔'}
                </button>
            </div>
        </div>
    `;
}

function responderQuizPronuncia(selectedOpt, btnEl) {
    if (pronunciaQuizState.answered) return;

    pronunciaQuizState.answered = true;
    const { questions, currentIndex } = pronunciaQuizState;
    const currentQ = questions[currentIndex];
    const isCorrect = selectedOpt === currentQ.a;

    const optButtons = document.querySelectorAll('.quiz-opt-btn');
    optButtons.forEach(b => {
        b.disabled = true;
        const optText = b.querySelector('span').innerText.trim();
        if (optText === currentQ.a) {
            b.classList.add('correct');
            b.querySelector('.opt-icon').innerHTML = '🟢';
        }
    });

    if (isCorrect) {
        pronunciaQuizState.score++;
        btnEl.classList.add('correct');
        if (typeof playBeep === 'function') playBeep('success');
        if (typeof adicionarXP === 'function') adicionarXP(10, 'Acerto no Quiz de Pronúncia');
    } else {
        btnEl.classList.add('wrong');
        btnEl.querySelector('.opt-icon').innerHTML = '🔴';
        if (typeof playBeep === 'function') playBeep('error');
    }

    const expPanel = document.getElementById('quiz-explanation-panel');
    const fbTitle = document.getElementById('quiz-feedback-title');
    const nextBtn = document.getElementById('btn-quiz-next');

    if (expPanel && fbTitle) {
        expPanel.style.display = 'block';
        if (isCorrect) {
            fbTitle.style.color = '#22c55e';
            fbTitle.innerHTML = '✨ Resposta Correta!';
        } else {
            fbTitle.style.color = '#ef4444';
            fbTitle.innerHTML = '❌ Resposta Incorreta.';
        }
    }

    if (nextBtn) {
        nextBtn.style.display = 'block';
    }
}

function proximaPerguntaQuizPronuncia() {
    pronunciaQuizState.currentIndex++;
    pronunciaQuizState.answered = false;

    if (pronunciaQuizState.currentIndex >= pronunciaQuizState.questions.length) {
        finalizarQuizPronuncia();
    } else {
        renderPronunciaQuizQuestion();
    }
}

function finalizarQuizPronuncia() {
    const container = document.getElementById('pronunciaDisplay');
    if (!container) return;

    const { score, questions, level } = pronunciaQuizState;
    const total = questions.length;
    const pct = Math.round((score / total) * 100);

    salvarHighScorePronuncia(level, pct);

    let trophy = '🏆';
    let msg = 'Excelente! Domínio nativo da regra!';
    let color = '#22c55e';

    if (pct < 70) {
        trophy = '📚';
        msg = 'Vale a pena revisar os módulos deste nível.';
        color = '#ef4444';
    } else if (pct < 90) {
        trophy = '👍';
        msg = 'Muito bom! Poucos detalhes a ajustar.';
        color = '#f59e0b';
    }

    container.innerHTML = `
        <div style="background:var(--card-bg); border:2px solid var(--border-color); border-radius:16px; padding:32px 24px; text-align:center; max-width:650px; margin:0 auto; box-shadow:var(--shadow);">
            <div style="font-size:3.5rem; margin-bottom:12px;">${trophy}</div>
            <h2 style="font-size:1.8rem; color:${color}; margin:0 0 8px 0; font-family:'Fredoka', sans-serif;">${msg}</h2>
            <p style="color:var(--text-muted); font-size:1rem; margin-bottom:24px;">Você concluiu o teste de pronúncia com sucesso.</p>

            <div style="background:var(--bg-color); border:1px solid var(--border-color); border-radius:14px; padding:20px; margin-bottom:24px; display:flex; justify-content:space-around; align-items:center;">
                <div>
                    <span style="font-size:0.9rem; color:var(--text-muted); display:block;">Acertos</span>
                    <strong style="font-size:1.8rem; color:var(--text-main);">${score} / ${total}</strong>
                </div>
                <div style="border-left:1px solid var(--border-color); height:40px;"></div>
                <div>
                    <span style="font-size:0.9rem; color:var(--text-muted); display:block;">Aproveitamento</span>
                    <strong style="font-size:1.8rem; color:${color};">${pct}%</strong>
                </div>
            </div>

            <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
                <button onclick="abrirModoQuizPronuncia('start', '${level}')" style="background:#a855f7; color:#fff; border:none; padding:12px 20px; border-radius:10px; font-weight:bold; cursor:pointer; font-size:1rem;">
                    🔄 Refazer Quiz
                </button>
                <button onclick="abrirModoQuizPronuncia('select')" style="background:var(--bg-color); color:var(--text-main); border:1px solid var(--border-color); padding:12px 20px; border-radius:10px; font-weight:bold; cursor:pointer; font-size:1rem;">
                    ⚡ Outro Nível
                </button>
                <button onclick="filtrarNivelPronuncia('A1', document.querySelector('.pv-level-selector .pv-level-btn'))" style="background:transparent; color:var(--text-muted); border:1px solid var(--border-color); padding:12px 20px; border-radius:10px; font-weight:bold; cursor:pointer; font-size:1rem;">
                    ⬅ Voltar ao Guia
                </button>
            </div>
        </div>
    `;
}

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.pronunciaQuizState = pronunciaQuizState;
    window.obterQuestoesPronuncia = obterQuestoesPronuncia;
    window.obterHighScoresPronuncia = obterHighScoresPronuncia;
    window.salvarHighScorePronuncia = salvarHighScorePronuncia;
    window.abrirModoQuizPronuncia = abrirModoQuizPronuncia;
    window.renderQuizSelectionHub = renderQuizSelectionHub;
    window.renderPronunciaQuizQuestion = renderPronunciaQuizQuestion;
    window.responderQuizPronuncia = responderQuizPronuncia;
    window.proximaPerguntaQuizPronuncia = proximaPerguntaQuizPronuncia;
    window.finalizarQuizPronuncia = finalizarQuizPronuncia;
}
