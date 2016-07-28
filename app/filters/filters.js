/*eslint-disable*/

angular
  .module('myApp')
  .filter('kebab', function () {
    return function (input) {
      return input.replace(/_/g, "-");
    };
  });

angular
  .module('myApp')
  .filter('camel', function () {
    return function (word) {
      return word.replace(/_|-/g, " ").split(" ").map(function (ea,index) {
        if (index > 0) {
          return ea.charAt(0).toUpperCase() + ea.slice(1);
        } else {
          return ea;
        }
      }).join("")
    }
  })
