var CustomersService = function ($http) {
    var apiUrl = "https://jsonplaceholder.typicode.com/posts";
    this.getProducts = function () {
        return $http.get(apiUrl);
    };
};
angular.module('myApp').service('CustomersService', ['$http', CustomersService]);


