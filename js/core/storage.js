// ======================================
// MÓDULO CORE - PERSISTÊNCIA, LOCALSTORAGE E CLOUD BACKUP
// ======================================

function carregarProgressoGlobal() {
    const salvo = localStorage.getItem('japao_academy_progress');
    let res = null;
    if (salvo) {
        try {
            res = JSON.parse(salvo);
        } catch (e) {
            console.error("Erro ao ler japao_academy_progress:", e);
            if (typeof mostrarErroRecuperavelUX === 'function') mostrarErroRecuperavelUX('load', 'Falha ao carregar o progresso local');
        }
    }
    if (!res) {
        const legacyA1Done = JSON.parse(localStorage.getItem('ja_modulos_concluidos')) || [];
        const legacyA2Done = JSON.parse(localStorage.getItem('ja_modulos_concluidos_a2')) || [];
        const legacyB1Done = JSON.parse(localStorage.getItem('ja_modulos_concluidos_b1')) || [];
        const legacyB2Done = JSON.parse(localStorage.getItem('ja_modulos_concluidos_b2')) || [];
        const legacyA1Desb = JSON.parse(localStorage.getItem('ja_progresso_a1')) || [0];
        const legacyA2Desb = JSON.parse(localStorage.getItem('ja_progresso_a2')) || [0];
        const legacyB1Desb = JSON.parse(localStorage.getItem('ja_progresso_b1')) || [0];
        const legacyB2Desb = JSON.parse(localStorage.getItem('ja_progresso_b2')) || [0];
        const cursos = typeof getTodosOsCursos === 'function' ? getTodosOsCursos() : {};
        const conc = [];
        const desb = ["a1_mod_01"];
        if (cursos.A1) {
            legacyA1Done.forEach(idx => { if (cursos.A1[idx]) conc.push(cursos.A1[idx].id); });
            legacyA1Desb.forEach(idx => { if (cursos.A1[idx]) desb.push(cursos.A1[idx].id); });
        }
        if (cursos.A2) {
            legacyA2Done.forEach(idx => { if (cursos.A2[idx]) conc.push(cursos.A2[idx].id); });
            legacyA2Desb.forEach(idx => { if (cursos.A2[idx]) desb.push(cursos.A2[idx].id); });
        }
        if (cursos.B1) {
            legacyB1Done.forEach(idx => { if (cursos.B1[idx]) conc.push(cursos.B1[idx].id); });
            legacyB1Desb.forEach(idx => { if (cursos.B1[idx]) desb.push(cursos.B1[idx].id); });
        }
        if (cursos.B2) {
            legacyB2Done.forEach(idx => { if (cursos.B2[idx]) conc.push(cursos.B2[idx].id); });
            legacyB2Desb.forEach(idx => { if (cursos.B2[idx]) desb.push(cursos.B2[idx].id); });
        }
        res = {
            modulosConcluidos: Array.from(new Set(conc)),
            modulosDesbloqueados: Array.from(new Set(desb)),
            xpTotal: 0,
            nivelAtual: "A1"
        };
    }
    if (!Array.isArray(res.modulosConcluidos)) res.modulosConcluidos = [];
    if (!Array.isArray(res.modulosDesbloqueados)) res.modulosDesbloqueados = ["a1_mod_01"];
    if (!Array.isArray(res.progress_hiragana)) res.progress_hiragana = [];
    if (!Array.isArray(res.progress_katakana)) res.progress_katakana = [];
    if (!Array.isArray(res.progress_kanji)) res.progress_kanji = [];
    if (!Array.isArray(res.progress_kanji_n4)) res.progress_kanji_n4 = [];
    if (!Array.isArray(res.progress_kanji_n3)) res.progress_kanji_n3 = [];
    if (!Array.isArray(res.progress_kanji_n2)) res.progress_kanji_n2 = [];
    if (!Array.isArray(res.progress_kanji_n1)) res.progress_kanji_n1 = [];
    if (!Array.isArray(res.progress_phrasal_verbs)) res.progress_phrasal_verbs = [];
    res.progress_curso_principal = res.modulosConcluidos;

    const kanjiSalvo = localStorage.getItem('japao_academy_kanji_progress');
    if (kanjiSalvo) {
        try {
            const kData = JSON.parse(kanjiSalvo);
            if (kData && Array.isArray(kData.progress_kanji)) {
                res.progress_kanji = Array.from(new Set([...res.progress_kanji, ...kData.progress_kanji]));
            }
        } catch (e) { }
    }
    localStorage.setItem('japao_academy_progress', JSON.stringify(res));
    return res;
}

function atualizarEstadoBackupNuvemUX(visivel) {
    if (typeof document === 'undefined') return;
    const container = document.getElementById('cloud-empty-state');
    if (!container) return;
    container.hidden = !visivel;
    if (!visivel) {
        if (typeof limparEstadoVazioUX === 'function') limparEstadoVazioUX(container);
        container.innerHTML = '';
        return;
    }
    if (typeof aplicarEstadoVazioUX === 'function') {
        aplicarEstadoVazioUX(container, {
            compact: true,
            icon: '☁️',
            title: 'Nenhum progresso salvo na nuvem',
            description: 'Esta conta ainda não possui um backup para restaurar.',
            recommendation: 'Salve os dados locais para criar seu primeiro backup.',
            actionLabel: 'Salvar agora',
            action: "document.getElementById('btn-cloud-save').click()"
        });
    }
}

function salvarProgressoGlobal() {
    if (typeof progressoGlobal !== 'undefined') {
        localStorage.setItem('japao_academy_progress', JSON.stringify(progressoGlobal));
        const cursos = typeof getTodosOsCursos === 'function' ? getTodosOsCursos() : {};
        const concluidos = new Set(progressoGlobal.modulosConcluidos || []);
        const desbloqueados = new Set(progressoGlobal.modulosDesbloqueados || []);
        const obterIndicesLegados = modulos => {
            const concIdx = [];
            const desbIdx = [];
            modulos.forEach((modulo, index) => {
                if (concluidos.has(modulo.id)) concIdx.push(index);
                if (desbloqueados.has(modulo.id) || index === 0) desbIdx.push(index);
            });
            return { concIdx, desbIdx };
        };
        if (cursos.A1) {
            const { concIdx, desbIdx } = obterIndicesLegados(cursos.A1);
            localStorage.setItem('ja_modulos_concluidos', JSON.stringify(concIdx));
            localStorage.setItem('ja_progresso_a1', JSON.stringify(desbIdx));
        }
        if (cursos.A2) {
            const { concIdx, desbIdx } = obterIndicesLegados(cursos.A2);
            localStorage.setItem('ja_modulos_concluidos_a2', JSON.stringify(concIdx));
            localStorage.setItem('ja_progresso_a2', JSON.stringify(desbIdx));
        }
        if (cursos.B1) {
            const { concIdx, desbIdx } = obterIndicesLegados(cursos.B1);
            localStorage.setItem('ja_modulos_concluidos_b1', JSON.stringify(concIdx));
            localStorage.setItem('ja_progresso_b1', JSON.stringify(desbIdx));
        }
        if (cursos.B2) {
            const { concIdx, desbIdx } = obterIndicesLegados(cursos.B2);
            localStorage.setItem('ja_modulos_concluidos_b2', JSON.stringify(concIdx));
            localStorage.setItem('ja_progresso_b2', JSON.stringify(desbIdx));
        }
        const concKanjiCount = (progressoGlobal.progress_kanji || []).length;
        localStorage.setItem('japao_academy_kanji_progress', JSON.stringify({
            progress_kanji: progressoGlobal.progress_kanji || [],
            xpTotal: concKanjiCount * 100,
            modulosConcluidosN5: progressoGlobal.progress_kanji || []
        }));
    }
    if (typeof atualizarIndicadorSincronizacao === 'function') atualizarIndicadorSincronizacao('local');
    salvarSilenciosamenteNaNuvem();
}

const DASHBOARD_DATA_VERSION = 4;
const DASHBOARD_DAILY_GOALS = [10, 15, 20, 30, 45, 60];
const DASHBOARD_SESSION_LIMIT = 200;
const DASHBOARD_SRS_HISTORY_LIMIT = 500;
const DASHBOARD_DAILY_RETENTION_DAYS = 366;
const DASHBOARD_SESSION_MIN_ACTIVE_SECONDS = 15;
const DASHBOARD_ACTIVITY_TYPES = new Set([
    'course', 'quiz', 'srs', 'kanji', 'kana', 'dictionary',
    'pronunciation', 'phrasal-verbs', 'minigame'
]);

