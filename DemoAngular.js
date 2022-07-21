var app = angular.module('DemoAngular', []);
app.controller('DemoController', function ($scope) {
    $scope.list = ['A', 'E', 'I', 'O', 'U'];
    $scope.choice = 'your choice is: srikanth';
    $scope.ch = function (choice) {
        $scope.choice = "your choice is: " + choice;
    }
    $scope.c = function () {
        $scope.choice = "your choice is: " + $scope.mychoice;
    };
});
