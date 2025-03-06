(function () {
    var NewController = function ($location) {
        var vm = this;
        vm.selectedCustomer = { id: 1, name: 'John Doe', city: 'New York', orderTotal: 120.50 };
        vm.selectedProduct = 'New York'; 
        vm.goBack = function () {
            $location.path('/customers'); 
        };
    };

    angular.module('myApp').controller('NewController', ['$location', NewController]);
})();