function normalizarIdiomaDashboard(valor, contexto = {}) {
    const identidade = String(`${contexto.deckType || ''} ${contexto.cardId || ''} ${contexto.contentId || ''}`).toLowerCase();
    if (/\b(?:cirilico|cyrillic|russo_cirilico)\b|\bru_(?:a1|a2|b1|b2)_mod_/.test(identidade)) return 'ru-RU';
    if (/\b(?:falsos_amigos|falsos)\b|\bes_(?:a1|a2|b1|b2)_mod_/.test(identidade)) return 'es-ES';
    if (/\b(?:phrasal_verbs|phrasal)\b|\ben_(?:a1|a2|b1|b2)_mod_/.test(identidade)) return 'en-US';

    if (typeof normalizeLanguage === 'function') return normalizeLanguage(valor) || 'unknown';
    const aliases = {
        'ja': 'ja-JP', 'ja-jp': 'ja-JP', 'japanese': 'ja-JP', 'japones': 'ja-JP',
        'en': 'en-US', 'en-us': 'en-US', 'english': 'en-US', 'ingles': 'en-US',
        'es': 'es-ES', 'es-es': 'es-ES', 'spanish': 'es-ES', 'espanhol': 'es-ES',
        'ru': 'ru-RU', 'ru-ru': 'ru-RU', 'russian': 'ru-RU', 'russo': 'ru-RU'
    };
    const chave = String(valor || '').trim().toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/_/g, '-');
    return aliases[chave] || 'unknown';
}

function obterDataLocalDashboard(data = new Date()) {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
}

function obterUidDashboard(uid) {
    if (uid) return String(uid);
    const fb = typeof window !== 'undefined' ? window.jaFirebase : null;
    const user = fb && fb.auth ? fb.auth.currentUser : null;
    return user && user.uid ? String(user.uid) : '';
}

function obterChaveDashboard(uid) {
    const uidSeguro = encodeURIComponent(obterUidDashboard(uid));
    return uidSeguro ? `ja_dashboard_data_${uidSeguro}` : '';
}

function normalizarMapaNumericoDashboard(mapa) {
    const normalizado = {};
    if (!mapa || typeof mapa !== 'object' || Array.isArray(mapa)) return normalizado;
    Object.entries(mapa).forEach(([data, valor]) => {
        const numero = Number(valor);
        if (/^\d{4}-\d{2}-\d{2}$/.test(data) && Number.isFinite(numero) && numero >= 0) {
            normalizado[data] = numero;
        }
    });
    return normalizado;
}

function limitarMapaDiarioDashboard(mapa) {
    const normalizado = normalizarMapaNumericoDashboard(mapa);
    const datas = Object.keys(normalizado).sort().slice(-DASHBOARD_DAILY_RETENTION_DAYS);
    return Object.fromEntries(datas.map(data => [data, normalizado[data]]));
}

function normalizarMapaDistribuicaoDashboard(mapa) {
    const normalizado = {};
    if (!mapa || typeof mapa !== 'object' || Array.isArray(mapa)) return normalizado;
    Object.entries(mapa).forEach(([chave, valor]) => {
        const numero = Math.max(0, Math.round(Number(valor) || 0));
        const chaveSegura = String(chave || '').trim().slice(0, 40);
        if (chaveSegura && numero > 0) normalizado[chaveSegura] = numero;
    });
    return normalizado;
}

function normalizarDataHoraDashboard(valor) {
    if (!valor) return null;
    const data = new Date(valor);
    return Number.isFinite(data.getTime()) ? data.toISOString() : null;
}

function normalizarTentativaSRS(tentativa) {
    if (!tentativa || typeof tentativa !== 'object') return null;
    const id = String(tentativa.id || '').trim().slice(0, 120);
    if (!id) return null;
    const timestamp = normalizarDataHoraDashboard(tentativa.timestamp || tentativa.date);
    const date = /^\d{4}-\d{2}-\d{2}$/.test(tentativa.date || '')
        ? tentativa.date
        : (timestamp ? obterDataLocalDashboard(new Date(timestamp)) : null);
    const quality = Math.min(4, Math.max(1, parseInt(tentativa.quality, 10) || 1));
    const result = ['correct', 'error'].includes(tentativa.result)
        ? tentativa.result
        : (quality === 1 ? 'error' : 'correct');
    const labelOriginal = String(tentativa.contentLabel || '').replace(/<[^>]*>/g, '').trim().slice(0, 160);
    return {
        id,
        timestamp: timestamp || new Date().toISOString(),
        date: date || obterDataLocalDashboard(),
        userId: String(tentativa.userId || '').slice(0, 128),
        language: normalizarIdiomaDashboard(tentativa.language, tentativa),
        deckType: String(tentativa.deckType || 'a1').slice(0, 40),
        cardId: String(tentativa.cardId || '').slice(0, 160),
        contentLabel: labelOriginal || 'Card SRS',
        quality,
        result,
        previousInterval: Math.max(0, Math.round(Number(tentativa.previousInterval) || 0)),
        newInterval: Math.max(0, Math.round(Number(tentativa.newInterval) || 0)),
        nextDueDate: Math.max(0, Math.round(Number(tentativa.nextDueDate) || 0)),
        sessionId: String(tentativa.sessionId || '').slice(0, 120)
    };
}

function normalizarHistoricoSRSDashboard(historico) {
    if (!Array.isArray(historico)) return [];
    const porId = new Map();
    historico.forEach(item => {
        const normalizada = normalizarTentativaSRS(item);
        if (!normalizada) return;
        porId.set(normalizada.id, normalizada);
    });
    return Array.from(porId.values())
        .sort((a, b) => String(a.timestamp || '').localeCompare(String(b.timestamp || '')))
        .slice(-DASHBOARD_SRS_HISTORY_LIMIT);
}

function normalizarSessaoDashboard(sessao) {
    if (!sessao || typeof sessao !== 'object') return null;
    const id = String(sessao.id || '').trim().slice(0, 120);
    if (!id) return null;
    const inicio = normalizarDataHoraDashboard(sessao.startedAt || sessao.startTime);
    const fim = normalizarDataHoraDashboard(sessao.endedAt || sessao.endTime);
    const minutosLegados = Math.max(0, Number(sessao.durationMinutes) || 0);
    const segundos = Math.max(0, Math.round(Number(sessao.activeSeconds) || (minutosLegados * 60)));
    const tipoInformado = String(sessao.activityType || 'course').trim().slice(0, 40);
    const motivoInformado = String(sessao.endReason || 'closing');
    return {
        id,
        userId: String(sessao.userId || '').slice(0, 128),
        date: /^\d{4}-\d{2}-\d{2}$/.test(sessao.date || '') ? sessao.date : null,
        startedAt: inicio,
        endedAt: fim,
        activeSeconds: segundos,
        language: normalizarIdiomaDashboard(sessao.language, sessao),
        activityType: DASHBOARD_ACTIVITY_TYPES.has(tipoInformado) ? tipoInformado : 'course',
        contentId: String(sessao.contentId || '').slice(0, 160),
        interactionCount: Math.max(0, Math.round(Number(sessao.interactionCount) || 0)),
        activityCount: Math.max(0, Math.round(Number(sessao.activityCount) || 0)),
        xpEarned: Math.max(0, Math.round(Number(sessao.xpEarned) || 0)),
        endReason: ['completion', 'exit', 'inactivity', 'closing'].includes(motivoInformado) ? motivoInformado : 'closing'
    };
}

function normalizarSessoesDashboard(sessoes) {
    if (!Array.isArray(sessoes)) return [];
    const porId = new Map();
    sessoes.forEach(sessao => {
        const normalizada = normalizarSessaoDashboard(sessao);
        if (!normalizada) return;
        const existente = porId.get(normalizada.id);
        if (!existente || String(normalizada.endedAt || '') >= String(existente.endedAt || '')) {
            porId.set(normalizada.id, normalizada);
        }
    });
    return Array.from(porId.values())
        .sort((a, b) => String(a.endedAt || a.startedAt || '').localeCompare(String(b.endedAt || b.startedAt || '')))
        .slice(-DASHBOARD_SESSION_LIMIT);
}

