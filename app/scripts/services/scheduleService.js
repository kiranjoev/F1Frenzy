'use strict';

angular.module('app.services').factory('ScheduleService', ['$http', function ($http) {

    var scheduleDetails = {};

    scheduleDetails.getScheduleDetails = function () {
        return $http({
            method: 'JSONP',
            url: 'http://ergast.com/api/f1/current.json?callback=JSON_CALLBACK'
        });
    }

    return scheduleDetails;
}]);