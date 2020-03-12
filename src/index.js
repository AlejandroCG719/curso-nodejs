var http = require('http');
var  {info,error}= require('./modules/my-log');
var consts = require('./utils/consts');
var firebase = require('../libs/firebase');

var server = http.createServer(function (request,response) {
    if (request.url=== '/'){
        response.writeHead(200, {"Conten-Type": 'text/html'});
        response.write('<html><body> <p>HOME PAGE</p></body></html>');
        response.end();
    }else if (request.url === '/exit'){
        response.writeHead(200, {"Conten-Type": 'text/html'});
        response.write('<html><body> <p>BYE</p></body></html>');
        response.end();
    }else if (request.url === '/info'){
        var result = info(request.url);
        response.writeHead(200, {"Conten-Type": 'text/html'});
        response.write(result);
        response.end();
    }else if (request.url === '/error') {
        var result = error(request.url);
        response.writeHead(200, {"Conten-Type": 'text/html'});
        response.write(result);
        response.end();
    }else{
        response.writeHead(404, {"Conten-Type": 'text/html'});
        response.write('<html><body> <p>NOT FOUND</p></body></html>');
        response.end();
    }

});
server.listen(4000);
console.log("running on 4000");