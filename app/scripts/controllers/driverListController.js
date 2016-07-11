'use strict';

angular.module('app.controllers').controller('DriverListController', ['$scope', '$http', 'DriverService', function ($scope, $http, DriverService) {

    $scope.loadDriverStandings = function () {
        DriverService.getCurrentDriverStandings().then(function (response) {
            console.log(response);
            $scope.driverList = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        }, function (error) {
            console.log(error);
        });
    }
    $scope.loadDriverStandings();

    $scope.seasonSelection = function () {

        DriverService.getDriverSeasonStandings($scope.seasonSelect).then(function (response){
            $scope.driverList = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        },function(error){
            console.log(error);
        })

    }
}]);