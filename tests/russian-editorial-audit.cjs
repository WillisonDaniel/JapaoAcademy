const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.join(ROOT, 'tests', 'RUSSIAN_EDITORIAL_OCCURRENCES.md');
const WRITE_MODE = process.argv.includes('--write');

const SOURCES = [
    ['A1', 'database/ru-RU/data_curso_russo_a1.js', 'CURSO_RUSSO_A1_DADOS'],
    ['A2', 'database/ru-RU/data_curso_russo_a2.js', 'CURSO_RUSSO_A2_DADOS'],
    ['B1', 'database/ru-RU/data_curso_russo_b1.js', 'CURSO_RUSSO_B1_DADOS'],
    ['B2', 'database/ru-RU/data_curso_russo_b2.js', 'CURSO_RUSSO_B2_DADOS']
];

// Nomes próprios e marcas cuja grafia latina é intencional nos campos russos.
// Toda nova exceção deve ser revisada e documentada aqui, nunca aceita implicitamente.
const LATIN_PROPER_NAME_ALLOWLIST = Object.freeze([
    'Alex', 'Ana', 'Anna', 'Apple', 'Boris', 'Dmitry', 'Elena', 'Facebook', 'Google',
    'Igor', 'Instagram', 'Irina', 'Ivan', 'Marina', 'Maria', 'Microsoft', 'Mikhail',
    'Natasha', 'Netflix', 'Olga', 'Pavel', 'Sasha', 'Sergei', 'Skype', 'Spotify',
    'Tatiana', 'Telegram', 'Uber', 'Vladimir', 'YouTube', 'Yuri', 'Zoom'
]);

const KNOWN_PORTUGUESE = new Set([
    'agora', 'amanhã', 'amigo', 'aqui', 'boa', 'bom', 'casa', 'cidade', 'como',
    'de', 'dia', 'e', 'ela', 'ele', 'em', 'essa', 'esse', 'esta', 'este', 'eu', 'isso',
    'isto', 'livro', 'meu', 'minha', 'não', 'nao', 'nome', 'obrigado', 'onde', 'ou',
    'para', 'por', 'porque', 'qual', 'que', 'sim', 'sou', 'tarde', 'um', 'uma',
    'você', 'voce'
]);

