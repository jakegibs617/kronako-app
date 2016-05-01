angular.module('app.controllers', [])

.controller('signInCtrl', function($scope) {

})

.controller('cameraCtrl', function($scope, $cordovaCamera) {

  $scope.pictureUrl = 'http://placehold.it/300x300';
  $scope.takePicture = function() {

    var options = {
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
  	  correctOrientation:true
       };

    $cordovaCamera.getPicture(options)
      .then(function(data) {
          $scope.pictureUrl = 'data:image/jpeg;base64,' + data;
      }, function(error) {
      })

  };
    $scope.images = [];
    $scope.loadImages = function() {
      for(var i = 0; i < 100; i++) {
          $scope.images.push({id: i, src: "http://placehold.it/50x50"
        });
      }
    };

})

.controller('contactClassCtrl', function($scope) {

})

.controller('galleryCtrl', function($scope) {

})

.controller('settingsCtrl', function($scope) {

})
