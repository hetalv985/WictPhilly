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
        }).
        when('/locate', {
            templateUrl: 'views/locate.tpl.html',
            controller: 'locateController as locateController'
        }).
        when('/schedule', {
            templateUrl: 'views/schedule.tpl.html',
            controller: 'scheduleController as scheduleController'
        }).
        when('/bios', {
            templateUrl: 'views/bios.tpl.html',
            controller: 'biosController as biosController'
        }).
        when('/sponsors', {
            templateUrl: 'views/sponsors.tpl.html',
            controller: 'sponsorsController as sponsorsController'
        })
        .otherwise({
            redirectTo: '/'
        });
}