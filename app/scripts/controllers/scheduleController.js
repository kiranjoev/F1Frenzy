'use strict';

angular.module('app.controllers').controller('ScheduleController',['$scope','ScheduleService',function($scope,ScheduleService){
    
    ScheduleService.getScheduleDetails().then(function(response){
        console.log(response);
        $scope.scheduleDetails = response.data.MRData.RaceTable.Races;
    },function(error){
        console.log(error);
    });
    
}]);