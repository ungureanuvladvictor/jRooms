var JUB = {};

JUB.user = null;
JUB.token = ($.cookie('token')) ? $.cookie('token') : null;
JUB.loggedIn = ($.cookie('token')) ? true : false;
JUB.authPopup = null;

JUB.clientId = 'jrooms';
JUB.url = 'https://api.jacobs-cs.club';
JUB.cookieDomain = 'jacobs-cs.club';

JUB.login = function() {
	authPopup = window.open('https://api.jacobs-cs.club/login?response_type=token&redirect_uri=/auth/callback&client_id=jrooms', '_blank', 'width=500, height=500, resizeable=0, toolbar=0, scrollbar=0, location=0');
};

JUB.loginResponse = function(e) {
	if (e.origin !== JUB.url) return;

	var data = JSON.parse(e.data);
	if (data && data.token) {
		console.log("Got token: " + data.token);

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
	$.cookie('token', JUB.token,  { 'expires': 7, 'path': '/' });
	alert("Login succeeded!");

	window.location = 'index.html';
}

JUB.loginFailed = function() {
	alert("Login failed!");
}

JUB.tokenExpired = function(e) {
	JUB.loggedIn = false;
	JUB.token = null;
	JUB.user = null;

	$.removeCookie('token');
};
