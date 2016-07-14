$scope.genRanOlympians = function() {
  $http.get('/olympics/badminton')
  .then(function(response){
  $scope.badmintonner = response.data.Name + ' from ' + response.data.Origin;
});
};
