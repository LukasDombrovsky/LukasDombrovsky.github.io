const app = angular.module('Portfolio', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache','ngRoute','ngSanitize','ngAnimate', 'ui.bootstrap']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when("/", {
      templateUrl : "views/mainPage.html",
      controller : "MainController"
  })
  .when("/TwitterInsights", {
      templateUrl : "views/TwitterInsights_index.html",
      controller : "MainController"
  })
  .when("/StockPredict", {
    templateUrl : "views/StockPredict_index.html",
    controller : "StockPredictController"
  })
  .when("/CognitiveSearch", {
    templateUrl : "views/CognitiveSearch_index.html",
    controller : "CognitiveSearchController"
  })
  .when("/CoinSignals", {
    templateUrl : "views/CoinSignals_index.html",
    controller : "CoinSignalsController"
  })
  .otherwise({ 
    redirectTo: '/' 
  }); 
/*
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });*/
});

// Remove backslashes from html string
// app.filter('removeBackslashes', function() {
// 	return function(text) {
// 		return  text ? String(text).replace(/\\/gm, '') : '';
// 	};
// });

 //Read data
  // $http.get("es_apiResponse.json")
  //     .then(function(response) {
  //       //First function handles success
  //         $scope.items = response.data.es_apiResponse.es_result;
  //      }, function(response) {
  //       //Second function handles error
  //         $scope.items = "Error reading file...";
  //  });

