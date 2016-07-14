angular.module('index', ['ngRoute']);

  angular.module('index').config(function($routeProvider, $locationProvider){

  $routeProvider

    .when('/archer', {
      templateUrl: 'views/archery.html',
      controller: 'ArcheryController'
    })
    .when('/boadie', {
      templateUrl: 'views/canoekayak.html',
      controller: 'CanoekayakController'
    })
    .when('/pentanthalist', {
      templateUrl: 'views/modpent.html',
      controller: 'ModpentController'
    })
    .when('/syncist', {
      templateUrl: 'views/syncswim.html',
      controller: 'SyncswimController'
    })
    .when('/taekwandist', {
      templateUrl: 'views/taekwondo.html',
      controller: 'TaekwandoController'
    });


    $locationProvider.html5Mode(true);
});



angular.module('index').controller('ArcheryController', function($scope, $http){
  $http.get('../routes/archery')
  .then(function(response){
  $scope.archery = response.data.Name + ' from ' + response.data.Origin;
  });
});

angular.module('index').controller('CanoekayakController', function($scope, $http){
  $http.get('../routes/canoekayak')
  .then(function(response){
  $scope.canoekayak = response.data.Name + ' from ' + response.data.Origin;
  });
});

angular.module('index').controller('ModpentController', function($scope, $http){
  $http.get('../routes/modpent')
  .then(function(response){
  $scope.modpent = response.data.Name + ' from ' + response.data.Origin;
  });
});

angular.module('index').controller('SyncswimController', function($scope, $http){
  $http.get('../routers/syncswim')
  .then(function(response){
  $scope.syncswim= response.data.Name + ' from ' + response.data.Origin;
  });

angular.module('index').controller('TaekwondoController', function($scope, $http){
  $http.get('../routes/taekwondo')
  .then(function(response){
  $scope.taekwando = response.data.Name + ' from ' + response.data.Origin;
  });
});

});
