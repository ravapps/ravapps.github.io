(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService','$q'];
function SignupController(MenuService,$q,$state) {
  var reg = this;
  //var deferred = $q.defer();




  reg.submit = function () {
    console.log(reg.user.favdish);
    console.log('');
    //deferred.resolve(console.log(MenuService.chkMenuItem(reg.user.favdish)));
    reg.completed = true;
    // https://YOUR-CHOSEN-SUBDOMAIN.herokuapp.com/menu_items/SHORT-NAME.json
  };
}


})();
