angular.module('App')
    .controller('MainCtrl', ['$scope', 'Server', function ($scope, Server) {
        
        Server.all().
            then(function (response) {
                $scope.servers = response;
            }).catch(function (err) {
                console.log(err);
            });

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

        $scope.checkServers = function ()
        {
            angular.forEach($scope.servers, function (value, key)
            {
                if (value.selected)
                {
                    value.loading = true;
                    
                    Server.check(value._id)
                    .success(function (response) {
                        value.status = response.status;
                    })
                    .then(function (response) {
                        
                    }).catch(function (err) {
                        
                    }).finally(function () {
                        value.loading = false;
                    });

                } else {
                    value.loading = false;
                }
            });
        }

    }])