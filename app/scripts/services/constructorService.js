angular.module('app.services').factory('ConstructorService', ['$http', function ($http) {

    var constructorDetails = {};

    constructorDetails.getConstructorDetails = function () {

        return $http({
            method: 'JSONP',
            url: 'http://ergast.com/api/f1/current/constructorStandings.json?callback=JSON_CALLBACK'
        });

    }

    constructorDetails.getLimitedCurrentConstructorDetails = function () {
        return $http({
            method: 'JSONP',
            url: 'http://ergast.com/api/f1/current/constructorStandings.json?limit=10&callback=JSON_CALLBACK'
        });
    }

    return constructorDetails;

}]);