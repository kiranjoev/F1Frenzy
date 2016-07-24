'use strict';

angular.module('app.services').factory('SeasonService',['$http',function($http){
    
    var seasonDetails = {};
    
    seasonDetails.getSeasonDetails = function (){
        return $http({
            method : 'JSONP',
            url : 'http://ergast.com/api/f1/seasons.json?callback=JSON_CALLBACK&limit=1000'
        });
    }
    
    return seasonDetails;
}]);