// ======================================
// MÓDULO GAME - XP HÍBRIDO, NÍVEIS E CARGOS DO PERFIL
// ======================================

const CARGOS_POR_IDIOMA = {
    japanese: [{minLvl:50,titulo:'Kami',icone:'🐉'},{minLvl:20,titulo:'Daimyo',icone:'👑'},{minLvl:10,titulo:'Shogun',icone:'🏯'},{minLvl:5,titulo:'Ninja',icone:'🥷'},{minLvl:3,titulo:'Samurai',icone:'⚔️'},{minLvl:1,titulo:'Aprendiz',icone:'⛩️'}],
    english: [{minLvl:50,titulo:'Titan',icone:'⚡'},{minLvl:20,titulo:'Legend',icone:'🦅'},{minLvl:10,titulo:'Master',icone:'🎩'},{minLvl:5,titulo:'Pioneer',icone:'🚀'},{minLvl:3,titulo:'Explorer',icone:'🧭'},{minLvl:1,titulo:'Rookie',icone:'🗽'}],
    spanish: [{minLvl:50,titulo:'Leyenda',icone:'🔥'},{minLvl:20,titulo:'Matador',icone:'🐂'},{minLvl:10,titulo:'Maestro',icone:'🎭'},{minLvl:5,titulo:'Conquistador',icone:'🏰'},{minLvl:3,titulo:'Hidalgo',icone:'🗡️'},{minLvl:1,titulo:'Novato',icone:'🌾'}],
    russian: [{minLvl:50,titulo:'Lenda',icone:'🐻'},{minLvl:20,titulo:'Tsar',icone:'👑'},{minLvl:10,titulo:'Voivoda',icone:'⚔️'},{minLvl:5,titulo:'Boyar',icone:'🏰'},{minLvl:3,titulo:'Bogatyr',icone:'🛡️'},{minLvl:1,titulo:'Uchenik',icone:'📖'}],
    italian: [{minLvl:50,titulo:'Imperatore',icone:'🦅'},{minLvl:20,titulo:'Rinascimentale',icone:'🎨'},{minLvl:10,titulo:'Console',icone:'📜'},{minLvl:5,titulo:'Cavaliere',icone:'⚔️'},{minLvl:3,titulo:'Gladiatore',icone:'🏛️'},{minLvl:1,titulo:'Novizio',icone:'🍕'}],
    global: [{minLvl:250,titulo:'Mestre dos Idiomas',icone:'🌟'},{minLvl:200,titulo:'Poliglota',icone:'👑'},{minLvl:150,titulo:'Quadrilíngue',icone:'🏛️'},{minLvl:100,titulo:'Trilíngue',icone:'🌍'},{minLvl:50,titulo:'Bilíngue',icone:'📚'},{minLvl:25,titulo:'Explorador Cultural',icone:'🧭'},{minLvl:10,titulo:'Aprendiz de Idiomas',icone:'📖'},{minLvl:1,titulo:'Iniciante',icone:'🌱'}]
};

const ABAS_MODAL_CARGOS = [
    { id: 'global', nome: 'Global', icone: '🌐' },
    { id: 'japanese', nome: 'Japonês', icone: '🇯🇵' },
    { id: 'english', nome: 'Inglês', icone: '🇺🇸' },
    { id: 'spanish', nome: 'Espanhol', icone: '🇪🇸' },
    { id: 'russian', nome: 'Russo', icone: '🇷🇺' },
    { id: 'italian', nome: 'Italiano', icone: '🇮🇹' }
];

function normalizarIdiomaCargo(idioma) {
    const lang = String(idioma || '').toLowerCase().trim();
    if (lang.includes('jap') || lang === 'ja-jp' || lang === 'ja') return 'japanese';
    if (lang.includes('ing') || lang.includes('eng') || lang === 'en-us' || lang === 'en') return 'english';
    if (lang.includes('esp') || lang.includes('spa') || lang === 'es-es' || lang === 'es') return 'spanish';
    if (lang.includes('rus') || lang === 'ru-ru' || lang === 'ru') return 'russian';
    if (lang.includes('ita') || lang === 'it-it' || lang === 'it') return 'italian';
    return 'global';
}

