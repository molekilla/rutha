angular.module('rutha.controllers')
.controller('TestCtrl', function($scope, $log) {
  this.hello = 'Hejsan Rutha!';
  $log.info('Test controller');
});
