/*eslint-disable*/

angular
  .module('myApp')
  .controller('HomeController', HomeController);

  function HomeController($scope, $state){
    $scope.view = {};
    $scope.view.message = "Welcome!"

  };
