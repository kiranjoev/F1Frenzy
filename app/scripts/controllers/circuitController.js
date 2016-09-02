'use strict';

angular.module('app.controllers').controller('CircuitController', ['$scope', 'CircuitService', function ($scope, CircuitService) {

    $scope.displayLoading = false;
    
    $scope.loadCircuitDetails = function () {
        $scope.displayLoading = true;
        CircuitService.getCircuitDetails().then(function (response) {
            console.log(response);
            $scope.circuitList = response.data.MRData.CircuitTable.Circuits;
            $scope.displayLoading = false;
        }, function (error) {
            console.log(error);
            $scope.displayLoading = false;
        });
    }
    $scope.loadCircuitDetails();

}]);