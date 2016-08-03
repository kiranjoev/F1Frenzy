'use strict';

angular.module('app.controllers').controller('DriverStandingController', ['$scope', '$http', 'DriverService', 'SeasonService', function ($scope, $http, DriverService, SeasonService) {

    $scope.displayDriverStandings = true;
    $scope.isSeasonOpen = false;
    $scope.isDriverOpen = false;
    $scope.displayLoading = false;

    $scope.loadDriverStandings = function () {
        $scope.displayLoading = true;
        DriverService.getDriverStandings('current').then(function (response) {
            console.log(response);
            $scope.driverStandings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            $scope.selectedSeason = response.data.MRData.StandingsTable.season;
            $scope.displayLoading = false;
            $scope.loadSeasonList();
        }, function (error) {
            console.log(error);
            $scope.displayLoading = false;
        });
    }

    $scope.loadSeasonList = function () {
        $scope.displayLoading = true;
        SeasonService.getSeasonDetails().then(function (response) {
            console.log(response);
            $scope.seasonList = response.data.MRData.SeasonTable.Seasons;
            $scope.seasonList.reverse();
            $scope.displayLoading = false;
            $scope.loadDriverList();
        }, function (error) {
            console.log(error);
            $scope.displayLoading = false;
        });
    }

    $scope.loadDriverList = function () {
        $scope.displayLoading = true;
        DriverService.getDriverList($scope.selectedSeason).then(function (response) {
            console.log(response);
            $scope.driverList = response.data.MRData.DriverTable.Drivers;
            $scope.driverList.unshift({
                givenName: 'All'
            });
            $scope.selectedDriver = $scope.driverList[0];
            $scope.displayLoading = false;
        }, function (error) {
            console.log(error);
            $scope.displayLoading = false;
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
        $scope.displayLoading = true;
        if ($scope.selectedDriver.givenName == 'All') {
            DriverService.getDriverStandings($scope.selectedSeason).then(function (response) {
                console.log(response);
                $scope.driverStandings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                $scope.displayLoading = false;
            }, function (error) {
                console.log(error);
                $scope.displayLoading = false;
            });
            $scope.displayDriverStandings = true;
        } else {
            DriverService.getSpecificDriverResult($scope.selectedSeason,$scope.selectedDriver.driverId).then(function (response) {
                console.log(response);
                $scope.driverResults = response.data.MRData.RaceTable.Races;
                $scope.displayLoading = false;
            }, function (error) {
                console.log(error);
                $scope.displayLoading = false;
            });
            $scope.displayDriverStandings = false;
        }
    }

    $scope.loadDriverStandings();
}]);