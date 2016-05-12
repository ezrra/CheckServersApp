angular.module('App')
    .controller('CreateCtrl', ['$scope', 'Server', '$location', function ($scope, Server, $location) {
    
        $scope.server = {};

        $scope.store = function () {

            Server.store($scope.server);

            $location.url("/")
        }

    }]);