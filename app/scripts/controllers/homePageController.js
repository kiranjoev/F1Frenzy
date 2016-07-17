'use strict';

angular.module('app.controllers').controller('HomePageController', ['$scope', 'DriverService', 'ConstructorService', 'NewsService', '$http', function ($scope, DriverService, ConstructorService, NewsService, $http) {

    $scope.loadLatestNews = function () {

        /*NewsService.getESPNNews().then(function (response) {
            console.log(response);
            $scope.newsCards = response.data.responseData.feed.entries;
        }, function (error) {
            console.log(error);
        });*/
        
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
                if (xhr.readyState==4 && xhr.status==200)
                {
                    var data = JSON.parse(xhr.responseText);
                    if(data.status == 'ok'){
                        console.log(data);
                        $scope.newsSource = data.feed;
                        $scope.newsCards = data.items.slice(1,7);
                        $scope.$apply();
                    }
                }
            };
        xhr.open('GET','http://rss2json.com/api.json?rss_url=http://feeds.bbci.co.uk/sport/formula1/rss.xml',true);
        xhr.send();
    }
   
    $scope.loadLimitedDriverStandings = function () {
        DriverService.getLimitedCurrentDriverStandings().then(function (response) {
            console.log(response);
            $scope.driverList = response.data.MRData.StandingsTable.StandingsLists[0];
        }, function (error) {
            console.log(error);
        });
    }
    
    $scope.loadLimitedConstructorDetails = function () {
        ConstructorService.getLimitedCurrentConstructorDetails().then(function (response) {
            console.log(response);
            $scope.constructorList = response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        }, function (error) {
            console.log(error);
        });
    }
    
    
    $scope.loadLatestNews();
    $scope.loadLimitedDriverStandings();
    $scope.loadLimitedConstructorDetails();

    /* $scope.seasonList = APP_CONSTANTS.season;
     $scope.selectedSeason = $scope.seasonList[0];

     $scope.seasonSelection = function (selectedSeason) {

         ChampTableService.getDriverStandingsSeason(selectedSeason.year).then(function (response) {
             console.log(response);
             $scope.champList = response.data.MRData.StandingsTable.StandingsLists[0];
         }, function (error) {
             console.log(error);
         });
     }*/

}]);