'use strict';

angular.module('app.controllers').controller('ScheduleController', ['$scope', 'ScheduleService', function ($scope, ScheduleService) {

    $scope.loadScheduleDetails = function () {
        $scope.displayLoading = true;
        ScheduleService.getScheduleDetails('current').then(function (response) {
            console.log(response);
            $scope.scheduleDetails = response.data.MRData.RaceTable.Races;
            $scope.displayLoading = false;
        }, function (error) {
            console.log(error);
            $scope.displayLoading = false;
        });
    }
    $scope.loadScheduleDetails();

}]);