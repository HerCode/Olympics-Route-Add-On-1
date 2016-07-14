angular.module('index').config(function($routeProvider, $locationProvider){

$routeProvider
  .when('/archery', {
    templateUrl: '../routes/archery.html',
    controller: 'ArcheryController'
  })
  .when('/canoekayak', {
    templateUrl: '../routes/canoekayak.html',
    controller: 'CanoekayakController'
  })
  .when('/modpent', {
    templateUrl: '../routes/modpent.html',
    controller: 'ModpentController'
  })
  .when('/syncswim', {
    templateUrl: '../routes/syncswim.html',
    controller: 'SyncswimController'
  })
  .when('/taekwondo', {
    templateUrl: '../routes/taekwondo.html',
    controller: 'TaekwondoController'
  });

  $locationProvider.html5Mode(true);
});
