(function(){
	angular.module('app', ['ngRoute'])
		.config(function($routeProvider){
			$routeProvider
				.when('/', {
					template: '<angular-welcome></angular-welcome>'
				})
				.when('/app', {
					template: '<angular-form></angular-form>'
				})
				.otherwise({
					// redirectTo: '/'
					template: '<angular404></angular404>'
				});
		})
})();