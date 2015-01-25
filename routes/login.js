

exports.login = function(username, password) {
	return "some token for " + username + " " + password;
}

exports.logout = function(token_string) {
	// delete token_string from database
	return "";
}