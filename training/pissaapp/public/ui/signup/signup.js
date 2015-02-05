angular.module('pizzapp').controller('SignupCtrl',function($scope,getuser,$location,$window){

$scope.save = function(user) {
    
    //console.log(user);
	getuser.register($scope.user,function(status)
		{
			$scope.status=status;
			 // console.log($scope.user);

			
		});
	 $window.alert("Registration sucessfull..");
   $location.path("/login");

  };
});
