'use strict';

angular.module('app.controllers').controller('ResultController', ['$scope', 'ResultService', function ($scope, ResultService) {

    $scope.loadResultDetails = function () {
        ResultService.getResultDetails().then(function (response) {
            console.log(response);
            $scope.resultDetails = response.data.MRData.RaceTable.Races[0].Results;
        }, function (error) {
            console.log(error);
        });
    }
    $scope.loadResultDetails();

}]);