var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/login', {
        templateUrl: 'login/loginView.html',
        controller: 'loginController'
    })
    .when('/threads', {
        templateUrl: 'threads/threadsView.html',
        controller: 'threadsController',
        resolve: {
            threads: function(threadService){
                return threadService.getThreads();
            }
        }
    })
    .when('/thread/:threadId', {
        templateUrl: 'thread/thread.html',
        controller: 'ThreadCtrl',
        resolve: {
            thread: function(threadService, $route){
                   return threadService.getThread($route.current.params.threadId);
            },
            comments: function(threadService, $route){
                    return threadService.getComments($route.current.params.threadId);
            }
        }
    })
    .otherwise({
        redirectTo: '/login'
    });
});

app.run(function($rootScope, $location, EnvironmentService) {
    $rootScope.$on('$routeChangeStart', function(event, next, current){
        if (EnvironmentService.getUsername()) {
            $rootScope.username = EnvironmentService.getUsername();

        }else {
            $location.path('/login');
        }
  })
});