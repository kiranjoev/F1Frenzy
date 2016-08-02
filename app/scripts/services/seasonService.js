'use strict';

angular.module('app.services').factory('SeasonService',['$http',function($http){
    
    var seasonDetails = {};
    
    seasonDetails.getSeasonDetails = function (){
        return $http({
            method : 'JSONP',
            url : 'http://ergast.com/api/f1/seasons.json?callback=JSON_CALLBACK&limit=1000'
        });
    }
    
    seasonDetails.getRaceDetails = function (season,race){
        return $http({
            method : 'JSONP',
            url : 'http://ergast.com/api/f1/' + season + '/' + race + '/results.json?callback=JSON_CALLBACK&limit=1000'
        });
    }
    seasonDetails.getPitDetails = function (season,race){
        return $http({
            method : 'JSONP',
            url : 'http://ergast.com/api/f1/' + season + '/' + race + '/pitstops.json?callback=JSON_CALLBACK&limit=1000'
        });
    }
    seasonDetails.getQualifyingDetails = function (season,race){
        return $http({
            method : 'JSONP',
            url : 'http://ergast.com/api/f1/' + season + '/' + race + '/qualifying.json?callback=JSON_CALLBACK&limit=1000'
        });
    }
    

    return seasonDetails;
}]);