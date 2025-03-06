(function () {
    var app = angular.module('myApp');

    app.directive('myComponent', function () {
        return {
            restrict: 'E',
            scope: {
                customer: '=',      
                productName: '<',
                componentId: '@' 
            },
            template: `
                <div>
                    <h3>Customer Information</h3>
                    <p>Name: {{customer.name}}</p>
                    <p>City: {{customer.city}}</p>
                    <p>Order Total: {{customer.orderTotal}}</p>

                    <h3>Product Information</h3>
                    <p>Product: {{productName}}</p>

                    <p>{{ componentId}}</p>
                   
                      <div>
                        <h4>Additional Information:</h4>
                        <div ng-transclude></div> 
                    </div>
                    <button class="btn-new" ng-click="customer.city = 'Updated City'">Update City</button>
                </div>
            `,
            transclude: true,
            link: function (scope, element, attrs) {
                console.log('myComponent directive is linked');
            }
        };
    });
})();
