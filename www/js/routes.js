angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/product.html',
        controller: 'productCtrl'
      }
    }
  })
  .state('menu.profiledetail', {
    url: '/profile_detail',
     views: {
      'side-menu21': {
        templateUrl: 'templates/profiledetail.html',
        controller: 'profileDetailCtrl'
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

  .state('forgot-password', {
    url: '/page4', 
    templateUrl: 'templates/cambiarPassword.html',
    controller: 'cambiarPasswordCtrl'
      
  })

  .state('detail-product', {
    url: '/detail-product/:id', 
    templateUrl: 'templates/detail-product.html',
    controller: 'detailProductCtrl'
  })

  .state('edit-product', {
    url: '/edit-product', 
    templateUrl: 'templates/edit-product.html',
    controller: 'editProductCtrl'
  })

  .state('options', {
    url: '/options', 
    templateUrl: 'templates/options.html',
    controller: 'optionsCtrl'
  })

  .state('logout', {
    url: '/logout',
    templateUrl: 'templates/loguot.html',
    controller: 'logoutCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('edit', {
    url: '/edit',
    templateUrl: 'templates/edit.html',
    controller: 'editCtrl'
  })

  .state('changePassword', {
    url: '/changePassword',
    templateUrl: 'templates/changePassword.html',
    controller: 'changePasswordCtrl'
  })


$urlRouterProvider.otherwise('/side-menu21/home')

});