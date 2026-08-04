// ======================================
// MÓDULO COURSE - MAIN COURSE & CONVERT
// ======================================

function loadCourseModule(idx) {
    const mode = document.body.getAttribute('data-mode') || (typeof courseMode !== 'undefined' ? courseMode : null);

    if (mode === 'kanji' || (mode && mode.startsWith('kanji_'))) {
        if (typeof renderKanjiModule === 'function') renderKanjiModule(idx);
        return;
    }

    if (mode === 'phrasal_verbs' || mode === 'phrasal') {
        if (typeof renderPhrasalVerbsModule === 'function') renderPhrasalVerbsModule(idx);
        return;
    }

    const dataBase = typeof getCourseData === 'function' ? getCourseData(mode) : null;
    if (!dataBase || !dataBase[idx]) return;
    const data = dataBase[idx];

    document.querySelectorAll('#tabContainer .tab-btn').forEach((btn, i) => {
        const wrapper = btn.closest('.tab-item-wrapper');
        const wrapperIdx = wrapper ? parseInt(wrapper.getAttribute('data-mod-index')) : i;
        btn.classList.toggle('active', wrapperIdx === idx);
    });
    const display = document.getElementById('moduleDisplay');
    if (!display) return;
    display.setAttribute('aria-busy', 'true');

    if (data.isReferenceTable) {
        let html = `<h2 class="module-title">${data.title}</h2><p style="margin-bottom:2rem; color:var(--text-muted);">${data.desc}</p>`;
        data.sections.forEach(sec => {
            if (!sec.items) return;
            let itemsHtml = sec.items.map(item => item && item.k ? `<div class="sound-tile" onclick="speakKana('${item.k}')"><span class="tile-kana">${item.k}</span><span class="tile-romaji">${item.r} 🔊</span></div>` : `<div class="sound-tile empty"></div>`).join('');
            html += `<h3 class="section-title">${sec.title}</h3><div class="${sec.cols === 5 ? 'soundboard-grid-5' : 'soundboard-grid-3'}">${itemsHtml}</div>`;
        });
        display.innerHTML = html;
        display.setAttribute('aria-busy', 'false');
        display.setAttribute('aria-label', 'Conteúdo do módulo');
        return;
    }

    let charsHtml = data.chars.map((c, idx) => {
        const rawChar = c.char.split(' ')[0];
        const canvasId = `canvas-kana-${idx}`;
        return `
            <div class="char-card">
                <div>
                    <div class="char-header">
                        <span class="char-symbol kana-text">${c.char}</span>
                        <div>
                            <button class="audio-btn" onclick="speakKana('${rawChar}')">🔊</button>
                            <span class="char-romaji">${c.romaji}</span>
                        </div>
                    </div>
                    <div class="char-info"><strong>💡 Dica:</strong> ${c.mnemonic}</div>
                    <div class="char-info" style="margin-top:0.8rem; border-top:1px dashed var(--border-color); padding-top:0.5rem;"><strong>✏️ Traço:</strong> ${c.stroke}</div>
                </div>

                <!-- CANVAS INTERATIVO DE ESCRITA -->
                <div class="canvas-practice-box">
                    <span class="canvas-practice-title">✏️ Treino Motor de Traço:</span>
                    <canvas id="${canvasId}" class="kanji-canvas" width="190" height="190" data-char="${rawChar}"></canvas>
                    <div class="canvas-toolbar">
                        <button class="canvas-btn btn-pincel" onclick="ativarPincelCanvas('${canvasId}')" title="Pincel">🖌️ Pincel</button>
                        <button class="canvas-btn btn-kakijun" onclick="animarKakijun('${canvasId}')" title="Ordem dos Traços">🎬 Traços</button>
                        <button class="canvas-btn btn-desfazer" onclick="desfazerUltimoTracoCanvas('${canvasId}')" title="Desfazer Traço">↩️ Desfazer</button>
                        <button class="canvas-btn btn-limpar" onclick="limparCanvas('${canvasId}')" title="Limpar">🧹 Limpar</button>
                        <button class="canvas-btn btn-guia" id="btn-guia-${canvasId}" onclick="alternarGuiaCanvas('${canvasId}')" title="Alternar Guia">👁️ Guia ON</button>
                        <button class="canvas-btn btn-verificar" onclick="verificarTracoCanvas('${canvasId}')" title="Verificar Traço">✅ Verificar</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    let vocabHtml = data.vocab.map(v => `<div class="vocab-card" style="grid-column: ${v.kana.length > 5 ? 'span 2' : 'span 1'};"><div class="vocab-kana kana-text" onclick="speakKana('${v.kana}')">${v.kana} 🔊</div><div class="vocab-romaji">${v.romaji}</div><div class="vocab-meaning">${v.meaning}</div></div>`).join('');
    let quizHtml = data.quiz.map((q, i) => `<div class="question-block"><div class="question-text"><span>${i + 1}. ${q.q}</span><span class="badge ${q.type === 'kana' ? 'kana' : 'romaji'}">${q.type === 'kana' ? (mode === 'hiragana' ? '✨ Vira Hiragana' : '✨ Vira Katakana') : '🔤 Romaji'}</span></div><input type="text" id="cq_${i}" class="quiz-input" aria-label="Resposta da questão ${i + 1}" ${q.type === 'kana' ? 'oninput="courseConvert(this)"' : ''} onkeydown="if(event.key==='Enter') checkCourseQuiz(${i}, '${q.a.replace(/'/g, "\\'")}', '${q.type}')" placeholder="${q.type === 'kana' ? 'Digite em Romaji...' : 'Ex: ka'}"><button class="quiz-btn" onclick="checkCourseQuiz(${i}, '${q.a.replace(/'/g, "\\'")}', '${q.type}')">Verificar</button><span id="cf_${i}" class="feedback" role="status" aria-live="polite"></span></div>`).join('');

    display.innerHTML = `<h2 class="module-title">${data.title}</h2><p style="margin-bottom:2rem; color:var(--text-muted);">${data.desc}</p><h3 class="section-title">🔤 Caracteres/Regras</h3><div class="char-grid">${charsHtml}</div><h3 class="section-title">📚 Vocabulário Prático</h3><div class="vocab-grid">${vocabHtml}</div><div class="quiz-section"><h3 class="section-title" style="margin-top:0;">🧠 Exercícios</h3>${quizHtml}</div>`;

    if (typeof inicializarTodosOsCanvases === 'function') inicializarTodosOsCanvases();
    display.setAttribute('aria-busy', 'false');
    display.setAttribute('aria-label', 'Conteúdo do módulo');
}

