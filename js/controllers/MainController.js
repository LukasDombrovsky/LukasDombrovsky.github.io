app.controller('MainController', ['$scope','$location',
 function($scope,$location) {

    $scope.openApp = function(appName) {
        $location.path('/' + appName);
    };
 
}]);