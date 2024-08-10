/*
Name: Mark Erolle D. Quiambao
Section: WD-303
*/ 

var express = require('express');
var app = express();    

app.use(express.static('public'));

app.get('/', function(req, res){
    res.send('Name: Mark Erolle D. Quiambao');
})

var server = app.listen(8085, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%d", host, port)
})