angular.module('pizzapp').controller('UserpageCtrl',function($scope,getuser,$location){
$scope.cartvalue=getuser.getcart();
$scope.username=getuser.getLoginDetails().name;
console.log("showing user name",$scope.username);
  if(getuser.logStatus===0){
	$location.path("/login");
  }
$scope.getcart=function(){
	$location.path("/userCheckout");
};
$scope.logout=function()
{
	getuser.setLogout();

};
});