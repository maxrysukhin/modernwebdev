/*(function() {
    'use strict';

    var searchInterceptor = function($q) {
        return {
            'request': function(config) {
                if(config.url.indexOf('/search') > -1) {
                    console.log(config.url);
                }
                return config;
            },
            'response': function(response) {
                return response;
            }
        };
    };

    searchInterceptor.$inject = ['$q'];
    angular.module('auction').factory('searchInterceptor', searchInterceptor);
}());*/