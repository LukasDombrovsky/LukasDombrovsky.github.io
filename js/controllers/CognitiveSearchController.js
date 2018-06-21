app.controller('CognitiveSearchController', ['$scope','$location',
 function($scope,$location) {

    $scope.toMainPage = function() {
        $location.path('/');
    };
 
}]);