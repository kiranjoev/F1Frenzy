'use strict';

angular.module('app.controllers').controller('ResultController', ['$scope', 'ResultService', function ($scope, ResultService) {

    $scope.loadResultDetails = function () {
        $scope.displayLoading = true;
        ResultService.getResultDetails().then(function (response) {
            console.log(response);
            $scope.resultDetails = response.data.MRData.RaceTable.Races[0].Results;
            $scope.displayLoading = false;
        }, function (error) {
            console.log(error);
            $scope.displayLoading = false;
        });
    }
    $scope.loadResultDetails();

}]);