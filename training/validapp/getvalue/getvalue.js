angular.module('validapp').factory('getvalue',function() {
	
	var getvalue = {
		userData:{},
		set:function (user){
			getvalue.userData = user;
		},		
		get:function(callback){
			callback(getvalue.userData);
		}
	};
	

	return getvalue;

});
