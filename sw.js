const CACHE_PREFIX = 'idiomas-academy-';
const CACHE_NAME = 'idiomas-academy-v42';

const ASSETS_TO_CACHE = [
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
    './html/es-ES/espanhol_curso.html',
    './html/es-ES/espanhol_falsos_amigos.html',
    './html/es-ES/espanhol_minigame_conjugacao.html',
    './html/es-ES/espanhol_dicionario.html',
    './database/es-ES/data_espanhol_a1.js',
    './database/es-ES/data_espanhol_a2.js',
    './database/es-ES/data_espanhol_b1.js',
    './database/es-ES/data_espanhol_b2.js',
    './database/es-ES/data_espanhol_dicionario.js',
    './database/es-ES/data_dicionario_index.js',
    './database/es-ES/data_espanhol_falsos_amigos.js',
    './database/es-ES/data_espanhol_fonetica_recursos.js',
    './html/en-US/curso_ingles.html',
    './database/en-US/data_english_a1.js',
    './database/en-US/data_english_a2.js',
    './database/en-US/data_english_b1.js',
    './database/en-US/data_english_b2.js',
    './database/en-US/data_dicionario_index.js',
    './html/ja-JP/curso.html',
    './html/ja-JP/meu-progresso.html',
    './meu-progresso.html',
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
    './html/ja-JP/escuta.html',
    './html/ja-JP/leitura.html',
    './html/ja-JP/gramatica.html',
    './html/ja-JP/escrita.html',
    './html/ja-JP/jlpt.html',
    './style.css',
    './japanese-experience.css',
    './app.js',
    './js/core/config.js',
    './js/core/constants.js',
    './js/core/course-index.js',
    './js/core/state.js',
    './js/core/utils.js',
    './js/core/theme.js',
    './js/core/audio.js',
    './js/core/toast.js',
    './js/core/storage.js',
    './js/core/dom.js',
    './js/core/events.js',
    './js/core/bootstrap.js',
    './js/core/study-session.js',
    './js/course/moduleNormalizer.js',
    './js/course/tabs.js',
    './js/course/course.js',
    './js/course/quiz.js',
    './js/srs/deck.js',
    './js/srs/engine.js',
    './js/srs/review.js',
    './js/game/xp.js',
    './js/game/ranking.js',
    './js/game/minigames.js',
    './js/core/dictionary.js',
    './js/kanji/kanji-canvas.js',
    './js/kanji/kanji-render.js',
    './js/kanji/romaji-draft.js',
    './js/japanese/listening.js',
    './js/japanese/reading.js',
    './js/japanese/grammar.js',
    './js/japanese/writing.js',
    './js/japanese/jlpt.js',
    './js/phrasal/navigation.js',
    './js/phrasal/render.js',
    './js/pronunciation/render.js',
    './js/pronunciation/speech-recognition.js',
    './js/pronunciation/quiz.js',
    './js/falsos_amigos/falsos_amigos.js',
    './js/minigame/minigame_conjugacao.js',
    './js/minigame/minigame_russo.js',
    './js/dashboard/meu-progresso.js?v=31',
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
    './database/ja-JP/data_dicionario_index.js',
    './database/ja-JP/data_minigame_kanji_index.js',
    './database/ja-JP/data_escuta_index.js',
    './database/ja-JP/data_leitura_index.js',
    './database/ja-JP/data_gramatica_index.js',
    './database/ja-JP/data_escrita_index.js',
    './database/ja-JP/data_jlpt_pratica_index.js',
    './favicon.png',
    './favicon-512.png',
    './logo.png'
];

const OPTIONAL_REMOTE_ASSETS = [
    'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js',
    'https://unpkg.com/wanakana@5.3.1/wanakana.min.js',
    'https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Noto+Sans+JP:wght@500;700&display=swap'
];

// 1. Instalação do Service Worker & Pre-cache dos recursos estáticos
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('⚡ [Service Worker] Pré-carregando arquivos para suporte offline...');
            return cache.addAll(ASSETS_TO_CACHE).then(() => Promise.all(
                OPTIONAL_REMOTE_ASSETS.map((asset) => {
                    return cache.add(asset).catch((err) => {
                        console.warn(`[Service Worker] Recurso remoto opcional indisponível: ${asset}`, err);
                    });
                })
            ));
        }).then(() => self.skipWaiting())
    );
});

// 2. Ativação do Service Worker & Limpeza de Caches Antigos
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME && key.startsWith(CACHE_PREFIX)) {
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
        caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
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
                const requestUrl = new URL(event.request.url);
                if (requestUrl.pathname.endsWith('/html/it-IT/italiano_dicionario.html')) {
                    return new Response(
                        '<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Dicionário italiano indisponível offline</title><body style="font-family:system-ui;max-width:42rem;margin:10vh auto;padding:1.5rem;line-height:1.6"><h1>📖 Abra o dicionário online primeiro</h1><p>O dicionário italiano é armazenado sob demanda. Conecte-se à internet, abra esta página uma vez e depois ela ficará disponível offline.</p><p><a href="../../hub_italiano.html">Voltar ao Italiano</a></p></body></html>',
                        { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
                    );
                }
                // Fallback defensivo para navegação HTML offline
                if (event.request.mode === 'navigate' || (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html'))) {
                    return caches.match('./index.html') || caches.match('./');
                }
            });
        })
    );
});
