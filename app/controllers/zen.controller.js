/*eslint-disable*/

angular
  .module('myApp')
  .controller('ZenController', ZenController);

  function ZenController($scope, ZenService) {

  $scope.view = {};
  $scope.view.message = "Welcome!"


  $http.get('https://api.github.com/zen').then(function(data){
    $scope.view.zenData = data;
  });
};
