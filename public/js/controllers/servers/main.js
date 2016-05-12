angular.module('App')
    .controller('MainCtrl', ['$scope', 'Server', function ($scope, Server) {
    
        $scope.servers = Server.all();

        console.log($scope.servers)

    }])