'use strict';

angular.module('app.services').factory('ScheduleService', ['$http', function ($http) {

    var scheduleDetails = {};

    scheduleDetails.getScheduleDetails = function (season) {
        return $http({
            method: 'JSONP',
            url: '//ergast.com/api/f1/' + season + '.json?callback=JSON_CALLBACK'
        });
    }

    return scheduleDetails;
}]);