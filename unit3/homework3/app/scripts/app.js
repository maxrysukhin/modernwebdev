(function () {
  'use strict';

  angular.module('auction', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      var title = function (page) {
        return page + ' | Auction';
      };

      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeController',
          controllerAs: 'ctrl',
          title: title('Home')
        })
        .when('/search', {
          templateUrl: 'views/search.html',
          controller: 'SearchController',
          controllerAs: 'ctrl',
          title: title('Search')
        })
        .when('/product/:id', {
            templateUrl: 'views/product.html',
            controller: 'ProductDetailsController',
            controllerAs: 'ctrl',
            title: title('Product'),
            resolve: {
                product: ['$route', 'ProductService', function ($route, productService) {
                    var productId = parseInt($route.current.params.id);
                    return productService.getProductById(productId);
                }]
            }
        })
        .otherwise({
           redirectTo: '/'
         });
    }])
    .run(['$rootScope', function ($rootScope) {
      $rootScope.$on('$routeChangeStart', function (event, next) {
        $rootScope.pageTitle = next.$$route.title;
      });
    }]);
}());
  
