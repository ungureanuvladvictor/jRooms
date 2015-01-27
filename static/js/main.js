JUB.init();
window.onload = function() {
	var updateLogin = function() {
		$('#loginButton').unbind('click');
		if (JUB.loggedIn) {
			$('#loginButton').click(function() {
				JUB.logout();
			});

			$('#loginButton').text('Logout');
		}
		else {
			$('#loginButton').click(function() {
				JUB.login();
			});

			$('#loginButton').text('Login');
			$('#loginInfo').text('');
		}
	};

	var updateMe = function() {
		if (JUB.me) {
			$('#loginInfo').text('Signed in as ' + JUB.me.name);
		}
	}

	window.addEventListener("message", JUB.loginResponse, false);
	window.addEventListener("JUB.LoginUpdated", updateLogin, true);
	window.addEventListener("JUB.UserUpdated", updateMe, true);

	updateLogin();
};