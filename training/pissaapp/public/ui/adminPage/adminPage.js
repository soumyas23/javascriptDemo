angular.module('pizzapp').controller('AdminpageCtrl',function($scope,getuser){

getuser.getpurchases(function(data){
	$scope.purchases=data;
	console.log($scope.purchases);
	
});


$scope.viewPurchase=function(purchase){
$scope.view=true;
 $scope.userproducts=purchase.products;

};
});