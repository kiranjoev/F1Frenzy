'use strict';

angular.module('app.controllers').controller('QualifyDetailsController', ['$scope', 'SeasonService', function ($scope, SeasonService) {

    $scope.raceDetails = [];

    $scope.loadQualifyingDetails = function () {
        $scope.common.displayLoading = true;
        SeasonService.getQualifyingDetails($scope.common.selectedSeason.season, $scope.common.selectedRace.round).then(function (response) {
            console.log(response);
            $scope.qualifyDetails = response.data.MRData.RaceTable.Races[0].QualifyingResults;
            $scope.common.displayLoading = false;
        }, function (error) {
            console.log(error);
            $scope.common.displayLoading = false;
        });
    }
    $scope.loadQualifyingDetails();

}]);