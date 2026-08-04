// ======================================
// MÓDULO PRONÚNCIA - RENDER MODULE
// ======================================

const PTBR_VICIO_TOPICS = [
    'p_a1_epenthesis_elimination',
    'p_a2_th_sound_mastery',
    'p_b1_dark_l_sound',
    'p_b1_flap_t_glottal_stop',
    'p_a1_vowels_cat_cut',
    'p_a2_silent_letters_reductions'
];

function renderPronunciaModule(nivelFiltro = 'A1', searchQuery = '', vicioTopicId = 'all') {
    const container = document.getElementById('pronunciaDisplay');
    if (!container) return;

    const dataBase = typeof PRONUNCIATION_DATA !== 'undefined' ? PRONUNCIATION_DATA : [];
    if (!dataBase || dataBase.length === 0) {
        console.error('[Pronúncia] Dataset de fonética ausente ou vazio.');
        if (typeof aplicarEstadoVazioUX === 'function') {
            aplicarEstadoVazioUX(container, {
                type: 'error',
                icon: '⚠️',
                title: 'Conteúdo de pronúncia indisponível',
                description: typeof obterMensagemErroUX === 'function' ? obterMensagemErroUX('dataset') : 'O conteúdo não pôde ser carregado.',
                recommendation: 'Atualize a página para tentar novamente.',
                actionLabel: 'Tentar novamente',
                action: 'window.location.reload()'
            });
        }
        return;
    }

    container.innerHTML = '';
    const query = searchQuery.trim().toLowerCase();
    let totalTopicosRenderizados = 0;

    dataBase.forEach(secData => {
        if (vicioTopicId === 'all' && nivelFiltro !== 'all' && secData.level !== nivelFiltro) return;

        const filteredTopics = secData.topics.filter(t => {
            if (vicioTopicId !== 'all') {
                return t.id === vicioTopicId;
            }
            if (!query) return true;
            return t.title.toLowerCase().includes(query) ||
                   t.description.toLowerCase().includes(query) ||
                   t.ipaSymbol.toLowerCase().includes(query) ||
                   (t.minimalPairs && t.minimalPairs.some(p => p.word1.toLowerCase().includes(query) || p.word2.toLowerCase().includes(query)));
        });

        if (filteredTopics.length === 0) return;
        totalTopicosRenderizados += filteredTopics.length;

        const secBox = document.createElement('div');
        secBox.className = 'pronuncia-section-box';
        secBox.style.cssText = 'background:var(--card-bg); border:2px solid var(--border-color); border-radius:16px; padding:24px; margin-bottom:28px; box-shadow:var(--shadow);';

        let topicsHtml = filteredTopics.map((t, topicIdx) => {
            const isPTBRFocus = PTBR_VICIO_TOPICS.includes(t.id);
            const ptbrBadge = isPTBRFocus ? `<span class="badge" style="background:rgba(234, 179, 8, 0.15); color:#d97706; border:1px solid #d97706; font-weight:bold; padding:4px 10px; border-radius:10px;">🇧🇷 Foco PT-BR</span>` : '';

            let pairsHtml = '';
            if (t.minimalPairs && Array.isArray(t.minimalPairs)) {
                pairsHtml = `
                    <div style="margin-top:16px; background:var(--bg-color); border:1px solid var(--border-color); border-radius:12px; padding:14px;">
                        <strong style="color:#028090; font-size:0.95rem; display:block; margin-bottom:10px;">⚖️ Pares Mínimos & Treino de Fala:</strong>
                        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:12px;">
                            ${t.minimalPairs.map((p, pIdx) => {
                                const btn1Id = `stt-btn-${t.id}-${pIdx}-1`;
                                const fb1Id = `stt-fb-${t.id}-${pIdx}-1`;
                                const btn2Id = `stt-btn-${t.id}-${pIdx}-2`;
                                const fb2Id = `stt-fb-${t.id}-${pIdx}-2`;
                                const safeW1 = p.word1.replace(/'/g, "\\'");
                                const safeW2 = p.word2.replace(/'/g, "\\'");

                                return `
                                    <div style="background:var(--card-bg); border:1px solid var(--border-color); border-radius:10px; padding:12px;">
                                        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
                                            <div>
                                                <div style="font-weight:bold; font-size:1.1rem; color:var(--text-main);">${p.word1} <small style="color:#028090; font-weight:normal;">${p.ipa1}</small></div>
                                                <small style="color:var(--text-muted);">${p.meaning1}</small>
                                            </div>
                                            <div style="display:flex; gap:6px;">
                                                <button class="audio-btn" onclick="speakKana('${safeW1}')" style="font-size:1.1rem; padding:6px 10px; border-radius:8px;" title="Ouvir ${p.word1}">🔊</button>
                                                <button id="${btn1Id}" class="stt-btn" onclick="testarPronunciaVoz('${safeW1}', '${btn1Id}', '${fb1Id}')" title="Praticar pronúncia de ${p.word1}">🎙️ Praticar</button>
                                            </div>
                                        </div>
                                        <div id="${fb1Id}" style="margin-top:6px; display:none; border-top:1px dashed var(--border-color); padding-top:4px;"></div>
                                    </div>
                                    <div style="background:var(--card-bg); border:1px solid var(--border-color); border-radius:10px; padding:12px;">
                                        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
                                            <div>
                                                <div style="font-weight:bold; font-size:1.1rem; color:var(--text-main);">${p.word2} <small style="color:#028090; font-weight:normal;">${p.ipa2}</small></div>
                                                <small style="color:var(--text-muted);">${p.meaning2}</small>
                                            </div>
                                            <div style="display:flex; gap:6px;">
                                                <button class="audio-btn" onclick="speakKana('${safeW2}')" style="font-size:1.1rem; padding:6px 10px; border-radius:8px;" title="Ouvir ${p.word2}">🔊</button>
                                                <button id="${btn2Id}" class="stt-btn" onclick="testarPronunciaVoz('${safeW2}', '${btn2Id}', '${fb2Id}')" title="Praticar pronúncia de ${p.word2}">🎙️ Praticar</button>
                                            </div>
                                        </div>
                                        <div id="${fb2Id}" style="margin-top:6px; display:none; border-top:1px dashed var(--border-color); padding-top:4px;"></div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `;
            }

            let rulesHtml = (t.rules || []).map(r => `<li style="margin-bottom:6px; color:var(--text-main); font-size:0.95rem;">📌 ${r}</li>`).join('');

            let quizHtml = '';
            if (t.quiz && Array.isArray(t.quiz)) {
                quizHtml = `
                    <div style="margin-top:16px; border-top:1px dashed var(--border-color); padding-top:14px;">
                        <strong style="color:#a855f7; font-size:0.95rem; display:block; margin-bottom:10px;">🧠 Teste de Fixação Fonética:</strong>
                        ${t.quiz.map((q, qIdx) => (typeof renderQuizQuestion === 'function' ? renderQuizQuestion(q, topicIdx * 10 + qIdx, 'pronuncia') : '')).join('')}
                    </div>
                `;
            }

            return `
                <div style="margin-bottom:24px; border-bottom:1px solid var(--border-color); padding-bottom:20px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:8px;">
                        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                            <h4 style="font-size:1.3rem; margin:0; color:var(--text-main); font-family:'Fredoka', sans-serif;">${t.title}</h4>
                            ${ptbrBadge}
                        </div>
                        <span class="badge" style="background:rgba(2, 128, 144, 0.15); color:#028090; border:1px solid #028090; font-weight:bold; padding:4px 10px; border-radius:10px;">${t.ipaSymbol}</span>
                    </div>
                    <p style="color:var(--text-muted); font-size:0.98rem; margin:6px 0 12px 0;">${t.description}</p>
                    <ul style="margin:0; padding-left:18px; list-style:none;">${rulesHtml}</ul>
                    ${pairsHtml}
                    ${quizHtml}
                </div>
            `;
        }).join('');

        secBox.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:12px;">
                <h3 style="font-size:1.5rem; color:#028090; margin:0; font-family:'Fredoka', sans-serif;">${secData.sectionTitle}</h3>
                <span class="badge" style="background:rgba(168, 85, 247, 0.15); color:#a855f7; border:1px solid #a855f7; font-weight:bold; padding:4px 12px; border-radius:12px;">${secData.levelBadge}</span>
            </div>
            <p style="color:var(--text-muted); font-size:0.98rem; margin-bottom:20px;">${secData.description}</p>
            ${topicsHtml}
        `;
        container.appendChild(secBox);
    });

    if (totalTopicosRenderizados === 0 && typeof aplicarEstadoVazioUX === 'function') {
        aplicarEstadoVazioUX(container, {
            icon: '🔍',
            title: 'Nenhum conteúdo encontrado',
            description: query ? `Não encontramos tópicos para “${searchQuery.trim()}”.` : 'Não há tópicos para os filtros selecionados.',
            recommendation: 'Limpe a busca e volte ao nível A1 para ver todos os tópicos iniciais.',
            actionLabel: 'Limpar filtros',
            action: 'limparFiltrosPronunciaUX()'
        });
    }
}

function limparFiltrosPronunciaUX() {
    const input = document.getElementById('pronunciaSearchInput');
    if (input) input.value = '';
    document.querySelectorAll('.pv-level-selector .pv-level-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-level') === 'A1');
    });
    document.querySelectorAll('.vicio-tag-btn').forEach(btn => btn.classList.remove('active'));
    const clearBtn = document.querySelector('.vicio-tag-btn.clear-btn');
    if (clearBtn) clearBtn.classList.add('active');
    renderPronunciaModule('A1', '', 'all');
    if (input && typeof input.focus === 'function') input.focus();
}
function filtrarNivelPronuncia(lvl, btn) {
    if (btn && btn.parentElement) {
        btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }
    document.querySelectorAll('.vicio-tag-btn').forEach(b => b.classList.remove('active'));
    const clearBtn = document.querySelector('.vicio-tag-btn.clear-btn');
    if (clearBtn) clearBtn.classList.add('active');

    const input = document.getElementById('pronunciaSearchInput');
    const query = input ? input.value : '';
    renderPronunciaModule(lvl, query, 'all');
}

