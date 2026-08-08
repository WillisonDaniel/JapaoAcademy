/**
 * Core Engine da Trilha de Falsos Cognatos de Espanhol (A1 a B2)
 * Hub Gamificado + Player Pedagógico em 5 Estágios com XP e Confetti.
 */

let faNivelAtivo = 'A1';
let faModuloAtivoIndex = 0;
let faModuloAtivo = null;
let faEtapaAtual = 1;
let faDropAtual = 0;
let faRespostasQuiz = {};
let faSentenceSelectedWords = [];

/**
 * Inicialização da Página de Falsos Cognatos
 */
document.addEventListener('DOMContentLoaded', () => {
    inicializarTrilhaFalsosAmigos();
});

function inicializarTrilhaFalsosAmigos() {
    renderizarProgressoHubFA();
    voltarAoHubNiveisFA();
}

/**
 * Obtém a lista completa dos 16 módulos de Falsos Cognatos
 */
function getModulosFalsosAmigos() {
    return (typeof DADOS_ESPANHOL_FALSOS_AMIGOS_TRILHA !== 'undefined') ? DADOS_ESPANHOL_FALSOS_AMIGOS_TRILHA : [];
}

/**
 * Obtém o conjunto de módulos concluídos
 */
function getModulosFAConcluidos() {
    let concluidos = [];
    if (typeof AppState !== 'undefined' && AppState.user && Array.isArray(AppState.user.modulosConcluidos)) {
        concluidos = AppState.user.modulosConcluidos;
    } else {
        try {
            const prog = JSON.parse(localStorage.getItem('ja_progresso_global') || '{}');
            concluidos = prog.modulosConcluidos || [];
        } catch (e) {
            concluidos = [];
        }
    }
    return new Set(concluidos.map(String));
}

/**
 * Renderiza o progresso no Hub Superior
 */
function renderizarProgressoHubFA() {
    const modulos = getModulosFalsosAmigos();
    const concluidosSet = getModulosFAConcluidos();
    const concluidosCount = modulos.filter(m => concluidosSet.has(m.id)).length;
    const totalCount = modulos.length || 16;
    const pct = Math.round((concluidosCount / totalCount) * 100);

    const txtProgresso = document.getElementById('fa-hub-progresso-texto');
    const barProgresso = document.getElementById('fa-hub-progresso-barra');

    if (txtProgresso) {
        txtProgresso.innerHTML = `Progresso da Trilha Anti-Portunhol: <strong>${concluidosCount} de ${totalCount} Módulos</strong> (${pct}%)`;
    }
    if (barProgresso) {
        barProgresso.style.width = `${pct}%`;
    }

    // Atualizar os contadores de cada card de nível
    ['A1', 'A2', 'B1', 'B2'].forEach(lvl => {
        const modsLvl = modulos.filter(m => m.level === lvl);
        const countLvl = modsLvl.filter(m => concluidosSet.has(m.id)).length;
        const elProg = document.getElementById(`prog-fa-${lvl.toLowerCase()}`);
        if (elProg) {
            elProg.textContent = `${countLvl} / ${modsLvl.length} Módulos Concluídos`;
        }
    });
}

/**
 * Oculta as trilhas individuais e exibe a visão geral do Hub com os cards de níveis
 */
