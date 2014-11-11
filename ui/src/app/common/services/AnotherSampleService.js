// http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/
// RM: using _AnotherService to pass jshint
function AnotherService () {

  var _AnotherService = {};
  
  _AnotherService.someValue = '';

  _AnotherService.someMethod = function () {

  };
  
  return _AnotherService;
}
angular
  .module('ruthaServices')
  .factory('AnotherService', AnotherService);