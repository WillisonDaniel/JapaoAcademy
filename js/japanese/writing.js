'use strict';

let japaneseWritingItems = [], japaneseWritingCurrent = null, japaneseWritingMode = 'order', japaneseWritingSelected = [], japaneseWritingSessionStarted = false, japaneseWritingCollection = null;
const japaneseWritingActivity = new Set();
const writingEl = id => document.getElementById(id);
function installJapaneseProgressiveUI(){window.JapaneseUI=window.JapaneseUI||{};if(window.JapaneseUI.createProgressiveCollection)return;window.JapaneseUI.createProgressiveCollection=o=>{const c=o.container,f=document.createElement('div'),s=document.createElement('span'),b=document.createElement('button');f.className='jp-progressive-footer';s.className='jp-progressive-status';s.setAttribute('aria-live','polite');b.type='button';b.className='jp-load-more';b.textContent='Carregar mais';f.append(s,b);c.after(f);let a=[],n=0,z=o.batchSize||12;const u=()=>{s.textContent=`Exibindo ${n} de ${a.length}`;b.hidden=n>=a.length;f.hidden=!a.length},l=q=>{let x=n,e=Math.min(a.length,n+z);for(;n<e;n++)c.append(o.renderItem(a[n],n));u();if(q&&c.children[x])c.children[x].focus();if(o.afterRender)o.afterRender()};b.onclick=()=>l(true);u();return{reset:v=>{a=v||[];n=0;c.textContent='';l(false)},loadMore:l,revealThrough:p=>{let i=a.findIndex(p);while(i>=n)l(false);return i},getState:()=>({shown:n,total:a.length,batchSize:z})}}}
installJapaneseProgressiveUI();
function normalizeWritingComparison(value) { return String(value || '').normalize('NFKC').trim().replace(/[\s\u3000]+/gu, ''); }
function registerWritingActivity(item, eventType) {
    if (!item) return; const key = `${item.id}:${eventType}`; if (japaneseWritingActivity.has(key)) return; japaneseWritingActivity.add(key);
    if (typeof registrarAtividadeDiaria === 'function') registrarAtividadeDiaria();
    if (!japaneseWritingSessionStarted && typeof iniciarSessaoEstudo === 'function') { iniciarSessaoEstudo({ language: 'ja-JP', activityType: 'course', contentId: `writing-${item.id}` }); japaneseWritingSessionStarted = true; }
}
function writingIndex() { return typeof JAPANESE_WRITING_INDEX !== 'undefined' ? JAPANESE_WRITING_INDEX : []; }
function writingOriginHref(item) { return `${item.route}?level=${encodeURIComponent(item.level)}&module=${item.moduleIndex}`; }
function orderedWritingChunks(item) { if (!item || item.chunks.length < 2) return item ? item.chunks.map((value, originalIndex) => ({ value, originalIndex })) : []; const shift = (item.moduleIndex + item.itemIndex + 1) % item.chunks.length || 1; return item.chunks.map((value, originalIndex) => ({ value, originalIndex })).slice(shift).concat(item.chunks.map((value, originalIndex) => ({ value, originalIndex })).slice(0, shift)); }

