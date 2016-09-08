(function(){
    var app = angular.module('store', ['product-directives']);

    app.controller("StoreController",['$http', function($http){
       var store = this;
       this.products = [];

        $http.get('store-products.json').success(function(data){
            store.products = data;
        });

    }]);

    app.controller("ReviewController", function(){
        this.review = {};
        this.addReview = function(product){
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        }
    });

})();
