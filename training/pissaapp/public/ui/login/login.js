angular.module('pizzapp').controller('LoginCtrl',function($scope,getuser,$location,$window){
$scope.verify=function verify(email,password){
	console.log(email);
	console.log(password);

	$scope.userData  =  {
                               email:email,
                               password:password
                       };

          console.log($scope.userData);	

            getuser.getlogin($scope.userData,function(data){
              $scope.data=data;
            console.log("login detais",$scope.data[0]); 
              if($scope.data.length === 0){

              $window.alert("Incorrect user name or password");
                 $location.path('/login');
                      
                }
                else{
                        $window.alert("Login sucess..");
                        if($scope.userData.email==="soumya@gmail.com"&&$scope.userData.password==="soumya")
                       {

                           $location.path('/adminPage');
                       }
                       else
                       {
                      
                          getuser.setLoginDetails($scope.data[0]);
                             $location.path('/userPage');
                           }
                         }

              });
                             

};


});