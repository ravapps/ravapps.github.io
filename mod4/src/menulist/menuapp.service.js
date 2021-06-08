(function () {
'use strict';

angular.module('MenuApp')
.service('MenuListService', MenuListService);


//MenuListService.$inject = ['$q']
function MenuListService($q) {
  var service = this;


  var items = [];





  service.getMenu = function () {
    //var deferred = $q.defer();
    return $http({
        method: "GET",
        url: (ApiBasePath)
    }).then(function (result) {
        items = result.data;
        //deferred.resolve(items);
        console.log(result.data);
        return items;

    }).catch(function (error) {
      console.log(error);
    });;

  };



})();
