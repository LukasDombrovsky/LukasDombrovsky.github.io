const app = angular.module('Portfolio', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache','ngRoute','ngSanitize','ngAnimate', 'ui.bootstrap','angularCSS']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
      templateUrl : "views/mainPage.html",
      controller : "MainController"
      // css: ['../css/mainPage_style.css']
  })
  .when("/TwitterInsights", {
      templateUrl : "views/TwitterInsights.html",
      controller : "TwitterInsightsController",
      css: ['https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800',
            'https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic',
            // '../css/twitterInsights_style/magnific-popup.css',
            '../css/twitterInsights_style/creative.css',
            '../css/twitterInsights_style/percent.css',
            // '../css/twitterInsights_style/sparkleProgressbar.css',
            '../css/twitterInsights_style/sentimentAndSparkleProgressbars.css',
            '../css/twitterInsights_style/dropdown.css'
      ]
  })
  .when("/StockPredict", {
    templateUrl : "views/StockPredict.html",
    controller : "StockPredictController",
    css: ['../css/stockPredict_style/creative.css',
          '../css/stockPredict_style/plotly.css',
          '../css/stockPredict_style/wifi.css'
    ]
  })
  .when("/CryptoDashboard", {
    templateUrl : "views/CryptoDashboard.html",
    controller : "CryptoDashboardController"
  })
  .otherwise({ 
    redirectTo: '/' 
  }); 
});
