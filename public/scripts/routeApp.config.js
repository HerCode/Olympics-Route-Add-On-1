angular.module('olympicPicker').config(function($routeProvider, $locationProvider){

$routeProvider
  .when('/badminton', {
    templateUrl: 'views/badminton.html',
    controller: 'BadController'
  })
  .when('/womensgymnastics', {
    templateUrl: 'views/womgym.html',
    controller: 'GymController'
  })
  .when('/tabletennis', {
    templateUrl: 'views/tabten.html',
    controller: 'TabTenController'
  })
  .when('/taekwondo', {
    templateUrl: 'views/taekwondo.html',
    controller: 'TaeKwonDoController'
  })
  .when('/syncswim', {
    templateUrl: 'views/syncswim.html',
    controller: 'SyncSwimController'
  });

  $locationProvider.html5Mode(true);
});
