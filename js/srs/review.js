// ======================================
// MÓDULO SRS - SESSÃO DE REVISÃO E INTERFACE
// ======================================

function iniciarSessaoSRS(tipo, uxExecutarAgora = false) {
    const botaoInicio = typeof document !== 'undefined' ? document.getElementById('btn-iniciar-srs') : null;
    if (!uxExecutarAgora && botaoInicio && typeof iniciarEstadoBotao === 'function') {
        if (!iniciarEstadoBotao(botaoInicio, 'Preparando revisão...')) return;
        const continuarInicio = () => iniciarSessaoSRS(tipo, true);
        if (typeof requestAnimationFrame === 'function') requestAnimationFrame(continuarInicio);
        else continuarInicio();
        return;
    }
    if (!tipo) {
        const mode = document.body.getAttribute('data-mode') || 'curso';
        const nivelAtual = typeof AppState !== 'undefined' && AppState.course && AppState.course.level
            ? AppState.course.level
            : (typeof nivelAtivo !== 'undefined' && nivelAtivo ? nivelAtivo : 'a1');
        tipo = ['curso', 'japa', 'russian', 'russo', 'spanish', 'espanhol'].includes(mode)
            ? String(nivelAtual).toLowerCase()
            : mode;
    }
    srsTipoAtivo = String(tipo).toLowerCase();

    const modoFiltro = (typeof AppState !== 'undefined' && AppState.srs && AppState.srs.filter) ? AppState.srs.filter : (typeof srsModoFiltro !== 'undefined' ? srsModoFiltro : 'todos');
    const fullDeck = typeof sincronizarBaralhoSRS === 'function' ? sincronizarBaralhoSRS(tipo) : (typeof carregarDeckSRS === 'function' ? carregarDeckSRS(tipo) : []);
    if (fullDeck.length === 0 && modoFiltro === 'todos') {
        if (typeof mostrarToast === 'function') mostrarToast("📚 <strong>Nenhuma revisão disponível</strong><br><small>Conclua o Módulo 1 para liberar seus primeiros cards.</small>");
        if (typeof atualizarBadgeSRS === 'function') atualizarBadgeSRS(tipo);
        if (botaoInicio && typeof restaurarEstadoBotao === 'function') restaurarEstadoBotao(botaoInicio);
        return;
    }

    const agora = Date.now();
    const favs = typeof getFavoritosDeck === 'function' ? getFavoritosDeck() : [];
    const erros = typeof getCadernoErros === 'function' ? getCadernoErros() : [];

    let deckFiltrado = fullDeck;
    if (modoFiltro === 'favoritos') {
        const favoritosIds = new Set(favs);
        deckFiltrado = fullDeck.filter(c => favoritosIds.has(String(c.id)) || (c.drop && favoritosIds.has(String(c.drop.kanji || c.drop.romaji))));
        if (deckFiltrado.length === 0) {
            if (typeof mostrarToast === 'function') mostrarToast("⭐ <strong>Nenhum favorito neste baralho</strong><br><small>Use a estrela nos cards para guardar itens aqui.</small>");
            if (typeof atualizarBadgeSRS === 'function') atualizarBadgeSRS(tipo);
            if (botaoInicio && typeof restaurarEstadoBotao === 'function') restaurarEstadoBotao(botaoInicio);
            return;
        }
    } else if (modoFiltro === 'erros') {
        const errosIds = new Set(erros);
        deckFiltrado = fullDeck.filter(c => errosIds.has(String(c.id)) || (c.drop && errosIds.has(String(c.drop.kanji || c.drop.romaji))));
        if (deckFiltrado.length === 0) {
            if (typeof mostrarToast === 'function') mostrarToast("✅ <strong>Caderno de erros vazio</strong><br><small>Continue praticando; os itens difíceis aparecerão aqui automaticamente.</small>");
            if (typeof atualizarBadgeSRS === 'function') atualizarBadgeSRS(tipo);
            if (botaoInicio && typeof restaurarEstadoBotao === 'function') restaurarEstadoBotao(botaoInicio);
            return;
        }
    }

    let pendentes = modoFiltro === 'todos' ? deckFiltrado.filter(c => c.dueDate <= agora) : deckFiltrado;
    if (pendentes.length === 0) {
        pendentes = [...deckFiltrado].sort(() => Math.random() - 0.5);
    } else {
        pendentes = [...pendentes].sort(() => Math.random() - 0.5);
    }

    AppState.setSRSDeck(pendentes);
    AppState.setSRSIndex(0);
    srsAcertosSessao = 0;
    srsErrosSessao = 0;

    const hub = document.getElementById('hub-niveis') || document.getElementById('hub-cursos');
    const trilha = document.getElementById('trilha-a1');
    const studyArea = document.getElementById('study-area');
    const playerAula = document.getElementById('player-aula');
    const cyrContent = document.getElementById('cyrillic-content');
    const cyrTabs = document.getElementById('tabContainer');
    const cyrBanner = document.getElementById('srs-banner-container');
    const playerSRS = document.getElementById('player-srs');

    if (hub) hub.style.display = 'none';
    if (trilha) trilha.style.display = 'none';
    if (studyArea) studyArea.style.display = 'none';
    if (playerAula) playerAula.style.display = 'none';
    if (cyrContent) cyrContent.style.display = 'none';
    if (cyrTabs) cyrTabs.style.display = 'none';
    if (cyrBanner) cyrBanner.style.display = 'none';
    if (playerSRS) playerSRS.style.display = 'block';

    if (typeof iniciarSessaoEstudo === 'function') {
        const idioma = typeof obterIdiomaDeckSRS === 'function' ? obterIdiomaDeckSRS(tipo) : null;
        const idiomaAtual = idioma || (typeof getCurrentLanguageCode === 'function' ? getCurrentLanguageCode() : 'ja-JP');
        if (idiomaAtual) iniciarSessaoEstudo({ language: idiomaAtual, activityType: 'srs', contentId: String(tipo) });
    }

    renderizarCardSRS();
    if (botaoInicio && typeof restaurarEstadoBotao === 'function') restaurarEstadoBotao(botaoInicio);
}

