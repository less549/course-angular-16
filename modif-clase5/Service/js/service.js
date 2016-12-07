(function () {
'use strict';

angular.module('MenuCategoriesApp')
.service('MenuCategoriesService', MenuCategoriesService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

MenuCategoriesService.$inject = ['$http', 'ApiBasePath'];
function MenuCategoriesService($http, ApiBasePath) {
  	var service = this;

  	service.getMenuCategories = function () {
    	var response = $http({
      	method: "GET",
      	url: (ApiBasePath + "/categories.json")
    });

    	return response;
  	};


  	service.getMenuForCategory = function (shortName) {
    	var response = $http({
    		method: "GET",
      		url: (ApiBasePath + "/menu_items.json"),
      		params: {
        		category: shortName
      		}
    	});

    	return response;
  	};

}

})();