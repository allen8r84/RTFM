var app = angular.module('rtfmApp');

app.service('threadService', function(EnvironmentService, $firebaseArray, $firebaseObject) {
    var firebaseUrl = EnvironmentService.getEnv().firebase;
    
    this.getThreads = function(){
      return $firebaseArray(new Firebase(firebaseUrl + '/threads'));
    };
    
    this.getThread = function(threadId){
        return $firebaseObject(new Firebase(firebaseUrl + '/threads/' + threadId));
    };
    
    this.getComments = function(threadId){
        return $firebaseArray(new Firebase(firebaseUrl + '/threads/' + threadId + '/comments'));  
    };
    
});