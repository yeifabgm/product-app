angular.module('app.controllers', ['app.services', 'ngCordova'])
  
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('ingresoCtrl', ['$scope', '$stateParams','productService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService) {
	$scope.login = function(){
		var data = {
			'email': $scope.email,
			'pass': $scope.pass
		};
		productService.user_login.save(data,function(data){
			console.log(data);
		});
	}
}])
   
.controller('registroCtrl', ['$scope', '$stateParams', 'productService', '$cordovaDialogs',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService, $cordovaDialogs) {
   $scope.registro = function(){
      var data = {
         'email': $scope.email,
         'firstname': $scope.firstName,
         'lastname': $scope.lastName,
         'phone': $scope.phone,
         'pass': $scope.pass
      };
      productService.user_create.save(data,function(data){
         console.log(data.$status);
         if(data.$status == 201 || data.$status == 200){
            $cordovaDialogs.alert('Bienvenido ' + data.firstname , '¡Hola! ' + data.firstname , 'OK');
         }else{
            $cordovaDialogs.alert('Algo salio mal ' + data.firstname , '¡Ups! ' + data.firstname , 'OK');
         }
         console.log('Click en el boton',data);
          });
   }
}])
   

      .controller('productCtrl', ['$scope', '$stateParams', 'productService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService) {
		
			productService.item_list.query(function(data){

        	$scope.list = data;

        	console.log($scope.list);
    });
}])  