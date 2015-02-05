angular.module('ui', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('ui').config(function($routeProvider) {

$routeProvider.when('/EmployeeDetails',{templateUrl: 'EmployeeDetails/EmployeeDetails.html'});
$routeProvider.otherwise({redirectTo:'/EmployeeDetails'});
   

});

angular.module('ui').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
