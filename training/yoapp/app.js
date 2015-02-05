angular.module('yoapp', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('yoapp').config(function($routeProvider) {

    $routeProvider.when('/home',{templateUrl: 'home/home.html'});
    $routeProvider.when('/login',{templateUrl: 'partial/login/login.html'});
    $routeProvider.when('/movieapp',{templateUrl: 'movieapp/movieapp.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('yoapp').run(function($rootScope) {

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
