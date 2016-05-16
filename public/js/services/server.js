angular.module('App')
    .factory('Server', ['$http', '$q', function ($http, $q) {

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
            },
            get: function (id) {
                // promise
                return $http
                    .get('/api/servers/' + id)
                    .error(function (data) {

                    });
            },
            update: function (server) {

                return $http.put('/api/servers/' + server._id, server);
                /*
                    .success(function () {
                        console.log('success')
                    }).error(function (response) {
                        console.log(response)
                    }); */
            },
            destroy: function (server) {

                return $http.delete('/api/servers/' + server._id);
            }
        };

    }]);