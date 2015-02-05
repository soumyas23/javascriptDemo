angular.module('pizzapp').factory('getuser',function($http) {

	var getuser = {
     cartnumber:0,
     cartvalue:[],
     logStatus:0,
    userLogin : {},
		register: function(user,callback){
                       $http({ method:'POST',
                               data:user,
                               headers: {'Content-Type': 'application/json'},
                               url:'http://localhost:3000/register'                                
                       }).success(function (data) {                        
                   callback(data);                
               });


	},




	getlogin: function(userData,callback){
					console.log(userData);
                       $http({ method:'POST',

                               data:userData,
                               headers: {'Content-Type': 'application/json'},
                               url:'http://localhost:3000/login'                                
                       }).success(function (data) {
                        console.log("##");                                 
                   callback(data);    
                    console.log(data);       
               });


	},



  additems: function(details,callback){
					console.log(details);
                       $http({ method:'POST',

                               data:details,
                               headers: {'Content-Type': 'application/json'},
                               url:'http://localhost:3000/item'                                
                       }).success(function (data) {
                        console.log("##");                                 
                   callback(data);    
                    console.log(data);       
               });


	},
  getitem: function(callback){
         
                       $http({ method:'GET',
                               headers: {'Content-Type': 'application/json'},
                               url:'http://localhost:3000/getitems'                                
                       }).success(function (data) {
                        console.log("##"); 
                        console.log(data);                                
                   callback(data);    
                           
               });


  },
  getpurchases: function(callback){
         
                       $http({ method:'GET',
                               headers: {'Content-Type': 'application/json'},
                               url:'http://localhost:3000/getpurchase'                                
                       }).success(function (data) {
                        console.log("Final view"); 
                        console.log(data);                                
                   callback(data);    
                           
               });


  },
  savePurchaseDetails: function(product,callback){
                  console.log("service"); 
                        console.log(product);    
                       $http({ method:'POST',
                               data:product,
                               headers: {'Content-Type': 'application/json'},
                               url:'http://localhost:3000/savepurchase'                                
                       }).success(function (data) {      
                       console.log("service"); 
                        console.log(data);                    
                   callback(data);                  
               });


  },

  purchaseData : {},

          set:function(product){
            getuser.purchaseData=product;
            console.log("inside service");
            console.log(getuser.purchaseData);

          },
          get : function(){
            console.log("&&&&",getuser.purchaseData);

            return getuser.purchaseData;
          },

  purchaseAddress :{},
        setpurchaseAddress : function(purchase){
          getuser.purchaseAddress=purchase;
             console.log("inside service adress");
            console.log(getuser.purchaseAddress);

        },
        getpurchaseAddress : function(){
            return getuser.purchaseAddress;
      },
       setcart:function(){
            getuser.cartnumber++;
            console.log("CCC",getuser.cartnumber);
            return getuser.cartnumber;

          },
          getcart:function(){
           
            return getuser.cartnumber;

          },
      getcartvalue: function(){
          return getuser.cartvalue;
            
          },
          setcartvalue:function(pizza){
            getuser.cartvalue[getuser.cartnumber-1]=pizza;
            
             console.log("vv",getuser.cartvalue);

          },          
          setLoginDetails:function(user){
            getuser.userLogin=user;
            getuser.logStatus=1;

             console.log("inside service",getuser.userLogin);

          },

          getLoginDetails:function(){
             return getuser.userLogin;
          },
          getLogStatus:function(){
              console.log("log status",getuser.logStatus);
            return getuser.logStatus;
          }

	

};
	return getuser;

});


