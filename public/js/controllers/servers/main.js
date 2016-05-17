angular.module('App')
    .controller('MainCtrl', ['$scope', 'Server', function ($scope, Server) {
        
        Server.all().
            then(function (response) {
                $scope.servers = response;
            }).catch(function (err) {
                console.log(err);
            });

        /**
         * Check & uncheck checkbox all
         */
        $scope.checkAll = function () {
            for (var i = 0; i < $scope.servers.length; i++) {
                $scope.servers[i].selected = $scope.checkedAll;
            }
        };

        $scope.changeCheckAll = function () {
            for (var i = 0; i < $scope.servers.length; i++) {
                if (! $scope.servers[i].selected ) {
                    $scope.checkedAll = false;
                    return false;
                }
            }
            $scope.checkedAll = true;
        }

        /**
         * Check servers event click
         */
        
        $scope.checkServers = function () {
            for (var i = 0; i < $scope.servers.length; i++) {
                if ($scope.servers[i].selected) {
                    // Use node to check servers
                    
                    // console.log($scope.servers[i])
                    // Server.check($scope.servers[i].website)
                    //     .then(function (response) {
                    //         console.log(response)
                    //     }).catch(function (err) {

                    //     });
                }
            }
        }

    }])