function normalizarAgregadoDiarioDashboard(agregado) {
    const origem = agregado && typeof agregado === 'object' && !Array.isArray(agregado) ? agregado : {};
    const reviews = Math.max(0, Math.round(Number(origem.reviews) || 0));
    const correctCount = Math.max(0, Math.round(Number(origem.correctCount) || 0));
    const errorCount = Math.max(0, Math.round(Number(origem.errorCount) || 0));
    return {
        sessionIds: Array.from(new Set(Array.isArray(origem.sessionIds) ? origem.sessionIds.map(id => String(id).slice(0, 120)).filter(Boolean) : [])).slice(-DASHBOARD_SESSION_LIMIT),
        activeSeconds: Math.max(0, Math.round(Number(origem.activeSeconds) || 0)),
        activities: Math.max(0, Math.round(Number(origem.activities) || 0)),
        interactions: Math.max(0, Math.round(Number(origem.interactions) || 0)),
        xpEarned: Math.max(0, Math.round(Number(origem.xpEarned) || 0)),
        sessionCount: Math.max(0, Math.round(Number(origem.sessionCount) || 0)),
        reviews: Math.max(reviews, correctCount + errorCount),
        correctCount,
        errorCount,
        languages: normalizarMapaDistribuicaoDashboard(origem.languages),
        activityTypes: normalizarMapaDistribuicaoDashboard(origem.activityTypes),
        updatedAt: normalizarDataHoraDashboard(origem.updatedAt)
    };
}

function normalizarAgregadosDiariosDashboard(agregados) {
    if (!agregados || typeof agregados !== 'object' || Array.isArray(agregados)) return {};
    const datas = Object.keys(agregados).filter(data => /^\d{4}-\d{2}-\d{2}$/.test(data)).sort().slice(-DASHBOARD_DAILY_RETENTION_DAYS);
    return Object.fromEntries(datas.map(data => [data, normalizarAgregadoDiarioDashboard(agregados[data])]));
}

function criarTotaisAcumuladosDashboard(totais) {
    const origem = totais && typeof totais === 'object' && !Array.isArray(totais) ? totais : {};
    return {
        activeSeconds: Math.max(0, Math.round(Number(origem.activeSeconds) || 0)),
        sessions: Math.max(0, Math.round(Number(origem.sessions) || 0)),
        activities: Math.max(0, Math.round(Number(origem.activities) || 0)),
        interactions: Math.max(0, Math.round(Number(origem.interactions) || 0)),
        xpEarned: Math.max(0, Math.round(Number(origem.xpEarned) || 0))
    };
}

function criarDadosDashboardPadrao() {
    let atividadeLegada = {};
    try {
        atividadeLegada = normalizarMapaNumericoDashboard(JSON.parse(localStorage.getItem('ja_activity_history') || '{}'));
    } catch (e) { }
    return {
        version: DASHBOARD_DATA_VERSION,
        dailyGoalMinutes: 15,
        preferenceUpdatedAt: null,
        firstAccessDate: null,
        activityByDate: atividadeLegada,
        studySecondsByDate: {},
        studyMinutesByDate: {},
        dailyAggregates: {},
        lifetimeTotals: criarTotaisAcumuladosDashboard(),
        sessions: [],
        srsHistory: [],
        updatedAt: null
    };
}

function normalizarDadosDashboard(dados) {
    const padrao = criarDadosDashboardPadrao();
    if (!dados || typeof dados !== 'object' || Array.isArray(dados)) return padrao;
    const meta = parseInt(dados.dailyGoalMinutes, 10);
    const versaoOrigem = Math.max(1, parseInt(dados.version, 10) || 1);
    const minutosLegados = limitarMapaDiarioDashboard(dados.studyMinutesByDate);
    const segundosInformados = limitarMapaDiarioDashboard(dados.studySecondsByDate);
    const segundos = { ...segundosInformados };
    Object.entries(minutosLegados).forEach(([data, minutos]) => {
        if (!Object.prototype.hasOwnProperty.call(segundos, data)) segundos[data] = Math.max(0, Math.round(minutos * 60));
    });
    const atividade = limitarMapaDiarioDashboard(dados.activityByDate);
    const agregados = normalizarAgregadosDiariosDashboard(dados.dailyAggregates);
    const datas = new Set([...Object.keys(atividade), ...Object.keys(segundos), ...Object.keys(agregados)]);
    Array.from(datas).sort().slice(-DASHBOARD_DAILY_RETENTION_DAYS).forEach(data => {
        const agregado = agregados[data] || normalizarAgregadoDiarioDashboard();
        agregado.activeSeconds = Math.max(agregado.activeSeconds, Math.round(Number(segundos[data]) || 0));
        agregado.activities = Math.max(agregado.activities, Math.round(Number(atividade[data]) || 0));
        agregados[data] = agregado;
    });
    const sessoes = normalizarSessoesDashboard(dados.sessions);
    const sessoesPorData = sessoes.reduce((mapa, sessao) => {
        if (!sessao.date) return mapa;
        if (!mapa[sessao.date]) mapa[sessao.date] = [];
        mapa[sessao.date].push(sessao);
        return mapa;
    }, {});
    Object.entries(sessoesPorData).forEach(([data, sessoesDoDia]) => {
        const agregado = agregados[data];
        if (!agregado || sessoesDoDia.some(sessao => sessao.language === 'unknown')) return;
        const idsAgregados = new Set(agregado.sessionIds || []);
        const coberturaCompleta = agregado.sessionCount === sessoesDoDia.length
            && sessoesDoDia.every(sessao => idsAgregados.has(sessao.id));
        if (!coberturaCompleta) return;
        agregado.languages = sessoesDoDia.reduce((mapa, sessao) => {
            mapa[sessao.language] = (mapa[sessao.language] || 0) + sessao.activeSeconds;
            return mapa;
        }, {});
    });
    const srsHistorico = normalizarHistoricoSRSDashboard(dados.srsHistory);
    const totais = criarTotaisAcumuladosDashboard(dados.lifetimeTotals);
    const somaAgregados = Object.values(agregados).reduce((acumulado, agregado) => ({
        activeSeconds: acumulado.activeSeconds + agregado.activeSeconds,
        sessions: acumulado.sessions + agregado.sessionCount,
        activities: acumulado.activities + agregado.activities,
        interactions: acumulado.interactions + agregado.interactions,
        xpEarned: acumulado.xpEarned + agregado.xpEarned
    }), criarTotaisAcumuladosDashboard());
    Object.keys(totais).forEach(chave => { totais[chave] = Math.max(totais[chave], somaAgregados[chave]); });
    const normalizados = {
        version: DASHBOARD_DATA_VERSION,
        dailyGoalMinutes: DASHBOARD_DAILY_GOALS.includes(meta) ? meta : 15,
        preferenceUpdatedAt: normalizarDataHoraDashboard(dados.preferenceUpdatedAt),
        firstAccessDate: /^\d{4}-\d{2}-\d{2}$/.test(dados.firstAccessDate || '') ? dados.firstAccessDate : null,
        activityByDate: atividade,
        studySecondsByDate: segundos,
        studyMinutesByDate: Object.fromEntries(Object.entries(segundos).map(([data, valor]) => [data, valor / 60])),
        dailyAggregates: agregados,
        lifetimeTotals: totais,
        sessions: sessoes,
        srsHistory: srsHistorico,
        updatedAt: normalizarDataHoraDashboard(dados.updatedAt)
    };
    if (versaoOrigem < 3) normalizados.updatedAt = normalizados.updatedAt || new Date().toISOString();
    return normalizados;
}

function carregarDadosDashboard(uid) {
    const chave = obterChaveDashboard(uid);
    if (!chave) return criarDadosDashboardPadrao();
    try {
        const salvo = localStorage.getItem(chave);
        if (!salvo) return criarDadosDashboardPadrao();
        const dadosOriginais = JSON.parse(salvo);
        const versaoOrigem = Math.max(1, parseInt(dadosOriginais && dadosOriginais.version, 10) || 1);
        const normalizados = normalizarDadosDashboard(dadosOriginais);
        if (versaoOrigem < DASHBOARD_DATA_VERSION) {
            const uidSeguro = encodeURIComponent(obterUidDashboard(uid));
            const chaveBackup = `ja_dashboard_multilang_backup_${uidSeguro}`;
            if (!localStorage.getItem(chaveBackup)) localStorage.setItem(chaveBackup, salvo);
            localStorage.setItem(chave, JSON.stringify(normalizados));
        }
        return normalizados;
    } catch (e) {
        console.warn('Dados locais do dashboard estavam corrompidos e foram normalizados.', e);
        return criarDadosDashboardPadrao();
    }
}

