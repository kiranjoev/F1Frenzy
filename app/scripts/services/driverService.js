'use strict';

angular.module('app.services').factory('DriverService', ['$http', function ($http) {

    var driverDetails = {};

    driverDetails.getDriverInfo = function (driverId) {
        return $http({
            method: 'JSONP',
            url: '//ergast.com/api/f1/drivers/' + driverId + '.json?callback=JSON_CALLBACK'
        });
    }

    driverDetails.getDriverStatus = function (season, driverId) {
        return $http({
            method: 'JSONP',
            url: '//ergast.com/api/f1/' + season + '/drivers/' + driverId + '/status.json?callback=JSON_CALLBACK'
        });
    }

    driverDetails.getDriverList = function (season) {
        return $http({
            method: 'JSONP',
            url: '//ergast.com/api/f1/' + season + '/drivers.json?callback=JSON_CALLBACK'
        });
    }

    driverDetails.getDriverStandings = function (season) {
        return $http({
            method: 'JSONP',
            url: '//ergast.com/api/f1/' + season + '/driverStandings.json?callback=JSON_CALLBACK'
        });
    }

    driverDetails.getLimitedDriverStandings = function (season) {
        return $http({
            method: 'JSONP',
            url: '//ergast.com/api/f1/' + season + '/driverStandings.json?limit=10&callback=JSON_CALLBACK'
        });
    }

    driverDetails.getSpecificDriverStanding = function (season, driverId) {
        return $http({
            method: 'JSONP',
            url: '//ergast.com/api/f1/' + season + '/drivers/' + driverId + '/driverStandings.json?callback=JSON_CALLBACK'
        });
    }

    driverDetails.getSpecificDriverResult = function (season, driverId) {
        return $http({
            method: 'JSONP',
            url: '//ergast.com/api/f1/' + season + '/drivers/' + driverId + '/results.json?callback=JSON_CALLBACK'
        });
    }

    return driverDetails;
}]);