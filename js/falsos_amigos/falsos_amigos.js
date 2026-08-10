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
    const progressoEstado = typeof AppState !== 'undefined' && AppState.user
        ? AppState.user.progressoGlobal
        : null;
    if (progressoEstado && Array.isArray(progressoEstado.modulosConcluidos)) {
        concluidos = progressoEstado.modulosConcluidos;
    } else {
        try {
            const salvoAtual = localStorage.getItem('japao_academy_progress');
            const salvoLegado = localStorage.getItem('ja_progresso_global');
            const prog = JSON.parse(salvoAtual || salvoLegado || '{}');
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

    if (typeof AppState === 'undefined' || typeof AppState.markModuleCompleted !== 'function') {
        console.error('AppState indisponível: o módulo de Falsos Amigos não pôde ser concluído com segurança.');
        if (typeof mostrarToast === 'function') mostrarToast('Não foi possível salvar o progresso. Recarregue a página e tente novamente.');
        return;
    }
    AppState.markModuleCompleted(modId, faNivelAtivo);

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

// ======================================
// MINIGAME ARCADE: PEGADINHA OU REAL? (3s)
// ======================================

const BANCO_PEGADINHAS_3S = [
    { word: "Embarazada", statement: "Significa 'Grávida'", isTrue: true, realMeaning: "Grávida", falseMeaning: "Embaraçada / Com vergonha" },
    { word: "Embarazada", statement: "Significa 'Com vergonha ou embaraçada'", isTrue: false, realMeaning: "Grávida", falseMeaning: "Embaraçada / Com vergonha" },
    { word: "Polvo", statement: "Significa 'Pó ou Poeira'", isTrue: true, realMeaning: "Pó ou Poeira", falseMeaning: "Polvo (animal marinho)" },
    { word: "Polvo", statement: "Significa 'Polvo (o animal marinho)'", isTrue: false, realMeaning: "Pó ou Poeira (Polvo é 'pulpo')", falseMeaning: "Polvo (animal marinho)" },
    { word: "Exquisito", statement: "Significa 'Saboroso ou Delicioso'", isTrue: true, realMeaning: "Saboroso / Delicioso", falseMeaning: "Esquisito / Estranho" },
    { word: "Exquisito", statement: "Significa 'Esquisito ou Estranho'", isTrue: false, realMeaning: "Saboroso / Delicioso", falseMeaning: "Esquisito / Estranho" },
    { word: "Cena", statement: "Significa 'Jantar (refeição da noite)'", isTrue: true, realMeaning: "Jantar", falseMeaning: "Cena de filme" },
    { word: "Cena", statement: "Significa 'Cena de filme ou teatro'", isTrue: false, realMeaning: "Jantar (Cena de filme é 'escena')", falseMeaning: "Cena de filme" },
    { word: "Propina", statement: "Significa 'Gorjeta (dinheiro extra)'", isTrue: true, realMeaning: "Gorjeta", falseMeaning: "Suborno ilícito" },
    { word: "Propina", statement: "Significa 'Suborno ilegal'", isTrue: false, realMeaning: "Gorjeta (Suborno é 'soborno')", falseMeaning: "Suborno ilícito" },
    { word: "Largo", statement: "Significa 'Longo / Comprido'", isTrue: true, realMeaning: "Longo / Comprido", falseMeaning: "Largo / Ancho" },
    { word: "Largo", statement: "Significa 'Largo (de largura grande)'", isTrue: false, realMeaning: "Longo (Largo de largura é 'ancho')", falseMeaning: "Largo de largura" },
    { word: "Presunto", statement: "Significa 'Suposto / Presumível'", isTrue: true, realMeaning: "Suposto / Presumível", falseMeaning: "Presunto de comer" },
    { word: "Presunto", statement: "Significa 'Presunto de comer (frio)'", isTrue: false, realMeaning: "Suposto (Presunto de comer é 'jamón')", falseMeaning: "Presunto de comer" },
    { word: "Vaso", statement: "Significa 'Copo de beber'", isTrue: true, realMeaning: "Copo de beber", falseMeaning: "Vaso de flor" },
    { word: "Vaso", statement: "Significa 'Vaso de planta ou flor'", isTrue: false, realMeaning: "Copo (Vaso de flor é 'florero')", falseMeaning: "Vaso de planta" },
    { word: "Goma", statement: "Significa 'Borracha de apagar / Pneu'", isTrue: true, realMeaning: "Borracha / Pneu", falseMeaning: "Goma de colar" },
    { word: "Goma", statement: "Significa 'Cola de bastão escolar'", isTrue: false, realMeaning: "Borracha / Pneu (Cola é 'pegamento')", falseMeaning: "Cola de bastão" },
    { word: "Oficina", statement: "Significa 'Escritório de trabalho'", isTrue: true, realMeaning: "Escritório", falseMeaning: "Oficina mecânica" },
    { word: "Oficina", statement: "Significa 'Oficina mecânica de carros'", isTrue: false, realMeaning: "Escritório (Oficina mecânica é 'taller')", falseMeaning: "Oficina mecânica" },
    { word: "Apellido", statement: "Significa 'Sobrenome da família'", isTrue: true, realMeaning: "Sobrenome", falseMeaning: "Apelido carinhoso" },
    { word: "Apellido", statement: "Significa 'Apelido carinhoso'", isTrue: false, realMeaning: "Sobrenome (Apelido é 'apodo')", falseMeaning: "Apelido carinhoso" },
    { word: "Brincando", statement: "Significa 'Saltando ou pulando'", isTrue: true, realMeaning: "Saltando / Pulando", falseMeaning: "Brincando de jogo" },
    { word: "Brincando", statement: "Significa 'Brincando de jogo divertido'", isTrue: false, realMeaning: "Saltando (Brincando é 'jugando')", falseMeaning: "Brincando de jogo" },
    { word: "Pastel", statement: "Significa 'Bolo de aniversário'", isTrue: true, realMeaning: "Bolo", falseMeaning: "Pastel frito de feira" },
    { word: "Pastel", statement: "Significa 'Pastel frito de feira'", isTrue: false, realMeaning: "Bolo de aniversário", falseMeaning: "Pastel frito" },
    { word: "Taza", statement: "Significa 'Xícara de tomar café'", isTrue: true, realMeaning: "Xícara de tomar café", falseMeaning: "Taça de vinho de vidro" },
    { word: "Taza", statement: "Significa 'Taça de vidro para vinho'", isTrue: false, realMeaning: "Xícara de café (Taça de vinho é 'copa')", falseMeaning: "Taça de vinho" },
    { word: "Copa", statement: "Significa 'Taça de vinho / Copa do Mundo'", isTrue: true, realMeaning: "Taça de vinho", falseMeaning: "Copa da casa (cozinha)" },
    { word: "Copa", statement: "Significa 'Cozinha ou copa da casa'", isTrue: false, realMeaning: "Taça de vinho (Copa de casa é 'cocina')", falseMeaning: "Copa da casa" },
    { word: "Cadera", statement: "Significa 'Quadril do corpo'", isTrue: true, realMeaning: "Quadril", falseMeaning: "Cadeira de sentar" },
    { word: "Cadera", statement: "Significa 'Cadeira para sentar'", isTrue: false, realMeaning: "Quadril (Cadeira é 'silla')", falseMeaning: "Cadeira de sentar" },
    { word: "Silla", statement: "Significa 'Cadeira para sentar'", isTrue: true, realMeaning: "Cadeira de sentar", falseMeaning: "Sela de cavalo" }
];

let pegadinhaState = {
    ativo: false,
    emCooldown: false,
    vidas: 3,
    pontos: 0,
    combo: 1,
    highScore: 0,
    timer: null,
    tempoMaxMs: 5000,
    tempoRestanteMs: 5000,
    questaoAtual: null,
    questoesFiltro: []
};

function alternarModoFA(modo) {
    const hubNiveis = document.getElementById('hub-niveis');
    const arenaArcade = document.getElementById('arena-arcade-pegadinha');
    const btnTrilha = document.getElementById('btn-fa-mode-trilha');
    const btnArcade = document.getElementById('btn-fa-mode-arcade');

    if (modo === 'arcade') {
        if (hubNiveis) hubNiveis.style.display = 'none';
        if (arenaArcade) arenaArcade.style.display = 'block';
        if (btnTrilha) btnTrilha.classList.remove('active');
        if (btnArcade) btnArcade.classList.add('active');
        iniciarMinigamePegadinha();
    } else {
        if (hubNiveis) hubNiveis.style.display = 'block';
        if (arenaArcade) arenaArcade.style.display = 'none';
        if (btnTrilha) btnTrilha.classList.add('active');
        if (btnArcade) btnArcade.classList.remove('active');
        encerrarTimerPegadinha();
    }
}

function setArcadeButtonsDisabled(disabled) {
    const btns = document.querySelectorAll('#arena-arcade-pegadinha button');
    btns.forEach(btn => {
        if (btn) {
            btn.disabled = disabled;
            btn.style.opacity = disabled ? '0.6' : '1';
            btn.style.pointerEvents = disabled ? 'none' : 'auto';
        }
    });
}

function iniciarMinigamePegadinha() {
    try {
        pegadinhaState.highScore = parseInt(localStorage.getItem('espanhol_pegadinha_highscore') || '0', 10);
    } catch(e) { pegadinhaState.highScore = 0; }

    pegadinhaState.ativo = true;
    pegadinhaState.emCooldown = false;
    pegadinhaState.vidas = 3;
    pegadinhaState.pontos = 0;
    pegadinhaState.combo = 1;
    pegadinhaState.questoesFiltro = [...BANCO_PEGADINHAS_3S].sort(() => Math.random() - 0.5);

    atualizarHUDPegadinha();
    proximaRodadaPegadinha();
}

function atualizarHUDPegadinha() {
    const elVidas = document.getElementById('arcade-vidas-display');
    const elPontos = document.getElementById('arcade-pontos-display');
    const elCombo = document.getElementById('arcade-combo-badge');
    const elHS = document.getElementById('arcade-highscore-display');

    if (elVidas) {
        let coracoes = '';
        for (let i = 0; i < 3; i++) {
            coracoes += (i < pegadinhaState.vidas) ? '❤️' : '🖤';
        }
        elVidas.innerHTML = coracoes;
    }

    if (elPontos) elPontos.textContent = pegadinhaState.pontos;
    if (elCombo) elCombo.textContent = `COMBO x${pegadinhaState.combo}`;
    if (elHS) elHS.textContent = pegadinhaState.highScore;
}

function proximaRodadaPegadinha() {
    encerrarTimerPegadinha();
    pegadinhaState.emCooldown = false;

    if (pegadinhaState.vidas <= 0) {
        gameOverPegadinha();
        return;
    }

    if (pegadinhaState.questoesFiltro.length === 0) {
        pegadinhaState.questoesFiltro = [...BANCO_PEGADINHAS_3S].sort(() => Math.random() - 0.5);
    }

    const questao = pegadinhaState.questoesFiltro.pop();
    pegadinhaState.questaoAtual = questao;

    // Garantir que a estrutura visual do card de pergunta é restaurada ao reiniciar o jogo
    const card = document.getElementById('arcade-question-card');
    if (card) {
        card.innerHTML = `
            <span style="background: #fffbeb; color: #d97706; border: 1px solid #fde68a; font-weight: 700; padding: 4px 14px; border-radius: 16px; font-size: 0.8rem; text-transform: uppercase; margin-bottom: 12px;">⚡ Flashcard Rápido (5 Segundos)</span>
            <h2 id="arcade-word-display" style="font-size: 2.2rem; font-family: 'Fredoka', sans-serif; color: #d97706; margin: 0 0 10px 0;">--</h2>
            <div style="font-size: 1.25rem; font-weight: 600; color: var(--text-main);">
                Afirmativa: <span id="arcade-statement-display" style="color: #2563eb; font-weight: 700;">"--"</span>
            </div>
        `;
    }

    setArcadeButtonsDisabled(false);

    const elWord = document.getElementById('arcade-word-display');
    const elStmt = document.getElementById('arcade-statement-display');

    if (elWord) elWord.textContent = questao.word;
    if (elStmt) elStmt.textContent = `"${questao.statement}"`;

    if (typeof speakKana === 'function') speakKana(questao.word);

    // Iniciar temporizador de 5.0s (5000ms)
    pegadinhaState.tempoRestanteMs = 5000;
    const bar = document.getElementById('arcade-timer-bar');
    if (bar) bar.style.width = '100%';

    const startTime = Date.now();
    pegadinhaState.timer = setInterval(() => {
        const decorrido = Date.now() - startTime;
        pegadinhaState.tempoRestanteMs = Math.max(0, 5000 - decorrido);
        const pct = (pegadinhaState.tempoRestanteMs / 5000) * 100;
        if (bar) bar.style.width = `${pct}%`;

        if (pegadinhaState.tempoRestanteMs <= 0) {
            encerrarTimerPegadinha();
            tempoEsgotadoPegadinha();
        }
    }, 50);
}

function encerrarTimerPegadinha() {
    if (pegadinhaState.timer) {
        clearInterval(pegadinhaState.timer);
        pegadinhaState.timer = null;
    }
}

function responderPegadinha(respostaUsuario) {
    if (!pegadinhaState.ativo || !pegadinhaState.questaoAtual || pegadinhaState.emCooldown) return;
    pegadinhaState.emCooldown = true;
    encerrarTimerPegadinha();
    setArcadeButtonsDisabled(true);

    const q = pegadinhaState.questaoAtual;
    const correto = (respostaUsuario === q.isTrue);

    if (correto) {
        if (typeof playBeep === 'function') playBeep('success');
        pegadinhaState.pontos += (10 * pegadinhaState.combo);
        pegadinhaState.combo++;
        
        if (pegadinhaState.pontos > pegadinhaState.highScore) {
            pegadinhaState.highScore = pegadinhaState.pontos;
            try { localStorage.setItem('espanhol_pegadinha_highscore', String(pegadinhaState.highScore)); } catch(e) {}
        }

        if (typeof mostrarToast === 'function') {
            mostrarToast(`⚡ <strong>ACERTOU!</strong> +${10 * (pegadinhaState.combo - 1)} PTS!`);
        }
    } else {
        if (typeof playBeep === 'function') playBeep('error');
        pegadinhaState.vidas--;
        pegadinhaState.combo = 1;
        
        if (typeof mostrarToast === 'function') {
            mostrarToast(`❌ <strong>ERRADO!</strong> ${q.word} ➔ Significado real: <strong>${q.realMeaning}</strong>`);
        }
    }

    atualizarHUDPegadinha();
    setTimeout(() => {
        proximaRodadaPegadinha();
    }, 1000); // Cooldown exato de 1.0s para evitar spam
}

function tempoEsgotadoPegadinha() {
    if (typeof playBeep === 'function') playBeep('error');
    pegadinhaState.emCooldown = true;
    setArcadeButtonsDisabled(true);

    const q = pegadinhaState.questaoAtual;
    pegadinhaState.vidas--;
    pegadinhaState.combo = 1;
    atualizarHUDPegadinha();

    if (typeof mostrarToast === 'function') {
        mostrarToast(`⏱️ <strong>TEMPO ESGOTADO!</strong> ${q ? q.word + ' ➔ ' + q.realMeaning : ''}`);
    }

    setTimeout(() => {
        proximaRodadaPegadinha();
    }, 1000);
}

function gameOverPegadinha() {
    pegadinhaState.ativo = false;
    encerrarTimerPegadinha();

    const xpGanha = Math.round(pegadinhaState.pontos / 2);
    if (xpGanha > 0 && typeof adicionarXP === 'function') {
        adicionarXP(xpGanha, 'Minigame Pegadinha ou Real 3s');
    }

    const isRecorde = (pegadinhaState.pontos >= pegadinhaState.highScore && pegadinhaState.pontos > 0);

    const card = document.getElementById('arcade-question-card');
    if (card) {
        card.innerHTML = `
            <div style="font-size:3.5rem; margin-bottom:12px;">🎮</div>
            <h2 style="font-family:'Fredoka', sans-serif; color:#ef4444; font-size:1.8rem; margin-bottom:8px;">GAME OVER!</h2>
            <p style="font-size:1.1rem; color:var(--text-main); margin-bottom:16px;">Sua pontuação final: <strong>${pegadinhaState.pontos} PONTOS</strong> (+${xpGanha} XP)</p>
            ${isRecorde ? `<div style="background:#fef3c7; color:#d97706; border:1px solid #fde68a; padding:8px 16px; border-radius:14px; font-weight:bold; display:inline-block; margin-bottom:20px;">🏆 NOVO RECORDE PESSOAL!</div>` : ''}
            <div>
                <button onclick="iniciarMinigamePegadinha()" style="background:linear-gradient(135deg, #f59e0b, #d97706); color:#fff; border:none; padding:14px 28px; border-radius:16px; font-weight:700; font-family:'Fredoka', sans-serif; font-size:1.1rem; cursor:pointer; box-shadow:0 4px 12px rgba(217,119,6,0.3);">🔄 Jogar Novamente</button>
            </div>
        `;
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
    window.alternarModoFA = alternarModoFA;
    window.iniciarMinigamePegadinha = iniciarMinigamePegadinha;
    window.responderPegadinha = responderPegadinha;
}
