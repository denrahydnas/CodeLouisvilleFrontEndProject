'use strict';

var app = angular.module("myApp", []);
                         
app.controller('MainController', ['$scope', function ($scope) { 
    $scope.title = 'Rotaract Projects'; 
    $scope.promo = 'Find out more about our recent service projects:';
    $scope.projects = [{
        name: 'World Rotaract Day',
        blurb: "This March, Rotaractors around the world are celebrating how they build stronger communities and develop the leadership skills necessary to change the world. Join our World Rotaract Week global celebrations with #WorldRotaractWeek.",
        date: new Date('2016', '02', '12'),
        image: 'img/project4.jpg',
        likes: 0
    },
        {
            name: 'Girl Scout Cookies',
            blurb: "Rotaract members assist local Girl Scouts in organizing this year's Girl Scout Cookie stock for distribution and delivery. We think it demonstrates Rotaract's dedication to the community since they didn't eat them all in the process.",
            date: new Date('2016', '01', '08'),
            image: 'img/rotaractLou2.jpg',
            likes: 0
        },
        {
            name: 'Rotary fights to end polio',
            blurb: "Rotaract joins the Louisville Rotary club in their initiative to end polio throughout the world.",
            date: new Date('2015', '07', '01'),
            image: 'img/project1.jpg',
            likes: 0
        }]
    $scope.plusOne = function (index) {
        $scope.projects[index].likes += 1;
    };
    
}]);

   
