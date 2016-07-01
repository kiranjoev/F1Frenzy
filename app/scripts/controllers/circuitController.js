'use strict';

angular.module('app.controllers').controller('CircuitController',['$scope','CircuitService',function($scope,CircuitService){
    
    CircuitService.getCircuitDetails().then(function(response){
        console.log(response);
        $scope.circuitList = response.data.MRData.CircuitTable.Circuits;
    },function(error){
        console.log(error);
    });
    
}]);