function salvarDadosDashboard(dados, uid, sincronizar = true) {
    const chave = obterChaveDashboard(uid);
    if (!chave) return false;
    const normalizados = normalizarDadosDashboard(dados);
    localStorage.setItem(chave, JSON.stringify(normalizados));
    if (sincronizar && typeof salvarSilenciosamenteNaNuvem === 'function') salvarSilenciosamenteNaNuvem();
    return normalizados;
}

function adicionarSessaoAoAgregadoDashboard(dados, sessao) {
    const data = sessao.date || obterDataLocalDashboard(new Date(sessao.endedAt || sessao.startedAt || Date.now()));
    const agregado = normalizarAgregadoDiarioDashboard(dados.dailyAggregates[data]);
    if (agregado.sessionIds.includes(sessao.id)) return false;
    agregado.sessionIds.push(sessao.id);
    agregado.sessionIds = agregado.sessionIds.slice(-DASHBOARD_SESSION_LIMIT);
    agregado.activeSeconds += sessao.activeSeconds;
    agregado.activities += sessao.activityCount;
    agregado.interactions += sessao.interactionCount;
    agregado.xpEarned += sessao.xpEarned;
    agregado.sessionCount += 1;
    agregado.languages[sessao.language] = (agregado.languages[sessao.language] || 0) + sessao.activeSeconds;
    agregado.activityTypes[sessao.activityType] = (agregado.activityTypes[sessao.activityType] || 0) + sessao.activeSeconds;
    agregado.updatedAt = sessao.endedAt || new Date().toISOString();
    dados.dailyAggregates[data] = agregado;
    dados.studySecondsByDate[data] = agregado.activeSeconds;
    dados.studyMinutesByDate[data] = agregado.activeSeconds / 60;
    dados.lifetimeTotals.activeSeconds += sessao.activeSeconds;
    dados.lifetimeTotals.sessions += 1;
    dados.lifetimeTotals.activities += sessao.activityCount;
    dados.lifetimeTotals.interactions += sessao.interactionCount;
    dados.lifetimeTotals.xpEarned += sessao.xpEarned;
    return true;
}

function registrarSessaoDashboard(sessao, uid, sincronizar = true) {
    const uidSeguro = obterUidDashboard(uid);
    if (!uidSeguro) return false;
    const normalizada = normalizarSessaoDashboard({ ...sessao, userId: uidSeguro });
    if (!normalizada || normalizada.activeSeconds < DASHBOARD_SESSION_MIN_ACTIVE_SECONDS || normalizada.interactionCount < 1) return false;
    const dados = carregarDadosDashboard(uidSeguro);
    if (dados.sessions.some(item => item.id === normalizada.id)) return dados;
    dados.sessions = normalizarSessoesDashboard([...dados.sessions, normalizada]);
    if (!adicionarSessaoAoAgregadoDashboard(dados, normalizada)) return dados;
    dados.updatedAt = normalizada.endedAt || new Date().toISOString();
    return salvarDadosDashboard(dados, uidSeguro, sincronizar);
}

function registrarTentativaSRS(tentativa, uid, sincronizar = true) {
    const uidSeguro = obterUidDashboard(uid);
    if (!uidSeguro) return false;
    const normalizada = normalizarTentativaSRS({ ...tentativa, userId: uidSeguro });
    if (!normalizada) return false;
    const dados = carregarDadosDashboard(uidSeguro);
    if (dados.srsHistory.some(item => item.id === normalizada.id)) return dados;
    dados.srsHistory = normalizarHistoricoSRSDashboard([...dados.srsHistory, normalizada]);
    const data = normalizada.date || obterDataLocalDashboard();
    const agregado = normalizarAgregadoDiarioDashboard(dados.dailyAggregates[data]);
    if (normalizada.result === 'correct') {
        agregado.correctCount += 1;
    } else {
        agregado.errorCount += 1;
    }
    agregado.reviews = Math.max(agregado.reviews, agregado.correctCount + agregado.errorCount);
    agregado.updatedAt = normalizada.timestamp || new Date().toISOString();
    dados.dailyAggregates[data] = agregado;
    dados.updatedAt = normalizada.timestamp || new Date().toISOString();
    return salvarDadosDashboard(dados, uidSeguro, sincronizar);
}

function mesclarDadosDashboard(local, remoto) {
    const dadosLocal = normalizarDadosDashboard(local);
    const dadosRemotos = normalizarDadosDashboard(remoto);
    const localTemDados = Boolean(dadosLocal.firstAccessDate || dadosLocal.sessions.length
        || Object.keys(dadosLocal.activityByDate).length || Object.keys(dadosLocal.studySecondsByDate).length);
    const remotoTemDados = Boolean(dadosRemotos.firstAccessDate || dadosRemotos.sessions.length
        || Object.keys(dadosRemotos.activityByDate).length || Object.keys(dadosRemotos.studySecondsByDate).length);
    const escolherPreferenciaRemota = String(dadosRemotos.preferenceUpdatedAt || '') > String(dadosLocal.preferenceUpdatedAt || '')
        || (!dadosLocal.preferenceUpdatedAt && !dadosRemotos.preferenceUpdatedAt && !localTemDados
            && (remotoTemDados || (dadosLocal.dailyGoalMinutes === 15 && dadosRemotos.dailyGoalMinutes !== 15)));
    const primeiroAcesso = [dadosLocal.firstAccessDate, dadosRemotos.firstAccessDate].filter(Boolean).sort()[0] || null;
    const sessoes = normalizarSessoesDashboard([...dadosLocal.sessions, ...dadosRemotos.sessions]);
    const sessoesPorId = new Map(sessoes.map(sessao => [sessao.id, sessao]));
    const somarSessoesConhecidas = ids => {
        const totais = { activeSeconds: 0, activities: 0, interactions: 0, xpEarned: 0, sessionCount: 0, languages: {}, activityTypes: {} };
        ids.forEach(id => {
            const sessao = sessoesPorId.get(id);
            if (!sessao) return;
            totais.activeSeconds += sessao.activeSeconds;
            totais.activities += sessao.activityCount;
            totais.interactions += sessao.interactionCount;
            totais.xpEarned += sessao.xpEarned;
            totais.sessionCount += 1;
            totais.languages[sessao.language] = (totais.languages[sessao.language] || 0) + sessao.activeSeconds;
            totais.activityTypes[sessao.activityType] = (totais.activityTypes[sessao.activityType] || 0) + sessao.activeSeconds;
        });
        return totais;
    };
    const datas = new Set([
        ...Object.keys(dadosLocal.dailyAggregates), ...Object.keys(dadosRemotos.dailyAggregates),
        ...Object.keys(dadosLocal.activityByDate), ...Object.keys(dadosRemotos.activityByDate),
        ...Object.keys(dadosLocal.studySecondsByDate), ...Object.keys(dadosRemotos.studySecondsByDate)
    ]);
    const mesclado = criarDadosDashboardPadrao();
    mesclado.dailyGoalMinutes = escolherPreferenciaRemota ? dadosRemotos.dailyGoalMinutes : dadosLocal.dailyGoalMinutes;
    mesclado.preferenceUpdatedAt = escolherPreferenciaRemota ? dadosRemotos.preferenceUpdatedAt : dadosLocal.preferenceUpdatedAt;
    mesclado.firstAccessDate = primeiroAcesso;
    Array.from(datas).sort().slice(-DASHBOARD_DAILY_RETENTION_DAYS).forEach(data => {
        const localDia = normalizarAgregadoDiarioDashboard(dadosLocal.dailyAggregates[data]);
        const remotoDia = normalizarAgregadoDiarioDashboard(dadosRemotos.dailyAggregates[data]);
        const idsUnidos = Array.from(new Set([...localDia.sessionIds, ...remotoDia.sessionIds]));
        const localConhecido = somarSessoesConhecidas(localDia.sessionIds);
        const remotoConhecido = somarSessoesConhecidas(remotoDia.sessionIds);
        const unidoConhecido = somarSessoesConhecidas(idsUnidos);
        const chavesIdioma = new Set([...Object.keys(localDia.languages), ...Object.keys(remotoDia.languages), ...Object.keys(unidoConhecido.languages)]);
        const chavesAtividade = new Set([...Object.keys(localDia.activityTypes), ...Object.keys(remotoDia.activityTypes), ...Object.keys(unidoConhecido.activityTypes)]);
        const base = normalizarAgregadoDiarioDashboard({
            sessionIds: idsUnidos,
            activeSeconds: unidoConhecido.activeSeconds + Math.max(0, localDia.activeSeconds - localConhecido.activeSeconds, remotoDia.activeSeconds - remotoConhecido.activeSeconds),
            activities: unidoConhecido.activities + Math.max(0, localDia.activities - localConhecido.activities, remotoDia.activities - remotoConhecido.activities),
            interactions: unidoConhecido.interactions + Math.max(0, localDia.interactions - localConhecido.interactions, remotoDia.interactions - remotoConhecido.interactions),
            xpEarned: unidoConhecido.xpEarned + Math.max(0, localDia.xpEarned - localConhecido.xpEarned, remotoDia.xpEarned - remotoConhecido.xpEarned),
            sessionCount: unidoConhecido.sessionCount + Math.max(0, localDia.sessionCount - localConhecido.sessionCount, remotoDia.sessionCount - remotoConhecido.sessionCount),
            reviews: Math.max(localDia.reviews, remotoDia.reviews),
            correctCount: Math.max(localDia.correctCount, remotoDia.correctCount),
            errorCount: Math.max(localDia.errorCount, remotoDia.errorCount),
            languages: Object.fromEntries(Array.from(chavesIdioma).map(chave => [
                chave,
                (unidoConhecido.languages[chave] || 0) + Math.max(0,
                    (localDia.languages[chave] || 0) - (localConhecido.languages[chave] || 0),
                    (remotoDia.languages[chave] || 0) - (remotoConhecido.languages[chave] || 0))
            ])),
            activityTypes: Object.fromEntries(Array.from(chavesAtividade).map(chave => [
                chave,
                (unidoConhecido.activityTypes[chave] || 0) + Math.max(0,
                    (localDia.activityTypes[chave] || 0) - (localConhecido.activityTypes[chave] || 0),
                    (remotoDia.activityTypes[chave] || 0) - (remotoConhecido.activityTypes[chave] || 0))
            ])),
            updatedAt: [localDia.updatedAt, remotoDia.updatedAt].filter(Boolean).sort().at(-1) || null
        });
        mesclado.dailyAggregates[data] = normalizarAgregadoDiarioDashboard(base);
        mesclado.activityByDate[data] = Math.max(Number(dadosLocal.activityByDate[data]) || 0, Number(dadosRemotos.activityByDate[data]) || 0);
        mesclado.studySecondsByDate[data] = Math.max(Number(dadosLocal.studySecondsByDate[data]) || 0, Number(dadosRemotos.studySecondsByDate[data]) || 0, base.activeSeconds);
    });
    mesclado.sessions = sessoes;
    mesclado.srsHistory = normalizarHistoricoSRSDashboard([...dadosLocal.srsHistory, ...dadosRemotos.srsHistory]);
    const totaisMinimos = criarTotaisAcumuladosDashboard({
        activeSeconds: Math.max(dadosLocal.lifetimeTotals.activeSeconds, dadosRemotos.lifetimeTotals.activeSeconds),
        sessions: Math.max(dadosLocal.lifetimeTotals.sessions, dadosRemotos.lifetimeTotals.sessions),
        activities: Math.max(dadosLocal.lifetimeTotals.activities, dadosRemotos.lifetimeTotals.activities),
        interactions: Math.max(dadosLocal.lifetimeTotals.interactions, dadosRemotos.lifetimeTotals.interactions),
        xpEarned: Math.max(dadosLocal.lifetimeTotals.xpEarned, dadosRemotos.lifetimeTotals.xpEarned)
    });
    mesclado.lifetimeTotals = criarTotaisAcumuladosDashboard();
    sessoes.forEach(sessao => adicionarSessaoAoAgregadoDashboard(mesclado, sessao));
    Object.keys(totaisMinimos).forEach(chave => {
        mesclado.lifetimeTotals[chave] = Math.max(mesclado.lifetimeTotals[chave], totaisMinimos[chave]);
    });
    mesclado.updatedAt = [dadosLocal.updatedAt, dadosRemotos.updatedAt].filter(Boolean).sort().at(-1) || null;
    return normalizarDadosDashboard(mesclado);
}

