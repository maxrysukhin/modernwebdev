(function () {
  'use strict';

  var ProductService = function ($http, $q) {
    // Instance attributes go here:
    this.$http = $http;
    this.$q = $q;
  };

  /** List all dependencies required by the service. */
  ProductService.$inject = ['$http', '$q'];

  // Instance methods go here:
  ProductService.prototype = {

    /** Returns the list of all available products on the server. */
    getProducts: function () {
      return this.$http.get('/data/products-featured.json')
          .then(function (resp) { return resp.data; });
    },

    /** Finds products with specified criteria.
      * NOTE: Search criteria are not implemented yet.
      */
    find: function () {
      return this.$http.get('/data/products-search.json')
          .then(function (resp) { return resp.data; });
    },

    getProductById: function (productId) {
      var product = this.$q.defer();
      return this.getProducts()
          .then((products) => {

          var filteredProducts = products.filter((p) => {return p.id == productId});

          if(filteredProducts.length == 1) {
              product.resolve(filteredProducts[0]);
          } else {
              product.reject('Non existent id');
          }

          return product.promise;
        });
    }
  };

  // Register the service within AngularJS DI container.
  angular.module('auction').service('ProductService', ProductService);
}());
