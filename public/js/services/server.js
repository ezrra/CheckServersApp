angular.module('App')
    .factory('Server', ['$http', '$q', function ($http, $q) {
        
        var defered = $q.defer();
        var promise =  defered.promise;

        return {
            all: function ()
            {   
                // promise
                return $http
                        .get("/api/servers")
                        .error(function (data) {
                            
                        });
            },
            store: function (data) {
                $http.post('/api/servers', data)
                    .success(function () {

                    }).error(function (data) {
                        // console.log('Error: ' + data);
                    });
            }
        };

    }]);