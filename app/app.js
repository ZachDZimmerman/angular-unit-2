/*eslint-disable*/

angular
    .module('myApp', ['ui.router'])
    .config(config)

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');


    $stateProvider
    .state('/', {
        url: '/',
        templateUrl: 'index.html'
    }).state('home', {
        url: '/home',
        controller: 'HomeController',
        templateUrl: 'app/views/home.html'
    }).state('dogs', {
        url: '/dogs',
        controller: 'DogsController',
        templateUrl: 'app/views/dogs.html'
    }).state('home.zen', {
        url: '/zen',
        controller: "ZenController",
        templateUrl:'app/views/zen.html'
    })
};
