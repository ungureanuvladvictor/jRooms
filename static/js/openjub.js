var JUB = {};

JUB.me = null; 
JUB.token = ($.cookie('token')) ? $.cookie('token') : null;
JUB.loggedIn = ($.cookie('token')) ? true : false;
JUB.authPopup = null;

JUB.clientId = 'jrooms';
JUB.apiUrl = 'https://api.jacobs-cs.club';
JUB.url = 'http://localhost:3000';

JUB.init = function() {
	if ($.cookie('token')) {
		var req = $.get(JUB.url + '/user/me', {}, function(data) {
			JUB.me = data;

			console.log('Me succeeded!');
			var e = new Event('JUB.UserUpdated');
			window.dispatchEvent(e);
		});
		
		req.fail(function(err) {
			console.log("Me failed: " + err);
			JUB.logout();
		});		
	}
}

JUB.login = function() {
	authPopup = window.open('https://api.jacobs-cs.club/login?response_type=token&redirect_uri=/auth/callback&client_id=jrooms', '_blank', 'width=500, height=500, resizeable=0, toolbar=0, scrollbar=0, location=0');
};

JUB.loginResponse = function(e) {
	if (e.origin !== JUB.apiUrl) return;

	var data = JSON.parse(e.data);
	if (data && data.token) {
		JUB.token = data.token;
		JUB.loggedIn = true;

		JUB.loginSucceeded();
	}
	else {
		console.log(data);
		JUB.loginFailed();
	}

	authPopup.close();
};

JUB.loginSucceeded = function() {
	$.cookie('token', JUB.token,  { 'expires': 2, 'path': '/' });

	var req = $.post(JUB.url + '/user/login', {}, function(data) {
		JUB.me = data;
		console.log("Login succeeded: " + data);

		var e = new Event('JUB.LoginUpdated');
		window.dispatchEvent(e);

		var f = new Event('JUB.UserUpdated');
		window.dispatchEvent(f);
	});


	req.fail(function(err) {
		console.log("Login failed: " + err);
		JUB.logout();
	});		
}

JUB.loginFailed = function() {
	alert("Login failed!");
}

JUB.logout = function(e) {
	JUB.loggedIn = false;
	JUB.token = null;
	JUB.me = null;

	$.removeCookie('token');

	var e = new Event('JUB.LoginUpdated');
	window.dispatchEvent(e);
};