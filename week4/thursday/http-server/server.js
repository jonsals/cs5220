const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    // create a get route for / on localhost:8888
    if (req.method === 'GET' && req.url === '/') {
        const { url, method, headers } = req;
        console.log(url);
        console.log(method);
        console.log(headers);
        res.end('Hello World!');
    }
    // create a get route for /json on localhost:8888
    else if (req.method === 'GET' && req.url === '/json') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ hello: 'world' }));
    }
});

// start our server on localhost:8888
server.listen(8888, 'localhost');
