// ======================================
// MÓDULO PHRASAL - NAVIGATION & SELECTION
// ======================================

let pvNivelAtivo = 'A1';

function filtrarNivelPhrasalVerbs(nivel, btnEl) {
    if (!nivel) nivel = 'A1';
    pvNivelAtivo = nivel.toUpperCase();

    document.querySelectorAll('.pv-level-btn').forEach(btn => {
        const isMatch = btn.getAttribute('data-level') === pvNivelAtivo;
        btn.classList.toggle('active', isMatch);
    });

    const select = document.getElementById('pvModuleSelect');
    if (!select) return;

    const dataBase = typeof getCourseData === 'function' ? getCourseData('phrasal_verbs') : (typeof PHRASAL_VERBS_DATA !== 'undefined' ? PHRASAL_VERBS_DATA : null);
    if (!dataBase || !Array.isArray(dataBase)) return;

    select.innerHTML = '';
    let primeiroGlobalIndex = -1;

    dataBase.forEach((mod, idx) => {
        if (mod.level === pvNivelAtivo) {
            if (primeiroGlobalIndex === -1) primeiroGlobalIndex = idx;
            const isCompleted = typeof eModuloAprendido === 'function' ? eModuloAprendido(idx, 'phrasal_verbs') : false;
            const option = document.createElement('option');
            option.value = idx;
            option.textContent = `${isCompleted ? '✅' : '📖'} Módulo ${mod.module}: ${mod.title.replace(/^Module \d+:\s*/, '')}`;
            select.appendChild(option);
        }
    });

    if (primeiroGlobalIndex !== -1) {
        select.value = primeiroGlobalIndex;
        if (typeof loadCourseModule === 'function') loadCourseModule(primeiroGlobalIndex);
    }
}

function selecionarModuloDropdown(indexGlobal) {
    const idx = parseInt(indexGlobal, 10);
    if (isNaN(idx)) return;
    if (typeof loadCourseModule === 'function') loadCourseModule(idx);
}

function atualizarDropdownPhrasalVerbs() {
    const select = document.getElementById('pvModuleSelect');
    if (!select) return;

    const dataBase = typeof getCourseData === 'function' ? getCourseData('phrasal_verbs') : (typeof PHRASAL_VERBS_DATA !== 'undefined' ? PHRASAL_VERBS_DATA : null);
    if (!dataBase || !Array.isArray(dataBase)) return;

    const currentVal = parseInt(select.value, 10);

    select.innerHTML = '';
    dataBase.forEach((mod, idx) => {
        if (mod.level === pvNivelAtivo) {
            const isCompleted = typeof eModuloAprendido === 'function' ? eModuloAprendido(idx, 'phrasal_verbs') : false;
            const option = document.createElement('option');
            option.value = idx;
            option.textContent = `${isCompleted ? '✅' : '📖'} Módulo ${mod.module}: ${mod.title.replace(/^Module \d+:\s*/, '')}`;
            select.appendChild(option);
        }
    });

    if (!isNaN(currentVal)) {
        select.value = currentVal;
    }
}

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.pvNivelAtivo = pvNivelAtivo;
    window.filtrarNivelPhrasalVerbs = filtrarNivelPhrasalVerbs;
    window.selecionarModuloDropdown = selecionarModuloDropdown;
    window.atualizarDropdownPhrasalVerbs = atualizarDropdownPhrasalVerbs;
}
