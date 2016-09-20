var sumitApp = angular.module('sumitApp',['ngRoute']);

sumitApp.config(function($routeProvider){
	
	$routeProvider.when('/',{
		templateUrl: 'pages/home.html',
		controller: 'mainController'
	})
	.when('/about',{
		templateUrl : 'pages/about.html',
		controller: 'aboutController'
	})
	.when('/contact',{
		templateUrl : 'pages/contact.html',
		controller : 'contactController'
	});
	
});

sumitApp.controller('mainController', function($scope){
	$scope.message = "This is ngRoute example - Main Page ";
});

sumitApp.controller('aboutController',function($scope){
	$scope.message = "This is ngRoute example - About Page ";
});
sumitApp.controller('contactController',function($scope){
	$scope.message = "This is ngRoute example - Contact Page ";
});
