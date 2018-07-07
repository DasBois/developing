var express = require('express');

var app = new express();


var port = 3000;


app.get('/data', function(req, res) {
    res.sendFile(path.join)
})

app.listen(port, function(){
    console.log('listening on port', port)
})
