var http = require('http');
var fs = require('fs')
http.createServer(function(req, res){
fs.readFile('demo.html', function(err, data){
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.write(data);
    return res.end();
})
}).listen(3306);


var mysql = require('mysql');

var con= mysql.createConnection({

    host: 'localhost',
    user: 'root',
    pass: ' ',
    database: 'node_data'

});

con.connect(function(error){
    if (error) throw error;
    con.query("Select * from user", function(err, result){
        if (err) throw error;
        console.log("Name: ",result[0].Name);
        console.log("Email: ",result[0].Email);
        console.log("Name: ",result[1].Name);
        console.log("Email: ",result[1].Email);

        
    })
    
    // console.log("Connected");
})