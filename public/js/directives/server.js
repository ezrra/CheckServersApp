angular.module('App')
    .directive('statusDirective', function(){
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                status: '='
            },
            templateUrl: '/templates/servers/_status.html',
            link: function(scope, element, attributes) {
                scope.$watch('status', function(newValue, oldValue) {
                    
                    // if (newValue == undefined) return;
                    if (newValue == oldValue) return;

                    element.attr('class', '');

                    element.addClass('label');

                    if (newValue >= 100 & newValue <= 200) {
                        element.addClass('label-primary')
                    }

                    if (newValue >= 200 & newValue <= 300) {
                        element.addClass('label-success')
                    }
                    
                    if (newValue >= 300 & newValue <= 400) {
                        element.addClass('label-default')
                    }

                    if (newValue >= 400 & newValue <= 500) {
                        element.addClass('label-warning')
                    }

                    if (newValue >= 400 & newValue <= 500) {
                        element.addClass('label-danger')
                    }

                }, true);

            },
            controller: function ($scope) {
                // some
            }
        }
    });