function obterCargoPorNivel(nivel, idioma = 'japanese') {
    const lvl = parseInt(nivel, 10) || 1, chave = normalizarIdiomaCargo(idioma), lista = CARGOS_POR_IDIOMA[chave] || CARGOS_POR_IDIOMA.global;
    for (const cargo of lista) if (lvl >= cargo.minLvl) return cargo;
    return lista[lista.length - 1];
}

function obterIdiomaPaginaAtual() {
    if (typeof document !== 'undefined' && document.body) {
        const body = document.body;
        const lang = (body.dataset && body.dataset.lang) || body.getAttribute('data-lang') || '';
        const mode = (body.dataset && body.dataset.mode) || body.getAttribute('data-mode') || '';
        if (mode === 'dashboard' || lang === 'all') return 'global';
        const chave = normalizarIdiomaCargo(lang || mode);
        if (chave !== 'global') return chave;
    }
    if (typeof getCurrentLanguageCode === 'function') {
        const cod = getCurrentLanguageCode();
        if (cod) return normalizarIdiomaCargo(cod);
    }
    if (typeof window !== 'undefined' && window.location && window.location.pathname) {
        const path = window.location.pathname.toLowerCase();
        if (path.includes('/en-us/') || path.includes('ingles')) return 'english';
        if (path.includes('/es-es/') || path.includes('espanhol')) return 'spanish';
        if (path.includes('/ru-ru/') || path.includes('russo')) return 'russian';
        if (path.includes('/it-it/') || path.includes('italiano')) return 'italian';
        if (path.includes('/ja-jp/') || path.includes('japones') || path.includes('hiragana') || path.includes('katakana') || path.includes('kanji')) return 'japanese';
        if (path.includes('meu-progresso') || path.includes('hub_idiomas') || path.endsWith('/index.html') || path.endsWith('/')) return 'global';
    }
    return 'japanese';
}

function calcularNivel(xpTotal) { return Math.floor((parseInt(xpTotal, 10) || 0) / 100) + 1; }
function verificarSubidaNivel(xpAntigo, xpNovo) { const lvlAntigo = calcularNivel(xpAntigo), lvlNovo = calcularNivel(xpNovo); return { subiu: lvlNovo > lvlAntigo, lvlAntigo, lvlNovo }; }

function obterXPAtual() {
    if (typeof AppState !== 'undefined' && AppState && AppState.runtime && AppState.runtime.initialized) {
        const xp = Number(AppState.user && AppState.user.xp);
        if (Number.isFinite(xp)) return Math.max(0, xp);
    }
    try {
        const raw = localStorage.getItem('ja_user_xp');
        if (raw !== null) return Math.max(0, parseInt(raw, 10) || 0);
        return Math.max(0, parseInt((JSON.parse(localStorage.getItem('ja_progresso_global')) || {}).xp, 10) || 0);
    } catch (e) { return 0; }
}

function definirXPAtual(xp) {
    const v = Math.max(0, parseInt(xp, 10) || 0);
    if (typeof AppState !== 'undefined' && AppState && typeof AppState.setXP === 'function') return AppState.setXP(v);
    if (typeof localStorage !== 'undefined') localStorage.setItem('ja_user_xp', v.toString());
    return v;
}

function obterXPPorIdioma() {
    const padrao = { japanese: 0, english: 0, spanish: 0, russian: 0, italian: 0 };
    if (typeof localStorage === 'undefined') return padrao;
    try {
        const salvo = localStorage.getItem('ja_xp_per_language');
        if (salvo) {
            const p = JSON.parse(salvo);
            if (p && typeof p === 'object') {
                return {
                    japanese: Math.max(0, parseInt(p.japanese, 10) || 0),
                    english: Math.max(0, parseInt(p.english, 10) || 0),
                    spanish: Math.max(0, parseInt(p.spanish, 10) || 0),
                    russian: Math.max(0, parseInt(p.russian, 10) || 0),
                    italian: Math.max(0, parseInt(p.italian, 10) || 0)
                };
            }
        }
        const g = obterXPAtual();
        if (g > 0) { padrao.japanese = g; localStorage.setItem('ja_xp_per_language', JSON.stringify(padrao)); }
    } catch (e) { }
    return padrao;
}

