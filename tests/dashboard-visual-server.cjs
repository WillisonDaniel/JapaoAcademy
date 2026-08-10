const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const PORT_ARGUMENT = process.argv.find(argument => argument.startsWith('--port='));
const PORT = Math.max(1, Number(PORT_ARGUMENT && PORT_ARGUMENT.split('=')[1]) || Number(process.env.IDIOMAS_QA_PORT) || 4173);
const CHECK_MODE = process.argv.includes('--check');

const MIME_TYPES = {
    '.css': 'text/css; charset=utf-8',
    '.html': 'text/html; charset=utf-8',
    '.ico': 'image/x-icon',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.mp3': 'audio/mpeg',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.webmanifest': 'application/manifest+json; charset=utf-8'
};

function createFixtureScript() {
    return `<script data-dashboard-qa-fixture>
(() => {
    const user = { uid: 'qa-dashboard', displayName: 'Alex QA', email: 'qa@idiomas.local' };
    const dateKey = offset => {
        const value = new Date();
        value.setHours(12, 0, 0, 0);
        value.setDate(value.getDate() + offset);
        return \`${'${value.getFullYear()}'}-${'${String(value.getMonth() + 1).padStart(2, \'0\')}'}-${'${String(value.getDate()).padStart(2, \'0\')}'}\`;
    };
    const isoAt = (date, hour) => new Date(\`${'${date}'}T${'${String(hour).padStart(2, \'0\')}'}:00:00\`).toISOString();
    const languages = ['ja-JP', 'en-US', 'es-ES', 'ru-RU', 'it-IT'];
    const activities = ['course', 'quiz', 'srs', 'minigame'];
    const sessions = [];
    const dailyAggregates = {};
    const activityByDate = {};
    const studySecondsByDate = {};
    const studyMinutesByDate = {};
    const srsHistory = [];

    for (let index = 0; index < 12; index++) {
        const date = dateKey(-index);
        const language = languages[index % languages.length];
        const activityType = activities[index % activities.length];
        const activeSeconds = 720 + (index % 4) * 180;
        const sessionId = \`qa-session-${'${index}'}\`;
        sessions.push({
            id: sessionId, userId: user.uid, date, startedAt: isoAt(date, 18), endedAt: isoAt(date, 19),
            activeSeconds, language, activityType, contentId: \`${'${language}'}-fixture-${'${index}'}\`,
            interactionCount: 6 + index, activityCount: 2 + (index % 3), xpEarned: 25 + index, endReason: 'completion'
        });
        dailyAggregates[date] = {
            sessionIds: [sessionId], activeSeconds, activities: 2 + (index % 3), interactions: 6 + index,
            xpEarned: 25 + index, sessionCount: 1, reviews: 2, correctCount: index % 3 === 0 ? 1 : 2,
            errorCount: index % 3 === 0 ? 1 : 0, languages: { [language]: activeSeconds },
            activityTypes: { [activityType]: activeSeconds }, updatedAt: isoAt(date, 19)
        };
        activityByDate[date] = dailyAggregates[date].activities;
        studySecondsByDate[date] = activeSeconds;
        studyMinutesByDate[date] = activeSeconds / 60;
        srsHistory.push({
            id: \`qa-review-${'${index}'}\`, timestamp: isoAt(date, 20), date, userId: user.uid,
            language, deckType: ['a1', 'a2', 'b1', 'b2'][index % 4], cardId: \`qa-card-${'${index}'}\`,
            contentLabel: \`Revisão fixture ${'${index + 1}'}\`, quality: index % 3 === 0 ? 1 : 4,
            result: index % 3 === 0 ? 'error' : 'correct', previousInterval: 1, newInterval: 3,
            nextDueDate: Date.now() + 86400000, sessionId
        });
    }

    const dashboardData = {
        version: 4, dailyGoalMinutes: 20, preferenceUpdatedAt: new Date().toISOString(),
        firstAccessDate: dateKey(-20), activityByDate, studySecondsByDate, studyMinutesByDate,
        dailyAggregates, lifetimeTotals: { activeSeconds: 12600, sessions: 12, activities: 36, interactions: 138, xpEarned: 366 },
        sessions, srsHistory, updatedAt: new Date().toISOString()
    };

    localStorage.clear();
    localStorage.setItem('ja_nome_usuario', 'Alex QA');
    localStorage.setItem('ja_user_xp', '2480');
    localStorage.setItem('ja_streak_data', JSON.stringify({ count: 12, best: 18, lastActiveDate: dateKey(0) }));
    localStorage.setItem('japao_academy_progress', JSON.stringify({
        nivelAtual: 'B2',
        modulosConcluidos: ['a1_mod_01', 'a1_mod_02', 'en_a1_mod_01', 'en_a1_mod_02', 'es_a1_mod_1', 'es_a1_mod_2', 'ru_a1_mod_01', 'ru_a1_mod_02', 'it_a1_mod_01', 'it_a1_mod_02'],
        modulosDesbloqueados: ['a1_mod_03', 'en_a1_mod_03', 'es_a1_mod_3', 'ru_a1_mod_03', 'it_a1_mod_03']
    }));
    localStorage.setItem('ja_dashboard_data_qa-dashboard', JSON.stringify(dashboardData));
    localStorage.setItem('cyrillic_mod_done_1', 'true');
    localStorage.setItem('cyrillic_mod_done_2', 'true');
    const dueDate = Date.now() - 60000;
    [['ja', 'ja-JP'], ['en', 'en-US'], ['es', 'es-ES'], ['ru', 'ru-RU'], ['it', 'it-IT']].forEach(([prefix, language]) => {
        localStorage.setItem(\`${'${prefix}'}_srs_a1_deck\`, JSON.stringify([{ id: \`qa-${'${prefix}'}-due\`, language, dueDate }]));
    });

    window.__IDIOMAS_QA_FIXTURE__ = { user, languages, dates: Object.keys(dailyAggregates).sort() };
    window.jaFirebase = {
        auth: { currentUser: user },
        onAuthStateChanged(_auth, callback) {
            queueMicrotask(() => callback(user));
            return () => {};
        }
    };
})();
</script>`;
}

