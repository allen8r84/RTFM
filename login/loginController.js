var app = angular.module('rtfmApp');

app.controller('loginController', function($scope, EnvironmentService, $location) {
        $scope.env = EnvironmentService.getEnv();
        $scope.logMeIn = function(username) {
            $location.path('/threads');
        };
});
