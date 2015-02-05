angular.module('pizzapp').controller('UserpageCtrl',function($scope,getuser,$location){
$scope.cartvalue=getuser.getcart();
$scope.getcart=function(){
	$location.path("/userCheckout");
};
});