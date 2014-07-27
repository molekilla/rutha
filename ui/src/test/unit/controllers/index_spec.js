/*global $rootScope:true, rutha:true, controller:true, $controller:true, expect:true, $scope:true*/

describe('Index Controller Unit Test', function() {
  beforeEach(module('rutha.controllers'));

  it ('should say for hello "Hejsan Angular!" ', inject(function($rootScope, $controller, $http) {
    var $scope = $rootScope.$new();

    var ctrl = $controller('TestCtrl as main', {
      $scope: $scope
    });

    expect($scope.main.hello).toBe('Hejsan Angular!');
  }));

});