function filtrarVicioPTBR(topicId, btn) {
    if (btn && btn.parentElement) {
        document.querySelectorAll('.vicio-tag-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }

    if (topicId !== 'all') {
        document.querySelectorAll('.pv-level-selector .pv-level-btn').forEach(b => b.classList.remove('active'));
    } else {
        document.querySelectorAll('.pv-level-selector .pv-level-btn').forEach(b => b.classList.remove('active'));
        const a1Btn = document.querySelector('.pv-level-selector .pv-level-btn[data-level="A1"]');
        if (a1Btn) a1Btn.classList.add('active');
    }

    const input = document.getElementById('pronunciaSearchInput');
    if (input) input.value = '';

    renderPronunciaModule(topicId === 'all' ? 'A1' : 'all', '', topicId);
}

function filtrarPronunciaPorSearch(query) {
    const activeBtn = document.querySelector('.pv-level-selector .pv-level-btn.active');
    const lvl = activeBtn ? activeBtn.getAttribute('data-level') : 'A1';
    const activeVicio = document.querySelector('.vicio-tag-btn.active:not(.clear-btn)');
    const vicioId = activeVicio ? activeVicio.getAttribute('data-topic-id') : 'all';
    renderPronunciaModule(vicioId !== 'all' ? 'all' : lvl, query, vicioId);
}

function initializePronunciation() {
    document.documentElement.style.setProperty('--current-primary', '#028090');
    if (document.getElementById('pronunciaDisplay') && typeof renderPronunciaModule === 'function') {
        renderPronunciaModule('A1');
    }
}


// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.PTBR_VICIO_TOPICS = PTBR_VICIO_TOPICS;
    window.renderPronunciaModule = renderPronunciaModule;
    window.limparFiltrosPronunciaUX = limparFiltrosPronunciaUX;
    window.filtrarNivelPronuncia = filtrarNivelPronuncia;
    window.filtrarVicioPTBR = filtrarVicioPTBR;
    window.filtrarPronunciaPorSearch = filtrarPronunciaPorSearch;
    window.initializePronunciation = initializePronunciation;
}
