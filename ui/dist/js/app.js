/// <reference path="../../typings/angularjs/angular.d.ts" />
'use strict';System.register(['html/src/app/main/index.html!text', 'angular', 'underscore', 'angular-route', 'restangular', './main/index'], function(exports_1) {
    var index_html_text_1, index_1;
    return {
        setters:[
            function (_index_html_text_1) {
                index_html_text_1 = _index_html_text_1;
            },
            function (_) {},
            function (_) {},
            function (_) {},
            function (_) {},
            function (_index_1) {
                index_1 = _index_1;
            }],
        execute: function() {
            angular.module('ruthaControllers', []);
            angular.module('ruthaServices', []);
            angular.module('rutha.templates', []);
            angular.module('ruthaDirectives', []);
            angular.module('ruthaAuth', []);
            angular.module('ruthaApp', ['ngRoute', 'restangular', 'ruthaAuth', 'ruthaDirectives', 'ruthaServices', 'rutha.templates', 'ruthaControllers'])
                .config(function (RestangularProvider) {
                RestangularProvider.setFullResponse(true);
                RestangularProvider.setBaseUrl('/api');
            })
                .config(function ($routeProvider) {
                // main/login
                // main/logout
                $routeProvider.
                    when('/signup', {
                    templateUrl: 'main/signup.html',
                    controllerAs: 'signup',
                    controller: 'SignupController'
                }).
                    when('/login', {
                    templateUrl: 'main/login.html',
                    controllerAs: 'login',
                    controller: 'LoginController'
                }).
                    otherwise({
                    controller: index_1.default,
                    controllerAs: 'main',
                    template: index_html_text_1.default
                });
            });
            angular.bootstrap(document, ['ruthaApp']);
        }
    }
});
