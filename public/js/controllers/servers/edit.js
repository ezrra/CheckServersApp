angular.module('App')
    .controller('EditCtrl', ['$scope', 'Server', '$location', '$routeParams', function ($scope, Server, $location, $routeParams) {
        
        var id = $routeParams.id;

        Server.get(id)
            .then(function (response)
            {
                $scope.server = response.data;
            }).catch(function () {

            });

        $scope.update = function () {
            Server.update($scope);
            $location.url("/");
        }

    }])