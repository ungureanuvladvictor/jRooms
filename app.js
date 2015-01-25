var express = require('express');
var app = express();
app.use(express.static(__dirname + '/static'));

var server = app.listen(3000, function() {
  	console.log("Listening at port " + server.address().port + "...");
});