angular.module('app.services').factory('ConstructorService', ['$http', function ($http) {

    var constructorDetails = {};
    
    constructorDetails.getConstructorList = function (season) {
        return $http({
            method: 'JSONP',
            url: '//ergast.com/api/f1/' + season + '/constructors.json?callback=JSON_CALLBACK'
        });
    }

    constructorDetails.getConstructorStandings = function (season) {
        return $http({
            method: 'JSONP',
            url: '//ergast.com/api/f1/' + season + '/constructorStandings.json?callback=JSON_CALLBACK'
        });
    }

    constructorDetails.getLimitedCurrentConstructorStandings = function () {
        return $http({
            method: 'JSONP',
            url: '//ergast.com/api/f1/current/constructorStandings.json?limit=10&callback=JSON_CALLBACK'
        });
    }
    
    constructorDetails.getSpecificConstructorResult = function (season ,constructor) {
        return $http({
            method: 'JSONP',
            url: '//ergast.com/api/f1/' + season + '/constructors/' + constructor + '/results.json?callback=JSON_CALLBACK'
        });
    }

    return constructorDetails;

}]);