angular.module('app.controllers', ['app.services'])
  
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
   
.controller('registroCtrl', ['$scope', '$stateParams', 'productService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService) {
	$scope.registro = function(){
		var data = {
			'email': $scope.email,
			'firstname': $scope.firstName,
			'lastname': $scope.lastName,
			'phone': $scope.phone,
			'pass': $scope.pass
		};
		productService.user_create.save(data,function(data){
			console.log(data);
		});
	}
}])
    