function courseConvert(input) {
    if (!input || !input.value) return;
    let text = input.value;
    const mode = document.body.getAttribute('data-mode') || (typeof courseMode !== 'undefined' ? courseMode : null);
    const map = mode === 'hiragana' ? (typeof ROMAJI_HIRA_MAP !== 'undefined' ? ROMAJI_HIRA_MAP : {}) : (typeof ROMAJI_KATA_MAP !== 'undefined' ? ROMAJI_KATA_MAP : {});
    const sokuon = mode === 'hiragana' ? 'っ$1' : 'ッ$1';
    const nFinal = mode === 'hiragana' ? 'ん$1' : 'ン$1';
    text = text.replace(/([ksthmyrwbpzdjgcfv])\1/gi, sokuon);
    text = text.replace(/n([bcdfghjklmpqrstvwxz])/gi, nFinal);
    const keys = Object.keys(map).sort((a, b) => b.length - a.length);
    for (let key of keys) text = text.replace(new RegExp(key, 'gi'), map[key]);
    input.value = text;
}

function initializeCourse(mode) {
    document.documentElement.style.setProperty('--current-primary', 'var(--japa-primary)');
    if (typeof atualizarUIProgresso === 'function') atualizarUIProgresso();
}


function eNivelDesbloqueado(nivel) {
    if (typeof modoDesbloqueado !== 'undefined' && modoDesbloqueado) return true;
    const lvl = (nivel || 'A1').toUpperCase();
    if (lvl === 'A1') return true;
    const cursos = typeof getTodosOsCursos === 'function' ? getTodosOsCursos() : {};
    const prog = typeof progressoGlobal !== 'undefined' ? progressoGlobal : {};
    const modulosConcluidos = prog.modulosConcluidos || [];
    if (lvl === 'A2') {
        const totalA1 = (cursos.A1 || []).length;
        const concluidosA1 = (cursos.A1 || []).filter(m => modulosConcluidos.includes(m.id)).length;
        return (totalA1 > 0 && concluidosA1 >= totalA1);
    }
    if (lvl === 'B1') {
        const totalA2 = (cursos.A2 || []).length;
        const concluidosA2 = (cursos.A2 || []).filter(m => modulosConcluidos.includes(m.id)).length;
        return eNivelDesbloqueado('A2') && (totalA2 > 0 && concluidosA2 >= totalA2);
    }
    if (lvl === 'B2') {
        const totalB1 = (cursos.B1 || []).length;
        const concluidosB1 = (cursos.B1 || []).filter(m => modulosConcluidos.includes(m.id)).length;
        return eNivelDesbloqueado('B1') && (totalB1 > 0 && concluidosB1 >= totalB1);
    }
    return false;
}

function eModuloDesbloqueado(modId, nivel, idx) {
    if (typeof modoDesbloqueado !== 'undefined' && modoDesbloqueado) return true;
    const prog = typeof progressoGlobal !== 'undefined' ? progressoGlobal : {};
    const modulosDesbloqueados = prog.modulosDesbloqueados || ["a1_mod_01"];

    const targetId = (typeof modId === 'object' && modId !== null) ? (modId.id || '') : String(modId || '');
    if (modulosDesbloqueados.includes(targetId)) return true;

    const lvlKey = (nivel || 'A1').toUpperCase();
    const cursos = typeof getTodosOsCursos === 'function' ? getTodosOsCursos() : {};
    const listaModulos = cursos[lvlKey] || cursos[nivel] || [];
    if (idx === 0) return eNivelDesbloqueado(nivel);
    const modAnterior = listaModulos[idx - 1];
    if (modAnterior && modAnterior.id) {
        const idAnterior = (typeof modAnterior === 'object' && modAnterior !== null) ? modAnterior.id : String(modAnterior);
        const concluidos = prog.modulosConcluidos || [];
        if (concluidos.includes(idAnterior)) return true;
    }
    return false;
}

