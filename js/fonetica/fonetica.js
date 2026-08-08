/**
 * Motor Interativo de Fonética, Pronúncia, Tabela de Verbos, Heterotónicos e Regionalismos
 */

let fonAbaAtiva = 'fonetica';
let fonNivelAtivo = 'A1';
let verbFiltroTipo = 'todos';
let verbBuscaQuery = '';
let hetBuscaQuery = '';
let regBuscaQuery = '';

document.addEventListener('DOMContentLoaded', () => {
    inicializarFoneticaRecursos();
});

function inicializarFoneticaRecursos() {
    renderizarAbaAtiva();
}

/**
 * Alterna entre as 4 abas principais
 */
function alternarAbaFonetica(abaId) {
    fonAbaAtiva = abaId;

    ['fonetica', 'verbos', 'heterotonicos', 'regionalismos', 'acentuacao', 'sotaques', 'prosodia'].forEach(id => {
        const btnTab = document.getElementById(`tab-btn-${id}`);
        const secTab = document.getElementById(`sec-tab-${id}`);
        const isSelected = (id === abaId);

        if (btnTab) btnTab.classList.toggle('active-tab', isSelected);
        if (secTab) secTab.style.display = isSelected ? 'block' : 'none';
    });

    renderizarAbaAtiva();
}

function renderizarAbaAtiva() {
    if (fonAbaAtiva === 'fonetica') renderizarAbaFonetica();
    else if (fonAbaAtiva === 'verbos') renderizarAbaVerbos();
    else if (fonAbaAtiva === 'heterotonicos') renderizarAbaHeterotonicos();
    else if (fonAbaAtiva === 'regionalismos') renderizarAbaRegionalismos();
    else if (fonAbaAtiva === 'acentuacao') renderizarAbaAcentuacao();
    else if (fonAbaAtiva === 'sotaques') renderizarAbaSotaques();
    else if (fonAbaAtiva === 'prosodia') renderizarAbaProsodia();
}

// ----------------------------------------------------
// 🎙️ ABA 1: FONÉTICA & PRONÚNCIA (A1 a B2)
// ----------------------------------------------------
function selecionarNivelFonetica(lvl) {
    fonNivelAtivo = lvl.toUpperCase();
    ['a1', 'a2', 'b1', 'b2'].forEach(l => {
        const btn = document.getElementById(`btn-lvl-fon-${l}`);
        if (btn) btn.classList.toggle('selected-lvl', l === fonNivelAtivo.toLowerCase());
    });
    renderizarAbaFonetica();
}

