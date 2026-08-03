// ======================================
// MÓDULO GAME - RANKING E CONQUISTAS
// ======================================

const CATALOGO_CONQUISTAS = [
    // 15 Conquistas Originais (Japonês & Gerais)
    { id: 'ach_first_lesson', icon: '🐣', title: 'Primeiro Passo', desc: 'Concluiu a primeira aula no Japão Academy.' },
    { id: 'ach_hira_master', icon: '🌸', title: 'Mestre do Hiragana', desc: 'Concluiu todos os módulos de Hiragana.' },
    { id: 'ach_kata_master', icon: '⚡', title: 'Mestre do Katakana', desc: 'Concluiu todos os módulos de Katakana.' },
    { id: 'ach_kanji_initiate', icon: '🔤', title: 'Iniciante dos Kanjis', desc: 'Concluiu 5 módulos de Kanji N5.' },
    { id: 'ach_kanji_n5_master', icon: '⛩️', title: 'Mestre Kanji N5', desc: 'Concluiu todos os módulos de Kanji N5.' },
    { id: 'ach_streak_3', icon: '🔥', title: 'Foco Inicial', desc: 'Manteve 3 dias seguidos de ofensiva.' },
    { id: 'ach_streak_7', icon: '💥', title: 'Semana de Ouro', desc: 'Manteve 7 dias seguidos de ofensiva.' },
    { id: 'ach_streak_30', icon: '🌟', title: 'Hábito Inabalável', desc: 'Manteve 30 dias seguidos de ofensiva.' },
    { id: 'ach_voice_pro', icon: '🎙️', title: 'Voz Afiada', desc: 'Pronunciou 10 palavras com voz aprovada.' },
    { id: 'ach_srs_100', icon: '🧠', title: 'Memória de Elefante', desc: 'Revisou 100 cards no sistema SRS.' },
    { id: 'ach_combo_10', icon: '⚡', title: 'Combo 10x', desc: 'Alcançou combo 10x no minigame.' },
    { id: 'ach_combo_25', icon: '🔥', title: 'Combo 25x', desc: 'Alcançou combo 25x no minigame.' },
    { id: 'ach_score_500', icon: '🏆', title: 'Pontuação 500', desc: 'Alcançou 500 pontos em uma partida do minigame.' },
    { id: 'ach_score_1000', icon: '👑', title: 'Pontuação 1000', desc: 'Alcançou 1000 pontos no minigame.' },
    { id: 'ach_dictionary_explorer', icon: '📖', title: 'Explorador do Glossário', desc: 'Realizou 15 buscas no Dicionário Universal.' },

    // 20 Novas Conquistas da Seção de Inglês (English Academy)
    { id: 'ach_en_first_step', icon: '🇬🇧', title: 'First Steps in English', desc: 'Concluiu o primeiro módulo de Inglês A1.' },
    { id: 'ach_en_a1_master', icon: '📘', title: 'English A1 Master', desc: 'Concluiu todos os módulos do Nível A1 (Iniciante).' },
    { id: 'ach_en_a2_master', icon: '📗', title: 'English A2 Master', desc: 'Concluiu todos os módulos do Nível A2 (Básico).' },
    { id: 'ach_en_b1_master', icon: '📙', title: 'English B1 Master', desc: 'Concluiu todos os módulos do Nível B1 (Intermediário).' },
    { id: 'ach_en_b2_master', icon: '📕', title: 'English B2 Master', desc: 'Concluiu todos os módulos do Nível B2 (Independente).' },
    { id: 'ach_en_phrasal_initiate', icon: '⚡', title: 'Phrasal Verbs Initiate', desc: 'Concluiu 5 módulos de Phrasal Verbs & Expressões.' },
    { id: 'ach_en_phrasal_master', icon: '🔥', title: 'Phrasal Verbs Master', desc: 'Concluiu todos os 28 módulos de Phrasal Verbs & Expressões.' },
    { id: 'ach_en_phonetics_a1', icon: '🗣️', title: 'Fonetista A1', desc: 'Concluiu os desafios de pronúncia A1.' },
    { id: 'ach_en_phonetics_b2', icon: '🎙️', title: 'Pronúncia Nativa B2', desc: 'Obteve pontuação >=80% no Quiz de Fonética B2.' },
    { id: 'ach_en_minigame_500', icon: '🎯', title: 'English Arcade 500', desc: 'Alcançou 500 pontos no Minigame de Vocabulário em Inglês.' },
    { id: 'ach_en_minigame_1000', icon: '👑', title: 'English Arcade Legend', desc: 'Alcançou 1000 pontos no Minigame de Vocabulário em Inglês.' },
    { id: 'ach_en_minigame_combo', icon: '⚡', title: 'English Combo 20x', desc: 'Alcançou combo 20x no Minigame de Inglês.' },
    { id: 'ach_en_srs_50', icon: '📇', title: 'English Flashcards', desc: 'Revisou 50 cards no SRS de Inglês.' },
    { id: 'ach_en_voice_10', icon: '🎤', title: 'English Speaker', desc: 'Acertou 10 pronúncias via microfone em Inglês.' },
    { id: 'ach_en_diploma_b2', icon: '🎓', title: 'Diploma de Inglês B2', desc: 'Aprovado na Avaliação Final de Inglês B2.' },
    { id: 'ach_en_vocab_hero', icon: '📚', title: 'Vocab Hero', desc: 'Aprendeu 100 palavras e expressões no curso de Inglês.' },
    { id: 'ach_en_grammar_guru', icon: '💡', title: 'Grammar Guru', desc: 'Concluiu 10 quizzes de gramática aplicada de Inglês.' },
    { id: 'ach_en_daily_streak_5', icon: '📅', title: 'English Habit', desc: 'Praticou Inglês por 5 dias seguidos.' },
    { id: 'ach_en_polyglot', icon: '🌐', title: 'Poliglota Japão & Inglês', desc: 'Concluiu pelo menos 1 nível completo de Japonês e 1 de Inglês.' },
    { id: 'ach_en_perfect_quiz', icon: '💯', title: 'Score Perfeito em Inglês', desc: 'Tirou 100% de aproveitamento em qualquer simulado de Inglês.' }
];

