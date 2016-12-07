(function (){
  'use strict';

  angular.module('RestaurantApp', ['MenuCategoriesApp', 'ItemsMenuApp'])
  .config(function($routeProvider) {
   $routeProvider.when('/categories',
            {templateUrl:'partials/categories.html'});
  $routeProvider.when('/items', 
      {templateUrl:'partials/items.html', controller: 'itemsController' });
  $routeProvider.when('/', 
      { templateUrl: 'partials/home.html' });
   $routeProvider.otherwise({ redirectTo: '/home' });
});

  angular.module('RestaurantApp', []);

})();