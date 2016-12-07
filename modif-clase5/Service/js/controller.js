(function () {
'use strict';

angular.module('MenuCategoriesApp')
.controller('MenuCategoriesController', MenuCategoriesController)

MenuCategoriesController.$inject = ['MenuCategoriesService'];
function MenuCategoriesController(MenuCategoriesService) {
  var menu = this;

  var promise = MenuCategoriesService.getMenuCategories();

    promise.then(function (response) {
      menu.categories = response.data;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });

    menu.logMenuItems = function (shortName) {
      var promise = MenuCategoriesService.getMenuForCategory(shortName);

     promise.then(function (response) {
      		console.log(response.data);
    	})
    	.catch(function (error) {
      		console.log(error);
    	})
  	};

    service.getMenuForCategory = function () {
    	var response = $http({
    		method: "GET",
      		url: (ApiBasePath + "/menu_items.json"),
      		params: {
        		category: shortName,
      		}
    	});

    	return response;
  	};
}

})();