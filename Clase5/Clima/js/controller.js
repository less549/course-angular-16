angular.module('app.controller', [])
.controller('weatherController', function($scope, $http){

	$scope.weather = {
		city: '',
		temperature: '',
		image: '',
	};

	$scope.getWeather = function () {
		$http({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/weather?appid=6e677030195aa712c6590e4eb6fbc78a&lang=es&units=metric&q=' + $scope.weather.city
		}).then(function successCallback(response) {
        $scope.weather.temperature = response.data.main.temp + "°C";
        $scope.image = "http://openweathermap.org/img/w/"+response.data.weather[0].icon+".png"

	}, function errorCallback(response) {
		alert("error");
	});
	};
	
	$scope.getWeather();
	});