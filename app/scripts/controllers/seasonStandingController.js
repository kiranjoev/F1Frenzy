'use strict';

angular.module('app.controllers').controller('SeasonStandingController', ['$scope', 'SeasonService','$state', function ($scope, SeasonService,$state) {

    $scope.selectedSeason = '2016';
    $scope.selectedRace = '1';
    $scope.raceDetails = [];
    $scope.displayRaceDetails = false;
    $scope.displayPitDetails = false;
    $scope.displayQualifyingDetails = false;
    
    $scope.loadRaceDetails = function () {
        SeasonService.getRaceDetails($scope.selectedSeason,$scope.selectedRace).then(function (response) {
            console.log(response);         
            $scope.displayRaceDetails = true;
            $scope.raceDetails = response.data.MRData.RaceTable.Races[0].Results;
        }, function (error) {
            console.log(error);
        });
    }
    $scope.loadPitDetails = function () {
        SeasonService.getPitDetails($scope.selectedSeason,$scope.selectedRace).then(function (response) {
            console.log(response);   
            $scope.displayPitDetails = true;
            $scope.pitstopDetails = response.data.MRData.RaceTable.Races[0].PitStops;
        }, function (error) {
            console.log(error);
        });
    }
    $scope.loadQualifyingDetails = function () {
        SeasonService.getQualifyingDetails($scope.selectedSeason,$scope.selectedRace).then(function (response) {
            console.log(response);  
            $scope.displayQualifyingDetails = true;
            $scope.qualifyDetails = response.data.MRData.RaceTable.Races[0].QualifyingResults;
        }, function (error) {
            console.log(error);
        });
    }
    $scope.loadRaceDetails();
    $scope.loadPitDetails();
    $scope.loadQualifyingDetails();

}]);