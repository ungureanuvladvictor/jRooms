var config = require('../config.json');
var request = require('request');
/*
userSchema = new Schema({
		name : String,
		surname : String,
		nationality : String,
		graduation_year : Number,
		roommates : Array,
		pending_outgoing_roommate_requests : Array,
		pending_incoming_roommate_requests : Array,
		username : String,
		current_college : String,
		college_preference : Array,
		next_college : String,
		token: String
	});
*/

exports.login = function(req, res) {

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
}

exports.logout = function(req, res) {

	var tok = req.cookies.token;
	User.update({token:tok}, {token:null}, function(err, numAffected) {
		if(err) {
			res
			.status(404)
			.send("Token not found");
		} else {
			res
			.status(200)
			.send(numAffected);
		}
	});
}

exports.me = function(req, res) {
	var tok = req.cookies.token;
	exports.get_by_token(tok, function(user) {
		if(user) {
			res
			.status(200)
			.send(user);
		} else {
			res
			.status(404)
			.send("You don't exist");
		}
	});
}

exports.points = function(req, res) {
	exports.get_by_token(req.cookies.token, function(user) {
		res
		.status(200)
		.send(exports.calculate(user));
	});
}

exports.calculate = function(user) { // Returns item that contains how many points the user got for each section. Should be externally controlled by a config file later on.

	// Get individual points
	var points = new Object();
	points.magic_number = user.graduation_year - (new Date().getFullYear()) + 1;
	points.year_points = config.year_points * points.magic_number; // 2 points if graduating next year, 1 if in 2 years.
	points.college_spirit = config.college_spirit * (1 - (user.current_college === user.next_college)); // 0.5 points if same college, 0 if in different

	points.individual_points = points.year_points + points.college_spirit;
	points.total = points.individual_points;
	// Get roommate points
	if(!user.roommates && user.roommates !== null) {
		//console.log(user.roommates);
		user.roommates.forEach(function(userId) {
			var roommate = exports.get(userId);
			points.nationality_points = config.nationality_points * (user.nationality != roommate.nationality);
			points.region_points = config.region_points*(exports.get_region(user.id) != exports.get_region(roommate.id));
			points.roommate_points = points.nationality_points + points.region_points;
			points.total += points.roommate_points;
		});
	}
	
	return points;
}

exports.get_region = function(userId) {
	return "SE Europe"; //config file
}

exports.get = function(username) {
	var result = [];
	User.find( {username: username}, function(err, users) {
		result.push(users);
	});
	return result;
}

exports.get_by_token = function(tok, callback) {
	User.findOne( {token: tok}, function(err, user) {
		callback(user);
	});
}

exports.reset_users = function(req, res) {
	var updated = exports.update_users();
	res.send(updated);
}

exports.all = function(req, res) {
	User.find({}, function(err, users) {
		var result = [];
		users.forEach(function(user) {
			result.push(user);
		});
		res.write(JSON.stringify(result));
		res.end();
	});
}

exports.add_roommate = function(req, res) {
	var roommate = req.params.roommate;
	exports.get_by_token(req.cookies.token, function(result) { // Get current user(will need the username later)
		if(result.pending_outgoing_roommate_requests.indexOf(roommate) > -1) { // If the user is already listed as a roommate then return Not Modified
			res
			.status(304)
			.send(result);
			return;
		}
		// Else, update in both places.
		User.update({token: req.cookies.token}, {$push: {pending_outgoing_roommate_requests: roommate}}, function(err, data) {
			if(!data || data === 0) {
				res
				.status(500)
				.send("Unexpected error.");
				return;
			}

			User.update({username: roommate}, {$push: {pending_incoming_roommate_requests: result.username}}, function(error, updateResult) {
				if(!updateResult || updateResult === 0) {
					res
					.status(500)
					.send("Unexpected error.");
					return;
				}
				exports.get_by_token(req.cookies.token, function(user) {
					res
					.status(200)
					.send(user);
				})
			});
		});
	});
}

exports.confirm_roommate = function(req, res) {
	var roommate = req.params.roommate;
	exports.get_by_token(req.cookies.token, function(result) { // Get current user(will need the username later)
		if(result.pending_outgoing_roommate_requests.indexOf(roommate) === -1) { // If the user is already listed as a roommate then return Not Modified
			res
			.status(404)
			.send(result);
			return;
		}
		// Else, update in both places.
		User.update({token: req.cookies.token}, {$pull: {pending_outgoing_roommate_requests: roommate}, 
												 $push: {roommates: roommate}}, function(err, data) {
			if(!data || data === 0) {
				res
				.status(500)
				.send("Unexpected error.");
				return;
			}

			User.update({username: roommate}, {$pull: {pending_incoming_roommate_requests: result.username},
											   $push: {roommates: roommate}}, function(error, updateResult) {
				if(!updateResult || updateResult === 0) {
					res
					.status(500)
					.send("Unexpected error.");
					return;
				}
				exports.get_by_token(req.cookies.token, function(user) {
					res
					.status(200)
					.send(user);
				})
			});
		});
	});
}