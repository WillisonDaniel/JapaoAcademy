// ======================================
// DASHBOARD GLOBAL - IDIOMAS ACADEMY
// ======================================

const DASHBOARD_SRS_SOURCES = [
    { type: 'a1', key: 'ja_srs_a1_deck', page: 'html/ja-JP/curso.html' },
    { type: 'a2', key: 'ja_srs_a2_deck', page: 'html/ja-JP/curso.html' },
    { type: 'b1', key: 'ja_srs_b1_deck', page: 'html/ja-JP/curso.html' },
    { type: 'b2', key: 'ja_srs_b2_deck', page: 'html/ja-JP/curso.html' },
    { type: 'a1', key: 'en_srs_a1_deck', page: 'html/en-US/curso_ingles.html' },
    { type: 'a2', key: 'en_srs_a2_deck', page: 'html/en-US/curso_ingles.html' },
    { type: 'b1', key: 'en_srs_b1_deck', page: 'html/en-US/curso_ingles.html' },
    { type: 'b2', key: 'en_srs_b2_deck', page: 'html/en-US/curso_ingles.html' },
    { type: 'a1', key: 'es_srs_a1_deck', page: 'html/es-ES/espanhol_curso.html' },
    { type: 'a2', key: 'es_srs_a2_deck', page: 'html/es-ES/espanhol_curso.html' },
    { type: 'b1', key: 'es_srs_b1_deck', page: 'html/es-ES/espanhol_curso.html' },
    { type: 'b2', key: 'es_srs_b2_deck', page: 'html/es-ES/espanhol_curso.html' },
    { type: 'a1', key: 'ru_srs_a1_deck', page: 'html/ru-RU/russo_curso.html' },
    { type: 'a2', key: 'ru_srs_a2_deck', page: 'html/ru-RU/russo_curso.html' },
    { type: 'b1', key: 'ru_srs_b1_deck', page: 'html/ru-RU/russo_curso.html' },
    { type: 'b2', key: 'ru_srs_b2_deck', page: 'html/ru-RU/russo_curso.html' },
    { type: 'hiragana', key: 'ja_srs_hiragana_deck', page: 'html/ja-JP/hiragana.html' },
    { type: 'katakana', key: 'ja_srs_katakana_deck', page: 'html/ja-JP/katakana.html' },
    { type: 'kanji', key: 'ja_srs_kanji_deck', page: 'html/ja-JP/kanji_n5.html' },
    { type: 'kanji_n4', key: 'ja_srs_kanji_n4_deck', page: 'html/ja-JP/kanji_n4.html' },
    { type: 'kanji_n3', key: 'ja_srs_kanji_n3_deck', page: 'html/ja-JP/kanji_n3.html' },
    { type: 'kanji_n2', key: 'ja_srs_kanji_n2_deck', page: 'html/ja-JP/kanji_n2.html' },
    { type: 'kanji_n1', key: 'ja_srs_kanji_n1_deck', page: 'html/ja-JP/kanji_n1.html' },
    { type: 'phrasal_verbs', key: 'en_srs_phrasal_verbs_deck', page: 'html/en-US/phrasal_verbs.html' },
    { type: 'falsos_amigos', key: 'es_srs_falsos_amigos_deck', page: 'html/es-ES/espanhol_falsos_amigos.html' },
    { type: 'cirilico', key: 'ru_srs_cirilico_deck', page: 'html/ru-RU/russo_alfabeto.html' }
];

const DASHBOARD_LANGUAGE_REGISTRY = [
    {
        id: 'japanese',
        label: 'Japonês',
        icon: '🎌',
        hubPage: 'hub_japones.html',
        coursePage: 'html/ja-JP/curso.html',
        getCourses: () => ({
            A1: (typeof CURSO_A1_DADOS !== 'undefined') ? CURSO_A1_DADOS : [],
            A2: (typeof CURSO_A2_DADOS !== 'undefined') ? CURSO_A2_DADOS : [],
            B1: (typeof CURSO_B1_DADOS !== 'undefined') ? CURSO_B1_DADOS : [],
            B2: (typeof CURSO_B2_DADOS !== 'undefined') ? CURSO_B2_DADOS : []
        }),
        extraLabel: 'módulo(s) de Kanji',
        extraProgressKeys: ['progress_kanji', 'progress_kanji_n4', 'progress_kanji_n3', 'progress_kanji_n2', 'progress_kanji_n1']
    },
    {
        id: 'english',
        label: 'Inglês',
        icon: '🗽',
        hubPage: 'hub_ingles.html',
        coursePage: 'html/en-US/curso_ingles.html',
        getCourses: () => ({
            A1: (typeof CURSO_ENGLISH_A1_DADOS !== 'undefined') ? CURSO_ENGLISH_A1_DADOS : [],
            A2: (typeof CURSO_ENGLISH_A2_DADOS !== 'undefined') ? CURSO_ENGLISH_A2_DADOS : [],
            B1: (typeof CURSO_ENGLISH_B1_DADOS !== 'undefined') ? CURSO_ENGLISH_B1_DADOS : [],
            B2: (typeof CURSO_ENGLISH_B2_DADOS !== 'undefined') ? CURSO_ENGLISH_B2_DADOS : []
        }),
        extraLabel: 'módulo(s) de Phrasal Verbs',
        extraProgressKeys: ['progress_phrasal_verbs']
    },
    {
        id: 'spanish',
        label: 'Espanhol',
        icon: '💃',
        hubPage: 'hub_espanhol.html',
        coursePage: 'html/es-ES/espanhol_curso.html',
        getCourses: () => ({
            A1: (typeof CURSO_ESPANHOL_A1_DADOS !== 'undefined') ? CURSO_ESPANHOL_A1_DADOS : [],
            A2: (typeof CURSO_ESPANHOL_A2_DADOS !== 'undefined') ? CURSO_ESPANHOL_A2_DADOS : [],
            B1: (typeof CURSO_ESPANHOL_B1_DADOS !== 'undefined') ? CURSO_ESPANHOL_B1_DADOS : [],
            B2: (typeof CURSO_ESPANHOL_B2_DADOS !== 'undefined') ? CURSO_ESPANHOL_B2_DADOS : []
        }),
        extraLabel: 'módulo(s) de Falsos Amigos',
        extraProgressKeys: ['progress_espanhol_falsos_amigos']
    },
    {
        id: 'russian',
        label: 'Russo',
        icon: '🪆',
        hubPage: 'hub_russo.html',
        coursePage: 'html/ru-RU/russo_curso.html',
        getCourses: () => ({
            A1: (typeof CURSO_RUSSO_A1_DADOS !== 'undefined') ? CURSO_RUSSO_A1_DADOS : [],
            A2: (typeof CURSO_RUSSO_A2_DADOS !== 'undefined') ? CURSO_RUSSO_A2_DADOS : [],
            B1: (typeof CURSO_RUSSO_B1_DADOS !== 'undefined') ? CURSO_RUSSO_B1_DADOS : [],
            B2: (typeof CURSO_RUSSO_B2_DADOS !== 'undefined') ? CURSO_RUSSO_B2_DADOS : []
        }),
        extraLabel: 'módulo(s) de Cirílico',
        extraProgressKeys: [],
        getExtraProgress: () => {
            const modulos = typeof DADOS_RUSSO_CIRILICO !== 'undefined' && Array.isArray(DADOS_RUSSO_CIRILICO.modules)
                ? DADOS_RUSSO_CIRILICO.modules
                : [];
            return modulos.filter(modulo => localStorage.getItem(`cyrillic_mod_done_${modulo.id}`) === 'true').length;
        }
    }
];

const DASHBOARD_LANGUAGE_LABELS = {
    'ja-JP': 'Japonês',
    'en-US': 'Inglês',
    'es-ES': 'Espanhol',
    'ru-RU': 'Russo',
    unknown: 'Idioma não identificado'
};

const DASHBOARD_ACTIVITY_LABELS = {
    course: 'Curso',
    quiz: 'Quiz',
    srs: 'Revisão SRS',
    kanji: 'Kanji',
    kana: 'Kana',
    dictionary: 'Dicionário',
    pronunciation: 'Pronúncia',
    'phrasal-verbs': 'Phrasal Verbs',
    minigame: 'Minigame'
};

let dashboardDadosAtuais = null;
let dashboardStreakAtual = {};
let dashboardMesCalendarioAtual = null;
let dashboardDataCalendarioSelecionada = null;

function obterUsuarioDashboard() {
    const fb = typeof window !== 'undefined' ? window.jaFirebase : null;
    return fb && fb.auth ? fb.auth.currentUser : null;
}

function obterNomeDashboard(user) {
    if (!user) return 'Estudante';
    const nomeLocal = localStorage.getItem('ja_nome_usuario');
    const nomeEmail = user.email ? user.email.split('@')[0] : '';
    return String(user.displayName || nomeLocal || nomeEmail || 'Estudante').trim() || 'Estudante';
}

function lerJSONDashboard(chave, fallback) {
    try {
        const valor = JSON.parse(localStorage.getItem(chave));
        return valor == null ? fallback : valor;
    } catch (e) {
        return fallback;
    }
}

function obterProgressoDashboard() {
    const progressoEstado = typeof AppState !== 'undefined' && AppState.user
        ? AppState.user.progressoGlobal
        : null;
    if (progressoEstado && typeof progressoEstado === 'object') return progressoEstado;
    const progressoLocal = lerJSONDashboard('japao_academy_progress', {});
    return progressoLocal && typeof progressoLocal === 'object' ? progressoLocal : {};
}

function obterResumoIdiomaDashboard(configuracao, progresso, concluidosSalvos) {
    const cursos = configuracao.getCourses();
    const idsConhecidos = new Set();
    ['A1', 'A2', 'B1', 'B2'].forEach(nivel => {
        const modulos = Array.isArray(cursos[nivel]) ? cursos[nivel] : [];
        modulos.forEach(modulo => {
            if (modulo && modulo.id) idsConhecidos.add(String(modulo.id));
        });
    });
    const concluidos = Array.from(idsConhecidos).filter(id => concluidosSalvos.has(id)).length;
    const extrasPersistidos = configuracao.extraProgressKeys.reduce((total, chave) => {
        const valores = Array.isArray(progresso[chave]) ? progresso[chave] : [];
        return total + new Set(valores).size;
    }, 0);
    const extrasConcluidos = typeof configuracao.getExtraProgress === 'function'
        ? Math.max(0, Number(configuracao.getExtraProgress()) || 0)
        : extrasPersistidos;
    const totalModulos = idsConhecidos.size;
    return {
        id: configuracao.id,
        label: configuracao.label,
        icon: configuracao.icon,
        hubPage: configuracao.hubPage,
        coursePage: configuracao.coursePage,
        extraLabel: configuracao.extraLabel,
        extrasConcluidos,
        concluidos,
        totalModulos,
        percentual: totalModulos > 0 ? Math.min(100, Math.round((concluidos / totalModulos) * 100)) : 0
    };
}

function obterResumoGeralDashboard() {
    const progresso = obterProgressoDashboard();
    const concluidosSalvos = new Set(Array.isArray(progresso.modulosConcluidos) ? progresso.modulosConcluidos.map(String) : []);
    const idiomas = DASHBOARD_LANGUAGE_REGISTRY.map(configuracao => {
        return obterResumoIdiomaDashboard(configuracao, progresso, concluidosSalvos);
    });
    const totalModulos = idiomas.reduce((total, idioma) => total + idioma.totalModulos, 0);
    const concluidos = idiomas.reduce((total, idioma) => total + idioma.concluidos, 0);
    const modulosExtras = idiomas.reduce((total, idioma) => total + idioma.extrasConcluidos, 0);
    const idiomasAtivos = idiomas.filter(idioma => idioma.concluidos > 0 || idioma.extrasConcluidos > 0).length;
    const xp = Math.max(0, parseInt(localStorage.getItem('ja_user_xp'), 10) || 0);
    return {
        xp,
        concluidos,
        totalModulos,
        percentual: totalModulos > 0 ? Math.min(100, Math.round((concluidos / totalModulos) * 100)) : 0,
        modulosExtras,
        idiomasAtivos,
        idiomasDisponiveis: idiomas.length,
        idiomas
    };
}

