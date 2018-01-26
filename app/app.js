"use strict";
// const angular = require("angular"); 
// const ngRoute = require("angular-route");

const travelApp = angular.module("TravelThing", ["ngRoute"]);


travelApp.config( ($routeProvider)=>{
  $routeProvider
  .when("/", {
    templateUrl:"../partials/book.html",
    controller:"BookCtrl"
  });
});