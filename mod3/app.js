(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json")
//.factory('founditemstFactory', founditemsFactory)

.directive('foundItems', foundItemsDirective);



function foundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      founditems: '<',
      onRemove: '&'
    },


  };
  //console.log(showList.items);
  return ddo;
}









NarrowItDownController.$inject = ['$scope','MenuSearchService'];
function NarrowItDownController($scope,MenuSearchService) {
  var showList = this;
  this.searchTerm = "egg";
 //this.items = {};


  this.MatchedMenuItems = function () {
    //console.log(showList.searchTerm);
    //this.items =

    MenuSearchService.getMatchedMenuItems(showList.searchTerm).then(function (result) {
        var retArr = [];
        //console.log(searchTerm);
        for(let i = 0; i < result.data.menu_items.length; i++){
            if(result.data.menu_items[i].description.search(showList.searchTerm) > 0) {
              retArr.push(result.data.menu_items[i]);
              //console.log(result.data.menu_items[i].description);

          }
          }
        //console.log(retArr);
        showList.items = retArr;
          //console.log(retArr);
        // process result and only keep items that match
        //var foundItems...

        // return processed items
        //return foundItems;
        return retArr;


    }).catch(function (error) {
      console.log(error);
    });

  };


  this.removeItem = function (itemIndex) {
    console.log(itemIndex);
    showList.items.splice(itemIndex,1);
    //shoppingList.removeItem(itemIndex);
  };

  //showList.items = items;
  //console.log(showList.items);
   //console.log(showList.items);
}





MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  var retArr = [];


  service.getMatchedMenuItems = function (searchTerm) {

    return $http({
        method: "GET",
        url: (ApiBasePath)
    });

  };

}

})();
