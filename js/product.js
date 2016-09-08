(function() {
    var app = angular.module('product-directives', []);

    app.directive("productGallery", function(){
        return {
            restrict: 'E',
            templateUrl: 'views/product-gallery.html',
            controller: function(){
                this.current = 0;
                this.setCurrent = function(pic){
                    this.current = pic || 0;
                }
            },
            controllerAs: 'gallery'
        }
    });

    app.directive("productPanel", function(){
        return {
            restrict: 'E',
            templateUrl: 'views/product-panel.html',
            controller: function(){
                this.tab = 1;

                this.selectTab = function(setTab){
                    this.tab = setTab;
                };

                this.isSelected = function(checkTab){
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'panel'
        };
    });

    app.directive("productReviews", function(){
        return {
            restrict: 'E',
            templateUrl: 'views/product-reviews.html'
        };
    });

    app.directive("productSpecs", function(){
        return {
            restrict: 'E',
            templateUrl: 'views/product-specs.html'
        };
    });

    app.directive("productDesc", function(){
        return {
            restrict: 'E',
            templateUrl: 'views/product-desc.html'
        };
    });

})();

