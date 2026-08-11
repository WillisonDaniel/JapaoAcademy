const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.join(ROOT, 'js', 'core', 'course-index.js');
const WRITE_MODE = process.argv.includes('--write');

const SOURCES = [
    ['ja-JP', 'A1', 'database/ja-JP/data_curso_a1.js', 'CURSO_A1_DADOS'],
    ['ja-JP', 'A2', 'database/ja-JP/data_curso_a2.js', 'CURSO_A2_DADOS'],
    ['ja-JP', 'B1', 'database/ja-JP/data_curso_b1.js', 'CURSO_B1_DADOS'],
    ['ja-JP', 'B2', 'database/ja-JP/data_curso_b2.js', 'CURSO_B2_DADOS'],
    ['en-US', 'A1', 'database/en-US/data_english_a1.js', 'CURSO_ENGLISH_A1_DADOS'],
    ['en-US', 'A2', 'database/en-US/data_english_a2.js', 'CURSO_ENGLISH_A2_DADOS'],
    ['en-US', 'B1', 'database/en-US/data_english_b1.js', 'CURSO_ENGLISH_B1_DADOS'],
    ['en-US', 'B2', 'database/en-US/data_english_b2.js', 'CURSO_ENGLISH_B2_DADOS'],
    ['es-ES', 'A1', 'database/es-ES/data_espanhol_a1.js', 'CURSO_ESPANHOL_A1_DADOS'],
    ['es-ES', 'A2', 'database/es-ES/data_espanhol_a2.js', 'CURSO_ESPANHOL_A2_DADOS'],
    ['es-ES', 'B1', 'database/es-ES/data_espanhol_b1.js', 'CURSO_ESPANHOL_B1_DADOS'],
    ['es-ES', 'B2', 'database/es-ES/data_espanhol_b2.js', 'CURSO_ESPANHOL_B2_DADOS'],
    ['ru-RU', 'A1', 'database/ru-RU/data_curso_russo_a1.js', 'CURSO_RUSSO_A1_DADOS'],
    ['ru-RU', 'A2', 'database/ru-RU/data_curso_russo_a2.js', 'CURSO_RUSSO_A2_DADOS'],
    ['ru-RU', 'B1', 'database/ru-RU/data_curso_russo_b1.js', 'CURSO_RUSSO_B1_DADOS'],
    ['ru-RU', 'B2', 'database/ru-RU/data_curso_russo_b2.js', 'CURSO_RUSSO_B2_DADOS'],
    ['it-IT', 'A1', 'database/it-IT/data_curso_italiano_a1.js', 'CURSO_ITALIANO_A1_DADOS'],
    ['it-IT', 'A2', 'database/it-IT/data_curso_italiano_a2.js', 'CURSO_ITALIANO_A2_DADOS'],
    ['it-IT', 'B1', 'database/it-IT/data_curso_italiano_b1.js', 'CURSO_ITALIANO_B1_DADOS']
];

function loadModules(relativePath, variableName) {
    const source = fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
    const context = vm.createContext({ console: { log() {}, warn() {}, error() {} } });
    vm.runInContext(`${source}\nglobalThis.__courseModules = ${variableName};`, context, { filename: relativePath });
    return JSON.parse(JSON.stringify(context.__courseModules));
}

function buildIndex() {
    const index = { 'ja-JP': {}, 'en-US': {}, 'es-ES': {}, 'ru-RU': {}, 'it-IT': {} };
    const allIds = [];
    for (const [language, level, relativePath, variableName] of SOURCES) {
        const modules = loadModules(relativePath, variableName);
        assert.ok(Array.isArray(modules), `${relativePath}: dataset inválido`);
        const ids = modules.map(module => String(module && module.id || '')).filter(Boolean);
        assert.equal(ids.length, modules.length, `${relativePath}: módulo sem ID`);
        assert.equal(new Set(ids).size, ids.length, `${relativePath}: IDs duplicados`);
        index[language][level] = ids;
        allIds.push(...ids);
    }
    assert.equal(allIds.length, 497, 'o índice deve conter exatamente 497 módulos');
    assert.equal(new Set(allIds).size, allIds.length, 'IDs de módulos colidem entre idiomas');
    return index;
}

function renderIndex(index) {
    return `// Arquivo gerado por tests/course-index.cjs. Não editar manualmente.\n` +
`const COURSE_MODULE_INDEX = Object.freeze(${JSON.stringify(index, null, 4)});\n\n` +
`const COURSE_MODULE_LANGUAGE_BY_ID = new Map();\n` +
`const COURSE_MODULE_IDS_BY_LENGTH = [];\n` +
`Object.entries(COURSE_MODULE_INDEX).forEach(([language, levels]) => {\n` +
`    Object.values(levels).forEach(ids => ids.forEach(id => {\n` +
`        COURSE_MODULE_LANGUAGE_BY_ID.set(id, language);\n` +
`        COURSE_MODULE_IDS_BY_LENGTH.push(id);\n` +
`    }));\n` +
`});\n` +
`COURSE_MODULE_IDS_BY_LENGTH.sort((a, b) => b.length - a.length || a.localeCompare(b));\n\n` +
`function getCourseModuleIds(language, level) {\n` +
`    const code = typeof normalizeLanguage === 'function' ? normalizeLanguage(language) : String(language || '');\n` +
`    const normalizedLevel = String(level || '').toUpperCase();\n` +
`    const ids = COURSE_MODULE_INDEX[code] && COURSE_MODULE_INDEX[code][normalizedLevel];\n` +
`    return Array.isArray(ids) ? ids.slice() : [];\n` +
`}\n\n` +
`function getCourseModuleLanguage(moduleOrCardId) {\n` +
`    const identity = String(moduleOrCardId && typeof moduleOrCardId === 'object'\n` +
`        ? (moduleOrCardId.modId || moduleOrCardId.id || '')\n` +
`        : (moduleOrCardId || '')).trim();\n` +
`    if (!identity) return null;\n` +
`    const exact = COURSE_MODULE_LANGUAGE_BY_ID.get(identity);\n` +
`    if (exact) return exact;\n` +
`    const moduleId = COURSE_MODULE_IDS_BY_LENGTH.find(id => identity.startsWith(\`${'${id}'}_\`));\n` +
`    return moduleId ? COURSE_MODULE_LANGUAGE_BY_ID.get(moduleId) : null;\n` +
`}\n\n` +
`if (typeof window !== 'undefined') {\n` +
`    window.COURSE_MODULE_INDEX = COURSE_MODULE_INDEX;\n` +
`    window.getCourseModuleIds = getCourseModuleIds;\n` +
`    window.getCourseModuleLanguage = getCourseModuleLanguage;\n` +
`}\n`;
}

const expected = renderIndex(buildIndex());
if (WRITE_MODE) {
    fs.writeFileSync(OUTPUT, expected, 'utf8');
    console.log(`Índice de cursos atualizado: ${path.relative(ROOT, OUTPUT)}`);
} else {
    assert.ok(fs.existsSync(OUTPUT), 'índice de cursos ausente; execute npm run index:courses');
    assert.equal(fs.readFileSync(OUTPUT, 'utf8'), expected, 'índice de cursos desatualizado; execute npm run index:courses');
    console.log('✓ índice leve contém 497 módulos e está sincronizado com os 19 datasets');
}
