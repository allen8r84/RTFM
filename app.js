var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/login', {
        templateUrl: '',
        controller: '',
        resolve: {}
    })
    .when('/threads', {
        templateUrl: '',
        controller: '',
        resolve: {}
    })
    .when('threads/:threadId', {
        templateUrl: '',
        controller: '',
        resolve: {}
    })
    .otherwise({
        redirectTo: '/login'
    });
});