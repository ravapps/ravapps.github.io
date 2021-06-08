(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/categories');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menulist/templates/home.template.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/categories',
    templateUrl: 'src/menulist/templates/main-menulist.template.html',
    controller: 'MainMenuListController  as mainList',
    resolve: {
      items: ['MenuListService', function (MenuListService) {
        return MenuListService.getMenu();
      }]
    }
  })

  .state('mainList.itemDetail', {
    url: '/item/{itemId}',
    templateUrl: 'src/menulist/templates/item-detail.template.html',
    controller: "ItemDetailController as itemDetail"
    //resolve: {
    //  mitems: ['ItemDetailService', function (ItemDetailService) {
    //    return ItemDetailService.getMenuItems(itemId);
    //  }]
//}
  });


/*  .state('itemDetailURL', {
    url: '/item/{itemId}',
    templateUrl: 'src/menulist/templates/item-detail.template.html',
    controller: "ItemDetailController as itemDetail"

  });

  .state('itemDetailURL', {
    url: '/item/{itemId}',
    templateUrl: 'src/menulist/templates/item-detail.template.html',
    controller: "ItemDetailController as itemDetail"

  }); */


/*  .state('itemDetailURL', {
    url: '/item/{itemId}',
    templateUrl: 'src/menulist/templates/item-detail.template.html',
    controller: "ItemDetailController as itemDetail",
    resolve: {
      itemsmenu: ['ItemDetailService', function (ItemDetailService) {
        return ItemDetailService.getMenuItems();
      }]
    }
  });

*/


}

})();