const TARGET_KEYS = new Set(['word', 'audio', 'sentence']);
const CYRILLIC = /\p{Script=Cyrillic}/u;
const LATIN = /\p{Script=Latin}/u;
const TOKEN_PATTERN = /[\p{L}\p{M}]+(?:[-'][\p{L}\p{M}]+)*/gu;

function loadModules(relativePath, variableName) {
    const source = fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
    const context = vm.createContext({ console: { log() {}, warn() {}, error() {} } });
    vm.runInContext(`${source}\nglobalThis.__modules = ${variableName};`, context, { filename: relativePath });
    return JSON.parse(JSON.stringify(context.__modules));
}

function isTargetField(key, pathParts) {
    if (TARGET_KEYS.has(key)) return true;
    if (key === 'text') return pathParts.some(part => /dialog/i.test(String(part)));
    return pathParts.includes('tokens');
}

function inspectValue(value, metadata, occurrences) {
    if (typeof value !== 'string' || !value.trim()) return;
    const tokens = value.match(TOKEN_PATTERN) || [];
    const reasons = new Map();

    tokens.forEach(token => {
        const hasCyrillic = CYRILLIC.test(token);
        const hasLatin = LATIN.test(token);
        const normalized = token.toLocaleLowerCase('pt-BR');
        if (hasCyrillic && hasLatin) {
            reasons.set(`Token híbrido cirílico/latino: ${token}`, 'erro');
        } else if (hasLatin && KNOWN_PORTUGUESE.has(normalized)) {
            reasons.set(`Português conhecido em campo russo: ${token}`, 'erro');
        } else if (hasLatin && !LATIN_PROPER_NAME_ALLOWLIST.includes(token)) {
            reasons.set(`Token latino isolado para revisão: ${token}`, 'revisão');
        }
    });

    reasons.forEach((severity, reason) => occurrences.push({ ...metadata, value, reason, severity }));
}

function audit() {
    const occurrences = [];
    for (const [level, relativePath, variableName] of SOURCES) {
        const modules = loadModules(relativePath, variableName);
        assert.ok(Array.isArray(modules), `${relativePath}: dataset inválido`);
        modules.forEach((module, moduleIndex) => {
            const moduleId = String(module && module.id || `${level}-${moduleIndex}`);
            const walk = (value, pathParts = []) => {
                if (Array.isArray(value)) {
                    value.forEach((item, index) => walk(item, [...pathParts, index]));
                    return;
                }
                if (!value || typeof value !== 'object') return;
                Object.entries(value).forEach(([key, child]) => {
                    const fieldPath = [...pathParts, key];
                    if (isTargetField(key, fieldPath)) {
                        if (Array.isArray(child)) {
                            child.forEach((item, index) => inspectValue(item, {
                                file: relativePath, module: moduleId, field: [...fieldPath, index].join('.')
                            }, occurrences));
                        } else {
                            inspectValue(child, { file: relativePath, module: moduleId, field: fieldPath.join('.') }, occurrences);
                        }
                    }
                    walk(child, fieldPath);
                });
            };
            walk(module);
        });
    }
    return occurrences;
}

function escapeCell(value) {
    return String(value).replace(/\|/g, '\\|').replace(/\r?\n/g, '<br>').trim();
}

function groupReviewDecisions(occurrences) {
    const groups = new Map();
    occurrences.forEach(item => {
        const key = [item.severity, item.file, item.module, item.value].join('\u0000');
        if (!groups.has(key)) {
            groups.set(key, { ...item, fields: [], reasons: [] });
        }
        const group = groups.get(key);
        if (!group.fields.includes(item.field)) group.fields.push(item.field);
        if (!group.reasons.includes(item.reason)) group.reasons.push(item.reason);
    });
    return [...groups.values()];
}

function renderReport(occurrences) {
    const errors = occurrences.filter(item => item.severity === 'erro').length;
    const reviews = occurrences.filter(item => item.severity === 'revisão').length;
    const decisions = groupReviewDecisions(occurrences);
    const lines = [
        '# Ocorrências da auditoria editorial russa',
        '',
        'Relatório técnico gerado por `npm run audit:russian`. Ele não substitui revisão linguística humana.',
        '',
        `- Erros técnicos bloqueadores: ${errors}`,
        `- Ocorrências para revisão humana: ${reviews}`,
        `- Decisões editoriais únicas: ${decisions.length}`,
        `- Total registrado: ${occurrences.length}`,
        '',
        '## Allowlist documentada de nomes próprios e marcas',
        '',
        LATIN_PROPER_NAME_ALLOWLIST.map(value => `\`${value}\``).join(', '),
        '',
        '## Checklist consolidado para o revisor',
        '',
        'Cada linha reúne repetições do mesmo valor em `sentence`, `audio`, `tokens` ou diálogos. O revisor deve marcar a decisão e aplicar a correção de forma consistente em todos os campos listados.',
        ''
    ];
    if (decisions.length === 0) {
        lines.push('Nenhuma decisão editorial pendente.', '');
    } else {
        lines.push('| Status | Arquivo | Módulo | Motivo(s) | Campos afetados | Valor |');
        lines.push('|---|---|---|---|---:|---|');
        decisions.forEach(item => lines.push(
            `| ☐ Pendente | ${escapeCell(item.file)} | ${escapeCell(item.module)} | ` +
            `${escapeCell(item.reasons.join('; '))} | ${item.fields.length} | ${escapeCell(item.value)} |`
        ));
        lines.push('');
    }
    lines.push(
        '## Ocorrências',
        ''
    );
    if (occurrences.length === 0) {
        lines.push('Nenhuma ocorrência técnica ou editorial foi encontrada.', '');
    } else {
        lines.push('| Severidade | Arquivo | Módulo | Caminho do campo | Motivo | Valor |');
        lines.push('|---|---|---|---|---|---|');
        occurrences.forEach(item => lines.push(
            `| ${escapeCell(item.severity)} | ${escapeCell(item.file)} | ${escapeCell(item.module)} | ` +
            `${escapeCell(item.field)} | ${escapeCell(item.reason)} | ${escapeCell(item.value)} |`
        ));
        lines.push('');
    }
    lines.push('## Limite desta validação', '', 'A ausência de erros bloqueadores indica apenas consistência mecânica dos campos-alvo. O curso não deve ser anunciado como linguisticamente certificado até uma revisão completa por alguém fluente.', '');
    return lines.join('\n');
}

const occurrences = audit();
const report = renderReport(occurrences);
const errors = occurrences.filter(item => item.severity === 'erro');

if (WRITE_MODE) {
    fs.writeFileSync(OUTPUT, report, 'utf8');
    console.log(`Relatório russo atualizado: ${path.relative(ROOT, OUTPUT)} (${errors.length} erros, ${occurrences.length - errors.length} revisões)`);
} else {
    assert.ok(fs.existsSync(OUTPUT), 'relatório russo ausente; execute npm run audit:russian');
    assert.equal(fs.readFileSync(OUTPUT, 'utf8'), report, 'relatório russo desatualizado; execute npm run audit:russian');
    assert.equal(errors.length, 0, `auditoria russa encontrou ${errors.length} erro(s) técnico(s) bloqueador(es)`);
    console.log(`✓ auditoria russa sem erros bloqueadores; ${occurrences.length} ocorrência(s) reservada(s) à revisão humana`);
}
