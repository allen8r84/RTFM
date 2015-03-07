var app = angular.module('rtfmApp');

app.service('EnvironmentService', function EnvironmentService($window) {
    return {
      getEnv: function () {
        return $window.env;
      }
    }
  });