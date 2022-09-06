var http = require('http');
var data = [
    {firstname: 'anil', lastname:'Kumar', age: 65},
    {firstname: 'Naveed', lastname:'Abbas', age: 65},
    {firstname: 'Zeeshan', lastname:'Noor', age: 65}
]
http.createServer(function(req, res){
    res.writeHead(200,'Content-Type','application/json')
res.write(JSON.stringify(data));
res.end();
}).listen(3900);
