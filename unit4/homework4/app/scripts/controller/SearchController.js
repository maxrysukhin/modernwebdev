(function () {
  'use strict';

  var SearchController = function ($scope, productService, $location, SearchService) {
    var _this = this;
    var form = SearchService;
    _this.products = [];

    productService.find()
        .then(function (data) { _this.products = data; });
  };

  SearchController.$inject = ['$scope', 'ProductService', '$location', 'SearchService'];
  angular.module('auction').controller('SearchController', SearchController);
}());
