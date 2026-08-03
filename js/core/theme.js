// ======================================
// MÓDULO CORE - THEME
// ======================================

function applySavedTheme() {
    const savedTheme = localStorage.getItem('ja_theme');
    const isDark = savedTheme === 'dark';

    if (isDark) {
        document.documentElement.classList.add('dark-theme');
        if (document.body) document.body.classList.add('dark-theme');
    } else {
        document.documentElement.classList.remove('dark-theme');
        if (document.body) document.body.classList.remove('dark-theme');
    }

    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.textContent = isDark ? '☀️' : '🌙';
    });
}

function toggleTheme() {
    const isDark = !document.documentElement.classList.contains('dark-theme');

    if (isDark) {
        document.documentElement.classList.add('dark-theme');
        if (document.body) document.body.classList.add('dark-theme');
    } else {
        document.documentElement.classList.remove('dark-theme');
        if (document.body) document.body.classList.remove('dark-theme');
    }

    localStorage.setItem('ja_theme', isDark ? 'dark' : 'light');

    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.textContent = isDark ? '☀️' : '🌙';
    });

    if (typeof window.inicializarTodosOsCanvases === 'function') {
        window.inicializarTodosOsCanvases();
    } else if (typeof inicializarTodosOsCanvases === 'function') {
        inicializarTodosOsCanvases();
    }
}

function setupSmoothTransitions() {
    const navLinks = document.querySelectorAll('.course-btn, .home-btn');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetUrl = this.getAttribute('href');
            if (targetUrl && !targetUrl.startsWith('#') && targetUrl !== '') {
                e.preventDefault();
                document.body.classList.add('fade-out-page');
                setTimeout(() => { window.location.href = targetUrl; }, 280);
            }
        });
    });
}

function initializeTheme() {
    console.log("[BOOT] initializeTheme");
    applySavedTheme();
    setupSmoothTransitions();
}


// Exposição explícita no objeto window
if (typeof window !== 'undefined') {
    window.applySavedTheme = applySavedTheme;
    window.toggleTheme = toggleTheme;
    window.setupSmoothTransitions = setupSmoothTransitions;
    window.initializeTheme = initializeTheme;
}
