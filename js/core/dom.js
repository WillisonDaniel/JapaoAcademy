// ======================================
// MÓDULO CORE - MANIPULAÇÃO DE DOM E MODAIS
// ======================================

function renderizarHeatmapEstudo(containerId = 'heatmap-container') {
    const container = document.getElementById(containerId);
    if (!container) return;
    let historico = {};
    try { historico = JSON.parse(localStorage.getItem('ja_activity_history')) || {}; } catch (e) { }
    const hoje = new Date();
    let diasHtml = '';
    for (let i = 29; i >= 0; i--) {
        const d = new Date(hoje);
        d.setDate(d.getDate() - i);
        const dataStr = d.toISOString().split('T')[0];
        const qtd = historico[dataStr] || 0;
        let nivelClasse = 'lvl-0';
        if (qtd >= 8) nivelClasse = 'lvl-3';
        else if (qtd >= 4) nivelClasse = 'lvl-2';
        else if (qtd >= 1) nivelClasse = 'lvl-1';
        const dataFormatada = d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
        diasHtml += `<div class="heatmap-day ${nivelClasse}" title="${dataFormatada}: ${qtd} atividade(s)"></div>`;
    }
    container.innerHTML = `
        <div class="heatmap-wrapper">
            <span class="heatmap-title">📊 Intensidade de Estudo (Últimos 30 Dias)</span>
            <div class="heatmap-grid">${diasHtml}</div>
        </div>
    `;
}

