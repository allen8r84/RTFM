var app = angular.module('rtfmApp');

app.controller('loginController', function($scope, EnvironmentService) {
        $scope.env = EnvironmentService.getEnv();
});
