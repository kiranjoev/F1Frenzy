'use strict';

angular.module('app.controllers').controller('RaceDetailsController', ['$scope', 'SeasonService', function ($scope, SeasonService) {

    $scope.raceDetails = [];

    $scope.loadRaceDetails = function () {
        $scope.common.displayLoading = true;
        SeasonService.getRaceDetails($scope.common.selectedSeason.season, $scope.common.selectedRace.round).then(function (response) {
            console.log(response);
            $scope.raceDetails = response.data.MRData.RaceTable.Races[0].Results;
            $scope.common.displayLoading = false;
        }, function (error) {
            console.log(error);
            $scope.common.displayLoading = false;
        });
    }
    $scope.loadRaceDetails();

}]);