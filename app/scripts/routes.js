/*Define the application routes here*/

'use strict';

angular.module('f1App').config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {

    //$locationProvider.html5Mode(true);
    //$urlRouterProvider.when('/', '/home');

    $stateProvider
        .state("home", {
            url: '/home',
            templateUrl: "view/homePage.html",
            controller: "HomePageController"
        })
    
        .state("driverList", {
            url: '/driverList',
            templateUrl: "view/driverList.html",
            controller: "DriverListController"
        })
        .state("driverInfo", {
            url: ':driverId/driverInfo',
            templateUrl: "view/driverInfo.html",
            controller: "DriverInfoController"
        })
    
        .state("constructorList", {
            url: '/constructorList',
            templateUrl: "view/constructorList.html",
            controller: "ConstructorListController"
        })
        .state("constructorInfo", {
            url: ':constructorId/constructorInfo',
            templateUrl: "view/constructorInfo.html",
            controller: "ConstructorInfoController"
        })
    
        .state("seasonStanding", {
            url: '/seasonStanding',
            templateUrl: "view/seasonStanding.html",
            controller: "SeasonStandingController"
        })
        .state("driverStanding", {
            url: '/driverStanding',
            templateUrl: "view/driverStanding.html",
            controller: "DriverStandingController"
        })
        .state("constructorStanding", {
            url: '/constructorStanding',
            templateUrl: "view/constructorStanding.html",
            controller: "ConstructorStandingController"
        })
    
        .state("circuitList", {
            url: '/circuitList',
            templateUrl: "view/circuitList.html",
            controller: "CircuitController"
        })
    
        .state("scheduleDetails", {
            url: '/schedule',
            templateUrl: "view/scheduleDetails.html",
            controller: "ScheduleController"
        })
    
        .state("resultDetails", {
            url: '/results',
            templateUrl: "view/resultDetails.html",
            controller: "ResultController"
        });

    $urlRouterProvider.otherwise('/home');
}]);