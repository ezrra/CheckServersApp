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
        .when("/servers/:id/edit", {
            templateUrl : "templates/servers/edit.html",
            controller : "EditCtrl"
        })
        .when("/servers/:id/destroy", {
            templateUrl : "templates/servers/destroy.html",
            controller : "DestroyCtrl"
        })
        .otherwise({ redirectTo : "/"});
    })