function eModuloAprendido(modIdx, nivel = 'a1') {
    const key = (nivel || 'a1').toLowerCase();
    const prog = typeof progressoGlobal !== 'undefined' ? progressoGlobal : {};
    let arrayConcluidos = [];
    if (key === 'hiragana') arrayConcluidos = prog.progress_hiragana || [];
    else if (key === 'katakana') arrayConcluidos = prog.progress_katakana || [];
    else if (key === 'kanji' || key === 'kanji_n5') arrayConcluidos = prog.progress_kanji || [];
    else if (key === 'kanji_n4') arrayConcluidos = prog.progress_kanji_n4 || [];
    else if (key === 'kanji_n3') arrayConcluidos = prog.progress_kanji_n3 || [];
    else if (key === 'kanji_n2') arrayConcluidos = prog.progress_kanji_n2 || [];
    else if (key === 'kanji_n1') arrayConcluidos = prog.progress_kanji_n1 || [];
    else if (key === 'phrasal_verbs' || key === 'phrasal') arrayConcluidos = prog.progress_phrasal_verbs || [];
    else arrayConcluidos = prog.modulosConcluidos || [];

    if (!Array.isArray(arrayConcluidos)) return false;

    // 1. Checagem direta de valor original (número ou string)
    if (arrayConcluidos.includes(modIdx)) return true;

    if (typeof modIdx === 'number') {
        if (arrayConcluidos.includes(String(modIdx))) return true;
    } else if (typeof modIdx === 'string') {
        const parsed = parseInt(modIdx, 10);
        if (!isNaN(parsed) && arrayConcluidos.includes(parsed)) return true;
    }

    // 2. Checagem de IDs resolvidos de módulo (ex: targetId, fallbackId)
    const numIdx = typeof modIdx === 'number' ? modIdx : (!isNaN(parseInt(modIdx, 10)) ? parseInt(modIdx, 10) : null);
    if (numIdx !== null) {
        const isEnglish = (typeof document !== 'undefined' && document.body && document.body.getAttribute('data-lang') === 'english') ||
                          (typeof window !== 'undefined' && window.location && (window.location.pathname.includes('ingles') || window.location.pathname.includes('en-US')));
        const list = typeof getCourseData === 'function' ? getCourseData(key) : null;
        const targetId = (list && list[numIdx] && list[numIdx].id) ? list[numIdx].id : null;
        const fallbackId = isEnglish ? `en_${key}_mod_${String(numIdx + 1).padStart(2, '0')}` : `${key}_mod_${String(numIdx + 1).padStart(2, '0')}`;

        if (targetId && arrayConcluidos.includes(targetId)) return true;
        if (fallbackId && arrayConcluidos.includes(fallbackId)) return true;
    }

    return false;
}

function concluirModuloHiragana(modIdx) {
    if (typeof AppState !== 'undefined' && typeof AppState.markSpecialModuleCompleted === 'function') {
        AppState.markSpecialModuleCompleted(modIdx, 'hiragana');
    } else {
        const prog = typeof progressoGlobal !== 'undefined' ? progressoGlobal : {};
        if (!Array.isArray(prog.progress_hiragana)) prog.progress_hiragana = [];
        if (!prog.progress_hiragana.includes(modIdx)) {
            prog.progress_hiragana.push(modIdx);
            if (typeof salvarProgressoGlobal === 'function') salvarProgressoGlobal();
        }
    }
}

function concluirModuloKatakana(modIdx) {
    if (typeof AppState !== 'undefined' && typeof AppState.markSpecialModuleCompleted === 'function') {
        AppState.markSpecialModuleCompleted(modIdx, 'katakana');
    } else {
        const prog = typeof progressoGlobal !== 'undefined' ? progressoGlobal : {};
        if (!Array.isArray(prog.progress_katakana)) prog.progress_katakana = [];
        if (!prog.progress_katakana.includes(modIdx)) {
            prog.progress_katakana.push(modIdx);
            if (typeof salvarProgressoGlobal === 'function') salvarProgressoGlobal();
        }
    }
}

function concluirModuloKanji(modIdx) {
    if (typeof AppState !== 'undefined' && typeof AppState.markSpecialModuleCompleted === 'function') {
        AppState.markSpecialModuleCompleted(modIdx, 'kanji');
    } else {
        const prog = typeof progressoGlobal !== 'undefined' ? progressoGlobal : {};
        if (!Array.isArray(prog.progress_kanji)) prog.progress_kanji = [];
        if (!prog.progress_kanji.includes(modIdx)) {
            prog.progress_kanji.push(modIdx);
            if (typeof salvarProgressoGlobal === 'function') salvarProgressoGlobal();
        }
    }
}

function calcularProgressoGlobal() {
    const cursos = typeof getTodosOsCursos === 'function' ? getTodosOsCursos() : {};
    const totalModulos = (cursos.A1 || []).length + (cursos.A2 || []).length + (cursos.B1 || []).length + (cursos.B2 || []).length;
    const prog = typeof progressoGlobal !== 'undefined' ? progressoGlobal : {};
    const concluidosCount = (prog.modulosConcluidos || []).length;
    const percentualTotal = totalModulos > 0 ? Math.min(100, Math.round((concluidosCount / totalModulos) * 100)) : 0;
    const xpCalculado = concluidosCount * 100;
    const elPercent = document.getElementById('progresso-total-percent');
    const elXP = document.getElementById('progresso-total-xp');
    const elBar = document.getElementById('progresso-total-bar');
    if (elPercent) elPercent.innerText = `${percentualTotal}%`;
    if (elXP) elXP.innerText = `${xpCalculado} XP`;
    if (elBar) elBar.style.width = `${percentualTotal}%`;
    return { percentualTotal, concluidosCount, totalModulos, xpCalculado };
}

