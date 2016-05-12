angular.module('App', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when("/", {
            templateUrl : "/templates/servers/index.html",
            controller : "MainCtrl"
        })
        .when("/servers/create", {
            templateUrl : "/templates/servers/create.html",
            controller : "CreateCtrl"
        })
        // .when('/users/:id', {
        //     templateUrl : "templates/show.html",
        //     controller : "ShowCtrl"
        // })
        // .when("/users/:id/edit", {
        //     templateUrl : "templates/edit.html",
        //     controller : "EditCtrl"
        // })
        // .when("/users/:id/destroy", {
        //     templateUrl : "templates/destroy.html",
        //     controller : "DestroyCtrl"
        // })
        .otherwise({ redirectTo : "/"});
    })