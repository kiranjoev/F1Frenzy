angular.module('app.services').factory('CircuitService',['$http',function($http){
    
    var circuitDetails = {};
    
    circuitDetails.getCircuitDetails = function (){
        return $http({
            method : 'JSONP',
            url : '//ergast.com/api/f1/current/circuits.json?callback=JSON_CALLBACK'
        });
    }
    
    return circuitDetails;
}]);