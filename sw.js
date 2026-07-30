const CACHE_NAME = 'japao-academy-v2';

const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './hub_japones.html',
    './hub_ingles.html',
    './html/en-US/curso_ingles.html',
    './database/en-US/data_english_a1.js',
    './database/en-US/data_english_a2.js',
    './database/en-US/data_english_b1.js',
    './database/en-US/data_english_b2.js',
    './html/ja-JP/curso.html',
    './html/ja-JP/hiragana.html',
    './html/ja-JP/katakana.html',
    './html/ja-JP/kanji.html',
    './html/ja-JP/kanji_n5.html',
    './html/ja-JP/kanji_n4.html',
    './html/ja-JP/kanji_n3.html',
    './html/ja-JP/kanji_n2.html',
    './html/ja-JP/kanji_n1.html',
    './html/ja-JP/minigame.html',
    './html/ja-JP/dicionario.html',
    './style.css',
    './app.js',
    './firebase-init.js',
    './manifest.json',
    './database/ja-JP/data_curso_a1.js',
    './database/ja-JP/data_curso_a2.js',
    './database/ja-JP/data_curso_b1.js',
    './database/ja-JP/data_curso_b2.js',
    './database/ja-JP/data_kanji_n5.js',
    './database/ja-JP/data_kanji_n4.js',
    './database/ja-JP/data_kanji_n3.js',
    './database/ja-JP/data_kanji_n2.js',
    './database/ja-JP/data_kanji_n1.js',
    './database/ja-JP/data_hiragana.js',
    './database/ja-JP/data_katakana.js',
    './favicon.png',
    './logo.png',
    'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js',
    'https://unpkg.com/wanakana@5.3.1/wanakana.min.js',
    'https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Noto+Sans+JP:wght@500;700&display=swap'
];

// 1. Instalação do Service Worker & Pre-cache dos recursos estáticos
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('⚡ [Service Worker] Pré-carregando arquivos para suporte offline...');
            return Promise.all(
                ASSETS_TO_CACHE.map((asset) => {
                    return cache.add(asset).catch((err) => {
                        console.warn(`[Service Worker] Falha ao cachear recurso: ${asset}`, err);
                    });
                })
            );
        }).then(() => self.skipWaiting())
    );
});

// 2. Ativação do Service Worker & Limpeza de Caches Antigos
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log('🧹 [Service Worker] Removendo cache antigo:', key);
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// 3. Estratégia de Fetch: Cache First com Network Fallback e Atualização Dinâmica
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                // Tenta revalidar em segundo plano sem bloquear a resposta do cache
                fetch(event.request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, networkResponse.clone());
                        });
                    }
                }).catch(() => { });

                return cachedResponse;
            }

            return fetch(event.request).then((networkResponse) => {
                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
                    return networkResponse;
                }

                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });

                return networkResponse;
            }).catch(() => {
                // Fallback defensivo para navegação HTML offline
                if (event.request.mode === 'navigate' || (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html'))) {
                    return caches.match('./index.html') || caches.match('./');
                }
            });
        })
    );
});
