var config = require('./config.json');
var login = require('./routes/login');
var user = require('./routes/user');
var database = require('./database');

var express = require('express');
var cookieParser = require('cookie-parser');
var request = require('request');
var app = express();

app.use(express.static(__dirname + '/static'));

database.load();

app.use(cookieParser());

app.use(function(req, res, next) {
	console.log(req.cookies);
	if(!req.cookies || !req.cookies.token) {
		res.send(401, "Invalid access token");
	}
	User.find({token: req.cookies.token}, function(err, data) {
		if(data == 'undefined' || data == []) {
			console.log(data);
			next();
		}
		else {
			var url = "https://api.jacobs-cs.club/user/me";
			request.cookie('token=' + req.cookies.token);
			request({
					method: 'GET',
					uri: url,
					headers: {'Cookie' : 'token=' + req.cookies.token}
				}
			, function(err, response, body) {
				if(response == 'undefined') {
					res.send("Error");
				}
				console.log(response);
				var user = JSON.parse(response.body);
				User.findOne( {username: user.username}, function(err, data) {
					console.log(data);
					console.log(user);
					if(data) {
						data.token = req.cookies.token;
						data.save();
						console.log(data);
						next();
					}
					else
					{
						res.write("Error2");
						res.end();
					}
				});
			});
		}
	});
});

app.post('/user/login/:username/:password', function(req, res) {

	// Get actual values
	var data = req.params;

	res.send(login.login(data.username, data.password));
});
app.get('/logout/:token', function(req, res) {

	// Get actual values
	var data = req.params;

	res.send(login.logout(data.token));
});

app.get('/user/me', function(req, res) {
	var tok = req.cookies.token;
	User.findOne({token: tok}, function(err, data) {
		res.write(JSON.stringify(data));
		res.end();
	});
});

app.post('/user/login', function(req, res) {
	var tok = req.cookies.token;
	User.findOne({token: tok}, function(err, data) {
		res.write(JSON.stringify(data));
		res.end();
	});

});

app.get('/user/points', function(req, res) {

	var filip = {
			name : "Filip",
			surname : "Stankovski",
			nationality : "Macedonia",
			graduation_year : 2017,
			roommates : ["fstankovsk"],
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