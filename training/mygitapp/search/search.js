angular.module('mygitapp').controller('SearchCtrl',function($scope,searchservice){
$scope.executeSearch =function executeSearch() {
searchservice.authentication(function(error,data)
{
	$scope.userdetails=data;
	console.log($scope.userdetails);

	searchservice.searchRepos($scope.query, function (error, data) {
        if (!error) {
            $scope.repos = data.items;
        }
    });

	
		$scope.repos.forEach(function(repos){

			console.log(full_name);
	
     searchservice.checkstar(repos.full_name,function (error, data,status) {
               if (!error) {
                   $scope.status = status;
            console.log($scope.status);
            }
               });       

});
	
});

});