function atualizarNomeUsuario(valor) {
    window.nomeUsuario = valor.trim() || 'Estudante';
    localStorage.setItem('ja_nome_usuario', window.nomeUsuario);
}

function atualizarUIProgresso() {
    const check = document.getElementById('check-desbloquear');
    if (check) check.checked = typeof modoDesbloqueado !== 'undefined' ? modoDesbloqueado : false;
    const inputNome = document.getElementById('input-nome-usuario');
    if (inputNome) inputNome.value = typeof nomeUsuario !== 'undefined' ? nomeUsuario : 'Estudante';
    calcularProgressoGlobal();

    // Helper para garantir exatamente um único ícone de status no início do título do módulo
    function setBtnIcon(btn, emoji) {
        const currentText = btn.innerText || btn.textContent || '';
        const cleanText = currentText.replace(/^(?:[\u{1F512}\u{1F513}\u{2705}\u{26AA}]|\s)+/gu, '').trim();
        btn.innerText = `${emoji} ${cleanText}`;
    }

    // Sincronização dinâmica dos botões de módulos na trilha do hub
    const isUnlockedAll = typeof modoDesbloqueado !== 'undefined' ? modoDesbloqueado : false;
    document.querySelectorAll('.btn-modulo').forEach(btn => {
        const onclickAttr = btn.getAttribute('onclick') || '';
        const match = onclickAttr.match(/iniciarModulo\s*\(\s*(\d+)\s*,\s*['"]?([^'"]+)['"]?\s*\)/);
        if (match) {
            const modIdx = parseInt(match[1], 10);
            const level = match[2] || 'A1';
            const courseList = typeof getCourseData === 'function' ? getCourseData(level) : null;
            const targetMod = (courseList && courseList[modIdx]) ? courseList[modIdx] : null;
            const modId = targetMod ? targetMod.id : `${level.toLowerCase()}_mod_${String(modIdx + 1).padStart(2, '0')}`;

            let cleanTitle = targetMod && targetMod.title ? targetMod.title : '';
            if (!cleanTitle) {
                cleanTitle = (btn.innerText || btn.textContent || '')
                    .replace(/^(?:[\u{1F512}\u{1F513}\u{2705}\u{26AA}]|\s)+/gu, '')
                    .replace(/^Módulo\s+\d+:\s*/i, '')
                    .replace(/\s*\(Bloqueado\)$/i, '')
                    .trim();
            }
            cleanTitle = cleanTitle.replace(/^Módulo\s+\d+:\s*/i, '').replace(/\s*\(Bloqueado\)$/i, '').trim();

            const isCompleted = typeof eModuloAprendido === 'function' ? (eModuloAprendido(modId, level) || eModuloAprendido(modIdx, level)) : false;
            const unlocked = isUnlockedAll || (typeof eModuloDesbloqueado === 'function' && eModuloDesbloqueado(modId, level, modIdx));

            if (isCompleted) {
                btn.disabled = false;
                btn.classList.remove('bloqueado');
                btn.classList.add('concluido');
                btn.innerText = `✅ ${cleanTitle}`;
            } else if (unlocked) {
                btn.disabled = false;
                btn.classList.remove('bloqueado', 'concluido');
                btn.innerText = `🔓 ${cleanTitle}`;
            } else {
                btn.disabled = true;
                btn.classList.add('bloqueado');
                btn.classList.remove('concluido');
                btn.innerText = `🔒 ${cleanTitle} (Bloqueado)`;
            }
        }
    });

    if (document.getElementById('grid-modulos')) {
        const nav = (typeof AppState !== 'undefined' && AppState.course && AppState.course.level) ? AppState.course.level : (typeof nivelAtivo !== 'undefined' ? nivelAtivo : 'A1');
        if (typeof renderCourseTabs === 'function') renderCourseTabs();
    }

    if (typeof atualizarBadgeSRS === 'function') {
        const activeLevel = (typeof AppState !== 'undefined' && AppState.course && AppState.course.level) ? String(AppState.course.level).toLowerCase() : (typeof nivelAtivo !== 'undefined' && nivelAtivo ? String(nivelAtivo).toLowerCase() : 'a1');
        atualizarBadgeSRS(activeLevel);
    }
}


function abrirTrilha(nivel) {
    const lvl = (nivel || 'A1').toUpperCase();
    if (!eNivelDesbloqueado(lvl)) {
        const anterior = (lvl === 'A2') ? 'A1' : (lvl === 'B1') ? 'A2' : 'B1';
        alert(`🔒 Conclua todos os módulos do Nível ${anterior} para liberar o Nível ${lvl}!`);
        return;
    }
    AppState.setLevel(lvl);

    const hub = document.getElementById('hub-cursos') || document.getElementById('hub-niveis');
    const player = document.getElementById('player-aula');
    if (hub) hub.style.display = 'none';
    if (player) player.style.display = 'none';

    ['a1', 'a2', 'b1', 'b2'].forEach(l => {
        const el = document.getElementById(`trilha-${l}`);
        if (el) el.style.display = (l === lvl.toLowerCase()) ? 'block' : 'none';
    });

    if (typeof atualizarUIProgresso === 'function') atualizarUIProgresso();
    window.scrollTo(0, 0);
}

