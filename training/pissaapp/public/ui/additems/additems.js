angular.module('pizzapp').controller('AdditemsCtrl',function($scope,getuser,$window){
$scope.save = function(details) {
    var pic=document.getElementById('image').files[0];
	$scope.details.image=pic.name;
    //console.log(user);
	getuser.additems($scope.details,function(status)
		{


			$scope.status=status;
		
			 // console.log($scope.user);
			
		});
	 $window.alert("Item added");
   

  };

});