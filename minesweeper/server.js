const http = require('http-server');

const server = http.createServer({
    root: './',
    port: 8080,
    open: true,
});

server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});