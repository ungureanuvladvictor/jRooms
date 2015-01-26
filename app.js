var config = require('./config.json');
var login = require('./routes/login');
var user = require('./routes/user');

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/static'));

var mongoose = require('mongoose');
mongoose.connect('mongodb://' + config.dbhost + '/' + config.dbname);

var db = mongoose.connection;
db.on('error', console.error.bind(console, '(!!!) MongoDB connection error:'));
db.once('open', function() { console.log("Connected to MongoDB database at mongodb://" + config.dbhost + '/' + config.dbname + "..."); });

app.get('/login/:username/:password', function(req, res) {

	// Get actual values
	var data = req.params;

	res.send(login.login(data.username, data.password));
});
app.get('/logout/:token', function(req, res) {

	// Get actual values
	var data = req.params;

	res.send(login.logout(data.token));
});

app.get('/user', function(req, res) {
	res.send('GET request to user');
});


app.get('/user/points', function(req, res) {

	var filip = {
			id : 1,
			name : "Filip",
			surname : "Stankovski",
			nationality : "Macedonia",
			graduation_year : 2017,
			roommates : [1],
			username : "fstankovsk",
			current_college : "C3",
			next_college : "C3"
		};

	var response = user.points(filip);
	res.send(JSON.stringify(response));
});

var server = app.listen(3000, function() {
  	console.log("Listening at port " + server.address().port + "...");
});