(function () {
  'use strict';

  angular.module('auction', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      // STEP 2A
      var title = function (page) {
        return page + ' | Auction';
      };

      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeController',
          controllerAs: 'ctrl',
          // STEP 2B
          title: title('Max Rysukhin')
        })
        .when('/search', {
          templateUrl: 'views/search.html',
          controller: 'SearchController',
          controllerAs: 'ctrl',
          // STEP 2B
          title: title('Max Rysukhin')
        })
        .otherwise({
           redirectTo: '/'
        });
    }])
      .run(['$rootScope', function ($rootScope) {
            $rootScope.$on('$routeChangeStart', function (event, next, current) {
                $rootScope.pageTitle = next.$$route.title;
            });
        }]);
    // STEP 2D
    // STEP 2E
}());