function voltarAoHubNiveisFA() {
    const srsBanner = document.querySelector('.banner-srs');
    const hubCard = document.querySelector('.fa-hub-card');
    const niveisGrid = document.querySelector('.fa-niveis-grid');

    if (srsBanner) srsBanner.style.display = 'flex';
    if (hubCard) hubCard.style.display = 'block';
    if (niveisGrid) niveisGrid.style.display = 'grid';

    ['a1', 'a2', 'b1', 'b2'].forEach(l => {
        const card = document.getElementById(`card-nivel-fa-${l}`);
        const trilha = document.getElementById(`trilha-fa-${l}`);
        if (card) card.classList.remove('selected-level');
        if (trilha) trilha.style.display = 'none';
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Alterna a visualização para a trilha do Nível selecionado (A1, A2, B1, B2)
 * Oculta os cards de níveis e barra de progresso geral para focar apenas na trilha escolhida
 */
function abrirTrilhaFA(nivel) {
    faNivelAtivo = (nivel || 'A1').toUpperCase();

    const srsBanner = document.querySelector('.banner-srs');
    const hubCard = document.querySelector('.fa-hub-card');
    const niveisGrid = document.querySelector('.fa-niveis-grid');

    if (srsBanner) srsBanner.style.display = 'none';
    if (hubCard) hubCard.style.display = 'none';
    if (niveisGrid) niveisGrid.style.display = 'none';

    // Exibe apenas a trilha do nível ativo
    ['a1', 'a2', 'b1', 'b2'].forEach(l => {
        const card = document.getElementById(`card-nivel-fa-${l}`);
        const trilha = document.getElementById(`trilha-fa-${l}`);
        const isSelected = (l === faNivelAtivo.toLowerCase());

        if (card) card.classList.toggle('selected-level', isSelected);
        if (trilha) trilha.style.display = isSelected ? 'block' : 'none';
    });

    renderizarListaModulosTrilhaFA(faNivelAtivo);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Renderiza os botões de módulos da trilha do nível ativo
 */
function renderizarListaModulosTrilhaFA(nivel) {
    const container = document.getElementById(`lista-modulos-fa-${nivel.toLowerCase()}`);
    if (!container) return;

    const modulos = getModulosFalsosAmigos().filter(m => m.level === nivel);
    const concluidosSet = getModulosFAConcluidos();

    const modulosHtml = modulos.map((mod, idx) => {
        const isDone = concluidosSet.has(mod.id);
        const globalIdx = getModulosFalsosAmigos().findIndex(m => m.id === mod.id);
        const icon = isDone ? '✅' : '🔓';
        const badgeClass = isDone ? 'mod-done' : 'mod-open';

        return `
            <button class="btn-modulo-fa ${badgeClass}" onclick="iniciarModuloFA(${globalIdx})">
                <span class="mod-status-icon">${icon}</span>
                <div style="flex:1;">
                    <div style="font-weight:bold; font-size:1.05rem;">${mod.title}</div>
                    <div style="font-size:0.85rem; opacity:0.9;">${mod.description}</div>
                </div>
                <span class="mod-action-arrow">➔</span>
            </button>
        `;
    }).join('');

    container.innerHTML = modulosHtml + `
        <div style="text-align: center; margin-top: 28px; padding-top: 14px;">
            <button class="btn-secundario-hub" onclick="voltarAoHubNiveisFA()">
                ⬅ Voltar aos Níveis
            </button>
        </div>
    `;
}

/**
 * Inicia o Player de estudo do módulo selecionado
 */
function iniciarModuloFA(indexGlobal) {
    const modulos = getModulosFalsosAmigos();
    if (indexGlobal < 0 || indexGlobal >= modulos.length) return;

    faModuloAtivoIndex = indexGlobal;
    faModuloAtivo = modulos[indexGlobal];
    faEtapaAtual = 1;
    faDropAtual = 0;
    faRespostasQuiz = {};
    faSentenceSelectedWords = [];

    const hub = document.getElementById('hub-niveis');
    const player = document.getElementById('player-aula');

    if (hub) hub.style.display = 'none';
    ['a1', 'a2', 'b1', 'b2'].forEach(l => {
        const el = document.getElementById(`trilha-fa-${l}`);
        if (el) el.style.display = 'none';
    });
    if (player) player.style.display = 'block';

    renderizarEtapaFA();
    window.scrollTo(0, 0);
}

/**
 * Volta do Player para o Hub de Módulos
 */
function fecharAulaFA() {
    const hub = document.getElementById('hub-niveis');
    const player = document.getElementById('player-aula');

    if (player) player.style.display = 'none';
    if (hub) hub.style.display = 'block';

    abrirTrilhaFA(faNivelAtivo);
    renderizarProgressoHubFA();
    window.scrollTo(0, 0);
}

/**
 * Renderiza o conteúdo do Player de acordo com a etapa atual (1 a 5)
 */
function renderizarEtapaFA() {
    const container = document.getElementById('conteudo-etapa-fa');
    const titIndicador = document.getElementById('fa-etapa-titulo');
    const btnVoltar = document.getElementById('btn-fa-voltar-etapa');
    const btnAvancar = document.getElementById('btn-fa-avancar');

    if (!container || !faModuloAtivo) return;

    // Atualiza botões de navegação
    if (btnVoltar) btnVoltar.style.display = (faEtapaAtual === 1 && faDropAtual === 0) ? 'none' : 'inline-block';
    if (btnAvancar) {
        btnAvancar.style.display = 'inline-flex';
        btnAvancar.innerText = (faEtapaAtual === 5) ? 'Finalizar Módulo 🎉' : 'Avançar ➔';
        btnAvancar.classList.toggle('btn-finalizar-modulo', faEtapaAtual === 5);
    }

    if (faEtapaAtual === 1) {
        if (titIndicador) titIndicador.innerText = `Etapa 1 de 5: Contexto & Alerta (${faModuloAtivo.title})`;
        renderizarStage1FA(container);
    } else if (faEtapaAtual === 2) {
        const drops = faModuloAtivo.stage2_drops || [];
        if (titIndicador) titIndicador.innerText = `Etapa 2 de 5: Falsos Cognatos (Card ${faDropAtual + 1} de ${drops.length})`;
        renderizarStage2FA(container, drops);
    } else if (faEtapaAtual === 3) {
        if (titIndicador) titIndicador.innerText = `Etapa 3 de 5: Prática de Uso (${faModuloAtivo.title})`;
        renderizarStage3FA(container);
    } else if (faEtapaAtual === 4) {
        if (titIndicador) titIndicador.innerText = `Etapa 4 de 5: Diálogo de Mal-Entendidos (${faModuloAtivo.title})`;
        renderizarStage4FA(container);
    } else if (faEtapaAtual === 5) {
        if (titIndicador) titIndicador.innerText = `Etapa 5 de 5: Quiz de proficiência & XP (${faModuloAtivo.title})`;
        renderizarStage5FA(container);
    }
}

/**
 * Stage 1: Contexto & Alerta
 */
function renderizarStage1FA(container) {
    const ctx = faModuloAtivo.stage1_context || {};
    container.innerHTML = `
        <div class="fa-stage-card">
            <div style="font-size:2.5rem; margin-bottom:12px;">🚨</div>
            <h2 style="font-size:1.8rem; color:#d97706; font-family:'Fredoka', sans-serif; margin-bottom:12px;">${ctx.missionTitle || 'Alerta de Falso Cognato'}</h2>
            <p style="font-size:1.1rem; line-height:1.6; color:var(--text-main); margin-bottom:20px;">${ctx.missionDescription || ''}</p>
            
            <button class="btn-audio-guide" onclick="speakKana('${(ctx.audioGuide || ctx.missionTitle).replace(/'/g, "\\'")}')">
                🔊 Ouvir Alerta Cultural
            </button>
        </div>
    `;
}

/**
 * Stage 2: Drops / Cards 🔴 vs 🟢
 */
function renderizarStage2FA(container, drops) {
    if (!drops || drops.length === 0) {
        container.innerHTML = `<p style="text-align:center;">Nenhum card neste módulo.</p>`;
        return;
    }
    const drop = drops[faDropAtual] || drops[0];
    const word = drop.word || drop.title || '';
    const meaning = drop.realMeaning || drop.rule || '';
    const warning = drop.warning || drop.formula || '';
    const example = drop.example || '';
    const audioText = (drop.audio || word).replace(/'/g, "\\'");

    container.innerHTML = `
        <div class="fa-stage-card">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:8px;">
                <span class="fa-badge-warning">⚠️ FALSO COGNATO • CARD ${faDropAtual + 1} DE ${drops.length}</span>
                <button class="btn-favoritar-dict" onclick="toggleFavoritoDict('${audioText}')">⭐ Favoritar</button>
            </div>

            <div style="display:flex; align-items:center; gap:12px; margin-bottom:14px;">
                <h2 style="font-size:2.2rem; color:#dc2626; font-family:'Fredoka', sans-serif; margin:0;">${word}</h2>
                <button onclick="speakKana('${audioText}')" style="background:none; border:none; font-size:1.6rem; cursor:pointer;" title="Ouvir pronúncia">🔊</button>
            </div>

            <div class="fa-box-real-meaning">
                <strong>✅ Significado Real em Espanhol:</strong>
                <div style="font-size:1.15rem; font-weight:700; color:#059669; margin-top:4px;">${meaning}</div>
            </div>

            ${warning ? `
                <div class="fa-box-alert-warning">
                    <strong>🔴 ALERTA ANTI-PORTUNHOL:</strong>
                    <div style="font-size:1.05rem; font-weight:700; color:#dc2626; margin-top:4px;">${warning}</div>
                </div>
            ` : ''}

            ${example ? `
                <div class="fa-box-example">
                    <div style="display:flex; align-items:center; gap:8px; font-size:1.05rem; font-weight:bold; color:var(--text-main);">
                        📌 Exemplo de Uso:
                        <button onclick="speakKana('${example.replace(/'/g, "\\'")}')" style="background:none; border:none; cursor:pointer;">🔊</button>
                    </div>
                    <div style="font-size:1.1rem; color:#0d9488; font-weight:700; margin-top:6px;">"${example}"</div>
                    ${drop.translation ? `<div style="font-size:0.95rem; color:var(--text-muted); margin-top:4px;">→ ${drop.translation}</div>` : ''}
                </div>
            ` : ''}
        </div>
    `;
}

/**
 * Stage 3: Prática de Uso
 */
function renderizarStage3FA(container) {
    const questions = faModuloAtivo.stage3_practice || [];
    const sentenceBuilders = faModuloAtivo.stage3_5_sentenceBuilder || [];

    let qHtml = questions.map((q, idx) => `
        <div class="fa-practice-question-card" style="background:var(--card-bg); border:1px solid var(--border-color); border-radius:14px; padding:18px; margin-bottom:16px;">
            <div style="font-weight:bold; font-size:1.1rem; margin-bottom:12px; color:var(--text-main);">
                ${idx + 1}. ${q.question}
            </div>
            <div style="display:flex; flex-direction:column; gap:10px;">
                ${q.options.map((opt, optIdx) => `
                    <button class="fa-opt-btn" onclick="responderPraticaFA(this, ${idx}, ${opt.isCorrect}, '${(opt.explanation || '').replace(/'/g, "\\'")}')">
                        ${opt.label}
                    </button>
                `).join('')}
            </div>
            <div id="fa-feedback-pratica-${idx}" class="fa-feedback-msg" style="margin-top:10px; font-weight:bold; display:none;"></div>
        </div>
    `).join('');

    let sbHtml = '';
    if (sentenceBuilders.length > 0) {
        const sb = sentenceBuilders[0];
        const shuffledWords = [...sb.words].sort(() => Math.random() - 0.5);
        sbHtml = `
            <div style="margin-top:24px; padding:18px; background:var(--bg-color); border:2px dashed #0d9488; border-radius:14px;">
                <h3 style="font-size:1.1rem; color:#0d9488; margin-bottom:8px;">🧩 Construtor de Frases Autênticas:</h3>
                <p style="font-size:0.95rem; color:var(--text-muted); margin-bottom:12px;">Monte a frase correta em espanhol para a tradução: <em>"${sb.translation}"</em></p>
                
                <div id="fa-sb-assembled" style="min-height:50px; background:var(--card-bg); border:1px solid var(--border-color); border-radius:10px; padding:10px; margin-bottom:14px; display:flex; flex-wrap:wrap; gap:6px; align-items:center;">
                    <span style="color:var(--text-muted); font-size:0.85rem;" id="fa-sb-placeholder">Clique nas palavras abaixo para montar a frase...</span>
                </div>

                <div id="fa-sb-chips" style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:14px;">
                    ${shuffledWords.map((w, wIdx) => `
                        <button class="fa-word-chip" onclick="selecionarPalavraSentenceFA(this, '${w.replace(/'/g, "\\'")}')">${w}</button>
                    `).join('')}
                </div>

                <div style="display:flex; justify-content:center; align-items:center; gap:14px; margin-top:20px; flex-wrap:wrap;">
                    <button class="btn-sb-limpar" onclick="resetarSentenceFA('${(sb.sentenceEs).replace(/'/g, "\\'")}')">🧹 Limpar Frase</button>
                    <button class="btn-verificar-frase" onclick="verificarSentenceFA('${(sb.sentenceEs).replace(/'/g, "\\'")}')">✅ Verificar Frase</button>
                </div>
                <div id="fa-sb-feedback" style="margin-top:14px; text-align:center; font-weight:bold; font-size:1.05rem;"></div>
            </div>
        `;
    }

    container.innerHTML = `
        <div class="fa-stage-card">
            <h2 style="font-size:1.5rem; color:var(--text-main); font-family:'Fredoka', sans-serif; margin-bottom:16px;">
                🧠 Exercícios Práticos de Aplicação
            </h2>
            ${qHtml}
            ${sbHtml}
        </div>
    `;
}

function responderPraticaFA(btn, qIdx, isCorrect, explanation) {
    const parent = btn.parentElement;
    parent.querySelectorAll('.fa-opt-btn').forEach(b => {
        b.disabled = true;
        b.style.opacity = '0.7';
    });
    if (isCorrect) {
        btn.style.background = '#10b981';
        btn.style.color = '#ffffff';
        btn.style.borderColor = '#059669';
    } else {
        btn.style.background = '#ef4444';
        btn.style.color = '#ffffff';
        btn.style.borderColor = '#dc2626';
    }

    const fb = document.getElementById(`fa-feedback-pratica-${qIdx}`);
    if (fb) {
        fb.style.display = 'block';
        fb.style.color = isCorrect ? '#059669' : '#dc2626';
        fb.innerHTML = (isCorrect ? '✅ Correto! ' : '❌ Incorreto. ') + explanation;
    }
}

function selecionarPalavraSentenceFA(btn, word) {
    if (btn.disabled) return;
    btn.disabled = true;
    btn.style.opacity = '0.4';

    faSentenceSelectedWords.push({ btn, word });
    renderizarMontadorFraseFA();
}

function removerPalavraSentenceFA(idx) {
    if (idx < 0 || idx >= faSentenceSelectedWords.length) return;
    const removed = faSentenceSelectedWords.splice(idx, 1)[0];
    if (removed && removed.btn) {
        removed.btn.disabled = false;
        removed.btn.style.opacity = '1';
    }
    renderizarMontadorFraseFA();
}

function renderizarMontadorFraseFA() {
    const assembled = document.getElementById('fa-sb-assembled');
    if (!assembled) return;

    if (faSentenceSelectedWords.length === 0) {
        assembled.innerHTML = `<span style="color:var(--text-muted); font-size:0.85rem;" id="fa-sb-placeholder">Clique nas palavras abaixo para montar a frase...</span>`;
        return;
    }

    assembled.innerHTML = faSentenceSelectedWords.map((item, i) => `
        <span class="fa-word-chip selected" onclick="removerPalavraSentenceFA(${i})" title="Clique para remover palavra" style="cursor:pointer; user-select:none; display:inline-flex; align-items:center; gap:6px;">
            ${item.word} <small style="opacity:0.8; font-size:0.75rem;">✕</small>
        </span>
    `).join(' ');
}

function resetarSentenceFA(targetSentence) {
    faSentenceSelectedWords.forEach(item => {
        if (item.btn) {
            item.btn.disabled = false;
            item.btn.style.opacity = '1';
        }
    });
    faSentenceSelectedWords = [];
    renderizarMontadorFraseFA();
    const fb = document.getElementById('fa-sb-feedback');
    if (fb) fb.innerHTML = '';
}

function verificarSentenceFA(targetSentence) {
    const assembledText = faSentenceSelectedWords.map(w => w.word).join(' ').trim();
    const cleanTarget = targetSentence.trim();
    const fb = document.getElementById('fa-sb-feedback');
    if (!fb) return;

    if (assembledText.toLowerCase() === cleanTarget.toLowerCase()) {
        fb.style.color = '#059669';
        fb.innerHTML = `🎉 Perfeito! Frase montada com sucesso: <strong>"${targetSentence}"</strong>`;
        if (typeof speakKana === 'function') speakKana(targetSentence);
    } else {
        fb.style.color = '#dc2626';
        fb.innerHTML = `❌ Quase lá! Sua frase: <em>"${assembledText || 'Vazia'}"</em>. Esperado: <strong>"${targetSentence}"</strong>`;
    }
}

/**
 * Stage 4: Diálogos de Mal-Entendidos
 */
function renderizarStage4FA(container) {
    const dialogs = faModuloAtivo.stage4_dialog || [];
    let dHtml = dialogs.map((d, idx) => `
        <div class="fa-dialog-bubble ${idx % 2 === 0 ? 'left' : 'right'}">
            <div style="font-weight:bold; font-size:0.9rem; color:#0d9488; margin-bottom:4px; display:flex; justify-content:space-between; align-items:center;">
                <span>🗣️ ${d.npcName || d.speaker}:</span>
                <button onclick="speakKana('${(d.text || d.npcMessage).replace(/'/g, "\\'")}')" style="background:none; border:none; cursor:pointer;">🔊</button>
            </div>
            <div style="font-size:1.1rem; font-weight:700; color:var(--text-main); line-height:1.4;">
                "${d.text || d.npcMessage}"
            </div>
            ${d.translation ? `<div style="font-size:0.9rem; color:var(--text-muted); margin-top:4px;">(${d.translation})</div>` : ''}
        </div>
    `).join('');

    container.innerHTML = `
        <div class="fa-stage-card">
            <h2 style="font-size:1.5rem; color:var(--text-main); font-family:'Fredoka', sans-serif; margin-bottom:16px;">
                🎭 Diálogo de Situação Real
            </h2>
            <p style="font-size:0.98rem; color:var(--text-muted); margin-bottom:20px;">
                Veja como o uso correto do falso cognato evita mal-entendidos na vida real:
            </p>
            <div class="fa-dialog-container">
                ${dHtml}
            </div>
        </div>
    `;
}

/**
 * Stage 5: Quiz & XP
 */
function renderizarStage5FA(container) {
    const quiz = faModuloAtivo.stage5_quiz || [];

    let qHtml = quiz.map((q, idx) => `
        <div class="fa-quiz-block" style="background:var(--card-bg); border:1px solid var(--border-color); border-radius:14px; padding:18px; margin-bottom:16px;">
            <div style="font-weight:bold; font-size:1.05rem; margin-bottom:12px; color:var(--text-main);">
                ${q.question}
            </div>
            <div style="display:flex; flex-direction:column; gap:10px;">
                ${q.options.map((opt, optIdx) => `
                    <button class="fa-quiz-opt-btn" onclick="responderQuizFinalFA(this, ${idx}, ${opt.isCorrect}, '${(opt.explanation || '').replace(/'/g, "\\'")}')">
                        ${opt.label}
                    </button>
                `).join('')}
            </div>
            <div id="fa-quiz-feedback-${idx}" class="fa-feedback-msg" style="margin-top:10px; font-weight:bold; display:none;"></div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="fa-stage-card">
            <div style="text-align:center; margin-bottom:20px;">
                <span class="fa-badge-xp">⭐ VALENDO +50 XP DE PROFICIÊNCIA</span>
                <h2 style="font-size:1.6rem; color:var(--text-main); font-family:'Fredoka', sans-serif; margin-top:8px;">
                    🏆 Quiz Final de Certificação do Módulo
                </h2>
                <p style="font-size:0.95rem; color:var(--text-muted);">Responda às questões para concluir o módulo e salvar seu progresso!</p>
            </div>
            ${qHtml}
            <div id="fa-quiz-final-actions" style="margin-top:20px; text-align:center; display:none;">
                <button class="btn-primario-grande" onclick="concluirModuloFinalFA()">
                    🎉 Concluir Módulo & Ganhar XP!
                </button>
            </div>
        </div>
    `;
}

function responderQuizFinalFA(btn, qIdx, isCorrect, explanation) {
    const parent = btn.parentElement;
    parent.querySelectorAll('.fa-quiz-opt-btn').forEach(b => {
        b.disabled = true;
        b.style.opacity = '0.7';
    });
    if (isCorrect) {
        btn.style.background = '#10b981';
        btn.style.color = '#ffffff';
        btn.style.borderColor = '#059669';
    } else {
        btn.style.background = '#ef4444';
        btn.style.color = '#ffffff';
        btn.style.borderColor = '#dc2626';
    }

    faRespostasQuiz[qIdx] = isCorrect;

    const fb = document.getElementById(`fa-quiz-feedback-${qIdx}`);
    if (fb) {
        fb.style.display = 'block';
        fb.style.color = isCorrect ? '#059669' : '#dc2626';
        fb.innerHTML = (isCorrect ? '✅ Correto! ' : '❌ Incorreto. ') + explanation;
    }

    const quiz = faModuloAtivo.stage5_quiz || [];
    if (Object.keys(faRespostasQuiz).length >= quiz.length) {
        const actions = document.getElementById('fa-quiz-final-actions');
        if (actions) actions.style.display = 'block';
    }
}

/**
 * Conclui o módulo, salva o progresso e dispara confetti
 */
function concluirModuloFinalFA() {
    const modId = faModuloAtivo.id;

    // Adiciona ao AppState ou localStorage
    if (typeof AppState !== 'undefined' && typeof AppState.markModuleComplete === 'function') {
        AppState.markModuleComplete(modId);
    } else {
        try {
            let prog = JSON.parse(localStorage.getItem('ja_progresso_global') || '{}');
            if (!Array.isArray(prog.modulosConcluidos)) prog.modulosConcluidos = [];
            if (!prog.modulosConcluidos.includes(modId)) prog.modulosConcluidos.push(modId);
            localStorage.setItem('ja_progresso_global', JSON.stringify(prog));
        } catch (e) { }
    }

    // Adiciona XP (+50 XP)
    if (typeof adicionarXP === 'function') {
        adicionarXP(50);
    }

    // Dispara Confetti 🎉
    if (typeof confetti === 'function') {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    }

    if (typeof mostrarToast === 'function') {
        mostrarToast(`🎉 Módulo <strong>${faModuloAtivo.title}</strong> concluído! +50 XP acumulados!`);
    }

    fecharAulaFA();
}

/**
 * Navegação das etapas (Avançar e Voltar)
 */
function avançarEtapaFA() {
    if (!faModuloAtivo) return;

    if (faEtapaAtual === 2) {
        const drops = faModuloAtivo.stage2_drops || [];
        if (faDropAtual < drops.length - 1) {
            faDropAtual++;
            renderizarEtapaFA();
            window.scrollTo(0, 0);
            return;
        }
    }

    if (faEtapaAtual < 5) {
        faEtapaAtual++;
        faDropAtual = 0;
        renderizarEtapaFA();
        window.scrollTo(0, 0);
    } else if (faEtapaAtual === 5) {
        concluirModuloFinalFA();
    }
}

function voltarEtapaFA() {
    if (!faModuloAtivo) return;

    if (faEtapaAtual === 2 && faDropAtual > 0) {
        faDropAtual--;
        renderizarEtapaFA();
        window.scrollTo(0, 0);
        return;
    }

    if (faEtapaAtual > 1) {
        faEtapaAtual--;
        if (faEtapaAtual === 2) {
            const drops = faModuloAtivo.stage2_drops || [];
            faDropAtual = Math.max(0, drops.length - 1);
        } else {
            faDropAtual = 0;
        }
        renderizarEtapaFA();
        window.scrollTo(0, 0);
    }
}

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.abrirTrilhaFA = abrirTrilhaFA;
    window.iniciarModuloFA = iniciarModuloFA;
    window.fecharAulaFA = fecharAulaFA;
    window.avançarEtapaFA = avançarEtapaFA;
    window.voltarEtapaFA = voltarEtapaFA;
    window.responderPraticaFA = responderPraticaFA;
    window.voltarAoHubNiveisFA = voltarAoHubNiveisFA;
    window.selecionarPalavraSentenceFA = selecionarPalavraSentenceFA;
    window.removerPalavraSentenceFA = removerPalavraSentenceFA;
    window.resetarSentenceFA = resetarSentenceFA;
    window.verificarSentenceFA = verificarSentenceFA;
    window.responderQuizFinalFA = responderQuizFinalFA;
    window.concluirModuloFinalFA = concluirModuloFinalFA;
}
