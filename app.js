var app = angular.module('bridgelabz', []);
app.controller('pageCtrl', function ($scope) {
    $scope.mnc_list = [{
            no: 1,
            path: "./assets/NewYatra-Logo.png",
            class: 'carousel-item col-md-2 active'
        },
        {
            no: 2,
            path: "./assets/Intellect_logo.png",
            class: 'carousel-item col-md-2'
        },
        {
            no: 3,
            path: "./assets/Intellect_logo.png",
            class: 'carousel-item col-md-2'
        },
        {
            no: 4,
            path: "./assets/Intellect_logo.png",
            class: 'carousel-item col-md-2'
        },
        {
            no: 5,
            path: "./assets/Intellect_logo.png",
            class: 'carousel-item col-md-2'
        },
        {
            no: 6,
            path: "./assets/Intellect_logo.png",
            class: 'carousel-item col-md-2'
        },
        {
            no: 7,
            path: "./assets/Intellect_logo.png",
            class: 'carousel-item col-md-2'
        },
    ];
});