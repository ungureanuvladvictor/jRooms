var config = require('../config.json');
var request = require('request');

exports.authorize = function(res, token, next) {

	var url = "https://api.jacobs-cs.club/user/me";
	request.cookie('token=' + token);
	request({
		method: 'GET',
		uri: url,
		headers: {'Cookie' : 'token=' + token}
	}, function(err, response, body) {
		var user = JSON.parse(response.body);
		User.update({username: user.username}, {token: token}, function(err, numAffected) {
			if(err) {
				res
				.status(404)
				.send("null");
			} else {
				User.findOne({username: user.username}, function(err, data) {
					if(err) {
						res
						.status(404)
						.send("What the fuck just happened?");
					}

					if(config.admins.indexOf(user.username) > -1) {
						next();
					} else {
						res
						.status(403)
						.send(null);
					}
				});
			}
		});
	});
}

exports.reset_users = function(req, res) {

	//console.log(req);
	User.find({}).remove().exec();
	var url = "https://api.jacobs-cs.club/user/";
	var token = req.cookies.token;
	request.cookie('token=' + token);
	request({
		method: 'GET',
		uri: url,
		headers: {'Cookie' : 'token=' + token}
	}, function(err, response, body) {
		var users = JSON.parse(response.body).data;
		var fin = [];
		users.forEach(function(item){ // I know this is blocking, but I want to return the whole array
			//var item = users[i];
			var this_year = new Date().getFullYear();
			if(item.status !== "undergrad" || item.year <= (this_year - 2000)) {
				return;
			}
			fin.push(item);
			var user = new User({
				name: item.fullName,
				surname: item.lastName,
				username: item.username,
				eid: item.eid,
				nationality: item.nationality,
				graduation_year: item.year,
				current_college: item.college
			});

			user.save();
		});


		res
		.status(200)
		.send(JSON.stringify(fin));
	});
}