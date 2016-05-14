angular.module('App')
    .controller('EditCtrl', ['$scope', 'Server', '$location', '$routeParams', function ($scope, Server, $location, $routeParams) {
        
        var id = $routeParams.id;
        // var server;
        Server.get(id)
            .then(function (response)
            {
                $scope.server = response.data;
                //console.log(server)
            }).catch(function () {

            });
        
        $scope.update = function (server) {
            console.log(server)
            // Server.update();
            // Server.update(id, server);

            // .then(function (response)
            // {
            //     console.log(response);
            // }).catch(function () {

            // });

            // $location.url("/servers");
        }

        

            // console.log($scope.server)

    }])