(function(){
	angular.module('app')
		.controller('AngularFormCtrl', function(DataService){
			var $ctrl = this;
			$ctrl.$onInit = function() {
				$ctrl.toDo = DataService.getData();
			};
			$ctrl.addTask = function(task) {
				if (task) {
					console.log(DataService.getData());
					$ctrl.toDo.push(task);
					DataService.setData($ctrl.toDo);
				}
				$ctrl.task = '';
			}
			$ctrl.onEnter = function(event) {
				if (event.key === 'Enter') {
					$ctrl.addTask($ctrl.task);
				}
			}
		});
})();