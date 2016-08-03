'use strict';

angular.module('app.controllers').controller('ScheduleController', ['$scope', 'ScheduleService', function ($scope, ScheduleService) {

    $scope.loadScheduleDetails = function () {
        ScheduleService.getScheduleDetails('current').then(function (response) {
            console.log(response);
            $scope.scheduleDetails = response.data.MRData.RaceTable.Races;
        }, function (error) {
            console.log(error);
        });
    }
    $scope.loadScheduleDetails();

}]);