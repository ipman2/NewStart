const http = require('http');
const FRONTEND = process.env?.domain || "localhost"
const server = http.createServer(function (req, res) {
    if (req.url == '/bonusPoint') {
        res.setHeader('Set-Cookie', `c1=insecureToken; domain=careline.${FRONTEND}; path=/bonusPoint; Secure; HttpOnly;`);
        res.setHeader('Access-Control-Allow-Origin', `${req.headers.origin}`);
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200, {'Access-Control-Allow-Credentials': true, 'Access-Control-Allow-Headers': 'content-type'});
        res.end();
    } else {
        res.end('Invalid Request!');
    }
});
server.listen(4201);
console.log(`Serving: 4201`);
