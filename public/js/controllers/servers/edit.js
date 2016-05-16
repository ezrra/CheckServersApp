angular.module('App')
    .controller('EditCtrl', ['$scope', 'Server', '$location', '$routeParams', function ($scope, Server, $location, $routeParams) {
        
        var id = $routeParams.id;
        // var server;
        Server.get(id)
            .then(function (response)
            {
                $scope.server = response.data;
            }).catch(function () {

            });
        
        $scope.update = function (server) {
            
            Server.update(server)
                .then(function (response)
                {
                    
                    if (response.status == 200) {
                        alert('Updated')
                    }

                    console.log(response)

                }).catch(function () {

            });
        }

    }])