var express = require('express');
var app = express();

var port = process.env.PORT;

app.get('/', function(req,res){
    res.send('Hello World');
});

app.get('/routing', function(req, res){
    res.send('Hello Routing');
});

console.log ('1-server is running on port :'+port);
app.listen (port, function (err){ console.log ('App- server is running on port:'+ port)});