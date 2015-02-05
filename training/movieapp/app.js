angular.module('movieapp', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('movieapp').config(function($routeProvider) {

    $routeProvider.when('/movieapp',{templateUrl: 'movieapp/home.html'});
    $routeProvider.when('/:movieName',{templateUrl: 'moviedetail/moviedetail.html'});
    /* Add New Routes Above */

    $routeProvider.otherwise({redirectTo:'/movieapp'});


});

angular.module('movieapp').run(function($rootScope) {

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
