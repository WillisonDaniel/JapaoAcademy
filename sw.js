const CACHE_NAME = 'japao-academy-v1';

const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './curso.html',
    './hiragana.html',
    './katakana.html',
    './kanji.html',
    './kanji_n5.html',
    './minigame.html',
    './dicionario.html',
    './style.css',
    './app.js',
    './data_curso_a1.js',
    './data_curso_a2.js',
    './data_curso_b1.js',
    './data_curso_b2.js',
    './data_kanji_n5.js',
    './data_hiragana.js',
    './data_katakana.js',
    './favicon.png',
    './logo.png',
    'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js',
    'https://unpkg.com/wanakana@5.3.1/wanakana.min.js',
    'https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Noto+Sans+JP:wght@500;700&display=swap'
];

// Instalação do Service Worker & Pre-cache dos recursos estáticos
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Pré-carregando arquivos para suporte offline...');
            return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
                console.warn('[Service Worker] Alguns arquivos falharam no cache inicial:', err);
            });
        }).then(() => self.skipWaiting())
    );
});

// Ativação do Service Worker & Limpeza de Caches Antigos
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log('[Service Worker] Removendo cache antigo:', key);
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Estratégia: Cache First with Network Fallback
self.addEventListener('fetch', (e) => {
    if (e.request.method !== 'GET') return;

    e.respondWith(
        caches.match(e.request).then((cachedResponse) => {
            if (cachedResponse) {
                fetch(e.request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(e.request, networkResponse.clone());
                        });
                    }
                }).catch(() => { });

                return cachedResponse;
            }

            return fetch(e.request).then((networkResponse) => {
                if (!networkResponse || networkResponse.status !== 200) {
                    return networkResponse;
                }

                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(e.request, responseToCache);
                });

                return networkResponse;
            }).catch(() => {
                if (e.request.headers.get('accept') && e.request.headers.get('accept').includes('text/html')) {
                    return caches.match('./index.html');
                }
            });
        })
    );
});
