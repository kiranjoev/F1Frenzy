/*Define the application routes here*/

'use strict';

angular.module('f1App').config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {

    //$locationProvider.html5Mode(true);
    //$urlRouterProvider.when('/', '/home');

    $stateProvider

    .state("home", {
        url: '/home',
        templateUrl: "views/homePage.html",
        controller: "HomePageController"
    })

    .state("driverList", {
        url: '/driverList',
        templateUrl: "views/driverList.html",
        controller: "DriverListController"
    })

    .state("driverInfo", {
        url: '/:driverId/driverInfo',
        templateUrl: "views/driverInfo.html",
        controller: "DriverInfoController"
    })

    .state("constructorList", {
        url: '/constructorList',
        templateUrl: "views/constructorList.html",
        controller: "ConstructorListController"
    })

    .state("constructorInfo", {
        url: ':constructorId/constructorInfo',
        templateUrl: "views/constructorInfo.html",
        controller: "ConstructorInfoController"
    })

    .state("seasonStanding", {
            url: "/seasonStanding",
            templateUrl: "views/seasonStanding.html",
            controller: "SeasonStandingController"
        })
        .state("seasonStanding.raceDetails", {
            //url: "/seasonStanding/:season/:raceId/:raceName/raceDetails",
            templateUrl: "views/raceDetails.html",
            controller: "RaceDetailsController",
            params: {
                season: null,
                raceId: null,
                raceName: null
            }
        })
        .state("seasonStanding.pitDetails", {
            //url: "/seasonStanding/:season/:raceId/:raceName/pitDetails",
            templateUrl: "views/pitDetails.html",
            controller: "PitDetailsController",
            params: {
                season: null,
                raceId: null,
                raceName: null
            }
        })
        .state("seasonStanding.qualifyDetails", {
            //url: "/seasonStanding/:season/:raceId/:raceName/qualifyDetails",
            templateUrl: "views/qualifyDetails.html",
            controller: "QualifyDetailsController",
            params: {
                season: null,
                raceId: null,
                raceName: null
            }
        })

    .state("driverStanding", {
        url: '/driverStanding',
        templateUrl: "views/driverStanding.html",
        controller: "DriverStandingController"
    })

    .state("constructorStanding", {
        url: '/constructorStanding',
        templateUrl: "views/constructorStanding.html",
        controller: "ConstructorStandingController"
    })

    .state("circuitList", {
        url: '/circuitList',
        templateUrl: "views/circuitList.html",
        controller: "CircuitController"
    })

    .state("scheduleDetails", {
        url: '/schedule',
        templateUrl: "views/scheduleDetails.html",
        controller: "ScheduleController"
    })

    .state("resultDetails", {
        url: '/results',
        templateUrl: "views/resultDetails.html",
        controller: "ResultController"
    });

    $urlRouterProvider.otherwise('/home');
}]);