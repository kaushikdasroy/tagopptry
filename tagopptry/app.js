var express = require('express');
var app = express();

var port = process.env.PORT;
console.log ('1-server is running on port :'+port);
app.listen (port, function (err){ console.log ('App- server is running on port:'+ port)});