(function () {
    var CustomersController = function ($location, ProductsService) {
        var vm = this;
        vm.sortBy = 'id'; 
        vm.reverse = false;
        vm.productFilter = {};
        vm.products = [];

        vm.getProducts = function () {
            if (vm.products.length === 0) {
            ProductsService.getProducts()
                .then(function (response) {
                    vm.products = response.data;
                })
                .catch(function (error) {
                    console.error('Error', error);
                });
        };     
    }
        vm.doSort = function (propName) {
            vm.sortBy = propName;
            vm.reverse = !vm.reverse;
        };
        vm.addForm = function () {
                $location.path('/add-product');
           };
        vm.getProducts();
        vm.go = function () {
            $location.path('/new'); 
        };
    };
 
    angular.module('myApp').controller('CustomersController', ['$location', 'CustomersService', CustomersController]);
})();



