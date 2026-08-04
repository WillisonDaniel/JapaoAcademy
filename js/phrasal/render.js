// ======================================
// MÓDULO PHRASAL - RENDER MODULE
// ======================================

function renderPhrasalVerbsModule(moduleIndex) {
    const container = document.getElementById('moduleDisplay');
    const mode = document.body.getAttribute('data-mode') || (typeof courseMode !== 'undefined' ? courseMode : null);
    const dataBase = typeof getCourseData === 'function' ? getCourseData(mode) : (typeof PHRASAL_VERBS_DATA !== 'undefined' ? PHRASAL_VERBS_DATA : null);
    if (!container || !dataBase) return;

    const moduleData = dataBase[moduleIndex];
    if (!moduleData) return;

    container.setAttribute('aria-busy', 'true');
    container.innerHTML = '';

    if (moduleData.level && moduleData.level !== pvNivelAtivo) {
        pvNivelAtivo = moduleData.level;
        document.querySelectorAll('.pv-level-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-level') === pvNivelAtivo);
        });
        if (typeof atualizarDropdownPhrasalVerbs === 'function') atualizarDropdownPhrasalVerbs();
    }
    const select = document.getElementById('pvModuleSelect');
    if (select) select.value = moduleIndex;

    const isCompleted = typeof eModuloAprendido === 'function' ? eModuloAprendido(moduleIndex, 'phrasal_verbs') : false;

    // 1. Cabeçalho do Módulo
    const headerDiv = document.createElement('div');
    headerDiv.className = 'module-header';
    headerDiv.style.marginBottom = '24px';

    const levelBadgeColors = {
        'A1': 'background: rgba(2, 128, 144, 0.15); color: #028090; border: 1px solid #028090;',
        'A2': 'background: rgba(34, 197, 94, 0.15); color: #16a34a; border: 1px solid #16a34a;',
        'B1': 'background: rgba(234, 179, 8, 0.15); color: #ca8a04; border: 1px solid #ca8a04;',
        'B2': 'background: rgba(239, 68, 68, 0.15); color: #dc2626; border: 1px solid #dc2626;'
    };
    const bColor = levelBadgeColors[moduleData.level] || levelBadgeColors['A1'];

    headerDiv.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:8px;">
            <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                <span class="badge" style="${bColor} font-weight:bold; padding:4px 12px; border-radius:12px; font-size:0.9rem;">
                    🎯 Nível ${moduleData.level}
                </span>
                <span style="font-size:0.9rem; color:var(--text-muted); font-weight:600;">Módulo ${moduleData.module} de ${dataBase.length}</span>
            </div>
            <button onclick="toggleModuloConcluido(${moduleIndex}, 'phrasal_verbs')" class="btn-secundario" style="padding:6px 14px; font-size:0.88rem; font-weight:600; border-radius:10px; cursor:pointer;">
                ${isCompleted ? '✅ Módulo Concluído' : '⚪ Marcar como Concluído'}
            </button>
        </div>
        <h2 class="module-title" style="font-size:1.8rem; margin:6px 0 10px 0; color:var(--text-main); font-family:'Fredoka', sans-serif;">${moduleData.title}</h2>
        <p style="color:var(--text-muted); font-size:1rem; line-height:1.5; margin:0;">${moduleData.description}</p>
    `;
    container.appendChild(headerDiv);

    // 2. Lista de Cards dos Items
    if (moduleData.items && Array.isArray(moduleData.items)) {
        const itemsTitle = document.createElement('h3');
        itemsTitle.className = 'section-title';
        itemsTitle.style.marginTop = '20px';
        itemsTitle.innerHTML = '⚡ Phrasal Verbs & Expressões do Módulo';
        container.appendChild(itemsTitle);

        moduleData.items.forEach((item, idx) => {
            const card = document.createElement('div');
            card.className = 'phrasal-card-layout';

            const safeVerb = (item.verb || '').replace(/'/g, "\\'");
            const safeType = item.breakdown ? item.breakdown.type : 'Phrasal Verb';
            const safeRoot = item.breakdown ? item.breakdown.root : '';
            const safeParticle = item.breakdown ? item.breakdown.particle : '';
            const btnMicId = `btn-mic-pv-card-${moduleIndex}-${idx}`;

            let examplesHtml = '';
            if (item.examples && Array.isArray(item.examples)) {
                examplesHtml = item.examples.map((ex, exIdx) => {
                    const safeSent = (ex.sentence || '').replace(/'/g, "\\'");
                    const exMicId = `btn-mic-pv-ex-${moduleIndex}-${idx}-${exIdx}`;
                    return `
                        <li style="margin-bottom:8px;">
                            <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                <span style="font-weight:600; color:var(--text-main); font-size:0.95rem;">${ex.sentence}</span>
                                <button class="audio-btn" onclick="speakKana('${safeSent}')" style="font-size:0.8rem; padding:2px 8px; border-radius:6px;" title="Ouvir pronunciar">🔊</button>
                                <button class="btn-mic" id="${exMicId}" onclick="gravarEPronunciar('${safeSent}', '${exMicId}')" style="font-size:0.75rem; padding:2px 8px; border-radius:6px; background:rgba(37, 99, 235, 0.1); color:#2563eb; border:1px solid #2563eb; font-weight:600; cursor:pointer; transition:all 0.2s;" title="Treinar Pronúncia do Exemplo">🎙️ Treinar</button>
                            </div>
                            <small style="color:var(--text-muted); font-size:0.88rem; display:block; margin-top:2px;">${ex.translation}</small>
                        </li>
                    `;
                }).join('');
            }

            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:10px; margin-bottom:10px;">
                    <div>
                        <div class="phrasal-verb-title" style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                            <span>${item.verb}</span>
                            <button class="audio-btn" onclick="speakKana('${safeVerb}')" style="font-size:0.9rem; padding:4px 10px; border-radius:8px;" title="Ouvir pronunciar">🔊</button>
                            <button class="btn-mic" id="${btnMicId}" onclick="gravarEPronunciar('${safeVerb}', '${btnMicId}')" style="font-size:0.85rem; padding:4px 12px; border-radius:8px; background:#2563eb; color:#fff; border:none; font-weight:bold; cursor:pointer; display:inline-flex; align-items:center; gap:4px; box-shadow:0 2px 6px rgba(37,99,235,0.3);" title="Treinar Pronúncia do Phrasal Verb">🎙️ Treinar Pronúncia</button>
                        </div>
                        <div class="phrasal-meaning">📌 ${item.meaning}</div>
                    </div>
                    <span class="particle-badge" style="font-size:0.85rem;">🏷️ ${safeType}</span>
                </div>

                <div class="particles-breakdown">
                    <strong>🧩 Decomposição:</strong> Raiz: <em>${safeRoot}</em> + Partícula: <em>${safeParticle}</em>
                </div>

                <p style="margin:12px 0; color:var(--text-main); font-size:0.95rem; line-height:1.5;">
                    💡 <strong>Explicação:</strong> ${item.explanation}
                </p>

                <div class="examples-box" style="background:var(--bg-color); border:1px solid var(--border-color); border-radius:12px; padding:14px; margin-top:12px;">
                    <strong style="color:var(--phrasal-primary, var(--current-primary)); font-size:0.92rem; display:block; margin-bottom:8px;">📝 Exemplos de Uso Prático:</strong>
                    <ul style="margin:0; padding-left:18px; line-height:1.6;">
                        ${examplesHtml}
                    </ul>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // 3. Quiz Section
    if (moduleData.quiz && Array.isArray(moduleData.quiz)) {
        const quizContainer = document.createElement('div');
        quizContainer.className = 'quiz-section';
        quizContainer.style.marginTop = '32px';

        let quizHtml = `<h3 class="section-title" style="margin-bottom:16px;">🧠 Exercícios de Fixação de Phrasal Verbs</h3>`;
        quizHtml += moduleData.quiz.map((q, i) => renderQuizQuestion(q, i, 'phrasal_verbs')).join('');
        quizContainer.innerHTML = quizHtml;
        container.appendChild(quizContainer);
    }
    container.setAttribute('aria-busy', 'false');
    container.setAttribute('aria-label', 'Conteúdo do módulo');
}

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.renderPhrasalVerbsModule = renderPhrasalVerbsModule;
}
