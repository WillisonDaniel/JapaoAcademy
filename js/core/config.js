// ======================================
// MÓDULO CORE - CONFIGURAÇÃO E ESTADO GLOBAL
// ======================================

// Atributo do modo da página atual (ex: 'curso', 'hiragana', 'katakana', 'kanji', 'pronuncia', 'phrasal_verbs', etc.)
var courseMode = (typeof document !== 'undefined' && document.body) ? document.body.getAttribute('data-mode') : null;

// Estado dos Níveis do Curso
var nivelAtivo = 'A1'; // 'A1', 'A2', 'B1' ou 'B2'
var modoDesbloqueado = false;
try {
    const salvoDesb = localStorage.getItem('ja_modo_desbloqueado');
    if (salvoDesb !== null) modoDesbloqueado = JSON.parse(salvoDesb);
} catch (e) {
    modoDesbloqueado = false;
}

// Perfil do Estudante
var nomeUsuario = 'Estudante';
try {
    const salvoNome = localStorage.getItem('ja_nome_usuario');
    if (salvoNome) nomeUsuario = salvoNome;
} catch (e) {
    nomeUsuario = 'Estudante';
}

// Navegação do Player de Aulas
var moduloAtivoIndex = 0;
var etapaAtual = 1;
var dropAtual = 0;

// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.courseMode = courseMode;
    window.nivelAtivo = nivelAtivo;
    window.modoDesbloqueado = modoDesbloqueado;
    window.nomeUsuario = nomeUsuario;
    window.moduloAtivoIndex = moduloAtivoIndex;
    window.etapaAtual = etapaAtual;
    window.dropAtual = dropAtual;
}
