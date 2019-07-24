var http = require('http');
var port = process.env.PORT || 8181;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Well hello, world!!!');
}).listen(port);

console.log('Your application is listening on port '+port);
