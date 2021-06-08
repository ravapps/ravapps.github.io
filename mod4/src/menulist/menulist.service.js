(function () {
'use strict';

angular.module('MenuApp')
.service('MenuListService', MenuListService);


MenuListService.$inject = ['$q','$http']
function MenuListService($q,$http) {
  var service = this;


  var items = [];





  service.getMenu = function () {
    var deferred = $q.defer();


      $http({
            method: "GET",
            url: ("https://davids-restaurant.herokuapp.com/categories.json")
        }).then(function (result) {
            items = result.data;
          //  console.log(result.data);


            deferred.resolve(items);


        }).catch(function (error) {
          console.log(error);
          deferred.reject(result);
        });


        return deferred.promise;


  };

}

})();
