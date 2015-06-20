
// rutha_ionic - based on Ionic Starter App

// http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/
angular.module('ruthaControllers', []);
angular.module('ruthaServices', []);
angular.module('rutha.templates', []);
angular.module('ruthaDirectives', []);
angular.module('ruthaAuth', []);

angular.module('ruthaApp',
  ['ionic', 'restangular', 'ruthaAuth', 'ruthaDirectives' , 'ruthaServices', 'rutha.templates', 'ruthaControllers'])
.run(function($ionicPlatform) {    
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at 
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})
.config(function(RestangularProvider) {
    RestangularProvider.setFullResponse(true);
    RestangularProvider.setBaseUrl('/api');
})
.config(function($stateProvider) {
// main/login
// main/logout

  $stateProvider.
      state('signup', {
        url: '/signup',
        templateUrl: 'app/main/signup.html',
        controllerAs: 'signup',
        controller: 'SignupController'
      }).
      state('login', {
        url: '/login',
        templateUrl: 'app/main/login.html',
        controllerAs: 'login',
        controller: 'LoginController'
      });
});
