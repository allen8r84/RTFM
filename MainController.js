var app = angular.module('rtfmApp');

app.controller('rtfmAppController', function($scope, $window, $firebaseArray, $firebaseObject) {
     var messages = $firebaseArray(new Firebase("https://jba-rtf.firebaseio.com/pickleApp/messages"));
     var favoriteNumber = $firebaseArray(new Firebase("https://jba-rtf.firebaseio.com/pickleApp/user/favoriteNumber"));
     var moment = $window.moment; // for createAt with current time
     var user = $firebaseObject(new Firebase("https://jba-rtf.firebaseio.com/pickleApp/user"));
     
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