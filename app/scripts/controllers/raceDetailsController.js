'use strict';

angular.module('app.controllers').controller('RaceDetailsController', ['$scope', 'SeasonService', '$stateParams', function ($scope, SeasonService, $stateParams) {

    $scope.raceDetails = [];
    $scope.selectedSeason = $stateParams.season;
    $scope.selecteRaceName = $stateParams.raceName;
    $scope.selectedRaceId = $stateParams.raceId;

    $scope.loadRaceDetails = function () {
        $scope.common.displayLoading = true;
        SeasonService.getRaceDetails($scope.selectedSeason, $scope.selectedRaceId).then(function (response) {
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