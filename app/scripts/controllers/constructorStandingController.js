'use strict';

angular.module('app.controllers').controller('ConstructorStandingController', ['$scope', 'SeasonService', 'ConstructorService', function ($scope, SeasonService, ConstructorService) {

    $scope.displayConstructorStandings = true;

    $scope.loadConstructorStandings = function () {
        ConstructorService.getConstructorStandings('current').then(function (response) {
            console.log(response);
            $scope.constructorStandings = response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
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
            $scope.loadConstructorList();
        }, function (error) {
            console.log(error);
        });
    }

    $scope.changeSeason = function (selectedSeason) {
        $scope.selectedSeason = selectedSeason;
        $scope.loadConstructorList();
    }

    $scope.changeConstructor = function (selectedConstructor) {
        $scope.selectedConstructor = selectedConstructor;
    }

    $scope.loadConstructorList = function () {
        ConstructorService.getConstructorList($scope.selectedSeason).then(function (response) {
            console.log(response);
            $scope.constructorList = response.data.MRData.ConstructorTable.Constructors;
            $scope.constructorList.unshift({
                name: 'All'
            });
            $scope.selectedConstructor = $scope.constructorList[0];
        }, function (error) {
            console.log(error);
        });
    }

    $scope.updateFilter = function () {
        var constructorSampleList = [];
        console.log($scope.selectedConstructor);
        if ($scope.selectedConstructor.name == 'All') {
            ConstructorService.getConstructorStandings($scope.selectedSeason).then(function (response) {
                console.log(response);
                $scope.constructorStandings = response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
            }, function (error) {
                console.log(error);
            });
            $scope.displayConstructorStandings = true;
        } else {
            ConstructorService.getSpecificConstructorResult($scope.selectedSeason, $scope.selectedConstructor.constructorId).then(function (response) {
                console.log(response);
                constructorSampleList = response.data.MRData.RaceTable.Races;
                for(var index in constructorSampleList){
                    constructorSampleList[index].points = Math.floor(constructorSampleList[index].Results[0].points) + Math.floor(constructorSampleList[index].Results[1].points);
                }
                $scope.constructorResults = constructorSampleList;
            }, function (error) {
                console.log(error);
            });
            $scope.displayConstructorStandings = false;
        }
    }

    $scope.loadConstructorStandings();

}]);