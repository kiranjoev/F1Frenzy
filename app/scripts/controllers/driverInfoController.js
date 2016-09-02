'use strict';

angular.module('app.controllers').controller('DriverInfoController', ['$scope', '$stateParams', 'DriverService', 'APP_CONSTANTS', function ($scope, $stateParams, DriverService, APP_CONSTANTS) {

    $scope.driverId = $stateParams.driverId;
    $scope.displayLoading = false;
    $scope.driverStatusCategories = [];
    $scope.driverStatusValues = [];
    $scope.displayDriverStatus = false;
    $scope.chartTheme = APP_CONSTANTS.hcChartTheme;

    $scope.loadDriverInfo = function () {
        $scope.displayLoading = true;
        DriverService.getDriverInfo($scope.driverId).then(function (response) {
            console.log(response);
            $scope.driverInfo = response.data.MRData.DriverTable.Drivers[0];
            $scope.displayLoading = false;
        }, function (error) {
            console.log(error);
            $scope.displayLoading = false;
        });
    }

    $scope.loadDriverStanding = function () {
        $scope.displayLoading = true;
        DriverService.getSpecificDriverStanding('current', $scope.driverId).then(function (response) {
            console.log(response);
            $scope.driverStanding = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
            $scope.displayLoading = false;
        }, function (error) {
            console.log(error);
            $scope.displayLoading = false;
        });
    }

    $scope.loadSeasonTable = function () {
        $scope.displayLoading = true;
        DriverService.getSpecificDriverResult('current', $scope.driverId).then(function (response) {
            console.log(response);
            $scope.driverResults = response.data.MRData.RaceTable;
            $scope.displayLoading = false;
        }, function (error) {
            console.log(error);
            $scope.displayLoading = false;
        });
    }

    $scope.loadDriverStatus = function () {
        $scope.displayLoading = true;
        DriverService.getDriverStatus('current', $scope.driverId).then(function (response) {
            console.log(response);
            $scope.driverStatusDetails = response.data.MRData.StatusTable;
            angular.forEach($scope.driverStatusDetails.Status, function (value, key) {
                $scope.driverStatusCategories.push(value.status);
                $scope.driverStatusValues.push(Math.floor(value.count));
            });
            $scope.chartOptions = {
                chart: {
                    type: 'column'
                },
                title: {
                    text: $scope.driverStatusDetails.season + ' Season'
                },
                subtitle: {
                    text: 'Status Table'
                },
                xAxis: {
                    categories: $scope.driverStatusCategories,
                    crosshair: true
                },
                yAxis: {
                    min: 0
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0"></td>' +
                        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                series: [{
                    data: $scope.driverStatusValues,
                    colorByPoint: true
                }]
            };
            $scope.displayDriverStatus = true;
            $scope.displayLoading = false;
        }, function (error) {
            console.log(error);
            $scope.displayLoading = false;
        });
    }

    $scope.loadDriverInfo();
    $scope.loadDriverStanding();
    $scope.loadSeasonTable();
    $scope.loadDriverStatus();

}]);