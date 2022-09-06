const http= require('http');
const port = 3900;

const server= http.createServer(function(req, res){
   res.write("Heelo node");
   res.end();
     
    })

    server.listen(port, function(er){
        if(er){
            console.log("error");
        }
        else{
            console.log("Server is listening to port: "+ port);
        }
    })