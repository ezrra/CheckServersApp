angular.module('App')
    .factory('Server', ['$http', '$q', function ($http, $q) {

        return {
            all: function ()
            {   
                var def = $q.defer();
                $http.get("/api/servers")
                    .success(function(data) {
                        def.resolve(data);
                    })
                    .error(function (data) {
                        def.reject("Failed to get albums");
                    });
                return def.promise;
            },
            store: function (data) {
                $http.post('/api/servers', data)
                    .success(function () {
                    }).error(function (data) {
                    });
            },
            get: function (id) {
                // promise
                return $http
                    .get('/api/servers/' + id)
                    .success(function () {
                    }).error(function (data) {
                    });
            },
            update: function (server) {
                return $http.put('/api/servers/' + server._id, server);
            },
            destroy: function (server) {
                return $http.delete('/api/servers/' + server._id);
            },
            check: function (id) {
                return $http.get("/api/servers/" + id + '/check')
                                .success(function(data, status, headers, config) {
                            })
                            .error(function(data, status, headers, config) {
                                console.log(data)
                            });
            }
        };

    }]);