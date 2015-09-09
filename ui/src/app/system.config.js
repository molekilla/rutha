/*globals System:true*/
// Configure module loader
System.config({
  baseURL: '/ui/dist/',

  // Set paths for third-party libraries as modules
  paths: {
    'angular': 'components/restangular/dist/restangular.js',
    'restangular': 'components/angular/angular.js',
    'angular-route': 'components/angular-route/angular-route.js'
  }
});
