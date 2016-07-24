'use strict';

angular.module('app.controllers').controller('DriverListController', ['$scope', '$http', 'DriverService', 'SeasonService', function ($scope, $http, DriverService, SeasonService) {

    $scope.displayDriverStandings = true;

    $scope.loadDriverStandings = function () {
        DriverService.getCurrentDriverStandings().then(function (response) {
            console.log(response);
            $scope.driverStandings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            $scope.selectedSeason = response.data.MRData.StandingsTable.season;
            $scope.loadSeasonList();
        }, function (error) {
            console.log(error);
        });
    }

    $scope.loadSeasonList = function () {
        SeasonService.getSeasonDetails().then(function (response) {
            console.log(response);
            $scope.seasonList = response.data.MRData.SeasonTable.Seasons;
            $scope.seasonList.reverse();
            $scope.loadDriverList();
        }, function (error) {
            console.log(error);
        });
    }

    $scope.loadDriverList = function () {
        DriverService.getDriverList($scope.selectedSeason).then(function (response) {
            console.log(response);
            $scope.driverList = response.data.MRData.DriverTable.Drivers;
            $scope.driverList.unshift({
                givenName: 'All'
            });
            $scope.selectedDriver = $scope.driverList[0];
        }, function (error) {
            console.log(error);
        });
    }

    $scope.changeSeason = function (selectedSeason) {
        $scope.selectedSeason = selectedSeason;
        $scope.loadDriverList();
    }

    $scope.changeDriver = function (selectedDriver) {
        $scope.selectedDriver = selectedDriver;
    }

    $scope.updateFilter = function () {
        console.log($scope.selectedDriver);
        if ($scope.selectedDriver.givenName == 'All') {
            DriverService.getDriverSeasonStandings($scope.selectedSeason).then(function (response) {
                console.log(response);
                $scope.driverStandings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            }, function (error) {
                console.log(error);
            });
            $scope.displayDriverStandings = true;
        } else {
            DriverService.getSpecificDriverResult($scope.selectedSeason,$scope.selectedDriver.driverId).then(function (response) {
                console.log(response);
                $scope.driverResults = response.data.MRData.RaceTable.Races;
            }, function (error) {
                console.log(error);
            });
            $scope.displayDriverStandings = false;
        }
    }

    $scope.loadDriverStandings();
}]);