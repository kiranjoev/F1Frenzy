'use strict';

angular.module('app.services').factory('DriverService',['$http', function($http){
    
    var driverDetails = {};
    
    driverDetails.getDrivers = function (){
        return $http({
            method: 'JSONP',
            url: 'http://ergast.com/api/f1/current/driverStandings.json?callback=JSON_CALLBACK'
        });
    }
    
    return driverDetails;
}]);