// http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/
angular.module('rutha.controllers', []);
angular.module('rutha.services', []);
angular.module('rutha.templates', []);
angular.module('rutha.directives', []);
angular.module('rutha',
  ['ui', 'ngRoute', 'restangular', 'rutha.directives' , 'rutha.services', 'rutha.templates', 'rutha.controllers', 'ui.bootstrap'])
.config(function(RestangularProvider) {
    RestangularProvider.setFullResponse(true);
    RestangularProvider.setBaseUrl('/api');
})
.config(function($routeProvider) {
    $routeProvider.
      when('/overview', {
        templateUrl: 'app/overview/overview.html',
        controller: 'OverviewCtrl'
      }).
      otherwise({
          controller : 'TestCtrl',
          controllerAs: 'main',
          templateUrl: 'app/overview/index.html'
      });
});
 
