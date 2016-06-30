'use strict';

angular.module('app.controllers').controller('DriverListController',['$scope','$http', function($scope,$http){
    $http.get("http://ergast.com/api/f1/2013/driverStandings.json").then(function(response) {
        console.log(response);
        $scope.driverList = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
}]);