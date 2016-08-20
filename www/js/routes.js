angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/product.html',
        controller: 'productCtrl'
      }
    }
  })

  .state('ingreso', {
    url: '/page2',
    templateUrl: 'templates/ingreso.html',
    controller: 'ingresoCtrl'
  })

  .state('registro', {
    url: '/page3',
    templateUrl: 'templates/registro.html',
    controller: 'registroCtrl'
  })

  .state('page', {
    url: '/page1',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('menu.products', {
    url: '/products',
    views: {
      'side-menu21': {
        templateUrl: 'templates/product.html',
        controller: 'productCtrl'
      }
    }
  })


  .state('forgot-password', {
    url: '/page4', 
    templateUrl: 'templates/cambiarPassword.html',
    controller: 'cambiarPasswordCtrl'
      
  })

  .state('options', {
    url: '/options', 
    templateUrl: 'templates/options.html',
    controller: 'optionsCtrl'
      
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })




$urlRouterProvider.otherwise('/side-menu21/page1')

  

});