function obterResumoSRSDashboard(agora = Date.now()) {
    let pendentes = 0;
    let totalCards = 0;
    let proximaRevisao = null;
    let tipoPrioritario = null;
    let paginaPrioritaria = null;
    let vencimentoPrioritario = Infinity;

    DASHBOARD_SRS_SOURCES.forEach(fonte => {
        const deck = lerJSONDashboard(fonte.key, []);
        if (!Array.isArray(deck)) return;
        totalCards += deck.length;
        deck.forEach(card => {
            const vencimento = Number(card && card.dueDate);
            if (!Number.isFinite(vencimento)) return;
            if (vencimento <= agora) {
                pendentes++;
                if (vencimento < vencimentoPrioritario) {
                    vencimentoPrioritario = vencimento;
                    tipoPrioritario = fonte.type;
                    paginaPrioritaria = fonte.page;
                }
            } else if (proximaRevisao == null || vencimento < proximaRevisao) {
                proximaRevisao = vencimento;
            }
        });
    });

    return { pendentes, totalCards, proximaRevisao, tipoPrioritario, paginaPrioritaria };
}

function criarSerieSemanalDashboard(dados, hoje = new Date(), filtros = {}) {
    const dias = criarLinhasDiariasEstatisticasDashboard(dados, 7, filtros, hoje).linhas.map(item => ({
        date: item.date,
        label: criarDataDashboard(item.date).toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', ''),
        minutes: item.activeSeconds / 60,
        activities: item.activities
    }));
    const usarMinutos = dias.some(item => item.minutes > 0);
    const serie = dias.map(item => ({
        date: item.date,
        label: item.label,
        value: usarMinutos ? item.minutes : item.activities
    }));
    return { metric: usarMinutos ? 'minutes' : 'activities', serie };
}

function criarDataDashboard(chave) {
    const partes = String(chave || '').split('-').map(Number);
    if (partes.length !== 3 || partes.some(valor => !Number.isFinite(valor))) return new Date(NaN);
    return new Date(partes[0], partes[1] - 1, partes[2], 12, 0, 0, 0);
}

function criarChavesPeriodoDashboard(dias, hoje = new Date()) {
    const quantidade = [7, 30, 90, 366].includes(Number(dias)) ? Number(dias) : 30;
    const chaves = [];
    const dataBase = new Date(hoje);
    dataBase.setHours(12, 0, 0, 0);
    for (let indice = quantidade - 1; indice >= 0; indice--) {
        const data = new Date(dataBase);
        data.setDate(data.getDate() - indice);
        chaves.push(typeof obterDataLocalDashboard === 'function'
            ? obterDataLocalDashboard(data)
            : `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, '0')}-${String(data.getDate()).padStart(2, '0')}`);
    }
    return chaves;
}

function criarChaveDataDashboard(data) {
    const valor = new Date(data);
    if (Number.isNaN(valor.getTime())) return '';
    return `${valor.getFullYear()}-${String(valor.getMonth() + 1).padStart(2, '0')}-${String(valor.getDate()).padStart(2, '0')}`;
}

function normalizarMesCalendarioDashboard(referencia, hoje = new Date()) {
    let data = referencia instanceof Date ? new Date(referencia) : null;
    if (!data && /^\d{4}-\d{2}$/.test(String(referencia || ''))) {
        const [ano, mes] = String(referencia).split('-').map(Number);
        data = new Date(ano, mes - 1, 1, 12, 0, 0, 0);
    }
    if (!data || Number.isNaN(data.getTime())) data = new Date(hoje);
    data = new Date(data.getFullYear(), data.getMonth(), 1, 12, 0, 0, 0);
    const mesAtual = new Date(hoje.getFullYear(), hoje.getMonth(), 1, 12, 0, 0, 0);
    return data > mesAtual ? mesAtual : data;
}

function criarResumoDiaCalendarioDashboard(dados = {}, chave = '', hoje = new Date()) {
    const agregado = dados.dailyAggregates && dados.dailyAggregates[chave] && typeof dados.dailyAggregates[chave] === 'object'
        ? dados.dailyAggregates[chave]
        : {};
    const sessoes = (Array.isArray(dados.sessions) ? dados.sessions : []).filter(sessao => sessao && sessao.date === chave);
    const activeSeconds = Math.max(
        0,
        Number(agregado.activeSeconds) || 0,
        Number(dados.studySecondsByDate && dados.studySecondsByDate[chave]) || 0,
        (Number(dados.studyMinutesByDate && dados.studyMinutesByDate[chave]) || 0) * 60
    );
    const activities = Math.max(
        0,
        Number(agregado.activities) || 0,
        Number(dados.activityByDate && dados.activityByDate[chave]) || 0
    );
    const sessionCount = Math.max(0, Number(agregado.sessionCount) || 0, sessoes.length);
    const reviewsSessao = sessoes
        .filter(sessao => sessao.activityType === 'srs')
        .reduce((total, sessao) => total + Math.max(0, Number(sessao.activityCount) || 0), 0);

    const srsDoDia = (Array.isArray(dados.srsHistory) ? dados.srsHistory : []).filter(item => item && item.date === chave);
    let correct = srsDoDia.filter(item => item.result === 'correct').length;
    let errors = srsDoDia.filter(item => item.result === 'error').length;
    if (correct === 0 && errors === 0) {
        correct = Math.max(0, Number(agregado.correctCount) || 0);
        errors = Math.max(0, Number(agregado.errorCount) || 0);
    }
    const hasAccuracy = (correct + errors) > 0;
    const totalReviews = Math.max(reviewsSessao, correct + errors, Number(agregado.reviews) || 0);

    const idiomas = new Set();
    Object.entries(agregado.languages && typeof agregado.languages === 'object' ? agregado.languages : {}).forEach(([idioma, valor]) => {
        if (Number(valor) > 0) idiomas.add(idioma);
    });
    sessoes.forEach(sessao => {
        if (sessao.language) idiomas.add(sessao.language);
    });
    const metaMinutos = [10, 15, 20, 30, 45, 60].includes(Number(dados.dailyGoalMinutes)) ? Number(dados.dailyGoalMinutes) : 15;
    const data = criarDataDashboard(chave);
    const hojeLocal = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), 12, 0, 0, 0);
    const hasActivity = activeSeconds > 0 || activities > 0 || sessionCount > 0 || totalReviews > 0;
    return {
        date: chave,
        day: data.getDate(),
        activeSeconds,
        activities,
        sessionCount,
        reviews: totalReviews,
        languages: Array.from(idiomas).sort(),
        goalMinutes: metaMinutos,
        goalMet: activeSeconds >= metaMinutos * 60 && activeSeconds > 0,
        hasActivity,
        isFuture: data > hojeLocal,
        isToday: chave === criarChaveDataDashboard(hojeLocal),
        accuracy: { available: hasAccuracy, correct: hasAccuracy ? correct : null, errors: hasAccuracy ? errors : null }
    };
}

function criarDadosCalendarioDashboard(dados = {}, referencia, hoje = new Date()) {
    const mes = normalizarMesCalendarioDashboard(referencia, hoje);
    const ano = mes.getFullYear();
    const indiceMes = mes.getMonth();
    const totalDias = new Date(ano, indiceMes + 1, 0, 12, 0, 0, 0).getDate();
    const dias = [];
    for (let dia = 1; dia <= totalDias; dia += 1) {
        const data = new Date(ano, indiceMes, dia, 12, 0, 0, 0);
        dias.push(criarResumoDiaCalendarioDashboard(dados, criarChaveDataDashboard(data), hoje));
    }
    const usaTempo = dias.some(dia => dia.activeSeconds > 0);
    const maiorValor = Math.max(0, ...dias.map(dia => usaTempo ? dia.activeSeconds : dia.activities));
    dias.forEach(dia => {
        const valor = usaTempo ? dia.activeSeconds : dia.activities;
        dia.intensity = valor > 0 && maiorValor > 0 ? Math.min(4, Math.max(1, Math.ceil((valor / maiorValor) * 4))) : 0;
    });
    const mesAtual = new Date(hoje.getFullYear(), hoje.getMonth(), 1, 12, 0, 0, 0);
    return {
        year: ano,
        month: indiceMes,
        key: `${ano}-${String(indiceMes + 1).padStart(2, '0')}`,
        label: mes.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }),
        leadingDays: mes.getDay(),
        days: dias,
        metric: usaTempo ? 'minutes' : dias.some(dia => dia.activities > 0) ? 'activities' : 'none',
        hasData: dias.some(dia => dia.hasActivity),
        canGoNext: mes < mesAtual
    };
}

function normalizarFiltrosEstatisticasDashboard(filtros = {}) {
    const periodo = [7, 30, 90].includes(Number(filtros.period)) ? Number(filtros.period) : 30;
    const idioma = ['all', 'ja-JP', 'en-US', 'es-ES', 'ru-RU'].includes(filtros.language) ? filtros.language : 'all';
    const atividade = filtros.activity === 'all' || Object.prototype.hasOwnProperty.call(DASHBOARD_ACTIVITY_LABELS, filtros.activity)
        ? (filtros.activity || 'all')
        : 'all';
    return { period: periodo, language: idioma, activity: atividade };
}

function sessaoCorrespondeFiltrosDashboard(sessao, filtros) {
    if (!sessao || typeof sessao !== 'object') return false;
    if (filtros.language !== 'all' && sessao.language !== filtros.language) return false;
    return filtros.activity === 'all' || sessao.activityType === filtros.activity;
}

function criarLinhasDiariasEstatisticasDashboard(dados = {}, dias = 30, filtros = {}, hoje = new Date()) {
    const filtrosNormalizados = normalizarFiltrosEstatisticasDashboard(filtros);
    const chaves = criarChavesPeriodoDashboard(dias, hoje);
    const sessoes = Array.isArray(dados.sessions) ? dados.sessions : [];
    const srsHistorico = Array.isArray(dados.srsHistory) ? dados.srsHistory : [];
    const semFiltroDetalhado = filtrosNormalizados.language === 'all' && filtrosNormalizados.activity === 'all';
    const linhas = chaves.map(chave => {
        const agregado = dados.dailyAggregates && dados.dailyAggregates[chave] && typeof dados.dailyAggregates[chave] === 'object'
            ? dados.dailyAggregates[chave]
            : {};
        const sessoesDoDia = sessoes.filter(sessao => sessao && sessao.date === chave && sessaoCorrespondeFiltrosDashboard(sessao, filtrosNormalizados));
        const segundosLegados = Math.max(0, Number(dados.studySecondsByDate && dados.studySecondsByDate[chave]) || 0);
        const minutosLegados = Math.max(0, Number(dados.studyMinutesByDate && dados.studyMinutesByDate[chave]) || 0) * 60;
        const atividadesLegadas = Math.max(0, Number(dados.activityByDate && dados.activityByDate[chave]) || 0);
        const activeSeconds = semFiltroDetalhado
            ? Math.max(0, Number(agregado.activeSeconds) || 0, segundosLegados, minutosLegados)
            : sessoesDoDia.reduce((total, sessao) => total + Math.max(0, Number(sessao.activeSeconds) || 0), 0);
        const activities = semFiltroDetalhado
            ? Math.max(0, Number(agregado.activities) || 0, atividadesLegadas)
            : sessoesDoDia.reduce((total, sessao) => total + Math.max(0, Number(sessao.activityCount) || 0), 0);
        const sessionCount = semFiltroDetalhado
            ? Math.max(0, Number(agregado.sessionCount) || 0, sessoesDoDia.length)
            : sessoesDoDia.length;
        const xpEarned = semFiltroDetalhado
            ? Math.max(0, Number(agregado.xpEarned) || 0)
            : sessoesDoDia.reduce((total, sessao) => total + Math.max(0, Number(sessao.xpEarned) || 0), 0);
        const reviewsSessao = sessoesDoDia
            .filter(sessao => sessao.activityType === 'srs')
            .reduce((total, sessao) => total + Math.max(0, Number(sessao.activityCount) || 0), 0);

        const srsTentativasDia = srsHistorico.filter(item => item && item.date === chave && (filtrosNormalizados.language === 'all' || item.language === filtrosNormalizados.language));
        let correctCount = srsTentativasDia.filter(item => item.result === 'correct').length;
        let errorCount = srsTentativasDia.filter(item => item.result === 'error').length;
        if (correctCount === 0 && errorCount === 0 && semFiltroDetalhado) {
            correctCount = Math.max(0, Number(agregado.correctCount) || 0);
            errorCount = Math.max(0, Number(agregado.errorCount) || 0);
        }
        const reviews = Math.max(reviewsSessao, correctCount + errorCount, semFiltroDetalhado ? (Number(agregado.reviews) || 0) : 0);

        return { date: chave, activeSeconds, activities, sessionCount, xpEarned, reviews, correctCount, errorCount, aggregate: agregado, sessions: sessoesDoDia };
    });
    return { filtros: filtrosNormalizados, linhas };
}

