angular.module('App').factory('Server', ['$http', function ($http){
    
    return {
        all: function ()
        {
            $http.get('/api/servers')
                .success(function (data) {
                    return data;
                })
                .error(function (data) {
                    return [];
                });
        }
    };
}]);