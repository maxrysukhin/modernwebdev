(function () {
    'use strict'
    
    var searchFormController = function ($scope, searchService, $location) {
        var _this = this,
            form =  searchService;
        _this.$location = $location;

        $scope.productTitle = form.productTitle;
        $scope.bidsAmount = form.bidsAmount;
        $scope.minDate = form.minDate;
        if (form.endDate !== '') {
            $scope.endDate = form.endDate;
        }

        $scope.submitForm = function (searchForm) {
            _this.submitForm(searchForm, $location, $scope);
        };

        $scope.$on('$routeChangeStart', function(event, next, current) {
            
                  var newTitle,
                      newBidsAmount,
                      newDate;
            
                  if ($scope.searchForm.$dirty) {
                    newTitle = $scope.productTitle,
                    newBidsAmount = $scope.bidsAmount;
                    newDate = $scope.endDate;
                  }
                   
                  if (newTitle) {
                    form.changeTitle(newTitle);
                  }
                  if (newBidsAmount) {
                    form.changeBidsAmount(newBidsAmount);
                  }
                  if (newDate) {
                    form.changeDate(newDate);
                  }
                });
    };

    searchFormController.prototype.submitForm = function (searchForm, $location, scope) {
        //alert('submitted');
        var targetItem = {};
        targetItem.title = scope.productTitle;
        targetItem.bidsAmount = scope.bidsAmount;
        if (scope.endDate) {
            targetItem.date = scope.endDate;
        }

        $location.search(targetItem);
    };

    searchFormController.$inject = ['$scope', 'SearchService', '$location'];

    angular.module('auction').controller('SearchFormController', searchFormController);

}());