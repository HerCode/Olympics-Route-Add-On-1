angular.module('routeApp').factory('DataService', function($http){

var data = {};

function handleSuccess(response){
  data.pets = response.data;

}

function handleFailure(response){
  console.log('EVERYTHING\'S ON FIRE', response);


}

  function makeCall(){
    $http.get('/pets').then(handleSuccess, handleFailure);
  }

  makeCall();

return{
  data: data,
  /*Invoke*/
  callServer: makeCall
  /*Inject*/
};
});
