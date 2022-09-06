var http = require('http');
http.createServer(function(req, res){
res.write("Hello Node in Youtube 2");
res.end();
}).listen(8000);