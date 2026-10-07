'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const SW_PATH = path.join(ROOT, 'sw.js');
// Orçamento formalizado de precache PWA (5 idiomas):
// - Meta / Target de performance: <= 15.0 MB
// - Hard Cap de CI / Regressão: <= 16.0 MB
const TARGET_PRECACHE_BYTES = 15.0 * 1024 * 1024;
const MAX_PRECACHE_BYTES = 16.0 * 1024 * 1024;

const REQUIRED_OFFLINE = [
    './',
    './index.html',
    './hub_idiomas.html',
    './hub_japones.html',
    './hub_ingles.html',
    './hub_espanhol.html',
    './hub_russo.html',
    './hub_italiano.html',
    './html/it-IT/italiano_curso.html',
    './html/it-IT/italiano_pronuncia.html',
    './html/it-IT/italiano_minigame_conjugacao.html',
    './database/it-IT/data_curso_italiano_a1.js',
    './database/it-IT/data_curso_italiano_a2.js',
    './database/it-IT/data_curso_italiano_b1.js',
    './database/it-IT/data_curso_italiano_b2.js',
    './database/it-IT/data_italiano_fonetica_recursos.js',
    './database/it-IT/data_italiano_minigame_conjugacao.js',
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
    './js/core/instant-nav.js',
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
    runtime.context.caches.keys = async () => ['idiomas-academy-v33', runtime.CACHE_NAME, 'outro-cache'];
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
    assert.deepEqual(deleted, ['idiomas-academy-v33']);
    assert.equal(deleted.includes('outro-cache'), false, 'ativacao removeu cache de outra aplicacao');
    assert.equal(claimed, true, 'service worker nao assumiu as paginas abertas');
}

async function runItalianDictionaryCachingSimulation() {
    const request = {
        method: 'GET',
        url: 'http://idiomas.local/html/it-IT/italiano_dicionario.html',
        mode: 'navigate',
        headers: { get: name => String(name).toLowerCase() === 'accept' ? 'text/html' : null }
    };
    const invokeFetch = async runtime => {
        let responsePromise;
        runtime.listeners.fetch({ request, respondWith(value) { responsePromise = value; } });
        return responsePromise;
    };

    const cold = loadServiceWorker();
    cold.context.caches.match = async () => null;
    cold.context.fetch = async () => { throw new Error('offline'); };
    const explanatory = await invokeFetch(cold);
    assert.equal(explanatory.status, 503);
    assert.match(await explanatory.text(), /Abra o dicionário online primeiro/);

    const warm = loadServiceWorker();
    let cachedResponse = null;
    warm.context.caches.match = async () => cachedResponse ? cachedResponse.clone() : null;
    warm.context.caches.open = async () => ({ async put(_request, response) { cachedResponse = response.clone(); } });
    warm.context.fetch = async () => new Response('<h1>Dicionário italiano carregado</h1>', {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
    const online = await invokeFetch(warm);
    assert.match(await online.text(), /Dicionário italiano carregado/);
    await new Promise(resolve => setImmediate(resolve));
    assert.ok(cachedResponse, 'a primeira abertura online não armazenou o dicionário sob demanda');

    warm.context.fetch = async () => { throw new Error('offline'); };
    const offlineAfterWarmup = await invokeFetch(warm);
    assert.match(await offlineAfterWarmup.text(), /Dicionário italiano carregado/);
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
    const totalMB = totalBytes / 1024 / 1024;
    assert.ok(totalBytes <= MAX_PRECACHE_BYTES,
        `precache de ${totalMB.toFixed(2)} MB excede o hard cap estrito de ${(MAX_PRECACHE_BYTES / 1024 / 1024).toFixed(1)} MB`);
    if (totalBytes > TARGET_PRECACHE_BYTES) {
        console.warn(`[AVISO] Precache de ${totalMB.toFixed(2)} MB ultrapassou a meta de ${(TARGET_PRECACHE_BYTES / 1024 / 1024).toFixed(1)} MB, mas está dentro do hard cap (${(MAX_PRECACHE_BYTES / 1024 / 1024).toFixed(1)} MB).`);
    }

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
    await runItalianDictionaryCachingSimulation();

    console.log(`\u2713 PWA: ${unique.size} recursos locais, ${totalMB.toFixed(2)} MB (meta <= ${(TARGET_PRECACHE_BYTES / 1024 / 1024).toFixed(1)} MB, hard cap <= ${(MAX_PRECACHE_BYTES / 1024 / 1024).toFixed(1)} MB)`);
    assert.equal(unique.has('./html/it-IT/italiano_dicionario.html'), false, 'a página do dicionário italiano deve usar cache sob demanda');
    assert.equal(unique.has('./database/it-IT/data_dicionario_index.js'), false, 'o índice do dicionário italiano deve usar cache sob demanda');

    console.log('\u2713 contrato offline: shell, Dashboard, area russa e Italiano A1-B2 completos');
    console.log('\u2713 instalacao tolera falhas remotas e ativacao preserva caches de outras aplicacoes');
    console.log('\u2713 dicionario italiano explica o primeiro acesso offline e funciona apos aquecimento online');
}

main().catch(error => {
    console.error(`\u2717 ${error.message}`);
    process.exitCode = 1;
});
