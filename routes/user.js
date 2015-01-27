var config = require('../config.json');
/*
Stuff we'll need for the user:
	ID
	name
	surname
	nationality
	graduation_year
	roommates(null until roommate phase is over, array because of multiple roommates)
	username
	current_college
	next_college
*/

exports.points = function(user) { // Returns item that contains how many points the user got for each section. Should be externally controlled by a config file later on.

	// Get individual points

	var points = new Object();
	points.magic_number = user.graduation_year - (new Date().getFullYear()) + 1;
	points.year_points = config.year_points * points.magic_number; // 2 points if graduating next year, 1 if in 2 years.
	points.college_spirit = config.college_spirit * (1 - (user.current_college === user.next_college)); // 0.5 points if same college, 0 if in different

	points.individual_points = points.year_points + points.college_spirit;
	points.total = points.individual_points;
	// Get roommate points
	if(!user.roommates && user.roommates !== null) {
		console.log(user.roommates);
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

exports.get = function(userId) {
	var result = [];
	User.find( {username: userID}, function(err, users) {
		result.push(users);
	});
	return result;
}

exports.update_users = function() {
	if(config.started)
		return "Cannot update the user database";

	var ldap_users = [
		new User({
			name : "Filip",
			surname : "Stankovski",
			nationality : "Macedonia",
			graduation_year : 2017,
			roommates : [],
			username : "fstankovsk",
			current_college : "C3",
			next_college : "C3",
			token : "aaa"
		}),
		new User({
			name : "Dmitrii",
			surname : "Cucleschin",
			nationality : "Moldova",
			graduation_year : 2016,
			roommates : [],
			username : "dcucleschi",
			current_college : "Krupp",
			next_college : "C3"
		}),
		new User({
			name : "Vlad",
			surname : "Ungureanu",
			nationality : "Romania",
			graduation_year : 2015,
			roommates : [],
			username : "vungureanu",
			current_college : "Krupp",
			next_college : "Nordmetall"
		})
	]; // Should get ALL people from LDAP
	for(i = 0; i < ldap_users.length; i++) {

		ldap_users[i].save();
	}
	console.log(JSON.stringify(ldap_users));
	return JSON.stringify(ldap_users);
}

exports.all = function() {

}