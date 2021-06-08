(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController)
.service('ItemDetailService', ItemDetailService);






ItemDetailController.$inject = ['ItemDetailService','$stateParams','$scope'];
function ItemDetailController(ItemDetailService, $stateParams,$scope) {
  var itemDetail = this;
  itemDetail.short_name = $stateParams.itemId;
  //$scope.$broadcast('to-child','child');
  //$scope.$emit('to-parent','parent');

console.log($stateParams.itemId);

  ItemDetailService.getMenuItems($stateParams.itemId).then(function (result) {

    itemDetail.mitems = result.data.menu_items;



  }).catch(function (error) {
   console.log(error);

 });



}




ItemDetailService.$inject = ['$http'];
function ItemDetailService($http) {
  var service = this;

    var mitems = [];



  service.getMenuItems = function (searchTerm) {


      return $http({
            method: "GET",
            url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="+searchTerm)
        });
}
}

})();
