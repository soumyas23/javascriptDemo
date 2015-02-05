angular.module('pizzapp').controller('CartdetailsCtrl',function($scope,getuser,$location){

$scope.cartvalue=getuser.getcartvalue();

console.log("showing details",$scope.cartvalue);
$scope.user=getuser.getLoginDetails();
$scope.userstatus=getuser.getLogStatus();
console.log("checking user",$scope.userstatus);
$scope.order=function(){
if($scope.userstatus === 0)
{
	
		$location.path("/login");
	
}else
{
	console.log("haiiiii");
	$location.path("/userPage");
}
};
});