function obterPrimeiraDataMedidaDashboard(dados = {}, filtros = {}) {
    const filtrosNormalizados = normalizarFiltrosEstatisticasDashboard(filtros);
    if (filtrosNormalizados.language !== 'all' || filtrosNormalizados.activity !== 'all') {
        return (Array.isArray(dados.sessions) ? dados.sessions : [])
            .filter(sessao => sessaoCorrespondeFiltrosDashboard(sessao, filtrosNormalizados) && /^\d{4}-\d{2}-\d{2}$/.test(sessao.date || ''))
            .map(sessao => sessao.date)
            .sort()[0] || null;
    }
    const datas = new Set([
        ...Object.keys(dados.dailyAggregates || {}),
        ...Object.keys(dados.studySecondsByDate || {}),
        ...Object.keys(dados.studyMinutesByDate || {})
    ]);
    return Array.from(datas).filter(data => {
        const agregado = dados.dailyAggregates && dados.dailyAggregates[data] ? dados.dailyAggregates[data] : {};
        return Number(agregado.sessionCount) > 0 || Number(agregado.activeSeconds) > 0
            || Number(dados.studySecondsByDate && dados.studySecondsByDate[data]) > 0
            || Number(dados.studyMinutesByDate && dados.studyMinutesByDate[data]) > 0;
    }).sort()[0] || null;
}

function calcularMaiorSequenciaDashboard(linhas) {
    let atual = 0;
    let maior = 0;
    linhas.forEach(linha => {
        if (linha.activeSeconds > 0 || linha.activities > 0) {
            atual += 1;
            maior = Math.max(maior, atual);
        } else {
            atual = 0;
        }
    });
    return maior;
}

function criarDistribuicaoEstatisticasDashboard(dados, linhas, filtros, dimensao) {
    const porChave = {};
    const semFiltroDetalhado = filtros.language === 'all' && filtros.activity === 'all';
    const campoAgregado = dimensao === 'language' ? 'languages' : 'activityTypes';
    if (semFiltroDetalhado) {
        linhas.forEach(linha => {
            const mapa = linha.aggregate && linha.aggregate[campoAgregado] && typeof linha.aggregate[campoAgregado] === 'object'
                ? linha.aggregate[campoAgregado]
                : {};
            Object.entries(mapa).forEach(([chave, valor]) => {
                porChave[chave] = (porChave[chave] || 0) + Math.max(0, Number(valor) || 0);
            });
        });
    } else {
        linhas.flatMap(linha => linha.sessions).forEach(sessao => {
            const chave = dimensao === 'language' ? sessao.language : sessao.activityType;
            if (chave) porChave[chave] = (porChave[chave] || 0) + Math.max(0, Number(sessao.activeSeconds) || 0);
        });
    }
    let metrica = 'time';
    let total = Object.values(porChave).reduce((soma, valor) => soma + valor, 0);
    if (total <= 0) {
        metrica = 'activities';
        Object.keys(porChave).forEach(chave => { delete porChave[chave]; });
        linhas.flatMap(linha => linha.sessions).forEach(sessao => {
            const chave = dimensao === 'language' ? sessao.language : sessao.activityType;
            if (chave) porChave[chave] = (porChave[chave] || 0) + Math.max(0, Number(sessao.activityCount) || 0);
        });
        total = Object.values(porChave).reduce((soma, valor) => soma + valor, 0);
    }
    const labels = dimensao === 'language' ? DASHBOARD_LANGUAGE_LABELS : DASHBOARD_ACTIVITY_LABELS;
    const entries = Object.entries(porChave)
        .filter(([, valor]) => valor > 0)
        .map(([key, value]) => ({ key, label: labels[key] || key, value, percent: total > 0 ? Math.round((value / total) * 100) : 0 }))
        .sort((a, b) => b.value - a.value || a.label.localeCompare(b.label, 'pt-BR'));
    return { metric: total > 0 ? metrica : 'none', total, entries };
}

function calcularEstatisticasDashboard(dados = {}, filtros = {}, hoje = new Date(), streak = {}) {
    const filtrosNormalizados = normalizarFiltrosEstatisticasDashboard(filtros);
    const periodo = criarLinhasDiariasEstatisticasDashboard(dados, filtrosNormalizados.period, filtrosNormalizados, hoje);
    const seteDias = criarLinhasDiariasEstatisticasDashboard(dados, 7, filtrosNormalizados, hoje).linhas;
    const trintaDias = criarLinhasDiariasEstatisticasDashboard(dados, 30, filtrosNormalizados, hoje).linhas;
    const hojeChave = criarChavesPeriodoDashboard(7, hoje).at(-1);
    const primeiraDataEncontrada = obterPrimeiraDataMedidaDashboard(dados, filtrosNormalizados);
    const primeiraDataMedida = primeiraDataEncontrada && primeiraDataEncontrada <= hojeChave ? primeiraDataEncontrada : null;
    const somar = (linhas, campo) => linhas.reduce((total, linha) => total + Math.max(0, Number(linha[campo]) || 0), 0);
    const hojeLinha = seteDias.at(-1) || { activeSeconds: 0 };
    const minutos = linhas => somar(linhas, 'activeSeconds') / 60;
    const inicioPeriodo = periodo.linhas[0] ? periodo.linhas[0].date : null;
    const tempoDisponivel = Boolean(primeiraDataMedida);
    const criarMetricaTempo = (valor, inicio) => ({
        value: valor,
        available: tempoDisponivel,
        partial: tempoDisponivel && Boolean(inicio) && primeiraDataMedida > inicio
    });
    const diasAtivos = periodo.linhas.filter(linha => linha.activeSeconds > 0 || linha.activities > 0).length;
    const diasAtivosComTempo = periodo.linhas.filter(linha => linha.activeSeconds > 0).length;
    const metaMinutos = [10, 15, 20, 30, 45, 60].includes(Number(dados.dailyGoalMinutes)) ? Number(dados.dailyGoalMinutes) : 15;
    const diasElegiveis = tempoDisponivel ? periodo.linhas.filter(linha => linha.date >= primeiraDataMedida).length : 0;
    const metasAlcancadas = tempoDisponivel
        ? periodo.linhas.filter(linha => linha.date >= primeiraDataMedida && linha.activeSeconds >= metaMinutos * 60).length
        : 0;
    const sequenciaCalculada = calcularMaiorSequenciaDashboard(periodo.linhas);
    const sequenciaPersistida = filtrosNormalizados.language === 'all' && filtrosNormalizados.activity === 'all'
        ? Math.max(0, Number(streak.best) || 0, Number(streak.max) || 0, Number(streak.count) || 0)
        : 0;
    const distribuicaoIdiomas = criarDistribuicaoEstatisticasDashboard(dados, periodo.linhas, filtrosNormalizados, 'language');
    const distribuicaoAtividades = criarDistribuicaoEstatisticasDashboard(dados, periodo.linhas, filtrosNormalizados, 'activity');

    const totalCorrect = somar(periodo.linhas, 'correctCount');
    const totalErrors = somar(periodo.linhas, 'errorCount');
    const totalEvaluated = totalCorrect + totalErrors;
    const accuracyValue = totalEvaluated > 0 ? (totalCorrect / totalEvaluated) * 100 : null;

    return {
        filters: filtrosNormalizados,
        firstMeasuredDate: primeiraDataMedida,
        minutesToday: criarMetricaTempo(hojeLinha.activeSeconds / 60, hojeLinha.date),
        minutes7: criarMetricaTempo(minutos(seteDias), seteDias[0] && seteDias[0].date),
        minutes30: criarMetricaTempo(minutos(trintaDias), trintaDias[0] && trintaDias[0].date),
        activeDays: diasAtivos,
        dailyAverage: { value: diasAtivosComTempo > 0 ? minutos(periodo.linhas) / diasAtivosComTempo : 0, available: diasAtivosComTempo > 0, partial: tempoDisponivel && primeiraDataMedida > inicioPeriodo },
        activities: somar(periodo.linhas, 'activities'),
        sessions: somar(periodo.linhas, 'sessionCount'),
        reviews: somar(periodo.linhas, 'reviews'),
        accuracy: { value: accuracyValue, available: totalEvaluated > 0, correct: totalCorrect, errors: totalErrors, total: totalEvaluated },
        goalsReached: { value: metasAlcancadas, available: tempoDisponivel, eligibleDays: diasElegiveis },
        goalRate: { value: diasElegiveis > 0 ? (metasAlcancadas / diasElegiveis) * 100 : 0, available: diasElegiveis > 0 },
        bestStreak: Math.max(sequenciaCalculada, sequenciaPersistida),
        xpEarned: { value: somar(periodo.linhas, 'xpEarned'), available: tempoDisponivel, partial: tempoDisponivel && primeiraDataMedida > inicioPeriodo },
        languageDistribution: distribuicaoIdiomas,
        activityDistribution: distribuicaoAtividades,
        rows: periodo.linhas,
        goalMinutes: metaMinutos
    };
}

function formatarProximaRevisaoDashboard(resumoSRS) {
    if (resumoSRS.pendentes > 0) return 'Disponível agora';
    if (!resumoSRS.proximaRevisao) return 'Nenhuma revisão agendada';
    return new Date(resumoSRS.proximaRevisao).toLocaleString('pt-BR', {
        day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'
    });
}

function criarDadosGraficoEvolucaoDashboard(estatisticas = {}, metrica = 'minutes') {
    const metricas = {
        minutes: { label: 'Minutos estudados', unit: 'minutos', obter: linha => Math.max(0, Number(linha.activeSeconds) || 0) / 60 },
        activities: { label: 'Atividades concluídas', unit: 'atividades', obter: linha => Math.max(0, Number(linha.activities) || 0) },
        reviews: { label: 'Revisões realizadas', unit: 'revisões', obter: linha => Math.max(0, Number(linha.reviews) || 0) }
    };
    const chave = Object.prototype.hasOwnProperty.call(metricas, metrica) ? metrica : 'minutes';
    const configuracao = metricas[chave];
    const pontos = (Array.isArray(estatisticas.rows) ? estatisticas.rows : []).map(linha => ({
        date: linha.date,
        label: criarDataDashboard(linha.date).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
        value: Math.round(configuracao.obter(linha) * 10) / 10
    }));
    const max = Math.max(0, ...pontos.map(ponto => ponto.value));
    return { metric: chave, label: configuracao.label, unit: configuracao.unit, points: pontos, max, hasData: max > 0 };
}

