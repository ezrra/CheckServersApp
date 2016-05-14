angular.module('App')
    .controller('MainCtrl', ['$scope', 'Server', function ($scope, Server) {
    
        Server.all().
            then(function (response) {
                $scope.servers = response.data;
                console.log($scope.servers)
            }).catch(function (err) {
                console.log(err);
            });

    }])