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
	if(!req.cookies || !req.cookies.token) {
		res
		.status(403)
		.send("Invalid access token");
	}
	User.find({token: req.cookies.token}, function(err, data) {
		if(!data || data.length === 0)  {
			if(req.originalUrl === "/user/login") {
				next();
			} else {
				res
				.status(401)
				.send("Unauthorized");
			}
		} else {
			next();
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
		if(err) {
			res
			.status(404)
			.send("You don't exist.");
		} else {
			res
			.status(200)
			.send(data);
		}
	});
});

app.post('/user/login', function(req, res) {

	var url = "https://api.jacobs-cs.club/user/me";
	request.cookie('token=' + req.cookies.token);
	request({
		method: 'GET',
		uri: url,
		headers: {'Cookie' : 'token=' + req.cookies.token}
	}, function(err, response, body) {
		var user = JSON.parse(response.body);
		User.update({username: user.username}, {token: req.cookies.token}, function(err, numAffected) {
			if(err || numAffected === 0) {
				res
				.status(404)
				.send(null);
			} else {
				User.findOne({username: user.username}, function(err, data) {
					if(err) {
						res
						.status(404)
						.send("What the fuck just happened?");
					}
					res
					.status(200)
					.send(data);
				});
			}
		});
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
		// console.log(users);
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