function definirMetaDiariaDashboard(minutos, uid) {
    const meta = parseInt(minutos, 10);
    if (!DASHBOARD_DAILY_GOALS.includes(meta)) return false;
    const dados = carregarDadosDashboard(uid);
    dados.dailyGoalMinutes = meta;
    dados.preferenceUpdatedAt = new Date().toISOString();
    return salvarDadosDashboard(dados, uid);
}

function registrarPrimeiroAcessoDashboard(uid) {
    const dados = carregarDadosDashboard(uid);
    if (!dados.firstAccessDate) {
        dados.firstAccessDate = obterDataLocalDashboard();
        return salvarDadosDashboard(dados, uid);
    }
    return dados;
}

function registrarAtividadeDashboard(data, incremento = 1, uid) {
    const chave = obterChaveDashboard(uid);
    if (!chave) return false;
    const dataLocal = /^\d{4}-\d{2}-\d{2}$/.test(data || '') ? data : obterDataLocalDashboard();
    const quantidade = Math.max(0, Number(incremento) || 0);
    if (quantidade === 0) return carregarDadosDashboard(uid);
    const dados = carregarDadosDashboard(uid);
    dados.activityByDate[dataLocal] = (Number(dados.activityByDate[dataLocal]) || 0) + quantidade;
    return salvarDadosDashboard(dados, uid);
}

function obterXPAtualParaBackup() {
    const xpLocal = parseInt(localStorage.getItem('ja_user_xp'), 10);
    if (Number.isFinite(xpLocal) && xpLocal >= 0) return xpLocal;

    try {
        const progressoLegado = JSON.parse(localStorage.getItem('ja_progresso_global') || '{}');
        const xpLegado = parseInt(progressoLegado.xp, 10);
        return Number.isFinite(xpLegado) && xpLegado >= 0 ? xpLegado : 0;
    } catch (e) {
        return 0;
    }
}

function criarBackupNuvem() {
    const uid = obterUidDashboard();
    const backup = {
        progressoGlobal: JSON.parse(localStorage.getItem('japao_academy_progress') || (typeof progressoGlobal !== 'undefined' ? JSON.stringify(progressoGlobal) : '{}')),
        xpTotal: obterXPAtualParaBackup(),
        userStats: JSON.parse(localStorage.getItem('ja_user_stats') || '{}'),
        streakData: JSON.parse(localStorage.getItem('ja_streak_data') || '{}'),
        achievements: JSON.parse(localStorage.getItem('ja_unlocked_achievements') || '[]'),
        favoritos: JSON.parse(localStorage.getItem('ja_favoritos_deck') || '[]'),
        cadernoErros: JSON.parse(localStorage.getItem('ja_caderno_erros') || '[]'),
        nomeUsuario: localStorage.getItem('ja_nome_usuario') || (typeof nomeUsuario !== 'undefined' ? nomeUsuario : ''),
        updatedAt: new Date().toISOString()
    };
    if (uid) backup.dashboardData = carregarDadosDashboard(uid);
    return backup;
}

function estimarXPMinimoDeBackupLegado(progresso) {
    if (!progresso || typeof progresso !== 'object') return 0;

    const concluidosPrincipais = Array.isArray(progresso.modulosConcluidos)
        ? new Set(progresso.modulosConcluidos).size
        : 0;
    let xpEstimado = concluidosPrincipais * 50;

    // Backups anteriores nao persistiam ja_user_xp. Estes valores reproduzem
    // a regra ja existente em course/tabs.js para recuperar o minimo verificavel.
    const cursosEspeciais = [
        { key: 'progress_hiragana', mode: 'hiragana', budget: 500, fallbackTotal: 8 },
        { key: 'progress_katakana', mode: 'katakana', budget: 500, fallbackTotal: 8 },
        { key: 'progress_kanji', mode: 'kanji', budget: 550 },
        { key: 'progress_kanji_n4', mode: 'kanji_n4', budget: 800 },
        { key: 'progress_kanji_n3', mode: 'kanji_n3', budget: 300 },
        { key: 'progress_kanji_n2', mode: 'kanji_n2', budget: 300 },
        { key: 'progress_kanji_n1', mode: 'kanji_n1', budget: 300 },
        { key: 'progress_phrasal_verbs', mode: 'phrasal_verbs', budget: 300 }
    ];

    cursosEspeciais.forEach(curso => {
        const concluidos = Array.isArray(progresso[curso.key])
            ? Array.from(new Set(progresso[curso.key].filter(Number.isInteger)))
            : [];
        if (concluidos.length === 0) return;

        const dadosCurso = typeof getCourseData === 'function' ? getCourseData(curso.mode) : null;
        const totalModulos = dadosCurso && dadosCurso.length ? dadosCurso.length : curso.fallbackTotal;
        if (!totalModulos) return;

        const concluidosValidos = concluidos.filter(indice => indice >= 0 && indice < totalModulos).length;
        const xpPorModulo = Math.max(1, Math.round(curso.budget / totalModulos));
        xpEstimado += concluidosValidos * xpPorModulo;
    });

    return xpEstimado;
}

