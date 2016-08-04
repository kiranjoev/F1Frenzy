'use strict';

angular.module('app.controllers').controller('QualifyDetailsController', ['$scope', 'SeasonService', '$stateParams', function ($scope, SeasonService, $stateParams) {

    $scope.qualifyDetails = [];
    $scope.selectedSeason = $stateParams.season;
    $scope.selecteRaceName = $stateParams.raceName;
    $scope.selectedRaceId = $stateParams.raceId;

    $scope.loadQualifyingDetails = function () {
        $scope.common.displayLoading = true;
        SeasonService.getQualifyingDetails($scope.selectedSeason, $scope.selectedRaceId).then(function (response) {
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