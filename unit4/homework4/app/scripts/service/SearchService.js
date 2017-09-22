(function () {
    'use strict'

    var SearchService = function($route) {
        var today = new Date();
        var form = {
            productTitle: '',
            minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
            endDate: '',
            bidsAmount: ''
        };

        form.changeTitle = function(title) {
            form.productTitle = title;
        };

        form.changeDate = function(newDate) {
            form.endDate = newDate;
        };

        form.changeBidsAmount = function (amount) {
            form.bidsAmount = amount;
        };

        return form;
    };

    SearchService.$inject = ['$route'];
    angular.module('auction').service('SearchService', SearchService);
}());