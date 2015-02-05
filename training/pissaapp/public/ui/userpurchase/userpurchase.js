angular.module('pizzapp').controller('UserpurchaseCtrl',function($scope,getuser,$location){

$scope.save=function(purchase)
{
	console.log(purchase);
	getuser.setpurchaseAddress(purchase);
	$location.path("/showpurchase");
};
});