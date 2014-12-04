angular.module('app')
    .config(function($routeProvider, $locationProvider){
       $routeProvider
           .when('/', { controller:'PostsCtrl', templateUrl: 'posts.html' })
           .when('/login', {controller:'LoginCtrl', templateUrl:'login.html'})
           .when('/register', {controller:'RegisterCtrl', templateUrl:'register.html'})
       $locationProvider.html5Mode(true);
    });
