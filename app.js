var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

/*app.get('/', function(req, res) {
    res.send('Hello World');
})*/

app.get('/:timestamp', function(req, res) {
   //var test = req.query('timestamp');
    res.send(req.params.timestamp + 'this is what you sent.') 
})

app.listen(port, function() {
    console.log('FCC_Timestamp is running on port: ' + port);
})