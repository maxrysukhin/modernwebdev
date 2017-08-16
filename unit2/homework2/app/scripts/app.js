(function () {
  'use strict';

     var auction = angular.module('auction', ['ngRoute']);

     auction.config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/home.html",
                controller: 'HomeController',
                controllerAs: 'ctrl'
            })
            .when("/search", {
                templateUrl: "views/search.html",
                controller: 'SearchController',
                controllerAs: 'ctrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

}());
