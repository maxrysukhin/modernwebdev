(function () {
  'use strict';

  var searchFormDirectiveFactory = function () {
    return {
      scope: false,
      restrict: 'E',
      controller: 'SearchFormController',
      templateUrl: 'views/partial/SearchFormDirective.html'
    };
  };

  angular.module('auction').directive('auctionSearchForm', searchFormDirectiveFactory);
}());
