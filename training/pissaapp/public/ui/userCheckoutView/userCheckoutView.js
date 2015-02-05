angular.module('pizzapp').controller('UsercheckoutviewCtrl',function($scope,getuser){
$scope.cartvalue=getuser.getcartvalue();
$scope.total=0;
$scope.user=getuser.getLoginDetails();
$scope.order={};
console.log("viewssss",$scope.user);
for(var i=0;i<$scope.cartvalue.length;i++)
			{
				$scope.total=$scope.total+($scope.cartvalue[i].quantity*$scope.cartvalue[i].price);
			}
			for(var j=0;j<$scope.cartvalue.length;j++)
			{
				$scope.cartvalue[j].amount=$scope.total;
			}
$scope.save=function(){


	
			console.log("showing details",$scope.cartvalue);
			$scope.order.products=$scope.cartvalue;
			$scope.order.user=$scope.user;
			console.log("final",$scope.order);
		getuser.savePurchaseDetails($scope.order,function(status)
		{
			$scope.status=status;
		    console.log($scope.user);
			
		});
};
});