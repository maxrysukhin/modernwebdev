(function () {
    'uae strict'

    angular.module('auction')
        .directive('auctionNavbar', function () {
            return {
                scope: true,
                restrict: 'E',
                templateUrl: 'views/partial/navbar.html'
            }
        }); 
}());