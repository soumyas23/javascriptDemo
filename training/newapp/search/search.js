angular.module('newapp').controller('SearchCtrl',function($scope,GitHub){

$scope.executeSearch = function executeSearch() {
    GitHub.searchRepos($scope.query, function (error, data) {
        if (!error) {
            $scope.repos = data.items;
        }
    });
};
	$scope.openRepo = function openRepo(name) {
    GitHub.getRepo(name, function (error, data) {
        if (!error) {
            $scope.activeRepo = data;
 
            GitHub.getReadme(name, function (error, data) {
                if (!error) {
                    $scope.activeRepo.readme = data;
                } else {
                    $scope.activeRepo.readme = 'No README found!';
                }
            });
        }
    });
};

});