function renderizarAbaFonetica() {
    const container = document.getElementById('fonetica-cards-container');
    if (!container) return;

    const dados = (typeof FONETICA_RECURSOS_ESPANHOL_DADOS !== 'undefined') ? FONETICA_RECURSOS_ESPANHOL_DADOS.fonetica : [];
    const topicosLvl = dados.filter(item => item.level === fonNivelAtivo);

    if (topicosLvl.length === 0) {
        container.innerHTML = `<div class="dict-empty-state">Nenhum tópico de fonética encontrado para o nível ${fonNivelAtivo}.</div>`;
        return;
    }

    container.innerHTML = topicosLvl.map((topico, idx) => {
        const exHtml = topico.examples.map(ex => `
            <div class="fon-example-chip">
                <span style="font-weight:bold; color:#0d9488;">${ex.es}</span>
                <span style="color:var(--text-muted); font-size:0.88rem;">(${ex.pt})</span>
                <button onclick="speakKana('${ex.audio.replace(/'/g, "\\'")}')" class="btn-audio-mini" title="Ouvir pronúncia">🔊</button>
            </div>
        `).join('');

        const quizHtml = topico.quiz.map((q, qIdx) => `
            <div class="fon-quiz-card">
                <div style="font-weight:bold; margin-bottom:10px;">❓ Questão ${qIdx + 1}: ${q.question}</div>
                <div style="display:flex; flex-direction:column; gap:8px;">
                    ${q.options.map((opt, oIdx) => `
                        <button class="fa-quiz-opt-btn" onclick="responderQuizFonetica(this, ${opt.isCorrect}, '${(opt.explanation || '').replace(/'/g, "\\'")}')">
                            ${opt.label}
                        </button>
                    `).join('')}
                </div>
                <div class="fon-quiz-feedback" style="display:none; margin-top:10px; font-weight:bold;"></div>
            </div>
        `).join('');

        const quizHeader = (topico.quiz && topico.quiz.length > 0) ? `<h4 style="margin-top:16px; margin-bottom:10px; color:#d97706; font-family:'Fredoka', sans-serif;">📝 Quiz de Fixação de Nível ${topico.level}:</h4>${quizHtml}` : '';

        return `
            <div class="fa-stage-card" style="text-align:left; margin-bottom:24px; background:var(--card-bg); border:2px solid var(--border-color); border-radius:16px; padding:20px; box-shadow:var(--shadow);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
                    <span class="tag" style="background:#10b981; color:#ffffff; padding:4px 14px; border-radius:20px; font-weight:700; font-size:0.78rem; font-family:'Fredoka', sans-serif; text-transform:uppercase;">NÍVEL ${topico.level}</span>
                    <h3 style="margin:0; font-family:'Fredoka', sans-serif; font-size:1.4rem; color:var(--primary-color, #0d9488); flex:1; margin-left:12px;">${topico.title}</h3>
                </div>
                <p style="font-size:1.05rem; color:var(--text-main); margin-bottom:14px; line-height:1.5;">${topico.summary}</p>
                <div style="background:var(--bg-color); border:1px solid var(--border-color); border-left:4px solid #10b981; border-radius:12px; padding:14px; margin-bottom:16px; color:var(--text-main);">
                    <strong>📌 Regra de Pronúncia:</strong> ${topico.rule}
                </div>

                <h4 style="margin-bottom:10px; color:var(--primary-color, #0d9488); font-family:'Fredoka', sans-serif;">🔊 Exemplos com Áudio Nativo:</h4>
                <div style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                    ${exHtml}
                </div>

                ${quizHeader}
            </div>
        `;
    }).join('');
}

function responderQuizFonetica(btn, isCorrect, explanation) {
    const parent = btn.parentElement;
    parent.querySelectorAll('.fa-quiz-opt-btn').forEach(b => {
        b.disabled = true;
        b.style.opacity = '0.65';
    });

    if (isCorrect) {
        btn.style.background = '#10b981';
        btn.style.color = '#ffffff';
    } else {
        btn.style.background = '#ef4444';
        btn.style.color = '#ffffff';
    }

    const card = parent.parentElement;
    const fb = card.querySelector('.fon-quiz-feedback');
    if (fb) {
        fb.style.display = 'block';
        fb.style.color = isCorrect ? '#059669' : '#dc2626';
        fb.innerHTML = (isCorrect ? '✅ Correto! ' : '❌ Incorreto. ') + explanation;
    }
}

// ----------------------------------------------------
// ⚡ ABA 2: CONJUGADOR & TABELA DE VERBOS
// ----------------------------------------------------
function filtrarTipoVerbo(tipo) {
    verbFiltroTipo = tipo;
    ['todos', 'regular', 'irregular', 'stem-changing'].forEach(t => {
        const btn = document.getElementById(`btn-verb-type-${t}`);
        if (btn) btn.classList.toggle('selected-verb-filter', t === tipo);
    });
    renderizarAbaVerbos();
}

function buscarVerbosInput(val) {
    verbBuscaQuery = (val || '').toLowerCase().trim();
    renderizarAbaVerbos();
}

