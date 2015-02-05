angular.module('ui').controller('EmployeedetailsCtrl',function($scope,EmployeeService){

EmployeeService.get(function(data){
	$scope.eData=data;
});
});