function garantirElementosCabecalhoEModal() {
    const header = document.querySelector('header');
    if (header) {
        let group = header.querySelector('.header-actions-group');
        if (!group) {
            group = document.createElement('div');
            group.className = 'header-actions-group';
            header.appendChild(group);
        }
        // 0. Widget de XP e Nível do Perfil
        if (!document.getElementById('xp-profile-widget-container')) {
            const xpDiv = document.createElement('div');
            xpDiv.id = 'xp-profile-widget-container';
            group.appendChild(xpDiv);
        }
        // 1. Badge da Ofensiva
        if (!document.getElementById('streak-badge-header')) {
            const streakBtn = document.createElement('button');
            streakBtn.id = 'streak-badge-header';
            streakBtn.className = 'streak-badge';
            streakBtn.title = 'Clique para ver o histórico de estudo';
            streakBtn.innerHTML = `🔥 <span id="streak-count">0</span> Dias`;
            streakBtn.onclick = typeof abrirModalOfensiva === 'function' ? abrirModalOfensiva : null;
            group.appendChild(streakBtn);
        }
        // 2. Botão de Conquistas
        if (!document.getElementById('btn-conquistas-hdr')) {
            const btnAc = document.createElement('button');
            btnAc.id = 'btn-conquistas-hdr';
            btnAc.className = 'btn-conquistas-header';
            btnAc.title = 'Mural de Conquistas';
            btnAc.innerHTML = `🏆 Conquistas`;
            btnAc.onclick = typeof abrirModalConquistas === 'function' ? abrirModalConquistas : null;
            group.appendChild(btnAc);
        }
        // 3. Botão de Dicionário & Glossário (Redireciona para o Dicionário de Japonês ou Inglês)
        let btnDict = document.getElementById('btn-dicionario-hdr');
        if (!btnDict) {
            btnDict = document.createElement('button');
            btnDict.id = 'btn-dicionario-hdr';
            btnDict.className = 'btn-dicionario-header';
            btnDict.title = 'Dicionário & Glossário';
            btnDict.innerHTML = `📖 Dicionário`;
            group.appendChild(btnDict);
        }
        btnDict.onclick = typeof redirecionarParaDicionario === 'function' ? redirecionarParaDicionario : null;

        // 4. Botão de Opções / Configurações (em todo o site)
        let btnConfig = document.getElementById('btn-config-curso');
        if (!btnConfig) {
            btnConfig = document.createElement('button');
            btnConfig.id = 'btn-config-curso';
            btnConfig.title = 'Opções e Configurações';
            btnConfig.innerHTML = `⚙️ Opções`;
            btnConfig.onclick = typeof abrirOpcoesCurso === 'function' ? abrirOpcoesCurso : null;
            group.appendChild(btnConfig);
        } else if (btnConfig.parentNode !== group) {
            group.appendChild(btnConfig);
        }
        // 5. Botão de Autenticação / Perfil Firebase
        let btnAuth = document.getElementById('btn-auth-hdr');
        if (!btnAuth) {
            btnAuth = document.createElement('button');
            btnAuth.id = 'btn-auth-hdr';
            btnAuth.className = 'btn-auth-header';
            group.appendChild(btnAuth);
        }
        const fb = typeof window !== 'undefined' ? window.jaFirebase : null;
        const user = fb && fb.auth ? fb.auth.currentUser : null;
        if (user) {
            const displayName = user.displayName || (user.email ? user.email.split('@')[0] : 'Estudante');
            btnAuth.title = `Conectado como ${user.email || displayName}`;
            btnAuth.innerHTML = `👤 ${displayName} <button type="button" class="btn-logout-secundario" onclick="event.stopPropagation(); if(typeof fazerLogout==='function') fazerLogout();" style="margin-left:8px; background:transparent; border:1px solid rgba(239, 68, 68, 0.4); color:#ef4444; border-radius:12px; padding:2px 8px; font-size:0.78rem; cursor:pointer; font-weight:600; transition:all 0.2s;" title="Sair da Conta" onmouseover="this.style.background='rgba(239, 68, 68, 0.12)'" onmouseout="this.style.background='transparent'">🚪 Sair</button>`;
            btnAuth.onclick = null;
        } else {
            btnAuth.title = 'Entrar ou Criar Conta';
            btnAuth.innerHTML = `🔐 Entrar / Cadastrar`;
            btnAuth.onclick = () => { if (typeof abrirModalAuth === 'function') abrirModalAuth('login'); };
        }
        // 6. Botão de Tema Escuro/Claro (em todo o site)
        let btnTema = header.querySelector('.theme-btn');
        if (!btnTema) {
            btnTema = document.createElement('button');
            btnTema.className = 'theme-btn';
            btnTema.title = 'Alternar Tema';
            btnTema.onclick = typeof toggleTheme === 'function' ? toggleTheme : null;
            btnTema.textContent = (localStorage.getItem('ja_theme') === 'dark') ? '☀️' : '🌙';
            group.appendChild(btnTema);
        } else if (btnTema.parentNode !== group) {
            group.appendChild(btnTema);
        }
        // Reordena para ficar padronizado em todas as paginas: [XP Widget] [Streak] [Conquistas] [Dicionário] [Opções] [Auth] [Tema]
        const elXp = document.getElementById('xp-profile-widget-container');
        const elStreak = document.getElementById('streak-badge-header');
        const elConq = document.getElementById('btn-conquistas-hdr');
        const elDict = document.getElementById('btn-dicionario-hdr');
        const elCfg = document.getElementById('btn-config-curso');
        const elAuth = document.getElementById('btn-auth-hdr');
        const elTema = header.querySelector('.theme-btn');
        if (elXp) group.appendChild(elXp);
        if (elStreak) group.appendChild(elStreak);
        if (elConq) group.appendChild(elConq);
        if (elDict) group.appendChild(elDict);
        if (elCfg) group.appendChild(elCfg);
        if (elAuth) group.appendChild(elAuth);
        if (elTema) group.appendChild(elTema);

        if (typeof atualizarHeaderXP === 'function') atualizarHeaderXP();
    }

    if (!document.getElementById('modal-ofensiva')) {
        const modalOfensivaDiv = document.createElement('div');
        modalOfensivaDiv.id = 'modal-ofensiva';
        modalOfensivaDiv.className = 'modal-overlay';
        modalOfensivaDiv.style.display = 'none';
        modalOfensivaDiv.onclick = function (e) { if (e.target === this && typeof fecharModalOfensiva === 'function') fecharModalOfensiva(); };
        modalOfensivaDiv.innerHTML = `
            <div class="modal-box modal-ofensiva-box">
                <div class="modal-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:0.8rem; margin-bottom:1rem;">
                    <h2 style="font-family:'Fredoka',sans-serif; color:var(--text-main); margin:0;">🔥 Calendário de Ofensiva</h2>
                    <button onclick="fecharModalOfensiva()" style="background:transparent; border:none; color:var(--text-muted); font-size:1.4rem; cursor:pointer; font-weight:bold;">✖</button>
                </div>
                <div style="text-align:center; margin-bottom: 1.2rem;">
                    <div style="font-size: 2.5rem; font-weight: bold; color: #fb923c;" id="modal-streak-display">🔥 0 Dias</div>
                    <p style="color: var(--text-muted); font-size: 0.9rem;">Estude diariamente para manter sua sequência ativa!</p>
                </div>
                <div id="heatmap-container-modal"></div>
                <button onclick="fecharModalOfensiva()" class="fechar-modal" style="margin-top:1rem;">Fechar</button>
            </div>
        `;
        document.body.appendChild(modalOfensivaDiv);
    }

    if (!document.getElementById('modal-auth')) {
        const modalAuthDiv = document.createElement('div');
        modalAuthDiv.id = 'modal-auth';
        modalAuthDiv.className = 'modal-overlay';
        modalAuthDiv.style.display = 'none';
        modalAuthDiv.onclick = typeof fecharModalAuthAoClicarFora === 'function' ? fecharModalAuthAoClicarFora : null;
        modalAuthDiv.innerHTML = `
            <div class="modal-box modal-auth-box">
                <div class="modal-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:0.8rem; margin-bottom:1rem;">
                    <h2 id="modal-auth-title" style="font-family:'Fredoka',sans-serif; color:var(--text-main); margin:0; font-size:1.3rem;">🔐 Autenticação Japão Academy</h2>
                    <button onclick="fecharModalAuth()" style="background:transparent; border:none; color:var(--text-muted); font-size:1.4rem; cursor:pointer; font-weight:bold;">✖</button>
                </div>
                <div class="auth-tabs-row" style="display:flex; gap:0.5rem; margin-bottom:1.2rem; border-bottom:1px solid var(--border-color); padding-bottom:0.6rem;">
                    <button class="auth-tab-btn active" id="tab-auth-login" onclick="alternarAbaAuth('login')">🔑 Fazer Login</button>
                    <button class="auth-tab-btn" id="tab-auth-cadastro" onclick="alternarAbaAuth('cadastro')">✨ Criar Conta</button>
                </div>
                <!-- FORM DE LOGIN -->
                <form id="form-auth-login" onsubmit="executarLoginEmail(event)" style="display:block;">
                    <div style="margin-bottom:1rem; text-align:left;">
                        <label style="display:block; font-size:0.85rem; font-weight:bold; margin-bottom:0.3rem; color:var(--text-main);">E-mail</label>
                        <input type="email" id="auth-login-email" class="auth-input" placeholder="seu@email.com" required style="width:100%; padding:0.75rem; border-radius:8px; border:1px solid var(--border-color); background:var(--bg-color); color:var(--text-main); font-size:0.95rem;">
                    </div>
                    <div style="margin-bottom:1.2rem; text-align:left;">
                        <label style="display:block; font-size:0.85rem; font-weight:bold; margin-bottom:0.3rem; color:var(--text-main);">Senha</label>
                        <input type="password" id="auth-login-password" class="auth-input" placeholder="••••••••" required style="width:100%; padding:0.75rem; border-radius:8px; border:1px solid var(--border-color); background:var(--bg-color); color:var(--text-main); font-size:0.95rem;">
                    </div>
                    <button type="submit" class="btn-auth-submit" style="width:100%; padding:0.8rem; border-radius:10px; border:none; background:var(--current-primary); color:#fff; font-weight:bold; font-size:1rem; cursor:pointer;">Entrar na Conta</button>
                </form>
                <!-- FORM DE CADASTRO -->
                <form id="form-auth-cadastro" onsubmit="executarCadastroEmail(event)" style="display:none;">
                    <div style="margin-bottom:1rem; text-align:left;">
                        <label style="display:block; font-size:0.85rem; font-weight:bold; margin-bottom:0.3rem; color:var(--text-main);">Nome</label>
                        <input type="text" id="auth-reg-name" class="auth-input" placeholder="Seu nome ou apelido" style="width:100%; padding:0.75rem; border-radius:8px; border:1px solid var(--border-color); background:var(--bg-color); color:var(--text-main); font-size:0.95rem;">
                    </div>
                    <div style="margin-bottom:1rem; text-align:left;">
                        <label style="display:block; font-size:0.85rem; font-weight:bold; margin-bottom:0.3rem; color:var(--text-main);">E-mail</label>
                        <input type="email" id="auth-reg-email" class="auth-input" placeholder="seu@email.com" required style="width:100%; padding:0.75rem; border-radius:8px; border:1px solid var(--border-color); background:var(--bg-color); color:var(--text-main); font-size:0.95rem;">
                    </div>
                    <div style="margin-bottom:1.2rem; text-align:left;">
                        <label style="display:block; font-size:0.85rem; font-weight:bold; margin-bottom:0.3rem; color:var(--text-main);">Senha</label>
                        <input type="password" id="auth-reg-password" class="auth-input" placeholder="Mínimo 6 caracteres" required minlength="6" style="width:100%; padding:0.75rem; border-radius:8px; border:1px solid var(--border-color); background:var(--bg-color); color:var(--text-main); font-size:0.95rem;">
                    </div>
                    <button type="submit" class="btn-auth-submit" style="width:100%; padding:0.8rem; border-radius:10px; border:none; background:#22c55e; color:#fff; font-weight:bold; font-size:1rem; cursor:pointer;">Criar Nova Conta</button>
                </form>
                <div style="margin: 1.2rem 0; font-size: 0.8rem; color: var(--text-muted); text-align: center;">
                    — ou continue com —
                </div>
                <button type="button" onclick="executarLoginGoogle()" style="width:100%; padding:0.75rem; border-radius:10px; border:1px solid var(--border-color); background:var(--bg-color); color:var(--text-main); font-weight:bold; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:0.6rem; transition: background 0.2s ease;">
                    <span style="font-size:1.1rem;">🔴</span> Entrar com o Google
                </button>
            </div>
        `;
        document.body.appendChild(modalAuthDiv);
    }

    if (!document.getElementById('modal-conquistas')) {
        const modalDiv = document.createElement('div');
        modalDiv.id = 'modal-conquistas';
        modalDiv.className = 'modal-overlay';
        modalDiv.style.display = 'none';
        modalDiv.innerHTML = `
            <div class="modal-box modal-conquistas-box">
                <div class="modal-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:0.8rem; margin-bottom:0.8rem;">
                    <h2 style="font-family:'Fredoka',sans-serif; color:var(--text-main); margin:0;">🏆 Mural de Conquistas</h2>
                    <button onclick="fecharModalConquistas()" style="background:transparent; border:none; color:var(--text-muted); font-size:1.4rem; cursor:pointer; font-weight:bold;">✖</button>
                </div>
                <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 0.8rem;">
                    Desbloqueie medalhas exclusivas completando suas metas diárias e lições!
                </p>
                <div id="grid-conquistas" class="grid-conquistas"></div>
                <button onclick="fecharModalConquistas()" class="fechar-modal">Fechar</button>
            </div>
        `;
        document.body.appendChild(modalDiv);
    }

    let modalOp = document.getElementById('modal-opcoes');
    if (!modalOp) {
        modalOp = document.createElement('div');
        modalOp.id = 'modal-opcoes';
        modalOp.className = 'modal-overlay';
        modalOp.style.display = 'none';
        document.body.appendChild(modalOp);
    }
    modalOp.onclick = function (e) { if (e.target === this && typeof fecharOpcoesCurso === 'function') fecharOpcoesCurso(); };

    const isEnglishMode = (document.body && document.body.getAttribute('data-lang') === 'english') || window.location.pathname.includes('en-US') || window.location.pathname.includes('ingles');

    const readingOptionsHtml = isEnglishMode ? '' : `
            <div class="modal-option" style="display:flex; flex-direction:column; align-items:flex-start; gap:8px; margin-bottom:1.2rem; font-weight:600;">
                <span style="font-size:0.95rem; color:var(--text-main);">Opções de Exibição de Leitura:</span>
                <label style="display:flex; align-items:center; gap:8px; cursor:pointer; font-size:0.9rem;">
                    <input type="checkbox" id="chk-opt-kanji" onchange="salvarOpcoesLeitura()" style="width: 18px; height: 18px; accent-color: #e63946; cursor: pointer;">
                    <span>Ativar Kanji</span>
                </label>
                <label style="display:flex; align-items:center; gap:8px; cursor:pointer; font-size:0.9rem;">
                    <input type="checkbox" id="chk-opt-kana" onchange="salvarOpcoesLeitura()" style="width: 18px; height: 18px; accent-color: #e63946; cursor: pointer;">
                    <span>Ativar Kana</span>
                </label>
                <label style="display:flex; align-items:center; gap:8px; cursor:pointer; font-size:0.9rem;">
                    <input type="checkbox" id="chk-opt-furigana" onchange="salvarOpcoesLeitura()" style="width: 18px; height: 18px; accent-color: #e63946; cursor: pointer;">
                    <span>Ativar Furigana</span>
                </label>
                <label style="display:flex; align-items:center; gap:8px; cursor:pointer; font-size:0.9rem;">
                    <input type="checkbox" id="chk-opt-romaji" onchange="salvarOpcoesLeitura()" style="width: 18px; height: 18px; accent-color: #e63946; cursor: pointer;">
                    <span>Ativar Romaji</span>
                </label>
            </div>
    `;

    modalOp.innerHTML = `
        <div class="modal-box">
            <h3 style="font-family:'Fredoka',sans-serif; color:var(--text-main); margin-bottom:1.2rem; border-bottom:1px solid var(--border-color); padding-bottom:0.5rem;">⚙️ Configurações do Curso</h3>
            <div class="modal-option" style="display:flex; flex-direction:column; align-items:flex-start; gap:6px; margin-bottom:1.2rem;">
                <span style="font-weight:600;">Seu Nome / Apelido (Para os diálogos):</span>
                <input type="text" id="input-nome-usuario" oninput="atualizarNomeUsuario(this.value)" placeholder="Ex: Carlos, Ana, Kenji..." style="width: 100%; padding: 0.6rem; border-radius: 8px; background: var(--bg-color); color: var(--text-main); border: 1px solid var(--border-color); font-weight: bold; outline: none;">
            </div>
            <div class="modal-option" style="display:flex; flex-direction:row; justify-content:space-between; align-items:center; margin-bottom:1.2rem; font-weight:600;">
                <span>Desbloquear Todos os Módulos</span>
                <input type="checkbox" id="check-desbloquear" onchange="alternarDesbloqueio(this.checked)" style="width: 20px; height: 20px; accent-color: #e63946; cursor: pointer;">
            </div>
            ${readingOptionsHtml}
            <div class="modal-option" style="display:flex; flex-direction:column; align-items:flex-start; gap:10px; margin-bottom:1.2rem; border-top:1px solid var(--border-color); padding-top:1rem;">
                <span style="font-weight:bold; font-size:0.95rem; color:var(--text-main);">☁️ Sincronização na Nuvem:</span>
                <button type="button" onclick="salvarProgressoNaNuvem()" style="width: 100%; padding: 0.65rem; background: var(--current-primary, #3b82f6); color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; display:flex; align-items:center; justify-content:center; gap:0.5rem;">
                    📤 Salvar Dados Locais na Nuvem
                </button>
                <button type="button" onclick="carregarProgressoDaNuvem()" style="width: 100%; padding: 0.65rem; background: rgba(59, 130, 246, 0.15); color: var(--current-primary, #3b82f6); border: 1px solid var(--current-primary, #3b82f6); border-radius: 8px; font-weight: bold; cursor: pointer; display:flex; align-items:center; justify-content:center; gap:0.5rem;">
                    📥 Baixar / Restaurar Dados da Nuvem
                </button>
            </div>
            <button onclick="resetarProgressoCurso()" style="width: 100%; padding: 0.6rem; background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid #ef4444; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 0.5rem;">Resetar Progresso</button>
            <button class="fechar-modal" onclick="fecharOpcoesCurso()" style="width: 100%; margin-top: 1rem; padding: 0.8rem; background: #e63946; color: white; border: none; border-radius: 10px; font-weight: bold; cursor: pointer;">Salvar e Fechar</button>
        </div>
    `;

    if (!document.getElementById('modal-dicionario')) {
        const modalDict = document.createElement('div');
        modalDict.id = 'modal-dicionario';
        modalDict.className = 'modal-overlay';
        modalDict.style.display = 'none';
        modalDict.onclick = function (e) { if (e.target === this && typeof fecharModalDicionario === 'function') fecharModalDicionario(); };
        modalDict.innerHTML = `
            <div class="modal-box modal-dict-box">
                <div class="modal-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:0.8rem; margin-bottom:1rem;">
                    <h2 style="font-family:'Fredoka',sans-serif; color:var(--text-main); margin:0;">📖 Dicionário & Glossário Universal</h2>
                    <button onclick="fecharModalDicionario()" style="background:transparent; border:none; color:var(--text-muted); font-size:1.4rem; cursor:pointer; font-weight:bold;">✖</button>
                </div>
                <div class="dict-search-wrapper" style="margin-bottom: 1rem;">
                    <input type="text" id="dict-search-input" oninput="filtrarGlossarioDebounced(this.value)" placeholder="Pesquise por palavra em português, romaji, kana ou kanji..." style="width:100%; padding:0.8rem 1.2rem; border-radius:12px; background:var(--bg-color); color:var(--text-main); border:2px solid var(--border-color); font-size:1rem; font-weight:600; outline:none; box-shadow:var(--shadow);">
                </div>
                <div class="dict-filters-row" style="display:flex; gap:0.5rem; margin-bottom:0.8rem; flex-wrap:wrap;">
                    <button class="dict-filter-pill active" data-cat="tudo" onclick="selecionarCategoriaDicionario('tudo')">Tudo</button>
                    <button class="dict-filter-pill" data-cat="hiragana" onclick="selecionarCategoriaDicionario('hiragana')">🌸 Hiragana</button>
                    <button class="dict-filter-pill" data-cat="katakana" onclick="selecionarCategoriaDicionario('katakana')">⚡ Katakana</button>
                    <button class="dict-filter-pill" data-cat="kanji" onclick="selecionarCategoriaDicionario('kanji')">🔤 Kanjis</button>
                    <button class="dict-filter-pill" data-cat="grammar" onclick="selecionarCategoriaDicionario('grammar')">💡 Gramática</button>
                    <button class="dict-filter-pill" data-cat="vocab" onclick="selecionarCategoriaDicionario('vocab')">📚 Vocabulário</button>
                </div>
                <div id="dict-subfilters-kanji" class="dict-subfilters-row" style="display: none; margin-bottom: 1rem; gap: 0.4rem; justify-content: center; flex-wrap: wrap;">
                    <button class="dict-subfilter-pill active" data-sub="tudo" onclick="selecionarSubNivelKanji('tudo')">Todos (N5-N1)</button>
                    <button class="dict-subfilter-pill" data-sub="N5" onclick="selecionarSubNivelKanji('N5')">🟢 N5</button>
                    <button class="dict-subfilter-pill" data-sub="N4" onclick="selecionarSubNivelKanji('N4')">🟡 N4</button>
                    <button class="dict-subfilter-pill" data-sub="N3" onclick="selecionarSubNivelKanji('N3')">🟠 N3</button>
                    <button class="dict-subfilter-pill" data-sub="N2" onclick="selecionarSubNivelKanji('N2')">🔴 N2</button>
                    <button class="dict-subfilter-pill" data-sub="N1" onclick="selecionarSubNivelKanji('N1')">🟣 N1</button>
                </div>
                <div id="dict-subfilters-vocab" class="dict-subfilters-row" style="display: none; margin-bottom: 1rem; gap: 0.4rem; justify-content: center; flex-wrap: wrap;">
                    <button class="dict-subfilter-pill-vocab active" data-sub-vocab="tudo" onclick="selecionarSubNivelVocab('tudo')">Todos</button>
                    <button class="dict-subfilter-pill-vocab" data-sub-vocab="Hiragana" onclick="selecionarSubNivelVocab('Hiragana')">🌸 Hiragana</button>
                    <button class="dict-subfilter-pill-vocab" data-sub-vocab="Katakana" onclick="selecionarSubNivelVocab('Katakana')">⚡ Katakana</button>
                    <button class="dict-subfilter-pill-vocab" data-sub-vocab="A1" onclick="selecionarSubNivelVocab('A1')">🔵 A1</button>
                    <button class="dict-subfilter-pill-vocab" data-sub-vocab="A2" onclick="selecionarSubNivelVocab('A2')">🟢 A2</button>
                    <button class="dict-subfilter-pill-vocab" data-sub-vocab="B1" onclick="selecionarSubNivelVocab('B1')">🟡 B1</button>
                    <button class="dict-subfilter-pill-vocab" data-sub-vocab="B2" onclick="selecionarSubNivelVocab('B2')">🔴 B2</button>
                </div>
                <div id="dict-results-counter" style="font-size:0.82rem; color:var(--text-muted); font-weight:600; margin-bottom:1rem;">
                    Carregando glossário...
                </div>
                <div id="dict-results-container" class="grid-dict-results"></div>
                <button onclick="fecharModalDicionario()" class="fechar-modal" style="margin-top:1rem;">Fechar Dicionário</button>
            </div>
        `;
        document.body.appendChild(modalDict);
    }
}