function salvarXPPorIdioma(mapaXP) {
    if (typeof localStorage === 'undefined' || !mapaXP) return;
    try { localStorage.setItem('ja_xp_per_language', JSON.stringify(mapaXP)); } catch (e) { }
}

function obterTodosXPsPorIdioma() {
    return obterXPPorIdioma();
}

function definirTodosXPsPorIdioma(mapaXP) {
    if (!mapaXP || typeof mapaXP !== 'object') return;
    salvarXPPorIdioma(mapaXP);
}

function obterXPDoIdioma(idioma) {
    const chave = normalizarIdiomaCargo(idioma || obterIdiomaPaginaAtual());
    if (chave === 'global') return obterXPAtual();
    return (obterXPPorIdioma())[chave] || 0;
}
const obterXPLocalIdioma = obterXPDoIdioma;

function atualizarHeaderXP() {
    const container = document.getElementById('xp-profile-widget-container');
    if (!container) return;
    const idioma = obterIdiomaPaginaAtual(), xp = obterXPDoIdioma(idioma), nivel = calcularNivel(xp), cargo = obterCargoPorNivel(nivel, idioma);

    container.innerHTML = `
        <div class="xp-profile-widget" onclick="abrirModalNiveisECargos('${idioma}')" title="Nível ${nivel} • ${cargo.titulo} (${xp} XP) - Ver todos os Cargos">
            <div class="xp-widget-top-row">
                <div class="xp-rank-info">
                    <span class="xp-rank-icon">${cargo.icone}</span>
                    <span class="xp-rank-text">Nível ${nivel} • ${cargo.titulo}</span>
                </div>
                <span class="xp-val-text">${xp} XP</span>
            </div>
            <div class="xp-bar-bg"><div class="xp-bar-fill" style="width:${xp % 100}%;"></div></div>
        </div>
    `;
}

