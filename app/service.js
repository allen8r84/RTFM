var app = angular.module('rtfmApp');

app.service('EnvironmentService', function EnvironmentService($window) {
      this.getEnv = function () {
        return $window.env;
      }
    this.saveUsername = function(username){
        $window.localStorage.setItem('username', username);
    }
    
    this.getUsername = function() {
        return $window.localStorage.getItem('username');
    };
  });