
var app = angular.module('myApp');
app.controller('AddController', ['$location', function($location) {
    var vm = this;
    vm.submitted = false;  
    vm.matchPassword = function(password, confirmPassword) {
        return password === confirmPassword;
    };
    vm.submitForm = function() {
        event.preventDefault(); 
        vm.submitted = true; 
        console.log(vm.form);
        if (vm.form.$valid) {
            vm.formData = {
                name: vm.name,
                email: vm.email,
                phone: vm.phone,
                age: vm.age,
                password: vm.password,
            };
            console.log('Form submitted', vm.formData);
        } else {
            console.log('Form contain errror');
        }
    };
    vm.goBack = function () {
        $location.path('/customers'); 
    };
}]);

app.directive('validateEmail', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            ctrl.$validators.validateEmail = function(modelValue) {
                var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return ctrl.$isEmpty(modelValue) || emailPattern.test(modelValue);
            };
        }
    };
});
app.directive('validatePhone', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {
            ctrl.$validators.validatePhone = function (modelValue) {
                if (!modelValue) {
                    return true;
                }
                var phonePattern = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
                var isValidLength = modelValue.length >= 10 && modelValue.length <= 15;
                return phonePattern.test(modelValue) && isValidLength;
            };
        },
    };
});

app.directive('validatePassword', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            ctrl.$validators.validatePassword = function(modelValue) {
                if (!modelValue) {
                    return true;
                }
                var passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
                return ctrl.$isEmpty(modelValue) || passwordPattern.test(modelValue);
            };
        }
    };
});

app.directive('matchPassword', function() {
    return {
        require: 'ngModel',
        scope: {
            otherValue: '=matchPassword' 
        },
        link: function(scope, element, attrs, ctrl) {
            ctrl.$validators.matchPassword = function(modelValue) {
                return modelValue === scope.otherValue;
            };
            scope.$watch('otherValue', function() {
                ctrl.$validate(); 
            });
            scope.$watch(function() {
                return ctrl.$modelValue;
            }, function() {
                ctrl.$validate();
            });
        }
    };
});

