/*globals System:true*/
// Configure module loader
System.config({
  baseURL: '/dist/',

  // Set paths for third-party libraries as modules
  paths: {
    'restangular': 'components/restangular/dist/restangular.js',
    'angular': 'components/angular/angular.js',
    'angular-route': 'components/angular-route/angular-route.js'
  }
});