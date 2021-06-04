(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var showList = this;
  showList.searchTerm = "Egg";

  showList.MatchedMenuItems = function () {
    console.log(showList.searchTerm);
    var promise = MenuSearchService.getMatchedMenuItems(showList.searchTerm);
  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;



  service.getMatchedMenuItems = function (searchTerm) {

    return $http({
        method: "GET",
        url: (ApiBasePath)
    }).then(function (result) {
        console.log(searchTerm);
        for(let i = 0; i < result.data.menu_items.length; i++){
            if(result.data.menu_items[i].description.search(searchTerm) > 0) {

              console.log(result.data.menu_items[i].description);

          }
          }


        // process result and only keep items that match
        //var foundItems...

        // return processed items
        //return foundItems;
        return result;
    }).catch(function (error) {
      console.log(error);
    });

  };

}

})();
