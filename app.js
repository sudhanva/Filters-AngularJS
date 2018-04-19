var app = angular.module('myApp',[]);

app.controller('myController',['$scope','$http', function($scope,$http){
 $http.get('data.json').success(function(data){
   $scope.artists = data;
   $scope.artistOrder = 'name';
 }); 
}]);