function abrirModalOfensiva() {
    garantirElementosCabecalhoEModal();
    const modal = document.getElementById('modal-ofensiva');
    let streakData = { count: 0 };
    try {
        const saved = localStorage.getItem('ja_streak_data');
        if (saved) streakData = JSON.parse(saved);
    } catch (e) { }
    const disp = document.getElementById('modal-streak-display');
    if (disp) disp.innerText = `🔥 ${streakData.count || 0} Dia(s) Seguido(s)`;
    if (modal) {
        modal.style.display = 'flex';
        renderizarHeatmapEstudo('heatmap-container-modal');
    }
}

function fecharModalOfensiva() {
    const modal = document.getElementById('modal-ofensiva');
    if (modal) modal.style.display = 'none';
}

function abrirModalAuth(aba = 'login') {
    garantirElementosCabecalhoEModal();
    const modal = document.getElementById('modal-auth');
    if (modal) {
        if (typeof alternarAbaAuth === 'function') alternarAbaAuth(aba);
        modal.style.display = 'flex';
    }
}

function fecharModalAuth() {
    const modal = document.getElementById('modal-auth');
    if (modal) modal.style.display = 'none';
}

function fecharModalAuthAoClicarFora(e) {
    if (e && e.target && e.target.id === 'modal-auth') {
        fecharModalAuth();
    }
}

