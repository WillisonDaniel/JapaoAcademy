'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const SW_PATH = path.join(ROOT, 'sw.js');
const MAX_PRECACHE_BYTES = 12 * 1024 * 1024;

const REQUIRED_OFFLINE = [
    './',
    './index.html',
    './hub_idiomas.html',
    './hub_japones.html',
    './hub_ingles.html',
    './hub_espanhol.html',
    './hub_russo.html',
    './meu-progresso.html',
    './html/ru-RU/russo_curso.html',
    './html/ru-RU/russo_alfabeto.html',
    './html/ru-RU/russo_dicionario.html',
    './html/ru-RU/russo_minigame.html',
    './database/ru-RU/data_curso_russo_a1.js',
    './database/ru-RU/data_curso_russo_a2.js',
    './database/ru-RU/data_curso_russo_b1.js',
    './database/ru-RU/data_curso_russo_b2.js',
    './database/ru-RU/data_russo_cirilico.js',
    './database/ru-RU/data_russo_dicionario.js',
    './database/ru-RU/data_dicionario_index.js',
    './js/minigame/minigame_russo.js',
    './manifest.json',
    './favicon.png',
    './favicon-512.png',
    './logo.png'
];

function normalizeAsset(asset) {
    const withoutQuery = String(asset).split(/[?#]/, 1)[0];
    if (withoutQuery === './' || withoutQuery === '') return './';
    return `./${withoutQuery.replace(/^\.\//, '').replace(/\\/g, '/')}`;
}

function localFile(asset) {
    const normalized = normalizeAsset(asset);
    return normalized === './'
        ? path.join(ROOT, 'index.html')
        : path.join(ROOT, normalized.slice(2));
}

function loadServiceWorker() {
    const listeners = {};
    const context = {
        console: { log() {}, warn() {}, error() {} },
        self: {
            addEventListener(type, handler) { listeners[type] = handler; },
            skipWaiting: async () => {},
            clients: { claim: async () => {} }
        },
        caches: {},
        fetch: async () => { throw new Error('offline'); },
        Promise,
        URL,
        Response: globalThis.Response
    };
    context.globalThis = context;
    vm.createContext(context);
    const source = fs.readFileSync(SW_PATH, 'utf8');
    vm.runInContext(`${source}\n;globalThis.__PWA_EXPORTS = { CACHE_NAME, ASSETS_TO_CACHE, OPTIONAL_REMOTE_ASSETS };`, context, {
        filename: 'sw.js'
    });
    return {
        context,
        listeners,
        CACHE_NAME: context.__PWA_EXPORTS.CACHE_NAME,
        ASSETS_TO_CACHE: Array.from(context.__PWA_EXPORTS.ASSETS_TO_CACHE),
        OPTIONAL_REMOTE_ASSETS: Array.from(context.__PWA_EXPORTS.OPTIONAL_REMOTE_ASSETS)
    };
}

function referencedLocalAssets(htmlAsset) {
    const htmlPath = localFile(htmlAsset);
    const html = fs.readFileSync(htmlPath, 'utf8');
    const pageDirectory = path.dirname(htmlPath);
    const references = [];
    const tagPattern = /<(script|img|link)\b[^>]*(?:src|href)=["']([^"']+)["'][^>]*>/gi;
    let match;
    while ((match = tagPattern.exec(html))) {
        const tag = match[1].toLowerCase();
        const reference = match[2].trim();
        if (!reference || /^(?:https?:|data:|blob:|mailto:|tel:|javascript:|#|\/\/)/i.test(reference)) continue;
        if (tag === 'link') {
            const fullTag = match[0];
            const relation = (fullTag.match(/rel=["']([^"']+)["']/i) || [])[1] || '';
            if (!/(?:stylesheet|manifest|icon)/i.test(relation)) continue;
        }
        const absolute = path.resolve(pageDirectory, reference.split(/[?#]/, 1)[0]);
        const relative = path.relative(ROOT, absolute).replace(/\\/g, '/');
        if (relative.startsWith('../') || path.isAbsolute(relative)) continue;
        references.push(`./${relative}`);
    }
    return [...new Set(references)];
}

async function runLifecycleSimulation(assets, optionalAssets, listeners) {
    const installed = new Set();
    const deleted = [];
    let claimed = false;
    let skipped = false;
    const cache = {
        async addAll(items) { items.forEach(item => installed.add(normalizeAsset(item))); },
        async add(asset) {
            if (optionalAssets.includes(asset)) throw new Error('remote indisponivel');
            installed.add(normalizeAsset(asset));
        },
        async put() {}
    };
    const runtime = loadServiceWorker();
    runtime.context.caches.open = async () => cache;
    runtime.context.caches.keys = async () => ['idiomas-academy-v1', runtime.CACHE_NAME, 'outro-cache'];
    runtime.context.caches.delete = async key => { deleted.push(key); return true; };
    runtime.context.self.skipWaiting = async () => { skipped = true; };
    runtime.context.self.clients.claim = async () => { claimed = true; };

    let installPromise;
    runtime.listeners.install({ waitUntil(value) { installPromise = value; } });
    await installPromise;
    assert.equal(installed.size, new Set(assets.map(normalizeAsset)).size, 'instalacao nao armazenou todo o precache local');
    assert.equal(skipped, true, 'service worker nao solicitou ativacao imediata');

    let activatePromise;
    runtime.listeners.activate({ waitUntil(value) { activatePromise = value; } });
    await activatePromise;
    assert.deepEqual(deleted, ['idiomas-academy-v1']);
    assert.equal(deleted.includes('outro-cache'), false, 'ativacao removeu cache de outra aplicacao');
    assert.equal(claimed, true, 'service worker nao assumiu as paginas abertas');
}

async function main() {
    const { CACHE_NAME, ASSETS_TO_CACHE, OPTIONAL_REMOTE_ASSETS } = loadServiceWorker();
    const normalized = ASSETS_TO_CACHE.map(normalizeAsset);
    const unique = new Set(normalized);

    assert.match(CACHE_NAME, /^idiomas-academy-v\d+$/, 'nome de cache invalido');
    assert.equal(unique.size, normalized.length, 'o precache contem recursos duplicados');

    const missingFiles = ASSETS_TO_CACHE.filter(asset => !fs.existsSync(localFile(asset)));
    assert.deepEqual(missingFiles, [], `recursos ausentes no precache: ${missingFiles.join(', ')}`);

    const totalBytes = [...unique].reduce((sum, asset) => sum + fs.statSync(localFile(asset)).size, 0);
    assert.ok(totalBytes <= MAX_PRECACHE_BYTES,
        `precache de ${(totalBytes / 1024 / 1024).toFixed(2)} MB excede o limite de 12 MB`);

    const missingContract = REQUIRED_OFFLINE.filter(asset => !unique.has(normalizeAsset(asset)));
    assert.deepEqual(missingContract, [], `contrato offline incompleto: ${missingContract.join(', ')}`);

    const htmlAssets = [...unique].filter(asset => asset.endsWith('.html'));
    const missingDependencies = [];
    for (const htmlAsset of htmlAssets) {
        for (const dependency of referencedLocalAssets(htmlAsset)) {
            if (!unique.has(normalizeAsset(dependency))) {
                missingDependencies.push(`${htmlAsset} -> ${dependency}`);
            }
        }
    }
    assert.deepEqual(missingDependencies, [],
        `dependencias locais de paginas precacheadas nao estao no cache:\n${missingDependencies.join('\n')}`);

    await runLifecycleSimulation(ASSETS_TO_CACHE, OPTIONAL_REMOTE_ASSETS);

    console.log(`\u2713 PWA: ${unique.size} recursos locais, ${(totalBytes / 1024 / 1024).toFixed(2)} MB`);
    console.log('\u2713 contrato offline: shell, Dashboard e area russa completos');
    console.log('\u2713 instalacao tolera falhas remotas e ativacao preserva caches de outras aplicacoes');
}

main().catch(error => {
    console.error(`\u2717 ${error.message}`);
    process.exitCode = 1;
});
