// ======================================
// MÓDULO SRS - GESTÃO DE DECK & CUSTOM DECKS
// ======================================

let srsModoFiltro = 'todos'; // 'todos' | 'favoritos' | 'erros'

function getFavoritosDeck() {
    try {
        return JSON.parse(localStorage.getItem('ja_favoritos_deck')) || [];
    } catch (e) {
        return [];
    }
}

function salvarFavoritosDeck(favs) {
    localStorage.setItem('ja_favoritos_deck', JSON.stringify(favs));
}

function getCadernoErros() {
    try {
        return JSON.parse(localStorage.getItem('ja_caderno_erros')) || [];
    } catch (e) {
        return [];
    }
}

function salvarCadernoErros(erros) {
    localStorage.setItem('ja_caderno_erros', JSON.stringify(erros));
}

function eFavoritado(itemId) {
    if (!itemId) return false;
    const favs = getFavoritosDeck();
    return favs.includes(String(itemId));
}

function toggleFavorito(itemId, btnElement) {
    if (!itemId) return;
    const strId = String(itemId);
    let favs = getFavoritosDeck();
    const idx = favs.indexOf(strId);
    let agoraFavoritado = false;

    if (idx >= 0) {
        favs.splice(idx, 1);
        agoraFavoritado = false;
    } else {
        favs.push(strId);
        agoraFavoritado = true;
    }

    salvarFavoritosDeck(favs);

    const btns = btnElement ? [btnElement] : document.querySelectorAll(`[data-fav-id="${strId}"]`);
    btns.forEach(b => {
        if (agoraFavoritado) {
            b.classList.add('favoritado');
            b.innerHTML = '⭐ Favorito';
        } else {
            b.classList.remove('favoritado');
            b.innerHTML = '☆ Favoritar';
        }
    });

    if (typeof srsTipoAtivo !== 'undefined' && typeof atualizarBadgeSRS === 'function') {
        atualizarBadgeSRS(srsTipoAtivo);
    }
}

function registrarErroSRS(itemId) {
    if (!itemId) return;
    const strId = String(itemId);
    let erros = getCadernoErros();
    if (!erros.includes(strId)) {
        erros.push(strId);
        salvarCadernoErros(erros);
    }
    if (typeof srsTipoAtivo !== 'undefined' && typeof atualizarBadgeSRS === 'function') {
        atualizarBadgeSRS(srsTipoAtivo);
    }
}

function renderizarBotaoFavorito(itemId, comLabel = true) {
    if (!itemId) return '';
    const isFav = eFavoritado(itemId);
    const label = comLabel ? (isFav ? '⭐ Favorito' : '☆ Favoritar') : (isFav ? '⭐' : '☆');
    const favClass = isFav ? 'btn-favoritar favoritado' : 'btn-favoritar';
    return `<button class="${favClass}" data-fav-id="${itemId}" onclick="toggleFavorito('${itemId}', this)" title="Favoritar">${label}</button>`;
}

function selecionarModoSRS(modo, tipo) {
    AppState.setSRSFilter(modo || 'todos');

    document.querySelectorAll('.btn-srs-tab').forEach(btn => btn.classList.remove('active'));
    const activeTab = document.getElementById(`tab-srs-${modo}`);
    if (activeTab) activeTab.classList.add('active');

    if (typeof atualizarBadgeSRS === 'function') {
        atualizarBadgeSRS(tipo);
    }
}

function carregarDeckSRS(tipo) {
    const key = typeof getDeckKeySRS === 'function' ? getDeckKeySRS(tipo) : 'ja_srs_deck';
    return JSON.parse(localStorage.getItem(key)) || [];
}

function salvarDeckSRS(tipo, deck) {
    const key = typeof getDeckKeySRS === 'function' ? getDeckKeySRS(tipo) : 'ja_srs_deck';
    localStorage.setItem(key, JSON.stringify(deck));
}

function obterCardsParaRevisarHoje(tipo) {
    if (!tipo) tipo = (typeof nivelAtivo !== 'undefined' && nivelAtivo) ? nivelAtivo.toLowerCase() : 'a1';
    const deck = typeof sincronizarBaralhoSRS === 'function' ? sincronizarBaralhoSRS(tipo) : carregarDeckSRS(tipo);
    const agora = Date.now();
    return deck.filter(c => c.dueDate <= agora);
}

