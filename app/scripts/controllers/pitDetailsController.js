'use strict';

angular.module('app.controllers').controller('PitDetailsController', ['$scope', 'SeasonService', function ($scope, SeasonService) {

    $scope.raceDetails = [];

    $scope.loadPitDetails = function () {
        $scope.common.displayLoading = true;
        SeasonService.getPitDetails($scope.common.selectedSeason.season, $scope.common.selectedRace.round).then(function (response) {
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