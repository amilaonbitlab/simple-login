angular.module('starter.controller', [])

  .controller('AppCtrl', function($scope, $state, $ionicPopup, AuthService, AUTH_EVENTS) {
    $scope.username = AuthService.username();

    $scope.$on(AUTH_EVENTS.notAuthorized, function(event) {
      var alertPopup = $ionicPopup.alert({
        title: 'Unauthorized!',
        template: 'You are not allowed to access this resource.'
      });
    });

    $scope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
      AuthService.logout();
      $state.go('login');
      var alertPopup = $ionicPopup.alert({
        title: 'Session Lost!',
        template: 'Sorry, You have to login again.'
      });
    });

    $scope.setCurrentUsername = function(name) {
      $scope.username = name;
    };
  })

  .controller('LoginCtrl', function($scope, $state, $ionicPopup, AuthService) {
    $scope.data = {};

    $scope.login = function(data) {
      AuthService.login(data.username, data.password).then(function(authenticated) {
        console.log(authenticated);
        $state.go('main.dash', {}, {reload: true});
        $scope.setCurrentUsername(data.username);
      }, function(err) {
        var alertPopup = $ionicPopup.alert({
          title: 'Login failed!',
          template: 'Please check your credentials!'
        });
      });
    };
  })

  .controller('DashCtrl', function($scope, $state, $http, $ionicPopup, AuthService, dashService) {

    $scope.getAllApps = function(){
      dashService.getAllApps().success(function(data){
        console.log(data);
        $scope.response = data;
      });
    };
    $scope.logout = function() {
      $scope.response = '';
      AuthService.logout();
      $state.go('login');

    };

  });