function transformDashboard(html) {
    const firebaseTag = '<script type="module" src="firebase-init.js"></script>';
    assert.ok(html.includes(firebaseTag), 'tag do Firebase não encontrada na página real do Dashboard');
    return html.replace(firebaseTag, createFixtureScript());
}

function resolveFile(pathname) {
    const relative = decodeURIComponent(pathname === '/' ? '/index.html' : pathname).replace(/^[/\\]+/, '');
    const absolute = path.resolve(ROOT, relative);
    if (absolute !== ROOT && !absolute.startsWith(`${ROOT}${path.sep}`)) return null;
    return absolute;
}

if (CHECK_MODE) {
    const transformed = transformDashboard(fs.readFileSync(path.join(ROOT, 'meu-progresso.html'), 'utf8'));
    assert.match(transformed, /data-dashboard-qa-fixture/);
    assert.match(transformed, /ja_dashboard_data_qa-dashboard/);
    assert.match(transformed, /\['ja-JP', 'en-US', 'es-ES', 'ru-RU', 'it-IT'\]/);
    assert.doesNotMatch(transformed, /src="firebase-init\.js"/);
    console.log('✓ servidor de QA injeta autenticação e dados determinísticos sem alterar a página de produção');
} else {
    const server = http.createServer((request, response) => {
        const url = new URL(request.url, `http://${request.headers.host || `127.0.0.1:${PORT}`}`);
        const isQaDashboard = url.pathname.endsWith('/qa-dashboard.html');
        const absolute = resolveFile(isQaDashboard ? '/meu-progresso.html' : url.pathname);
        if (!absolute) {
            response.writeHead(403).end('Forbidden');
            return;
        }
        fs.readFile(absolute, (error, content) => {
            if (error) {
                response.writeHead(error.code === 'ENOENT' ? 404 : 500).end(error.code === 'ENOENT' ? 'Not Found' : 'Internal Server Error');
                return;
            }
            let body = content;
            if (isQaDashboard) {
                body = Buffer.from(transformDashboard(content.toString('utf8')), 'utf8');
            }
            response.writeHead(200, {
                'Content-Type': MIME_TYPES[path.extname(absolute).toLowerCase()] || 'application/octet-stream',
                'Cache-Control': 'no-cache'
            });
            response.end(body);
        });
    });
    server.listen(PORT, '127.0.0.1', () => {
        console.log(`QA Dashboard disponível em http://127.0.0.1:${PORT}/qa-dashboard.html`);
    });
}
