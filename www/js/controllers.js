angular.module('app.controllers', ['app.services', 'ngCordova'])
   
.controller('ingresoCtrl', ['$scope', '$stateParams','productService', '$state', '$cordovaDialogs', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService, $state, $cordovaDialogs) {
	$scope.login = function(){
		var data = {
			'email': $scope.email,
			'pass': $scope.pass
		};
		productService.user_login.login(data,function(data){
			if(data.$status == 201 || data.$status == 200){
			   console.log(data);
				localStorage.setItem('email', data.email);
				localStorage.setItem('firstname', data.firstname);
				localStorage.setItem('lastname', data.lastname);
				localStorage.setItem('phone', data.phone);
				localStorage.setItem('cookie', data.cookie);
				$state.go('menu.home');
			} else {
				$cordovaDialogs.alert('Algo salio mal ' + data.firstname , '¡Ups! ' + data.firstname , 'OK');
			}
		});
	}
}])
   
.controller('registroCtrl', ['$scope', '$stateParams', 'productService', '$cordovaDialogs','$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService, $cordovaDialogs , $state) {
   $scope.registro = function(email, firstname, lastname, phone, pass){
      var data = {
         'email': email,
         'firstname': firstname,
         'lastname': lastname,
         'phone': phone,
         'password': pass
      };
      console.log(data);
      productService.user_create.save(data,function(data){
         console.log("xxxx");
         if(data.$status == 201 || data.$status == 200){
            $cordovaDialogs.alert('Bienvenido ' + data.firstname , '¡Hola! ' + data.firstname , 'OK');
            localStorage.setItem('email', data.email);
            $state.go('page');
         }else{
            $cordovaDialogs.alert('Algo salio mal ' + data.firstname , '¡Ups! ' + data.firstname , 'OK');
         }
         console.log('Click en el boton',data);
          });
   }
}])
   

.controller('productCtrl', ['$scope', '$stateParams', 'productService', '$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService, $state) {
	$scope.logout = function(){
		console.log("sdfasdf");
		$state.go('logout');
	}

	if (localStorage.getItem('cookie') == null) {
		console.log('No hay localStorage');
		$state.go('options');
	} else {
		productService.item_list.query(function(data){
			$scope.list = data;
        	console.log($scope.list);
    	});
	}
}])  


  .controller('cambiarPasswordCtrl', ['$scope', '$stateParams', 'productService','$cordovaDialogs', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService, $cordovaDialogs) {


  $scope.cambiar = function(){


    $cordovaDialogs.confirm('Confirmar cambio de Contraseña', 'Contraseña', ['Aceptar','Cancelar'])
        .then(function(buttonIndex) {
          // no button = 0, 'OK' = 1, 'Cancel' = 2
          var btnIndex = buttonIndex;
          //console.log(btnIndex);
          if(btnIndex == 1){ //Aceptar
             var data = {
                  'email': $scope.email,
                  'password': $scope.pass
                };

                console.log(data);
                var iduser = 1;//localStorage.getItem('email');

                if (typeof iduser !== 'undefined' && iduser !== null){

                  productService.forgot_password.update({'id': iduser}, data, function(data){
                    console.log(data);

                      if(data.$status == 201 || data.$status == 200){

                        $cordovaDialogs.alert('La Contraseña del usuario '+ $scope.email +' fue actualizada correctamente ', '¿Olvidó la Contraseña?' , 'OK');
                        
                     }else{
                        $cordovaDialogs.alert('Algo salio mal, intente más tarde ' , '¿Olvidó la Contraseña?' + data.firstname , 'OK');
                     }

                  });

                }else{
                   $cordovaDialogs.alert('El usuario debe autenticarse o ser creado' , '¡Ups! ', 'Aceptar');
                }
          }

        if(btnIndex == 2){ //Cancelar
          console.log("Clic en Cancelar");
        }          
  
    });     
    }
}])

.controller('detailProductCtrl', ['$scope', '$stateParams', 'productService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService) {
	console.log($stateParams.id);
	$scope.data_product = {};

	productService.item_detail.get({id: $stateParams.id}, function(_data){
		console.log(_data);
		/*
		$scope.data_product.name = _data.name;
		$scope.data_product.type = _data.type;
		$scope.data_product.quantity = _data.quantity;
		$scope.data_product.price = _data.price;
		$scope.data_product.id = _data.id;
		*/
		$scope.data_product = _data;
		localStorage.setItem('product_' + _data.id, JSON.stringify(_data));
	});

}])


.controller('optionsCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
	if (localStorage.getItem('cookie') != null) {
		console.log('No hay localStorage');
		$state.go('menu.home');
	}
}])

.controller('logoutCtrl', ['$scope', '$stateParams', '$state', '$cordovaDialogs', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $cordovaDialogs) {

  $cordovaDialogs.confirm('Confirmar Cerrar la Sesión', 'Cerrar Sesión', ['Aceptar','Cancelar'])
    .then(function(buttonIndex) {

        var btnIndex = buttonIndex;
          console.log(btnIndex);
        if(btnIndex == 1){ //Aceptar

          localStorage.clear();
          $state.go('options');
          console.log("Cerro la Sesión");

        }else{
          $state.go('menu.home');
        }
        
  });

}])

.controller('profileDetailCtrl', ['$scope', '$stateParams', 'productService', '$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService, $state) {
        $scope.email = localStorage.getItem('email');
        $scope.firtsname = localStorage.getItem('firstname');
        $scope.lastname = localStorage.getItem('lastname');
        $scope.phone = localStorage.getItem('phone');
       // $scope.cookie=localStorage.setItem('cookie');
}])  

 .controller('editCtrl', ['$scope', '$stateParams', 'productService', '$cordovaDialogs',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService, $cordovaDialogs) {
  $scope.email = localStorage.getItem('email');

  $scope.deleteData= function(){
    console.log(localStorage.getItem('email'))
      productService.deleteData.delete({'email':localStorage.getItem('email')},function(data){
        console.log(data);
      })
   }

  $scope.edit = function(firstName, lastName, phone){
    var data = {
         'firstname': firstName,
         'lastname': lastName,
         'phone': phone
    };
    console.log(data.firstName);
        
        productService.updateDate.save({'email': localStorage.getItem('email')}, data, function(data){
         console.log(data.$status);
        
         if(data.$status == 201 || data.$status == 200){
            $cordovaDialogs.alert('Nuevo nombre ' + data.firstname , 'Nuevo apellido ' + data.lastname , 'OK');
         }else{
            $cordovaDialogs.alert('Algo salio mal ' + data.firstname , '¡Ups! ' + data.firstname , 'OK');
         }});
  }
}])
   
.controller('changePasswordCtrl', ['$scope', '$stateParams', 'productService', '$cordovaDialogs', '$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService, $cordovaDialogs, $state) {


  $scope.change = function(newPass, newPass2){
      if(newPass === newPass2){
        $cordovaDialogs.alert('creado' , '¡Ups! ', 'Aceptar');
        productService.forgot_password.update({'email': localStorage.getItem('email')}, {"password":newPass},function(data){
          console.log(data);
        })
        $state.go('edit');
        
      }else{
        $cordovaDialogs.alert('las contraseñas no coinciden' , '¡Ups! ', 'Aceptar');
      }
   }
   /**/
}])
