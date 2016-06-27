/*Define the application routes here*/

'use strict';

angular.module('f1App').config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
    .when("/", {
        templateUrl: "view/champTable.html",
        controller: "ChampController"
    })
    .when("/champTable", {
        templateUrl: "view/champTable.html",
        controller: "ChampController"
    })
    .otherwise({
        redirectTo: '/champTable'   
    });
}]);