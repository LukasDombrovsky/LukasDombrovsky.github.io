app.controller('MainController', ['$scope','$location','$document','$timeout','$css',
 function($scope,$location,$document,$timeout,$css) {
    // Apending custom stylesheets 
    // angular.element(document.querySelector('head')).append('<link href="../../css/mainPage_style.css" rel="stylesheet">');

    // angular.element(document.querySelector('.titanic naked')).append('<link href="../../css/mainPage_style.css" rel="stylesheet">');
    // transform: translate(-50%, -50%);

    // $timeout( function(){
    //     MainPage();
    // }, 2000);


    // $document.ready(function(){
    //     MainPage();
    // });

    // Calling MainPage JavaScript fucntion when this controlled is fully loaded
    this.$onInit = function () {
        MainPage();
    }

    $scope.openApp = function(appName) {
        $location.path('/' + appName);
    };

    // angular.element(document.querySelector(".titanic")).css('transform', 'translate(-50%, -50%)');

    // TweenMax.from(hi, 5, {
	// 	y: 140,
	// 	opacity: 0,
	// 	ease: Elastic.easeOut
	// })
 
}]);