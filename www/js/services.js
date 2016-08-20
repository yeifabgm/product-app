angular.module('app.services', ['ngResource'])

.service('productService', ['$resource', function($resource){
   this.item_list = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/list');

   this.item_detail = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/detail/:id');

   this.item_create = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/create', {},{
      save:{
         method:'POST',
         interceptor:{
            response:function(response){
            var result= response.resource;
            result.$status =response.status;
            return result;
            }
         }
      }
   });

   this.user_create = $resource('http://private-bcbaa-productapp.apiary-mock.com/user/sign-up', {},{
   	save:{
   		method:'POST',
   		interceptor:{
   			response:function(response){
   			var result= response.resource;
   			result.$status =response.status;
   			return result;
   			}
   		}
   	}
   });

   this.user_login = $resource('http://private-bcbaa-productapp.apiary-mock.com/user/sign-in/1', {},{
   	login:{
   		method:'POST',
   		interceptor:{
   			response:function(response){
   			var result= response.resource;
   			result.$status =response.status;
   			return result;
   			}
   		}
   	}
   });

   this.product_list = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/list');


   this.forgot_password = $resource('http://private-bcbaa-productapp.apiary-mock.com/user/forgot-password/:id',{id: '@id'},{
      update: { //nombre del metodo a utilizar
        method: 'PUT',
        interceptor:{
            response:function(response){
            var result= response.resource;
            result.$status =response.status;
            return result;
            }
         }
      }
   });

}]);