app.controller('TwitterInsightsController', ['$scope','$location',
 function($scope,$location) {

    $scope.toMainPage = function() {
        $location.path('/');
    };
 
}]);