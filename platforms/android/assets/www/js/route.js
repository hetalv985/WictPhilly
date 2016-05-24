app.myapp.config(config);

function config ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'views/dashboard.tpl.html',
            controller: 'dashboardController as dashboardController'
        }).
        when('/about', {
            templateUrl: 'views/about.tpl.html',
            controller: 'aboutController as aboutController'
        })
        .otherwise({
            redirectTo: '/'
        });
}