function atualizarBadgeSRS(tipo) {
    if (!tipo) {
        const mode = document.body.getAttribute('data-mode') || 'curso';
        tipo = (mode === 'curso' || mode === 'japa') ? (typeof nivelAtivo !== 'undefined' && nivelAtivo ? nivelAtivo.toLowerCase() : 'a1') : mode;
    }
    let labelExibicao = 'A1';
    if (tipo === 'kanji_n5' || tipo === 'kanji' || tipo === 'n5') labelExibicao = 'Kanji N5';
    else if (tipo === 'kanji_n4' || tipo === 'n4') labelExibicao = 'Kanji N4';
    else if (tipo === 'kanji_n3' || tipo === 'n3') labelExibicao = 'Kanji N3';
    else if (tipo === 'kanji_n2' || tipo === 'n2') labelExibicao = 'Kanji N2';
    else if (tipo === 'kanji_n1' || tipo === 'n1') labelExibicao = 'Kanji N1';
    else if (tipo === 'hiragana') labelExibicao = 'Hiragana';
    else if (tipo === 'katakana') labelExibicao = 'Katakana';
    else if (tipo === 'phrasal_verbs' || tipo === 'phrasal') labelExibicao = 'Phrasal Verbs & Expressões';
    else if (tipo && tipo.startsWith('kanji_n')) labelExibicao = 'Kanji ' + tipo.replace('kanji_', '').toUpperCase();
    else labelExibicao = tipo ? tipo.toUpperCase() : 'A1';

    const fullDeck = typeof sincronizarBaralhoSRS === 'function' ? sincronizarBaralhoSRS(tipo) : carregarDeckSRS(tipo);
    const agora = Date.now();

    const favs = getFavoritosDeck();
    const erros = getCadernoErros();

    let deckFiltrado = fullDeck;
    if (srsModoFiltro === 'favoritos') {
        deckFiltrado = fullDeck.filter(c => favs.includes(String(c.id)) || (c.drop && favs.includes(String(c.drop.kanji || c.drop.romaji))));
    } else if (srsModoFiltro === 'erros') {
        deckFiltrado = fullDeck.filter(c => erros.includes(String(c.id)) || (c.drop && erros.includes(String(c.drop.kanji || c.drop.romaji))));
    }

    const pendentes = srsModoFiltro === 'todos'
        ? deckFiltrado.filter(c => c.dueDate <= agora)
        : deckFiltrado;

    const badge = document.getElementById('srs-badge-count');
    const desc = document.getElementById('srs-banner-desc');
    const btn = document.getElementById('btn-iniciar-srs');

    const playerSRS = typeof document !== 'undefined' ? document.getElementById('player-srs') : null;
    const estaEmRevisao = playerSRS && playerSRS.style.display !== 'none' && playerSRS.style.display !== '';
    const temSessaoAtiva = estaEmRevisao && typeof AppState !== 'undefined' && AppState.srs && Array.isArray(AppState.srs.activeDeck) && AppState.srs.activeDeck.length > 0;
    const totalPendentesExibicao = temSessaoAtiva
        ? Math.max(0, AppState.srs.activeDeck.length - (typeof AppState.srs.currentIndex === 'number' ? AppState.srs.currentIndex : 0))
        : pendentes.length;

    if (badge) badge.innerText = totalPendentesExibicao;
    if (desc) {
        if (srsModoFiltro === 'favoritos') {
            desc.innerText = `⭐ Baralho de Favoritos: ${pendentes.length} card(s) favoritado(s) em ${labelExibicao}.`;
            if (btn) btn.innerText = "Revisar Favoritos ➔";
        } else if (srsModoFiltro === 'erros') {
            desc.innerText = `❌ Caderno de Erros: ${pendentes.length} card(s) com registro de erro em ${labelExibicao}.`;
            if (btn) btn.innerText = "Praticar Caderno de Erros ➔";
        } else {
            if (fullDeck.length === 0) {
                desc.innerText = "Você ainda não concluiu nenhum módulo deste curso. Conclua pelo menos o Módulo 1 para liberar seus primeiros cards de revisão!";
                if (btn) btn.innerText = "Iniciar Revisão ➔";
            } else if (pendentes.length === 0) {
                desc.innerText = `✨ Suas revisões de hoje estão em dia! Pratique com seu baralho de ${labelExibicao} (${fullDeck.length} cards liberados).`;
                if (btn) btn.innerText = "Prática Livre do Baralho ➔";
            } else {
                desc.innerText = `🔥 Você tem ${pendentes.length} item(ns) de ${labelExibicao} aguardando revisão hoje!`;
                if (btn) btn.innerText = "Iniciar Revisão ➔";
            }
        }
    }
}

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.srsModoFiltro = srsModoFiltro;
    window.getFavoritosDeck = getFavoritosDeck;
    window.salvarFavoritosDeck = salvarFavoritosDeck;
    window.getCadernoErros = getCadernoErros;
    window.salvarCadernoErros = salvarCadernoErros;
    window.eFavoritado = eFavoritado;
    window.toggleFavorito = toggleFavorito;
    window.registrarErroSRS = registrarErroSRS;
    window.renderizarBotaoFavorito = renderizarBotaoFavorito;
    window.selecionarModoSRS = selecionarModoSRS;
    window.carregarDeckSRS = carregarDeckSRS;
    window.salvarDeckSRS = salvarDeckSRS;
    window.obterCardsParaRevisarHoje = obterCardsParaRevisarHoje;
    window.atualizarBadgeSRS = atualizarBadgeSRS;
}
