// ======================================
// MÓDULO COURSE - TABS & MODULO PROGRESS
// ======================================

function renderCourseTabs() {
    const tabsContainer = document.getElementById('tabContainer');
    if (!tabsContainer) return;
    tabsContainer.innerHTML = '';

    const mode = document.body.getAttribute('data-mode') || (typeof courseMode !== 'undefined' ? courseMode : null);
    const modulesList = typeof getCourseData === 'function' ? getCourseData(mode) : null;
    if (!modulesList) return;

    modulesList.forEach((mod, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'tab-item-wrapper';
        wrapper.setAttribute('data-mod-index', index);

        const btn = document.createElement('button');
        btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = mod.level ? `Mod ${mod.module || (index + 1)} [${mod.level}]` : `Módulo ${mod.module || (index + 1)}`;
        btn.onclick = () => {
            document.querySelectorAll('#tabContainer .tab-btn').forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            if (typeof loadCourseModule === 'function') loadCourseModule(index);
        };

        const isCompleted = typeof eModuloAprendido === 'function' ? eModuloAprendido(index, mode) : false;
        const checkBtn = document.createElement('button');
        checkBtn.className = `tab-check-btn ${isCompleted ? 'completed' : ''}`;
        checkBtn.innerHTML = isCompleted ? '✅' : '⚪';
        checkBtn.title = isCompleted ? 'Módulo Concluído — clique para desmarcar' : 'Marcar como Concluído';
        checkBtn.onclick = (e) => {
            e.stopPropagation();
            toggleModuloConcluido(index, mode);
        };

        wrapper.appendChild(btn);
        wrapper.appendChild(checkBtn);
        tabsContainer.appendChild(wrapper);
    });
    tabsContainer.setAttribute('aria-busy', 'false');
    tabsContainer.setAttribute('aria-label', 'Módulos do curso');
}