function renderizarAbaVerbos() {
    const container = document.getElementById('verbos-table-container');
    if (!container) return;

    const dados = (typeof FONETICA_RECURSOS_ESPANHOL_DADOS !== 'undefined') ? FONETICA_RECURSOS_ESPANHOL_DADOS.verbos : [];
    let verbosFiltrados = dados;

    if (verbFiltroTipo !== 'todos') {
        verbosFiltrados = verbosFiltrados.filter(v => v.type === verbFiltroTipo);
    }

    if (verbBuscaQuery) {
        verbosFiltrados = verbosFiltrados.filter(v => 
            v.verb.toLowerCase().includes(verbBuscaQuery) || 
            v.translation.toLowerCase().includes(verbBuscaQuery)
        );
    }

    if (verbosFiltrados.length === 0) {
        container.innerHTML = `<div class="dict-empty-state">Nenhum verbo encontrado para os filtros selecionados.</div>`;
        return;
    }

    container.innerHTML = verbosFiltrados.map(v => {
        const c = v.conjugations;
        return `
            <div class="fa-stage-card" style="text-align:left; margin-bottom:28px;">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:16px;">
                    <div>
                        <h3 style="margin:0; font-family:'Fredoka', sans-serif; font-size:1.6rem; color:#0d9488;">
                            ${v.verb} <button onclick="speakKana('${v.verb}')" class="btn-audio-mini">🔊</button>
                        </h3>
                        <div style="color:var(--text-muted); font-size:0.95rem;">Português: <strong>${v.translation}</strong></div>
                    </div>
                    <span style="background:#fffbeb; color:#d97706; border:1.5px solid #fde68a; padding:5px 14px; border-radius:20px; font-weight:700; font-size:0.82rem; display:inline-block;">${v.typeLabel}</span>
                </div>

                <div class="table-responsive">
                    <table class="dict-table" style="width:100%; border-collapse:collapse;">
                        <thead>
                            <tr style="background:var(--bg-color); text-align:left;">
                                <th>Pessoa</th>
                                <th>Presente</th>
                                <th>Pretérito Indefinido</th>
                                <th>Pretérito Imperfecto</th>
                                <th>Futuro Simple</th>
                                <th>Subjuntivo</th>
                                <th>Imperativo</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${renderLinhaConjugacao('Yo (Eu)', c.presente.yo, c.indefinido.yo, c.imperfecto.yo, c.futuro.yo, c.subjuntivo.yo, c.imperativo.yo)}
                            ${renderLinhaConjugacao('Tú (Você)', c.presente.tu, c.indefinido.tu, c.imperfecto.tu, c.futuro.tu, c.subjuntivo.tu, c.imperativo.tu)}
                            ${renderLinhaConjugacao('Él / Ella / Usted', c.presente.el, c.indefinido.el, c.imperfecto.el, c.futuro.el, c.subjuntivo.el, c.imperativo.el)}
                            ${renderLinhaConjugacao('Nosotros (Nós)', c.presente.nosotros, c.indefinido.nosotros, c.imperfecto.nosotros, c.futuro.nosotros, c.subjuntivo.nosotros, c.imperativo.nosotros)}
                            ${renderLinhaConjugacao('Vosotros (Vós)', c.presente.vosotros, c.indefinido.vosotros, c.imperfecto.vosotros, c.futuro.vosotros, c.subjuntivo.vosotros, c.imperativo.vosotros)}
                            ${renderLinhaConjugacao('Ellos / Ellas / Uds.', c.presente.ellos, c.indefinido.ellos, c.imperfecto.ellos, c.futuro.ellos, c.subjuntivo.ellos, c.imperativo.ellos)}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }).join('');
}

function renderLinhaConjugacao(pronoun, pres, indef, imp, fut, subj, impet) {
    const fmt = val => {
        if (!val || val === '-') return '<span style="color:var(--text-muted);">-</span>';
        return `
            <span>${val}</span>
            <button onclick="speakKana('${val.replace(/'/g, "\\'")}')" class="btn-audio-micro">🔊</button>
        `;
    };

    return `
        <tr>
            <td style="font-weight:bold; color:var(--text-muted);">${pronoun}</td>
            <td>${fmt(pres)}</td>
            <td>${fmt(indef)}</td>
            <td>${fmt(imp)}</td>
            <td>${fmt(fut)}</td>
            <td>${fmt(subj)}</td>
            <td>${fmt(impet)}</td>
        </tr>
    `;
}

// ----------------------------------------------------
// 🎯 ABA 3: GUIA MESTRE DE HETEROTÓNICOS
// ----------------------------------------------------
function buscarHeterotonicosInput(val) {
    hetBuscaQuery = (val || '').toLowerCase().trim();
    renderizarAbaHeterotonicos();
}

function renderizarAbaHeterotonicos() {
    const container = document.getElementById('heterotonicos-grid-container');
    if (!container) return;

    const dados = (typeof FONETICA_RECURSOS_ESPANHOL_DADOS !== 'undefined') ? FONETICA_RECURSOS_ESPANHOL_DADOS.heterotonicos : [];
    let filtrados = dados;

    if (hetBuscaQuery) {
        filtrados = filtrados.filter(h => 
            h.word.toLowerCase().includes(hetBuscaQuery) || 
            h.translation.toLowerCase().includes(hetBuscaQuery)
        );
    }

    if (filtrados.length === 0) {
        container.innerHTML = `<div class="dict-empty-state">Nenhum heterotónico encontrado para a pesquisa.</div>`;
        return;
    }

    container.innerHTML = filtrados.map(h => `
        <div class="het-card">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <h3 style="margin:0; font-family:'Fredoka', sans-serif; font-size:1.4rem; color:#d97706;">
                    ${h.word}
                    <button onclick="speakKana('${h.word.replace(/'/g, "\\'")}')" class="btn-audio-mini">🔊</button>
                </h3>
                <span style="background:#fef2f2; color:#dc2626; border:1.5px solid #fecdd3; padding:5px 14px; border-radius:20px; font-weight:700; font-size:0.8rem; display:inline-block;">🎯 HETEROTÓNICO</span>
            </div>

            <div style="margin-bottom:12px; font-size:0.95rem;">
                <div style="color:var(--text-muted);">Português: <strong>${h.ptStress}</strong></div>
                <div style="color:#059669; font-weight:bold; font-size:1.05rem;">Espanhol: ${h.esStress}</div>
            </div>

            <div style="font-size:0.9rem; color:var(--text-muted); margin-bottom:10px;">
                Tradução: <strong>${h.translation}</strong>
            </div>

            <div style="background:#f0fdf4; border:1px solid #99f6e4; border-radius:10px; padding:10px; font-size:0.9rem; color:#0d9488;">
                <strong>Exemplo:</strong> "${h.example}"
                <button onclick="speakKana('${h.example.replace(/'/g, "\\'")}')" class="btn-audio-micro">🔊</button>
            </div>
        </div>
    `).join('');
}

// ----------------------------------------------------
// 🌍 ABA 4: REGIONALISMOS & VARIAÇÕES POR PAÍS
// ----------------------------------------------------
function buscarRegionalismosInput(val) {
    regBuscaQuery = (val || '').toLowerCase().trim();
    renderizarAbaRegionalismos();
}

function renderizarAbaRegionalismos() {
    const container = document.getElementById('regionalismos-table-container');
    if (!container) return;

    const dados = (typeof FONETICA_RECURSOS_ESPANHOL_DADOS !== 'undefined') ? FONETICA_RECURSOS_ESPANHOL_DADOS.regionalismos : [];
    let filtrados = dados;

    if (regBuscaQuery) {
        filtrados = filtrados.filter(r => {
            const c = (r.concept || r.concepto || '').toLowerCase();
            const es = (r.es || r.espanha || '').toLowerCase();
            const mx = (r.mx || r.mexico || '').toLowerCase();
            const ar = (r.ar || r.argentina || '').toLowerCase();
            const co = (r.co || r.colombia || '').toLowerCase();
            const cl = (r.cl || r.chile || '').toLowerCase();
            const ot = (r.otros || r.outros || '').toLowerCase();
            return c.includes(regBuscaQuery) || es.includes(regBuscaQuery) || mx.includes(regBuscaQuery) || ar.includes(regBuscaQuery) || co.includes(regBuscaQuery) || cl.includes(regBuscaQuery) || ot.includes(regBuscaQuery);
        });
    }

    if (filtrados.length === 0) {
        container.innerHTML = `<div class="dict-empty-state">Nenhum regionalismo encontrado.</div>`;
        return;
    }

    container.innerHTML = `
        <div class="table-responsive" style="background:var(--card-bg); border:2px solid var(--border-color); border-radius:16px; padding:16px; box-shadow:var(--shadow);">
            <table class="dict-table" style="width:100%; border-collapse:collapse;">
                <thead>
                    <tr style="background:var(--bg-color); text-align:left;">
                        <th>Conceito Neutro</th>
                        <th>🇪🇸 Espanha</th>
                        <th>🇲🇽 México</th>
                        <th>🇦🇷 Argentina</th>
                        <th>🇨🇴 Colômbia</th>
                        <th>🇨🇱 Chile</th>
                        <th>Outros Países</th>
                    </tr>
                </thead>
                <tbody>
                    ${filtrados.map(r => {
                        const c = r.concept || r.concepto || '';
                        const es = r.es || r.espanha || '-';
                        const mx = r.mx || r.mexico || '-';
                        const ar = r.ar || r.argentina || '-';
                        const co = r.co || r.colombia || '-';
                        const cl = r.cl || r.chile || '-';
                        const ot = r.otros || r.outros || '-';
                        return `
                            <tr>
                                <td style="font-weight:bold; color:var(--text-main);">${c}</td>
                                <td><span style="color:#d97706; font-weight:bold;">${es}</span> <button onclick="speakKana('${es.replace(/'/g, "\\'")}')" class="btn-audio-micro">🔊</button></td>
                                <td><span style="color:#2563eb; font-weight:bold;">${mx}</span> <button onclick="speakKana('${mx.replace(/'/g, "\\'")}')" class="btn-audio-micro">🔊</button></td>
                                <td><span style="color:#10b981; font-weight:bold;">${ar}</span> <button onclick="speakKana('${ar.replace(/'/g, "\\'")}')" class="btn-audio-micro">🔊</button></td>
                                <td><span style="color:#8b5cf6; font-weight:bold;">${co}</span> <button onclick="speakKana('${co.replace(/'/g, "\\'")}')" class="btn-audio-micro">🔊</button></td>
                                <td><span style="color:#e11d48; font-weight:bold;">${cl}</span> <button onclick="speakKana('${cl.replace(/'/g, "\\'")}')" class="btn-audio-micro">🔊</button></td>
                                <td style="color:var(--text-muted); font-size:0.88rem;">${ot}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// ----------------------------------------------------
// ✍️ ABA 5: ACENTUAÇÃO GRÁFICA & TILDE DIACRÍTICA (15 TÓPICOS)
// ----------------------------------------------------
function renderizarAbaAcentuacao() {
    const container = document.getElementById('acentuacao-cards-container');
    if (!container) return;

    const dados = (typeof FONETICA_RECURSOS_ESPANHOL_DADOS !== 'undefined' && Array.isArray(FONETICA_RECURSOS_ESPANHOL_DADOS.acentuacao))
        ? FONETICA_RECURSOS_ESPANHOL_DADOS.acentuacao
        : [];

    if (dados.length === 0) {
        container.innerHTML = `<div class="dict-empty-state">Nenhum tópico de acentuação encontrado.</div>`;
        return;
    }

    container.innerHTML = dados.map(item => {
        const exHtml = item.examples.map(ex => `
            <div class="fon-example-chip">
                <span style="font-weight:bold; color:#e11d48;">${ex.es}</span>
                <span style="color:var(--text-muted); font-size:0.88rem;">(${ex.pt})</span>
                <button onclick="speakKana('${ex.audio.replace(/'/g, "\\'")}')" class="btn-audio-mini" title="Ouvir pronúncia">🔊</button>
            </div>
        `).join('');

        return `
            <div class="fa-stage-card" style="text-align:left; margin-bottom:20px; background:var(--card-bg); border:2px solid var(--border-color); border-radius:16px; padding:20px; box-shadow:var(--shadow);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:8px;">
                    <span class="tag" style="background:#e11d48; color:#ffffff; padding:4px 14px; border-radius:20px; font-weight:700; font-size:0.78rem; font-family:'Fredoka', sans-serif;">ACENTUAÇÃO</span>
                    <h3 style="margin:0; font-family:'Fredoka', sans-serif; font-size:1.35rem; color:var(--text-main); flex:1; margin-left:10px;">${item.title}</h3>
                </div>
                <p style="font-size:1rem; color:var(--text-main); margin-bottom:12px; line-height:1.5;">${item.summary}</p>
                <div style="background:var(--bg-color); border:1px solid var(--border-color); border-left:4px solid #e11d48; border-radius:12px; padding:12px 16px; margin-bottom:14px; color:var(--text-main);">
                    <strong>📌 Regra Oficial:</strong> ${item.rule}
                </div>
                <h4 style="margin-bottom:8px; color:var(--text-muted); font-family:'Fredoka', sans-serif; font-size:0.95rem;">🔊 Exemplos Práticos:</h4>
                <div style="display:flex; flex-wrap:wrap; gap:10px;">
                    ${exHtml}
                </div>
            </div>
        `;
    }).join('');
}

// ----------------------------------------------------
// 🎙️ ABA 6: GUIA DE SOTAQUES & DIALETOS REGIONAIS (10 TÓPICOS)
// ----------------------------------------------------
function renderizarAbaSotaques() {
    const container = document.getElementById('sotaques-cards-container');
    if (!container) return;

    const dados = (typeof FONETICA_RECURSOS_ESPANHOL_DADOS !== 'undefined' && Array.isArray(FONETICA_RECURSOS_ESPANHOL_DADOS.sotaques))
        ? FONETICA_RECURSOS_ESPANHOL_DADOS.sotaques
        : [];

    if (dados.length === 0) {
        container.innerHTML = `<div class="dict-empty-state">Nenhum sotaque regional encontrado.</div>`;
        return;
    }

    container.innerHTML = dados.map(item => {
        const exHtml = item.examples.map(ex => `
            <div class="fon-example-chip">
                <span style="font-weight:bold; color:#0284c7;">${ex.es}</span>
                <span style="color:var(--text-muted); font-size:0.88rem;">(${ex.pt})</span>
                <button onclick="speakKana('${ex.audio.replace(/'/g, "\\'")}')" class="btn-audio-mini" title="Ouvir pronúncia regional">🔊</button>
            </div>
        `).join('');

        return `
            <div class="fa-stage-card" style="text-align:left; margin-bottom:20px; background:var(--card-bg); border:2px solid var(--border-color); border-radius:16px; padding:20px; box-shadow:var(--shadow);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:8px;">
                    <span class="tag" style="background:#0284c7; color:#ffffff; padding:4px 14px; border-radius:20px; font-weight:700; font-size:0.85rem; font-family:'Fredoka', sans-serif;">${item.region}</span>
                    <h3 style="margin:0; font-family:'Fredoka', sans-serif; font-size:1.35rem; color:var(--text-main); flex:1; margin-left:10px;">${item.title}</h3>
                </div>
                <p style="font-size:1rem; color:var(--text-main); margin-bottom:12px; line-height:1.5;">${item.summary}</p>
                <div style="background:var(--bg-color); border:1px solid var(--border-color); border-left:4px solid #0284c7; border-radius:12px; padding:12px 16px; margin-bottom:14px; color:var(--text-main);">
                    <strong>🎙️ Característica Fonética:</strong> ${item.rule}
                </div>
                <h4 style="margin-bottom:8px; color:var(--text-muted); font-family:'Fredoka', sans-serif; font-size:0.95rem;">🔊 Exemplos de Fala Regional:</h4>
                <div style="display:flex; flex-wrap:wrap; gap:10px;">
                    ${exHtml}
                </div>
            </div>
        `;
    }).join('');
}

// ----------------------------------------------------
// 🎭 ABA 7: PROSÓDIA, EXPRESSÕES DE FALA & MULETAS (5 TÓPICOS)
// ----------------------------------------------------
function renderizarAbaProsodia() {
    const container = document.getElementById('prosodia-cards-container');
    if (!container) return;

    const dados = (typeof FONETICA_RECURSOS_ESPANHOL_DADOS !== 'undefined' && Array.isArray(FONETICA_RECURSOS_ESPANHOL_DADOS.prosodia))
        ? FONETICA_RECURSOS_ESPANHOL_DADOS.prosodia
        : [];

    if (dados.length === 0) {
        container.innerHTML = `<div class="dict-empty-state">Nenhum tópico de prosódia encontrado.</div>`;
        return;
    }

    container.innerHTML = dados.map(item => {
        const exHtml = item.examples.map(ex => `
            <div class="fon-example-chip">
                <span style="font-weight:bold; color:#8b5cf6;">${ex.es}</span>
                <span style="color:var(--text-muted); font-size:0.88rem;">(${ex.pt})</span>
                <button onclick="speakKana('${ex.audio.replace(/'/g, "\\'")}')" class="btn-audio-mini" title="Ouvir entonação nativa">🔊</button>
            </div>
        `).join('');

        return `
            <div class="fa-stage-card" style="text-align:left; margin-bottom:20px; background:var(--card-bg); border:2px solid var(--border-color); border-radius:16px; padding:20px; box-shadow:var(--shadow);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:8px;">
                    <span class="tag" style="background:#8b5cf6; color:#ffffff; padding:4px 14px; border-radius:20px; font-weight:700; font-size:0.78rem; font-family:'Fredoka', sans-serif;">PROSÓDIA & RITMO</span>
                    <h3 style="margin:0; font-family:'Fredoka', sans-serif; font-size:1.35rem; color:var(--text-main); flex:1; margin-left:10px;">${item.title}</h3>
                </div>
                <p style="font-size:1rem; color:var(--text-main); margin-bottom:12px; line-height:1.5;">${item.summary}</p>
                <div style="background:var(--bg-color); border:1px solid var(--border-color); border-left:4px solid #8b5cf6; border-radius:12px; padding:12px 16px; margin-bottom:14px; color:var(--text-main);">
                    <strong>🎭 Uso Prosódico Nativo:</strong> ${item.rule}
                </div>
                <h4 style="margin-bottom:8px; color:var(--text-muted); font-family:'Fredoka', sans-serif; font-size:0.95rem;">🔊 Exemplos de Entonação:</h4>
                <div style="display:flex; flex-wrap:wrap; gap:10px;">
                    ${exHtml}
                </div>
            </div>
        `;
    }).join('');
}

if (typeof window !== 'undefined') {
    window.alternarAbaFonetica = alternarAbaFonetica;
    window.selecionarNivelFonetica = selecionarNivelFonetica;
    window.responderQuizFonetica = responderQuizFonetica;
    window.filtrarTipoVerbo = filtrarTipoVerbo;
    window.buscarVerbosInput = buscarVerbosInput;
    window.buscarHeterotonicosInput = buscarHeterotonicosInput;
    window.buscarRegionalismosInput = buscarRegionalismosInput;
    window.renderizarAbaAcentuacao = renderizarAbaAcentuacao;
    window.renderizarAbaSotaques = renderizarAbaSotaques;
    window.renderizarAbaProsodia = renderizarAbaProsodia;
}
