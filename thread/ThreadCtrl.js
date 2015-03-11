var app = angular.module('rtfmApp');

app.controller('ThreadCtrl', function($scope, thread) {
    var thread = thread;
    thread.$bindTo($scope, 'thread');
});