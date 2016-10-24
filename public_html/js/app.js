var app = angular.module('ngregister', ['ngRoute']);
app.conf=function ($routeProvider) { 
    $routeProvider 
            .when('/', { 
                //controller: 'HomeController', 
        templateUrl: 'views/home.html' 
    })
            .when('/register', { 
                controller: 'RegisterController', 
        templateUrl: 'views/register.html' 
    }) 
            .otherwise({ 
                redirectTo: '/' 
    }); 
};
app.config(app.conf);