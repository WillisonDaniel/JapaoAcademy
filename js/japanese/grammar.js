'use strict';

let japaneseGrammarItems = [], japaneseGrammarCurrent = null, japaneseGrammarSessionStarted = false, japaneseGrammarCollection = null;
const japaneseGrammarActivity = new Set();
const grammarEl = id => document.getElementById(id);
function installJapaneseProgressiveUI(){window.JapaneseUI=window.JapaneseUI||{};if(window.JapaneseUI.createProgressiveCollection)return;window.JapaneseUI.createProgressiveCollection=o=>{const c=o.container,f=document.createElement('div'),s=document.createElement('span'),b=document.createElement('button');f.className='jp-progressive-footer';s.className='jp-progressive-status';s.setAttribute('aria-live','polite');b.type='button';b.className='jp-load-more';b.textContent='Carregar mais';f.append(s,b);c.after(f);let a=[],n=0,z=o.batchSize||12;const u=()=>{s.textContent=`Exibindo ${n} de ${a.length}`;b.hidden=n>=a.length;f.hidden=!a.length},l=q=>{let x=n,e=Math.min(a.length,n+z);for(;n<e;n++)c.append(o.renderItem(a[n],n));u();if(q&&c.children[x])c.children[x].focus();if(o.afterRender)o.afterRender()};b.onclick=()=>l(true);u();return{reset:v=>{a=v||[];n=0;c.textContent='';l(false)},loadMore:l,revealThrough:p=>{let i=a.findIndex(p);while(i>=n)l(false);return i},getState:()=>({shown:n,total:a.length,batchSize:z})}}}
installJapaneseProgressiveUI();
const normalizeGrammarLookup = value => String(value || '').normalize('NFKC').trim().toLocaleLowerCase('pt-BR');

function registerGrammarActivity(item, eventType) {
    if (!item) return; const key = `${item.id}:${eventType}`; if (japaneseGrammarActivity.has(key)) return; japaneseGrammarActivity.add(key);
    if (typeof registrarAtividadeDiaria === 'function') registrarAtividadeDiaria();
    if (!japaneseGrammarSessionStarted && typeof iniciarSessaoEstudo === 'function') { iniciarSessaoEstudo({ language: 'ja-JP', activityType: 'course', contentId: `grammar-${item.id}` }); japaneseGrammarSessionStarted = true; }
}
function grammarOriginHref(item) { return item.source === 'course' ? `${item.route}?level=${encodeURIComponent(item.level)}&module=${item.moduleIndex}` : `${item.route}?module=${item.moduleIndex}`; }
function grammarIndex() { return typeof JAPANESE_GRAMMAR_INDEX !== 'undefined' ? JAPANESE_GRAMMAR_INDEX : { references: [], forms: [] }; }
function grammarReadingOptions() { return typeof getOpcoesLeitura === 'function' ? getOpcoesLeitura() : {}; }

function syncGrammarCefrPills(cefr) {
    document.querySelectorAll('.grammar-cefr-pills .dict-filter-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.cefr === cefr);
    });
    const select = grammarEl('grammar-cefr');
    if (select) select.value = cefr;
}
function syncGrammarJlptPills(jlpt) {
    document.querySelectorAll('.grammar-jlpt-pills .dict-filter-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.jlpt === jlpt);
    });
    const select = grammarEl('grammar-jlpt');
    if (select) select.value = jlpt;
}
function syncGrammarSourcePills(source) {
    document.querySelectorAll('.grammar-source-pills .dict-filter-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.source === source);
    });
    const select = grammarEl('grammar-source');
    if (select) select.value = source;
}

function renderGrammarLibrary() {
    const index = grammarIndex();
    const activeSourcePill = document.querySelector('.grammar-source-pills .dict-filter-pill.active');
    const source = activeSourcePill ? activeSourcePill.dataset.source : (grammarEl('grammar-source') ? grammarEl('grammar-source').value : 'all');
    const activeCefrPill = document.querySelector('.grammar-cefr-pills .dict-filter-pill.active');
    const cefr = activeCefrPill ? activeCefrPill.dataset.cefr : (grammarEl('grammar-cefr') ? grammarEl('grammar-cefr').value : 'all');
    const activeJlptPill = document.querySelector('.grammar-jlpt-pills .dict-filter-pill.active');
    const jlpt = activeJlptPill ? activeJlptPill.dataset.jlpt : (grammarEl('grammar-jlpt') ? grammarEl('grammar-jlpt').value : 'all');
    const query = normalizeGrammarLookup(grammarEl('grammar-search').value);

    japaneseGrammarItems = index.references.filter(item => (source === 'all' || item.source === source) && (item.framework !== 'CEFR' || cefr === 'all' || item.level === cefr) && (item.framework !== 'JLPT' || jlpt === 'all' || item.level === jlpt) && (!query || normalizeGrammarLookup(`${item.title} ${item.rule} ${item.formula} ${item.exampleText}`).includes(query)));
    grammarEl('grammar-count').textContent = `${japaneseGrammarItems.length} referências`; japaneseGrammarCollection.reset(japaneseGrammarItems);
    if (!japaneseGrammarItems.length) grammarEl('grammar-grid').textContent = 'Nenhuma referência corresponde aos filtros atuais.';
}