function alternarAbaAuth(aba) {
    const tabLogin = document.getElementById('tab-auth-login');
    const tabCad = document.getElementById('tab-auth-cadastro');
    const formLogin = document.getElementById('form-auth-login');
    const formCad = document.getElementById('form-auth-cadastro');
    if (aba === 'login') {
        if (tabLogin) tabLogin.classList.add('active');
        if (tabCad) tabCad.classList.remove('active');
        if (formLogin) formLogin.style.display = 'block';
        if (formCad) formCad.style.display = 'none';
    } else {
        if (tabCad) tabCad.classList.add('active');
        if (tabLogin) tabLogin.classList.remove('active');
        if (formCad) formCad.style.display = 'block';
        if (formLogin) formLogin.style.display = 'none';
    }
}

function abrirModalCertificado() {
    const modal = document.getElementById('modal-certificado');
    if (!modal) return;
    const elNome = document.getElementById('cert-nome-aluno');
    const elData = document.getElementById('cert-data');
    const elHash = document.getElementById('cert-hash');
    const nome = typeof nomeUsuario !== 'undefined' ? nomeUsuario : 'Estudante';
    const prog = typeof progressoGlobal !== 'undefined' ? progressoGlobal : {};
    if (elNome) elNome.innerText = nome || 'Estudante';
    if (elData) elData.innerText = prog.cert_date || new Date().toLocaleDateString('pt-BR');
    if (elHash) {
        if (!prog.cert_hash) {
            prog.cert_hash = 'JA-B2-' + Math.floor(100000 + Math.random() * 900000) + '-' + Date.now().toString(36).toUpperCase();
            if (typeof salvarProgressoGlobal === 'function') salvarProgressoGlobal();
        }
        elHash.innerText = prog.cert_hash;
    }
    modal.style.display = 'flex';
}

