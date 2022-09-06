var http = require('http');
var uc= require('upper-case')
http.createServer(function(req, res){
res.writeHead(200, {'Content-Type':'text/html'});
res.write(uc.upperCase ("Node uppercase Raza SHarma"));
res.end();

}).listen(4000);
console.log("hello");