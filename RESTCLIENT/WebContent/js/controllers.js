'use strict';

angular.module('ProductApp.controllers', []).

    controller('ProductsController', ['$scope', 'ProductService',
        function($scope, ProductService) {
        	$scope.products = [];
        	
//        	$scope.searchFilter = function(product) {
//        	    var keyword = new RegExp($scope.nameFilter, 'i');
//        	    return keyword.test(product.shortname);
//        	};
        	
            ProductService.getProductsJSON().success(function (response) {
            	$scope.products = response.products;
            });
        }
    ]).
    
    controller('ProductController', ['$scope', '$routeParams', 'ProductService',
        function($scope, $routeParams, ProductService) {
    		$scope.product = null;
	        var name = $routeParams.name;

	        ProductService.getProductJSON(name).success(function (response) {
	        	$scope.product = response;
	        });
    	}
    ]).
    
    controller('NewProductController', ['$scope', 'ProductService',
        function($scope, ProductService) {
    		$scope.addProduct = function() {
    			var productXML = '{"products":[';
            	productXML += '("id":"' + $scope.newProduct.id + '",';
            	productXML += '"price":' + $scope.newProduct.price + ',';
            	productXML += '"name":"' + $scope.newProduct.shortname + '",';
            	productXML += '"brand":' + $scope.newProduct.brand + '",';
            	productXML += '"description":' + $scope.newProduct.description + '")])';

    			ProductService.addProduct(productXML);
    		};
    	}
    ]);