function voltarAoHub() {
    const hub = document.getElementById('hub-cursos') || document.getElementById('hub-niveis');
    const player = document.getElementById('player-aula');
    if (hub) hub.style.display = 'block';
    if (player) player.style.display = 'none';

    ['a1', 'a2', 'b1', 'b2'].forEach(l => {
        const el = document.getElementById(`trilha-${l}`);
        if (el) el.style.display = 'none';
    });
    if (typeof atualizarUIProgresso === 'function') atualizarUIProgresso();
    window.scrollTo(0, 0);
}


function iniciarModulo(index, nivel = ((typeof AppState !== 'undefined' && AppState.course && AppState.course.level) ? AppState.course.level : (typeof nivelAtivo !== 'undefined' ? nivelAtivo : 'A1'))) {
    AppState.setLevel(nivel);
    AppState.setModule(index);
    AppState.setStage(1);
    AppState.setDrop(0);
    const hub = document.getElementById('hub-cursos') || document.getElementById('hub-niveis');
    const player = document.getElementById('player-aula');
    if (hub) hub.style.display = 'none';
    ['a1', 'a2', 'b1', 'b2'].forEach(l => {
        const el = document.getElementById(`trilha-${l}`);
        if (el) el.style.display = 'none';
    });
    if (player) player.style.display = 'block';
    if (typeof iniciarSessaoEstudo === 'function') {
        const idioma = document.body.getAttribute('data-lang') === 'english' ? 'en-US' : 'ja-JP';
        iniciarSessaoEstudo({ language: idioma, activityType: 'course', contentId: `${String(nivel).toLowerCase()}-${index + 1}` });
    }
    if (typeof renderizarEtapa === 'function') renderizarEtapa();
    window.scrollTo(0, 0);
}

function fecharAula() {
    const player = document.getElementById('player-aula');
    const targetLvl = ((typeof AppState !== 'undefined' && AppState.course && AppState.course.level) ? AppState.course.level : (typeof nivelAtivo !== 'undefined' ? nivelAtivo : 'a1')).toLowerCase();
    if (player) player.style.display = 'none';
    ['a1', 'a2', 'b1', 'b2'].forEach(l => {
        const el = document.getElementById(`trilha-${l}`);
        if (el) el.style.display = (l === targetLvl) ? 'block' : 'none';
    });
    if (typeof atualizarUIProgresso === 'function') atualizarUIProgresso();
    if (typeof finalizarSessaoEstudo === 'function') finalizarSessaoEstudo('exit');
}


function obterDropsAtivosDoModulo(mod) {
    if (!mod) return [];
    const module = typeof normalizeModule === 'function' ? normalizeModule(mod) : mod;
    return module.drops || [];
}