function criarElementoSVGDashboard(nome, atributos = {}) {
    const elemento = document.createElementNS('http://www.w3.org/2000/svg', nome);
    Object.entries(atributos).forEach(([chave, valor]) => elemento.setAttribute(chave, String(valor)));
    return elemento;
}

function renderizarGraficoEvolucaoDashboard(estatisticas = {}) {
    const container = document.getElementById('dashboard-weekly-chart');
    const alternativa = document.getElementById('dashboard-weekly-summary');
    const estadoVazio = document.getElementById('dashboard-weekly-empty');
    const seletor = document.getElementById('dashboard-evolution-metric');
    if (!container || !alternativa || !estadoVazio) return null;
    const resultado = criarDadosGraficoEvolucaoDashboard(estatisticas, seletor ? seletor.value : 'minutes');

    container.replaceChildren();
    alternativa.replaceChildren();
    estadoVazio.hidden = resultado.hasData;
    container.hidden = !resultado.hasData;
    alternativa.hidden = !resultado.hasData;
    if (!resultado.hasData) return resultado;

    const largura = 900;
    const altura = 280;
    const margem = { topo: 24, direita: 18, base: 46, esquerda: 52 };
    const larguraUtil = largura - margem.esquerda - margem.direita;
    const alturaUtil = altura - margem.topo - margem.base;
    const divisorX = Math.max(1, resultado.points.length - 1);
    const svg = criarElementoSVGDashboard('svg', {
        viewBox: `0 0 ${largura} ${altura}`,
        'aria-hidden': 'true',
        focusable: 'false'
    });

    for (let indice = 0; indice <= 4; indice += 1) {
        const y = margem.topo + (alturaUtil * indice / 4);
        const valor = resultado.max * (1 - indice / 4);
        svg.appendChild(criarElementoSVGDashboard('line', {
            x1: margem.esquerda, y1: y, x2: largura - margem.direita, y2: y, class: 'dashboard-chart-grid-line'
        }));
        const rotulo = criarElementoSVGDashboard('text', {
            x: margem.esquerda - 8, y: y + 4, class: 'dashboard-chart-axis-label', 'text-anchor': 'end'
        });
        rotulo.textContent = formatarNumeroEstatisticaDashboard(valor, resultado.metric === 'minutes' ? 1 : 0);
        svg.appendChild(rotulo);
    }

    const coordenadas = resultado.points.map((ponto, indice) => ({
        ...ponto,
        x: margem.esquerda + (larguraUtil * indice / divisorX),
        y: margem.topo + alturaUtil - (ponto.value / resultado.max) * alturaUtil
    }));
    const linha = criarElementoSVGDashboard('polyline', {
        points: coordenadas.map(ponto => `${ponto.x},${ponto.y}`).join(' '),
        class: 'dashboard-chart-line'
    });
    svg.appendChild(linha);

    const intervaloRotulos = Math.max(1, Math.ceil(resultado.points.length / 7));
    coordenadas.forEach((ponto, indice) => {
        if (resultado.points.length <= 30 || ponto.value > 0) {
            const marcador = criarElementoSVGDashboard('circle', {
                cx: ponto.x, cy: ponto.y, r: 4, class: 'dashboard-chart-point'
            });
            const titulo = criarElementoSVGDashboard('title');
            titulo.textContent = `${ponto.label}: ${formatarNumeroEstatisticaDashboard(ponto.value)} ${resultado.unit}`;
            marcador.appendChild(titulo);
            svg.appendChild(marcador);
        }
        if (indice % intervaloRotulos === 0 || indice === coordenadas.length - 1) {
            const rotulo = criarElementoSVGDashboard('text', {
                x: ponto.x, y: altura - 17, class: 'dashboard-chart-axis-label', 'text-anchor': 'middle'
            });
            rotulo.textContent = ponto.label;
            svg.appendChild(rotulo);
        }
    });

    container.setAttribute('aria-label', `${resultado.label} por dia nos últimos ${resultado.points.length} dias. Unidade: ${resultado.unit}.`);
    container.appendChild(svg);
    resultado.points.forEach(ponto => {
        const item = document.createElement('li');
        item.textContent = `${ponto.date}: ${formatarNumeroEstatisticaDashboard(ponto.value)} ${resultado.unit}`;
        alternativa.appendChild(item);
    });
    return resultado;
}

function renderizarGraficoRevisoesDashboard(estatisticas = {}) {
    const container = document.getElementById('dashboard-review-chart');
    const alternativa = document.getElementById('dashboard-review-chart-summary');
    const estadoVazio = document.getElementById('dashboard-review-chart-empty');
    if (!container || !alternativa || !estadoVazio) return null;

    const linhas = Array.isArray(estatisticas.rows) ? estatisticas.rows : [];
    const totalEvaluated = linhas.reduce((t, l) => t + (l.correctCount || 0) + (l.errorCount || 0), 0);

    container.replaceChildren();
    alternativa.replaceChildren();

    if (totalEvaluated <= 0) {
        container.hidden = true;
        alternativa.hidden = true;
        estadoVazio.hidden = false;
        return { hasData: false };
    }

    estadoVazio.hidden = true;
    container.hidden = false;
    alternativa.hidden = false;

    const pontos = linhas.map(l => ({
        date: l.date,
        label: criarDataDashboard(l.date).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
        correct: l.correctCount || 0,
        errors: l.errorCount || 0,
        total: (l.correctCount || 0) + (l.errorCount || 0)
    }));

    const maxVal = Math.max(1, ...pontos.map(p => p.total));

    const largura = 900;
    const altura = 280;
    const margem = { topo: 24, direita: 18, base: 46, esquerda: 52 };
    const larguraUtil = largura - margem.esquerda - margem.direita;
    const alturaUtil = altura - margem.topo - margem.base;
    const divisorX = Math.max(1, pontos.length - 1);
    const svg = criarElementoSVGDashboard('svg', {
        viewBox: `0 0 ${largura} ${altura}`,
        'aria-hidden': 'true',
        focusable: 'false'
    });

    for (let i = 0; i <= 4; i += 1) {
        const y = margem.topo + (alturaUtil * i / 4);
        const val = maxVal * (1 - i / 4);
        svg.appendChild(criarElementoSVGDashboard('line', {
            x1: margem.esquerda, y1: y, x2: largura - margem.direita, y2: y, class: 'dashboard-chart-grid-line'
        }));
        const rotulo = criarElementoSVGDashboard('text', {
            x: margem.esquerda - 8, y: y + 4, class: 'dashboard-chart-axis-label', 'text-anchor': 'end'
        });
        rotulo.textContent = formatarNumeroEstatisticaDashboard(val, 0);
        svg.appendChild(rotulo);
    }

    const coordsCorrect = pontos.map((p, idx) => ({
        x: margem.esquerda + (larguraUtil * idx / divisorX),
        y: margem.topo + alturaUtil - (p.correct / maxVal) * alturaUtil
    }));
    const coordsError = pontos.map((p, idx) => ({
        x: margem.esquerda + (larguraUtil * idx / divisorX),
        y: margem.topo + alturaUtil - (p.errors / maxVal) * alturaUtil
    }));

    svg.appendChild(criarElementoSVGDashboard('polyline', {
        points: coordsCorrect.map(p => `${p.x},${p.y}`).join(' '),
        stroke: '#4ade80', 'stroke-width': 2, fill: 'none'
    }));

    svg.appendChild(criarElementoSVGDashboard('polyline', {
        points: coordsError.map(p => `${p.x},${p.y}`).join(' '),
        stroke: '#f87171', 'stroke-width': 2, 'stroke-dasharray': '4,4', fill: 'none'
    }));

    pontos.forEach((ponto, idx) => {
        const x = margem.esquerda + (larguraUtil * idx / divisorX);
        if (ponto.correct > 0) {
            const circleCorrect = criarElementoSVGDashboard('circle', {
                cx: x, cy: coordsCorrect[idx].y, r: 4, fill: '#4ade80'
            });
            const t = criarElementoSVGDashboard('title');
            t.textContent = `${ponto.label}: ${ponto.correct} acerto(s)`;
            circleCorrect.appendChild(t);
            svg.appendChild(circleCorrect);
        }
        if (ponto.errors > 0) {
            const circleError = criarElementoSVGDashboard('circle', {
                cx: x, cy: coordsError[idx].y, r: 4, fill: '#f87171'
            });
            const t = criarElementoSVGDashboard('title');
            t.textContent = `${ponto.label}: ${ponto.errors} erro(s)`;
            circleError.appendChild(t);
            svg.appendChild(circleError);
        }
    });

    container.setAttribute('aria-label', `Desempenho de revisões SRS no período: ${totalEvaluated} respostas avaliadas.`);
    container.appendChild(svg);

    pontos.forEach(p => {
        if (p.total > 0) {
            const item = document.createElement('li');
            item.textContent = `${p.date}: ${p.correct} acerto(s), ${p.errors} erro(s)`;
            alternativa.appendChild(item);
        }
    });

    return { hasData: true };
}

function criarDadosGraficoDistribuicaoDashboard(estatisticas = {}, dimensao = 'language') {
    const chave = dimensao === 'activity' ? 'activity' : 'language';
    const distribuicao = chave === 'activity' ? estatisticas.activityDistribution : estatisticas.languageDistribution;
    const dados = distribuicao && typeof distribuicao === 'object' ? distribuicao : { metric: 'none', total: 0, entries: [] };
    return {
        dimension: chave,
        label: chave === 'activity' ? 'atividade' : 'idioma',
        metric: dados.metric || 'none',
        total: Math.max(0, Number(dados.total) || 0),
        entries: Array.isArray(dados.entries) ? dados.entries : [],
        hasData: dados.metric !== 'none' && Array.isArray(dados.entries) && dados.entries.length > 0
    };
}

function renderizarGraficoDistribuicaoDashboard(estatisticas = {}) {
    const container = document.getElementById('dashboard-distribution-chart');
    const alternativa = document.getElementById('dashboard-distribution-chart-summary');
    const estadoVazio = document.getElementById('dashboard-distribution-chart-empty');
    const descricao = document.getElementById('dashboard-distribution-chart-description');
    const seletor = document.getElementById('dashboard-distribution-dimension');
    if (!container || !alternativa || !estadoVazio) return null;
    const resultado = criarDadosGraficoDistribuicaoDashboard(estatisticas, seletor ? seletor.value : 'language');

    container.replaceChildren();
    alternativa.replaceChildren();
    estadoVazio.hidden = resultado.hasData;
    container.hidden = !resultado.hasData;
    alternativa.hidden = !resultado.hasData;
    if (descricao) descricao.textContent = resultado.metric === 'time'
        ? `Proporção por ${resultado.label}, baseada no tempo ativo medido.`
        : resultado.metric === 'activities'
            ? `Sem minutos confiáveis; proporção por ${resultado.label}, baseada em atividades concluídas.`
            : 'Proporção baseada nos dados reais disponíveis.';
    if (!resultado.hasData) return resultado;

    container.setAttribute('aria-label', `Distribuição do estudo por ${resultado.label}, baseada em ${resultado.metric === 'time' ? 'tempo ativo' : 'atividades concluídas'}.`);
    resultado.entries.forEach(entrada => {
        const linha = document.createElement('div');
        linha.className = 'dashboard-distribution-chart-row';
        const cabecalho = document.createElement('div');
        cabecalho.className = 'dashboard-distribution-chart-label';
        const rotulo = document.createElement('span');
        rotulo.textContent = entrada.label;
        const valor = document.createElement('strong');
        const detalhe = resultado.metric === 'time'
            ? `${formatarNumeroEstatisticaDashboard(entrada.value / 60)} min`
            : `${formatarNumeroEstatisticaDashboard(entrada.value, 0)} atividade(s)`;
        valor.textContent = `${entrada.percent}% · ${detalhe}`;
        const trilho = document.createElement('span');
        trilho.className = 'dashboard-distribution-chart-track';
        trilho.setAttribute('aria-hidden', 'true');
        const barra = document.createElement('span');
        barra.className = 'dashboard-distribution-chart-bar';
        barra.style.setProperty('--dashboard-distribution-size', `${Math.min(100, Math.max(0, Number(entrada.percent) || 0))}%`);
        trilho.appendChild(barra);
        cabecalho.append(rotulo, valor);
        linha.append(cabecalho, trilho);
        container.appendChild(linha);

        const item = document.createElement('li');
        item.textContent = `${entrada.label}: ${entrada.percent}%, ${detalhe}`;
        alternativa.appendChild(item);
    });
    return resultado;
}

