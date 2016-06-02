(function () {
    'use strict';

    angular.module('loginApp',[]).controller('loginController', LoginController);
	LoginController.$inject = ['userLoginService'];
    function LoginController(userLoginService) {
		var vm =this;
		this.popup = login;
		function login(){
			var user = new Object();
			user.id = this.username;
			user.pw = this.password;
			userLoginService.login(user);
		}
		
    }

})();
