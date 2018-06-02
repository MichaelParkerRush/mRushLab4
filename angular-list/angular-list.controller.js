(function(){
	angular.module('app')
		.controller('AngularListCtrl', function(DataService){
			var $ctrl = this;
			
			$ctrl.removeTask = function(num) {
				console.log(DataService.getData());
				$ctrl.toDo.splice(num, 1);
				DataService.setData($ctrl.toDo);
			}
		});
})();