function renderizarGraficosDashboard(estatisticas = {}) {
    const resultados = {
        evolution: renderizarGraficoEvolucaoDashboard(estatisticas),
        distribution: renderizarGraficoDistribuicaoDashboard(estatisticas)
    };
    renderizarGraficoRevisoesDashboard();
    return resultados;
}

function formatarIdiomasCalendarioDashboard(idiomas = []) {
    if (!Array.isArray(idiomas) || idiomas.length === 0) return 'Não identificado';
    return idiomas.map(idioma => DASHBOARD_LANGUAGE_LABELS[idioma] || idioma).join(', ');
}

function renderizarResumoDiaCalendarioDashboard(dia, anunciar = false) {
    const resumo = document.getElementById('dashboard-calendar-day-summary');
    if (!resumo || !dia) return;
    const titulo = document.getElementById('dashboard-calendar-day-title');
    const meta = document.getElementById('dashboard-calendar-day-goal');
    const definir = (id, valor) => {
        const elemento = document.getElementById(id);
        if (elemento) elemento.textContent = String(valor);
    };
    resumo.hidden = false;
    if (titulo) titulo.textContent = criarDataDashboard(dia.date).toLocaleDateString('pt-BR', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
    definir('dashboard-calendar-day-time', `${formatarNumeroEstatisticaDashboard(dia.activeSeconds / 60)} min`);
    definir('dashboard-calendar-day-activities', formatarNumeroEstatisticaDashboard(dia.activities, 0));
    definir('dashboard-calendar-day-sessions', formatarNumeroEstatisticaDashboard(dia.sessionCount, 0));
    definir('dashboard-calendar-day-languages', formatarIdiomasCalendarioDashboard(dia.languages));
    definir('dashboard-calendar-day-reviews', formatarNumeroEstatisticaDashboard(dia.reviews, 0));
    definir('dashboard-calendar-day-results', dia.accuracy.available
        ? `${dia.accuracy.correct} acerto(s) · ${dia.accuracy.errors} erro(s)`
        : 'Dados insuficientes');
    if (meta) {
        meta.classList.toggle('is-complete', dia.goalMet);
        meta.textContent = dia.goalMet
            ? `Meta de ${dia.goalMinutes} min alcançada`
            : dia.activeSeconds > 0
                ? `Meta de ${dia.goalMinutes} min não alcançada`
                : dia.hasActivity
                    ? 'Meta sem tempo medido'
                    : 'Sem estudo registrado';
    }
    if (anunciar) resumo.focus({ preventScroll: true });
}

function selecionarDiaCalendarioDashboard(chave, dadosCalendario, anunciar = false) {
    const dia = dadosCalendario && dadosCalendario.days.find(item => item.date === chave && !item.isFuture);
    if (!dia) return false;
    dashboardDataCalendarioSelecionada = chave;
    const botoes = document.querySelectorAll('#dashboard-calendar-grid .dashboard-calendar-day-button');
    botoes.forEach(botao => {
        const selecionado = botao.dataset.date === chave;
        botao.classList.toggle('is-selected', selecionado);
        botao.setAttribute('aria-selected', selecionado ? 'true' : 'false');
        botao.tabIndex = selecionado ? 0 : -1;
    });
    renderizarResumoDiaCalendarioDashboard(dia, anunciar);
    return true;
}

function criarRotuloDiaCalendarioDashboard(dia, metrica) {
    const dataCompleta = criarDataDashboard(dia.date).toLocaleDateString('pt-BR', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
    if (dia.isFuture) return `${dataCompleta}; dia futuro`;
    if (!dia.hasActivity) return `${dataCompleta}; sem estudo registrado`;
    const valor = metrica === 'minutes'
        ? `${formatarNumeroEstatisticaDashboard(dia.activeSeconds / 60)} minutos`
        : `${formatarNumeroEstatisticaDashboard(dia.activities, 0)} atividades`;
    return `${dataCompleta}; ${valor}; ${dia.goalMet ? 'meta alcançada' : 'meta não alcançada'}`;
}

function renderizarCalendarioDashboard(dados = dashboardDadosAtuais, referencia = dashboardMesCalendarioAtual, hoje = new Date()) {
    const grade = document.getElementById('dashboard-calendar-grid');
    if (!grade || !dados) return null;
    const calendario = criarDadosCalendarioDashboard(dados, referencia, hoje);
    dashboardMesCalendarioAtual = new Date(calendario.year, calendario.month, 1, 12, 0, 0, 0);
    const mes = document.getElementById('dashboard-calendar-month');
    const proximo = document.getElementById('dashboard-calendar-next');
    const vazio = document.getElementById('dashboard-calendar-empty');
    const resumo = document.getElementById('dashboard-calendar-day-summary');
    const metrica = document.getElementById('dashboard-calendar-metric');
    if (mes) mes.textContent = calendario.label.charAt(0).toUpperCase() + calendario.label.slice(1);
    if (proximo) proximo.disabled = !calendario.canGoNext;
    if (vazio) vazio.hidden = calendario.hasData;
    if (metrica) metrica.textContent = calendario.metric === 'minutes'
        ? 'Intensidade baseada no tempo ativo medido.'
        : calendario.metric === 'activities'
            ? 'Sem minutos confiáveis; intensidade baseada em atividades concluídas.'
            : 'Intensidade baseada nos dados reais disponíveis.';

    grade.replaceChildren();
    for (let indice = 0; indice < calendario.leadingDays; indice += 1) {
        const espaco = document.createElement('span');
        espaco.className = 'dashboard-calendar-placeholder';
        espaco.setAttribute('role', 'gridcell');
        espaco.setAttribute('aria-hidden', 'true');
        grade.appendChild(espaco);
    }
    calendario.days.forEach(dia => {
        const celula = document.createElement('div');
        celula.className = 'dashboard-calendar-cell';
        celula.setAttribute('role', 'gridcell');
        const botao = document.createElement('button');
        botao.type = 'button';
        botao.className = `dashboard-calendar-day-button intensity-${dia.intensity}`;
        botao.dataset.date = dia.date;
        botao.disabled = dia.isFuture;
        botao.setAttribute('aria-label', criarRotuloDiaCalendarioDashboard(dia, calendario.metric));
        botao.setAttribute('aria-selected', 'false');
        botao.tabIndex = -1;
        if (dia.isToday) botao.classList.add('is-today');
        if (dia.goalMet) botao.classList.add('is-goal-met');
        const numero = document.createElement('span');
        numero.className = 'dashboard-calendar-day-number';
        numero.textContent = String(dia.day);
        const marca = document.createElement('span');
        marca.className = 'dashboard-calendar-day-mark';
        marca.textContent = dia.hasActivity
            ? calendario.metric === 'minutes'
                ? `${formatarNumeroEstatisticaDashboard(dia.activeSeconds / 60)} min`
                : `${formatarNumeroEstatisticaDashboard(dia.activities, 0)} ativ.`
            : dia.isFuture ? 'Futuro' : '—';
        botao.append(numero, marca);
        if (dia.goalMet) {
            const meta = document.createElement('span');
            meta.className = 'dashboard-calendar-day-goal';
            meta.textContent = '✓ Meta';
            botao.appendChild(meta);
        }
        botao.addEventListener('click', () => selecionarDiaCalendarioDashboard(dia.date, calendario, true));
        celula.appendChild(botao);
        grade.appendChild(celula);
    });

    if (!calendario.hasData) {
        dashboardDataCalendarioSelecionada = null;
        if (resumo) resumo.hidden = true;
        const primeiroDisponivel = calendario.days.find(dia => !dia.isFuture);
        const primeiroBotao = primeiroDisponivel && grade.querySelector(`[data-date="${primeiroDisponivel.date}"]`);
        if (primeiroBotao) primeiroBotao.tabIndex = 0;
        return calendario;
    }
    const selecionadaValida = calendario.days.some(dia => dia.date === dashboardDataCalendarioSelecionada && !dia.isFuture);
    const hojeDoMes = calendario.days.find(dia => dia.isToday && !dia.isFuture);
    const primeiroAtivo = calendario.days.find(dia => dia.hasActivity && !dia.isFuture);
    const selecionada = selecionadaValida
        ? dashboardDataCalendarioSelecionada
        : (hojeDoMes || primeiroAtivo || calendario.days.find(dia => !dia.isFuture)).date;
    selecionarDiaCalendarioDashboard(selecionada, calendario, false);
    return calendario;
}

function moverMesCalendarioDashboard(deslocamento) {
    if (!dashboardDadosAtuais) return null;
    const atual = normalizarMesCalendarioDashboard(dashboardMesCalendarioAtual, new Date());
    const destino = new Date(atual.getFullYear(), atual.getMonth() + Number(deslocamento || 0), 1, 12, 0, 0, 0);
    dashboardDataCalendarioSelecionada = null;
    return renderizarCalendarioDashboard(dashboardDadosAtuais, destino, new Date());
}

function navegarTecladoCalendarioDashboard(event) {
    const teclas = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 };
    if (!Object.prototype.hasOwnProperty.call(teclas, event.key) && !['Home', 'End'].includes(event.key)) return;
    const botoes = Array.from(document.querySelectorAll('#dashboard-calendar-grid .dashboard-calendar-day-button:not(:disabled)'));
    const indiceAtual = botoes.indexOf(event.target);
    if (indiceAtual < 0) return;
    event.preventDefault();
    const indiceDestino = event.key === 'Home'
        ? 0
        : event.key === 'End'
            ? botoes.length - 1
            : Math.min(botoes.length - 1, Math.max(0, indiceAtual + teclas[event.key]));
    botoes[indiceDestino].focus();
}

function atualizarGraficoSemanalDashboard(dados, filtros = {}) {
    const estatisticas = calcularEstatisticasDashboard(dados, filtros, new Date(), dashboardStreakAtual || {});
    return renderizarGraficoEvolucaoDashboard(estatisticas);
}

function formatarNumeroEstatisticaDashboard(valor, casas = 1) {
    const numero = Math.max(0, Number(valor) || 0);
    return new Intl.NumberFormat('pt-BR', { maximumFractionDigits: casas }).format(numero);
}

function definirValorEstatisticaDashboard(id, valor, nota = '') {
    const elemento = document.getElementById(id);
    const notaElemento = document.getElementById(`${id}-note`);
    if (elemento) elemento.textContent = String(valor);
    if (notaElemento) notaElemento.textContent = String(nota || '');
}

function obterFiltrosEstatisticasDashboard() {
    const periodo = document.getElementById('dashboard-filter-period');
    const idioma = document.getElementById('dashboard-filter-language');
    const atividade = document.getElementById('dashboard-filter-activity');
    return normalizarFiltrosEstatisticasDashboard({
        period: periodo ? periodo.value : 30,
        language: idioma ? idioma.value : 'all',
        activity: atividade ? atividade.value : 'all'
    });
}

function atualizarOpcoesAtividadeDashboard(dados) {
    const select = document.getElementById('dashboard-filter-activity');
    if (!select) return;
    const valorAtual = select.value || 'all';
    const tipos = new Set();
    Object.values(dados.dailyAggregates || {}).forEach(agregado => {
        Object.keys(agregado && agregado.activityTypes ? agregado.activityTypes : {}).forEach(tipo => {
            if (Object.prototype.hasOwnProperty.call(DASHBOARD_ACTIVITY_LABELS, tipo)) tipos.add(tipo);
        });
    });
    (Array.isArray(dados.sessions) ? dados.sessions : []).forEach(sessao => {
        if (sessao && Object.prototype.hasOwnProperty.call(DASHBOARD_ACTIVITY_LABELS, sessao.activityType)) tipos.add(sessao.activityType);
    });
    select.replaceChildren();
    const todas = document.createElement('option');
    todas.value = 'all';
    todas.textContent = 'Todas';
    select.appendChild(todas);
    Array.from(tipos).sort((a, b) => DASHBOARD_ACTIVITY_LABELS[a].localeCompare(DASHBOARD_ACTIVITY_LABELS[b], 'pt-BR')).forEach(tipo => {
        const opcao = document.createElement('option');
        opcao.value = tipo;
        opcao.textContent = DASHBOARD_ACTIVITY_LABELS[tipo];
        select.appendChild(opcao);
    });
    select.value = tipos.has(valorAtual) ? valorAtual : 'all';
}

function renderizarDistribuicaoDashboard(distribuicao, listaId, metricaId) {
    const lista = document.getElementById(listaId);
    const metrica = document.getElementById(metricaId);
    if (!lista || !metrica) return;
    lista.replaceChildren();
    if (!distribuicao || distribuicao.metric === 'none' || distribuicao.entries.length === 0) {
        metrica.textContent = 'Sem dados suficientes para esta distribuição.';
        const item = document.createElement('li');
        const texto = document.createElement('span');
        texto.textContent = 'Nenhum dado compatível com os filtros.';
        item.appendChild(texto);
        lista.appendChild(item);
        return;
    }
    metrica.textContent = distribuicao.metric === 'time'
        ? 'Proporção baseada no tempo ativo medido.'
        : 'Sem minutos confiáveis; proporção baseada em atividades concluídas.';
    distribuicao.entries.forEach(entrada => {
        const item = document.createElement('li');
        const rotulo = document.createElement('span');
        rotulo.textContent = entrada.label;
        const valor = document.createElement('strong');
        const detalhe = distribuicao.metric === 'time'
            ? `${formatarNumeroEstatisticaDashboard(entrada.value / 60)} min`
            : `${formatarNumeroEstatisticaDashboard(entrada.value, 0)} atividade(s)`;
        valor.textContent = `${entrada.percent}% · ${detalhe}`;
        item.append(rotulo, valor);
        lista.appendChild(item);
    });
}

function renderizarEstatisticasDashboard(dados = dashboardDadosAtuais, streak = dashboardStreakAtual) {
    if (!dados) return null;
    const filtros = obterFiltrosEstatisticasDashboard();
    const estatisticas = calcularEstatisticasDashboard(dados, filtros, new Date(), streak || {});
    const notaParcial = metrica => metrica.partial && estatisticas.firstMeasuredDate
        ? `Parcial: medição disponível desde ${criarDataDashboard(estatisticas.firstMeasuredDate).toLocaleDateString('pt-BR')}.`
        : '';
    const exibirMinutos = metrica => metrica.available ? `${formatarNumeroEstatisticaDashboard(metrica.value)} min` : 'Dados insuficientes';

    definirValorEstatisticaDashboard('dashboard-stat-today-minutes', exibirMinutos(estatisticas.minutesToday), notaParcial(estatisticas.minutesToday));
    definirValorEstatisticaDashboard('dashboard-stat-7-minutes', exibirMinutos(estatisticas.minutes7), notaParcial(estatisticas.minutes7));
    definirValorEstatisticaDashboard('dashboard-stat-30-minutes', exibirMinutos(estatisticas.minutes30), notaParcial(estatisticas.minutes30));
    definirValorEstatisticaDashboard('dashboard-stat-active-days', `${estatisticas.activeDays} de ${estatisticas.filters.period}`, 'Dias com tempo ou atividade real registrada.');
    definirValorEstatisticaDashboard('dashboard-stat-daily-average', estatisticas.dailyAverage.available
        ? `${formatarNumeroEstatisticaDashboard(estatisticas.dailyAverage.value)} min`
        : 'Dados insuficientes', notaParcial(estatisticas.dailyAverage));
    definirValorEstatisticaDashboard('dashboard-stat-activities', formatarNumeroEstatisticaDashboard(estatisticas.activities, 0), 'Inclui registros legados compatíveis quando não há filtro específico.');
    definirValorEstatisticaDashboard('dashboard-stat-sessions', formatarNumeroEstatisticaDashboard(estatisticas.sessions, 0), 'Sessões válidas com interação e pelo menos 15 segundos.');
    definirValorEstatisticaDashboard('dashboard-stat-reviews', formatarNumeroEstatisticaDashboard(estatisticas.reviews, 0), 'Baseado nas sessões SRS detalhadas disponíveis.');
    definirValorEstatisticaDashboard('dashboard-stat-accuracy', 'Dados insuficientes', 'Acertos e erros históricos serão registrados na Fase 5.');
    definirValorEstatisticaDashboard('dashboard-stat-goals', estatisticas.goalsReached.available
        ? `${estatisticas.goalsReached.value} dia(s)`
        : 'Dados insuficientes', estatisticas.goalsReached.available
        ? `Meta atual de ${estatisticas.goalMinutes} minutos aplicada a ${estatisticas.goalsReached.eligibleDays} dia(s) medido(s).`
        : 'Ainda não existe um dia com tempo ativo medido.');
    definirValorEstatisticaDashboard('dashboard-stat-goal-rate', estatisticas.goalRate.available
        ? `${formatarNumeroEstatisticaDashboard(estatisticas.goalRate.value, 0)}%`
        : 'Dados insuficientes', 'Dias que alcançaram a meta ÷ dias medidos elegíveis.');
    definirValorEstatisticaDashboard('dashboard-stat-best-streak', `${estatisticas.bestStreak} dia(s)`, 'Maior sequência conhecida dentro dos dados disponíveis.');
    definirValorEstatisticaDashboard('dashboard-stat-period-xp', estatisticas.xpEarned.available
        ? `${formatarNumeroEstatisticaDashboard(estatisticas.xpEarned.value, 0)} XP`
        : 'Dados insuficientes', notaParcial(estatisticas.xpEarned));

    renderizarDistribuicaoDashboard(estatisticas.languageDistribution, 'dashboard-language-distribution', 'dashboard-language-distribution-metric');
    renderizarDistribuicaoDashboard(estatisticas.activityDistribution, 'dashboard-activity-distribution', 'dashboard-activity-distribution-metric');

    const status = document.getElementById('dashboard-statistics-status');
    if (status) {
        const idioma = estatisticas.filters.language === 'all' ? 'todos os idiomas' : DASHBOARD_LANGUAGE_LABELS[estatisticas.filters.language];
        const atividade = estatisticas.filters.activity === 'all' ? 'todas as atividades' : DASHBOARD_ACTIVITY_LABELS[estatisticas.filters.activity];
        status.textContent = `Exibindo os últimos ${estatisticas.filters.period} dias · ${idioma} · ${atividade}.`;
    }
    renderizarGraficosDashboard(estatisticas);
    return estatisticas;
}

function atualizarMetaDashboard(dados) {
    const hoje = typeof obterDataLocalDashboard === 'function' ? obterDataLocalDashboard() : '';
    const meta = dados.dailyGoalMinutes || 15;
    const possuiSegundos = dados.studySecondsByDate && Object.prototype.hasOwnProperty.call(dados.studySecondsByDate, hoje);
    const minutosHoje = possuiSegundos
        ? Math.max(0, Number(dados.studySecondsByDate[hoje]) || 0) / 60
        : Math.max(0, Number(dados.studyMinutesByDate && dados.studyMinutesByDate[hoje]) || 0);
    const minutosExibidos = Math.round(minutosHoje * 10) / 10;
    const percentual = Math.min(100, Math.round((minutosHoje / meta) * 100));
    const select = document.getElementById('dashboard-goal-select');
    const valor = document.getElementById('dashboard-goal-value');
    const percentualEl = document.getElementById('dashboard-goal-percent');
    const barra = document.getElementById('dashboard-goal-bar');
    const mensagem = document.getElementById('dashboard-goal-message');
    const cartao = document.querySelector('.dashboard-goal-card');
    if (select) select.value = String(meta);
    if (valor) valor.textContent = `${minutosExibidos} de ${meta} minutos`;
    if (percentualEl) percentualEl.textContent = `${percentual}%`;
    if (barra) {
        barra.style.setProperty('--dashboard-progress', `${percentual}%`);
        barra.setAttribute('aria-valuemin', '0');
        barra.setAttribute('aria-valuemax', String(meta));
        barra.setAttribute('aria-valuenow', String(Math.min(meta, minutosExibidos)));
        barra.setAttribute('aria-valuetext', `${minutosExibidos} de ${meta} minutos estudados hoje`);
    }
    if (mensagem) {
        mensagem.textContent = percentual >= 100
            ? 'Meta alcançada. Excelente trabalho hoje!'
            : minutosHoje > 0
                ? `Continue estudando: faltam ${Math.max(0, Math.round((meta - minutosHoje) * 10) / 10)} minutos para a meta.`
                : 'A medição começa automaticamente ao iniciar uma atividade de estudo.';
    }
    if (cartao) cartao.classList.toggle('is-complete', percentual >= 100);
}

function renderizarIdiomasDashboard(resumo) {
    const container = document.getElementById('dashboard-languages-grid');
    if (!container) return;
    container.replaceChildren();
    resumo.idiomas.forEach(idioma => {
        const cartao = document.createElement('article');
        cartao.className = 'dashboard-language-card';
        cartao.dataset.language = idioma.id;

        const cabecalho = document.createElement('div');
        cabecalho.className = 'dashboard-language-heading';
        const icone = document.createElement('span');
        icone.className = 'dashboard-language-icon';
        icone.setAttribute('aria-hidden', 'true');
        icone.textContent = idioma.icon;
        const titulo = document.createElement('h3');
        titulo.textContent = idioma.label;
        cabecalho.append(icone, titulo);

        const resumoModulos = document.createElement('p');
        resumoModulos.className = 'dashboard-language-summary';
        resumoModulos.textContent = `${idioma.concluidos} de ${idioma.totalModulos} módulos principais concluídos`;

        const linhaPercentual = document.createElement('div');
        linhaPercentual.className = 'dashboard-language-percent';
        const rotuloPercentual = document.createElement('span');
        rotuloPercentual.textContent = 'Progresso';
        const valorPercentual = document.createElement('strong');
        valorPercentual.textContent = `${idioma.percentual}%`;
        linhaPercentual.append(rotuloPercentual, valorPercentual);

        const trilho = document.createElement('div');
        trilho.className = 'dashboard-progress-track';
        const barra = document.createElement('span');
        barra.className = 'dashboard-progress-fill';
        barra.style.setProperty('--dashboard-progress', `${idioma.percentual}%`);
        barra.setAttribute('role', 'progressbar');
        barra.setAttribute('aria-label', `Progresso em ${idioma.label}`);
        barra.setAttribute('aria-valuemin', '0');
        barra.setAttribute('aria-valuemax', '100');
        barra.setAttribute('aria-valuenow', String(idioma.percentual));
        barra.setAttribute('aria-valuetext', `${idioma.concluidos} de ${idioma.totalModulos} módulos concluídos`);
        trilho.appendChild(barra);

        const extras = document.createElement('p');
        extras.className = 'dashboard-language-extra';
        extras.textContent = `${idioma.extrasConcluidos} ${idioma.extraLabel}`;

        const acoes = document.createElement('div');
        acoes.className = 'dashboard-language-actions';
        const abrirIdioma = document.createElement('a');
        abrirIdioma.className = 'dashboard-secondary-button';
        abrirIdioma.href = idioma.hubPage;
        abrirIdioma.textContent = `Explorar ${idioma.label}`;
        const continuar = document.createElement('a');
        continuar.className = 'dashboard-primary-button';
        continuar.href = idioma.coursePage;
        continuar.textContent = idioma.concluidos > 0 ? 'Continuar curso' : 'Iniciar curso';
        acoes.append(abrirIdioma, continuar);

        cartao.append(cabecalho, resumoModulos, linhaPercentual, trilho, extras, acoes);
        container.appendChild(cartao);
    });
}

function atualizarResumoGeralDashboard(resumo) {
    const valores = {
        'dashboard-stat-xp': resumo.xp,
        'dashboard-stat-modules': resumo.concluidos,
        'dashboard-stat-progress': `${resumo.percentual}%`,
        'dashboard-stat-languages': resumo.idiomasDisponiveis
    };
    Object.entries(valores).forEach(([id, valor]) => {
        const elemento = document.getElementById(id);
        if (elemento) elemento.textContent = String(valor);
    });
    const barra = document.getElementById('dashboard-course-progress');
    if (barra) {
        barra.style.setProperty('--dashboard-progress', `${resumo.percentual}%`);
        barra.setAttribute('aria-valuenow', String(resumo.percentual));
        barra.setAttribute('aria-valuetext', `${resumo.concluidos} de ${resumo.totalModulos} módulos concluídos`);
    }
    renderizarIdiomasDashboard(resumo);
}

function atualizarSRSDashboard(resumo) {
    const contador = document.getElementById('dashboard-srs-count');
    const proxima = document.getElementById('dashboard-srs-next');
    const botao = document.getElementById('dashboard-review-button');
    const vazio = document.getElementById('dashboard-srs-empty');
    if (contador) contador.textContent = String(resumo.pendentes);
    if (proxima) proxima.textContent = formatarProximaRevisaoDashboard(resumo);
    if (botao) {
        botao.hidden = resumo.pendentes === 0;
        botao.disabled = resumo.pendentes === 0;
        botao.dataset.reviewType = resumo.tipoPrioritario || '';
        botao.dataset.reviewPage = resumo.paginaPrioritaria || '';
    }
    if (vazio) vazio.hidden = resumo.pendentes > 0;
}

function definirVisibilidadeDadosPessoaisDashboard(autenticado) {
    document.body.classList.toggle('dashboard-authenticated', autenticado);
}

let dashboardHistoryOffset = 10;

function renderizarHistoricoSRSDashboard(dados = dashboardDadosAtuais) {
    const lista = document.getElementById('dashboard-srs-history-list');
    const vazio = document.getElementById('dashboard-srs-history-empty');
    const status = document.getElementById('dashboard-srs-history-status');
    const carregarMais = document.getElementById('dashboard-history-load-more');
    if (!lista || !vazio) return;

    const filtroPeriodo = document.getElementById('dashboard-history-filter-period');
    const filtroIdioma = document.getElementById('dashboard-history-filter-language');
    const filtroResultado = document.getElementById('dashboard-history-filter-result');

    const periodo = filtroPeriodo ? filtroPeriodo.value : '30';
    const idioma = filtroIdioma ? filtroIdioma.value : 'all';
    const resultado = filtroResultado ? filtroResultado.value : 'all';

    const historico = Array.isArray(dados && dados.srsHistory) ? dados.srsHistory : [];
    const hoje = new Date();
    const limiteData = periodo !== 'all' ? new Date(hoje.setDate(hoje.getDate() - Number(periodo))) : null;

    const filtrados = historico.filter(item => {
        if (!item) return false;
        if (limiteData && new Date(item.timestamp || item.date) < limiteData) return false;
        if (idioma !== 'all' && item.language !== idioma) return false;
        if (resultado !== 'all' && item.result !== resultado) return false;
        return true;
    }).sort((a, b) => String(b.timestamp || '').localeCompare(String(a.timestamp || '')));

    lista.replaceChildren();

    if (status) {
        status.textContent = `Exibindo ${Math.min(dashboardHistoryOffset, filtrados.length)} de ${filtrados.length} revisão(ões) encontrada(s).`;
    }

    if (filtrados.length === 0) {
        vazio.hidden = false;
        if (carregarMais) carregarMais.hidden = true;
        return;
    }

    vazio.hidden = true;
    const exibidos = filtrados.slice(0, dashboardHistoryOffset);

    exibidos.forEach(item => {
        const li = document.createElement('li');
        li.className = 'dashboard-history-item';

        const colData = document.createElement('div');
        const dataStr = item.timestamp
            ? new Date(item.timestamp).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })
            : item.date;
        colData.innerHTML = `<strong>${dataStr}</strong>`;

        const colConteudo = document.createElement('div');
        colConteudo.textContent = item.contentLabel || 'Card SRS';

        const colDeck = document.createElement('div');
        const rotuloIdioma = DASHBOARD_LANGUAGE_LABELS[item.language] || item.language;
        colDeck.textContent = `${rotuloIdioma} (${item.deckType})`;

        const colTag = document.createElement('div');
        const tag = document.createElement('span');
        tag.className = `dashboard-history-tag ${item.result === 'correct' ? 'is-correct' : 'is-error'}`;
        tag.textContent = item.result === 'correct' ? 'Acerto' : 'Erro';
        colTag.appendChild(tag);

        const colIntervalo = document.createElement('div');
        const proxStr = item.nextDueDate
            ? new Date(item.nextDueDate).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })
            : '—';
        colIntervalo.textContent = `Próx: ${proxStr}`;

        li.append(colData, colConteudo, colDeck, colTag, colIntervalo);
        lista.appendChild(li);
    });

    if (carregarMais) {
        carregarMais.hidden = filtrados.length <= dashboardHistoryOffset;
    }
}