function toggleModuloConcluido(modIdx, mode) {
    if (!mode) return;
    const t = mode.toLowerCase();
    let progressKey = null;
    let labelCurso = '';

    if (t === 'hiragana') { progressKey = 'progress_hiragana'; labelCurso = 'Hiragana'; }
    else if (t === 'katakana') { progressKey = 'progress_katakana'; labelCurso = 'Katakana'; }
    else if (t === 'kanji' || t === 'kanji_n5') { progressKey = 'progress_kanji'; labelCurso = 'Kanji N5'; }
    else if (t === 'kanji_n4') { progressKey = 'progress_kanji_n4'; labelCurso = 'Kanji N4'; }
    else if (t === 'kanji_n3') { progressKey = 'progress_kanji_n3'; labelCurso = 'Kanji N3'; }
    else if (t === 'kanji_n2') { progressKey = 'progress_kanji_n2'; labelCurso = 'Kanji N2'; }
    else if (t === 'kanji_n1') { progressKey = 'progress_kanji_n1'; labelCurso = 'Kanji N1'; }
    else if (t === 'phrasal_verbs' || t === 'phrasal') { progressKey = 'progress_phrasal_verbs'; labelCurso = 'Phrasal Verbs & Expressões'; }
    else return;

    const prog = (typeof AppState !== 'undefined' && AppState.user && AppState.user.progressoGlobal) ? AppState.user.progressoGlobal : (typeof progressoGlobal !== 'undefined' ? progressoGlobal : {});
    if (!prog[progressKey]) prog[progressKey] = [];

    const idx = prog[progressKey].indexOf(modIdx);
    const modulesList = typeof getCourseData === 'function' ? getCourseData(t) : null;
    const modTitle = modulesList && modulesList[modIdx] ? (modulesList[modIdx].title || `Módulo ${modIdx + 1}`) : `Módulo ${modIdx + 1}`;

    const totalModulos = modulesList ? modulesList.length : 1;
    const XP_BUDGETS = { hiragana: 500, katakana: 500, kanji: 550, kanji_n4: 800 };
    const xpTotalCurso = XP_BUDGETS[t] || 300;
    const xpPorModulo = Math.max(1, Math.round(xpTotalCurso / totalModulos));

    if (idx === -1) {
        if (typeof AppState !== 'undefined' && typeof AppState.markSpecialModuleCompleted === 'function') {
            AppState.markSpecialModuleCompleted(modIdx, t);
        } else {
            progressoGlobal[progressKey].push(modIdx);
            if (typeof salvarProgressoGlobal === 'function') salvarProgressoGlobal();
        }
        const deck = typeof sincronizarBaralhoSRS === 'function' ? sincronizarBaralhoSRS(t) : [];
        if (typeof atualizarBadgeSRS === 'function') atualizarBadgeSRS(t);
        if (typeof playBeep === 'function') playBeep('success');
        if (typeof adicionarXP === 'function') adicionarXP(xpPorModulo, `Módulo de ${labelCurso} concluído`);
        if (typeof finalizarSessaoEstudo === 'function') {
            finalizarSessaoEstudo('completion', { activityCountDelta: 1, contentId: `${t}-${modIdx + 1}` });
        }
        if (typeof mostrarToast === 'function') mostrarToast(`✅ <strong>${modTitle}</strong> de ${labelCurso} concluído! <br><small>${deck.length} cards disponíveis no SRS.</small>`);
        if (typeof registrarAtividadeDiaria === 'function') registrarAtividadeDiaria();
    } else {
        if (typeof AppState !== 'undefined' && typeof AppState.unmarkSpecialModuleCompleted === 'function') {
            AppState.unmarkSpecialModuleCompleted(modIdx, t);
        } else {
            progressoGlobal[progressKey].splice(idx, 1);
            if (typeof salvarProgressoGlobal === 'function') salvarProgressoGlobal();
        }
        const deck = typeof sincronizarBaralhoSRS === 'function' ? sincronizarBaralhoSRS(t) : [];
        if (typeof atualizarBadgeSRS === 'function') atualizarBadgeSRS(t);
        if (typeof playBeep === 'function') playBeep('error');
        if (typeof removerXP === 'function') removerXP(xpPorModulo, `Módulo de ${labelCurso} desmarcado`);
        if (typeof mostrarToast === 'function') mostrarToast(`↩️ <strong>${modTitle}</strong> de ${labelCurso} desmarcado. <br><small>${deck.length} cards restantes no SRS.</small>`);
    }

    atualizarChecklistTabs(t);
    if (t === 'kanji' && typeof atualizarUIProgressoKanji === 'function') atualizarUIProgressoKanji();
    if (t === 'phrasal_verbs' || t === 'phrasal') {
        if (typeof atualizarDropdownPhrasalVerbs === 'function') atualizarDropdownPhrasalVerbs();
        if (typeof renderPhrasalVerbsModule === 'function') renderPhrasalVerbsModule(modIdx);
    }
}

function atualizarChecklistTabs(mode) {
    const t = mode ? mode.toLowerCase() : '';
    if (t === 'phrasal_verbs' || t === 'phrasal') {
        if (typeof atualizarDropdownPhrasalVerbs === 'function') atualizarDropdownPhrasalVerbs();
        return;
    }
    const wrappers = document.querySelectorAll('#tabContainer .tab-item-wrapper');
    wrappers.forEach(wrapper => {
        const modIdx = parseInt(wrapper.getAttribute('data-mod-index'));
        const checkBtn = wrapper.querySelector('.tab-check-btn');
        if (!checkBtn) return;
        const isCompleted = typeof eModuloAprendido === 'function' ? eModuloAprendido(modIdx, mode) : false;
        checkBtn.className = `tab-check-btn ${isCompleted ? 'completed' : ''}`;
        checkBtn.innerHTML = isCompleted ? '✅' : '⚪';
        checkBtn.title = isCompleted ? 'Módulo Concluído — clique para desmarcar' : 'Marcar como Concluído';
    });
}

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.renderCourseTabs = renderCourseTabs;
    window.toggleModuloConcluido = toggleModuloConcluido;
    window.atualizarChecklistTabs = atualizarChecklistTabs;
}
