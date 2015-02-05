angular.module('newapp').factory('GitHub',function($http) {

	var GitHub = {
		searchRepos: function searchRepos(query, callback) {
    $http.get('https://api.github.com/search/repositories', { params: { q: query } })
        .success(function (data) {
            callback(null, data);
        })
        .error(function (e) {
            callback(e);
        });
},getRepo: function getRepo(name, callback) {
    $http.get('https://api.github.com/repos/'+ name)
        .success(function (data) {
            callback(null, data);
        })
        .error(function (e) {
            callback(e);
        });
    },getReadme: function getReadme(name, callback) {
    $http.get('https://api.github.com/repos/'+ name +'/readme')
        .success(function (data) {
            callback(null, atob(data.content));
        })
        .error(function (e) {
            callback(e);
        });
}

	};

	return GitHub;
});