function calcularInsightsDashboard(dados = dashboardDadosAtuais, estatisticas = {}, streak = dashboardStreakAtual) {
    if (!dados) return [];
    const diasComDados = (Array.isArray(dados.sessions) && dados.sessions.length > 0)
        || Object.keys(dados.dailyAggregates || {}).length > 0
        || Object.keys(dados.studySecondsByDate || {}).length > 0;

    const seteDias = criarLinhasDiariasEstatisticasDashboard(dados, 7).linhas;
    const diasAtivos7 = seteDias.filter(l => l.activeSeconds > 0 || l.activities > 0).length;

    if (!diasComDados || (estatisticas.activeDays && estatisticas.activeDays < 3 && diasAtivos7 < 3)) {
        return [{
            id: 'insufficient',
            order: 0,
            priorityClass: 'priority-goal',
            icon: '🌱',
            title: 'Continuando sua jornada',
            text: 'Você precisa de pelo menos 3 dias ativos para liberar análises personalizadas. Continue estudando!',
            actionLabel: 'Explorar idiomas',
            actionHref: 'hub_idiomas.html'
        }];
    }

    const candidatos = [];
    const resumoSRS = obterResumoSRSDashboard();

    // 1. SRS urgente
    if (resumoSRS.pendentes > 0) {
        candidatos.push({
            id: 'srs_due',
            order: 1,
            priorityClass: 'priority-urgent',
            icon: '⏰',
            title: 'Revisões pendentes',
            text: `Você possui ${resumoSRS.pendentes} card(s) pendente(s). Mantenha o SRS em dia para reforçar o aprendizado.`,
            actionLabel: 'Revisar agora',
            actionPage: resumoSRS.paginaPrioritaria,
            actionType: resumoSRS.tipoPrioritario
        });
    }

    // 2. Meta diária
    const metaHoje = dados.dailyGoalMinutes || 15;
    const hojeLinha = seteDias.at(-1) || { activeSeconds: 0 };
    const minHoje = hojeLinha.activeSeconds / 60;
    if (minHoje >= metaHoje) {
        candidatos.push({
            id: 'goal_met',
            order: 2,
            priorityClass: 'priority-positive',
            icon: '🎯',
            title: 'Meta diária alcançada',
            text: `Parabéns! Você já concluiu sua meta de ${metaHoje} minutos hoje.`,
            actionLabel: 'Continuar curso',
            actionHref: 'html/ja-JP/curso.html'
        });
    } else if (minHoje > 0) {
        const faltam = Math.max(0, Math.round((metaHoje - minHoje) * 10) / 10);
        candidatos.push({
            id: 'goal_progress',
            order: 2,
            priorityClass: 'priority-goal',
            icon: '⏳',
            title: 'Meta em andamento',
            text: `Faltam apenas ${faltam} min para você cumprir a meta diária de ${metaHoje} minutos.`,
            actionLabel: 'Estudar agora',
            actionHref: 'html/ja-JP/curso.html'
        });
    }

    // 3. Dificuldade recorrente
    const srsHistorico = Array.isArray(dados.srsHistory) ? dados.srsHistory : [];
    const porDeck = {};
    srsHistorico.forEach(item => {
        if (!item || !item.deckType) return;
        porDeck[item.deckType] = porDeck[item.deckType] || { total: 0, errors: 0 };
        porDeck[item.deckType].total += 1;
        if (item.result === 'error') porDeck[item.deckType].errors += 1;
    });

    Object.entries(porDeck).forEach(([deck, info]) => {
        if (info.total >= 10 && (info.errors / info.total) >= 0.3) {
            candidatos.push({
                id: `diff_${deck}`,
                order: 3,
                priorityClass: 'priority-urgent',
                icon: '⚠️',
                title: 'Atenção recorrente',
                text: `Dificuldade identificada nas revisões de ${deck}: ${info.errors} erro(s) em ${info.total} tentativas.`,
                actionLabel: 'Revisar agora',
                actionPage: 'html/ja-JP/curso.html',
                actionType: deck
            });
        }
    });

    // 4. Tendência
    const quatorzeDias = criarLinhasDiariasEstatisticasDashboard(dados, 14).linhas;
    const min7Atual = seteDias.reduce((t, l) => t + (l.activeSeconds / 60), 0);
    const min7Anterior = quatorzeDias.slice(0, 7).reduce((t, l) => t + (l.activeSeconds / 60), 0);

    if (min7Anterior > 0) {
        let textoTendencia = 'estável';
        if (min7Atual >= min7Anterior * 1.15) textoTendencia = 'aumento no tempo de estudo';
        else if (min7Atual <= min7Anterior * 0.85) textoTendencia = 'redução no tempo de estudo';

        candidatos.push({
            id: 'trend',
            order: 4,
            priorityClass: 'priority-trend',
            icon: '📈',
            title: 'Tendência de estudos',
            text: `Nos últimos 7 dias você estudou ${formatarNumeroEstatisticaDashboard(min7Atual)} min vs ${formatarNumeroEstatisticaDashboard(min7Anterior)} min nos 7 dias anteriores (${textoTendencia}).`
        });
    }

    // 5. Consistência
    if (diasAtivos7 > 0) {
        candidatos.push({
            id: 'consistency',
            order: 5,
            priorityClass: 'priority-consistency',
            icon: '🔥',
            title: 'Ritmo semanal',
            text: `Você esteve ativo em ${diasAtivos7} dos últimos 7 dias. ${diasAtivos7 >= 5 ? 'Excelente consistência!' : 'Continue estudando regularmente.'}`
        });
    }

    // 6. Mensagem positiva / Maior sequência
    const maiorSeq = estatisticas.bestStreak || streak.count || 0;
    if (maiorSeq > 0) {
        candidatos.push({
            id: 'positive',
            order: 6,
            priorityClass: 'priority-positive',
            icon: '🌟',
            title: 'Sequência em destaque',
            text: `Sua maior sequência registrada é de ${maiorSeq} dia(s) consecutivos de estudo.`
        });
    }

    candidatos.sort((a, b) => a.order - b.order);
    return candidatos.slice(0, 3);
}

