/*eslint-disable*/
angular
  .module('myApp')
  .factory('ZenService', ZenService);

function ZenService($http) {
  var URL = 'https://api.github.com/zen';
    return $http.get(URL)
    .then(data => {
      $scope.view.zenData = data.data;
    })
}
