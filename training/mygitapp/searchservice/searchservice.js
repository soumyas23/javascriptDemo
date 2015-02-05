angular.module('mygitapp').factory('searchservice',function($http) {

	var searchservice = {
		
		searchRepos: function searchRepos(query, callback) {
    $http.get('https://api.github.com/search/repositories', { params: { q: query } })
        .success(function (data) {
            callback(null, data);
        })
        .error(function (e) {
            callback(e);
        });
	},

 authentication:function(callback){
          $http({method : 'GET',
          url :'https://api.github.com',
          headers:{ 'Authorization':'token ab08a1f91baee6d40af60ee1fc5177fe2393e604' }})
          .success(function(data){
          console.log(data);
            callback(data);
          });
               },
               checkstar : function(fullname,callback){
                        $http({method : 'GET',
             url :'https://api.github.com/user/starred/'+fullname+'',
             headers:{ 'Authorization':'token ab08a1f91baee6d40af60ee1fc5177fe2393e604' }})
          .success(function(error,data,status){
          console.log(data);
            //callback(data);
          });
               }
       };

	return searchservice;
});
