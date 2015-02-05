angular.module('pizzapp')
.controller('ShowpurchaseCtrl',function($scope,getuser,$location){

	$scope.purchase =  getuser.get();
	 $scope.purchaseAddress = getuser.getpurchaseAddress();
	console.log("hai", $scope.purchaseAddress);
	$scope.purchase.date=Date();
	$scope.order={};
	$scope.display=function(){
		$scope.purchase.amount=$scope.purchase.quantity*$scope.purchase.price;
		console.log($scope.purchase.amount);
		console.log("hai", $scope.purchaseAddress);
		console.log("hai", $scope.purchase);
		console.log($scope.purchase.date);
		$scope.order.products=[$scope.purchase];
		$scope.order.user=$scope.purchaseAddress;
		console.log("js",$scope.order);
		getuser.savePurchaseDetails($scope.order,function(status)
		{
			$scope.status=status;
			 // console.log($scope.user);
			
		});
		$location.path("/finaldisplay");
	};

});