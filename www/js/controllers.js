angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('HomeCtrl', function($scope, $stateParams){

})

.controller('SettingCtrl', function($scope, $stateParams){
  
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('CashFlowCtrl', function($scope, CashFlow, FlowType){

  $scope.list = CashFlow.all();
  $scope.isIncome = function(item){
    var type= FlowType.getById(item.type);
    if(type==null){
      return false;
    }else if(type.isIncome){
      return true;
    }else {
      return false;
    }
  };


})

.controller('IncomeCtrl', function($scope){

  $scope.income = function(income){

      var total  = total + income;

  };

})

.controller('DashCtrl', function($scope) {

})

.controller('SettingCtrl', function($scope) {

});
