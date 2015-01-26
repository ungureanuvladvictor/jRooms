var config = require('./config.json');
var login = require('./routes/login');
var user = require('./routes/user');
var database = require('./database');

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/static'));

database.load();

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

	res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
	var response = user.points(filip);
	res.write(JSON.stringify(response));
	res.end();
});

app.get('/user/all', function(req, res) {
	User.find({}, function(err, users) {
		console.log(users);
		var result = [];
		users.forEach(function(user) {
			result.push(user);
		});
		res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
		res.write(JSON.stringify(result));
		res.end();
	});
});

app.get('/user/updateAll', function(req, res) { // I know I know it's get. We'll fix this later.
	res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
	res.write(user.update_users());
	res.end();
});

var server = app.listen(3000, function() {
  	console.log("Listening at port " + server.address().port + "...");
});