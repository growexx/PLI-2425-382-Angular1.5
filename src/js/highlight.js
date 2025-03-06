angular.module('myApp')
    .directive('highlightText', ['$sce', function ($sce) {
        return {
            restrict: 'A',  
            scope: {
                highlightText: '=',  
                searchText: '='    
            },
            link: function(scope, element) {
                scope.$watchGroup(['highlightText', 'searchText'], function(newValues) {
                    var text = newValues[0];
                    var filter = newValues[1];
                    if (!filter || filter.trim() === '') {
                        element.html($sce.trustAsHtml(text));  
                    } else {
                        filter = filter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                        var pattern = new RegExp('(' + filter + ')', 'gi');
                        var highlightedText = text.replace(pattern, '<span class="highlight">$1</span>');
                        element.html($sce.trustAsHtml(highlightedText));
                    }
                });
            }
        };
    }]);

   