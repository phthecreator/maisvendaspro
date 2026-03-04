const http = require('http');

const PORT = 3001;

const VALID_LICENSE_RESPONSE = {
    valid: true,
    features: [
        'squads',
        'memory',
        'metrics',
        'integrations',
        'flow',
        'knowledge',
        'api',
        'web',
        'voice',
        'vision'
    ],
    seats: {
        used: 1,
        max: 999
    },
    expiresAt: new Date(new Date().setFullYear(new Date().getFullYear() + 10)).toISOString(), // 10 years from now
    cacheValidDays: 365,
    gracePeriodDays: 30
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, HEAD');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // Parse body
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const responseData = { ...VALID_LICENSE_RESPONSE };

        // Add activation specific fields
        if (req.url === '/v1/license/activate') {
            try {
                const input = JSON.parse(body);
                responseData.key = input.key || 'PRO-LOCAL-KEY';
                responseData.activatedAt = new Date().toISOString();
            } catch (e) {
                // ignore
            }
        }

        // Endpoints
        if (req.url === '/health' || req.method === 'HEAD') {
            res.writeHead(200);
            res.end('OK');
            return;
        }

        if (req.url.startsWith('/v1/license/')) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(responseData));
            return;
        }

        res.writeHead(404);
        res.end('Not Found');
    });
});

server.listen(PORT, () => {
    console.log(`License Server running at http://localhost:${PORT}`);
});
