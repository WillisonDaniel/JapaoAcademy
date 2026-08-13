// ======================================
// MÓDULO COURSE - QUIZ VERIFICATION
// ======================================

function checkCourseQuiz(idx, correct, type) {
    const input = document.getElementById(`cq_${idx}`);
    const feed = document.getElementById(`cf_${idx}`);
    if (!input || !feed) return;
    let ans = input.value.trim().toLowerCase();
    if (!ans) return;
    const mode = document.body.getAttribute('data-mode') || (typeof courseMode !== 'undefined' ? courseMode : null);
    if (type === 'kana') { ans = ans.replace(/n$/i, mode === 'hiragana' ? 'ん' : 'ン'); input.value = ans; }
    if (ans === correct.toLowerCase()) {
        feed.textContent = "✨ Correto!";
        feed.className = "feedback correct";
        if (typeof playBeep === 'function') playBeep('success');
    } else {
        feed.textContent = `❌ Era: ${correct}`;
        feed.className = "feedback incorrect";
        if (typeof playBeep === 'function') playBeep('error');
    }
}
function renderQuizQuestion(q, i, mode = 'kanji') {
    const qText = q.question || q.q || q.prompt || '';
    const correctOpt = Array.isArray(q.options) ? q.options.find(o => typeof o === 'object' && o !== null && o.isCorrect) : null;
    const correctOptLabel = correctOpt ? correctOpt.label : (Array.isArray(q.options) && typeof q.correctIndex === 'number' ? (typeof q.options[q.correctIndex] === 'object' ? q.options[q.correctIndex]?.label : q.options[q.correctIndex]) : '');
    const rawAns = q.a || q.answer || correctOptLabel || '';
    const safeAns = String(rawAns).replace(/'/g, "\\'");

    if (q.type === 'choice' || (q.options && Array.isArray(q.options) && q.options.length > 0)) {
        const optionsHTML = q.options.map(opt => {
            const optLabel = typeof opt === 'object' && opt !== null ? (opt.label || opt.text || '') : String(opt);
            const safeOptLabel = optLabel.replace(/'/g, "\\'");
            return `
                <button class="quiz-option-btn" onclick="verificarQuizEscolha(${i}, '${safeAns}', '${safeOptLabel}', this)" style="display:block; margin:6px 0; width:100%; text-align:left; padding:12px 16px; border-radius:10px; border:1.5px solid var(--border-color); background:var(--card-bg); color:var(--text-main); font-weight:600; font-size:0.95rem; cursor:pointer; transition:all 0.2s ease;">
                    🔘 ${optLabel}
                </button>
            `;
        }).join('');

        return `
            <div class="question-block" style="background:var(--card-bg); border:1.5px solid var(--border-color); border-radius:12px; padding:18px; margin-bottom:16px; box-shadow:var(--shadow);">
                <div class="question-text" style="font-weight:700; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
                    <span style="font-size:1.05rem; color:var(--text-main);">${i + 1}. ${qText}</span>
                    <span class="badge" style="background:rgba(168, 85, 247, 0.15); color:#a855f7; border:1px solid #a855f7; padding:4px 10px; border-radius:12px; font-size:0.8rem; font-weight:bold;">🔘 Múltipla Escolha</span>
                </div>
                <div class="quiz-options-group">${optionsHTML}</div>
                <div id="cf_${i}" class="feedback" role="status" aria-live="polite" style="margin-top:10px; font-size:0.95rem; font-weight:bold;"></div>
            </div>
        `;
    } else {
        return `
            <div class="question-block" style="background:var(--card-bg); border:1.5px solid var(--border-color); border-radius:12px; padding:18px; margin-bottom:16px; box-shadow:var(--shadow);">
                <div class="question-text" style="font-weight:700; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
                    <span style="font-size:1.05rem; color:var(--text-main);">${i + 1}. ${qText}</span>
                    <span class="badge" style="background:rgba(14, 165, 233, 0.15); color:#0ea5e9; border:1px solid #0ea5e9; padding:4px 10px; border-radius:12px; font-size:0.8rem; font-weight:bold;">⌨️ Digitação</span>
                </div>
                <div style="display:flex; gap:10px; flex-wrap:wrap;">
                    <input type="text" id="cq_${i}" class="quiz-input" aria-label="Resposta da questão ${i + 1}" ${q.type === 'kana' ? 'oninput="courseConvert(this)"' : ''} onkeydown="if(event.key==='Enter') checkCourseQuiz(${i}, '${safeAns}', '${q.type}')" placeholder="Sua resposta em hiragana, romaji ou português..." style="flex:1; min-width:200px; padding:12px; border-radius:10px; border:1.5px solid var(--border-color); background:var(--bg-color); color:var(--text-main); font-weight:600; outline:none; font-size:0.95rem;">
                    <button class="quiz-btn" onclick="checkCourseQuiz(${i}, '${safeAns}', '${q.type}')" style="padding:12px 22px; background:var(--current-primary); color:white; border:none; border-radius:10px; font-weight:bold; cursor:pointer; font-size:0.95rem;">Verificar</button>
                </div>
                <div id="cf_${i}" class="feedback" role="status" aria-live="polite" style="margin-top:10px; font-size:0.95rem; font-weight:bold;"></div>
            </div>
        `;
    }
}

function verificarQuizEscolha(idx, respostaCorreta, respostaSelecionada, btnEl) {
    const feed = document.getElementById(`cf_${idx}`);
    if (btnEl && btnEl.parentElement) {
        btnEl.parentElement.querySelectorAll('button').forEach(b => {
            b.style.opacity = '0.5';
            b.style.borderColor = 'var(--border-color)';
            b.style.backgroundColor = 'var(--card-bg)';
        });
        btnEl.style.opacity = '1';
    }

    const isCorrect = (respostaSelecionada.trim().toLowerCase() === respostaCorreta.trim().toLowerCase());
    if (isCorrect) {
        if (btnEl) {
            btnEl.style.borderColor = '#22c55e';
            btnEl.style.backgroundColor = 'rgba(34, 197, 94, 0.15)';
        }
        if (feed) feed.innerHTML = '<span style="color: #22c55e;">✨ Resposta Correta! Parabéns! +10 XP</span>';
        if (typeof playBeep === 'function') playBeep('success');
        if (typeof adicionarXP === 'function') adicionarXP(10, 'Exercício de Múltipla Escolha');
    } else {
        if (btnEl) {
            btnEl.style.borderColor = '#ef4444';
            btnEl.style.backgroundColor = 'rgba(239, 68, 68, 0.15)';
        }
        if (feed) feed.innerHTML = `<span style="color: #ef4444;">❌ Resposta incorreta. Correto: <strong>${respostaCorreta}</strong></span>`;
        if (typeof playBeep === 'function') playBeep('error');
    }
}

let sbStateMap = {};
function inicializarSentenceBuilderState(exId, chunks) {
    if (!sbStateMap[exId]) {
        const shuffled = [...chunks].sort(() => Math.random() - 0.5);
        sbStateMap[exId] = {
            originalChunks: [...chunks],
            shuffledChunks: shuffled,
            selectedTarget: []
        };
    }
}

function renderizarBlocosSentenceBuilder(exId) {
    const state = sbStateMap[exId];
    if (!state) return;
    const targetZone = document.getElementById(`sb-target-${exId}`);
    const sourceZone = document.getElementById(`sb-source-${exId}`);
    if (targetZone) {
        if (state.selectedTarget.length === 0) {
            targetZone.innerHTML = `<span class="sb-placeholder" style="color: var(--text-muted); font-size: 0.9rem; font-style: italic;">Clique nos blocos abaixo para construir a frase...</span>`;
        } else {
            targetZone.innerHTML = state.selectedTarget.map((chunk, idx) => `
                <button class="sb-chip target-chip" onclick="removerBlocoSentenceBuilder('${exId}', ${idx})">${chunk}</button>
            `).join('');
        }
    }
    if (sourceZone) {
        sourceZone.innerHTML = state.shuffledChunks.map((chunk, idx) => `
            <button class="sb-chip source-chip" onclick="adicionarBlocoSentenceBuilder('${exId}', ${idx})">${chunk}</button>
        `).join('');
    }
}

function adicionarBlocoSentenceBuilder(exId, index) {
    const state = sbStateMap[exId];
    if (!state || index < 0 || index >= state.shuffledChunks.length) return;
    const item = state.shuffledChunks.splice(index, 1)[0];
    state.selectedTarget.push(item);
    renderizarBlocosSentenceBuilder(exId);
}

function removerBlocoSentenceBuilder(exId, index) {
    const state = sbStateMap[exId];
    if (!state || index < 0 || index >= state.selectedTarget.length) return;
    const item = state.selectedTarget.splice(index, 1)[0];
    state.shuffledChunks.push(item);
    renderizarBlocosSentenceBuilder(exId);
}

function resetarSentenceBuilder(exId) {
    const state = sbStateMap[exId];
    if (!state) return;
    state.shuffledChunks = [...state.originalChunks].sort(() => Math.random() - 0.5);
    state.selectedTarget = [];
    renderizarBlocosSentenceBuilder(exId);
    const fb = document.getElementById(`fb-sb-${exId}`);
    if (fb) fb.innerHTML = '';
    const box = document.getElementById(`box-sb-${exId}`);
    if (box) {
        box.style.borderColor = 'var(--border-color)';
        box.style.boxShadow = 'var(--shadow)';
    }
}

function verificarSentenceBuilder(exId) {
    const state = sbStateMap[exId];
    const fb = document.getElementById(`fb-sb-${exId}`);
    const box = document.getElementById(`box-sb-${exId}`);
    if (!state || !fb) return;
    const fraseMontada = state.selectedTarget.join(' ').replace(/\s+/g, ' ').trim().toLowerCase();
    const fraseCorreta = state.originalChunks.join(' ').replace(/\s+/g, ' ').trim().toLowerCase();
    const fraseMontadaNoSpace = state.selectedTarget.join('').replace(/\s+/g, '').toLowerCase();
    const fraseCorretaNoSpace = state.originalChunks.join('').replace(/\s+/g, '').toLowerCase();

    if ((fraseMontada === fraseCorreta || fraseMontadaNoSpace === fraseCorretaNoSpace) && state.selectedTarget.length === state.originalChunks.length) {
        if (typeof playBeep === 'function') playBeep('success');
        if (typeof dispararConfeti === 'function') dispararConfeti({ particleCount: 50, spread: 60 });
        if (typeof adicionarXP === 'function') adicionarXP(15, 'Construtor de Frases');
        fb.innerHTML = `<span style="color: #22c55e;">✨ Perfeito! Frase montada corretamente: <strong>${fraseCorreta}</strong> (+15 XP)</span>`;
        if (box) {
            box.style.borderColor = '#22c55e';
            box.style.boxShadow = '0 0 15px rgba(34, 197, 94, 0.3)';
        }
    } else {
        if (typeof playBeep === 'function') playBeep('error');
        fb.innerHTML = `<span style="color: #ef4444;">❌ Ordem incorreta. Clique nos blocos para ajustar ou em "Limpar"!</span>`;
        if (box) {
            box.classList.add('shake');
            setTimeout(() => box.classList.remove('shake'), 600);
        }
        if (typeof registrarErroSRS === 'function') registrarErroSRS(exId);
    }
}

let simuladoB2Submetido = false;
let respostasSimuladoB2 = {};
function selecionarOpcaoSimuladoB2(qIndex, optIndex) {
    respostasSimuladoB2[qIndex] = optIndex;
    const qBox = document.getElementById(`box-q-b2-${qIndex}`);
    if (qBox) {
        const btns = qBox.querySelectorAll('.btn-simulado-opt');
        btns.forEach((b, i) => {
            if (i === optIndex) {
                b.style.border = '2px solid #d97706';
                b.style.backgroundColor = 'rgba(217, 119, 6, 0.15)';
                b.style.color = '#d97706';
            } else {
                b.style.border = '1px solid var(--border-color)';
                b.style.backgroundColor = 'var(--bg-color)';
                b.style.color = 'var(--text-main)';
            }
        });
    }
}

function renderizarSimuladoB2(container, rawMod) {
    let quizHTML = "";
    const module = typeof normalizeModule === 'function' ? normalizeModule(rawMod) : rawMod;
    const quizList = module.quiz || [];
    quizList.forEach((q, idx) => {
        let opts = (q.options || []).map((opt, oIdx) => {
            const optLabel = typeof opt === 'object' && opt !== null ? (opt.label || opt.text || '') : String(opt);
            return `
            <button class="btn-simulado-opt" onclick="selecionarOpcaoSimuladoB2(${idx}, ${oIdx})" style="display:block; margin: 8px 0; width: 100%; text-align: left; padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-color); color: var(--text-main); font-weight: 600; cursor: pointer; transition: 0.2s;">
                ${oIdx + 1}) ${(typeof fNome === 'function' ? fNome(optLabel) : optLabel)}
            </button>
        `;
        }).join('');
        quizHTML += `
            <div id="box-q-b2-${idx}" style="background: var(--card-bg); border: 2px solid var(--border-color); border-radius: 12px; padding: 18px; margin-bottom: 20px; text-align: left; box-shadow: var(--shadow);">
                <span style="font-size: 0.8rem; color: #d97706; font-weight: bold; text-transform: uppercase;">Questão ${idx + 1} de 30</span>
                <p style="margin: 8px 0 14px 0; font-weight: bold; font-size: 1.05rem; color: var(--text-main);">${(typeof fNome === 'function' ? fNome(q.question) : q.question)}</p>
                ${opts}
            </div>
        `;
    });
    container.innerHTML = `
        <span style="font-size: 3rem;">📝</span>
        <h3>Avaliação final da trilha B2</h3>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem; max-width: 600px; margin-left: auto; margin-right: auto;">
            Responda às 30 questões abrangendo os Níveis A1, A2, B1 e B2. É necessário alcançar no mínimo <strong>80% de acertos (24/30)</strong> para emitir o certificado de conclusão da trilha.
        </p>
        <div style="max-width: 650px; margin: 0 auto;">
            ${quizHTML}
            <button onclick="submeterSimuladoB2()" style="background: linear-gradient(135deg, #22c55e, #15803d); color: white; border: none; padding: 14px 30px; border-radius: 12px; font-weight: bold; font-size: 1.1rem; cursor: pointer; width: 100%; margin-top: 15px; box-shadow: 0 4px 15px rgba(34, 197, 94, 0.4);">
                🎯 Finalizar e Corrigir Simulado Final B2
            </button>
        </div>
    `;
    const btnAvancar = document.getElementById('btn-avancar');
    if (btnAvancar) btnAvancar.style.display = 'none';
}

function submeterSimuladoB2() {
    const dadosCurso = typeof getDadosCursoAtivo === 'function' ? getDadosCursoAtivo() : [];
    const modIdx = typeof moduloAtivoIndex !== 'undefined' ? moduloAtivoIndex : 0;
    const rawMod = dadosCurso[modIdx];
    if (!rawMod) return;
    const module = typeof normalizeModule === 'function' ? normalizeModule(rawMod) : rawMod;
    const quizList = module.quiz || [];
    if (quizList.length === 0) return;
    let totalQ = quizList.length;
    let respondidas = Object.keys(respostasSimuladoB2).length;
    if (respondidas < totalQ) {
        if (!confirm(`Você respondeu ${respondidas} de ${totalQ} questões. Deseja enviar o simulado assim mesmo?`)) return;
    }
    let acertos = 0;
    quizList.forEach((q, idx) => {
        const userChoice = respostasSimuladoB2[idx];
        const selectedOpt = (q.options && q.options[userChoice]) ? q.options[userChoice] : null;
        if (selectedOpt && (selectedOpt.correct === true || selectedOpt.isCorrect === true || userChoice === q.correctIndex)) {
            acertos++;
        }
    });
    const percent = Math.round((acertos / totalQ) * 100);
    const container = document.getElementById('conteudo-etapa');
    const btnAvancar = document.getElementById('btn-avancar');
    simuladoB2Submetido = true;
    const prog = typeof progressoGlobal !== 'undefined' ? progressoGlobal : {};
    const nome = typeof nomeUsuario !== 'undefined' ? nomeUsuario : 'Estudante';
    const nomeSeguro = typeof escapeHTML === 'function' ? escapeHTML(String(nome)) : 'Estudante';
    if (acertos >= 24) {
        prog.b2_certified = true;
        prog.b2_score = acertos;
        if (!prog.cert_date) prog.cert_date = new Date().toLocaleDateString('pt-BR');
        if (!prog.cert_hash) {
            prog.cert_hash = 'JA-B2-' + Math.floor(100000 + Math.random() * 900000) + '-' + Date.now().toString(36).toUpperCase();
        }
        if (Array.isArray(prog.modulosConcluidos) && !prog.modulosConcluidos.includes(mod.id)) {
            prog.modulosConcluidos.push(mod.id);
        }
        if (typeof salvarProgressoGlobal === 'function') salvarProgressoGlobal();
        if (typeof calcularProgressoGlobal === 'function') calcularProgressoGlobal();
        if (typeof atualizarUIProgresso === 'function') atualizarUIProgresso();
        container.innerHTML = `
            <span style="font-size: 4rem; animation: pop 0.5s;">🏆🎓</span>
            <h2 style="color: #22c55e; font-size: 2rem;">APROVADO NO SIMULADO FINAL B2!</h2>
            <p style="font-size: 1.15rem; color: var(--text-main); margin-top: 10px;">
                Parabéns, <strong>${nomeSeguro}</strong>! Você atingiu <strong>${acertos}/30 acertos (${percent}%)</strong>!
            </p>
            <div style="background: #ecfdf5; border: 2px solid #10b981; padding: 20px; border-radius: 12px; max-width: 450px; margin: 20px auto; box-shadow: var(--shadow);">
                <div style="font-size: 0.85rem; color: #047857; text-transform: uppercase; font-weight: bold;">Status de Formatura</div>
                <div style="font-size: 1.5rem; font-weight: bold; color: #059669; margin: 6px 0;">100% CONCLUÍDO • CERTIFICADO LIBERADO</div>
                <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 4px;">Você concluiu toda a jornada de Japonês A1 ➔ B2 do Idiomas Academy!</p>
            </div>
            <button onclick="abrirModalCertificado()" style="background: linear-gradient(135deg, #d97706, #b45309); color: white; border: none; padding: 14px 28px; border-radius: 12px; font-weight: bold; font-size: 1.1rem; cursor: pointer; box-shadow: 0 4px 15px rgba(217, 119, 6, 0.4); margin-top: 10px;">
                🎓 Gerar Certificado de Conclusão — Japonês B2
            </button>
        `;
        if (btnAvancar) {
            btnAvancar.style.display = 'inline-block';
            btnAvancar.innerText = "Concluir e Voltar ➔";
        }
    } else {
        container.innerHTML = `
            <span style="font-size: 4rem; animation: pop 0.5s;">📊</span>
            <h2 style="color: #e63946;">Resultado do Simulado Final</h2>
            <p style="font-size: 1.15rem; color: var(--text-main);">
                Você acertou <strong>${acertos} de 30 questões (${percent}%)</strong>.
            </p>
            <div style="background: #fef2f2; border: 2px solid #ef4444; padding: 18px; border-radius: 12px; max-width: 450px; margin: 20px auto; box-shadow: var(--shadow);">
                <div style="font-size: 0.85rem; color: #991b1b; text-transform: uppercase; font-weight: bold;">Nota de Corte Não Atingida</div>
                <p style="font-size: 0.95rem; color: #b91c1c; margin-top: 6px; line-height: 1.5;">
                    Para obter a Certificação Oficial B2 do Idiomas Academy, é necessário acertar no mínimo <strong>24 de 30 questões (80%)</strong>.
                </p>
            </div>
            <button onclick="refazerSimuladoB2()" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; border: none; padding: 12px 26px; border-radius: 12px; font-weight: bold; font-size: 1.05rem; cursor: pointer; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4); margin-top: 10px;">
                🔄 Refazer Simulado B2
            </button>
        `;
        if (btnAvancar) btnAvancar.style.display = 'none';
    }
}

function refazerSimuladoB2() {
    simuladoB2Submetido = false;
    respostasSimuladoB2 = {};
    const container = document.getElementById('conteudo-etapa');
    const dadosCurso = typeof getDadosCursoAtivo === 'function' ? getDadosCursoAtivo() : [];
    const modIdx = typeof moduloAtivoIndex !== 'undefined' ? moduloAtivoIndex : 0;
    const mod = dadosCurso[modIdx];
    if (mod) renderizarSimuladoB2(container, mod);
}

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.checkCourseQuiz = checkCourseQuiz;
    window.renderQuizQuestion = renderQuizQuestion;
    window.verificarQuizEscolha = verificarQuizEscolha;
    window.inicializarSentenceBuilderState = inicializarSentenceBuilderState;
    window.renderizarBlocosSentenceBuilder = renderizarBlocosSentenceBuilder;
    window.adicionarBlocoSentenceBuilder = adicionarBlocoSentenceBuilder;
    window.removerBlocoSentenceBuilder = removerBlocoSentenceBuilder;
    window.resetarSentenceBuilder = resetarSentenceBuilder;
    window.verificarSentenceBuilder = verificarSentenceBuilder;
    window.simuladoB2Submetido = simuladoB2Submetido;
    window.respostasSimuladoB2 = respostasSimuladoB2;
    window.selecionarOpcaoSimuladoB2 = selecionarOpcaoSimuladoB2;
    window.renderizarSimuladoB2 = renderizarSimuladoB2;
    window.submeterSimuladoB2 = submeterSimuladoB2;
    window.refazerSimuladoB2 = refazerSimuladoB2;
}