function obteConquistasDesbloqueadas() {
    try {
        const raw = localStorage.getItem('ja_unlocked_achievements');
        return raw ? JSON.parse(raw) : {};
    } catch (e) {
        return {};
    }
}

function checarEConcederConquista(idConquista) {
    const unlocked = obteConquistasDesbloqueadas();
    if (unlocked[idConquista]) return false;

    const conquista = CATALOGO_CONQUISTAS.find(c => c.id === idConquista);
    if (!conquista) return false;

    const dataHoje = new Date().toLocaleDateString('pt-BR');
    unlocked[idConquista] = dataHoje;
    localStorage.setItem('ja_unlocked_achievements', JSON.stringify(unlocked));

    if (typeof playBeep === 'function') playBeep('success');
    if (typeof mostrarToast === 'function') {
        mostrarToast(`🏆 <strong>Nova Conquista:</strong> ${conquista.icon} ${conquista.title}!`);
    }
    if (typeof dispararConfeti === 'function') {
        dispararConfeti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    }

    if (typeof renderizarMuralConquistas === 'function') {
        renderizarMuralConquistas();
    }
    return true;
}

function checarConquistasGerais() {
    try {
        let streakData = { count: 0 };
        const rawStreak = localStorage.getItem('ja_streak_data');
        if (rawStreak) streakData = JSON.parse(rawStreak);

        if (streakData.count >= 3) checarEConcederConquista('ach_streak_3');
        if (streakData.count >= 7) checarEConcederConquista('ach_streak_7');
        if (streakData.count >= 30) checarEConcederConquista('ach_streak_30');
        if (streakData.count >= 5) checarEConcederConquista('ach_en_daily_streak_5');

        const voiceJa = parseInt(localStorage.getItem('ja_voice_answers_count')) || 0;
        const voiceEn = parseInt(localStorage.getItem('ja_en_voice_answers_count')) || 0;
        if (voiceJa >= 10) checarEConcederConquista('ach_voice_pro');
        if (voiceEn >= 10) checarEConcederConquista('ach_en_voice_10');

        const enHs = parseInt(localStorage.getItem('en_highScore')) || 0;
        const enMc = parseInt(localStorage.getItem('en_maxCombo')) || 0;
        if (enHs >= 500) checarEConcederConquista('ach_en_minigame_500');
        if (enHs >= 1000) checarEConcederConquista('ach_en_minigame_1000');
        if (enMc >= 20) checarEConcederConquista('ach_en_minigame_combo');

        const jaHs = parseInt(localStorage.getItem('ja_highScore')) || 0;
        const jaMc = parseInt(localStorage.getItem('ja_maxCombo')) || 0;
        if (jaHs >= 500) checarEConcederConquista('ach_score_500');
        if (jaHs >= 1000) checarEConcederConquista('ach_score_1000');
        if (jaMc >= 10) checarEConcederConquista('ach_combo_10');
        if (jaMc >= 25) checarEConcederConquista('ach_combo_25');
    } catch (e) {
        console.warn('Erro ao checar conquistas gerais:', e);
    }
}

function abrirModalConquistas() {
    if (typeof garantirElementosCabecalhoEModal === 'function') {
        garantirElementosCabecalhoEModal();
    }
    renderizarMuralConquistas();
    const modal = document.getElementById('modal-conquistas');
    if (modal) modal.style.display = 'flex';
}

function fecharModalConquistas() {
    const modal = document.getElementById('modal-conquistas');
    if (modal) modal.style.display = 'none';
}

function renderizarMuralConquistas() {
    const grid = document.getElementById('grid-conquistas');
    if (!grid) return;

    const unlocked = obteConquistasDesbloqueadas();
    let html = '';

    CATALOGO_CONQUISTAS.forEach(c => {
        const isUnlocked = !!unlocked[c.id];
        const dataStr = unlocked[c.id];

        if (isUnlocked) {
            html += `
                <div class="card-conquista desbloqueada">
                    <div class="icon-conquista">${c.icon}</div>
                    <div class="info-conquista">
                        <h4>${c.title}</h4>
                        <p>${c.desc}</p>
                        <span class="data-desbloqueio">✨ Conquistado em ${dataStr}</span>
                    </div>
                </div>
            `;
        } else {
            html += `
                <div class="card-conquista bloqueada">
                    <div class="icon-conquista">🔒</div>
                    <div class="info-conquista">
                        <h4>${c.title}</h4>
                        <p>${c.desc}</p>
                        <span class="status-bloqueado">🔒 Bloqueado</span>
                    </div>
                </div>
            `;
        }
    });

    grid.innerHTML = html;
}

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.CATALOGO_CONQUISTAS = CATALOGO_CONQUISTAS;
    window.obteConquistasDesbloqueadas = obteConquistasDesbloqueadas;
    window.checarEConcederConquista = checarEConcederConquista;
    window.checarConquistasGerais = checarConquistasGerais;
    window.abrirModalConquistas = abrirModalConquistas;
    window.fecharModalConquistas = fecharModalConquistas;
    window.renderizarMuralConquistas = renderizarMuralConquistas;
}
