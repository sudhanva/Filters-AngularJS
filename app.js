var app = angular.module('myApp',[
	'ngRoute',
	'artistController',
	'ngAnimate'
]);

app.config(['$routeProvider',function($routeProvider){
$routeProvider
.when('/list',{
	templateUrl: 'partials/list.html',
	controller: 'ListController'
})
.when('/details/:itemId',{
	templateUrl: 'partials/details.html',
	controller:'DetailsController'
})
.otherwise({
	redirectTo: '/list'
})
}]);