var app = angular.module("myApp", []);
app.controller("cartController", function ($scope) {
  $scope.boughtItems = [];
  $scope.message = "";
  $scope.buyItems = [
    { name: "Good Day", quntity: 8 },
    { name: "Black Barbon", quntity: 6 },
    { name: "Sunfeast", quntity: 4 },
    { name: "Apple", quntity: 3 },
    { name: "Banana", quntity: 6 },
    { name: "Orange", quntity: 6 },
    { name: "Cake", quntity: 8 },
    { name: "Biscates", quntity: 4 },
    { name: "Unibic", quntity: 4 },
    { name: "Cool Cake", quntity: 9 },
  ];
  $scope.buy = function (item) {
    if (item) {
      $scope.boughtItems.push({ name: item.name, quntity: item.quntity });
      $scope.buyItems.splice($scope.buyItems.indexOf(item), 1);
    }
  };
});