"use strict"
var app = angular.module('mainApp',['ngRoute']);

app.config(function ($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl:"/views/login.html" ,
        controller: "loginController"
    })
    .when ('/home', {
        templateUrl:"/views/homePage.html" 
    })
    .when ('/states', {
        templateUrl:"/views/states.html", 
        controller:"stateController"
    })
    .when ('/guestbook', {
        templateUrl:"/views/guestBook.html" 
    })
    .otherwise({
        redirectTo:'/'
    })
});

app.controller('loginController',function ($scope,$location,$http,$rootScope) {
  $rootScope.logIn = false ;
    $scope.login = function() {
                     var params = {
                        "user": $scope.username,
                        "password": $scope.password
                      };
                    
                    $http({
                        url: '/login',
                        method: 'POST',
                        data: params}).success(function(data) {
                        if (data.result) {
                            $scope.loginerror = "success!";
                            $rootScope.logIn = true;
                            window.location.href = "/#home";
                        } else {
                            $scope.loginerror = "Incorrect username or password!";
                        }
                    }).error(function(data) {
                        $scope.loginerror = "Error in server!";
                    });
                }

          
  
});
app.controller('stateController',function ($scope,$http) {

$scope.search = function() {
   // var searchState = $scope.searchState;
   // var states = [];
    $http({
        url: '/states',
        method: 'GET',
    }).success(function (data) {
        console.log(data);
        $scope.searchData = data;

    }).error(function(data) {
        $scope.loginerror = "Error in server!";
    });
}

$scope.abbreviations = function () {

 $http({
        url: '/states/abbreviations',
        method: 'GET',
    }).success(function (data) {
        console.log(data);
        $scope.searchAbbreviation = data;

    }).error(function(data) {
        $scope.loginerror = "Error in server!";
    });
}

});