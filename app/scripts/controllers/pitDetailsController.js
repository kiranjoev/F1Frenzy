'use strict';

angular.module('app.controllers').controller('PitDetailsController', ['$scope', 'SeasonService', '$stateParams', function ($scope, SeasonService, $stateParams) {

    $scope.pitstopDetails = [];
    $scope.selectedSeason = $stateParams.season;
    $scope.selecteRaceName = $stateParams.raceName;
    $scope.selectedRaceId = $stateParams.raceId;

    $scope.loadPitDetails = function () {
        $scope.common.displayLoading = true;
        SeasonService.getPitDetails($scope.selectedSeason, $scope.selectedRaceId).then(function (response) {
            console.log(response);
            $scope.pitstopDetails = response.data.MRData.RaceTable.Races[0].PitStops;
            $scope.common.displayLoading = false;
        }, function (error) {
            console.log(error);
            $scope.common.displayLoading = false;
        });
    }
    $scope.loadPitDetails();

}]);