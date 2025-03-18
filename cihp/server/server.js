const http = require('http');
const appServer = require('./appServer').app;
const server = http.createServer(appServer);
server.listen(4000);
