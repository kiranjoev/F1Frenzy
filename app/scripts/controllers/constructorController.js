'use strict';

angular.module('app.controllers').controller('ConstructorController', ['$scope', 'ConstructorService', function ($scope, ConstructorService) {

    $scope.loadConstructorDetails = function () {
        ConstructorService.getConstructorDetails().then(function (response) {
            console.log(response);
            $scope.constructorList = response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        }, function (error) {
            console.log(error);
        });
    }
    $scope.loadConstructorDetails();

}]);