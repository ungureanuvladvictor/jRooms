var config = require('./config.json');
var user = require('./routes/user');
var database = require('./database');

var express = require('express');
var cookieParser = require('cookie-parser');
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

app.get('/user/logout/', user.logout);
app.get('/user/me', user.me);
app.post('/user/login', user.login);
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

app.get('/user/all', user.all);

app.get('/user/updateAll', function(req, res) { // I know I know it's get. We'll fix this later.
	var updated = user.update_users();
	res.send(updated);
});

var server = app.listen(3000, function() {
  	console.log("Listening at port " + server.address().port + "...");
});