function obterXPDoBackup(dadosNuvem) {
    if (dadosNuvem && Object.prototype.hasOwnProperty.call(dadosNuvem, 'xpTotal')) {
        const xpPersistido = parseInt(dadosNuvem.xpTotal, 10);
        return Number.isFinite(xpPersistido) && xpPersistido >= 0 ? xpPersistido : 0;
    }

    const progresso = dadosNuvem && dadosNuvem.progressoGlobal ? dadosNuvem.progressoGlobal : {};
    const estatisticas = dadosNuvem && dadosNuvem.userStats ? dadosNuvem.userStats : {};
    const candidatosLegados = [progresso.xpTotal, progresso.xp, estatisticas.xpTotal, estatisticas.xp]
        .map(valor => parseInt(valor, 10))
        .filter(valor => Number.isFinite(valor) && valor >= 0);
    candidatosLegados.push(estimarXPMinimoDeBackupLegado(progresso));
    return Math.max(0, ...candidatosLegados);
}

function mesclarListasProgresso(local = [], remoto = []) {
    const resultado = [];
    const vistos = new Set();
    [...(Array.isArray(remoto) ? remoto : []), ...(Array.isArray(local) ? local : [])].forEach(item => {
        let assinatura;
        try {
            assinatura = item && typeof item === 'object' ? JSON.stringify(item) : `${typeof item}:${String(item)}`;
        } catch (e) {
            assinatura = `${typeof item}:${String(item)}`;
        }
        if (vistos.has(assinatura)) return;
        vistos.add(assinatura);
        resultado.push(item);
    });
    return resultado;
}

function mesclarProgressoGlobal(local, remoto) {
    const progressoLocal = local && typeof local === 'object' && !Array.isArray(local) ? local : {};
    const progressoRemoto = remoto && typeof remoto === 'object' && !Array.isArray(remoto) ? remoto : {};
    const mesclado = { ...progressoRemoto, ...progressoLocal };
    const chaves = new Set([...Object.keys(progressoRemoto), ...Object.keys(progressoLocal)]);

    chaves.forEach(chave => {
        if (Array.isArray(progressoRemoto[chave]) || Array.isArray(progressoLocal[chave])) {
            mesclado[chave] = mesclarListasProgresso(progressoLocal[chave], progressoRemoto[chave]);
        }
    });

    mesclado.modulosConcluidos = mesclarListasProgresso(
        progressoLocal.modulosConcluidos,
        progressoRemoto.modulosConcluidos
    );
    mesclado.modulosDesbloqueados = mesclarListasProgresso(
        progressoLocal.modulosDesbloqueados,
        progressoRemoto.modulosDesbloqueados
    );

    const ordemNiveis = ['A1', 'A2', 'B1', 'B2'];
    const nivelLocal = String(progressoLocal.nivelAtual || '').toUpperCase();
    const nivelRemoto = String(progressoRemoto.nivelAtual || '').toUpperCase();
    const indiceLocal = ordemNiveis.indexOf(nivelLocal);
    const indiceRemoto = ordemNiveis.indexOf(nivelRemoto);
    mesclado.nivelAtual = ordemNiveis[Math.max(0, indiceLocal, indiceRemoto)];

    const xpLegadoLocal = Math.max(0, Number(progressoLocal.xpTotal) || 0, Number(progressoLocal.xp) || 0);
    const xpLegadoRemoto = Math.max(0, Number(progressoRemoto.xpTotal) || 0, Number(progressoRemoto.xp) || 0);
    if (xpLegadoLocal > 0 || xpLegadoRemoto > 0) mesclado.xpTotal = Math.max(xpLegadoLocal, xpLegadoRemoto);
    mesclado.progress_curso_principal = mesclado.modulosConcluidos;
    return mesclado;
}

function lerProgressoLocalParaMesclagem() {
    try {
        const salvo = JSON.parse(localStorage.getItem('japao_academy_progress') || '{}');
        return salvo && typeof salvo === 'object' && !Array.isArray(salvo) ? salvo : {};
    } catch (e) {
        return {};
    }
}

function aplicarDadosDoBackup(dadosNuvem, uid) {
    const progressoRemoto = dadosNuvem && dadosNuvem.progressoGlobal ? dadosNuvem.progressoGlobal : {};
    const progressoRemotoNormalizado = mesclarProgressoGlobal({}, progressoRemoto);
    const progressoMesclado = mesclarProgressoGlobal(lerProgressoLocalParaMesclagem(), progressoRemoto);
    localStorage.setItem('japao_academy_progress', JSON.stringify(progressoMesclado));
    if (typeof AppState !== 'undefined' && typeof AppState.setProgress === 'function') AppState.setProgress(progressoMesclado);

    const xpNuvem = obterXPDoBackup(dadosNuvem);
    const xpLocal = obterXPAtualParaBackup();
    const xpMesclado = Math.max(xpLocal, xpNuvem);
    if (typeof AppState !== 'undefined' && typeof AppState.setXP === 'function') AppState.setXP(xpMesclado);
    else localStorage.setItem('ja_user_xp', xpMesclado.toString());

    if (dadosNuvem.userStats) localStorage.setItem('ja_user_stats', JSON.stringify(dadosNuvem.userStats));
    if (dadosNuvem.streakData) localStorage.setItem('ja_streak_data', JSON.stringify(dadosNuvem.streakData));
    if (dadosNuvem.achievements) localStorage.setItem('ja_unlocked_achievements', JSON.stringify(dadosNuvem.achievements));
    if (dadosNuvem.favoritos) localStorage.setItem('ja_favoritos_deck', JSON.stringify(dadosNuvem.favoritos));
    if (dadosNuvem.cadernoErros) localStorage.setItem('ja_caderno_erros', JSON.stringify(dadosNuvem.cadernoErros));
    if (dadosNuvem.nomeUsuario) {
        localStorage.setItem('ja_nome_usuario', dadosNuvem.nomeUsuario);
        if (typeof nomeUsuario !== 'undefined') nomeUsuario = dadosNuvem.nomeUsuario;
    }
    if (dadosNuvem.dashboardData && obterChaveDashboard(uid)) {
        const dadosLocais = carregarDadosDashboard(uid);
        salvarDadosDashboard(mesclarDadosDashboard(dadosLocais, dadosNuvem.dashboardData), uid, false);
    }

    return {
        progressoAlterado: JSON.stringify(progressoMesclado) !== JSON.stringify(progressoRemotoNormalizado),
        xpAlterado: xpMesclado > xpNuvem
    };
}

async function salvarSilenciosamenteNaNuvem() {
    const fb = typeof window !== 'undefined' ? window.jaFirebase : null;
    const user = fb && fb.auth ? fb.auth.currentUser : null;
    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
        if (typeof atualizarIndicadorSincronizacao === 'function') atualizarIndicadorSincronizacao('offline');
        return false;
    }
    if (!user || !fb || !fb.db || !fb.doc || !fb.setDoc) {
        if (typeof atualizarIndicadorSincronizacao === 'function') atualizarIndicadorSincronizacao('local');
        return false;
    }
    try {
        if (typeof atualizarIndicadorSincronizacao === 'function') atualizarIndicadorSincronizacao('syncing');
        const backupObj = criarBackupNuvem();
        const docRef = fb.doc(fb.db, "users", user.uid, "progresso", "dados");
        await fb.setDoc(docRef, backupObj, { merge: true });
        if (typeof atualizarIndicadorSincronizacao === 'function') atualizarIndicadorSincronizacao('synced');
        return true;
    } catch (e) {
        if (typeof atualizarIndicadorSincronizacao === 'function') atualizarIndicadorSincronizacao('error');
        console.warn("⚠️ Erro ao preparar backup silencioso para o Firestore:", e);
        return false;
    }
}

let sincronizacaoFirestoreAtiva = null;

