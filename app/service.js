var app = angular.module('rtfmApp');

app.service('EnvironmentService', function EnvironmentService($window) {
    return {
      getEnv: function () {
        return $window.env;
      }
    }
    this.saveUsername = function(username){
        $window.localStorage.setItem('username', username);
    }
    
    this.getUsername = function(username) {
        return $window.localStorage.getItem('username');
    };
  });