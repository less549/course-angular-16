(function () {
	'use strict';

	angular.module('guessTheNumberApp', [])
	.controller('guessController', GuessController);

		function GuessController ($scope, $filter){
			$scope.verifyGuess = function () {
				/*var round = $filter("number")($scope.guess, 0);*/
				$scope.deviation = $scope.original - $scope.guess;
				$scope.noOfTries = $scope.noOfTries + 1;
			}
			$scope.initializeGame = function () {
				$scope.noOfTries = 0;
				$scope.original = Math.floor((Math.random() * 1000) + 1);
				$scope.guess = null;
				$scope.deviation = null;
			}
			$scope.initializeGame();
		}

})();