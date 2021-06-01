(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showBuyList = this;

  showBuyList.items = ShoppingListCheckOffService.getBuyItems();
  if(showBuyList.items.length) {
      showBuyList.errorMessage = 'n';
  } else {
    showBuyList.errorMessage = 'y';
  }

  showBuyList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showBougtList = this;

  showBougtList.items = ShoppingListCheckOffService.getBoughtItems();
  if(showBougtList.items.length) {
      showBougtList.errorMessage = 'n';
  } else {
    showBougtList.errorMessage = 'y';
  }

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

  service.getBoughtItems = function () {
    return bitems;
  };


}

})();