async function sincronizarProgressoComFirestore(user) {
    const fb = typeof window !== 'undefined' ? window.jaFirebase : null;
    if (!fb || !fb.db || !user) return false;
    if (sincronizacaoFirestoreAtiva && sincronizacaoFirestoreAtiva.uid === user.uid) {
        return sincronizacaoFirestoreAtiva.promise;
    }

    const executarSincronizacao = async () => {
        try {
            if (typeof atualizarIndicadorSincronizacao === 'function') atualizarIndicadorSincronizacao('syncing');
            const docRef = fb.doc(fb.db, "users", user.uid, "progresso", "dados");
            const docSnap = await fb.getDoc(docRef);
            if (docSnap.exists()) {
                const dadosNuvem = docSnap.data() || {};
                const resultadoMesclagem = aplicarDadosDoBackup(dadosNuvem, user.uid);
                if (typeof carregarProgressoGlobal === 'function') carregarProgressoGlobal();
                if (typeof atualizarUIProgresso === 'function') atualizarUIProgresso();
                if (typeof atualizarHeaderXP === 'function') atualizarHeaderXP();
                if (typeof atualizarHeaderStreak === 'function') atualizarHeaderStreak();
                if (resultadoMesclagem && (resultadoMesclagem.progressoAlterado || resultadoMesclagem.xpAlterado)) {
                    await salvarSilenciosamenteNaNuvem();
                }
                if (typeof atualizarIndicadorSincronizacao === 'function') atualizarIndicadorSincronizacao('synced');
                return true;
            }
            await salvarSilenciosamenteNaNuvem();
            return false;
        } catch (e) {
            if (typeof atualizarIndicadorSincronizacao === 'function') atualizarIndicadorSincronizacao('error');
            console.warn("⚠️ Erro ao sincronizar com o Firestore:", e);
            return false;
        }
    };

    const promise = executarSincronizacao();
    sincronizacaoFirestoreAtiva = { uid: user.uid, promise };
    try {
        return await promise;
    } finally {
        if (sincronizacaoFirestoreAtiva && sincronizacaoFirestoreAtiva.promise === promise) {
            sincronizacaoFirestoreAtiva = null;
        }
    }
}

function inicializarAuthObserverFirebase() {
    const fb = typeof window !== 'undefined' ? window.jaFirebase : null;
    if (!fb || !fb.auth || !fb.onAuthStateChanged) return;
    fb.onAuthStateChanged(fb.auth, async (user) => {
        if (typeof garantirElementosCabecalhoEModal === 'function') garantirElementosCabecalhoEModal();
        if (user) {
            await sincronizarProgressoComFirestore(user);
        } else {
            if (typeof atualizarIndicadorSincronizacao === 'function') {
                atualizarIndicadorSincronizacao((typeof navigator !== 'undefined' && navigator.onLine === false) ? 'offline' : 'local');
            }
            if (typeof atualizarUIProgresso === 'function') atualizarUIProgresso();
        }
        if (typeof garantirElementosCabecalhoEModal === 'function') garantirElementosCabecalhoEModal();
        if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof CustomEvent === 'function') {
            window.dispatchEvent(new CustomEvent('ja:auth-state-changed', { detail: { user: user || null } }));
        }
    });
}

function obterCaminhoMeuProgresso() {
    const pathname = (typeof window !== 'undefined' && window.location && window.location.pathname)
        ? window.location.pathname.replace(/\\/g, '/')
        : '';
    if (pathname.includes('/html/')) return '../../index.html';
    return 'index.html';
}

function irParaMeuProgresso() {
    if (typeof window === 'undefined' || !window.location) return false;
    const path = (window.location.pathname || '').replace(/\\/g, '/');
    if (/\/meu-progresso\.html$/i.test(path) || /\/index\.html$/i.test(path) || /\/$/i.test(path)) return false;
    window.location.href = obterCaminhoMeuProgresso();
    return true;
}

