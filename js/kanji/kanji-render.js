function safeKanjiText(value) {
    const text = String(value || '');
    return typeof escapeHTML === 'function' ? escapeHTML(text) : text;
}

function installJapaneseProgressiveUI(){window.JapaneseUI=window.JapaneseUI||{};if(window.JapaneseUI.createProgressiveCollection)return;window.JapaneseUI.createProgressiveCollection=o=>{const c=o.container,f=document.createElement('div'),s=document.createElement('span'),b=document.createElement('button');f.className='jp-progressive-footer';s.className='jp-progressive-status';s.setAttribute('aria-live','polite');b.type='button';b.className='jp-load-more';b.textContent='Carregar mais';f.append(s,b);c.after(f);let a=[],n=0,z=o.batchSize||12;const u=()=>{s.textContent=`Exibindo ${n} de ${a.length}`;b.hidden=n>=a.length;f.hidden=!a.length},l=q=>{let x=n,e=Math.min(a.length,n+z);for(;n<e;n++)c.append(o.renderItem(a[n],n));u();if(q&&c.children[x])c.children[x].focus();if(o.afterRender)o.afterRender()};b.onclick=()=>l(true);u();return{reset:v=>{a=v||[];n=0;c.textContent='';l(false)},loadMore:l,revealThrough:p=>{let i=a.findIndex(p);while(i>=n)l(false);return i},getState:()=>({shown:n,total:a.length,batchSize:z})}}}
installJapaneseProgressiveUI();

function bindKanjiAudio(root) {
    root.querySelectorAll('[data-kanji-audio]').forEach(button => button.addEventListener('click', event => {
        if (typeof playKanjiAudio === 'function') playKanjiAudio(button.dataset.kanjiAudio || '', event);
    }));
}

