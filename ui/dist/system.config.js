/*globals System:true*/
// Configure module loader
System.config({
    baseURL: 'dist/',
	defaultJSExtensions: true,
	transpiler: "none",
meta: {
    '**/*.html': {
      loader: 'text'
    }
  },    
    map: {
        'text':'text.js',
        'templates': 'js/templates.js',
        'restangular': 'components/restangular/dist/restangular.js',
        'angular': 'components/angular/angular.js',
        'underscore': 'components/underscore/underscore.js',
        'angular-route': 'components/angular-route/angular-route.js'
    }
});