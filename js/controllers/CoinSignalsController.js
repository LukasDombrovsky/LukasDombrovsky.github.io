app.controller('CoinSignalsController', ['$scope','$location',
 function($scope,$location) {

    $scope.toMainPage = function() {
        $location.path('/');
    };
 
}]);