function renderKanjiModule(moduleIndex) {
    const container = document.getElementById('moduleDisplay');
    const mode = document.body.getAttribute('data-mode') || (typeof courseMode !== 'undefined' ? courseMode : null);
    const dataBase = typeof getCourseData === 'function' ? getCourseData(mode) : (typeof kanjiN5Data !== 'undefined' ? kanjiN5Data : null);
    if (!container || !dataBase) return;

    const moduleData = dataBase[moduleIndex];
    if (!moduleData) return;

    container.setAttribute('aria-busy', 'true');
    container.innerHTML = '';

    const headerDiv = document.createElement('div');
    headerDiv.className = 'module-header';
    const fNomeLocal = typeof fNome === 'function' ? fNome : (t => t);
    headerDiv.innerHTML = `
        <h2 class="module-title">${fNomeLocal(moduleData.title || `Módulo ${moduleIndex + 1}`)}</h2>
        <p style="margin-bottom:2rem; color:var(--text-muted);">${fNomeLocal(moduleData.description || moduleData.desc || '')}</p>
    `;
    container.appendChild(headerDiv);

    // BANNER DE GRAMÁTICA (nível derivado explicitamente do modo atual)
    if (moduleData.grammar) {
        const grammarDiv = document.createElement('div');
        grammarDiv.className = 'kanji-grammar-box';
        grammarDiv.style.cssText = 'background: rgba(180, 83, 9, 0.08); border: 2px solid #f59e0b; border-radius: 14px; padding: 18px 22px; margin-bottom: 28px; box-shadow: var(--shadow);';
        const grammarLevelByMode = {
            kanji: 'N5',
            kanji_n4: 'N4',
            kanji_n3: 'N3',
            kanji_n2: 'N2',
            kanji_n1: 'N1'
        };
        const grammarNivel = grammarLevelByMode[mode] || 'N5';
        const grammarContent = moduleData.grammar.content && typeof moduleData.grammar.content === 'object' ? moduleData.grammar.content : null;
        const grammarExample = safeKanjiText(grammarContent ? grammarContent.displayText : moduleData.grammar.example);
        const grammarTranslation = safeKanjiText(grammarContent ? grammarContent.translation : moduleData.grammar.translation);
        const grammarOptions = typeof getOpcoesLeitura === 'function' ? getOpcoesLeitura() : { romaji: false };
        const grammarRomaji = grammarContent && grammarOptions.romaji && grammarContent.romaji
            ? `<small class="japanese-romaji-text" style="display:block; margin-top:3px;">${safeKanjiText(grammarContent.romaji)}</small>` : '';
        const grammarAudio = grammarContent && grammarContent.audioText
            ? `<button type="button" class="audio-btn" data-kanji-audio="${safeKanjiText(grammarContent.audioText)}" title="Ouvir exemplo">🔊</button>` : '';
        grammarDiv.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
                <span style="font-size:1.4rem;">💡</span>
                <strong style="font-size:1.15rem; color:#f59e0b;">Gramática ${grammarNivel} Aplicada: ${moduleData.grammar.title}</strong>
            </div>
            <p style="font-size:0.95rem; color:var(--text-main); line-height:1.6; margin-bottom:12px;">${moduleData.grammar.explanation}</p>
            <div style="background:var(--card-bg); border-left:4px solid #f59e0b; padding:10px 14px; border-radius:8px; font-size:0.9rem;">
                <strong style="color:var(--text-main);">Exemplo Prático:</strong> <span style="color:#f59e0b; font-weight:bold;" lang="ja">${grammarExample}</span> ${grammarAudio}
                ${grammarRomaji}
                <small style="color:var(--text-muted); display:block; margin-top:3px;">"${grammarTranslation}"</small>
            </div>
        `;
        bindKanjiAudio(grammarDiv);
        container.appendChild(grammarDiv);
    }

    if (moduleData.isReviewTable) {
        const gridDiv = document.createElement('div');
        gridDiv.className = 'review-grid-container';

        let reviewKanjis = (moduleData.kanjis && moduleData.kanjis.length > 0) ? moduleData.kanjis : [];
        if (reviewKanjis.length === 0 && Array.isArray(dataBase)) {
            dataBase.forEach((mod, modIdx) => {
                if (mod && !mod.isReviewTable && mod.kanjis && Array.isArray(mod.kanjis)) {
                    mod.kanjis.forEach(k => {
                        reviewKanjis.push({
                            ...k,
                            originModule: mod.module || (modIdx + 1)
                        });
                    });
                }
            });
        }

        reviewKanjis.forEach(item => {
            try {
                const charVal = item.character || item.kanji || item.char || '';
                const meaningVal = item.meaning || item.significado || '';
                const kunVal = item.kunyomi || item.kun || '-';
                const onVal = item.onyomi || item.on || '-';

                const cell = document.createElement('div');
                cell.className = 'review-grid-cell';
                cell.tabIndex = -1;
                cell.innerHTML = `
                    <div class="grid-char" lang="ja">${charVal}</div>
                    <div class="grid-meaning">${meaningVal}</div>
                    <div class="grid-readings">
                        <div><strong>K:</strong> <span lang="ja">${kunVal.split(' ')[0]}</span></div>
                        <div><strong>O:</strong> <span lang="ja">${onVal.split(' ')[0]}</span></div>
                    </div>
                    <div class="grid-badge">Módulo ${item.originModule || '?'}</div>
                `;

                cell.addEventListener('click', (e) => {
                    if (typeof playKanjiAudio === 'function') playKanjiAudio(charVal, e);
                });

                gridDiv.appendChild(cell);
            } catch (err) {
                console.error("Erro ao renderizar celula de revisao kanji:", err);
            }
        });

        const reviewCells = Array.from(gridDiv.children);
        gridDiv.textContent = '';
        container.appendChild(gridDiv);
        window.JapaneseUI.createProgressiveCollection({ container: gridDiv, batchSize: 60, renderItem: cell => cell }).reset(reviewCells);
        return;
    }

    const gridDiv = document.createElement('div');
    gridDiv.className = 'kanji-grid';

    const kanjisList = moduleData.kanjis || [];
    kanjisList.forEach((item, index) => {
        try {
            const card = document.createElement('div');
            card.className = 'kana-card kanji-card-layout';
            card.tabIndex = -1;
            card.style.animationDelay = `${index * 0.05}s`;

            const charVal = item.character || item.kanji || item.char || '';
            const meaningVal = item.meaning || item.significado || '';
            const kunVal = item.kunyomi || item.kun || '-';
            const onVal = item.onyomi || item.on || '-';
            const review = item.readingEditorialReview || {};
            const hasPendingReading = Boolean(
                review.status === 'pending-human-review' ||
                (review.onyomi && review.onyomi.status === 'pending-human-review') ||
                (review.kunyomi && review.kunyomi.status === 'pending-human-review')
            );
            const readingPending = hasPendingReading
                ? '<small class="reading-editorial-pending">Leitura pendente de revisão editorial</small>' : '';
            const mnemonicVal = item.mnemonic || item.dica || '';
            const examplesList = item.examples || item.exemplos || [];

            let examplesHTML = '';
            if (examplesList.length > 0) {
                examplesHTML = `<div class="kanji-examples-title">Exemplos & Gramática:</div>`;
                examplesList.forEach(ex => {
                    const content = ex.content && typeof ex.content === 'object' ? ex.content : null;
                    const w = safeKanjiText(ex.word || ex.palavra || '');
                    const wm = safeKanjiText(ex.wordMeaning || ex.significadoPalavra || ex.significado || '');
                    const rawSentence = content ? content.displayText : (ex.sentence || ex.frase || '');
                    const audioText = content ? content.audioText : rawSentence;
                    const sm = safeKanjiText(content ? content.translation : (ex.sentenceMeaning || ex.traducaoFrase || ex.traducao || ''));
                    const readingOptions = typeof getOpcoesLeitura === 'function' ? getOpcoesLeitura() : { furigana: true, romaji: false };
                    const formatted = content && typeof formatarTextoJapones === 'function'
                        ? formatarTextoJapones({ kanji: safeKanjiText(rawSentence), kana: safeKanjiText(content.furigana), romaji: safeKanjiText(content.romaji) })
                        : null;
                    const s = formatted ? (formatted.htmlJapones || safeKanjiText(rawSentence)) : safeKanjiText(rawSentence);
                    const romajiHTML = content && readingOptions.romaji && content.romaji
                        ? `<div class="ex-romaji japanese-romaji-text">${safeKanjiText(content.romaji)}</div>` : '';
                    const audioAttribute = safeKanjiText(audioText);

                    examplesHTML += `
                        <div class="kanji-example-item">
                            <div class="ex-word">
                                <span lang="ja">${w}</span> ${wm ? `<span>(${wm})</span>` : ''}
                                ${audioText ? `<button type="button" class="audio-btn kanji-example-audio" data-kanji-audio="${audioAttribute}" title="Ouvir frase">🔊</button>` : ''}
                            </div>
                            ${s ? `<div class="ex-sentence" lang="ja">${s}</div>` : ''}
                            ${romajiHTML}
                            ${sm ? `<div class="ex-translation">"${sm}"</div>` : ''}
                        </div>
                    `;
                });
            }

            const mnemonicHTML = mnemonicVal
                ? `<div class="kanji-mnemonic">
                     <strong>💡 Dica Mnemônica:</strong> ${mnemonicVal}
                   </div>`
                : '';

            const canvasId = `canvas-kanji-${moduleIndex}-${index}`;
            const dictItemId = `kanji_${moduleIndex}_${charVal}`;
            const renderBotaoFav = typeof renderizarBotaoFavorito === 'function' ? renderizarBotaoFavorito(dictItemId) : '';
            const renderRadicaisKanjiLocal = typeof renderizarRadicaisKanji === 'function' ? renderizarRadicaisKanji(item.radicals) : '';

            card.innerHTML = `
                <div class="kanji-detail-grid">
                    <div class="kanji-main-box" style="position: relative;">
                        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-bottom: 6px;">
                            <span></span>
                            ${renderBotaoFav}
                        </div>
                        <div class="kanji-char" lang="ja">${charVal}</div>
                        <div class="kanji-meaning">${meaningVal}</div>
                        <button class="audio-btn" onclick="playKanjiAudio('${charVal}', event)" style="width:100%; margin-top:8px; padding: 8px;">🔊 Ouvir Kanji</button>

                        <div class="canvas-practice-box">
                            <span class="canvas-practice-title">✏️ Treino Motor do Ideograma:</span>
                            <canvas id="${canvasId}" class="kanji-canvas" width="200" height="200" data-char="${charVal}"></canvas>
                            <div class="canvas-toolbar">
                                <button class="canvas-btn btn-pincel" onclick="ativarPincelCanvas('${canvasId}')" title="Pincel">🖌️ Pincel</button>
                                <button class="canvas-btn btn-kakijun" onclick="animarKakijun('${canvasId}')" title="Ordem dos Traços">🎬 Traços</button>
                                <button class="canvas-btn btn-desfazer" onclick="desfazerUltimoTracoCanvas('${canvasId}')" title="Desfazer Traço">↩️ Desfazer</button>
                                <button class="canvas-btn btn-limpar" onclick="limparCanvas('${canvasId}')" title="Limpar">🧹 Limpar</button>
                                <button class="canvas-btn btn-guia" id="btn-guia-${canvasId}" onclick="alternarGuiaCanvas('${canvasId}')" title="Alternar Guia">👁️ Guia ON</button>
                                <button class="canvas-btn btn-verificar" onclick="verificarTracoCanvas('${canvasId}')" title="Verificar forma aproximada">✅ Verificar forma</button>
                            </div>
                        </div>
                    </div>
                    <div class="kanji-info-box">
                        <div class="kanji-reading-group">
                            <span class="reading-label">Kunyomi (Japonês):</span>
                            <div class="reading-val kunyomi-val" lang="ja">${kunVal}</div>
                        </div>
                        <div class="kanji-reading-group">
                            <span class="reading-label">Onyomi (Chino-Japonês):</span>
                            <div class="reading-val onyomi-val" lang="ja">${onVal}</div>
                        </div>
                        ${readingPending}
                        ${mnemonicHTML}
                        ${renderRadicaisKanjiLocal}
                        ${examplesHTML}
                    </div>
                </div>
            `;

            bindKanjiAudio(card);

            gridDiv.appendChild(card);
        } catch (err) {
            console.error("Erro ao renderizar card individual do Kanji N5:", err);
        }
    });

    const kanjiCards = Array.from(gridDiv.children);
    gridDiv.textContent = '';
    container.appendChild(gridDiv);
    window.JapaneseUI.createProgressiveCollection({
        container: gridDiv,
        batchSize: 6,
        renderItem: card => card,
        afterRender() { if (typeof inicializarTodosOsCanvases === 'function') inicializarTodosOsCanvases(); }
    }).reset(kanjiCards);

    if (moduleData.readingText) {
        const rtData = moduleData.readingText;
        const boxId = `kanji-reading-box-${moduleIndex}`;

        let compQuizHTML = '';
        if (rtData.comprehensionQuiz && Array.isArray(rtData.comprehensionQuiz) && rtData.comprehensionQuiz.length > 0) {
            const startIdx = (moduleData.quiz ? moduleData.quiz.length : 0) + 100;
            const questionsHtml = rtData.comprehensionQuiz.map((q, i) => (typeof renderQuizQuestion === 'function' ? renderQuizQuestion(q, startIdx + i, 'kanji') : '')).join('');
            compQuizHTML = `
                <div class="reading-comprehension-section">
                    <h4 class="reading-comp-title">📝 Questões de Interpretação do Texto:</h4>
                    ${questionsHtml}
                </div>
            `;
        }

        const readingDiv = document.createElement('div');
        readingDiv.className = 'kanji-reading-box';
        readingDiv.id = boxId;

        readingDiv.innerHTML = `
            <div class="reading-box-header">
                <div class="reading-title-group">
                    <span class="reading-icon">📖</span>
                    <div>
                        <h3 class="reading-box-title">Leitura Guiada: ${rtData.title || 'Texto em Contexto'}</h3>
                        <small style="color: var(--text-muted);">Pratique a leitura contextual com ideogramas, furigana e áudio.</small>
                    </div>
                </div>
                <div class="reading-controls">
                    <button class="reading-btn btn-audio" title="Ouvir Texto em velocidade normal">🔊 Ouvir Texto</button>
                    <button class="reading-btn btn-slow" title="Ouvir Texto em velocidade lenta">🐢 Lento</button>
                    <button class="reading-btn btn-furigana" title="Alternar visibilidade do Furigana">👁️ Furigana ON/OFF</button>
                    <button class="reading-btn btn-romaji" title="Alternar visibilidade do Romaji">🔤 Romaji ON/OFF</button>
                </div>
            </div>

            <div class="reading-japanese-text kana-text" lang="ja">
                ${rtData.japanese || ''}
                ${rtData.romaji ? `<div class="reading-romaji-text">${rtData.romaji}</div>` : ''}
            </div>

            ${rtData.translation ? `
                <details class="reading-translation-details">
                    <summary class="reading-translation-summary">🇧🇷 Ver Tradução em Português</summary>
                    <div class="reading-translation-content">
                        "${rtData.translation}"
                    </div>
                </details>
            ` : ''}

            ${compQuizHTML}
        `;

        const btnAudio = readingDiv.querySelector('.btn-audio');
        const btnSlow = readingDiv.querySelector('.btn-slow');
        const btnFurigana = readingDiv.querySelector('.btn-furigana');
        const btnRomaji = readingDiv.querySelector('.btn-romaji');

        if (btnAudio) btnAudio.onclick = () => playReadingTextAudio(rtData.japanese, 1.0);
        if (btnSlow) btnSlow.onclick = () => playReadingTextAudio(rtData.japanese, 0.65);
        if (btnFurigana) btnFurigana.onclick = () => readingDiv.classList.toggle('hide-furigana');
        if (btnRomaji) btnRomaji.onclick = () => readingDiv.classList.toggle('hide-romaji');

        container.appendChild(readingDiv);
    }

    // 4. EXERCÍCIOS DE FIXAÇÃO (Final da página)
    if (moduleData.quiz && moduleData.quiz.length > 0) {
        let quizHtml = moduleData.quiz.map((q, i) => (typeof renderQuizQuestion === 'function' ? renderQuizQuestion(q, i, 'kanji') : '')).join('');

        const quizDiv = document.createElement('div');
        quizDiv.className = 'quiz-section';
        quizDiv.style.marginTop = '40px';
        quizDiv.innerHTML = `<h3 class="section-title">🧠 Exercícios de Fixação do Módulo</h3>${quizHtml}`;

        container.appendChild(quizDiv);
    }

    if (typeof renderJapaneseResourceActions === 'function') renderJapaneseResourceActions(container, mode, moduleIndex, dataBase.length);
    if (typeof inicializarTodosOsCanvases === 'function') inicializarTodosOsCanvases();
    container.setAttribute('aria-busy', 'false');
    container.setAttribute('aria-label', 'Conteúdo do módulo');
}

function playReadingTextAudio(htmlText, rate = 1.0) {
    if (!('speechSynthesis' in window)) return;
    const temp = document.createElement('div');
    temp.innerHTML = htmlText;
    temp.querySelectorAll('rt').forEach(rt => rt.remove());
    const cleanText = (temp.textContent || temp.innerText || '').trim();

    if (!cleanText) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    const isEnglish = (document.body && document.body.getAttribute('data-lang') === 'english') || window.location.pathname.includes('en-US');
    utterance.lang = isEnglish ? 'en-US' : 'ja-JP';
    utterance.rate = rate;
    window.speechSynthesis.speak(utterance);
}

function playKanjiAudio(text, event) {
    if (event) event.stopPropagation();
    const cleanText = text.replace(/ \(.+\)/g, '').split('(')[0].trim();

    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(cleanText);
        const isEnglish = (document.body && document.body.getAttribute('data-lang') === 'english') || window.location.pathname.includes('en-US');
        utterance.lang = isEnglish ? 'en-US' : 'ja-JP';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    }
}

function renderJapaneseResourceActions(container, mode, moduleIndex, moduleCount) {
    if (!container || !['hiragana', 'katakana'].includes(mode) || moduleIndex !== moduleCount - 1) return;
    const resource = typeof getJapaneseResourceConfig === 'function' ? getJapaneseResourceConfig(mode) : null;
    if (!resource) return;
    const actions = document.createElement('section');
    actions.className = 'japanese-resource-actions';
    actions.setAttribute('aria-label', `Próximos passos de ${resource.label}`);
    actions.style.cssText = 'margin-top:32px;padding:22px;border:1px solid var(--border-color);border-radius:16px;background:var(--card-bg);text-align:center;';
    actions.innerHTML = `
        <h3 style="margin:0 0 8px;">Continue praticando ${resource.label}</h3>
        <p style="margin:0 0 16px;color:var(--text-muted);">Revise o conteúdo, pratique no minigame ou consulte os caracteres no dicionário.</p>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
            <button type="button" class="btn-primary" data-resource-action="review">Revisar no SRS</button>
            <button type="button" class="btn-secondary" data-resource-action="minigame">Praticar no minigame</button>
            <button type="button" class="btn-secondary" data-resource-action="dictionary">Abrir no dicionário</button>
        </div>`;
    actions.querySelector('[data-resource-action="review"]').onclick = () => {
        if (typeof iniciarSessaoSRS === 'function') iniciarSessaoSRS(resource.deckType);
    };
    actions.querySelector('[data-resource-action="minigame"]').onclick = () => { window.location.href = `minigame.html?mode=${resource.minigameMode}`; };
    actions.querySelector('[data-resource-action="dictionary"]').onclick = () => { window.location.href = `dicionario.html?cat=${resource.id}`; };
    container.appendChild(actions);
}

function initializeKanji(mode) {
    let primaryColor = 'var(--hira-primary)';

    if (mode === 'katakana') primaryColor = 'var(--kata-primary)';
    if (mode === 'kanji') primaryColor = 'var(--kanji-primary)';
    document.documentElement.style.setProperty('--current-primary', primaryColor);
    if (document.getElementById('dashboard-progresso-kanji')) {
        if (typeof atualizarUIProgressoKanji === 'function') atualizarUIProgressoKanji();
    } else if (document.getElementById('tabContainer')) {
        if (typeof renderCourseTabs === 'function') renderCourseTabs();
        if (typeof loadCourseModule === 'function') loadCourseModule(0);
    }
    if (typeof atualizarBadgeSRS === 'function') atualizarBadgeSRS(mode);
    if (typeof URLSearchParams !== 'undefined') {
        const requestedModule = parseInt(new URLSearchParams(window.location.search).get('module'), 10);
        const resource = typeof getJapaneseResourceConfig === 'function' ? getJapaneseResourceConfig(mode) : null;
        const level = resource && resource.id.startsWith('kanji_n') ? resource.id.replace('kanji_', '').toUpperCase() : 'N5';
        if (Number.isInteger(requestedModule) && requestedModule >= 0 && typeof eNivelKanjiDesbloqueado === 'function' && eNivelKanjiDesbloqueado(level)) {
            const data = typeof getCourseData === 'function' ? getCourseData(mode) : [];
            if (data && requestedModule < data.length && typeof loadCourseModule === 'function') setTimeout(() => loadCourseModule(requestedModule), 0);
        }
    }
    if (typeof URLSearchParams !== 'undefined' && new URLSearchParams(window.location.search).get('review') === '1') {
        const resource = typeof getJapaneseResourceConfig === 'function' ? getJapaneseResourceConfig(mode) : null;
        if (resource && typeof iniciarSessaoSRS === 'function') setTimeout(() => iniciarSessaoSRS(resource.deckType), 0);
    }
}

function eNivelKanjiDesbloqueado(nivelJLPT) {
    if (typeof modoDesbloqueado !== 'undefined' && modoDesbloqueado) return true;
    const lvl = (nivelJLPT || 'N5').toUpperCase();
    if (lvl === 'N5') return true;
    const prog = typeof progressoGlobal !== 'undefined' ? progressoGlobal : {};
    if (lvl === 'N4') {
        const totalN5 = (typeof kanjiN5Data !== 'undefined' ? kanjiN5Data.length : 10);
        const concN5 = (prog.progress_kanji || []).length;
        return concN5 >= totalN5;
    }
    if (lvl === 'N3') {
        const totalN4 = (typeof kanjiN4Data !== 'undefined' ? kanjiN4Data.length : 15);
        const concN4 = (prog.progress_kanji_n4 || []).length;
        return eNivelKanjiDesbloqueado('N4') && concN4 >= totalN4;
    }
    if (lvl === 'N2') {
        const totalN3 = (typeof kanjiN3Data !== 'undefined' ? kanjiN3Data.length : 19);
        const concN3 = (prog.progress_kanji_n3 || []).length;
        return eNivelKanjiDesbloqueado('N3') && concN3 >= totalN3;
    }
    if (lvl === 'N1') {
        const totalN2 = (typeof kanjiN2Data !== 'undefined' ? kanjiN2Data.length : 21);
        const concN2 = (prog.progress_kanji_n2 || []).length;
        return eNivelKanjiDesbloqueado('N2') && concN2 >= totalN2;
    }
    return false;
}

function abrirTrilhaKanji(nivelJLPT) {
    const lvl = (nivelJLPT || 'N5').toUpperCase();
    if (lvl === 'N5') {
        window.location.href = 'kanji_n5.html';
        return;
    }
    if (!eNivelKanjiDesbloqueado(lvl)) {
        const nivelAnterior = (lvl === 'N4') ? 'N5' : (lvl === 'N3') ? 'N4' : (lvl === 'N2') ? 'N3' : 'N2';
        alert(`🔒 Conclua todos os módulos do Nível ${nivelAnterior} para liberar o Nível ${lvl}!`);
        return;
    }
    if (lvl === 'N4') { window.location.href = 'kanji_n4.html'; return; }
    if (lvl === 'N3') { window.location.href = 'kanji_n3.html'; return; }
    if (lvl === 'N2') { window.location.href = 'kanji_n2.html'; return; }
    if (lvl === 'N1') { window.location.href = 'kanji_n1.html'; return; }
}

function calcularProgressoKanjiGlobal() {
    const prog = typeof progressoGlobal !== 'undefined' && progressoGlobal ? progressoGlobal : {};
    const appProg = (typeof AppState !== 'undefined' && AppState.course && AppState.course.progress)
        ? AppState.course.progress
        : null;

    const getList = (key, altKey) => {
        let arr = (appProg && Array.isArray(appProg[key])) ? appProg[key] : (prog && Array.isArray(prog[key]) ? prog[key] : null);
        if (!arr && altKey) {
            arr = (appProg && Array.isArray(appProg[altKey])) ? appProg[altKey] : (prog && Array.isArray(prog[altKey]) ? prog[altKey] : null);
        }
        return Array.isArray(arr) ? arr : [];
    };

    const n5List = getList('progress_kanji', 'progress_kanji_n5');
    const n4List = getList('progress_kanji_n4');
    const n3List = getList('progress_kanji_n3');
    const n2List = getList('progress_kanji_n2');
    const n1List = getList('progress_kanji_n1');

    const totalN5 = (typeof kanjiN5Data !== 'undefined' && Array.isArray(kanjiN5Data)) ? kanjiN5Data.length : 11;
    const totalN4 = (typeof kanjiN4Data !== 'undefined' && Array.isArray(kanjiN4Data)) ? kanjiN4Data.length : 16;
    const totalN3 = (typeof kanjiN3Data !== 'undefined' && Array.isArray(kanjiN3Data)) ? kanjiN3Data.length : 19;
    const totalN2 = (typeof kanjiN2Data !== 'undefined' && Array.isArray(kanjiN2Data)) ? kanjiN2Data.length : 21;
    const totalN1 = (typeof kanjiN1Data !== 'undefined' && Array.isArray(kanjiN1Data)) ? kanjiN1Data.length : 25;

    const concN5 = Math.min(n5List.length, totalN5);
    const concN4 = Math.min(n4List.length, totalN4);
    const concN3 = Math.min(n3List.length, totalN3);
    const concN2 = Math.min(n2List.length, totalN2);
    const concN1 = Math.min(n1List.length, totalN1);

    const totalConcluidos = concN5 + concN4 + concN3 + concN2 + concN1;
    const totalModulos = totalN5 + totalN4 + totalN3 + totalN2 + totalN1;
    const percentual = totalModulos > 0 ? Math.min(100, Math.round((totalConcluidos / totalModulos) * 100)) : 0;
    const xpCalculado = totalConcluidos * 100;

    const elPercent = document.getElementById('progresso-kanji-percent');
    const elXP = document.getElementById('progresso-kanji-xp');
    const elBar = document.getElementById('progresso-kanji-bar');
    const elSubtext = document.getElementById('progresso-kanji-subtext');

    if (elPercent) elPercent.innerText = `${percentual}%`;
    if (elXP) elXP.innerText = `${xpCalculado} XP`;
    if (elBar) elBar.style.width = `${percentual}%`;
    if (elSubtext) {
        elSubtext.innerText = `${totalConcluidos} / ${totalModulos} Módulos Dominados • N5: ${concN5}/${totalN5} | N4: ${concN4}/${totalN4} | N3: ${concN3}/${totalN3} | N2: ${concN2}/${totalN2} | N1: ${concN1}/${totalN1}`;
    }

    return {
        percentual,
        totalConcluidos,
        totalModulos,
        concCount: totalConcluidos,
        totalN5: totalModulos,
        xpCalculado,
        niveis: {
            N5: { concluidos: concN5, total: totalN5 },
            N4: { concluidos: concN4, total: totalN4 },
            N3: { concluidos: concN3, total: totalN3 },
            N2: { concluidos: concN2, total: totalN2 },
            N1: { concluidos: concN1, total: totalN1 }
        }
    };
}

function atualizarUIProgressoKanji() {
    calcularProgressoKanjiGlobal();
    ['N5', 'N4', 'N3', 'N2', 'N1'].forEach(lvl => {
        const card = document.getElementById(`card-kanji-${lvl.toLowerCase()}`);
        const tag = document.getElementById(`tag-kanji-${lvl.toLowerCase()}`);
        const desb = eNivelKanjiDesbloqueado(lvl);
        if (card) {
            if (desb) {
                card.classList.remove('bloqueado');
                if (tag) {
                    tag.innerText = "DISPONÍVEL";
                    tag.style.background = (lvl === 'N5') ? "#22c55e" : "#b45309";
                }
            } else {
                card.classList.add('bloqueado');
                if (tag) {
                    tag.innerText = "🔒 BLOQUEADO";
                    tag.style.background = "var(--text-muted)";
                }
            }
        }
    });
}

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.renderKanjiModule = renderKanjiModule;
    window.playReadingTextAudio = playReadingTextAudio;
    window.playKanjiAudio = playKanjiAudio;
    window.initializeKanji = initializeKanji;
    window.renderJapaneseResourceActions = renderJapaneseResourceActions;
    window.eNivelKanjiDesbloqueado = eNivelKanjiDesbloqueado;
    window.abrirTrilhaKanji = abrirTrilhaKanji;
    window.calcularProgressoKanjiGlobal = calcularProgressoKanjiGlobal;
    window.atualizarUIProgressoKanji = atualizarUIProgressoKanji;
}