function renderGrammarPractice(reference) {
    const forms = grammarIndex().forms.filter(form => form.referenceId === reference.id), section = grammarEl('grammar-practice'), options = grammarEl('grammar-practice-options'); options.innerHTML = ''; grammarEl('grammar-practice-feedback').textContent = '';
    if (!forms.length) { section.hidden = true; return; }
    const target = forms[0], candidates = [target.output, ...grammarIndex().forms.filter(form => form.id !== target.id).map(form => form.output).filter((value, index, all) => all.indexOf(value) === index).slice(0, 3)].sort((a, b) => a.localeCompare(b, 'ja'));
    section.hidden = false; grammarEl('grammar-practice-question').textContent = `Segundo o exemplo original, qual forma corresponde a “${target.input}”?`;
    candidates.forEach(value => { const button = document.createElement('button'); button.type = 'button'; button.lang = 'ja'; button.textContent = value; button.addEventListener('click', () => { const correct = value === target.output; options.querySelectorAll('button').forEach(candidate => { candidate.removeAttribute('data-answer-state'); candidate.setAttribute('aria-pressed', 'false'); }); button.dataset.answerState = correct ? 'correct' : 'incorrect'; button.setAttribute('aria-pressed', 'true'); grammarEl('grammar-practice-feedback').textContent = correct ? 'Corresponde à transformação explícita do material original.' : 'Não corresponde à transformação indicada neste exemplo.'; registerGrammarActivity(reference, 'form-practice'); }); options.appendChild(button); });
}

function showGrammarReference(item) {
    japaneseGrammarCurrent = item; grammarEl('grammar-library').hidden = true; grammarEl('grammar-detail').hidden = false; grammarEl('grammar-detail-meta').textContent = `${item.framework} ${item.level} • ${item.moduleTitle} • ${item.category}`; grammarEl('grammar-title').textContent = item.title; grammarEl('grammar-rule').textContent = item.rule;
    grammarEl('grammar-formula').textContent = item.formula || 'Fórmula não fornecida no material de origem.'; grammarEl('grammar-example').textContent = item.exampleText || 'Exemplo não fornecido no material de origem.'; grammarEl('grammar-romaji').textContent = item.exampleRomaji || 'Romaji não fornecido no material de origem.'; grammarEl('grammar-translation').textContent = item.exampleTranslation || 'Tradução não fornecida no material de origem.';
    const options = grammarReadingOptions(), showRomaji = Boolean(options.romaji && item.exampleRomaji); grammarEl('grammar-romaji').hidden = !showRomaji; grammarEl('grammar-romaji-toggle').setAttribute('aria-pressed', showRomaji ? 'true' : 'false'); grammarEl('grammar-romaji-toggle').disabled = !item.exampleRomaji;
    grammarEl('grammar-support-note').textContent = 'Furigana não foi fornecido como campo estruturado nesta origem; nenhum apoio foi inventado.'; grammarEl('grammar-editorial').hidden = item.editorialStatus !== 'pending-human-review'; grammarEl('grammar-audio').disabled = !item.audioText; grammarEl('grammar-audio').title = item.audioText ? 'Síntese de voz do exemplo japonês explícito' : 'Exemplo japonês explícito indisponível para síntese'; grammarEl('grammar-origin').href = grammarOriginHref(item); renderGrammarPractice(item); registerGrammarActivity(item, 'open');
    const query = `?reference=${encodeURIComponent(item.id)}`; if (history.replaceState) history.replaceState(null, '', `${window.location.pathname}${query}`); window.scrollTo(0, 0);
}

function lookupGrammarForms() {
    const query = normalizeGrammarLookup(grammarEl('grammar-form-input').value), result = grammarEl('grammar-form-results'); result.innerHTML = '';
    if (!query) { result.textContent = 'Digite uma forma presente no material.'; return; }
    const matches = grammarIndex().forms.filter(form => normalizeGrammarLookup(form.input) === query || normalizeGrammarLookup(form.output) === query);
    if (!matches.length) { result.textContent = 'Forma não indexada. Esta ferramenta não conjuga entradas arbitrárias.'; return; }
    const table = document.createElement('table'); table.className = 'grammar-form-table'; const head = document.createElement('thead'); const row = document.createElement('tr'); ['Entrada', 'Forma registrada', 'Fonte'].forEach(label => { const th = document.createElement('th'); th.textContent = label; row.appendChild(th); }); head.appendChild(row); table.appendChild(head); const body = document.createElement('tbody');
    matches.forEach(form => { const tr = document.createElement('tr'); [form.input, form.output, `${form.level} • ${form.label}`].forEach((value, colIdx) => { const td = document.createElement('td'); if (colIdx < 2) td.lang = 'ja'; td.textContent = value; tr.appendChild(td); }); body.appendChild(tr); }); table.appendChild(body); result.appendChild(table); registerGrammarActivity(matches[0], 'form-lookup');
}

