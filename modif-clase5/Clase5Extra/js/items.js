angular.module('ItemMenuApp', [])
.controller('ItemMenuController', ItemMenuController)
.service('ItemMenuService', ItemMenuService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

ItemMenuController.$inject = ['ItemMenuService'];
function ItemMenuController(ItemMenuService) {
  var item = this;

  var promise = ItemMenuService.getItemMenu();

    promise.then(function (response) {
      item.menu = response.data;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });

    menu.logMenuItems = function () {
      var promise = ItemMenuService.getItemForMenu();

      promise.then(function (response) {
          console.log(response.data);
      })
      .catch(function (error) {
          console.log(error);
      })
    };
}