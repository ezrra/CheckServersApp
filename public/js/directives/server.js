angular.module('App')
    .directive('statusDirective', function(){
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                status: '='
            },
            template: '<label ng-bind="status" ng-model="status" ng-class="{label: status == 200}"></label>',
            link: function(scope, element, attributes) {
                // console.log(scope)
            }
        }
    });