function escaparTextoAuth(valor) {
    if (typeof escapeHTML === 'function') return escapeHTML(String(valor || ''));
    return String(valor || '').replace(/[&<>'"]/g, caractere => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    })[caractere]);
}

async function fazerLoginEmailSenha(email, senha) {
    const fb = typeof window !== 'undefined' ? window.jaFirebase : null;
    if (!fb || !fb.auth || !fb.signInWithEmailAndPassword) return { success: false, error: 'Firebase não carregado.' };
    try {
        const userCred = await fb.signInWithEmailAndPassword(fb.auth, email, senha);
        await sincronizarProgressoComFirestore(userCred.user);
        const nomeSeguro = escaparTextoAuth(userCred.user.displayName || userCred.user.email || 'Estudante');
        if (typeof mostrarToast === 'function') mostrarToast(`🚀 <strong>Bem-vindo de volta!</strong> Olá, ${nomeSeguro}!`);
        if (typeof playBeep === 'function') playBeep('success');
        irParaMeuProgresso();
        return { success: true, user: userCred.user };
    } catch (err) {
        console.warn('Falha no login com e-mail:', err);
        if (typeof mostrarErroRecuperavelUX === 'function') mostrarErroRecuperavelUX('auth', 'Não foi possível entrar');
        else if (typeof mostrarToast === 'function') mostrarToast('⚠️ Não foi possível entrar. Confira seu e-mail e senha.');
        if (typeof playBeep === 'function') playBeep('error');
        return { success: false, error: err.message };
    }
}

async function fazerCadastroEmailSenha(email, senha, nome) {
    const fb = typeof window !== 'undefined' ? window.jaFirebase : null;
    if (!fb || !fb.auth || !fb.createUserWithEmailAndPassword) return { success: false, error: 'Firebase não carregado.' };
    try {
        const userCred = await fb.createUserWithEmailAndPassword(fb.auth, email, senha);
        if (nome && fb.updateProfile) {
            await fb.updateProfile(userCred.user, { displayName: nome });
        }
        if (nome) {
            localStorage.setItem('ja_nome_usuario', nome);
            if (typeof nomeUsuario !== 'undefined') nomeUsuario = nome;
        }
        await sincronizarProgressoComFirestore(userCred.user);
        const nomeSeguro = escaparTextoAuth(nome || 'Estudante');
        if (typeof mostrarToast === 'function') mostrarToast(`✨ <strong>Conta criada com sucesso!</strong> Seja bem-vindo(a), ${nomeSeguro}!`);
        if (typeof playBeep === 'function') playBeep('success');
        irParaMeuProgresso();
        return { success: true, user: userCred.user };
    } catch (err) {
        console.warn('Falha no cadastro com e-mail:', err);
        if (typeof mostrarErroRecuperavelUX === 'function') mostrarErroRecuperavelUX('register', 'Não foi possível criar a conta');
        else if (typeof mostrarToast === 'function') mostrarToast('⚠️ Não foi possível criar a conta. Confira os dados informados.');
        if (typeof playBeep === 'function') playBeep('error');
        return { success: false, error: err.message };
    }
}

async function fazerLoginGoogle() {
    const fb = typeof window !== 'undefined' ? window.jaFirebase : null;
    if (!fb || !fb.auth || !fb.GoogleAuthProvider || !fb.signInWithPopup) return { success: false, error: 'Firebase não carregado.' };
    try {
        const provider = new fb.GoogleAuthProvider();
        const userCred = await fb.signInWithPopup(fb.auth, provider);
        await sincronizarProgressoComFirestore(userCred.user);
        const nomeSeguro = escaparTextoAuth(userCred.user.displayName || 'Estudante');
        if (typeof mostrarToast === 'function') mostrarToast(`🚀 <strong>Autenticado com o Google!</strong> Olá, ${nomeSeguro}!`);
        if (typeof playBeep === 'function') playBeep('success');
        irParaMeuProgresso();
        return { success: true, user: userCred.user };
    } catch (err) {
        console.warn('Falha no login com Google:', err);
        if (typeof mostrarErroRecuperavelUX === 'function') mostrarErroRecuperavelUX('auth', 'Não foi possível entrar com o Google');
        else if (typeof mostrarToast === 'function') mostrarToast('⚠️ Não foi possível entrar com o Google. Tente novamente.');
        if (typeof playBeep === 'function') playBeep('error');
        return { success: false, error: err.message };
    }
}

async function fazerLogout() {
    const fb = typeof window !== 'undefined' ? window.jaFirebase : null;
    if (!fb || !fb.auth || !fb.signOut) return;
    try {
        await fb.signOut(fb.auth);
        if (typeof mostrarToast === 'function') mostrarToast(`👋 <strong>Sessão Encerrada.</strong> Você deslogou do Idiomas Academy.`);
        if (typeof playBeep === 'function') playBeep('click');
        if (typeof garantirElementosCabecalhoEModal === 'function') garantirElementosCabecalhoEModal();
        if (typeof atualizarUIProgresso === 'function') atualizarUIProgresso();
    } catch (err) {
        console.warn("⚠️ Erro ao deslogar:", err);
        if (typeof mostrarErroRecuperavelUX === 'function') mostrarErroRecuperavelUX('auth', 'Não foi possível encerrar a sessão');
    }
}

async function salvarProgressoNaNuvem() {
    const fb = typeof window !== 'undefined' ? window.jaFirebase : null;
    const user = fb && fb.auth ? fb.auth.currentUser : null;
    if (!user || !fb || !fb.db || !fb.doc || !fb.setDoc) {
        if (typeof mostrarToast === 'function') mostrarToast("⚠️ Você precisa estar logado para salvar seu progresso na nuvem.");
        if (typeof abrirModalAuth === 'function') abrirModalAuth('login');
        return false;
    }
    try {
        if (typeof atualizarIndicadorSincronizacao === 'function') atualizarIndicadorSincronizacao('syncing');
        const backupObj = criarBackupNuvem();
        const docRef = fb.doc(fb.db, "users", user.uid, "progresso", "dados");
        await fb.setDoc(docRef, backupObj, { merge: true });
        atualizarEstadoBackupNuvemUX(false);
        if (typeof mostrarToast === 'function') mostrarToast("☁️ Progresso e estatísticas salvos na nuvem com sucesso!");
        if (typeof playBeep === 'function') playBeep('success');
        if (typeof atualizarIndicadorSincronizacao === 'function') atualizarIndicadorSincronizacao('synced');
        return true;
    } catch (err) {
        if (typeof atualizarIndicadorSincronizacao === 'function') atualizarIndicadorSincronizacao('error');
        console.error("⚠️ Erro ao salvar progresso na nuvem:", err);
        if (typeof mostrarErroRecuperavelUX === 'function') mostrarErroRecuperavelUX('save', 'Falha ao salvar na nuvem');
        else if (typeof mostrarToast === 'function') mostrarToast('⚠️ Não foi possível salvar na nuvem. Tente novamente.');
        return false;
    }
}

async function carregarProgressoDaNuvem() {
    const fb = typeof window !== 'undefined' ? window.jaFirebase : null;
    const user = fb && fb.auth ? fb.auth.currentUser : null;
    if (!user || !fb || !fb.db || !fb.doc || !fb.getDoc) {
        if (typeof mostrarToast === 'function') mostrarToast("⚠️ Você precisa estar logado para restaurar seu progresso da nuvem.");
        if (typeof abrirModalAuth === 'function') abrirModalAuth('login');
        return false;
    }
    try {
        atualizarEstadoBackupNuvemUX(false);
        if (typeof atualizarIndicadorSincronizacao === 'function') atualizarIndicadorSincronizacao('syncing');
        const docRef = fb.doc(fb.db, "users", user.uid, "progresso", "dados");
        const docSnap = await fb.getDoc(docRef);
        if (docSnap.exists()) {
            atualizarEstadoBackupNuvemUX(false);
            const dadosNuvem = docSnap.data() || {};
            const resultadoMesclagem = aplicarDadosDoBackup(dadosNuvem, user.uid);
            if (typeof carregarProgressoGlobal === 'function') carregarProgressoGlobal();
            if (typeof atualizarUIProgresso === 'function') atualizarUIProgresso();
            if (typeof atualizarHeaderXP === 'function') atualizarHeaderXP();
            if (typeof atualizarHeaderStreak === 'function') atualizarHeaderStreak();
            if (typeof renderizarMuralConquistas === 'function') renderizarMuralConquistas();
            if (resultadoMesclagem && (resultadoMesclagem.progressoAlterado || resultadoMesclagem.xpAlterado)) {
                await salvarSilenciosamenteNaNuvem();
            }
            if (typeof mostrarToast === 'function') mostrarToast("📥 Progresso restaurado da nuvem com sucesso!");
            if (typeof playBeep === 'function') playBeep('success');
        } else {
            atualizarEstadoBackupNuvemUX(true);
            if (typeof mostrarToast === 'function') mostrarToast("ℹ️ Nenhum backup encontrado. Você pode criar um usando “Salvar agora”.");
            if (typeof atualizarIndicadorSincronizacao === 'function') atualizarIndicadorSincronizacao('synced');
            return false;
        }
        if (typeof atualizarIndicadorSincronizacao === 'function') atualizarIndicadorSincronizacao('synced');
        return true;
    } catch (err) {
        if (typeof atualizarIndicadorSincronizacao === 'function') atualizarIndicadorSincronizacao('error');
        console.error("⚠️ Erro ao restaurar progresso da nuvem:", err);
        if (typeof mostrarErroRecuperavelUX === 'function') mostrarErroRecuperavelUX('load', 'Falha ao restaurar da nuvem');
        else if (typeof mostrarToast === 'function') mostrarToast('⚠️ Não foi possível restaurar o backup. Tente novamente.');
        return false;
    }
}

function getOpcoesLeitura() {
    const kanji = localStorage.getItem('ja_opt_kanji');
    const kana = localStorage.getItem('ja_opt_kana');
    const furigana = localStorage.getItem('ja_opt_furigana');
    const romaji = localStorage.getItem('ja_opt_romaji');
    return {
        kanji: kanji !== null ? kanji === 'true' : true,
        kana: kana !== null ? kana === 'true' : true,
        furigana: furigana !== null ? furigana === 'true' : true,
        romaji: romaji !== null ? romaji === 'true' : false
    };
}

function salvarOpcoesLeitura() {
    const chkKanji = document.getElementById('chk-opt-kanji');
    const chkKana = document.getElementById('chk-opt-kana');
    const chkFurigana = document.getElementById('chk-opt-furigana');
    const chkRomaji = document.getElementById('chk-opt-romaji');

    if (chkKanji) localStorage.setItem('ja_opt_kanji', chkKanji.checked);
    if (chkKana) localStorage.setItem('ja_opt_kana', chkKana.checked);
    if (chkFurigana) localStorage.setItem('ja_opt_furigana', chkFurigana.checked);
    if (chkRomaji) localStorage.setItem('ja_opt_romaji', chkRomaji.checked);

    if (typeof aplicarOpcoesLeituraNaInterface === 'function') aplicarOpcoesLeituraNaInterface();

    const playerAula = document.getElementById('player-aula');
    if (playerAula && playerAula.style.display !== 'none' && typeof renderizarEtapa === 'function') {
        renderizarEtapa();
    }
}

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.carregarProgressoGlobal = carregarProgressoGlobal;
    window.salvarProgressoGlobal = salvarProgressoGlobal;
    window.obterDataLocalDashboard = obterDataLocalDashboard;
    window.carregarDadosDashboard = carregarDadosDashboard;
    window.salvarDadosDashboard = salvarDadosDashboard;
    window.normalizarDadosDashboard = normalizarDadosDashboard;
    window.normalizarTentativaSRS = normalizarTentativaSRS;
    window.normalizarHistoricoSRSDashboard = normalizarHistoricoSRSDashboard;
    window.registrarSessaoDashboard = registrarSessaoDashboard;
    window.registrarTentativaSRS = registrarTentativaSRS;
    window.mesclarDadosDashboard = mesclarDadosDashboard;
    window.definirMetaDiariaDashboard = definirMetaDiariaDashboard;
    window.registrarPrimeiroAcessoDashboard = registrarPrimeiroAcessoDashboard;
    window.registrarAtividadeDashboard = registrarAtividadeDashboard;
    window.mesclarProgressoGlobal = mesclarProgressoGlobal;
    window.salvarSilenciosamenteNaNuvem = salvarSilenciosamenteNaNuvem;
    window.atualizarEstadoBackupNuvemUX = atualizarEstadoBackupNuvemUX;
    window.sincronizarProgressoComFirestore = sincronizarProgressoComFirestore;
    window.inicializarAuthObserverFirebase = inicializarAuthObserverFirebase;
    window.obterCaminhoMeuProgresso = obterCaminhoMeuProgresso;
    window.irParaMeuProgresso = irParaMeuProgresso;
    window.fazerLoginEmailSenha = fazerLoginEmailSenha;
    window.fazerCadastroEmailSenha = fazerCadastroEmailSenha;
    window.fazerLoginGoogle = fazerLoginGoogle;
    window.fazerLogout = fazerLogout;
    window.salvarProgressoNaNuvem = salvarProgressoNaNuvem;
    window.carregarProgressoDaNuvem = carregarProgressoDaNuvem;
    window.getOpcoesLeitura = getOpcoesLeitura;
    window.salvarOpcoesLeitura = salvarOpcoesLeitura;
}
