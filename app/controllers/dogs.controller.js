/*eslint-disable*/

angular
  .module('myApp')
  .controller('DogsController', DogsController);

  function DogsController($scope, $state, $http){
    $scope.view = {};
    $scope.view.message = "Welcome me Dogs!"
  };
