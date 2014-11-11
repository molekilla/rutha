// http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/
/*global $:true*/
// use a directive
function SomeDirective (SomeService) {
  return {
    restrict: 'EA',
    template: [
      '<a href="" class="myawesomebutton" ng-transclude>',
        '<i class="icon-ok-sign"></i>',
      '</a>'
    ].join(''),
    link: function ($scope, $element, $attrs) {
      // DOM manipulation/events here!
      $element.on('click', function () {
        $(this).addClass('test');
      });
    }
  };
}
angular
  .module('ruthaDirectives')
  .directive('ruthaSomeDirective', SomeDirective);