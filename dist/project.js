//====================================================================================================================
// Module:    TravelApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";
  // const angular = require("angular"); 
  // const ngRoute = require("angular-route");

  const travelApp = module;


  travelApp.config( ($routeProvider)=>{
    $routeProvider
    .when("/", {
      templateUrl:"../partials/book.html",
      controller:"BookCtrl"
    });
  });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/bookCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.controller("BookCtrl", function($scope, travelFactory){
    console.log('testersertertsertets');
    $scope.tester = "tstererrr";

    travelFactory.getGuides()
    .then(guidesData=>{
      console.log('dataguides',guidesData.data.guides);
      $scope.guidesList = guidesData.data.guides;
    });
  });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/travel.factory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.factory("travelFactory", function($q, $http){
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


}) (angular.module ('TravelApp', ['ngRoute']));



//====================================================================================================================
// Module:    TravelApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";
  // const angular = require("angular"); 
  // const ngRoute = require("angular-route");

  const travelApp = module;


  travelApp.config( ($routeProvider)=>{
    $routeProvider
    .when("/", {
      templateUrl:"../partials/book.html",
      controller:"BookCtrl"
    });
  });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/bookCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.controller("BookCtrl", function($scope, travelFactory){
    console.log('testersertertsertets');
    $scope.tester = "tstererrr";

    travelFactory.getGuides()
    .then(guidesData=>{
      console.log('dataguides',guidesData.data.guides);
      $scope.guidesList = guidesData.data.guides;
    });
  });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/travel.factory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.factory("travelFactory", function($q, $http){
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


}) (angular.module ('TravelApp', ['ngRoute']));