function renderizarInsightsDashboard(dados = dashboardDadosAtuais, estatisticas = {}, streak = dashboardStreakAtual) {
    const grid = document.getElementById('dashboard-insights-grid');
    const vazio = document.getElementById('dashboard-insights-empty');
    if (!grid || !vazio) return;

    grid.replaceChildren();
    const insights = calcularInsightsDashboard(dados, estatisticas, streak);

    if (insights.length === 0) {
        vazio.hidden = false;
        return;
    }

    vazio.hidden = true;
    insights.forEach(item => {
        const card = document.createElement('article');
        card.className = `dashboard-insight-card ${item.priorityClass || ''}`;

        const header = document.createElement('div');
        header.className = 'dashboard-insight-header';

        const icon = document.createElement('span');
        icon.className = 'dashboard-insight-icon';
        icon.setAttribute('aria-hidden', 'true');
        icon.textContent = item.icon || '💡';

        const title = document.createElement('h3');
        title.className = 'dashboard-insight-title';
        title.textContent = item.title;

        header.append(icon, title);

        const text = document.createElement('p');
        text.className = 'dashboard-insight-text';
        text.textContent = item.text;

        card.append(header, text);

        if (item.actionLabel) {
            let actionBtn;
            if (item.actionHref) {
                actionBtn = document.createElement('a');
                actionBtn.className = 'dashboard-primary-button dashboard-insight-action';
                actionBtn.href = item.actionHref;
                actionBtn.textContent = item.actionLabel;
            } else if (item.actionType && item.actionPage) {
                actionBtn = document.createElement('button');
                actionBtn.type = 'button';
                actionBtn.className = 'dashboard-primary-button dashboard-insight-action';
                actionBtn.textContent = item.actionLabel;
                actionBtn.dataset.reviewType = item.actionType;
                actionBtn.dataset.reviewPage = item.actionPage;
                actionBtn.addEventListener('click', iniciarRevisaoPeloDashboard);
            }
            if (actionBtn) card.appendChild(actionBtn);
        }

        grid.appendChild(card);
    });
}

