angular.module('movieapp').controller('MoviedetailCtrl',function($scope,$routeParams,$http){

$scope.name = $routeParams.movieName;

        $http.get('/movieapp/movie.json').success(function(data) {
          $scope.movie = data.filter(function(entry){
            return entry.name === $scope.name;
          })[0];
        });
});