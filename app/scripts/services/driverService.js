'use strict';

angular.module('app.services').factory('DriverService', ['$http', function ($http) {

    var driverDetails = {};

    driverDetails.getDriverList = function (season) {
        return $http({
            method: 'JSONP',
            url: 'http://ergast.com/api/f1/' + season + '/drivers.json?callback=JSON_CALLBACK'
        });
    }
    
    driverDetails.getDriverStandings = function (season) {
        return $http({
            method: 'JSONP',
            url: 'http://ergast.com/api/f1/' + season + '/driverStandings.json?callback=JSON_CALLBACK'
        });
    }

    driverDetails.getLimitedDriverStandings = function (season) {
        return $http({
            method: 'JSONP',
            url: 'http://ergast.com/api/f1/' + season + '/driverStandings.json?limit=10&callback=JSON_CALLBACK'
        });
    }
    
    driverDetails.getSpecificDriverResult = function (season ,driver) {
        return $http({
            method: 'JSONP',
            url: 'http://ergast.com/api/f1/' + season + '/drivers/' + driver + '/results.json?callback=JSON_CALLBACK'
        });
    }

    return driverDetails;
}]);