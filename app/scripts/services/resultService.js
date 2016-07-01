angular.module('app.services').factory('ResultService',['$http',function($http){
    
    var resultDetails = {};
    
    resultDetails.getResultDetails = function (){
        return $http({
            method : 'JSONP',
            url : 'http://ergast.com/api/f1/current/last/results.json?callback=JSON_CALLBACK'
        });
    }
    
    return resultDetails;
}]);