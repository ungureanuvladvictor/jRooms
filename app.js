var config = require('./config.json');
var user = require('./routes/user');
var admin = require('./routes/admin');
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
	if(req.originalUrl.indexOf("/admin/") === 0 ) {
		admin.authorize(res, req.cookies.token, next);
	} else {
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
	}
});

app.get('/user/me', user.me);
app.get('/user/points', user.points);
app.get('/admin/all', user.all);

app.get('/admin/resetUsers', admin.reset_users);
app.get('/user/resetUsers', user.reset_users);
app.post('/user/login', user.login);
app.post('/user/logout/', user.logout);
app.post('/user/addRoommate/:roommate', user.add_roommate);
app.post('/user/confirmRoommate/:roommate', user.confirm_roommate);

var server = app.listen(3000, function() {
  	console.log("Listening at port " + server.address().port + "...");
});