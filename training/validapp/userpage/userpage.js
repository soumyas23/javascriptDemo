angular.module('validapp').controller('UserpageCtrl',function($scope,getvalue){

getvalue.get( function(data){
	$scope.userData = data;
});
});