(function (){
	'use strict';

	angular.module('7MinuteApp', ['ngRoute', '7MinWO'])
	.config(function($routeProvider) {
	 $routeProvider.when('/start',
	 					{templateUrl:'partials/start.hml'});
	  $routeProvider.when('/workout', 
    	{ templateUrl: 'partials/workout.html', controller: 'WorkoutController' });
	 $routeProvider.otherwise({ redirectTo: '/start' });
});

	angular.module('7MinWO', []);

})();