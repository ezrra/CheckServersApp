angular.module('App', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when("/", {
            templateUrl : "/templates/servers/index.html",
            controller : "MainCtrl"
        })
        // .when("/users/create", {
        //     title: 'Create new user',
        //     templateUrl : "templates/create.html",
        //     controller : "CreateCtrl"
        // })
        // .when('/users/:id', {
        //     templateUrl : "templates/show.html",
        //     controller : "ShowCtrl"
        // })
        // .when("/users/:id/edit", {
        //     title: 'Edit user',
        //     templateUrl : "templates/edit.html",
        //     controller : "EditCtrl"
        // })
        // .when("/users/:id/destroy", {
        //     title: 'Delete user',
        //     templateUrl : "templates/destroy.html",
        //     controller : "DestroyCtrl"
        // })
        .otherwise({ redirectTo : "/"});
    })