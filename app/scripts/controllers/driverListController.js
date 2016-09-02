'use strict';

angular.module('app.controllers').controller('DriverListController', ['$scope', '$http', 'DriverService', 'SeasonService', function ($scope, $http, DriverService, SeasonService) {

    /*$scope.loadDriverStandings = function () {
        DriverService.getCurrentDriverStandings().then(function (response) {
            console.log(response);
            $scope.driverStandings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            $scope.selectedSeason = response.data.MRData.StandingsTable.season;
            $scope.loadSeasonList();
        }, function (error) {
            console.log(error);
        });
    }*/

    $scope.loadDriverList = function () {
        $scope.displayLoading = true;
        DriverService.getDriverList('current').then(function (response) {
            console.log(response);
            $scope.driverList = response.data.MRData.DriverTable.Drivers;
            $scope.displayLoading = false;
        }, function (error) {
            console.log(error);
            $scope.displayLoading = false;
        });
    }

    $scope.loadDriverList();
}]);