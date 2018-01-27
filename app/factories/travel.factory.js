"use strict";


angular.module("TravelThing").factory("travelFactory", function($q, $http){
  const getGuides = () =>{
    return $q((resolve, reject)=>{
      $http.get("../../data/guides.json")
      .then(guidesData=>{
        console.log('inside',guidesData);
        resolve(guidesData);
      });
    });
  };
  return { getGuides };
});
