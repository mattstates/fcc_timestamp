var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/:timestamp', function(req, res) {
    
    var time = new Date(req.params.timestamp);
    time = time.toUTCString(); //output EX: "Sat, 10 Feb 2007 08:00:00 GMT"
    
    var utcTime = new Date();
    utcTime = utcTime.setTime(req.params.timestamp); //output EX: 1199347200000
   
    if(time === 'Invalid Date') {
        time = new Date(utcTime);
        time = time.toUTCString();
    }
    
    if(!utcTime) {
        utcTime = Date.parse(time);
    }
    
    var output = {
        'Time': time,
        'UTC': utcTime
    }
    
    res.send(output);
})

app.listen(port, function() {
    console.log('FCC_Timestamp is running on port: ' + port);
})