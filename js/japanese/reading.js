'use strict';

let japaneseReadingItems = [], japaneseReadingCurrent = -1, japaneseReadingSessionStarted = false, japaneseReadingCollection = null;
const japaneseReadingActivity = new Set();
const readingEl = id => document.getElementById(id);
function installJapaneseProgressiveUI(){window.JapaneseUI=window.JapaneseUI||{};if(window.JapaneseUI.createProgressiveCollection)return;window.JapaneseUI.createProgressiveCollection=o=>{const c=o.container,f=document.createElement('div'),s=document.createElement('span'),b=document.createElement('button');f.className='jp-progressive-footer';s.className='jp-progressive-status';s.setAttribute('aria-live','polite');b.type='button';b.className='jp-load-more';b.textContent='Carregar mais';f.append(s,b);c.after(f);let a=[],n=0,z=o.batchSize||12;const u=()=>{s.textContent=`Exibindo ${n} de ${a.length}`;b.hidden=n>=a.length;f.hidden=!a.length},l=q=>{let x=n,e=Math.min(a.length,n+z);for(;n<e;n++)c.append(o.renderItem(a[n],n));u();if(q&&c.children[x])c.children[x].focus();if(o.afterRender)o.afterRender()};b.onclick=()=>l(true);u();return{reset:v=>{a=v||[];n=0;c.textContent='';l(false)},loadMore:l,revealThrough:p=>{let i=a.findIndex(p);while(i>=n)l(false);return i},getState:()=>({shown:n,total:a.length,batchSize:z})}}}
installJapaneseProgressiveUI();

