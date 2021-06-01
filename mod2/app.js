(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService', '$scope'];
function ToBuyController(ShoppingListCheckOffService,$scope) {
  var showBuyList = this;
//console.log($scope);
  showBuyList.items = ShoppingListCheckOffService.getBuyItems();
  showBuyList.errorMessage =  ShoppingListCheckOffService.getBuyError();

  showBuyList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
    showBuyList.errorMessage =  ShoppingListCheckOffService.getBuyError();
      //showBougtList.errorMessage = ShoppingListCheckOffService.getBoughtError();
  };
  $scope.$digest();
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showBougtList = this;


  showBougtList.items = ShoppingListCheckOffService.getBoughtItems();
  showBougtList.errorMessage = ShoppingListCheckOffService.getBoughtError();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items =  [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Cheetos",
      quantity: "5"
    }
  ];

  var bitems = [];

  service.removeItem = function (itemIndex) {
    var item = [];
    item.name = items[itemIndex].name;
    item.quantity = items[itemIndex].quantity;

    bitems.push(item);
    items.splice(itemIndex, 1);
  };

  service.getBuyItems = function () {
    return items;
  };

  service.getBuyError = function () {
    if(items.length) {
      return 'n';
    } else {
        return 'y';
    }

  };


  service.getBoughtItems = function () {
    return bitems;
  };


  service.getBoughtError = function () {
    if(bitems.length) {
      return 'n';
    } else {
        return 'y';
    }

  };



}

})();
