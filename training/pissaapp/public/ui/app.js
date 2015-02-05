angular.module('pizzapp', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('pizzapp').config(function($routeProvider) {

    $routeProvider.when('/home',{templateUrl: 'home/home.html'});
    $routeProvider.when('/signup',{templateUrl: 'signup/signup.html'});
    $routeProvider.when('/login',{templateUrl: 'login/login.html'});
    $routeProvider.when('/additems',{templateUrl: 'additems/additems.html'});
    $routeProvider.when('/viewitems',{templateUrl: 'viewitems/viewitems.html'});
    
    $routeProvider.when('/userpurchase',{templateUrl: 'userpurchase/userpurchase.html'});
    
    $routeProvider.when('/showpurchase',{templateUrl: 'showpurchase/showpurchase.html'});
    $routeProvider.when('/finaldisplay',{templateUrl: 'finaldisplay/finaldisplay.html'});
    $routeProvider.when('/cartdetails',{templateUrl: 'cartdetails/cartdetails.html'});
    $routeProvider.when('/userPage',{templateUrl: 'userPage/userPage.html'});
    $routeProvider.when('/userCheckout',{templateUrl: 'userCheckout/userCheckout.html'});
    $routeProvider.when('/userCheckoutView',{templateUrl: 'userCheckoutView/userCheckoutView.html'});
    $routeProvider.when('/adminPage',{templateUrl: 'adminPage/adminPage.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('pizzapp').run(function($rootScope) {

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