function renderizarConteudoAbaCargos(chaveAba) {
    const chave = normalizarIdiomaCargo(chaveAba), xp = obterXPDoIdioma(chave), nivel = calcularNivel(xp), cargoAtual = obterCargoPorNivel(nivel, chave);
    const lista = (CARGOS_POR_IDIOMA[chave] || CARGOS_POR_IDIOMA.global).slice().sort((a, b) => a.minLvl - b.minLvl);
    const nomes = { global: 'Global', japanese: 'Japonês', english: 'Inglês', spanish: 'Espanhol', russian: 'Russo', italian: 'Italiano' };
    const nome = nomes[chave] || 'Geral', proximo = lista.find(c => c.minLvl > nivel);

    const abasHtml = ABAS_MODAL_CARGOS.map(aba => {
        const ativo = aba.id === chave;
        return `<button type="button" onclick="trocarAbaModalCargos('${aba.id}')" style="display:flex;align-items:center;gap:4px;padding:6px 10px;border-radius:10px;border:1px solid ${ativo ? '#eab308' : 'rgba(255,255,255,0.1)'};background:${ativo ? 'rgba(234,179,8,0.2)' : 'rgba(255,255,255,0.04)'};color:${ativo ? '#eab308' : 'var(--text-main,#fff)'};font-weight:${ativo ? '700' : '500'};font-size:0.8rem;cursor:pointer;white-space:nowrap;"><span>${aba.icone}</span> <span>${aba.nome}</span></button>`;
    }).join('');

    const itensHtml = lista.map(c => {
        const alcancado = nivel >= c.minLvl, ehProximo = proximo && proximo.minLvl === c.minLvl;
        const meta = (c.minLvl - 1) * 100, faltam = Math.max(0, meta - xp), pct = Math.min(100, Math.max(0, Math.round((xp / (meta || 1)) * 100)));
        const badge = alcancado
            ? '<span style="background:rgba(34,197,94,0.2);color:#22c55e;border:1px solid #22c55e;padding:2px 7px;border-radius:10px;font-size:0.72rem;font-weight:700;">✓ Conquistado</span>'
            : (ehProximo ? `<span style="background:rgba(234,179,8,0.2);color:#eab308;border:1px solid #eab308;padding:2px 7px;border-radius:10px;font-size:0.72rem;font-weight:700;">⚡ Próximo (- ${faltam} XP)</span>` : `<span style="background:rgba(255,255,255,0.06);color:#a1a1aa;padding:2px 7px;border-radius:10px;font-size:0.72rem;">🔒 Nível ${c.minLvl}</span>`);
        return `
            <div style="padding:8px 10px;background:${alcancado ? 'rgba(34,197,94,0.06)' : (ehProximo ? 'rgba(234,179,8,0.08)' : 'rgba(255,255,255,0.02)')};border:1px solid ${alcancado ? 'rgba(34,197,94,0.3)' : (ehProximo ? '#eab308' : 'rgba(255,255,255,0.06)')};border-radius:10px;opacity:${alcancado || ehProximo ? '1' : '0.6'};">
                <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;">
                    <div style="display:flex;align-items:center;gap:6px;">
                        <span style="font-size:1.3rem;">${c.icone}</span>
                        <div>
                            <div style="font-weight:700;font-size:0.85rem;color:${alcancado ? '#22c55e' : (ehProximo ? '#eab308' : 'var(--text-main,#fff)')};">${c.titulo}</div>
                            <div style="font-size:0.72rem;color:var(--text-muted,#a1a1aa);">Nível ${c.minLvl}+ (${meta} XP)</div>
                        </div>
                    </div>
                    <div>${badge}</div>
                </div>
                ${ehProximo ? `<div style="height:4px;background:rgba(255,255,255,0.1);border-radius:2px;overflow:hidden;margin-top:5px;"><div style="height:100%;width:${pct}%;background:#eab308;"></div></div>` : ''}
            </div>
        `;
    }).join('');

    return `
        <div style="display:flex;gap:5px;overflow-x:auto;padding-bottom:8px;margin-bottom:10px;scrollbar-width:thin;">${abasHtml}</div>
        <div style="background:rgba(234,179,8,0.1);border:1px solid #eab308;border-radius:12px;padding:0.75rem;text-align:center;margin-bottom:0.8rem;">
            <div style="font-size:1.8rem;line-height:1;margin-bottom:2px;">${cargoAtual.icone}</div>
            <div style="font-size:1.1rem;font-weight:700;color:#eab308;">Nível ${nivel} • ${cargoAtual.titulo}</div>
            <div style="font-size:0.8rem;color:var(--text-muted,#a1a1aa);margin-top:2px;">${xp} XP no ${nome}</div>
        </div>
        <h4 style="margin:0 0 0.5rem 0;font-size:0.88rem;color:var(--text-main,#fff);">Patentes de ${nome}:</h4>
        <div style="display:flex;flex-direction:column;gap:0.4rem;">${itensHtml}</div>
    `;
}

function trocarAbaModalCargos(idioma) {
    const container = document.getElementById('modal-cargos-conteudo-dinamico');
    if (container) container.innerHTML = renderizarConteudoAbaCargos(idioma);
}

