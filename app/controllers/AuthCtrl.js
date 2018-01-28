"use strict";

angular.module("TravelApp")
.controller("AuthCtrl", function($scope, AuthFactory, $location) {
  $scope.auth = {};

  $scope.registerUser = function(registerNewUser) {
    AuthFactory.registerWithEmail(registerNewUser)
    .then(function(didRegister) {
      console.log(didRegister);
    });
  };

  let logMeIn = function(loginStuff){
    AuthFactory.authenticate(loginStuff).then(function(didLogin){
      $scope.login = {};
      $scope.register = {};
      $location.url("/songs/list");
    });
  };

  $scope.loginUser = function(loginNewUser){
    logMeIn(loginNewUser);
  };

  $scope.logoutUser = function(){
    AuthFactory.logout();
    $location.url('/auth');
  }
});