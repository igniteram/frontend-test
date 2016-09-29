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
        templateUrl:"/views/states.html" 
    })
    .when ('/guestbook', {
        templateUrl:"/views/guestBook.html" 
    });
});

app.controller('loginController',function ($scope,$location,$http) {
  

});
app.controller('stateController',function ($scope,$http) {


});