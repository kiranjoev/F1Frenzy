'use strict';

angular.module('app.controllers').controller('SeasonStandingController', ['$scope', 'SeasonService', 'ScheduleService','$state', function ($scope, SeasonService, ScheduleService, $state) {

    $scope.displayRaceDetails = true;
    $scope.displayPitDetails = true;
    $scope.displayQualifyingDetails = true;
    $scope.isSeasonOpen = false;
    $scope.isRaceOpen = false;
    $scope.common = {};
    $scope.common.displayLoading = false;

    $scope.changeSeason = function (selectedSeason) {
        if (Math.floor(selectedSeason) < 2003) {
            $scope.displayPitDetails = false;
            $scope.displayQualifyingDetails = false;
        } else if (Math.floor(selectedSeason) < 2012) {
            $scope.displayPitDetails = false;
        }
        $scope.common.selectedSeason = selectedSeason;
        $scope.loadRaceList();
    }

    $scope.changeRace = function (selectedRace) {
        $scope.common.selectedRace = selectedRace;
    }

    $scope.loadSeasonList = function () {
        $scope.common.displayLoading = true;
        SeasonService.getSeasonDetails().then(function (response) {
            console.log(response);
            $scope.seasonList = response.data.MRData.SeasonTable.Seasons;
            $scope.seasonList.reverse();
            $scope.common.selectedSeason = $scope.seasonList[0];
            $scope.loadRaceList();
        }, function (error) {
            console.log(error);
            $scope.common.displayLoading = false;
        });
    }
    $scope.loadSeasonList();

    $scope.loadRaceList = function () {
        var sampleRaceList = [];
        $scope.common.displayLoading = true;
        ScheduleService.getScheduleDetails($scope.common.selectedSeason.season).then(function (response) {
            console.log(response);
            for (var index in response.data.MRData.RaceTable.Races) {
                sampleRaceList.push({
                    name: response.data.MRData.RaceTable.Races[index].raceName,
                    round: response.data.MRData.RaceTable.Races[index].round
                });
            }
            $scope.raceList = sampleRaceList;
            $scope.common.selectedRace = $scope.raceList[0];
            $scope.common.displayLoading = false;
        }, function (error) {
            console.log(error);
            $scope.common.displayLoading = false;
        });
    }

    $scope.updateFilter = function () {
        $state.go('seasonStanding.raceDetails');
    }

}]);