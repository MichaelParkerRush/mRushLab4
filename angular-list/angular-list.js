(function(){
	angular.module('app')
		.component('angularList', {
			templateUrl: 'angular-list/angular-list.html',
			controller: 'AngularListCtrl',
			bindings: {
				toDo: '<',
				search: '<'
			}
		})
})();