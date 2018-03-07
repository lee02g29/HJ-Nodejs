'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('contact\n Hyeji Lee \n Tel : +45 9143 3268 / +81 010 5779 0229');
}).listen(port);
