app.controller('StockPredictController', ['$scope','$location',
 function($scope,$location) {

    $scope.toMainPage = function() {
        $location.path('/');
    };
 
}]);