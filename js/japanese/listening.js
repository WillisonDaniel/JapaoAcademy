'use strict';

let japaneseListeningItems = [], japaneseListeningIndex = 0, japaneseListeningMode = 'listen';
let japaneseListeningTimers = [], japaneseListeningRecognition = null, japaneseListeningSessionStarted = false;
const japaneseListeningPlayed = new Set();
const listeningEl = id => document.getElementById(id);

function setListeningStatus(message) { const el = listeningEl('listening-status'); if (el) el.textContent = message || ''; }
function currentListeningItem() { return japaneseListeningItems[japaneseListeningIndex] || null; }
function cancelListeningSequence() {
    japaneseListeningTimers.forEach(timer => clearTimeout(timer)); japaneseListeningTimers = [];
    if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
}
function registerListeningActivity(item) {
    if (!item || japaneseListeningPlayed.has(item.id)) return;
    japaneseListeningPlayed.add(item.id);
    if (typeof registrarAtividadeDiaria === 'function') registrarAtividadeDiaria();
    if (!japaneseListeningSessionStarted && typeof iniciarSessaoEstudo === 'function') {
        iniciarSessaoEstudo({ language: 'ja-JP', activityType: 'pronunciation', contentId: `listening-${item.level}` });
        japaneseListeningSessionStarted = true;
    }
}
function playListeningItem(rate, handlers = null) {
    const item = currentListeningItem(); if (!item) return false;
    registerListeningActivity(item); setListeningStatus(rate < 1 ? 'Reproduzindo devagar.' : 'Reproduzindo em velocidade normal.');
    return typeof tocarAudio === 'function' ? tocarAudio(item.audioText, 'ja-JP', rate, handlers) : false;
}
function revealListeningItem() {
    listeningEl('listening-content').classList.remove('listening-hidden');
    listeningEl('listening-instruction').textContent = 'Texto e tradução revelados.';
}
function renderListeningItem() {
    cancelListeningSequence(); const item = currentListeningItem();
    if (!item) { setListeningStatus('Nenhum trecho disponível para este filtro.'); return; }
    listeningEl('listening-origin').textContent = `${item.level} • ${item.moduleTitle}`;
    listeningEl('listening-position').textContent = `${japaneseListeningIndex + 1} de ${japaneseListeningItems.length}`;
    listeningEl('listening-item-title').textContent = item.displayText;
    listeningEl('listening-romaji').textContent = item.romaji || 'Apoio em Romaji não disponível.';
    listeningEl('listening-translation').textContent = item.translation;
    listeningEl('listening-content').classList.add('listening-hidden'); listeningEl('listening-instruction').textContent = 'Ouça antes de revelar o texto.';
    listeningEl('listening-editorial').hidden = item.editorialStatus !== 'pending-human-review';
    listeningEl('listening-source-link').href = `curso.html?level=${encodeURIComponent(item.level)}&module=${item.moduleIndex}`;
    listeningEl('listening-transcript').hidden = true; listeningEl('listening-transcript').textContent = ''; listeningEl('listening-self-review').hidden = true;
    listeningEl('listening-previous').disabled = japaneseListeningIndex === 0; listeningEl('listening-next').disabled = japaneseListeningIndex >= japaneseListeningItems.length - 1;
    setListeningStatus('');
}
function syncListeningLevelPills(level) {
    document.querySelectorAll('.listening-filters-pills .dict-filter-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.level === level);
    });
    const select = listeningEl('listening-level');
    if (select) select.value = level;
}
function applyListeningFilter() {
    const source = typeof JAPANESE_LISTENING_INDEX !== 'undefined' ? JAPANESE_LISTENING_INDEX : [];
    const activePill = document.querySelector('.listening-filters-pills .dict-filter-pill.active');
    const level = activePill ? activePill.dataset.level : (listeningEl('listening-level') ? listeningEl('listening-level').value : 'all');
    japaneseListeningItems = source.filter(item => level === 'all' || item.level === level); japaneseListeningIndex = 0;
    listeningEl('listening-count').textContent = `${japaneseListeningItems.length} trechos`;
    if (typeof history !== 'undefined' && typeof history.replaceState === 'function') history.replaceState(null, '', `${window.location.pathname}${level === 'all' ? '' : `?level=${encodeURIComponent(level)}`}`);
    renderListeningItem();
}
function setListeningMode(mode) {
    japaneseListeningMode = mode === 'shadowing' ? 'shadowing' : 'listen';
    document.querySelectorAll('[data-listening-mode]').forEach(button => {
        const isCurrent = button.dataset.listeningMode === japaneseListeningMode;
        button.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
        button.classList.toggle('active', isCurrent);
    });
    const shadowing = japaneseListeningMode === 'shadowing'; listeningEl('shadowing-settings').hidden = !shadowing; listeningEl('shadowing-start').hidden = !shadowing;
    listeningEl('listen-microphone').hidden = !shadowing; listeningEl('listen-normal').hidden = shadowing; listeningEl('listen-slow').hidden = shadowing; listeningEl('listening-self-review').hidden = true;
    setListeningStatus(shadowing ? 'Ouça, prepare-se e repita junto. A autoavaliação não gera nota.' : '');
}
function finishShadowing() { setListeningStatus('Sequência concluída. Escolha sua autoavaliação, sem nota.'); listeningEl('listening-self-review').hidden = false; }
function startShadowing() {
    cancelListeningSequence(); revealListeningItem(); const delaySeconds = parseInt(listeningEl('shadowing-delay').value, 10) || 0; const repeat = listeningEl('shadowing-repeat').checked;
    setListeningStatus('Primeira escuta. Aguarde o final.');
    const startAlong = () => {
        let remaining = delaySeconds;
        const tick = () => {
            if (remaining <= 0) {
                setListeningStatus('Agora repita junto com o áudio.');
                playListeningItem(0.85, repeat ? { onend: () => { const timer = setTimeout(() => { setListeningStatus('Repita junto mais uma vez.'); playListeningItem(0.85, { onend: finishShadowing }); }, 500); japaneseListeningTimers.push(timer); } } : { onend: finishShadowing }); return;
            }
            setListeningStatus(`Prepare-se: ${remaining}s`); remaining--; const timer = setTimeout(tick, 1000); japaneseListeningTimers.push(timer);
        }; tick();
    };
    if (!playListeningItem(1, { onend: startAlong })) setListeningStatus('Síntese de voz indisponível. O texto permanece disponível.');
}
function startListeningTranscription() {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition, output = listeningEl('listening-transcript'); output.hidden = false;
    if (!Recognition) { output.textContent = 'Microfone/reconhecimento de voz indisponível neste navegador. Você pode continuar sem ele.'; return; }
    if (japaneseListeningRecognition) japaneseListeningRecognition.abort(); japaneseListeningRecognition = new Recognition();
    Object.assign(japaneseListeningRecognition, { lang: 'ja-JP', interimResults: false, maxAlternatives: 1 });
    japaneseListeningRecognition.onstart = () => { output.textContent = 'Ouvindo… fale quando estiver pronto.'; };
    japaneseListeningRecognition.onresult = event => { const value = event.results?.[0]?.[0]?.transcript || ''; output.textContent = value ? `Transcrição bruta do navegador: ${value}` : 'O navegador não retornou transcrição.'; };
    japaneseListeningRecognition.onerror = event => { const messages = { 'not-allowed': 'Permissão do microfone negada.', 'audio-capture': 'Microfone indisponível.', 'no-speech': 'Nenhuma fala foi detectada.' }; output.textContent = messages[event.error] || 'Falha no reconhecimento de voz. Tente novamente ou continue sem microfone.'; };
    japaneseListeningRecognition.start();
}
function initializeJapaneseListening() {
    const source = typeof JAPANESE_LISTENING_INDEX !== 'undefined' ? JAPANESE_LISTENING_INDEX : null; if (!Array.isArray(source)) { setListeningStatus('Conteúdo auditivo indisponível.'); return; }
    const requested = new URLSearchParams(window.location.search).get('level');
    if (['A1', 'A2', 'B1', 'B2'].includes(requested)) syncListeningLevelPills(requested);
    document.querySelectorAll('.listening-filters-pills .dict-filter-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            syncListeningLevelPills(pill.dataset.level || 'all');
            applyListeningFilter();
        });
    });
    if (listeningEl('listening-level')) listeningEl('listening-level').addEventListener('change', () => {
        syncListeningLevelPills(listeningEl('listening-level').value);
        applyListeningFilter();
    });
    document.querySelectorAll('[data-listening-mode]').forEach(button => button.addEventListener('click', () => setListeningMode(button.dataset.listeningMode)));
    listeningEl('listen-normal').addEventListener('click', () => playListeningItem(1)); listeningEl('listen-slow').addEventListener('click', () => playListeningItem(0.65)); listeningEl('listen-reveal').addEventListener('click', revealListeningItem);
    listeningEl('shadowing-start').addEventListener('click', startShadowing); listeningEl('listen-microphone').addEventListener('click', startListeningTranscription);
    listeningEl('listening-previous').addEventListener('click', () => { if (japaneseListeningIndex > 0) { japaneseListeningIndex--; renderListeningItem(); } }); listeningEl('listening-next').addEventListener('click', () => { if (japaneseListeningIndex < japaneseListeningItems.length - 1) { japaneseListeningIndex++; renderListeningItem(); } });
    document.querySelectorAll('[data-self-review]').forEach(button => button.addEventListener('click', () => setListeningStatus(button.dataset.selfReview === 'repeat' ? 'Tudo bem: repita quantas vezes precisar.' : 'Autoavaliação mantida apenas nesta tela, sem nota ou métrica de domínio.')));
    window.addEventListener('beforeunload', () => { cancelListeningSequence(); if (japaneseListeningRecognition) japaneseListeningRecognition.abort(); if (japaneseListeningSessionStarted && typeof finalizarSessaoEstudo === 'function') finalizarSessaoEstudo('navigation'); });
    applyListeningFilter();
}
if (typeof window !== 'undefined') { window.initializeJapaneseListening = initializeJapaneseListening; window.addEventListener('DOMContentLoaded', initializeJapaneseListening, { once: true }); }