function initializeJapaneseGrammar() {
    const index = grammarIndex(); if (!index || !Array.isArray(index.references) || !Array.isArray(index.forms)) { grammarEl('grammar-grid').textContent = 'Referência gramatical indisponível.'; return; }
    japaneseGrammarCollection = window.JapaneseUI.createProgressiveCollection({
        container: grammarEl('grammar-grid'),
        batchSize: 12,
        renderItem(item) {
            const card = document.createElement('button');
            card.type = 'button';
            card.className = 'grammar-card dict-entry-card';
            card.dataset.level = item.level;
            card.dataset.framework = item.framework;
            const meta = document.createElement('div');
            meta.className = 'grammar-meta';
            meta.style.display = 'flex';
            meta.style.gap = '0.5rem';
            meta.style.alignItems = 'center';
            const badge = document.createElement('span');
            badge.className = `pill-badge badge-${item.level.toLowerCase()}`;
            badge.textContent = `${item.framework} ${item.level}`;
            const origin = document.createElement('span');
            origin.className = 'grammar-card-origin';
            origin.textContent = item.source === 'course' ? 'Curso' : 'Kanji';
            meta.append(badge, origin);
            const title = document.createElement('h2');
            title.className = 'grammar-card-title';
            title.textContent = item.title;
            const moduleMeta = document.createElement('div');
            moduleMeta.className = 'grammar-meta';
            moduleMeta.textContent = item.moduleTitle;
            card.append(meta, title, moduleMeta);
            card.addEventListener('click', () => showGrammarReference(item));
            return card;
        }
    });

    document.querySelectorAll('.grammar-cefr-pills .dict-filter-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            syncGrammarCefrPills(pill.dataset.cefr || 'all');
            renderGrammarLibrary();
        });
    });
    document.querySelectorAll('.grammar-jlpt-pills .dict-filter-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            syncGrammarJlptPills(pill.dataset.jlpt || 'all');
            renderGrammarLibrary();
        });
    });
    document.querySelectorAll('.grammar-source-pills .dict-filter-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            syncGrammarSourcePills(pill.dataset.source || 'all');
            renderGrammarLibrary();
        });
    });

    if (grammarEl('grammar-source')) grammarEl('grammar-source').addEventListener('change', () => {
        syncGrammarSourcePills(grammarEl('grammar-source').value);
        renderGrammarLibrary();
    });
    if (grammarEl('grammar-cefr')) grammarEl('grammar-cefr').addEventListener('change', () => {
        syncGrammarCefrPills(grammarEl('grammar-cefr').value);
        renderGrammarLibrary();
    });
    if (grammarEl('grammar-jlpt')) grammarEl('grammar-jlpt').addEventListener('change', () => {
        syncGrammarJlptPills(grammarEl('grammar-jlpt').value);
        renderGrammarLibrary();
    });

    grammarEl('grammar-search').addEventListener('input', renderGrammarLibrary); renderGrammarLibrary();
    grammarEl('grammar-form-search').addEventListener('click', lookupGrammarForms); grammarEl('grammar-form-input').addEventListener('keydown', event => { if (event.key === 'Enter') lookupGrammarForms(); }); grammarEl('grammar-back').addEventListener('click', () => { grammarEl('grammar-detail').hidden = true; grammarEl('grammar-library').hidden = false; history.replaceState(null, '', window.location.pathname); });
    grammarEl('grammar-romaji-toggle').addEventListener('click', () => { const visible = grammarEl('grammar-romaji').hidden; grammarEl('grammar-romaji').hidden = !visible; grammarEl('grammar-romaji-toggle').setAttribute('aria-pressed', visible ? 'true' : 'false'); }); grammarEl('grammar-audio').addEventListener('click', () => { const item = japaneseGrammarCurrent; if (item && item.audioText && typeof tocarAudio === 'function') { registerGrammarActivity(item, 'audio'); tocarAudio(item.audioText, 'ja-JP', 1); } });
    const requested = new URLSearchParams(window.location.search).get('reference'), item = index.references.find(reference => reference.id === requested); if (item) showGrammarReference(item);
    window.addEventListener('beforeunload', () => { if (japaneseGrammarSessionStarted && typeof finalizarSessaoEstudo === 'function') finalizarSessaoEstudo('navigation'); });
}
if (typeof window !== 'undefined') { window.normalizeGrammarLookup = normalizeGrammarLookup; window.grammarOriginHref = grammarOriginHref; window.initializeJapaneseGrammar = initializeJapaneseGrammar; window.addEventListener('DOMContentLoaded', initializeJapaneseGrammar, { once: true }); }