function abrirModalNiveisECargos(idiomaInicial = null) {
    let modal = document.getElementById('modal-cargos-niveis');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal-cargos-niveis';
        modal.className = 'modal-overlay';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-label', 'Níveis e cargos do perfil');
        modal.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.75);display:flex;align-items:center;justify-content:center;z-index:99999;backdrop-filter:blur(4px);padding:1rem;';
        modal.onclick = function(e) { if (e.target === this) fecharModalCargosNiveis(); };
        document.body.appendChild(modal);
    }
    const idiomaAtivo = normalizarIdiomaCargo(idiomaInicial || obterIdiomaPaginaAtual());

    modal.innerHTML = `
        <div style="background:var(--card-bg,#18181b);color:var(--text-main,#fff);border:2px solid #eab308;border-radius:18px;padding:1.2rem;max-width:460px;width:100%;box-shadow:0 10px 30px rgba(0,0,0,0.5);font-family:'Fredoka',sans-serif;position:relative;max-height:90vh;overflow-y:auto;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.7rem;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:0.5rem;">
                <h3 style="margin:0;color:#eab308;font-size:1.15rem;display:flex;align-items:center;gap:6px;"><span>🏆</span> Níveis e Cargos</h3>
                <button aria-label="Fechar níveis e cargos" onclick="fecharModalCargosNiveis()" style="background:none;border:none;color:var(--text-muted,#a1a1aa);font-size:1.3rem;cursor:pointer;">✕</button>
            </div>
            <div id="modal-cargos-conteudo-dinamico">${renderizarConteudoAbaCargos(idiomaAtivo)}</div>
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

function adicionarXP(pontos, motivo = '', idioma = null) {
    const p = parseInt(pontos, 10) || 0;
    if (p <= 0) return;

    let motivoTexto = String(motivo || ''), idiomaAlvo = idioma;
    const possivel = normalizarIdiomaCargo(motivoTexto);
    if (!idioma && possivel !== 'global' && ['japanese', 'english', 'spanish', 'russian', 'italian'].includes(possivel)) {
        idiomaAlvo = motivoTexto;
        motivoTexto = '';
    }
    if (!idiomaAlvo) idiomaAlvo = obterIdiomaPaginaAtual();
    const chave = normalizarIdiomaCargo(idiomaAlvo), chaveValida = ['japanese', 'english', 'spanish', 'russian', 'italian'].includes(chave) ? chave : 'japanese';

    const xpAntigoGlobal = obterXPAtual(), xpNovoGlobal = xpAntigoGlobal + p;
    definirXPAtual(xpNovoGlobal);

    const mapa = obterXPPorIdioma(), xpAntigoIdioma = mapa[chaveValida] || 0, xpNovoIdioma = xpAntigoIdioma + p;
    mapa[chaveValida] = xpNovoIdioma;
    salvarXPPorIdioma(mapa);

    if (typeof mostrarToast === 'function') {
        mostrarToast(`⚡ <strong>+${p} XP</strong>${motivoTexto ? ` (${motivoTexto})` : ''}`);
    }

    const checagem = verificarSubidaNivel(xpAntigoIdioma, xpNovoIdioma);
    if (checagem.subiu) {
        const novoCargo = obterCargoPorNivel(checagem.lvlNovo, chaveValida), cargoAntigo = obterCargoPorNivel(checagem.lvlAntigo, chaveValida);
        const msgCargo = (novoCargo.titulo !== cargoAntigo.titulo) ? `<br>🔰 Novo Cargo Desbloqueado: <strong>${novoCargo.icone} ${novoCargo.titulo}</strong>!` : '';
        if (typeof playBeep === 'function') playBeep('success');
        if (typeof mostrarToast === 'function') {
            mostrarToast(`🎉 <strong>LEVEL UP!</strong> Você alcançou o <strong>Nível ${checagem.lvlNovo} • ${novoCargo.titulo}</strong>!${msgCargo}`);
        }
        if (typeof dispararConfeti === 'function') dispararConfeti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
    }

    atualizarHeaderXP();
    if (typeof checarConquistasGerais === 'function') checarConquistasGerais();
    if (typeof salvarSilenciosamenteNaNuvem === 'function') salvarSilenciosamenteNaNuvem();
}

function removerXP(pontos, motivo = '', idioma = null) {
    const p = parseInt(pontos, 10) || 0;
    if (p <= 0) return;

    let motivoTexto = String(motivo || ''), idiomaAlvo = idioma;
    const possivel = normalizarIdiomaCargo(motivoTexto);
    if (!idioma && possivel !== 'global' && ['japanese', 'english', 'spanish', 'russian', 'italian'].includes(possivel)) {
        idiomaAlvo = motivoTexto;
        motivoTexto = '';
    }
    if (!idiomaAlvo) idiomaAlvo = obterIdiomaPaginaAtual();
    const chave = normalizarIdiomaCargo(idiomaAlvo), chaveValida = ['japanese', 'english', 'spanish', 'russian', 'italian'].includes(chave) ? chave : 'japanese';

    const xpAntigoGlobal = obterXPAtual(), xpNovoGlobal = Math.max(0, xpAntigoGlobal - p);
    definirXPAtual(xpNovoGlobal);

    const mapa = obterXPPorIdioma();
    mapa[chaveValida] = Math.max(0, (mapa[chaveValida] || 0) - p);
    salvarXPPorIdioma(mapa);

    if (typeof mostrarToast === 'function') {
        mostrarToast(`🔻 <strong>-${p} XP</strong>${motivoTexto ? ` (${motivoTexto})` : ''}`);
    }

    atualizarHeaderXP();
    if (typeof salvarSilenciosamenteNaNuvem === 'function') salvarSilenciosamenteNaNuvem();
}

function getTodayDateString() {
    if (typeof obterDataLocalDashboard === 'function') return obterDataLocalDashboard();
    const h = new Date(); return `${h.getFullYear()}-${String(h.getMonth() + 1).padStart(2, '0')}-${String(h.getDate()).padStart(2, '0')}`;
}

function getYesterdayDateString() {
    const d = new Date(); d.setDate(d.getDate() - 1);
    if (typeof obterDataLocalDashboard === 'function') return obterDataLocalDashboard(d);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function registrarAtividadeDiaria() {
    const hoje = getTodayDateString();
    let s = { count: 0, lastActiveDate: null };
    try { const saved = localStorage.getItem('ja_streak_data'); if (saved) s = JSON.parse(saved); } catch (e) { }
    if (s.lastActiveDate === hoje) { registrarHistoricoAtividade(); return; }
    s.count = (s.lastActiveDate === getYesterdayDateString()) ? (s.count || 0) + 1 : 1;
    s.lastActiveDate = hoje;
    localStorage.setItem('ja_streak_data', JSON.stringify(s));
    if (typeof atualizarHeaderStreak === 'function') atualizarHeaderStreak();
    registrarHistoricoAtividade();
}

function registrarHistoricoAtividade() {
    const hoje = getTodayDateString();
    let h = {};
    try { const saved = localStorage.getItem('ja_activity_history'); if (saved) h = JSON.parse(saved); } catch (e) { h = {}; }
    if (typeof registrarAtividadeDashboard === 'function') registrarAtividadeDashboard(hoje, 1);
    h[hoje] = (h[hoje] || 0) + 1;
    localStorage.setItem('ja_activity_history', JSON.stringify(h));
    if (typeof renderizarHeatmapEstudo === 'function') renderizarHeatmapEstudo();
}

if (typeof window !== 'undefined') {
    window.CARGOS_POR_IDIOMA = CARGOS_POR_IDIOMA;
    window.ABAS_MODAL_CARGOS = ABAS_MODAL_CARGOS;
    window.normalizarIdiomaCargo = normalizarIdiomaCargo;
    window.obterIdiomaPaginaAtual = obterIdiomaPaginaAtual;
    window.obterXPPorIdioma = obterXPPorIdioma;
    window.salvarXPPorIdioma = salvarXPPorIdioma;
    window.obterTodosXPsPorIdioma = obterTodosXPsPorIdioma;
    window.definirTodosXPsPorIdioma = definirTodosXPsPorIdioma;
    window.obterXPDoIdioma = obterXPDoIdioma;
    window.obterXPLocalIdioma = obterXPLocalIdioma;
    window.calcularNivel = calcularNivel;
    window.obterCargoPorNivel = obterCargoPorNivel;
    window.verificarSubidaNivel = verificarSubidaNivel;
    window.obterXPAtual = obterXPAtual;
    window.definirXPAtual = definirXPAtual;
    window.atualizarHeaderXP = atualizarHeaderXP;
    window.renderizarConteudoAbaCargos = renderizarConteudoAbaCargos;
    window.trocarAbaModalCargos = trocarAbaModalCargos;
    window.abrirModalNiveisECargos = abrirModalNiveisECargos;
    window.fecharModalCargosNiveis = fecharModalCargosNiveis;
    window.adicionarXP = adicionarXP;
    window.removerXP = removerXP;
    window.getTodayDateString = getTodayDateString;
    window.getYesterdayDateString = getYesterdayDateString;
    window.registrarAtividadeDiaria = registrarAtividadeDiaria;
    window.registrarHistoricoAtividade = registrarHistoricoAtividade;
}