function fecharModalCertificado() {
    const modal = document.getElementById('modal-certificado');
    if (modal) modal.style.display = 'none';
}

function imprimirCertificado() {
    if (typeof window !== 'undefined' && typeof window.print === 'function') {
        window.print();
    }
}

function abrirOpcoesCurso() {
    garantirElementosCabecalhoEModal();
    const modalOp = document.getElementById('modal-opcoes') || document.getElementById('modal-opcoes-curso');
    if (modalOp) modalOp.style.display = 'flex';
    const check = document.getElementById('check-desbloquear');
    if (check) check.checked = typeof modoDesbloqueado !== 'undefined' ? modoDesbloqueado : false;
    const inputNome = document.getElementById('input-nome-usuario');
    if (inputNome) inputNome.value = typeof nomeUsuario !== 'undefined' ? nomeUsuario : 'Estudante';
    if (typeof sincronizarOpcoesModal === 'function') sincronizarOpcoesModal();
}

function fecharOpcoesCurso() {
    const modalOp = document.getElementById('modal-opcoes') || document.getElementById('modal-opcoes-curso');
    if (modalOp) modalOp.style.display = 'none';
}


function alternarDesbloqueio(ativo) {
    window.modoDesbloqueado = !!ativo;
    localStorage.setItem('ja_modo_desbloqueado', window.modoDesbloqueado ? 'true' : 'false');
    if (typeof atualizarUIProgresso === 'function') atualizarUIProgresso();
    if (typeof atualizarUIProgressoKanji === 'function') atualizarUIProgressoKanji();
    if (typeof mostrarToast === 'function') {
        mostrarToast(ativo ? '🔓 Todos os módulos foram desbloqueados!' : '🔒 Modo de progressão gradual reativado.');
    }
}

