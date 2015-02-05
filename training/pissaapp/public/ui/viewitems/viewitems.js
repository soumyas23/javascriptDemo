angular.module('pizzapp').controller('ViewitemsCtrl',function($scope,getuser,$location){
getuser.getitem(function(data){
	$scope.pissas=data;
	console.log($scope.pissas);
	$scope.cartvalue=getuser.getcart();
});
$scope.order=function(product){
	console.log("my purchase");
	console.log(product);
	getuser.set(product);
	$location.path("/userpurchase");


};
$scope.addtocart=function(product){
	getuser.setcart();
	$scope.cartvalue=getuser.getcart();
	getuser.setcartvalue(product);
	console.log($scope.cartvalue);
};
$scope.getcartvalue=function(){
	$location.path("/cartdetails");
};
});