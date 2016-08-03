'use strict';

angular.module('app.controllers').controller('HomePageController', ['$scope', 'DriverService', 'ConstructorService', 'NewsService', '$http', function ($scope, DriverService, ConstructorService, NewsService, $http) {

    $scope.displayNewsLoading = false;
    $scope.displayDriverLoading = false;
    $scope.displayConstructorLoading = false;

    $scope.loadLatestNews = function () {

        /*NewsService.getESPNNews().then(function (response) {
            console.log(response);
            $scope.newsCards = response.data.responseData.feed.entries;
        }, function (error) {
            console.log(error);
        });*/

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://rss2json.com/api.json?rss_url=http://feeds.bbci.co.uk/sport/formula1/rss.xml', true);
        xhr.send();
        $scope.displayNewsLoading = true;
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                if (data.status == 'ok') {
                    console.log(data);
                    $scope.newsSource = data.feed;
                    $scope.newsCards = data.items.slice(1, 7);
                    $scope.displayNewsLoading = false;
                    $scope.$apply();
                }
            }
        };
    }

    $scope.loadLimitedDriverStandings = function () {
        $scope.displayDriverLoading = true;
        DriverService.getLimitedDriverStandings('current').then(function (response) {
            console.log(response);
            $scope.driverList = response.data.MRData.StandingsTable.StandingsLists[0];
            $scope.displayDriverLoading = false;
        }, function (error) {
            console.log(error);
            $scope.displayDriverLoading = false;
        });
    }

    $scope.loadLimitedConstructorStandings = function () {
        $scope.displayConstructorLoading = true;
        ConstructorService.getLimitedCurrentConstructorStandings().then(function (response) {
            console.log(response);
            $scope.constructorList = response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
            $scope.displayConstructorLoading = false;
        }, function (error) {
            console.log(error);
            $scope.displayConstructorLoading = false;
        });
    }


    $scope.loadLatestNews();
    $scope.loadLimitedDriverStandings();
    $scope.loadLimitedConstructorStandings();

}]);