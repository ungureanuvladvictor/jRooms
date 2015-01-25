var config = require('./config.json');

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/static'));

var mongoose = require('mongoose');
mongoose.connect('mongodb://' + config.dbhost + '/' + config.dbname);

var db = mongoose.connection;
db.on('error', console.error.bind(console, '(!!!) MongoDB connection error:'));
db.once('open', function() { console.log("Connected to MongoDB database at mongodb://" + config.dbhost + '/' + config.dbname + "..."); });

// app.get('/user', function(req, res) {
// 	res.send('GET request to user');
// })

var server = app.listen(3000, function() {
  	console.log("Listening at port " + server.address().port + "...");
});