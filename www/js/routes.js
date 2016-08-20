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
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.ingreso', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingreso.html',
        controller: 'ingresoCtrl'
      }
    }
  })

  .state('menu.registro', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/registro.html',
        controller: 'registroCtrl'
      }
    }
  })

  .state('page', {
    url: '/page1',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

    .state('products', {
    url: '/products',
    templateUrl: 'templates/product.html',
    controller: 'productCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});