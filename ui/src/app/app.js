// http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/
System.register(['angular'], function(exports_1) {
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            angular.module('ruthaControllers', []);
            angular.module('ruthaServices', []);
            angular.module('rutha.templates', []);
            angular.module('ruthaDirectives', []);
            angular.module('ruthaAuth', []);
            angular.module('ruthaApp', ['ui', 'ngRoute', 'restangular', 'ruthaAuth', 'ruthaDirectives', 'ruthaServices', 'rutha.templates', 'ruthaControllers', 'ui.bootstrap', 'kendo.directives'])
                .config(function (RestangularProvider) {
                RestangularProvider.setFullResponse(true);
                RestangularProvider.setBaseUrl('/api');
            })
                .config(function ($routeProvider) {
                // main/login
                // main/logout
                $routeProvider.
                    when('/signup', {
                    templateUrl: 'app/main/signup.html',
                    controllerAs: 'signup',
                    controller: 'SignupController'
                }).
                    when('/login', {
                    templateUrl: 'app/main/login.html',
                    controllerAs: 'login',
                    controller: 'LoginController'
                }).
                    otherwise({
                    controller: 'TestController',
                    controllerAs: 'main',
                    templateUrl: 'app/main/index.html'
                });
            });
        }
    }
});
//# sourceMappingURL=app.js.map