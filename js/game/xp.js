// ======================================
// MÓDULO GAME - XP, NÍVEIS E CARGOS DO PERFIL
// ======================================

function calcularNivel(xpTotal) {
    const xp = parseInt(xpTotal, 10) || 0;
    return Math.floor(xp / 100) + 1;
}
function obterCargoPorNivel(nivel) {
    const lvl = parseInt(nivel, 10) || 1;
    if (lvl >= 50) return { titulo: 'Kami', icone: '🐉', minLvl: 50 };
    if (lvl >= 20) return { titulo: 'Daimyo', icone: '👑', minLvl: 20 };
    if (lvl >= 10) return { titulo: 'Shogun', icone: '🏯', minLvl: 10 };
    if (lvl >= 5)  return { titulo: 'Ninja', icone: '🥷', minLvl: 5 };
    if (lvl >= 3)  return { titulo: 'Samurai', icone: '⚔️', minLvl: 3 };
    return { titulo: 'Aprendiz', icone: '⛩️', minLvl: 1 };
}

function verificarSubidaNivel(xpAntigo, xpNovo) {
    const lvlAntigo = calcularNivel(xpAntigo);
    const lvlNovo = calcularNivel(xpNovo);
    return {
        subiu: lvlNovo > lvlAntigo,
        lvlAntigo,
        lvlNovo
    };
}

function obterXPAtual() {
    if (typeof AppState !== 'undefined' && AppState && AppState.runtime && AppState.runtime.initialized) {
        const xpEstado = Number(AppState.user && AppState.user.xp);
        if (Number.isFinite(xpEstado)) return Math.max(0, xpEstado);
    }

    try {
        const rawXp = localStorage.getItem('ja_user_xp');
        if (rawXp !== null) return Math.max(0, parseInt(rawXp, 10) || 0);
        const progressoLegado = JSON.parse(localStorage.getItem('ja_progresso_global')) || {};
        return Math.max(0, parseInt(progressoLegado.xp, 10) || 0);
    } catch (e) {
        return 0;
    }
}

function definirXPAtual(xp) {
    const valor = Math.max(0, parseInt(xp, 10) || 0);
    if (typeof AppState !== 'undefined' && AppState && typeof AppState.setXP === 'function') {
        return AppState.setXP(valor);
    }
    if (typeof localStorage !== 'undefined') localStorage.setItem('ja_user_xp', valor.toString());
    return valor;
}

function atualizarHeaderXP() {
    const container = document.getElementById('xp-profile-widget-container');
    if (!container) return;

    const xpTotal = obterXPAtual();

    const nivelAtual = calcularNivel(xpTotal);
    const xpNoNivel = xpTotal % 100;
    const pct = Math.min(100, Math.max(0, xpNoNivel));
    const cargo = obterCargoPorNivel(nivelAtual);

    container.innerHTML = `
        <div class="xp-profile-widget" onclick="abrirModalNiveisECargos()" title="Nível ${nivelAtual} • ${cargo.titulo} (${xpTotal} XP Acumulados) - Clique para ver todos os Cargos">
            <div class="xp-widget-top-row">
                <div class="xp-rank-info">
                    <span class="xp-rank-icon">${cargo.icone}</span>
                    <span class="xp-rank-text">Nível ${nivelAtual} • ${cargo.titulo}</span>
                </div>
                <span class="xp-val-text">${xpTotal} XP</span>
            </div>
            <div class="xp-bar-bg">
                <div class="xp-bar-fill" style="width:${pct}%;"></div>
            </div>
        </div>
    `;
}

