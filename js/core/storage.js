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

function salvarProgressoGlobal() {
    if (typeof progressoGlobal !== 'undefined') {
        localStorage.setItem('japao_academy_progress', JSON.stringify(progressoGlobal));
        const cursos = typeof getTodosOsCursos === 'function' ? getTodosOsCursos() : {};
        if (cursos.A1) {
            const concIdx = cursos.A1.map((m, i) => progressoGlobal.modulosConcluidos.includes(m.id) ? i : -1).filter(i => i !== -1);
            const desbIdx = cursos.A1.map((m, i) => (progressoGlobal.modulosDesbloqueados.includes(m.id) || i === 0) ? i : -1).filter(i => i !== -1);
            localStorage.setItem('ja_modulos_concluidos', JSON.stringify(concIdx));
            localStorage.setItem('ja_progresso_a1', JSON.stringify(desbIdx));
        }
        if (cursos.A2) {
            const concIdx = cursos.A2.map((m, i) => progressoGlobal.modulosConcluidos.includes(m.id) ? i : -1).filter(i => i !== -1);
            const desbIdx = cursos.A2.map((m, i) => (progressoGlobal.modulosDesbloqueados.includes(m.id) || i === 0) ? i : -1).filter(i => i !== -1);
            localStorage.setItem('ja_modulos_concluidos_a2', JSON.stringify(concIdx));
            localStorage.setItem('ja_progresso_a2', JSON.stringify(desbIdx));
        }
        if (cursos.B1) {
            const concIdx = cursos.B1.map((m, i) => progressoGlobal.modulosConcluidos.includes(m.id) ? i : -1).filter(i => i !== -1);
            const desbIdx = cursos.B1.map((m, i) => (progressoGlobal.modulosDesbloqueados.includes(m.id) || i === 0) ? i : -1).filter(i => i !== -1);
            localStorage.setItem('ja_modulos_concluidos_b1', JSON.stringify(concIdx));
            localStorage.setItem('ja_progresso_b1', JSON.stringify(desbIdx));
        }
        if (cursos.B2) {
            const concIdx = cursos.B2.map((m, i) => progressoGlobal.modulosConcluidos.includes(m.id) ? i : -1).filter(i => i !== -1);
            const desbIdx = cursos.B2.map((m, i) => (progressoGlobal.modulosDesbloqueados.includes(m.id) || i === 0) ? i : -1).filter(i => i !== -1);
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
    salvarSilenciosamenteNaNuvem();
}

function salvarSilenciosamenteNaNuvem() {
    const fb = typeof window !== 'undefined' ? window.jaFirebase : null;
    const user = fb && fb.auth ? fb.auth.currentUser : null;
    if (!user || !fb || !fb.db || !fb.doc || !fb.setDoc) return;
    try {
        const backupObj = {
            progressoGlobal: JSON.parse(localStorage.getItem('japao_academy_progress') || (typeof progressoGlobal !== 'undefined' ? JSON.stringify(progressoGlobal) : '{}')),
            userStats: JSON.parse(localStorage.getItem('ja_user_stats') || '{}'),
            streakData: JSON.parse(localStorage.getItem('ja_streak_data') || '{}'),
            achievements: JSON.parse(localStorage.getItem('ja_unlocked_achievements') || '[]'),
            favoritos: JSON.parse(localStorage.getItem('ja_favoritos_deck') || '[]'),
            cadernoErros: JSON.parse(localStorage.getItem('ja_caderno_erros') || '[]'),
            nomeUsuario: localStorage.getItem('ja_nome_usuario') || (typeof nomeUsuario !== 'undefined' ? nomeUsuario : ''),
            updatedAt: new Date().toISOString()
        };
        const docRef = fb.doc(fb.db, "users", user.uid, "progresso", "dados");
        fb.setDoc(docRef, backupObj, { merge: true }).catch(err => {
            console.warn("⚠️ Falha ao enviar dados em segundo plano para o Firestore:", err);
        });
    } catch (e) {
        console.warn("⚠️ Erro ao preparar backup silencioso para o Firestore:", e);
    }
}

async function sincronizarProgressoComFirestore(user) {
    const fb = typeof window !== 'undefined' ? window.jaFirebase : null;
    if (!fb || !fb.db || !user) return;
    try {
        const docRef = fb.doc(fb.db, "users", user.uid, "progresso", "dados");
        const docSnap = await fb.getDoc(docRef);
        if (docSnap.exists()) {
            const dadosNuvem = docSnap.data() || {};
            if (dadosNuvem.progressoGlobal) {
                localStorage.setItem('japao_academy_progress', JSON.stringify(dadosNuvem.progressoGlobal));
                if (typeof AppState !== 'undefined' && typeof AppState.setProgress === 'function') AppState.setProgress(dadosNuvem.progressoGlobal);
            }
            if (dadosNuvem.userStats) localStorage.setItem('ja_user_stats', JSON.stringify(dadosNuvem.userStats));
            if (dadosNuvem.streakData) localStorage.setItem('ja_streak_data', JSON.stringify(dadosNuvem.streakData));
            if (dadosNuvem.achievements) localStorage.setItem('ja_unlocked_achievements', JSON.stringify(dadosNuvem.achievements));
            if (dadosNuvem.favoritos) localStorage.setItem('ja_favoritos_deck', JSON.stringify(dadosNuvem.favoritos));
            if (dadosNuvem.cadernoErros) localStorage.setItem('ja_caderno_erros', JSON.stringify(dadosNuvem.cadernoErros));
            if (dadosNuvem.nomeUsuario) {
                localStorage.setItem('ja_nome_usuario', dadosNuvem.nomeUsuario);
                if (typeof nomeUsuario !== 'undefined') nomeUsuario = dadosNuvem.nomeUsuario;
            }
            if (typeof carregarProgressoGlobal === 'function') carregarProgressoGlobal();
            if (typeof atualizarUIProgresso === 'function') atualizarUIProgresso();
            if (typeof atualizarHeaderXP === 'function') atualizarHeaderXP();
            if (typeof atualizarHeaderStreak === 'function') atualizarHeaderStreak();
        } else {
            salvarSilenciosamenteNaNuvem();
        }
    } catch (e) {
        console.warn("⚠️ Erro ao sincronizar com o Firestore:", e);
    }
}

function inicializarAuthObserverFirebase() {
    const fb = typeof window !== 'undefined' ? window.jaFirebase : null;
    if (!fb || !fb.auth || !fb.onAuthStateChanged) return;
    fb.onAuthStateChanged(fb.auth, (user) => {
        if (typeof garantirElementosCabecalhoEModal === 'function') garantirElementosCabecalhoEModal();
        if (user) {
            sincronizarProgressoComFirestore(user);
        } else {
            if (typeof atualizarUIProgresso === 'function') atualizarUIProgresso();
        }
    });
}

async function fazerLoginEmailSenha(email, senha) {
    const fb = typeof window !== 'undefined' ? window.jaFirebase : null;
    if (!fb || !fb.auth || !fb.signInWithEmailAndPassword) return { success: false, error: 'Firebase não carregado.' };
    try {
        const userCred = await fb.signInWithEmailAndPassword(fb.auth, email, senha);
        if (typeof mostrarToast === 'function') mostrarToast(`🚀 <strong>Bem-vindo de volta!</strong> Olá, ${userCred.user.displayName || userCred.user.email}!`);
        if (typeof playBeep === 'function') playBeep('success');
        return { success: true, user: userCred.user };
    } catch (err) {
        if (typeof mostrarToast === 'function') mostrarToast(`❌ <strong>Erro de Login:</strong> ${err.message || 'Credenciais inválidas.'}`);
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
        if (typeof mostrarToast === 'function') mostrarToast(`✨ <strong>Conta criada com sucesso!</strong> Seja bem-vindo(a), ${nome || 'Estudante'}!`);
        if (typeof playBeep === 'function') playBeep('success');
        return { success: true, user: userCred.user };
    } catch (err) {
        if (typeof mostrarToast === 'function') mostrarToast(`❌ <strong>Erro no Cadastro:</strong> ${err.message || 'Falha ao criar conta.'}`);
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
        if (typeof mostrarToast === 'function') mostrarToast(`🚀 <strong>Autenticado com o Google!</strong> Olá, ${userCred.user.displayName || 'Estudante'}!`);
        if (typeof playBeep === 'function') playBeep('success');
        return { success: true, user: userCred.user };
    } catch (err) {
        if (typeof mostrarToast === 'function') mostrarToast(`❌ <strong>Erro no Login Google:</strong> ${err.message || 'Operação cancelada.'}`);
        if (typeof playBeep === 'function') playBeep('error');
        return { success: false, error: err.message };
    }
}

async function fazerLogout() {
    const fb = typeof window !== 'undefined' ? window.jaFirebase : null;
    if (!fb || !fb.auth || !fb.signOut) return;
    try {
        await fb.signOut(fb.auth);
        if (typeof mostrarToast === 'function') mostrarToast(`👋 <strong>Sessão Encerrada.</strong> Você deslogou do Japão Academy.`);
        if (typeof playBeep === 'function') playBeep('click');
        if (typeof garantirElementosCabecalhoEModal === 'function') garantirElementosCabecalhoEModal();
        if (typeof atualizarUIProgresso === 'function') atualizarUIProgresso();
    } catch (err) {
        console.warn("⚠️ Erro ao deslogar:", err);
    }
}

async function salvarProgressoNaNuvem() {
    const fb = typeof window !== 'undefined' ? window.jaFirebase : null;
    const user = fb && fb.auth ? fb.auth.currentUser : null;
    if (!user || !fb || !fb.db || !fb.doc || !fb.setDoc) {
        if (typeof mostrarToast === 'function') mostrarToast("⚠️ Você precisa estar logado para salvar seu progresso na nuvem.");
        if (typeof abrirModalAuth === 'function') abrirModalAuth('login');
        return;
    }
    try {
        const backupObj = {
            progressoGlobal: JSON.parse(localStorage.getItem('japao_academy_progress') || (typeof progressoGlobal !== 'undefined' ? JSON.stringify(progressoGlobal) : '{}')),
            userStats: JSON.parse(localStorage.getItem('ja_user_stats') || '{}'),
            streakData: JSON.parse(localStorage.getItem('ja_streak_data') || '{}'),
            achievements: JSON.parse(localStorage.getItem('ja_unlocked_achievements') || '[]'),
            favoritos: JSON.parse(localStorage.getItem('ja_favoritos_deck') || '[]'),
            cadernoErros: JSON.parse(localStorage.getItem('ja_caderno_erros') || '[]'),
            nomeUsuario: localStorage.getItem('ja_nome_usuario') || (typeof nomeUsuario !== 'undefined' ? nomeUsuario : ''),
            updatedAt: new Date().toISOString()
        };
        const docRef = fb.doc(fb.db, "users", user.uid, "progresso", "dados");
        await fb.setDoc(docRef, backupObj, { merge: true });
        if (typeof mostrarToast === 'function') mostrarToast("☁️ Progresso e estatísticas salvos na nuvem com sucesso!");
        if (typeof playBeep === 'function') playBeep('success');
    } catch (err) {
        console.error("⚠️ Erro ao salvar progresso na nuvem:", err);
        if (typeof mostrarToast === 'function') mostrarToast(`❌ <strong>Erro ao salvar na nuvem:</strong> ${err.message || 'Falha na conexão.'}`);
    }
}

async function carregarProgressoDaNuvem() {
    const fb = typeof window !== 'undefined' ? window.jaFirebase : null;
    const user = fb && fb.auth ? fb.auth.currentUser : null;
    if (!user || !fb || !fb.db || !fb.doc || !fb.getDoc) {
        if (typeof mostrarToast === 'function') mostrarToast("⚠️ Você precisa estar logado para restaurar seu progresso da nuvem.");
        if (typeof abrirModalAuth === 'function') abrirModalAuth('login');
        return;
    }
    try {
        const docRef = fb.doc(fb.db, "users", user.uid, "progresso", "dados");
        const docSnap = await fb.getDoc(docRef);
        if (docSnap.exists()) {
            const dadosNuvem = docSnap.data() || {};
            if (dadosNuvem.progressoGlobal) {
                localStorage.setItem('japao_academy_progress', JSON.stringify(dadosNuvem.progressoGlobal));
                if (typeof AppState !== 'undefined' && typeof AppState.setProgress === 'function') AppState.setProgress(dadosNuvem.progressoGlobal);
            }
            if (dadosNuvem.userStats) localStorage.setItem('ja_user_stats', JSON.stringify(dadosNuvem.userStats));
            if (dadosNuvem.streakData) localStorage.setItem('ja_streak_data', JSON.stringify(dadosNuvem.streakData));
            if (dadosNuvem.achievements) localStorage.setItem('ja_unlocked_achievements', JSON.stringify(dadosNuvem.achievements));
            if (dadosNuvem.favoritos) localStorage.setItem('ja_favoritos_deck', JSON.stringify(dadosNuvem.favoritos));
            if (dadosNuvem.cadernoErros) localStorage.setItem('ja_caderno_erros', JSON.stringify(dadosNuvem.cadernoErros));
            if (dadosNuvem.nomeUsuario) {
                localStorage.setItem('ja_nome_usuario', dadosNuvem.nomeUsuario);
                if (typeof nomeUsuario !== 'undefined') nomeUsuario = dadosNuvem.nomeUsuario;
            }
            if (typeof carregarProgressoGlobal === 'function') carregarProgressoGlobal();
            if (typeof atualizarUIProgresso === 'function') atualizarUIProgresso();
            if (typeof atualizarHeaderXP === 'function') atualizarHeaderXP();
            if (typeof atualizarHeaderStreak === 'function') atualizarHeaderStreak();
            if (typeof renderizarMuralConquistas === 'function') renderizarMuralConquistas();
            if (typeof mostrarToast === 'function') mostrarToast("📥 Progresso restaurado da nuvem com sucesso!");
            if (typeof playBeep === 'function') playBeep('success');
        } else {
            if (typeof mostrarToast === 'function') mostrarToast("ℹ️ Nenhum backup encontrado na nuvem para esta conta.");
        }
    } catch (err) {
        console.error("⚠️ Erro ao restaurar progresso da nuvem:", err);
        if (typeof mostrarToast === 'function') mostrarToast(`❌ <strong>Erro ao restaurar da nuvem:</strong> ${err.message || 'Falha na conexão.'}`);
    }
}

function getOpcoesLeitura() {
    return {
        kanji: localStorage.getItem('ja_opt_kanji') !== null ? localStorage.getItem('ja_opt_kanji') === 'true' : true,
        kana: localStorage.getItem('ja_opt_kana') !== null ? localStorage.getItem('ja_opt_kana') === 'true' : true,
        furigana: localStorage.getItem('ja_opt_furigana') !== null ? localStorage.getItem('ja_opt_furigana') === 'true' : true,
        romaji: localStorage.getItem('ja_opt_romaji') !== null ? localStorage.getItem('ja_opt_romaji') === 'true' : false
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
    window.salvarSilenciosamenteNaNuvem = salvarSilenciosamenteNaNuvem;
    window.sincronizarProgressoComFirestore = sincronizarProgressoComFirestore;
    window.inicializarAuthObserverFirebase = inicializarAuthObserverFirebase;
    window.fazerLoginEmailSenha = fazerLoginEmailSenha;
    window.fazerCadastroEmailSenha = fazerCadastroEmailSenha;
    window.fazerLoginGoogle = fazerLoginGoogle;
    window.fazerLogout = fazerLogout;
    window.salvarProgressoNaNuvem = salvarProgressoNaNuvem;
    window.carregarProgressoDaNuvem = carregarProgressoDaNuvem;
    window.getOpcoesLeitura = getOpcoesLeitura;
    window.salvarOpcoesLeitura = salvarOpcoesLeitura;
}
