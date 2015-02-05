angular.module('movieapp').controller('HomeCtrl',function($scope, $http){

        $http.get('/movieapp/movie.json').success(function(data) {
          $scope.movies = data;
       		console.log('@@@@@', data);
      });

});