(function () {
    'use strict';
    angular
        .module('loginApp')
        .factory('userLoginService', userLoginService);

    userLoginService.$inject = ['$http'];
    function userLoginService($http) {
        var service = {};

        service.getUserInfo = getUserInfo;
        service.commonLogin = commonLogin;
        service.createNewUser = createNewUser;
        service.updateUserInfo = updateUserInfo;
        service.deleteUser = deleteUser;
		service.login = login;


        return service;
		function login(user){
			return $http.post('/api/login/', user).then(handleSuccess, handleError('Error login by id'));
		}
		function getUserInfo(user){
			var param = new Object();
			param.userId = user.id;
			return $http.post('/api/getUserInfo/', param).then(handleSuccess, handleError('Error getting user by id'));
		}
		
		function commonLogin(user){
			return $http.post('/api/commonLogin', user).then(handleSuccess, handleError('Login Failed'));
		}
        function createNewUser(user) {
            return $http.post('/api/createNewUser', user).then(handleSuccess, handleError('Create user Failed'));
        }

        function updateUserInfo(user) {
            return $http.post('/api/updateUserInfo',user).then(handleSuccess, handleError('Update User Failed'));
        }

        function deleteUser(user) {
            return $http.post('/api/deleteUser',user).then(handleSuccess, handleError('Delete User Failed'));
        }

        // private functions

        function handleSuccess(res) {
			
            return res.data;
        }

        function handleError(error) {
			var resJSON = JSON.parse(res);
			return resJSON.message;
        }
    }

})();