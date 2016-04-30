angular.module('app.controllers', [])

.controller('signInCtrl', function($scope) {

})

.controller('cameraCtrl', function($scope, $cordovaCamera) {

  $scope.pictureUrl = 'http://placehold.it/300x300';
  $scope.takePicture = function() {

    var options = {
         destinationType: Camera.DestinationType.DATA_URL,
         encodingType: Camera.EncodingType.JPEG
       };

    $cordovaCamera.getPicture(options)
      .then(function(data) {
          $scope.pictureUrl = 'data:image/jpeg;base64,' + data;
      }, function(error) {
      })
  };

})

.controller('contactClassCtrl', function($scope) {

})

.controller('galleryCtrl', function($scope) {

})

.controller('settingsCtrl', function($scope) {

})
