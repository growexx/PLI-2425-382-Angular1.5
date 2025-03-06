  (function() {
    angular.module('myApp', ['ngRoute', 'ngAnimate'])
        .config(function($routeProvider) {
            $routeProvider
                .when('/customers', {
                    templateUrl: 'src/views/customers.html',
                    controller: 'CustomersController as vm',
                })              
                .when('/add-product', {
                    templateUrl: 'src/views/add.html', 
                    controller: 'AddController',
                    controllerAs: 'vm'
                })
                .when('/new', {
                    templateUrl: 'src/views/new.html', 
                    controller: 'NewController',
                    controllerAs: 'vm'
                })
                .otherwise({
                    redirectTo: '/customers'
                });
        });
})();
