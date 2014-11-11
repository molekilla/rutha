/*global $rootScope:true, rutha:true, controller:true, $controller:true, expect:true, $scope:true*/

describe('Index Controller Unit Test', function() {
  beforeEach(module('ruthaControllers'));

  it ('should say for hello "Hejsan Rutha!" ', inject(function($rootScope, $controller, $http) {
    var $scope = $rootScope.$new();

    var ctrl = $controller('TestController as main', {
      $scope: $scope
    });

    expect($scope.main.hello).toBe('Hejsan Rutha!');
  }));

});
