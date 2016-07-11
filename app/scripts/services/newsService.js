angular.module('app.services').factory('NewsService', ['$http', function ($http) {

    var news = {};

    news.getESPNNews = function () {
        return $http({
            method: 'JSONP',
            url: config.googleApi + config.autoSportFeed + '&callback=JSON_CALLBACK&num=6'
        });
    }

    return news;
}]);