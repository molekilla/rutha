// http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/
angular.module('rutha.controllers', []);
angular.module('rutha.services', []);
angular.module('rutha.templates', []);
angular.module('rutha.directives', []);
angular.module('rutha',
  ['ui', 'ngRoute', 'restangular', 'rutha.directives' , 'rutha.services', 'rutha.templates', 'rutha.controllers', 'ui.bootstrap','kendo.directives'])
.config(function(RestangularProvider) {
    RestangularProvider.setFullResponse(true);
    RestangularProvider.setBaseUrl('/api');
})
.config(function($routeProvider) {
// main/login
// main/logout

  $routeProvider.
      when('/signup', {
        templateUrl: 'app/main/signup.html',
        controllerAs: 'signup',
        controller: 'SignupCtrl'
      }).
      when('/login', {
        templateUrl: 'app/main/login.html',
        controllerAs: 'login',
        controller: 'LoginCtrl'
      }).
      otherwise({
          controller : 'TestCtrl',
          controllerAs: 'main',
          templateUrl: 'app/main/index.html'
      });
});
 

 
