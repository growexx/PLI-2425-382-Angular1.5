(function() {
    var app = angular.module('myApp');

    app.component('headerComponent', {
        template: `
            <header>
                <nav>                 
                </nav>
                <h1>Welcome to My Website</h1>
                <button ng-click="$ctrl.toggleTheme()">Toggle Theme</button>
            </header>
        `,
        controller: function() {
            var vm = this;
            vm.toggleTheme = function() {
                document.body.classList.toggle('dark-theme');
            };
            vm.changeView = function(view) {
                console.log('Changing view to: ' + view);
            };
        }
    });
})();



