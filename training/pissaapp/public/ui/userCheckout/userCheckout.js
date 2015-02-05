angular.module('pizzapp').controller('UsercheckoutCtrl',function($scope,getuser,$location){
$scope.cart=getuser.getcart();

$scope.cartvalue=getuser.getcartvalue();
var total=0;
console.log("cart",$scope.cart);
console.log("showing details",$scope.cartvalue);
$scope.user=getuser.getLoginDetails();
$scope.checkout=function()
	{
		
		
		$location.path("/userCheckoutView");
	};

});