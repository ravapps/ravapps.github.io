(function () {
'use strict';

angular.module('MyApp', [])
.controller('MyController', MyController);

MyController.$inject = ['$scope', '$filter'];
function MyController($scope, $filter) {

  $scope.CheckIt = function () {
    if (typeof($scope.lunchmenu) !== 'undefined') {
      var strToChk = $scope.lunchmenu.trim();
    if (strToChk.length) {
      var ictr = strToChk.split(",").length;
      var arr = strToChk.split(",");
      var citr = ictr;

      for (var i = 0; i < citr; i++) {
        if(arr[i].trim().length == 0)
          ictr = ictr - 1;
      }
      var addmsg = "";
      if(ictr != citr) {
        addmsg = " (Only valid items counted) ";
      }
      if(ictr == 0) {
        $scope.resultShow = "Please enter data first";
      } else if (ictr <= 3) {
        $scope.resultShow = "Enjoy!" + addmsg;
      } else {
        $scope.resultShow = "Too much!" + addmsg;
      }
    } else {
      $scope.resultShow = "Please enter data first";
    }
  } else {
    $scope.resultShow = "Please enter data first";

  }

  };
}

})();