function renderizarEtapa() {
    const container = document.getElementById('conteudo-etapa');
    const indicadorEtapa = document.getElementById('etapa-titulo') || document.getElementById('indicador-etapa');

    const btnVoltar = document.getElementById('btn-voltar-etapa');
    const btnAvancar = document.getElementById('btn-avancar');
    if (!container) return;

    const dadosCurso = typeof getDadosCursoAtivo === 'function' ? getDadosCursoAtivo() : [];
    const modIdx = (typeof AppState !== 'undefined' && AppState.course && typeof AppState.course.moduleIndex === 'number') ? AppState.course.moduleIndex : (typeof moduloAtivoIndex !== 'undefined' ? moduloAtivoIndex : 0);
    const rawMod = (dadosCurso && dadosCurso[modIdx]) ? dadosCurso[modIdx] : null;

    if (!rawMod) {
        container.innerHTML = `<p style="text-align:center; padding: 2rem;">Módulo não encontrado.</p>`;
        return;
    }

    const module = typeof normalizeModule === 'function' ? normalizeModule(rawMod) : rawMod;

    const curDrop = (typeof AppState !== 'undefined' && AppState.course && typeof AppState.course.dropIndex === 'number') ? AppState.course.dropIndex : (typeof dropAtual !== 'undefined' ? dropAtual : 0);
    const curEtapa = (typeof AppState !== 'undefined' && AppState.course && AppState.course.stage) ? AppState.course.stage : (typeof etapaAtual !== 'undefined' ? etapaAtual : 1);

    if (btnVoltar) btnVoltar.style.display = (curEtapa === 1 && curDrop === 0) ? 'none' : 'inline-block';
    if (btnAvancar) {
        btnAvancar.style.display = 'inline-block';
        btnAvancar.innerText = "Avançar ➔";
    }

    if (curEtapa === 1) {
        const drops = module.drops;
        const totalDrops = drops.length;
        if (indicadorEtapa) indicadorEtapa.innerText = `Etapa 1 de 5: Vocabulário (Card ${curDrop + 1} de ${totalDrops})`;

        if (totalDrops === 0) {
            console.warn(`[COURSE] Módulo ${module.id || modIdx} não possui cartões de vocabulário.`);
            if (typeof aplicarEstadoVazioUX === 'function') {
                aplicarEstadoVazioUX(container, {
                    icon: '📭',
                    title: 'Nenhum cartão de vocabulário',
                    description: 'Este módulo não possui cartões disponíveis nesta etapa.',
                    recommendation: 'Volte à trilha e escolha outro módulo para continuar estudando.'
                });
            } else {
                container.textContent = 'Nenhum cartão de vocabulário encontrado para este módulo.';
            }
            return;
        }

        const drop = drops[curDrop] || null;
        if (drop) {
            if (drop.type === 'grammar_pill') {
                const pTitle = drop.title || 'Pílula Gramatical';
                const pRule = drop.rule || drop.explanation || '';
                const pFormula = drop.formula ? `<div style="margin-top:12px; padding:12px; background:rgba(59,130,246,0.1); border-left:4px solid var(--current-primary); border-radius:8px; font-weight:bold; font-family:monospace; color:var(--text-main);">💡 Fórmula: ${drop.formula}</div>` : '';
                const pExample = drop.example ? `<div style="margin-top:10px; font-size:1.05rem; color:var(--text-main); font-style:italic; background:var(--bg-color); padding:10px; border-radius:8px;">💬 Exemplo: "${drop.example}"</div>` : '';

                container.innerHTML = `
                    <div class="flashcard-drop grammar-pill-card" style="background:var(--card-bg); border:2px solid var(--border-color); border-radius:16px; padding:24px; text-align:left; box-shadow:var(--shadow);">
                        <div style="font-size:1.4rem; font-weight:bold; color:var(--current-primary); margin-bottom:12px;">💊 ${pTitle}</div>
                        <div style="font-size:1.05rem; color:var(--text-main); line-height:1.6;">${pRule}</div>
                        ${pFormula}
                        ${pExample}
                    </div>
                `;
            } else {
                const processado = typeof formatarTextoJapones === 'function' ? formatarTextoJapones(drop) : { htmlJapones: drop.kanji || drop.word || drop.english || '', htmlRomaji: drop.romaji || drop.ipa || '' };
                const mainContent = drop.kanji || drop.word || drop.english || processado.htmlJapones || '';
                const subContent = drop.romaji || drop.ipa || processado.htmlRomaji || '';
                const translation = drop.translation || drop.portuguese || '';
                const timeCtx = drop.timeContext ? `<div style="margin-top:10px; font-size:0.9rem; color:var(--text-muted);">💡 ${typeof fNome === 'function' ? fNome(drop.timeContext) : drop.timeContext}</div>` : '';
                const speakWord = (drop.kanji || drop.word || drop.english || drop.romaji || '').replace(/'/g, "\\'");

                container.innerHTML = `
                    <div class="flashcard-drop" style="background:var(--card-bg); border:2px solid var(--border-color); border-radius:16px; padding:24px; text-align:center; box-shadow:var(--shadow);">
                        <div style="font-size:2.5rem; margin-bottom:10px;">${mainContent}</div>
                        <div style="font-size:1.2rem; color:var(--current-primary); font-weight:bold;">${subContent}</div>
                        <div style="font-size:1.1rem; color:var(--text-main); margin-top:8px;">${translation}</div>
                        ${timeCtx}
                        <button class="audio-btn" onclick="speakKana('${speakWord}')" style="margin-top:16px; padding:10px 20px;">🔊 Ouvir Pronúncia</button>
                    </div>
                `;
            }
        }
    } else if (curEtapa === 2) {
        if (indicadorEtapa) indicadorEtapa.innerText = `Etapa 2 de 5: Prática em Massa`;
        const exercicios = module.practice;
        let htmlPratica = exercicios.map((ex, idx) => {
            const promptText = ex.question || '';
            const optsHTML = (ex.options || []).map((opt, oIdx) => {
                const optLabel = typeof opt === 'object' && opt !== null ? (opt.label || opt.text || '') : String(opt);
                const isCorrect = typeof opt === 'object' && opt !== null ? (opt.isCorrect === true || opt.correct === true) : (oIdx === ex.correctIndex);
                return `<button class="quiz-option-btn" onclick="verificarRespostaPraticaMassa(${idx}, ${isCorrect}, this)">${optLabel}</button>`;
            }).join('');
            return `
                <div class="pratica-card" style="background:var(--card-bg); border:1.5px solid var(--border-color); border-radius:12px; padding:16px; margin-bottom:14px;">
                    <div style="font-weight:bold; margin-bottom:8px;">${idx + 1}. ${promptText}</div>
                    <div class="quiz-options-group">${optsHTML}</div>
                </div>
            `;
        }).join('');
        container.innerHTML = `<h3>🏋️ Prática em Massa</h3>${htmlPratica}`;
    } else if (curEtapa === 3) {
        if (indicadorEtapa) indicadorEtapa.innerText = `Etapa 3 de 5: Diálogo Interativo`;
        const dialogos = module.dialog;
        let htmlDiag = dialogos.map((d, idx) => {
            const speaker = d.speaker || d.npcName || 'Pessoa';
            const speechText = d.text || d.npcMessage || '';
            const subTranslation = d.translation || d.scenario || '';
            const speakWord = speechText.replace(/'/g, "\\'");

            let optsHTML = '';
            if (Array.isArray(d.options) && d.options.length > 0) {
                const optionButtons = d.options.map((opt, oIdx) => {
                    const optText = typeof opt === 'object' && opt !== null ? (opt.text || opt.label || '') : String(opt);
                    const isCorrect = typeof opt === 'object' && opt !== null ? (opt.isCorrect === true || opt.correct === true) : (oIdx === d.correctIndex);
                    const feedbackText = (typeof opt === 'object' && opt !== null && opt.feedback) ? opt.feedback.replace(/'/g, "\\'") : '';
                    return `<button class="quiz-option-btn dialogue-opt-btn" onclick="verificarDialogoMassa(${idx}_${oIdx}, '${feedbackText}', ${isCorrect}, this)" style="display:block; margin:6px 0; width:100%; text-align:left; padding:10px 14px; border-radius:10px; border:1.5px solid var(--border-color); background:var(--bg-color); color:var(--text-main); font-weight:600; font-size:0.95rem; cursor:pointer;">👉 ${optText}</button>`;
                }).join('');

                optsHTML = `<div class="dialogue-options-group" style="margin-top:12px; padding-top:10px; border-top:1px dashed var(--border-color);">${optionButtons}</div>`;
            }

            return `
                <div class="dialogo-line" style="background:var(--card-bg); border:1px solid var(--border-color); border-radius:12px; padding:16px; margin-bottom:14px; box-shadow:var(--shadow);">
                    <div style="font-weight:bold; color:var(--current-primary); font-size:1.05rem;">🗣️ ${speaker}:</div>
                    <div style="font-size:1.15rem; margin:6px 0; font-weight:600;">${typeof fNome === 'function' ? fNome(speechText) : speechText}</div>
                    <div style="font-size:0.9rem; color:var(--text-muted);">${subTranslation}</div>
                    <button class="audio-btn" onclick="speakKana('${speakWord}')" style="margin-top:8px; font-size:0.85rem; padding:6px 12px;">🔊 Ouvir Line</button>
                    ${optsHTML}
                </div>
            `;
        }).join('');
        container.innerHTML = `<h3>💬 Diálogo da Aula</h3>${htmlDiag}`;
    } else if (curEtapa === 4) {
        if (indicadorEtapa) indicadorEtapa.innerText = `Etapa 4 de 5: Construtor de Frases`;
        const sentenceExs = module.sentenceBuilder;
        let htmlSB = sentenceExs.map((ex, idx) => {
            const exId = `sb_${module.id}_${idx}`;
            const targetSentence = ex.translation || '';
            if (typeof inicializarSentenceBuilderState === 'function') inicializarSentenceBuilderState(exId, ex.chunks || []);
            return `
                <div id="box-sb-${exId}" class="sb-box" style="background:var(--card-bg); border:2px solid var(--border-color); border-radius:14px; padding:18px; margin-bottom:16px;">
                    <div style="font-weight:bold; margin-bottom:8px;">Traduza: "${targetSentence}"</div>
                    <div id="sb-target-${exId}" class="sb-target-zone" style="min-height:50px; border:2px dashed var(--border-color); border-radius:10px; padding:10px; margin-bottom:12px; display:flex; flex-wrap:wrap; gap:8px; align-items:center;"></div>
                    <div id="sb-source-${exId}" class="sb-source-zone" style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:12px;"></div>
                    <div style="display:flex; gap:8px;">
                        <button class="quiz-btn" onclick="verificarSentenceBuilder('${exId}')">Verificar</button>
                        <button class="quiz-btn" onclick="resetarSentenceBuilder('${exId}')" style="background:var(--border-color); color:var(--text-main);">Limpar</button>
                    </div>
                    <div id="fb-sb-${exId}" class="feedback" style="margin-top:8px; font-weight:bold;"></div>
                </div>
            `;
        }).join('');
        container.innerHTML = `<h3>🧩 Construtor de Frases</h3>${htmlSB}`;
        setTimeout(() => {
            sentenceExs.forEach((ex, idx) => {
                const exId = `sb_${module.id}_${idx}`;
                if (typeof renderizarBlocosSentenceBuilder === 'function') renderizarBlocosSentenceBuilder(exId);
            });
        }, 50);
    } else if (curEtapa === 5) {
        if (indicadorEtapa) indicadorEtapa.innerText = `Etapa 5 de 5: Quiz Final do Módulo`;
        const quizList = module.quiz;
        let htmlQuiz = quizList.map((q, idx) => (typeof renderQuizQuestion === 'function' ? renderQuizQuestion(q, idx) : '')).join('');
        container.innerHTML = `<h3>🎯 Quiz Final do Módulo</h3>${htmlQuiz}`;
    }
    if (container && typeof animarEntradaConteudoUX === 'function') animarEntradaConteudoUX(container);
}

function avancarEtapa(uxExecutarAgora = false) {
    const dadosCurso = typeof getDadosCursoAtivo === 'function' ? getDadosCursoAtivo() : [];
    const modIdx = (typeof AppState !== 'undefined' && AppState.course && typeof AppState.course.moduleIndex === 'number') ? AppState.course.moduleIndex : (typeof moduloAtivoIndex !== 'undefined' ? moduloAtivoIndex : 0);
    const mod = dadosCurso[modIdx];
    const totalDrops = obterDropsAtivosDoModulo(mod).length;
    const curEtapa = (typeof AppState !== 'undefined' && AppState.course && AppState.course.stage) ? AppState.course.stage : (typeof etapaAtual !== 'undefined' ? etapaAtual : 1);
    const curDrop = (typeof AppState !== 'undefined' && AppState.course && typeof AppState.course.dropIndex === 'number') ? AppState.course.dropIndex : (typeof dropAtual !== 'undefined' ? dropAtual : 0);
    const botaoAvancar = typeof document !== 'undefined' ? document.getElementById('btn-avancar') : null;

    if (curEtapa === 5 && !uxExecutarAgora && botaoAvancar && typeof iniciarEstadoBotao === 'function') {
        if (!iniciarEstadoBotao(botaoAvancar, 'Concluindo módulo...')) return;
        const continuarConclusao = () => avancarEtapa(true);
        if (typeof requestAnimationFrame === 'function') requestAnimationFrame(continuarConclusao);
        else continuarConclusao();
        return;
    }

    if (curEtapa === 1) {
        if (curDrop < totalDrops - 1) {
            AppState.setDrop(curDrop + 1);
            renderizarEtapa();
            return;
        } else {
            AppState.setStage(2);
            AppState.setDrop(0);
            renderizarEtapa();
            return;
        }
    }

    if (curEtapa < 5) {
        AppState.setStage(curEtapa + 1);
        AppState.setDrop(0);
        renderizarEtapa();
    } else {
        const prog = typeof progressoGlobal !== 'undefined' ? progressoGlobal : {};
        if (mod) {
            const targetLvl = (typeof AppState !== 'undefined' && AppState.course && AppState.course.level) ? String(AppState.course.level).toLowerCase() : ((typeof nivelAtivo !== 'undefined' && nivelAtivo) ? nivelAtivo.toLowerCase() : 'a1');

            if (typeof AppState !== 'undefined') {
                if (typeof AppState.markModuleCompleted === 'function') {
                    AppState.markModuleCompleted(mod.id, targetLvl);
                }
                if (typeof AppState.unlockNextModule === 'function') {
                    AppState.unlockNextModule(targetLvl, modIdx);
                }
            } else {
                if (!Array.isArray(prog.modulosConcluidos)) prog.modulosConcluidos = [];
                if (!prog.modulosConcluidos.includes(mod.id)) prog.modulosConcluidos.push(mod.id);
                if (typeof salvarProgressoGlobal === 'function') salvarProgressoGlobal();
            }

            if (typeof sincronizarBaralhoSRS === 'function') sincronizarBaralhoSRS(targetLvl);
            if (typeof atualizarBadgeSRS === 'function') atualizarBadgeSRS(targetLvl);
            const modNum = typeof modIdx !== 'undefined' ? (modIdx + 1) : '';
            const modTitleText = (mod && mod.title) ? `: ${mod.title}` : '';
            const motivoXP = `Conclusão do Módulo ${modNum}${modTitleText}`;
            if (typeof adicionarXP === 'function') adicionarXP(50, motivoXP);
        }
        if (typeof finalizarSessaoEstudo === 'function') {
            finalizarSessaoEstudo('completion', { activityCountDelta: 1, contentId: mod && mod.id ? mod.id : `module-${modIdx + 1}` });
        }
        alert("🎉 Parabéns! Você concluiu este módulo!");
        fecharAula();
        if (botaoAvancar && typeof restaurarEstadoBotao === 'function') restaurarEstadoBotao(botaoAvancar);
    }
}
function voltarEtapa() {
    const curEtapa = (typeof AppState !== 'undefined' && AppState.course && AppState.course.stage) ? AppState.course.stage : (typeof etapaAtual !== 'undefined' ? etapaAtual : 1);
    const curDrop = (typeof AppState !== 'undefined' && AppState.course && typeof AppState.course.dropIndex === 'number') ? AppState.course.dropIndex : (typeof dropAtual !== 'undefined' ? dropAtual : 0);

    if (curEtapa === 1) {
        if (curDrop > 0) {
            AppState.setDrop(curDrop - 1);
            renderizarEtapa();
        }
        return;
    }
    AppState.setStage(curEtapa - 1);
    AppState.setDrop(0);
    renderizarEtapa();
}

function verificarRespostaPraticaMassa(idx, isCorrect, btnElement) {
    if (btnElement && btnElement.parentElement) {
        btnElement.parentElement.querySelectorAll('button').forEach(b => b.disabled = true);
    }
    if (isCorrect) {
        if (btnElement) {
            btnElement.style.backgroundColor = '#22c55e';
            btnElement.style.color = '#fff';
        }
        if (typeof playBeep === 'function') playBeep('success');
    } else {
        if (btnElement) {
            btnElement.style.backgroundColor = '#ef4444';
            btnElement.style.color = '#fff';
        }
        if (typeof playBeep === 'function') playBeep('error');
    }
}

function verificarDialogoMassa(idx, feedback, isCorrect, btnElement) {
    verificarRespostaPraticaMassa(idx, isCorrect, btnElement);
}

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.loadCourseModule = loadCourseModule;
    window.courseConvert = courseConvert;
    window.initializeCourse = initializeCourse;
    window.eNivelDesbloqueado = eNivelDesbloqueado;
    window.eModuloDesbloqueado = eModuloDesbloqueado;
    window.eModuloAprendido = eModuloAprendido;
    window.concluirModuloHiragana = concluirModuloHiragana;
    window.concluirModuloKatakana = concluirModuloKatakana;
    window.concluirModuloKanji = concluirModuloKanji;
    window.calcularProgressoGlobal = calcularProgressoGlobal;
    window.atualizarNomeUsuario = atualizarNomeUsuario;
    window.atualizarUIProgresso = atualizarUIProgresso;
    window.abrirTrilha = abrirTrilha;
    window.voltarAoHub = voltarAoHub;
    window.iniciarModulo = iniciarModulo;
    window.fecharAula = fecharAula;
    window.renderizarEtapa = renderizarEtapa;
    window.avancarEtapa = avancarEtapa;
    window.voltarEtapa = voltarEtapa;
    window.verificarRespostaPraticaMassa = verificarRespostaPraticaMassa;
    window.verificarDialogoMassa = verificarDialogoMassa;
}
