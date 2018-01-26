"use strict";

angular.module("TravelThing").controller("BookCtrl", function($scope, $q, $http){
console.log('testersertertsertets');
  $scope.tester = "tstererrr";

  $scope.getGuides = () =>{
    return $q((resolve, reject)=>{
      $http.get("../../data/guides.json")
      .then(guidesData=>{
        console.log('inside',guidesData);
        resolve(guidesData);
      });
    });
  };

  $scope.getGuides()
  .then(guidesData=>{
    console.log('dataguides',guidesData.data.guides);
    $scope.guidesList = guidesData.data.guides;
  });
});
