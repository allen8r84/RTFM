var app = angular.module('rtfmApp');

app.controller('rtfmAppController', function($scope, $window, $firebaseArray, $firebaseObject) {
     var messages = $firebaseArray(new Firebase("https://jba-rtf.firebaseio.com/rtfmApp/messages"));
     var favoriteNumber = $firebaseArray(new Firebase("https://jba-rtf.firebaseio.com/rtfmApp/user/favoriteNumber"));
     var moment = $window.moment; // for createAt with current time
     var user = $firebaseObject(new Firebase("https://jba-rtf.firebaseio.com/rtfmApp/user"));
     
     $scope.messages = messages; //angularFire API
     user.$bindTo($scope, 'user');
     
     $scope.addChat = function(username, text) {
         //$add is another firebase function
         $scope.messages.$add({
             username: username,
             text: text,
             createdAt: moment().format()
         });
     };
     
     $scope.deleteMessage = function(message) {
         $scope.messages.$remove(message);
     }
});