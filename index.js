const http= require('http');
const hostname= '127.0.0.1';
const port= 3000; 

http.createServer(function(req, res){
    res.writeHead(200,'Content-Type','application/json')
res.write(JSON.stringify(data));
res.end();
}).listen(hostname, port);