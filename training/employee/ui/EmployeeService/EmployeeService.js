angular.module('ui').factory('EmployeeService',function($http) {

	var EmployeeService = {
               get: function get(callback) {
              $http.get('http://localhost:3000/employee')
              .success(function (data) {
                  callback(data);
              })
              .error(function (e) {
                  callback(e);
              });
              }};

      

	return EmployeeService;
});