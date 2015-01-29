var updateNav = function() {
	$('#loginButton').unbind('click');
	if (JUB.loggedIn) {		
		$('#loginButton').click(function() {
			JUB.logout();
		});

		$('#loginButton').text('Logout');
		$('#logged_out').addClass('hidden');
		$('#homeLink').attr('href', 'home.html');

		if (JUB.me) {
			$('#loginInfo').text('Signed in as ' + JUB.me.name);
		}

		if (JUB.isAdmin) {
			$('#adminLink').removeClass('hidden');
		}
	}
	else {
		$('#loginButton').click(function() {
			JUB.login();
		});

		$('#loginButton').text('Login');
		$('#loginInfo').text('');
		$('#homeLink').attr('href', 'index.html');
		$('#adminLink').addClass('hidden');
	}
};