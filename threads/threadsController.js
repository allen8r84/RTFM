var app = angular.module('rtfmApp');

app.controller('threadsController', function($scope, threads) {
        $scope.threads = threads;

        $scope.threads.$loaded().then(function(threads){
            console.log($scope.threads);
        });
        
        $scope.createThread = function(username, threadTitle){
            $scope.threads.$add({
                'username': username,
                'title': threadTitle               
            });
            $scope.newThreadTitle = '';
        };
        

    });