function fecharSessaoSRS() {
    if (typeof finalizarSessaoEstudo === 'function') finalizarSessaoEstudo('exit');
    const playerSRS = document.getElementById('player-srs');
    const hub = document.getElementById('hub-niveis') || document.getElementById('hub-cursos');
    const studyArea = document.getElementById('study-area');
    const cyrContent = document.getElementById('cyrillic-content');
    const cyrTabs = document.getElementById('tabContainer');
    const cyrBanner = document.getElementById('srs-banner-container');

    if (playerSRS) playerSRS.style.display = 'none';
    if (hub) hub.style.display = 'block';
    if (studyArea) studyArea.style.display = 'block';
    if (cyrContent) cyrContent.style.display = 'block';
    if (cyrTabs) cyrTabs.style.display = 'flex';
    if (cyrBanner) cyrBanner.style.display = 'flex';

    if (typeof atualizarUIProgresso === 'function') atualizarUIProgresso();
    if (typeof atualizarBadgeSRS === 'function') atualizarBadgeSRS(srsTipoAtivo);
    if (typeof atualizarCountSRS === 'function') atualizarCountSRS();
}

function renderizarCardSRS() {
    const container = document.getElementById('conteudo-card-srs');
    const appSrs = typeof AppState !== 'undefined' ? AppState.srs : null;
    const sessaoCards = (appSrs && appSrs.activeDeck) ? appSrs.activeDeck : (typeof srsSessaoCards !== 'undefined' ? srsSessaoCards : []);
    const indexAtivo = (appSrs && typeof appSrs.currentIndex === 'number') ? appSrs.currentIndex : (typeof srsIndexAtivo !== 'undefined' ? srsIndexAtivo : 0);

    if (!container || sessaoCards.length === 0) return;

    if (indexAtivo >= sessaoCards.length) {
        renderizarConclusaoSRS();
        return;
    }

    AppState.setSRSReveal(false);
    const cardData = sessaoCards[indexAtivo];

    const elemTitulo = document.getElementById('srs-etapa-titulo');
    if (elemTitulo) elemTitulo.innerText = `Revisão SRS (${indexAtivo + 1} de ${sessaoCards.length})`;

    let frenteHTML = "";
    let versoHTML = "";
    const speakKanaLocal = typeof speakKana === 'function' ? speakKana : (() => {});
    const tocarAudioLocal = typeof tocarAudio === 'function' ? tocarAudio : (() => {});
    const fNomeLocal = typeof fNome === 'function' ? fNome : (t => t);
    const renderRadicaisKanjiLocal = typeof renderizarRadicaisKanji === 'function' ? renderizarRadicaisKanji : (() => '');

    if (cardData.dropType === 'hira_char' || cardData.dropType === 'kata_char') {
        const modalidade = cardData.dropType.startsWith('hira') ? 'HIRAGANA' : 'KATAKANA';
        const cor = cardData.dropType.startsWith('hira') ? '#d90429' : '#028090';
        frenteHTML = `
            <div class="srs-card-type" style="color: ${cor};">🔤 ${modalidade} • ${cardData.modTitle}</div>
            <div class="srs-kanji kana-text">${cardData.char}</div>
            <button onclick="speakKana('${cardData.char}')" class="srs-audio-btn">🔊 Pronúncia</button>
            <p style="color: var(--text-muted); margin-top: 1rem;">Qual é a leitura e a dica mnemônica deste Kana?</p>
        `;
        versoHTML = `
            <div class="srs-card-type" style="color: ${cor};">✨ Leitura e Mnemônica</div>
            <div class="srs-romaji">${cardData.romaji}</div>
            <div style="background: var(--bg-color); border: 1px dashed var(--border-color); padding: 12px; border-radius: 10px; margin-top: 10px; text-align: left; font-size: 0.95rem;">
                <strong>💡 Dica:</strong> ${cardData.mnemonic}
            </div>
        `;
    } else if (cardData.dropType === 'cyr_char') {
        const charOnly = (cardData.char || '').split(' ')[0];
        frenteHTML = `
            <div class="srs-card-type" style="color: #7c3aed;">🔤 CIRÍLICO • ${cardData.modTitle || 'Alfabeto'}</div>
            <div class="srs-kanji" style="font-size: 3.8rem; font-weight: 700;">${cardData.char}</div>
            <button onclick="speakRussian('${charOnly}')" class="srs-audio-btn">🔊 Pronúncia</button>
            <p style="color: var(--text-muted); margin-top: 1rem;">Qual é a leitura e a dica mnemônica deste caractere?</p>
        `;
        versoHTML = `
            <div class="srs-card-type" style="color: #7c3aed;">✨ Leitura e Mnemônica</div>
            <div class="srs-romaji" style="font-size: 2rem; font-weight: 700; color: #a78bfa;">${cardData.romaji}</div>
            <div style="background: var(--bg-color); border: 1px dashed var(--border-color); padding: 12px; border-radius: 10px; margin-top: 10px; text-align: left; font-size: 0.95rem;">
                <strong>💡 Dica:</strong> ${cardData.mnemonic}
            </div>
        `;
    } else if (cardData.dropType === 'cyr_vocab') {
        frenteHTML = `
            <div class="srs-card-type" style="color: #7c3aed;">📚 VOCABULÁRIO CIRÍLICO • ${cardData.modTitle || 'Alfabeto'}</div>
            <div class="srs-kanji" style="font-size: 3rem; font-weight: 700;">${cardData.char}</div>
            <button onclick="speakRussian('${cardData.char}')" class="srs-audio-btn">🔊 Pronúncia</button>
            <p style="color: var(--text-muted); margin-top: 1rem;">Tente lembrar da pronúncia e tradução!</p>
        `;
        versoHTML = `
            <div class="srs-card-type" style="color: #7c3aed;">✨ Resposta Revelada</div>
            <div class="srs-romaji" style="font-size: 1.8rem; font-weight: 700; color: #a78bfa;">${cardData.romaji}</div>
            <div class="srs-translation" style="font-size: 1.2rem; margin-top: 6px;">${cardData.meaning}</div>
        `;
    } else if (cardData.dropType === 'hira_vocab' || cardData.dropType === 'kata_vocab') {
        const modalidade = cardData.dropType.startsWith('hira') ? 'HIRAGANA' : 'KATAKANA';
        const cor = cardData.dropType.startsWith('hira') ? '#d90429' : '#028090';
        frenteHTML = `
            <div class="srs-card-type" style="color: ${cor};">📚 VOCABULÁRIO • ${cardData.modTitle}</div>
            <div class="srs-kanji kana-text" style="font-size: 3rem;">${cardData.char}</div>
            <button onclick="speakKana('${cardData.char}')" class="srs-audio-btn">🔊 Pronúncia</button>
            <p style="color: var(--text-muted); margin-top: 1rem;">Tente lembrar da pronúncia (romaji) e tradução!</p>
        `;
        versoHTML = `
            <div class="srs-card-type" style="color: ${cor};">✨ Resposta Revelada</div>
            <div class="srs-romaji">${cardData.romaji}</div>
            <div class="srs-translation">${cardData.meaning}</div>
        `;
    } else if (cardData.dropType === 'kanji') {
        let exHtml = "";
        if (cardData.examples && cardData.examples.length > 0) {
            const ex = cardData.examples[0];
            exHtml = `
                <div style="background: var(--bg-color); border: 1px solid var(--border-color); padding: 10px; border-radius: 8px; margin-top: 10px; text-align: left;">
                    <div style="font-weight: bold; color: #b45309;">Exemplo: ${ex.word}</div>
                    <div style="font-size: 0.85rem; color: var(--text-main);">${ex.wordMeaning}</div>
                    <div style="font-size: 0.8rem; color: var(--text-muted); font-style: italic; margin-top: 4px;">"${ex.sentence}"</div>
                </div>
            `;
        }
        let kanjiHeaderLabel = 'Kanji N5';
        if (srsTipoAtivo === 'kanji_n4' || (cardData.id && cardData.id.startsWith('kanji_n4'))) kanjiHeaderLabel = 'Kanji N4';
        else if (srsTipoAtivo === 'kanji_n3' || (cardData.id && cardData.id.startsWith('kanji_n3'))) kanjiHeaderLabel = 'Kanji N3';
        else if (srsTipoAtivo === 'kanji_n2' || (cardData.id && cardData.id.startsWith('kanji_n2'))) kanjiHeaderLabel = 'Kanji N2';
        else if (srsTipoAtivo === 'kanji_n1' || (cardData.id && cardData.id.startsWith('kanji_n1'))) kanjiHeaderLabel = 'Kanji N1';
        else if (srsTipoAtivo === 'kanji_n5' || (cardData.id && cardData.id.startsWith('kanji_n5'))) kanjiHeaderLabel = 'Kanji N5';
        else if (srsTipoAtivo && srsTipoAtivo.startsWith('kanji_n')) kanjiHeaderLabel = 'Kanji ' + srsTipoAtivo.replace('kanji_', '').toUpperCase();

        frenteHTML = `
            <div class="srs-card-type" style="color: #b45309;">🏯 ${kanjiHeaderLabel} • ${cardData.modTitle}</div>
            <div class="srs-kanji kana-text">${cardData.character}</div>
            <button onclick="speakKana('${cardData.character}')" class="srs-audio-btn">🔊 Pronúncia</button>
            <p style="color: var(--text-muted); margin-top: 1rem;">Quais são as leituras (Kun/On) e o significado deste Kanji?</p>
        `;
        versoHTML = `
            <div class="srs-card-type" style="color: #b45309;">✨ Ideograma Revelado</div>
            <div class="srs-translation" style="color: #b45309; font-size: 1.4rem; margin-bottom: 0.8rem;">${cardData.meaning}</div>
            <div style="display: flex; gap: 10px; justify-content: center; margin-bottom: 10px; font-size: 0.9rem;">
                <span style="background: rgba(34, 197, 94, 0.1); color: #16a34a; border: 1px solid #22c55e; padding: 4px 10px; border-radius: 6px;"><strong>Kun:</strong> ${cardData.kunyomi}</span>
                <span style="background: rgba(59, 130, 246, 0.1); color: #2563eb; border: 1px solid #3b82f6; padding: 4px 10px; border-radius: 6px;"><strong>On:</strong> ${cardData.onyomi}</span>
            </div>
            ${renderRadicaisKanjiLocal(cardData.radicals)}
            ${exHtml}
        `;
    } else if (cardData.dropType === 'phrasal_verb') {
        const item = cardData.item || {};
        const safeVerb = (item.verb || '').replace(/'/g, "\\'");
        const breakdown = item.breakdown || {};
        const ex = item.examples && item.examples[0] ? item.examples[0] : null;
        const safeSent = ex ? (ex.sentence || '').replace(/'/g, "\\'") : '';

        frenteHTML = `
            <div class="srs-card-type" style="color: #028090;">⚡ PHRASAL VERB • ${fNomeLocal(cardData.modTitle)}</div>
            <div class="srs-kanji" style="font-size: 2.5rem; color: #028090; font-family: 'Fredoka', sans-serif;">${item.verb}</div>
            <button onclick="speakKana('${safeVerb}')" class="srs-audio-btn">🔊 Ouvir Pronúncia</button>
            <p style="color: var(--text-muted); margin-top: 1rem;">Qual é o significado, decomposição e aplicação deste verb/idiom?</p>
        `;
        versoHTML = `
            <div class="srs-card-type" style="color: #028090;">✨ Resposta Revelada</div>
            <div class="srs-translation" style="color: var(--text-main); font-size: 1.35rem; font-weight: bold; margin-bottom: 0.6rem;">📌 ${item.meaning}</div>
            <div style="background: rgba(2, 128, 144, 0.08); border-left: 4px solid #028090; padding: 8px 12px; border-radius: 0 8px 8px 0; margin: 8px 0; text-align: left; font-size: 0.88rem;">
                <strong>🧩 Decomposição:</strong> Raiz: <em>${breakdown.root || ''}</em> + Partícula: <em>${breakdown.particle || ''}</em> (${breakdown.type || ''})
            </div>
            <div style="background: var(--bg-color); border: 1px solid var(--border-color); padding: 10px 14px; border-radius: 10px; margin-top: 10px; text-align: left;">
                <strong style="color: #028090; font-size: 0.88rem;">💡 Explicação:</strong>
                <p style="font-size: 0.9rem; margin: 4px 0 8px 0; color: var(--text-main);">${item.explanation || ''}</p>
                ${ex ? `
                    <div style="border-top: 1px dashed var(--border-color); padding-top: 8px; margin-top: 8px;">
                        <span style="font-weight: 600; font-size: 0.9rem; color: var(--text-main);">${ex.sentence}</span>
                        <button onclick="speakKana('${safeSent}')" style="font-size: 0.75rem; padding: 2px 6px; border-radius: 4px; border: 1px solid var(--border-color); background: var(--card-bg); cursor: pointer; margin-left: 6px;">🔊</button>
                        <br><small style="color: var(--text-muted);">${ex.translation}</small>
                    </div>
                ` : ''}
            </div>
        `;
    } else if (cardData.dropType === 'false_friend_card') {
        const item = cardData.item || {};
        const word = item.word || item.title || '';
        const realMeaning = item.realMeaning || item.rule || '';
        const warning = item.warning || item.formula || '';
        const example = item.example || '';
        const translation = item.translation || '';
        const safeWord = word.replace(/'/g, "\\'");
        const safeEx = example.replace(/'/g, "\\'");

        frenteHTML = `
            <div class="srs-card-type" style="color: #d97706;">⚠️ FALSO COGNATO • ${fNomeLocal(cardData.modTitle)}</div>
            <div class="srs-kanji" style="font-size: 2.5rem; color: #dc2626; font-family: 'Fredoka', sans-serif;">${word}</div>
            <button onclick="speakKana('${safeWord}')" class="srs-audio-btn">🔊 Ouvir Pronúncia</button>
            <p style="color: var(--text-muted); margin-top: 1rem;">Qual é o significado REAL dessa palavra em espanhol e qual o erro comum a evitar?</p>
        `;
        versoHTML = `
            <div class="srs-card-type" style="color: #d97706;">✨ Resposta Revelada</div>
            <div class="srs-translation" style="color: #059669; font-size: 1.35rem; font-weight: bold; margin-bottom: 0.6rem;">✅ Significado Real: ${realMeaning}</div>
            ${warning ? `
                <div style="background: #fef2f2; border: 1px solid #fecdd3; padding: 10px 14px; border-radius: 10px; margin: 8px 0; text-align: left; font-size: 0.95rem; color: #dc2626; font-weight: bold;">
                    🔴 ${warning}
                </div>
            ` : ''}
            ${example ? `
                <div style="background: #f0fdf4; border: 1px solid #99f6e4; padding: 10px 14px; border-radius: 10px; margin-top: 10px; text-align: left;">
                    <strong style="color: #0d9488; font-size: 0.88rem;">📌 Exemplo:</strong>
                    <div style="font-size: 1.05rem; font-weight: bold; color: #0d9488; margin-top: 4px;">
                        "${example}"
                        <button onclick="speakKana('${safeEx}')" style="font-size: 0.75rem; padding: 2px 6px; border-radius: 4px; border: 1px solid #99f6e4; background: #ffffff; cursor: pointer; margin-left: 6px;">🔊</button>
                    </div>
                    ${translation ? `<small style="color: var(--text-muted);">${translation}</small>` : ''}
                </div>
            ` : ''}
        `;
    } else {
        const drop = cardData.drop || {};
        const nivelLabel = (cardData.level || (srsTipoAtivo ? srsTipoAtivo.toUpperCase() : 'A1'));
        if (drop.type === 'vocab') {
            const idiomaSRS = typeof getCurrentLanguageCode === 'function' ? getCurrentLanguageCode() : 'ja-JP';
            const srsTextAudio = idiomaSRS !== 'ja-JP' ? (drop.kanji || drop.romaji) : (drop.romaji || drop.kanji);
            const cleanSrsParam = String(srsTextAudio).replace(/\//g, ' ').replace(/'/g, "\\'");

            frenteHTML = `
                <div class="srs-card-type">📖 Vocabulário ${nivelLabel} • ${fNomeLocal(cardData.modTitle)}</div>
                <div class="srs-kanji">${drop.kanji}</div>
                <button onclick="tocarAudio('${cleanSrsParam}')" class="srs-audio-btn">🔊 Ouvir Pronúncia</button>
                <p style="color: var(--text-muted); margin-top: 1rem;">Tente lembrar da pronúncia e da tradução!</p>
            `;
            versoHTML = `
                <div class="srs-card-type">✨ Resposta Revelada</div>
                <div class="srs-romaji">${drop.romaji}</div>
                <div class="srs-translation">${drop.translation}</div>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.8rem;">💡 ${drop.timeContext || ''}</p>
            `;
        } else {
            frenteHTML = `
                <div class="srs-card-type" style="color: #e63946;">💡 Pílula Gramatical ${nivelLabel} • ${fNomeLocal(cardData.modTitle)}</div>
                <h3 style="font-size: 1.5rem; margin: 1rem 0;">${fNomeLocal(drop.title)}</h3>
                <p style="color: var(--text-muted);">Qual é a regra e a fórmula desta pílula gramatical?</p>
            `;
            versoHTML = `
                <div class="srs-card-type" style="color: #e63946;">✨ Regra Gramatical</div>
                <p style="font-weight: 600; margin-bottom: 0.8rem;">${fNomeLocal(drop.rule)}</p>
                <div style="background: var(--bg-color); border: 2px solid var(--border-color); padding: 10px 15px; border-radius: 8px; font-weight: bold; color: #e63946; margin: 10px 0;">
                    <code>${fNomeLocal(drop.formula)}</code>
                </div>
                <p><small style="color: var(--text-muted);">Exemplo: ${fNomeLocal(drop.example)}</small></p>
            `;
        }
    }

    container.innerHTML = `
        <div class="srs-card-box ${srsCardRevelado ? 'revelado' : ''}" id="box-flashcard">
            <div class="srs-card-frente">${frenteHTML}</div>
            <div class="srs-card-verso" style="display: ${srsCardRevelado ? 'block' : 'none'};">${versoHTML}</div>
        </div>
    `;
    if (typeof animarEntradaConteudoUX === 'function') animarEntradaConteudoUX(container);

    const btnRevelar = document.getElementById('btn-revelar-srs');
    const painelAvaliacao = document.getElementById('painel-avaliacao-srs');
    if (btnRevelar) btnRevelar.style.display = 'block';
    if (painelAvaliacao) painelAvaliacao.style.display = 'none';
}

function revelarRespostaSRS() {
    AppState.setSRSReveal(true);
    const verso = document.querySelector('.srs-card-verso');
    if (verso) {
        verso.style.display = 'block';
        if (typeof animarEntradaConteudoUX === 'function') animarEntradaConteudoUX(verso);
    }

    const appSrs = typeof AppState !== 'undefined' ? AppState.srs : null;
    const sessaoCards = (appSrs && appSrs.activeDeck) ? appSrs.activeDeck : (typeof srsSessaoCards !== 'undefined' ? srsSessaoCards : []);
    const indexAtivo = (appSrs && typeof appSrs.currentIndex === 'number') ? appSrs.currentIndex : (typeof srsIndexAtivo !== 'undefined' ? srsIndexAtivo : 0);
    const cardData = sessaoCards[indexAtivo];
    if (cardData) {
        if (cardData.item && cardData.item.verb && typeof speakKana === 'function') speakKana(cardData.item.verb);
        else if (cardData.char && typeof speakKana === 'function') speakKana(cardData.char);
        else if (cardData.character && typeof speakKana === 'function') speakKana(cardData.character);
        else if (cardData.drop && typeof tocarAudio === 'function') {
            const idiomaSRS = typeof getCurrentLanguageCode === 'function' ? getCurrentLanguageCode() : 'ja-JP';
            const targetTxt = idiomaSRS !== 'ja-JP' ? (cardData.drop.kanji || cardData.drop.romaji) : (cardData.drop.romaji || cardData.drop.kanji);
            if (targetTxt) tocarAudio(targetTxt);
        }
    }

    const btnRevelar = document.getElementById('btn-revelar-srs');
    const painelAvaliacao = document.getElementById('painel-avaliacao-srs');
    if (btnRevelar) btnRevelar.style.display = 'none';
    if (painelAvaliacao) painelAvaliacao.style.display = 'grid';
}

function renderizarConclusaoSRS() {
    const container = document.getElementById('conteudo-card-srs');
    const xpGanho = (srsAcertosSessao * 5) + (srsSessaoCards.length * 2);

    const srsCount = (parseInt(localStorage.getItem('ja_srs_reviews_count')) || 0) + 1;
    localStorage.setItem('ja_srs_reviews_count', srsCount);

    if (typeof registrarAtividadeDiaria === 'function') registrarAtividadeDiaria();
    if (typeof adicionarXP === 'function') adicionarXP(xpGanho, 'Revisão SRS Concluída');
    if (typeof finalizarSessaoEstudo === 'function') {
        finalizarSessaoEstudo('completion', { contentId: String(srsTipoAtivo || 'srs') });
    }

    const nome = typeof nomeUsuario !== 'undefined' ? nomeUsuario : 'Estudante';

    if (container) {
        container.innerHTML = `
            <span style="font-size: 4rem; animation: pop 0.5s;">🧠</span>
            <h2 style="color: #22c55e;">Sessão de Revisão Concluída!</h2>
            <p style="font-size: 1.1rem; color: var(--text-muted);">Parabéns, <strong>${nome}</strong>! Você fortaleceu sua memória de longo prazo.</p>

            <div style="display: flex; gap: 15px; justify-content: center; margin: 1.5rem 0;">
                <div style="background: var(--bg-color); border: 2px solid var(--border-color); padding: 12px 20px; border-radius: 10px;">
                    <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Cards Revisados</div>
                    <div style="font-size: 1.8rem; font-weight: bold; color: var(--text-main);">${srsSessaoCards.length}</div>
                </div>
                <div style="background: var(--bg-color); border: 2px solid var(--border-color); padding: 12px 20px; border-radius: 10px;">
                    <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">XP Adquirido</div>
                    <div style="font-size: 1.8rem; font-weight: bold; color: #fbbf24;">+${xpGanho} XP</div>
                </div>
            </div>

            <button onclick="fecharSessaoSRS()" style="background: linear-gradient(135deg, #22c55e, #15803d); color: white; border: none; padding: 0.8rem 2rem; border-radius: 12px; font-weight: bold; font-size: 1.05rem; cursor: pointer;">
                Concluir e Voltar ao Hub ➔
            </button>
        `;
    }

    const btnRevelar = document.getElementById('btn-revelar-srs');
    const painelAvaliacao = document.getElementById('painel-avaliacao-srs');
    if (btnRevelar) btnRevelar.style.display = 'none';
    if (painelAvaliacao) painelAvaliacao.style.display = 'none';
}

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.iniciarSessaoSRS = iniciarSessaoSRS;
    window.fecharSessaoSRS = fecharSessaoSRS;
    window.renderizarCardSRS = renderizarCardSRS;
    window.revelarRespostaSRS = revelarRespostaSRS;
    window.renderizarConclusaoSRS = renderizarConclusaoSRS;
}
