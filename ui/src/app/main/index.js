angular.module('ruthaControllers')
.controller('TestController', function($scope, $log) {
  this.hello = 'Hejsan Rutha!';
  $log.info('Test controller');
});
