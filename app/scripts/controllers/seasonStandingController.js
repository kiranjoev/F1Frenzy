'use strict';

angular.module('app.controllers').controller('SeasonStandingController', ['$scope', 'SeasonService', 'ScheduleService', '$state', function ($scope, SeasonService, ScheduleService, $state) {

    $scope.displayRaceDetails = true;
    $scope.displayPitDetails = true;
    $scope.displayQualifyingDetails = true;
    $scope.isSeasonOpen = false;
    $scope.isRaceOpen = false;
    $scope.common = {};
    $scope.common.displayLoading = false;

    $scope.loadSeasonList = function () {
        $scope.common.displayLoading = true;
        SeasonService.getSeasonDetails().then(function (response) {
            console.log(response);
            $scope.seasonList = response.data.MRData.SeasonTable.Seasons;
            $scope.seasonList.reverse();
            $scope.selectedSeason = $scope.seasonList[0].season;
            $scope.loadRaceList();
        }, function (error) {
            console.log(error);
            $scope.common.displayLoading = false;
        });
    }

    $scope.loadRaceList = function () {
        var sampleRaceList = [];
        $scope.common.displayLoading = true;
        ScheduleService.getScheduleDetails($scope.selectedSeason).then(function (response) {
            console.log(response);
            for (var index in response.data.MRData.RaceTable.Races) {
                sampleRaceList.push({
                    name: response.data.MRData.RaceTable.Races[index].raceName,
                    round: response.data.MRData.RaceTable.Races[index].round
                });
            }
            $scope.raceList = sampleRaceList;
            $scope.selectedRace = $scope.raceList[0];
            $scope.common.displayLoading = false;
            $state.go('seasonStanding.raceDetails', ({
                season: $scope.selectedSeason,
                raceId: $scope.selectedRace.round,
                raceName: $scope.selectedRace.name
            }));
        }, function (error) {
            console.log(error);
            $scope.common.displayLoading = false;
        });
    }

    $scope.changeSeason = function (selectedSeason) {
        if (Math.floor(selectedSeason) < 2003) {
            $scope.displayPitDetails = false;
            $scope.displayQualifyingDetails = false;
        } else if (Math.floor(selectedSeason) < 2012) {
            $scope.displayPitDetails = false;
        } else {
            $scope.displayRaceDetails = true;
            $scope.displayPitDetails = true;
            $scope.displayQualifyingDetails = true;
        }
        $scope.selectedSeason = selectedSeason;
        $scope.loadRaceList();
    }

    $scope.changeRace = function (selectedRace) {
        $scope.selectedRace = selectedRace;
        $state.go('seasonStanding.raceDetails', ({
            season: $scope.selectedSeason,
            raceId: $scope.selectedRace.round,
            raceName: $scope.selectedRace.name
        }));
    }
    $scope.loadSeasonList();

}]);