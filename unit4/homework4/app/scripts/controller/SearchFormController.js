(function () {
    'use strict'
    
    var searchFormController = function ($scope) {
        var _this = this;
        var today = new Date();
        $scope.minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

        $scope.submitForm = function (searchForm) {
            _this.submitForm(searchForm);
        }
    };

    searchFormController.prototype.submitForm = function (searchForm) {
        alert('submitted');
    };

    searchFormController.$inject = ['$scope'];

    angular.module('auction').controller('SearchFormController', searchFormController);

}());