function renderWritingLibrary() {
    const level = writingEl('writing-level').value, query = String(writingEl('writing-search').value || '').trim().toLocaleLowerCase('pt-BR');
    japaneseWritingItems = writingIndex().filter(item => (level === 'all' || item.level === level) && (!query || `${item.translation} ${item.sentence} ${item.moduleTitle}`.toLocaleLowerCase('pt-BR').includes(query)));
    writingEl('writing-count').textContent = `${japaneseWritingItems.length} modelos`; japaneseWritingCollection.reset(japaneseWritingItems);
    if (!japaneseWritingItems.length) writingEl('writing-grid').textContent = 'Nenhum modelo corresponde aos filtros atuais.';
}
function renderWritingOrder() {
    const item = japaneseWritingCurrent, bank = writingEl('writing-bank'), selected = writingEl('writing-selected'); bank.textContent = ''; selected.textContent = '';
    orderedWritingChunks(item).filter(chunk => !japaneseWritingSelected.some(entry => entry.originalIndex === chunk.originalIndex)).forEach(chunk => { const button = document.createElement('button'); button.type = 'button'; button.lang = 'ja'; button.textContent = chunk.value; button.addEventListener('click', () => { japaneseWritingSelected.push(chunk); renderWritingOrder(); registerWritingActivity(item, 'order'); }); bank.appendChild(button); });
    japaneseWritingSelected.forEach((chunk, index) => { const row = document.createElement('div'); row.className = 'writing-selected-row'; const token = document.createElement('span'); token.className = 'writing-selected-token'; token.lang = 'ja'; token.textContent = chunk.value; const up = document.createElement('button'); up.type = 'button'; up.textContent = '↑'; up.title = 'Mover bloco para cima'; up.disabled = index === 0; up.addEventListener('click', () => { [japaneseWritingSelected[index - 1], japaneseWritingSelected[index]] = [japaneseWritingSelected[index], japaneseWritingSelected[index - 1]]; renderWritingOrder(); }); const down = document.createElement('button'); down.type = 'button'; down.textContent = '↓'; down.title = 'Mover bloco para baixo'; down.disabled = index === japaneseWritingSelected.length - 1; down.addEventListener('click', () => { [japaneseWritingSelected[index + 1], japaneseWritingSelected[index]] = [japaneseWritingSelected[index], japaneseWritingSelected[index + 1]]; renderWritingOrder(); }); const remove = document.createElement('button'); remove.type = 'button'; remove.textContent = 'Remover'; remove.addEventListener('click', () => { japaneseWritingSelected.splice(index, 1); renderWritingOrder(); }); row.append(token, up, down, remove); selected.appendChild(row); });
    if (!japaneseWritingSelected.length) selected.textContent = 'Selecione os blocos na ordem desejada.';
}
function setWritingMode(mode) {
    if (!['order', 'copy', 'recall'].includes(mode)) return; japaneseWritingMode = mode; document.querySelectorAll('[data-writing-mode]').forEach(button => button.setAttribute('aria-pressed', button.dataset.writingMode === mode ? 'true' : 'false'));
    writingEl('writing-order').hidden = mode !== 'order'; writingEl('writing-free').hidden = mode === 'order'; writingEl('writing-model-wrap').hidden = mode === 'recall'; writingEl('writing-input').value = ''; writingEl('writing-result').textContent = ''; japaneseWritingSelected = []; renderWritingOrder();
}
function compareWriting() {
    const item = japaneseWritingCurrent; if (!item) return; const response = japaneseWritingMode === 'order' ? japaneseWritingSelected.map(chunk => chunk.value).join('') : writingEl('writing-input').value;
    if (!String(response).trim()) { writingEl('writing-result').textContent = 'Produza uma sequência antes de comparar.'; return; }
    const matches = normalizeWritingComparison(response) === normalizeWritingComparison(item.sentence); writingEl('writing-result').textContent = matches ? 'Sua produção corresponde ao modelo registrado.' : 'Sua produção difere do modelo registrado. Isso não significa que a variante seja linguisticamente errada.'; registerWritingActivity(item, 'compare');
}
function showWritingItem(item) {
    japaneseWritingCurrent = item; writingEl('writing-library').hidden = true; writingEl('writing-workshop').hidden = false; writingEl('writing-meta').textContent = `${item.level} • ${item.moduleTitle}`; writingEl('writing-title').textContent = item.translation; writingEl('writing-translation').textContent = item.translation; writingEl('writing-model').textContent = item.sentence; writingEl('writing-editorial').hidden = item.editorialStatus !== 'pending-human-review'; writingEl('writing-origin').href = writingOriginHref(item); setWritingMode('order'); registerWritingActivity(item, 'open');
    if (history.replaceState) history.replaceState(null, '', `${window.location.pathname}?model=${encodeURIComponent(item.id)}`); window.scrollTo(0, 0);
}
function resetWriting() { japaneseWritingSelected = []; writingEl('writing-input').value = ''; writingEl('writing-result').textContent = ''; renderWritingOrder(); }
function initializeJapaneseWriting() {
    if (!Array.isArray(writingIndex())) { writingEl('writing-grid').textContent = 'Oficina de escrita indisponível.'; return; }
    japaneseWritingCollection = window.JapaneseUI.createProgressiveCollection({ container: writingEl('writing-grid'), batchSize: 12, renderItem(item) { const card = document.createElement('button'); card.type = 'button'; card.className = 'writing-card'; const meta = document.createElement('div'); meta.className = 'writing-meta'; meta.textContent = `${item.level} • ${item.moduleTitle}`; const title = document.createElement('h2'); title.textContent = item.translation; const preview = document.createElement('div'); preview.className = 'writing-meta'; preview.lang = 'ja'; preview.textContent = item.sentence; card.append(meta, title, preview); card.addEventListener('click', () => showWritingItem(item)); return card; } });
    writingEl('writing-level').addEventListener('change', renderWritingLibrary); writingEl('writing-search').addEventListener('input', renderWritingLibrary); renderWritingLibrary();
    document.querySelectorAll('[data-writing-mode]').forEach(button => button.addEventListener('click', () => setWritingMode(button.dataset.writingMode))); writingEl('writing-compare').addEventListener('click', compareWriting); writingEl('writing-reset').addEventListener('click', resetWriting); writingEl('writing-back').addEventListener('click', () => { resetWriting(); writingEl('writing-workshop').hidden = true; writingEl('writing-library').hidden = false; history.replaceState(null, '', window.location.pathname); });
    writingEl('writing-audio').addEventListener('click', () => { const item = japaneseWritingCurrent; if (item && typeof tocarAudio === 'function') { registerWritingActivity(item, 'audio'); tocarAudio(item.sentence, 'ja-JP', 1); } });
    const requested = new URLSearchParams(window.location.search).get('model'), item = writingIndex().find(entry => entry.id === requested); if (item) showWritingItem(item);
    window.addEventListener('beforeunload', () => { if (japaneseWritingSessionStarted && typeof finalizarSessaoEstudo === 'function') finalizarSessaoEstudo('navigation'); });
}
if (typeof window !== 'undefined') { window.normalizeWritingComparison = normalizeWritingComparison; window.writingOriginHref = writingOriginHref; window.initializeJapaneseWriting = initializeJapaneseWriting; window.addEventListener('DOMContentLoaded', initializeJapaneseWriting, { once: true }); }