function resetarProgressoCurso() {
    if (!confirm('⚠️ Tem certeza que deseja resetar TODO o seu progresso no Japão Academy? Esta ação é irreversível!')) return;

    const keysToRemove = [
        'japao_academy_progress',
        'japao_academy_kanji_progress',
        'ja_progresso_global',
        'ja_modulos_concluidos',
        'ja_modulos_concluidos_a2',
        'ja_modulos_concluidos_b1',
        'ja_modulos_concluidos_b2',
        'ja_progresso_a1',
        'ja_progresso_a2',
        'ja_progresso_b1',
        'ja_progresso_b2',
        'progress_hiragana',
        'progress_katakana',
        'progress_kanji',
        'progress_kanji_n4',
        'progress_kanji_n3',
        'progress_kanji_n2',
        'progress_kanji_n1',
        'progress_phrasal_verbs',
        'ja_srs_deck',
        'ja_srs_a2_deck',
        'ja_srs_b1_deck',
        'ja_srs_b2_deck',
        'ja_srs_hiragana_deck',
        'ja_srs_katakana_deck',
        'ja_srs_kanji_deck',
        'ja_srs_kanji_n4_deck',
        'ja_srs_kanji_n3_deck',
        'ja_srs_kanji_n2_deck',
        'ja_srs_kanji_n1_deck',
        'en_srs_phrasal_verbs_deck',
        'ja_favoritos_deck',
        'ja_caderno_erros',
        'ja_srs_reviews_count',
        'ja_user_xp',
        'ja_streak_data',
        'ja_activity_history',
        'ja_conquistas_desbloqueadas',
        'ja_unlocked_achievements',
        'ja_voice_answers_count',
        'ja_en_voice_answers_count',
        'ja_highScore',
        'ja_maxCombo',
        'en_highScore',
        'en_maxCombo',
        'pronuncia_quiz_highscores'
    ];

    keysToRemove.forEach(k => localStorage.removeItem(k));
    for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key && (key.startsWith('ja_') || key.startsWith('japao_') || key.startsWith('en_srs_') || key.startsWith('progress_'))) {
            localStorage.removeItem(key);
        }
    }

    if (typeof AppState !== 'undefined' || typeof progressoGlobal !== 'undefined') {
        AppState.setProgress({
            modulosConcluidos: [],
            modulosDesbloqueados: ["a1_mod_01"],
            xpTotal: 0,
            nivelAtual: "A1"
        });
        localStorage.setItem('japao_academy_progress', JSON.stringify((typeof AppState !== 'undefined' && AppState.user && AppState.user.progressoGlobal) ? AppState.user.progressoGlobal : window.progressoGlobal));
    }

    alert('🔄 Progresso resetado com sucesso!');
    window.location.reload();
}

