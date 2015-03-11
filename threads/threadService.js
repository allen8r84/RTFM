var app = angular.module('rtfmApp');

app.service('threadService', function(EnvironmentService, $firebaseArray) {
    var firebaseUrl = EnvironmentService.getEnv().firebase;
    
    this.getThreads = function(){
      return $firebaseArray(new Firebase(firebaseUrl + '/threads'));
    };
    this.getThread = function(){
        return $firebaseObject(new Firebase(firebaseUrl + '/threads/' + threadId));
    };
    
});