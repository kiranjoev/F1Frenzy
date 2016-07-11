'use strict';

angular.module('app.services').factory('DriverService', ['$http', function ($http) {

    var driverDetails = {};

    driverDetails.getCurrentDriverStandings = function () {
        return $http({
            method: 'JSONP',
            url: 'http://ergast.com/api/f1/current/driverStandings.json?callback=JSON_CALLBACK'
        });
    }

    driverDetails.getLimitedCurrentDriverStandings = function () {
        return $http({
            method: 'JSONP',
            url: 'http://ergast.com/api/f1/current/driverStandings.json?limit=10&callback=JSON_CALLBACK'
        });
    }

    driverDetails.getDriverSeasonStandings = function (season) {
        return $http({
            method: 'JSONP',
            url: 'http://ergast.com/api/f1/' + season + '/driverStandings.json?callback=JSON_CALLBACK'
        });
    }

    return driverDetails;
}]);