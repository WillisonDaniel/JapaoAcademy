'use strict';

let jlptSession = [], jlptAnswers = new Map(), jlptCurrent = 0, jlptTimerId = null, jlptStartedAt = 0, jlptStudySessionStarted = false;
const jlptActivity = new Set();
const jlptEl = id => document.getElementById(id);
function normalizeJlptAnswer(value) { return String(value || '').normalize('NFKC').trim().replace(/\s+/gu, ' ').toLocaleLowerCase('pt-BR'); }
function jlptIndex() { return typeof JAPANESE_JLPT_PRACTICE_INDEX !== 'undefined' ? JAPANESE_JLPT_PRACTICE_INDEX : []; }
function selectJlptSession(items, level, origin, count) {
    const filtered = items.filter(item => item.level === level && (origin === 'all' || item.origin === origin)).slice().sort((a, b) => a.moduleIndex - b.moduleIndex || a.origin.localeCompare(b.origin) || a.questionIndex - b.questionIndex);
    const groups = Array.from(filtered.reduce((map, item) => { if (!map.has(item.moduleId)) map.set(item.moduleId, []); map.get(item.moduleId).push(item); return map; }, new Map()).values()), result = []; let round = 0;
    while (result.length < Math.min(count, filtered.length)) { let added = false; groups.forEach(group => { if (result.length < count && group[round]) { result.push(group[round]); added = true; } }); if (!added) break; round += 1; }
    return result;
}
function registerJlptActivity(item, eventType) {
    const key = `${item ? item.id : 'session'}:${eventType}`; if (jlptActivity.has(key)) return; jlptActivity.add(key); if (typeof registrarAtividadeDiaria === 'function') registrarAtividadeDiaria();
    if (!jlptStudySessionStarted && typeof iniciarSessaoEstudo === 'function') { iniciarSessaoEstudo({ language: 'ja-JP', activityType: 'course', contentId: 'jlpt-practice' }); jlptStudySessionStarted = true; }
}
function jlptOriginHref(item) { return `${item.route}?module=${item.moduleIndex}`; }
function updateJlptAvailability() { const level = jlptEl('jlpt-level').value, origin = jlptEl('jlpt-origin').value, available = jlptIndex().filter(item => item.level === level && (origin === 'all' || item.origin === origin)).length; jlptEl('jlpt-availability').textContent = `${available} questões existentes disponíveis em ${level}.`; jlptEl('jlpt-start').disabled = available === 0; }
function stopJlptTimer() { if (jlptTimerId) clearInterval(jlptTimerId); jlptTimerId = null; }
function formatJlptTime(milliseconds) { const seconds = Math.max(0, Math.floor(milliseconds / 1000)); return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`; }
function startJlptTimer(enabled) { stopJlptTimer(); jlptEl('jlpt-timer').hidden = !enabled; if (!enabled) return; jlptStartedAt = Date.now(); jlptEl('jlpt-timer').textContent = '00:00'; jlptTimerId = setInterval(() => { jlptEl('jlpt-timer').textContent = formatJlptTime(Date.now() - jlptStartedAt); }, 1000); }
function saveJlptAnswer(value) { const item = jlptSession[jlptCurrent]; if (!item) return; jlptAnswers.set(item.id, String(value)); jlptEl('jlpt-answer-status').textContent = 'Resposta mantida somente nesta sessão.'; registerJlptActivity(item, 'answer'); }

function syncJlptLevelPills(level) {
    document.querySelectorAll('.jlpt-level-pills .dict-filter-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.level === level);
    });
    const select = jlptEl('jlpt-level');
    if (select) select.value = level;
    updateJlptAvailability();
}
function syncJlptOriginPills(origin) {
    document.querySelectorAll('.jlpt-origin-pills .dict-filter-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.origin === origin);
    });
    const select = jlptEl('jlpt-origin');
    if (select) select.value = origin;
    updateJlptAvailability();
}
function syncJlptCountPills(count) {
    document.querySelectorAll('.jlpt-count-pills .dict-filter-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.count === String(count));
    });
    const select = jlptEl('jlpt-count');
    if (select) select.value = String(count);
}

function renderJlptQuestion() {
    const item = jlptSession[jlptCurrent], container = jlptEl('jlpt-answer'); if (!item) return; container.textContent = ''; jlptEl('jlpt-progress').textContent = `${item.level} • Item ${jlptCurrent + 1} de ${jlptSession.length} • ${item.origin === 'module-quiz' ? 'Módulo' : 'Leitura'}`; jlptEl('jlpt-question').textContent = item.question; jlptEl('jlpt-editorial').hidden = item.editorialStatus !== 'pending-human-review'; jlptEl('jlpt-answer-status').textContent = jlptAnswers.has(item.id) ? 'Resposta mantida somente nesta sessão.' : '';
    if (item.options.length) { const options = document.createElement('div'); options.className = 'jlpt-options'; item.options.forEach(option => { const button = document.createElement('button'); button.type = 'button'; button.textContent = option; button.setAttribute('aria-pressed', jlptAnswers.get(item.id) === option ? 'true' : 'false'); button.addEventListener('click', () => { saveJlptAnswer(option); renderJlptQuestion(); }); options.appendChild(button); }); container.appendChild(options); }
    else { const label = document.createElement('label'); label.textContent = 'Resposta conforme o formato do material original'; const input = document.createElement('input'); input.className = 'jlpt-input'; input.type = 'text'; input.autocomplete = 'off'; input.value = jlptAnswers.get(item.id) || ''; input.addEventListener('input', () => saveJlptAnswer(input.value)); label.appendChild(input); container.appendChild(label); }
    jlptEl('jlpt-previous').disabled = jlptCurrent === 0; jlptEl('jlpt-next').hidden = jlptCurrent === jlptSession.length - 1; jlptEl('jlpt-finish').hidden = jlptCurrent !== jlptSession.length - 1;
}
function startJlptSession() {
    const level = jlptEl('jlpt-level').value, origin = jlptEl('jlpt-origin').value, count = Number(jlptEl('jlpt-count').value); jlptSession = selectJlptSession(jlptIndex(), level, origin, count); if (!jlptSession.length) return; jlptAnswers = new Map(); jlptCurrent = 0; jlptEl('jlpt-config').hidden = true; jlptEl('jlpt-result').hidden = true; jlptEl('jlpt-session').hidden = false; startJlptTimer(jlptEl('jlpt-timer-enabled').checked); renderJlptQuestion(); registerJlptActivity(null, 'start');
}
function finishJlptSession() {
    stopJlptTimer(); let matched = 0, unanswered = 0; const reviews = jlptEl('jlpt-reviews'); reviews.textContent = '';
    jlptSession.forEach((item, index) => { const response = jlptAnswers.get(item.id) || '', isAnswered = Boolean(response.trim()), isMatch = isAnswered && (item.options.length ? response === item.answer : normalizeJlptAnswer(response) === normalizeJlptAnswer(item.answer)); if (!isAnswered) unanswered += 1; if (isMatch) matched += 1; const block = document.createElement('article'); block.className = `jlpt-review ${isMatch ? 'is-correct' : (isAnswered ? 'is-incorrect' : 'is-unanswered')}`; const title = document.createElement('h3'); title.textContent = `${index + 1}. ${isMatch ? 'Corresponde ao gabarito' : (isAnswered ? 'Difere do gabarito' : 'Não respondida')}`; const question = document.createElement('p'); question.textContent = item.question; const detail = document.createElement('p'); detail.textContent = `Sua resposta: ${response || '—'} • Gabarito armazenado: ${item.answer}`; const link = document.createElement('a'); link.href = jlptOriginHref(item); link.textContent = 'Abrir módulo de origem'; link.className = 'jp-action-tertiary'; block.append(title, question, detail, link); reviews.appendChild(block); });
    jlptEl('jlpt-summary').textContent = `${matched} de ${jlptSession.length} respostas correspondem aos gabaritos armazenados; ${unanswered} não respondidas.`; jlptEl('jlpt-session').hidden = true; jlptEl('jlpt-result').hidden = false; registerJlptActivity(null, 'finish'); window.scrollTo(0, 0);
}
function resetJlptSession() { stopJlptTimer(); jlptSession = []; jlptAnswers = new Map(); jlptEl('jlpt-result').hidden = true; jlptEl('jlpt-session').hidden = true; jlptEl('jlpt-config').hidden = false; updateJlptAvailability(); }
function initializeJapaneseJlpt() {
    if (!Array.isArray(jlptIndex())) { jlptEl('jlpt-availability').textContent = 'Preparação indisponível.'; return; }
    const totalCountEl = jlptEl('jlpt-total-count');
    const items = jlptIndex();
    if (totalCountEl && Array.isArray(items) && items.length > 0) {
        totalCountEl.textContent = `${items.length.toLocaleString('pt-BR')} questões`;
    }
    document.querySelectorAll('.jlpt-level-pills .dict-filter-pill').forEach(pill => {
        pill.addEventListener('click', () => syncJlptLevelPills(pill.dataset.level || 'N5'));
    });
    document.querySelectorAll('.jlpt-origin-pills .dict-filter-pill').forEach(pill => {
        pill.addEventListener('click', () => syncJlptOriginPills(pill.dataset.origin || 'all'));
    });
    document.querySelectorAll('.jlpt-count-pills .dict-filter-pill').forEach(pill => {
        pill.addEventListener('click', () => syncJlptCountPills(pill.dataset.count || '10'));
    });
    ['jlpt-level', 'jlpt-origin'].forEach(id => {
        const el = jlptEl(id);
        if (el) el.addEventListener('change', updateJlptAvailability);
    });
    updateJlptAvailability(); jlptEl('jlpt-start').addEventListener('click', startJlptSession); jlptEl('jlpt-previous').addEventListener('click', () => { if (jlptCurrent > 0) { jlptCurrent -= 1; renderJlptQuestion(); } }); jlptEl('jlpt-next').addEventListener('click', () => { if (jlptCurrent < jlptSession.length - 1) { jlptCurrent += 1; renderJlptQuestion(); } }); jlptEl('jlpt-finish').addEventListener('click', finishJlptSession); jlptEl('jlpt-new-session').addEventListener('click', resetJlptSession); window.addEventListener('beforeunload', () => { stopJlptTimer(); if (jlptStudySessionStarted && typeof finalizarSessaoEstudo === 'function') finalizarSessaoEstudo('navigation'); });
}
if (typeof window !== 'undefined') { window.normalizeJlptAnswer = normalizeJlptAnswer; window.selectJlptSession = selectJlptSession; window.jlptOriginHref = jlptOriginHref; window.initializeJapaneseJlpt = initializeJapaneseJlpt; window.addEventListener('DOMContentLoaded', initializeJapaneseJlpt, { once: true }); }

