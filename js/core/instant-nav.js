// =======================================================
// IDIOMAS ACADEMY - INSTANT NAVIGATION & PREFETCH ENGINE
// =======================================================
(function () {
    'use strict';
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    const prefetchedUrls = new Set();
    function prefetchUrl(url) {
        if (!url || prefetchedUrls.has(url)) return;
        if (url.startsWith('#') || url.startsWith('javascript:') || url.startsWith('mailto:') || url.startsWith('tel:')) return;

        try {
            const targetUrl = new URL(url, window.location.href);
            if (targetUrl.origin !== window.location.origin) return; // Apenas rotas internas

            prefetchedUrls.add(targetUrl.href);

            // 1. Tenta prefetch via tag link nativa
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = targetUrl.href;
            link.as = 'document';
            document.head.appendChild(link);
            // 2. Pré-aquece no Service Worker em segundo plano (baixa prioridade)
            if (window.fetch) {
                fetch(targetUrl.href, { priority: 'low', cache: 'force-cache' }).catch(() => {});
            }
        } catch (e) { }
    }
    function onPointerEnter(e) {
        const target = e.target && e.target.closest ? e.target.closest('a[href], [onclick*="location"], .card-idioma, .card-nivel, .hub-btn, .home-btn') : null;
        if (!target) return;
        if (target.tagName === 'A' && target.href) {
            prefetchUrl(target.href);
        } else if (target.getAttribute('onclick')) {
            const match = target.getAttribute('onclick').match(/location\.href\s*=\s*['"]([^'"]+)['"]/);
            if (match && match[1]) prefetchUrl(match[1]);
        }
    }
    // Escuta no nível do documento com opções passivas para zero atraso de scroll
    document.addEventListener('mouseover', onPointerEnter, { passive: true });
    document.addEventListener('touchstart', onPointerEnter, { passive: true });
    document.addEventListener('focusin', onPointerEnter, { passive: true });
    console.log('⚡ [InstantNav] Motor de navegação instantânea ativo.');
})();
