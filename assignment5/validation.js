 var app= angular.module("myApp",[]);
 app.controller("myController",function ($scope){
    $scope.person=[
         Name=" ",
         surname=" ",
         phoneNo=" ",
         emailId=" ",
         password=" ",
         confirmPassword=" ",
    ]
    $scope.message='';
    
 });