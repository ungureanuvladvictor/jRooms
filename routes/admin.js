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
						return;
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

exports.delete_users = function(req, res) { //I will leave the current user, otherwise we run into problems.
	var token = req.cookies.token;
	User.$where('this.token === token').remove().exec();
}

exports.reset_users = function(req, res) {

	//console.log(req);
	exports.delete_users(req, res);
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
				if(config.admins.indexOf(item.username) > -1)
				{

				}
				else
				{
					return;
				}
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

exports.set_tall_people = function(req, res) {
	var tall = req.params.tallPeople;
	var modified = 0;
	tall.forEach(function(item){
		User.update({username:item}, {is_tall: true}, function(err, numAffected) { 
			modified++;
		});
	});
	if(modified !== tall.length) {
		res
		.status(500)
		.send(modified);
	} else {
		res
		.status(200)
		.send(modified);
	}
}