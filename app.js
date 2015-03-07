var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/login', {
        templateUrl: 'login/loginView.html',
        controller: 'loginController'
    })
    .when('/threads', {
        templateUrl: 'threads/threadsView.html',
        controller: 'threadsController'
    })
    .when('threads/:threadId', {
        templateUrl: '',
        controller: ''
    })
    .otherwise({
        redirectTo: '/login'
    });
});