function redirecionarParaDicionario() {
    if (typeof window === 'undefined') return;
    const pathname = window.location.pathname.toLowerCase();
    const bodyLang = (typeof document !== 'undefined' && document.body) ? (document.body.getAttribute('data-lang') || '') : '';
    const bodyMode = (typeof document !== 'undefined' && document.body) ? (document.body.getAttribute('data-mode') || '') : '';

    const isEnglish = (
        bodyLang === 'english' ||
        bodyMode === 'pronuncia' ||
        bodyMode === 'phrasal' ||
        pathname.includes('ingles') ||
        pathname.includes('phrasal') ||
        pathname.includes('pronuncia')
    );

    const inHtmlSubfolder = pathname.includes('/html/');
    const inEnSubfolder = pathname.includes('/en-us/');
    const inJaSubfolder = pathname.includes('/ja-jp/');

    if (isEnglish) {
        if (inEnSubfolder) {
            window.location.href = 'dicionario_ingles.html';
        } else if (inHtmlSubfolder) {
            window.location.href = '../en-US/dicionario_ingles.html';
        } else {
            window.location.href = 'html/en-US/dicionario_ingles.html';
        }
    } else {
        if (inJaSubfolder) {
            window.location.href = 'dicionario.html';
        } else if (inHtmlSubfolder) {
            window.location.href = '../ja-JP/dicionario.html';
        } else {
            window.location.href = 'html/ja-JP/dicionario.html';
        }
    }
}

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.renderizarHeatmapEstudo = renderizarHeatmapEstudo;
    window.garantirElementosCabecalhoEModal = garantirElementosCabecalhoEModal;
    window.abrirModalOfensiva = abrirModalOfensiva;
    window.fecharModalOfensiva = fecharModalOfensiva;
    window.abrirModalAuth = abrirModalAuth;
    window.fecharModalAuth = fecharModalAuth;
    window.fecharModalAuthAoClicarFora = fecharModalAuthAoClicarFora;
    window.alternarAbaAuth = alternarAbaAuth;
    window.abrirModalCertificado = abrirModalCertificado;
    window.fecharModalCertificado = fecharModalCertificado;
    window.imprimirCertificado = imprimirCertificado;
    window.abrirOpcoesCurso = abrirOpcoesCurso;
    window.fecharOpcoesCurso = fecharOpcoesCurso;
    window.alternarDesbloqueio = alternarDesbloqueio;
    window.resetarProgressoCurso = resetarProgressoCurso;
    window.redirecionarParaDicionario = redirecionarParaDicionario;
}