function abrirModalNiveisECargos() {
    let modal = document.getElementById('modal-cargos-niveis');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal-cargos-niveis';
        modal.className = 'modal-overlay';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-label', 'Níveis e cargos do perfil');
        modal.style.cssText = 'position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.75); display:flex; align-items:center; justify-content:center; z-index:99999; backdrop-filter:blur(4px); padding:1rem;';
        modal.onclick = function(e) { if (e.target === this) fecharModalCargosNiveis(); };
        document.body.appendChild(modal);
    }

    const xpTotal = obterXPAtual();

    const nivelAtual = calcularNivel(xpTotal);
    const cargoAtual = obterCargoPorNivel(nivelAtual);

    const listaCargos = [
        { lvl: 1, titulo: 'Aprendiz', icone: '⛩️', desc: 'Primeiros passos na jornada de aprendizado.' },
        { lvl: 3, titulo: 'Samurai', icone: '⚔️', desc: 'Guerreiro dedicado do caminho do conhecimento.' },
        { lvl: 5, titulo: 'Ninja', icone: '🥷', desc: 'Mestre da agilidade e disciplina diária.' },
        { lvl: 10, titulo: 'Shogun', icone: '🏯', desc: 'Líder supremo dos estudos e revisões.' },
        { lvl: 20, titulo: 'Daimyo', icone: '👑', desc: 'Nobre guardião da fluência total.' },
        { lvl: 50, titulo: 'Kami', icone: '🐉', desc: 'Divindade lendária dos idiomas!' }
    ];

    modal.innerHTML = `
        <div style="background:var(--card-bg, #18181b); color:var(--text-main, #ffffff); border:2px solid #eab308; border-radius:20px; padding:1.5rem; max-width:480px; width:100%; box-shadow:0 10px 30px rgba(0,0,0,0.5); font-family:'Fredoka', sans-serif; position:relative; max-height:90vh; overflow-y:auto;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:0.8rem;">
                <h3 style="margin:0; color:#eab308; font-size:1.3rem; display:flex; align-items:center; gap:8px;">
                    <span>🏆</span> Níveis e Cargos do Perfil
                </h3>
                <button aria-label="Fechar níveis e cargos" onclick="fecharModalCargosNiveis()" style="background:none; border:none; color:var(--text-muted, #a1a1aa); font-size:1.5rem; cursor:pointer;">✕</button>
            </div>

            <div style="background:rgba(234,179,8,0.1); border:1px solid #eab308; border-radius:14px; padding:1rem; text-align:center; margin-bottom:1.2rem;">
                <div style="font-size:2.2rem; margin-bottom:4px;">${cargoAtual.icone}</div>
                <div style="font-size:1.2rem; font-weight:700; color:#eab308;">Nível ${nivelAtual} • ${cargoAtual.titulo}</div>
                <div style="font-size:0.9rem; color:var(--text-muted, #a1a1aa); margin-top:4px;">${xpTotal} XP Acumulados no Total</div>
            </div>

            <h4 style="margin:0 0 0.8rem 0; font-size:1rem; color:var(--text-main, #ffffff);">Progressão de Cargos:</h4>
            <div style="display:flex; flex-direction:column; gap:0.6rem;">
                ${listaCargos.map(c => {
                    const alcancado = nivelAtual >= c.lvl;
                    return `
                        <div style="display:flex; align-items:center; gap:12px; padding:10px 14px; background:${alcancado ? 'rgba(234,179,8,0.12)' : 'rgba(255,255,255,0.03)'}; border:1px solid ${alcancado ? '#eab308' : 'rgba(255,255,255,0.08)'}; border-radius:12px; opacity:${alcancado ? '1' : '0.6'};">
                            <span style="font-size:1.6rem;">${c.icone}</span>
                            <div style="flex:1;">
                                <div style="font-weight:700; font-size:0.95rem; color:${alcancado ? '#eab308' : 'var(--text-main, #ffffff)'};">
                                    Nível ${c.lvl}+ • ${c.titulo} ${alcancado ? '✅' : '🔒'}
                                </div>
                                <div style="font-size:0.8rem; color:var(--text-muted, #a1a1aa); line-height:1.2;">${c.desc}</div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;

    if (typeof abrirModalAcessivel === 'function') abrirModalAcessivel(modal, document.activeElement, 'button');
    else modal.style.display = 'flex';
}

function fecharModalCargosNiveis() {
    const modal = document.getElementById('modal-cargos-niveis');
    if (typeof fecharModalAcessivel === 'function') fecharModalAcessivel(modal);
    else if (modal) modal.style.display = 'none';
}

