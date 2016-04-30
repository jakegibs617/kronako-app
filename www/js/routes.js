angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.signIn', {
    url: '/sign-in',
    views: {
      'tab1': {
        templateUrl: 'templates/signIn.html',
        controller: 'signInCtrl'
      }
    }
  })

  .state('tabsController.camera', {
    url: '/camera',
    views: {
      'tab2': {
        templateUrl: 'templates/camera.html',
        controller: 'cameraCtrl'
      }
    }
  })

  .state('tabsController.contactClass', {
    url: '/contact',
    views: {
      'tab3': {
        templateUrl: 'templates/contactClass.html',
        controller: 'contactClassCtrl'
      }
    }
  })

  .state('tabsController.gallery', {
    url: '/gallery',
    views: {
      'tab4': {
        templateUrl: 'templates/gallery.html',
        controller: 'galleryCtrl'
      }
    }
  })

  .state('tabsController.settings', {
    url: '/settings',
    views: {
      'tab5': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/settings')

  

});