function renderizarMeuProgresso(user = obterUsuarioDashboard(), registrarAcesso = false) {
    const carregando = document.getElementById('dashboard-loading');
    const apresentacao = document.getElementById('dashboard-signed-out');
    const conteudo = document.getElementById('dashboard-signed-in');
    if (carregando) carregando.hidden = true;

    if (!user) {
        definirVisibilidadeDadosPessoaisDashboard(false);
        if (apresentacao) apresentacao.hidden = false;
        if (conteudo) conteudo.hidden = true;
        return { authenticated: false };
    }

    definirVisibilidadeDadosPessoaisDashboard(true);
    if (apresentacao) apresentacao.hidden = true;
    if (conteudo) conteudo.hidden = false;
    const dados = typeof carregarDadosDashboard === 'function' ? carregarDadosDashboard(user.uid) : {
        dailyGoalMinutes: 15, activityByDate: {}, studyMinutesByDate: {}, sessions: []
    };
    const resumo = obterResumoGeralDashboard();
    const resumoSRS = obterResumoSRSDashboard();
    const streak = lerJSONDashboard('ja_streak_data', {});
    dashboardDadosAtuais = dados;
    dashboardStreakAtual = streak;
    const nome = obterNomeDashboard(user);
    const saudacao = document.getElementById('dashboard-greeting');
    const sequencia = document.getElementById('dashboard-streak-value');
    const mensagem = document.getElementById('dashboard-progress-message');
    if (saudacao) saudacao.textContent = `Olá, ${nome}!`;
    if (sequencia) sequencia.textContent = `${Math.max(0, parseInt(streak.count, 10) || 0)} dia(s)`;
    if (mensagem) {
        mensagem.textContent = resumo.concluidos > 0
            ? `Você já concluiu ${resumo.concluidos} módulo(s) em ${Math.max(1, resumo.idiomasAtivos)} idioma(s). Continue no seu ritmo.`
            : 'Escolha um idioma e inicie sua primeira atividade.';
    }

    atualizarMetaDashboard(dados);
    atualizarSRSDashboard(resumoSRS);
    atualizarResumoGeralDashboard(resumo);
    atualizarOpcoesAtividadeDashboard(dados);
    const estatisticas = renderizarEstatisticasDashboard(dados, streak);
    renderizarCalendarioDashboard(dados, dashboardMesCalendarioAtual, new Date());
    renderizarHistoricoSRSDashboard(dados);
    renderizarInsightsDashboard(dados, estatisticas, streak);

    const temAtividade = Object.values(dados.activityByDate || {}).some(valor => Number(valor) > 0)
        || Object.values(dados.studySecondsByDate || {}).some(valor => Number(valor) > 0)
        || (Array.isArray(dados.sessions) && dados.sessions.length > 0);
    const primeiroAcesso = resumo.xp === 0 && resumo.concluidos === 0 && resumo.modulosExtras === 0 && resumoSRS.totalCards === 0 && !temAtividade;
    const boasVindas = document.getElementById('dashboard-first-access');
    const srsCard = document.getElementById('dashboard-srs-card');
    const weeklyCard = document.getElementById('dashboard-weekly-card');
    const summaryCard = document.getElementById('dashboard-summary-card');
    if (boasVindas) boasVindas.hidden = !primeiroAcesso;
    if (srsCard) srsCard.hidden = primeiroAcesso;
    if (weeklyCard) weeklyCard.hidden = false;
    if (summaryCard) summaryCard.hidden = primeiroAcesso;
    if (registrarAcesso && typeof registrarPrimeiroAcessoDashboard === 'function') registrarPrimeiroAcessoDashboard(user.uid);
    return { authenticated: true, firstAccess: primeiroAcesso, resumo, resumoSRS, dados };
}

function iniciarRevisaoPeloDashboard(event) {
    const botao = event && event.currentTarget ? event.currentTarget : document.getElementById('dashboard-review-button');
    if (!botao || !botao.dataset.reviewType || !botao.dataset.reviewPage) return;
    const destino = new URL(botao.dataset.reviewPage, window.location.href);
    destino.searchParams.set('iniciar_srs', botao.dataset.reviewType);
    window.location.href = destino.href;
}

function inicializarMeuProgresso() {
    if (typeof migrarDecksSRSMultidioma === 'function') migrarDecksSRSMultidioma();
    const select = document.getElementById('dashboard-goal-select');
    if (select && select.dataset.dashboardReady !== 'true') {
        select.dataset.dashboardReady = 'true';
        select.addEventListener('change', () => {
            const user = obterUsuarioDashboard();
            if (!user || typeof definirMetaDiariaDashboard !== 'function') return;
            definirMetaDiariaDashboard(select.value, user.uid);
            renderizarMeuProgresso(user);
        });
    }
    const revisar = document.getElementById('dashboard-review-button');
    if (revisar && revisar.dataset.dashboardReady !== 'true') {
        revisar.dataset.dashboardReady = 'true';
        revisar.addEventListener('click', iniciarRevisaoPeloDashboard);
    }
    ['dashboard-filter-period', 'dashboard-filter-language', 'dashboard-filter-activity'].forEach(id => {
        const filtro = document.getElementById(id);
        if (!filtro || filtro.dataset.dashboardReady === 'true') return;
        filtro.dataset.dashboardReady = 'true';
        filtro.addEventListener('change', () => renderizarEstatisticasDashboard());
    });
    ['dashboard-evolution-metric', 'dashboard-distribution-dimension'].forEach(id => {
        const controle = document.getElementById(id);
        if (!controle || controle.dataset.dashboardReady === 'true') return;
        controle.dataset.dashboardReady = 'true';
        controle.addEventListener('change', () => {
            if (!dashboardDadosAtuais) return;
            const estatisticas = calcularEstatisticasDashboard(dashboardDadosAtuais, obterFiltrosEstatisticasDashboard(), new Date(), dashboardStreakAtual || {});
            renderizarGraficosDashboard(estatisticas);
        });
    });
    ['dashboard-history-filter-period', 'dashboard-history-filter-language', 'dashboard-history-filter-result'].forEach(id => {
        const filtro = document.getElementById(id);
        if (!filtro || filtro.dataset.dashboardReady === 'true') return;
        filtro.dataset.dashboardReady = 'true';
        filtro.addEventListener('change', () => renderizarHistoricoSRSDashboard());
    });
    const carregarMais = document.getElementById('dashboard-history-load-more');
    if (carregarMais && carregarMais.dataset.dashboardReady !== 'true') {
        carregarMais.dataset.dashboardReady = 'true';
        carregarMais.addEventListener('click', () => {
            dashboardHistoryOffset += 10;
            renderizarHistoricoSRSDashboard();
        });
    }
    const calendarioAnterior = document.getElementById('dashboard-calendar-previous');
    if (calendarioAnterior && calendarioAnterior.dataset.dashboardReady !== 'true') {
        calendarioAnterior.dataset.dashboardReady = 'true';
        calendarioAnterior.addEventListener('click', () => moverMesCalendarioDashboard(-1));
    }
    const calendarioProximo = document.getElementById('dashboard-calendar-next');
    if (calendarioProximo && calendarioProximo.dataset.dashboardReady !== 'true') {
        calendarioProximo.dataset.dashboardReady = 'true';
        calendarioProximo.addEventListener('click', () => moverMesCalendarioDashboard(1));
    }
    const gradeCalendario = document.getElementById('dashboard-calendar-grid');
    if (gradeCalendario && gradeCalendario.dataset.dashboardReady !== 'true') {
        gradeCalendario.dataset.dashboardReady = 'true';
        gradeCalendario.addEventListener('keydown', navegarTecladoCalendarioDashboard);
    }
    const user = obterUsuarioDashboard();
    if (!user) renderizarMeuProgresso(null);
}

if (typeof window !== 'undefined') {
    window.obterNomeDashboard = obterNomeDashboard;
    window.obterResumoIdiomaDashboard = obterResumoIdiomaDashboard;
    window.obterResumoGeralDashboard = obterResumoGeralDashboard;
    window.obterResumoSRSDashboard = obterResumoSRSDashboard;
    window.criarSerieSemanalDashboard = criarSerieSemanalDashboard;
    window.criarLinhasDiariasEstatisticasDashboard = criarLinhasDiariasEstatisticasDashboard;
    window.calcularEstatisticasDashboard = calcularEstatisticasDashboard;
    window.criarDadosGraficoEvolucaoDashboard = criarDadosGraficoEvolucaoDashboard;
    window.criarDadosGraficoDistribuicaoDashboard = criarDadosGraficoDistribuicaoDashboard;
    window.criarResumoDiaCalendarioDashboard = criarResumoDiaCalendarioDashboard;
    window.criarDadosCalendarioDashboard = criarDadosCalendarioDashboard;
    window.renderizarGraficoEvolucaoDashboard = renderizarGraficoEvolucaoDashboard;
    window.renderizarGraficoDistribuicaoDashboard = renderizarGraficoDistribuicaoDashboard;
    window.renderizarGraficosDashboard = renderizarGraficosDashboard;
    window.renderizarCalendarioDashboard = renderizarCalendarioDashboard;
    window.moverMesCalendarioDashboard = moverMesCalendarioDashboard;
    window.renderizarEstatisticasDashboard = renderizarEstatisticasDashboard;
    window.renderizarHistoricoSRSDashboard = renderizarHistoricoSRSDashboard;
    window.calcularInsightsDashboard = calcularInsightsDashboard;
    window.renderizarInsightsDashboard = renderizarInsightsDashboard;
    window.renderizarMeuProgresso = renderizarMeuProgresso;
    window.inicializarMeuProgresso = inicializarMeuProgresso;
    if (typeof window.addEventListener === 'function') {
        window.addEventListener('ja:auth-state-changed', event => {
            renderizarMeuProgresso(event.detail ? event.detail.user : null, true);
        });
        window.addEventListener('DOMContentLoaded', inicializarMeuProgresso);
    }
}