function sanitizeReadingHtml(value) {
    const template = document.createElement('template'); template.innerHTML = String(value || '');
    const allowed = new Set(['RUBY', 'RT']);
    const clean = node => Array.from(node.childNodes).forEach(child => {
        if (child.nodeType !== 1) return;
        if (!allowed.has(child.tagName)) { child.replaceWith(document.createTextNode(child.textContent || '')); return; }
        Array.from(child.attributes).forEach(attribute => child.removeAttribute(attribute.name)); clean(child);
    });
    clean(template.content); return template.innerHTML;
}
function registerReadingActivity(item, eventType) {
    if (!item) return; const key = `${item.id}:${eventType}`; if (japaneseReadingActivity.has(key)) return; japaneseReadingActivity.add(key);
    if (typeof registrarAtividadeDiaria === 'function') registrarAtividadeDiaria();
    if (!japaneseReadingSessionStarted && typeof iniciarSessaoEstudo === 'function') { iniciarSessaoEstudo({ language: 'ja-JP', activityType: 'course', contentId: `reading-${item.id}` }); japaneseReadingSessionStarted = true; }
}
function getReadingOptions() {
    const options = typeof getOpcoesLeitura === 'function' ? getOpcoesLeitura() : {};
    return { furigana: options.furigana !== false, romaji: Boolean(options.romaji), translation: false };
}
function setReadingSupport(name, visible) {
    const button = document.querySelector(`[data-reading-toggle="${name}"]`); if (button) button.setAttribute('aria-pressed', visible ? 'true' : 'false');
    if (name === 'furigana') readingEl('reading-japanese').classList.toggle('hide-reading-furigana', !visible);
    else readingEl(`reading-${name}`).hidden = !visible;
}
function renderReadingQuestions(item) {
    const container = readingEl('reading-question-list'); container.innerHTML = ''; readingEl('reading-feedback').textContent = '';
    if (!item.questions.length) { container.textContent = 'Sem exercício de compreensão nesta leitura.'; return; }
    item.questions.forEach((question, questionIndex) => {
        const block = document.createElement('div'); block.className = 'reading-question';
        const title = document.createElement('p'); title.textContent = `${questionIndex + 1}. ${question.question}`; block.appendChild(title);
        const options = document.createElement('div'); options.className = 'reading-options';
        question.options.forEach((option, optionIndex) => { const button = document.createElement('button'); button.type = 'button'; button.textContent = option; button.addEventListener('click', () => { const correct = optionIndex === question.answerIndex; options.querySelectorAll('button').forEach(candidate => { candidate.removeAttribute('data-answer-state'); candidate.setAttribute('aria-pressed', 'false'); }); button.dataset.answerState = correct ? 'correct' : 'incorrect'; button.setAttribute('aria-pressed', 'true'); readingEl('reading-feedback').textContent = correct ? 'Resposta correta segundo o exercício original.' : 'Resposta diferente da indicada no exercício original.'; registerReadingActivity(item, `question-${questionIndex}`); }); options.appendChild(button); });
        block.appendChild(options); container.appendChild(block);
    });
}
function showReading(index) {
    if (index < 0 || index >= japaneseReadingItems.length) return; japaneseReadingCurrent = index; const item = japaneseReadingItems[index];
    readingEl('reading-library').hidden = true; readingEl('reading-reader').hidden = false; readingEl('reading-title').textContent = item.title; readingEl('reading-origin').textContent = `${item.referenceLevel} • ${item.moduleTitle}`; readingEl('reading-length').textContent = `${item.charCount} caracteres`;
    readingEl('reading-japanese').innerHTML = sanitizeReadingHtml(item.japaneseHtml); readingEl('reading-romaji').textContent = item.romaji || 'Apoio em Romaji não disponível.'; readingEl('reading-translation').textContent = item.translation;
    readingEl('reading-editorial').hidden = item.editorialStatus !== 'pending-human-review'; readingEl('reading-source').href = `${item.route}?module=${item.moduleIndex}`;
    const options = getReadingOptions(); setReadingSupport('furigana', options.furigana); setReadingSupport('romaji', options.romaji); setReadingSupport('translation', options.translation); renderReadingQuestions(item);
    readingEl('reading-previous').disabled = index === 0; readingEl('reading-next').disabled = index === japaneseReadingItems.length - 1; registerReadingActivity(item, 'open');
    const query = `?source=kanji&level=${encodeURIComponent(item.referenceLevel)}&text=${encodeURIComponent(item.id)}`; if (history.replaceState) history.replaceState(null, '', `${window.location.pathname}${query}`); window.scrollTo(0, 0);
}
function syncReadingLevelPills(level){document.querySelectorAll('.reading-filters-pills .dict-filter-pill').forEach(pill=>pill.classList.toggle('active',pill.dataset.level===level));const s=readingEl('reading-level');if(s)s.value=level}
function renderReadingLibrary(){const source=typeof JAPANESE_READING_INDEX!=='undefined'?JAPANESE_READING_INDEX:[],p=document.querySelector('.reading-filters-pills .dict-filter-pill.active'),level=p?p.dataset.level:(readingEl('reading-level')?readingEl('reading-level').value:'all'),query=readingEl('reading-search').value.trim().toLowerCase();japaneseReadingItems=source.filter(item=>(level==='all'||item.referenceLevel===level)&&(!query||`${item.title} ${item.plainText} ${item.moduleTitle}`.toLowerCase().includes(query)));readingEl('reading-count').textContent=`${japaneseReadingItems.length} leituras`;japaneseReadingCollection.reset(japaneseReadingItems);if(!japaneseReadingItems.length)readingEl('reading-grid').textContent='Nenhuma leitura corresponde aos filtros atuais.'}
function openReadingFromQuery(){const params=new URLSearchParams(window.location.search),requested=params.get('text');if(!requested)return false;const index=japaneseReadingItems.findIndex(item=>item.id===requested);if(index<0)return false;showReading(index);return true}
function initializeJapaneseReading(){const source=typeof JAPANESE_READING_INDEX!=='undefined'?JAPANESE_READING_INDEX:null;if(!Array.isArray(source)){readingEl('reading-grid').textContent='Biblioteca indisponível.';return}japaneseReadingCollection=window.JapaneseUI.createProgressiveCollection({container:readingEl('reading-grid'),batchSize: 12,renderItem(item){const index=japaneseReadingItems.indexOf(item),card=document.createElement('button');card.type='button';card.className='reading-card dict-entry-card';card.dataset.level=item.referenceLevel;const meta=document.createElement('div');meta.className='reading-meta';const badge=document.createElement('span');badge.className=`pill-badge badge-${item.referenceLevel.toLowerCase()}`;badge.textContent=item.referenceLevel;const statChars=document.createElement('span');statChars.className='reading-stat-badge';statChars.textContent=`📄 ${item.charCount} caracteres`;const statQuestions=document.createElement('span');statQuestions.className='reading-stat-badge';statQuestions.textContent=`❓ ${item.questions.length} questões`;meta.append(badge,statChars,statQuestions);const title=document.createElement('h2');title.className='reading-card-title';title.textContent=item.title;const origin=document.createElement('div');origin.className='reading-origin-meta';origin.textContent=item.moduleTitle;card.append(meta,title,origin);card.addEventListener('click',()=>showReading(index));return card}});const level=new URLSearchParams(window.location.search).get('level');if(['N5','N4','N3','N2','N1'].includes(level))syncReadingLevelPills(level);document.querySelectorAll('.reading-filters-pills .dict-filter-pill').forEach(pill=>pill.addEventListener('click',()=>{syncReadingLevelPills(pill.dataset.level||'all');renderReadingLibrary()}));if(readingEl('reading-level'))readingEl('reading-level').addEventListener('change',()=>{syncReadingLevelPills(readingEl('reading-level').value);renderReadingLibrary()});readingEl('reading-search').addEventListener('input',renderReadingLibrary);renderReadingLibrary();openReadingFromQuery();document.querySelectorAll('[data-reading-toggle]').forEach(button=>button.addEventListener('click',()=>setReadingSupport(button.dataset.readingToggle,button.getAttribute('aria-pressed')!=='true'))); readingEl('reading-audio').addEventListener('click', () => { const item = japaneseReadingItems[japaneseReadingCurrent]; if (item && typeof tocarAudio === 'function') { registerReadingActivity(item, 'audio'); tocarAudio(item.plainText, 'ja-JP', 1); } }); readingEl('reading-audio-slow').addEventListener('click', () => { const item = japaneseReadingItems[japaneseReadingCurrent]; if (item && typeof tocarAudio === 'function') { registerReadingActivity(item, 'audio'); tocarAudio(item.plainText, 'ja-JP', 0.65); } }); document.querySelectorAll('#reading-back, #reading-back-top, .reading-back-btn').forEach(btn => btn.addEventListener('click', () => { document.body.classList.remove('reading-focus'); readingEl('reading-reader').hidden = true; readingEl('reading-library').hidden = false; history.replaceState(null, '', window.location.pathname); })); readingEl('reading-focus').addEventListener('click',()=>{const active=document.body.classList.toggle('reading-focus');readingEl('reading-focus').setAttribute('aria-pressed',active?'true':'false')});readingEl('reading-previous').addEventListener('click',()=>showReading(japaneseReadingCurrent-1));readingEl('reading-next').addEventListener('click',()=>showReading(japaneseReadingCurrent+1));window.addEventListener('beforeunload',()=>{if(japaneseReadingSessionStarted&&typeof finalizarSessaoEstudo==='function')finalizarSessaoEstudo('navigation')})}
if(typeof window!=='undefined'){window.sanitizeReadingHtml=sanitizeReadingHtml;window.initializeJapaneseReading=initializeJapaneseReading;window.addEventListener('DOMContentLoaded',initializeJapaneseReading,{once:true})}
