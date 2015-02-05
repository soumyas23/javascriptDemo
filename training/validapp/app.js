angular.module('validapp', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('validapp').config(function($routeProvider) {

    $routeProvider.when('/form',{templateUrl: 'form/form.html'});
    $routeProvider.when('/userpage',{templateUrl: 'userpage/userpage.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/form'});

});

angular.module('validapp').run(function($rootScope) {

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
