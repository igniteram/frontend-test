var app = angular.module('mainApp',['ngRoute']);

app.config(function ($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl:"app/views/login.html" ,
        controller: "loginController"
    })
    .when ('/home', {
        templateUrl:"app/views/homePage.html" 
    })
    .when ('/states', {
        templateUrl:"app/views/states.html", 
        controller:"stateController"
    })
    .when ('/guestbook', {
        templateUrl:"app/views/guestBook.html",
        controller:"guestBookController" 
    })
    .otherwise({
        redirectTo:'/'
    })
});

// Main Controller
app.controller('mainController',function ($scope) {
       $scope.activeMenu = 'Home';

});

//Login Controller
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
                        } 
                    }).error(function(data) {
                        $scope.loginerror = "Incorrect username or password!";
                    });
                }      
});

// State Controller
app.controller('stateController',function ($scope,$http) {
    
$scope.searchState = function () {
    $scope.searchData = {};
    $scope.searchAbbreviation =[];
    $http({
        url: '/states',
        method: 'GET',
    }).success(function (data) {
        //console.log(data);
        return $scope.searchData = data;

    }).error(function(data) {
        $scope.loginerror = "Error in server!";
    });
}     
});

//GuestBook Controller
app.controller('guestBookController', function($scope,$http) {
            $scope.msgDetails = {};
            $scope.submit = function () {
                var params = {
                    "message" : $scope.message,
                    "phone": $scope.phone
            };

$http({
        url:'/write',
        method: 'POST',
        data: params
    }).success(function (data) {
        //console.log(data);
    $scope.message = null;
    $scope.phone = null;

    }).error(function (data) {
        $scope.writeError = "Error encountered while submiting message";
    });
    $scope.displayMsg();
}
$scope.displayMsg = function () {

$http({
    url:'/read',
    method:'GET'
}).success(function (data) {
   // console.log(data);
    $scope.msgDetails = data;
}).error(function (data) {
    $scope.readError ='Error fetching data!';
}); 
}
});