angular.module('App')
    .controller('MainCtrl', ['$scope', 'Server', function ($scope, Server) {
    
        Server.all().
            then(function (response) {
                $scope.servers = response.data;
            }).catch(function () {
                
            });

    }])