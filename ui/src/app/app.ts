/// <reference path="../../typings/angularjs/angular.d.ts" />

'use strict';

import angular from 'angular';
import 'underscore';
import 'angular-route';
import 'restangular';
import 'templates';


angular.module('ruthaControllers', []);
angular.module('ruthaServices', []);
angular.module('rutha.templates', []);
angular.module('ruthaDirectives', []);
angular.module('ruthaAuth', []);

angular.module('ruthaApp',
  ['ngRoute', 'restangular', 'ruthaAuth', 'ruthaDirectives' , 'ruthaServices', 'rutha.templates', 'ruthaControllers'])
.config(function(RestangularProvider) {
    RestangularProvider.setFullResponse(true);
    RestangularProvider.setBaseUrl('/api');
})
.config(function($routeProvider) {
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
          controller : 'TestController',
          controllerAs: 'main',
          templateUrl: 'main/index.html'
      });
});

angular.bootstrap(document, ['ruthaApp']);