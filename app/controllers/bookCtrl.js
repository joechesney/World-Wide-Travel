"use strict";


angular.module("TravelApp").controller("BookCtrl", function($scope, travelFactory){
  console.log('testersertertsertets');
  $scope.tester = "tstererrr";

  travelFactory.getGuides()
  .then(guidesData=>{
    console.log('dataguides',guidesData.data.guides);
    $scope.guidesList = guidesData.data.guides;
  });
});
