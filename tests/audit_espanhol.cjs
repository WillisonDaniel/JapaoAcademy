const fs = require('fs');
const path = require('path');
const assert = require('assert').strict;
const { spawnSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const BROWSER_PATH = fs.existsSync(CHROME_PATH) ? CHROME_PATH : (fs.existsSync(EDGE_PATH) ? EDGE_PATH : null);

const SCREENSHOT_DIR = 'C:\\Users\\willi\\.gemini\\antigravity\\brain\\2481aa28-f17c-4c6b-90e6-275957bfb6da\\scratch\\screenshots';
if (!fs.existsSync(SCREENSHOT_DIR)) {
    fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

console.log('====================================================');
console.log('🔍 AUDITORIA COMPLETA DE CÓDIGO, DADOS E NAVEGAÇÃO');
console.log('====================================================');

// ----------------------------------------------------
// 1. AUDITORIA DE BANCOS DE DADOS DO ESPANHOL
// ----------------------------------------------------
console.log('\n[1/4] Auditando Integridade dos Bancos de Dados A1–B2...');

const dbFiles = [
    { path: 'database/es-ES/data_espanhol_a1.js', varName: 'CURSO_ESPANHOL_A1_DADOS', count: 30, level: 'A1' },
    { path: 'database/es-ES/data_espanhol_a2.js', varName: 'CURSO_ESPANHOL_A2_DADOS', count: 30, level: 'A2' },
    { path: 'database/es-ES/data_espanhol_b1.js', varName: 'CURSO_ESPANHOL_B1_DADOS', count: 24, level: 'B1' },
    { path: 'database/es-ES/data_espanhol_b2.js', varName: 'CURSO_ESPANHOL_B2_DADOS', count: 24, level: 'B2' }
];

let totalModulos = 0;
const ids = new Set();

dbFiles.forEach(db => {
    const fullPath = path.join(ROOT, db.path);
    assert.ok(fs.existsSync(fullPath), `Arquivo ausente: ${db.path}`);
    const code = fs.readFileSync(fullPath, 'utf8');
    
    // Check forbidden placeholder strings, generic distractors & lazy template strings
    const forbiddenStrings = [
        "listo para el módulo",
        "Palabra clave",
        "Palavra-chave",
        "Pergunta de prática",
        "Opção A",
        "Opção B",
        "Termo correto",
        "Incorreto 1",
        "Expressão certa",
        "Opção 2",
        "Opção 3",
        "Opção 4",
        "Outra coisa",
        "Opção incorreta",
        "Incorrecto 1",
        "Incorrecto 2",
        "Incorrecto 3",
        "Vocabulário chave do módulo",
        "[Complemento do Módulo",
        "Termo Principal +",
        "Regra do Módulo",
        "Outra opção"
    ];
    forbiddenStrings.forEach(str => {
        assert.ok(!code.includes(str), `Encontrada string de placeholder/template genérico "${str}" em ${db.path}`);
    });
    const check = spawnSync(process.execPath, ['--check', fullPath], { encoding: 'utf8' });
    assert.equal(check.status, 0, `Sintaxe invalida em ${db.path}`);

    // Load data
    const fn = new Function(`${code}; return ${db.varName};`);
    const data = fn();
    assert.ok(Array.isArray(data), `Variavel ${db.varName} deve ser um Array`);
    assert.equal(data.length, db.count, `Quantidade incorreta de modulos em ${db.path}`);

    data.forEach((mod, idx) => {
        const ctx = `${db.path} Módulo ${idx + 1}`;
        assert.ok(mod.id, `${ctx}: id ausente`);
        assert.ok(!ids.has(mod.id), `${ctx}: id duplicado ${mod.id}`);
        ids.add(mod.id);

        assert.ok(mod.title, `${ctx}: title ausente`);
        assert.equal(mod.level, db.level, `${ctx}: level incorreto (${mod.level})`);
        
        // Stage 1 Context
        assert.ok(mod.stage1_context, `${ctx}: stage1_context ausente`);
        assert.ok(mod.stage1_context.missionTitle, `${ctx}: missionTitle ausente`);
        assert.ok(mod.stage1_context.missionDescription, `${ctx}: missionDescription ausente`);
        assert.ok(mod.stage1_context.audioGuide, `${ctx}: audioGuide ausente`);

        // Stage 2 Drops & Grammar Pills
        assert.ok(Array.isArray(mod.stage2_drops) && mod.stage2_drops.length > 0, `${ctx}: stage2_drops invalido`);
        const pills = mod.stage2_drops.filter(d => d.type === 'grammar_pill');
        const minPills = (db.level === 'A1' || db.level === 'A2') ? 2 : 3;
        assert.ok(pills.length >= minPills, `${ctx}: deve conter no mínimo ${minPills} pílulas gramaticais em stage2_drops (encontrado: ${pills.length})`);

        // Stage 3 Practice
        assert.ok(Array.isArray(mod.stage3_practice) && mod.stage3_practice.length > 0, `${ctx}: stage3_practice invalido`);
        mod.stage3_practice.forEach((q, qIdx) => {
            assert.ok(q.question, `${ctx} Pratica Q${qIdx+1}: pergunta ausente`);
            assert.ok(Array.isArray(q.options) && q.options.length >= 2, `${ctx} Pratica Q${qIdx+1}: opcoes invalidas`);
        });

        // Stage 3.5 Sentence Builder
        assert.ok(Array.isArray(mod.stage3_5_sentenceBuilder) && mod.stage3_5_sentenceBuilder.length > 0, `${ctx}: stage3_5_sentenceBuilder invalido`);

        // Stage 4 Dialog
        assert.ok(Array.isArray(mod.stage4_dialog) && mod.stage4_dialog.length > 0, `${ctx}: stage4_dialog invalido`);

        // Stage 5 Quiz (5 questões por módulo padrão, ou 30 questões de revisão no módulo final)
        assert.ok(Array.isArray(mod.stage5_quiz), `${ctx}: stage5_quiz invalido`);
        const isFinalModule = (idx === data.length - 1);
        if (isFinalModule) {
            assert.ok(mod.stage5_quiz.length === 5 || mod.stage5_quiz.length === 30, `${ctx}: módulo final deve conter 5 ou 30 questões (encontrado: ${mod.stage5_quiz.length})`);
        } else {
            assert.equal(mod.stage5_quiz.length, 5, `${ctx}: stage5_quiz deve conter exatamente 5 questões (encontrado: ${mod.stage5_quiz.length})`);
        }
    });

    totalModulos += data.length;
    console.log(`  ✓ ${db.path}: ${data.length} módulos ${db.level} validados (${(db.level === 'A1' || db.level === 'A2') ? '2+' : '3+'} pílulas gramaticais & quizes validados).`);
});
assert.ok(totalModulos > 0, 'Total de módulos deve ser maior que 0');

const faPath = path.join(ROOT, 'database/es-ES/data_espanhol_falsos_amigos.js');
const faCode = fs.readFileSync(faPath, 'utf8');
const faFn = new Function(`${faCode}; return DADOS_ESPANHOL_FALSOS_AMIGOS_TRILHA;`);
const faData = faFn();

assert.ok(Array.isArray(faData) && faData.length === 16, 'Trilha de Falsos Cognatos deve conter exatamente 16 módulos');
faData.forEach((mod, idx) => {
    assert.ok(mod.id, `Módulo FA ${idx+1}: id ausente`);
    assert.ok(mod.title, `Módulo FA ${idx+1}: title ausente`);
    assert.ok(mod.stage1_context, `Módulo FA ${idx+1}: stage1_context ausente`);
    assert.ok(Array.isArray(mod.stage2_drops) && mod.stage2_drops.length > 0, `Módulo FA ${idx+1}: stage2_drops ausente`);
    assert.ok(Array.isArray(mod.stage3_practice) && mod.stage3_practice.length > 0, `Módulo FA ${idx+1}: stage3_practice ausente`);
    assert.ok(Array.isArray(mod.stage4_dialog) && mod.stage4_dialog.length > 0, `Módulo FA ${idx+1}: stage4_dialog ausente`);
    assert.ok(Array.isArray(mod.stage5_quiz) && mod.stage5_quiz.length >= 5, `Módulo FA ${idx+1}: stage5_quiz ausente`);
});
console.log(`  ✓ database/es-ES/data_espanhol_falsos_amigos.js: 16 módulos da Trilha de Falsos Cognatos validados.`);

// ----------------------------------------------------
// 2. AUDITORIA DO DICIONÁRIO DE ESPANHOL
// ----------------------------------------------------
console.log('\n[2/4] Auditando Dicionário Interativo e Banco Central de Fonética...');
const dictPath = path.join(ROOT, 'database/es-ES/data_espanhol_dicionario.js');
const dictCode = fs.readFileSync(dictPath, 'utf8');
const dictFn = new Function(`${dictCode}; return DADOS_ESPANHOL_DICIONARIO;`);
const dictData = dictFn();

const fonPath = path.join(ROOT, 'database/es-ES/data_espanhol_fonetica_recursos.js');
const fonCode = fs.readFileSync(fonPath, 'utf8');
const fonFn = new Function(`${fonCode}; return FONETICA_RECURSOS_ESPANHOL_DADOS;`);
const fonData = fonFn();

assert.ok(Array.isArray(fonData.fonetica) && fonData.fonetica.length > 0, 'Banco Central: fonetica ausente');
assert.ok(Array.isArray(fonData.verbos) && fonData.verbos.length > 0, 'Banco Central: verbos ausente');
assert.ok(Array.isArray(fonData.heterotonicos) && fonData.heterotonicos.length > 0, 'Banco Central: heterotonicos ausente');
assert.ok(Array.isArray(fonData.regionalismos) && fonData.regionalismos.length > 0, 'Banco Central: regionalismos ausente');

const totalFaCards = faData.reduce((acc, m) => acc + (m.stage2_drops ? m.stage2_drops.length : 0), 0);
assert.ok(totalFaCards > 0, 'Dicionario: falsosAmigos dinâmico ausente');
console.log(`  ✓ Banco Central & Dicionário: ${fonData.fonetica.length} tópicos fonéticos, ${fonData.verbos.length} verbos conjugados, ${fonData.heterotonicos.length} heterotónicos, ${fonData.regionalismos.length} regionalismos e ${totalFaCards} falsos cognatos dinâmicos validados.`);

// ----------------------------------------------------
// 3. AUDITORIA DE REDIRECIONAMENTOS E LINHAS DE LINK
// ----------------------------------------------------
console.log('\n[3/4] Auditando Links e Redirecionamentos entre Páginas...');

const pagesToCheck = [
    'index.html',
    'hub_idiomas.html',
    'hub_espanhol.html',
    'html/es-ES/espanhol_curso.html',
    'html/es-ES/espanhol_falsos_amigos.html',
    'html/es-ES/espanhol_minigame_conjugacao.html',
    'html/es-ES/espanhol_dicionario.html',
    'html/es-ES/espanhol_fonetica.html'
];

pagesToCheck.forEach(relPage => {
    const pageFile = path.join(ROOT, relPage);
    assert.ok(fs.existsSync(pageFile), `Página HTML não encontrada: ${relPage}`);
    const html = fs.readFileSync(pageFile, 'utf8');

    // Extract all src and href
    const refRegex = /\b(?:src|href)\s*=\s*["']([^"']+)["']/gi;
    let match;
    while ((match = refRegex.exec(html)) !== null) {
        const ref = match[1].trim();
        if (!ref || /^(?:https?:|\/\/|data:|mailto:|tel:|javascript:|#)/i.test(ref)) continue;
        const cleanRef = ref.split(/[?#]/, 1)[0];
        if (!cleanRef) continue;

        const resolved = path.resolve(path.dirname(pageFile), cleanRef);
        assert.ok(fs.existsSync(resolved), `Link quebrado em ${relPage} -> ${ref}`);
    }
    console.log(`  ✓ ${relPage}: todos os atalhos e referências locais são válidos.`);
});

// Testar interatividade das trilhas A1, A2, B1, B2 em espanhol_curso.html
const cursoHtml = fs.readFileSync(path.join(ROOT, 'html/es-ES/espanhol_curso.html'), 'utf8');
['A1', 'A2', 'B1', 'B2'].forEach(lvl => {
    assert.ok(cursoHtml.includes(`abrirTrilha('${lvl}')`), `Função abrirTrilha('${lvl}') não encontrada no HTML do curso.`);
    assert.ok(cursoHtml.includes(`id="trilha-${lvl.toLowerCase()}"`), `Seção trilha-${lvl.toLowerCase()} não encontrada no HTML.`);
});
console.log('  ✓ Botões A1, A2, B1, B2 vinculados corretamente às trilhas de módulos.');

// ----------------------------------------------------
// 4. VERIFICAÇÃO VISUAL HEADLESS (DESKTOP & MOBILE)
// ----------------------------------------------------
console.log('\n[4/4] Capturando e Auditando Screenshots no Navegador Real...');

if (!BROWSER_PATH) {
    console.warn('⚠️ Navegador Chrome/Edge não localizado no SO para captura headless.');
} else {
    const views = [
        { name: 'desktop', width: 1440, height: 900 },
        { name: 'mobile', width: 375, height: 812 }
    ];

    const capturePages = [
        { name: 'hub_espanhol', file: 'hub_espanhol.html' },
        { name: 'espanhol_curso', file: 'html/es-ES/espanhol_curso.html' },
        { name: 'espanhol_falsos_amigos', file: 'html/es-ES/espanhol_falsos_amigos.html' },
        { name: 'espanhol_minigame_conjugacao', file: 'html/es-ES/espanhol_minigame_conjugacao.html' },
        { name: 'espanhol_dicionario', file: 'html/es-ES/espanhol_dicionario.html' }
    ];

    // Injetar script para ativar a aba de regionalismos no dicionario antes da captura
    const dictHtmlFile = path.join(ROOT, 'html/es-ES/espanhol_dicionario.html');
    const dictOriginalCode = fs.readFileSync(dictHtmlFile, 'utf8');
    const dictRegCode = dictOriginalCode.replace(
        '</body>',
        '<script>document.addEventListener("DOMContentLoaded", () => { setTimeout(() => { if (typeof selecionarCategoriaDicionario === "function") selecionarCategoriaDicionario("regionalismos"); }, 200); });</script></body>'
    );
    fs.writeFileSync(dictHtmlFile, dictRegCode);

    // Injetar temporariamente o disparo do player no curso de espanhol para screenshot
    const cursoHtmlFile = path.join(ROOT, 'html/es-ES/espanhol_curso.html');
    const cursoOriginalCode = fs.readFileSync(cursoHtmlFile, 'utf8');
    const cursoPlayerCode = cursoOriginalCode
        .replace('id="hub-niveis" class="container"', 'id="hub-niveis" class="container" style="display: none;"')
        .replace('id="player-aula" class="container" style="display: none;"', 'id="player-aula" class="container" style="display: block;"')
        .replace(
            '</body>',
            '<script>document.addEventListener("DOMContentLoaded", () => { setTimeout(() => { if (typeof iniciarModulo === "function") iniciarModulo(0, "A1"); }, 100); });</script></body>'
        );
    fs.writeFileSync(cursoHtmlFile, cursoPlayerCode);

    // Injetar temporariamente o disparo do Construtor de Frases (Etapa 4) para screenshot
    const sbHtmlFile = path.join(ROOT, 'html/es-ES/espanhol_curso_sb.html');
    const sbPlayerCode = cursoOriginalCode
        .replace('id="hub-niveis" class="container"', 'id="hub-niveis" class="container" style="display: none;"')
        .replace('id="player-aula" class="container" style="display: none;"', 'id="player-aula" class="container" style="display: block;"')
        .replace(
            '</body>',
            '<script>document.addEventListener("DOMContentLoaded", () => { setTimeout(() => { if (typeof iniciarModulo === "function") { iniciarModulo(0, "A1"); AppState.setStage(4); renderizarEtapa(); setTimeout(() => { const exId = "sb_es_a1_mod_1_0"; if (typeof renderizarBlocosSentenceBuilder === "function") renderizarBlocosSentenceBuilder(exId); }, 100); } }, 300); });</script></body>'
        );
    fs.writeFileSync(sbHtmlFile, sbPlayerCode);

    capturePages.push({ name: 'espanhol_player', file: 'html/es-ES/espanhol_curso.html' });
    capturePages.push({ name: 'espanhol_sentence_builder', file: 'html/es-ES/espanhol_curso_sb.html' });

    views.forEach(v => {
        capturePages.forEach(p => {
            const htmlPath = path.join(ROOT, p.file);
            const fileUrl = `file:///${htmlPath.replace(/\\/g, '/')}`;
            const outFile = path.join(SCREENSHOT_DIR, `${p.name}_${v.name}.png`);

            const args = [
                '--headless=new',
                '--disable-gpu',
                '--hide-scrollbars',
                `--window-size=${v.width},${v.height}`,
                `--screenshot=${outFile}`,
                fileUrl
            ];

            const res = spawnSync(BROWSER_PATH, args, { encoding: 'utf8' });
            if (fs.existsSync(outFile)) {
                const stat = fs.statSync(outFile);
                console.log(`  📸 Screenshot gerado: ${p.name} (${v.name} ${v.width}x${v.height}) -> ${stat.size} bytes`);
            } else {
                console.warn(`  ⚠️ Falha ao gerar screenshot para ${p.name}_${v.name}: ${res.stderr}`);
            }
        });
    });

    // Restaurar arquivos modificados
    fs.writeFileSync(dictHtmlFile, dictOriginalCode);
    fs.writeFileSync(cursoHtmlFile, cursoOriginalCode);
    if (fs.existsSync(sbHtmlFile)) fs.unlinkSync(sbHtmlFile);

    console.log('\n====================================================');
    console.log('✅ AUDITORIA DE LÓGICA E DE RENDERIZAÇÃO CONCLUÍDA!');
    console.log('====================================================\n');
}
