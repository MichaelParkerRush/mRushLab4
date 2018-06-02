(function(){
	angular.module('app')
		.service('DataService', function(){
			var toDo = ['Shop', 'Cook', 'Clean', 'Sleep'];
			this.setData = function(data){
				toDo = data;
			};
			this.getData = function(){
				return toDo;
			};
		})
		.factory('DataFactory', function(){
			var toDo = ['Shop', 'Cook', 'Clean', 'Sleep'];
			return{
				setData: function(data){
					toDo = data;
				},
				getData: function(){
					return toDo;
				}
			}
		})
})();