'use strict';

angular.module('app.controllers').controller('HomePageController', ['$scope', 'DriverService', 'ConstructorService', 'NewsService', '$http', function ($scope, DriverService, ConstructorService, NewsService, $http) {

    $scope.loadLatestNews = function () {

        NewsService.getESPNNews().then(function (response) {
            console.log(response);
            $scope.newsCards = response.data.responseData.feed.entries;
        }, function (error) {
            console.log(error);
        });
    }
    $scope.loadLatestNews();

    $scope.loadLimitedDriverStandings = function () {
        DriverService.getLimitedCurrentDriverStandings().then(function (response) {
            console.log(response);
            $scope.driverList = response.data.MRData.StandingsTable.StandingsLists[0];
        }, function (error) {
            console.log(error);
        });
    }
    $scope.loadLimitedDriverStandings();

    $scope.loadLimitedConstructorDetails = function () {
        ConstructorService.getLimitedCurrentConstructorDetails().then(function (response) {
            console.log(response);
            $scope.constructorList = response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        }, function (error) {
            console.log(error);
        });
    }
    $scope.loadLimitedConstructorDetails();

    /* $scope.seasonList = APP_CONSTANTS.season;
     $scope.selectedSeason = $scope.seasonList[0];

     $scope.seasonSelection = function (selectedSeason) {

         ChampTableService.getDriverStandingsSeason(selectedSeason.year).then(function (response) {
             console.log(response);
             $scope.champList = response.data.MRData.StandingsTable.StandingsLists[0];
         }, function (error) {
             console.log(error);
         });
     }*/

            }]);