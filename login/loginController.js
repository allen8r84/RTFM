var app = angular.module('rtfmApp');

app.controller('loginController', function($scope, EnvironmentService, $location) {
        $scope.env = EnvironmentService.getEnv();
        $scope.logMeIn = function(username) {
            EnvironmentService.saveUsername(username);
            $location.path('/threads');
        };
});
