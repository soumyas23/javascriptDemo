angular.module('validapp').controller('FormCtrl',function($scope,$location,getvalue){
$scope.master = {};

  $scope.update = function(user) {
    $scope.master = angular.copy(user);
    //console.log(user);
    getvalue.set($scope.user);
      $location.path("/userpage");

  };	
$scope.checkAddress = function checkAddress(user){
if($scope.user.agree === false){
	$scope.user.baddress1 = $scope.user.address1;
	$scope.user.baddress2 = $scope.user.address2;
	$scope.user.bcity = $scope.user.city;
	$scope.user.bstate = $scope.user.state;
	$scope.user.bpincode = $scope.user.pincode;
	console.log($scope.user.baddress1);
}
else{
	$scope.user.baddress1 = $scope.user.baddress1;
	$scope.user.baddress2 = $scope.user.baddress2;
	$scope.user.bcity = $scope.user.bcity;
	$scope.user.bstate = $scope.user.bstate;
	$scope.user.bpincode = $scope.user.bpincode;	
}
};
 
});