function adicionarXP(pontos, motivo = '') {
    const p = parseInt(pontos, 10) || 0;
    if (p <= 0) return;

    const xpAntigo = obterXPAtual();

    const xpNovo = xpAntigo + p;
    definirXPAtual(xpNovo);

    if (typeof mostrarToast === 'function') {
        const desc = motivo ? ` (${motivo})` : '';
        mostrarToast(`⚡ <strong>+${p} XP</strong>${desc}`);
    }

    const checagem = verificarSubidaNivel(xpAntigo, xpNovo);
    if (checagem.subiu) {
        const novoCargo = obterCargoPorNivel(checagem.lvlNovo);
        const cargoAntigo = obterCargoPorNivel(checagem.lvlAntigo);
        let msgCargo = '';
        if (novoCargo.titulo !== cargoAntigo.titulo) {
            msgCargo = `<br>🔰 Novo Cargo Desbloqueado: <strong>${novoCargo.icone} ${novoCargo.titulo}</strong>!`;
        }
        if (typeof playBeep === 'function') playBeep('success');
        if (typeof mostrarToast === 'function') {
            mostrarToast(`🎉 <strong>LEVEL UP!</strong> Você alcançou o <strong>Nível ${checagem.lvlNovo} • ${novoCargo.titulo}</strong>!${msgCargo}`);
        }
        if (typeof dispararConfeti === 'function') {
            dispararConfeti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
        }
    }

    atualizarHeaderXP();

    if (typeof checarConquistasGerais === 'function') {
        checarConquistasGerais();
    }
    if (typeof salvarSilenciosamenteNaNuvem === 'function') {
        salvarSilenciosamenteNaNuvem();
    }
}

function removerXP(pontos, motivo = '') {
    const p = parseInt(pontos, 10) || 0;
    if (p <= 0) return;

    const xpAntigo = obterXPAtual();

    const xpNovo = Math.max(0, xpAntigo - p);
    definirXPAtual(xpNovo);

    if (typeof mostrarToast === 'function') {
        const desc = motivo ? ` (${motivo})` : '';
        mostrarToast(`🔻 <strong>-${p} XP</strong>${desc}`);
    }

    atualizarHeaderXP();

    if (typeof salvarSilenciosamenteNaNuvem === 'function') {
        salvarSilenciosamenteNaNuvem();
    }
}

function getTodayDateString() {
    if (typeof obterDataLocalDashboard === 'function') return obterDataLocalDashboard();
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const dia = String(hoje.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
}

function getYesterdayDateString() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    if (typeof obterDataLocalDashboard === 'function') return obterDataLocalDashboard(d);
    const ano = d.getFullYear();
    const mes = String(d.getMonth() + 1).padStart(2, '0');
    const dia = String(d.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
}

function registrarAtividadeDiaria() {
    const hoje = getTodayDateString();
    let streakData = { count: 0, lastActiveDate: null };
    try {
        const saved = localStorage.getItem('ja_streak_data');
        if (saved) streakData = JSON.parse(saved);
    } catch (e) { }
    if (streakData.lastActiveDate === hoje) {
        registrarHistoricoAtividade();
        return;
    }
    const ontem = getYesterdayDateString();
    if (streakData.lastActiveDate === ontem) {
        streakData.count = (streakData.count || 0) + 1;
    } else {
        streakData.count = 1;
    }
    streakData.lastActiveDate = hoje;
    localStorage.setItem('ja_streak_data', JSON.stringify(streakData));
    if (typeof atualizarHeaderStreak === 'function') atualizarHeaderStreak();
    registrarHistoricoAtividade();
}

function registrarHistoricoAtividade() {
    const hoje = getTodayDateString();
    let historico = {};
    try {
        const saved = localStorage.getItem('ja_activity_history');
        if (saved) historico = JSON.parse(saved);
    } catch (e) { historico = {}; }
    if (typeof registrarAtividadeDashboard === 'function') registrarAtividadeDashboard(hoje, 1);
    historico[hoje] = (historico[hoje] || 0) + 1;
    localStorage.setItem('ja_activity_history', JSON.stringify(historico));
    if (typeof renderizarHeatmapEstudo === 'function') renderizarHeatmapEstudo();
}

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.calcularNivel = calcularNivel;
    window.obterCargoPorNivel = obterCargoPorNivel;
    window.verificarSubidaNivel = verificarSubidaNivel;
    window.obterXPAtual = obterXPAtual;
    window.atualizarHeaderXP = atualizarHeaderXP;
    window.abrirModalNiveisECargos = abrirModalNiveisECargos;
    window.fecharModalCargosNiveis = fecharModalCargosNiveis;
    window.adicionarXP = adicionarXP;
    window.removerXP = removerXP;
    window.getTodayDateString = getTodayDateString;
    window.getYesterdayDateString = getYesterdayDateString;
    window.registrarAtividadeDiaria = registrarAtividadeDiaria;
    window.registrarHistoricoAtividade = registrarHistoricoAtividade;
}
