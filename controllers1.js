var app = angular.module('geeks', []);
app.controller('personCtrl', function($scope) {

    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
});