(function() {
    var app = angular.module('myApp');

    app.component('footerComponent', {
        template: `
            <footer>
                <div>
                    <p>&copy; 2024 Customers Management. All rights reserved.</p>
                    <div>
                        <a href="https://www.facebook.com" target="_blank">Facebook</a>
                        <a href="https://www.twitter.com" target="_blank">Twitter</a>
                        <a href="https://www.instagram.com" target="_blank">Instagram</a>
                    </div>
                </div>
            </footer>
        `
    });
})();
