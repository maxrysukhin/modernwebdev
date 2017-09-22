(function () {
  'use strict';

  var ProductController = function ($scope, product, SearchService) {
    this.product = product;
    var form = SearchService;
  };

  ProductController.$inject = ['$scope', 'product', 'SearchService'];
  angular.module('auction').controller('ProductController', ProductController);
}());
