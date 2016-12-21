window.onload = function() {
	
	console.info('Script reg started');
	var appStore = window.localStorage;
var login,pass,re_pass;
	function loginControl() {
		if(pass != re_pass){
			document.getElementById('reg-error').innerHTML = 'Пароли не совпадают!';
		}
		else if(appStore.login && appStore.pass) {
			window.location.assign('login.html');	
		}
	}
	// loginControl();

	var btn = $('reg-btn');
	console.log('REG ELEM: ', btn);

	btn.onclick = function() {
		console.info('Сработал клик!');
		

		login = $('reg').value;
		pass = $('reg-pass').value;
		re_pass = $('re_pass').value;

		appStore.setItem('login', login);
		appStore.setItem('pass', pass);

		loginControl();	
	}

	
	
	function $(str) {
		return document.getElementById(str);
	}
}