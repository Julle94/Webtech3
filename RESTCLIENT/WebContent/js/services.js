'use strict';

angular.module('ProductApp.services', []).

    factory('ProductService', ['$http',
        function($http) {
            var restUrl = 'http://localhost:8080/REST/products';

            return {
                getProductsJSON: function() {
                	$http.defaults.headers.common.Accept = 'application/json';
                	
                    return  $http.get(restUrl).
                        success(function(data) {
                            return data;
                        }).
                        error(function(data) {
                            return data;
                        });
                },
                getProductJSON: function(name) {
                	$http.defaults.headers.common.Accept = 'application/json';
                	
                        success(function(data) {
                            return data;
                        }).
                        error(function(data) {
                            return data;
                        });
                },
                addProduct: function(productXML) {
//                	$httpProvider.defaults.headers.post['Content-Type'] = 'text/xml';
//                    return $http.post(restUrl, productXML).
//                        success(function(data) {
//                        	alert('success');
//                            return data;
//                        }).
//                        error(function(data) {
//                        	alert('error');
//                        	return data;
//                        });
                	
                	$http({
                	    method: 'POST',
                	    url: restUrl,
                	    data: productXML,
                	    headers: {
                	        'Content-Type': 'application/json'
                	    }}).then(function(result) {
                	    		//alert('success');
                	       }, function(error) {
                	    	   	alert('error');
                	       });
                }
            };
        }
    ]);