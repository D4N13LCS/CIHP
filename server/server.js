const http = require('http');
const appServer = require('./appServer');
const server = http.createServer(appServer);
server.listen(4000);
