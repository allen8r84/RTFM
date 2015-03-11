var app = angular.module('rtfmApp');

app.controller('ThreadCtrl', function($scope, thread, comments) {
    var thread = thread;
    thread.$bindTo($scope, 'thread');
    
    $scope.comments = comments;
    
    $scope.createComment = function(username, commentText){
        $scope.comments.$add({
            'username': username,
            'text': commentText
        });
        $scope.newCommentText = '';
    }
});