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
// File: ./app/AppConstants.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.constant("FIREBASE_CONFIG", {
    apiKey: "AIzaSyA8Y6oM97xrwFNhJ1rN8PBSdYFff5_U7jY",
    authDomain: "testetization.firebaseapp.com",
    databaseURL: "https://testetization.firebaseio.com",
    projectId: "testetization",
    storageBucket: "testetization.appspot.com",
    messagingSenderId: "917140062893"
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/AuthCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
  .controller("AuthCtrl", function($scope, AuthFactory) {
    $scope.auth = {};

    $scope.registerUser = function(registerNewUser) {
      AuthFactory.registerWithEmail(registerNewUser)
      .then(function(didRegister) {
        console.log(didRegister);
      });
    };
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


  module
  .factory("travelFactory", function($q, $http){
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
// File: ./app/AppConstants.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.constant("FIREBASE_CONFIG", {
    apiKey: "AIzaSyA8Y6oM97xrwFNhJ1rN8PBSdYFff5_U7jY",
    authDomain: "testetization.firebaseapp.com",
    databaseURL: "https://testetization.firebaseio.com",
    projectId: "testetization",
    storageBucket: "testetization.appspot.com",
    messagingSenderId: "917140062893"
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/AuthCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
  .controller("AuthCtrl", function($scope, AuthFactory) {
    $scope.auth = {};

    $scope.registerUser = function(registerNewUser) {
      AuthFactory.registerWithEmail(registerNewUser)
      .then(function(didRegister) {
        console.log(didRegister);
      });
    };
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
// File: ./app/factories/AuthFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
  .factory("AuthFactory", function($q, $http, $rootScope, FIREBASE_CONFIG) {
    let currentUserData = null;

  //Firebase: Determine if user is authenticated.
    let isAuthenticated = () => {
        return firebase.auth().currentUser ? true : false;
    };

  //Firebase: Return email, UID for user that is currently logged in.
    let getUser = () => {
      return firebase.auth().currentUser;
    };

  // Kills browser cookie with firebase credentials
    let logout = () => {
      firebase.auth().signOut();
    };

  //Firebase: Use input credentials to authenticate user.
    let authenticate = (credentials) => {
      return firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
    };

  //Firebase: Register a new user with email and password
    let registerWithEmail = (user) => {
      return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
    };

    return {isAuthenticated, getUser, logout, registerWithEmail, authenticate};
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/travel.factory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module
  .factory("travelFactory", function($q, $http){
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
    })
    .when("/auth",{
      templateUrl:"./partials/auth.html"
    });
  });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/AppConstants.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.constant("FIREBASE_CONFIG", {
    apiKey: "AIzaSyA8Y6oM97xrwFNhJ1rN8PBSdYFff5_U7jY",
    authDomain: "testetization.firebaseapp.com",
    databaseURL: "https://testetization.firebaseio.com",
    projectId: "testetization",
    storageBucket: "testetization.appspot.com",
    messagingSenderId: "917140062893"
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/AuthCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
  .controller("AuthCtrl", function($scope, AuthFactory) {
    $scope.auth = {};

    $scope.registerUser = function(registerNewUser) {
      AuthFactory.registerWithEmail(registerNewUser)
      .then(function(didRegister) {
        console.log(didRegister);
      });
    };
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
// File: ./app/factories/AuthFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
  .factory("AuthFactory", function($q, $http, $rootScope, FIREBASE_CONFIG) {
    let currentUserData = null;

  //Firebase: Determine if user is authenticated.
    let isAuthenticated = () => {
        return firebase.auth().currentUser ? true : false;
    };

  //Firebase: Return email, UID for user that is currently logged in.
    let getUser = () => {
      return firebase.auth().currentUser;
    };

  // Kills browser cookie with firebase credentials
    let logout = () => {
      firebase.auth().signOut();
    };

  //Firebase: Use input credentials to authenticate user.
    let authenticate = (credentials) => {
      return firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
    };

  //Firebase: Register a new user with email and password
    let registerWithEmail = (user) => {
      return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
    };

    return {isAuthenticated, getUser, logout, registerWithEmail, authenticate};
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/travel.factory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module
  .factory("travelFactory", function($q, $http){
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
    })
    .when("/auth",{
      templateUrl:"../partials/auth.html"
    });
  });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/AppConstants.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.constant("FIREBASE_CONFIG", {
    apiKey: "AIzaSyA8Y6oM97xrwFNhJ1rN8PBSdYFff5_U7jY",
    authDomain: "testetization.firebaseapp.com",
    databaseURL: "https://testetization.firebaseio.com",
    projectId: "testetization",
    storageBucket: "testetization.appspot.com",
    messagingSenderId: "917140062893"
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/AuthCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
  .controller("AuthCtrl", function($scope, AuthFactory) {
    $scope.auth = {};

    $scope.registerUser = function(registerNewUser) {
      AuthFactory.registerWithEmail(registerNewUser)
      .then(function(didRegister) {
        console.log(didRegister);
      });
    };
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
// File: ./app/factories/AuthFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
  .factory("AuthFactory", function($q, $http, $rootScope, FIREBASE_CONFIG) {
    let currentUserData = null;

  //Firebase: Determine if user is authenticated.
    let isAuthenticated = () => {
        return firebase.auth().currentUser ? true : false;
    };

  //Firebase: Return email, UID for user that is currently logged in.
    let getUser = () => {
      return firebase.auth().currentUser;
    };

  // Kills browser cookie with firebase credentials
    let logout = () => {
      firebase.auth().signOut();
    };

  //Firebase: Use input credentials to authenticate user.
    let authenticate = (credentials) => {
      return firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
    };

  //Firebase: Register a new user with email and password
    let registerWithEmail = (user) => {
      return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
    };

    return {isAuthenticated, getUser, logout, registerWithEmail, authenticate};
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/travel.factory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module
  .factory("travelFactory", function($q, $http){
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
    })
    .when("/auth",{
      templateUrl:"../partials/auth.html",
      controller:"AuthCtrl"
    })
    .otherwise("/auth");
  });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/AppConstants.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.constant("FIREBASE_CONFIG", {
    apiKey: "AIzaSyA8Y6oM97xrwFNhJ1rN8PBSdYFff5_U7jY",
    authDomain: "testetization.firebaseapp.com",
    databaseURL: "https://testetization.firebaseio.com",
    projectId: "testetization",
    storageBucket: "testetization.appspot.com",
    messagingSenderId: "917140062893"
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/AuthCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
  .controller("AuthCtrl", function($scope, AuthFactory) {
    $scope.auth = {};

    $scope.registerUser = function(registerNewUser) {
      AuthFactory.registerWithEmail(registerNewUser)
      .then(function(didRegister) {
        console.log(didRegister);
      });
    };
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
// File: ./app/factories/AuthFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module
  .factory("AuthFactory", function($q, $http, $rootScope, FIREBASE_CONFIG) {
    let currentUserData = null;

  //Firebase: Determine if user is authenticated.
    let isAuthenticated = () => {
        return firebase.auth().currentUser ? true : false;
    };

  //Firebase: Return email, UID for user that is currently logged in.
    let getUser = () => {
      return firebase.auth().currentUser;
    };

  // Kills browser cookie with firebase credentials
    let logout = () => {
      firebase.auth().signOut();
    };

  //Firebase: Use input credentials to authenticate user.
    let authenticate = (credentials) => {
      return firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
    };

  //Firebase: Register a new user with email and password
    let registerWithEmail = (user) => {
      return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
    };

    return {isAuthenticated, getUser, logout, registerWithEmail, authenticate};
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/travel.factory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module
  .factory("travelFactory", function($q, $http){
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


