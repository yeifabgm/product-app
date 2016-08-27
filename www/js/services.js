angular.module('app.services', ['ngResource'])

.service('productService', ['$resource', function($resource){
   this.item_list = $resource('http://138.68.0.83:7070/api/v1/product/list');

   this.item_detail = $resource('http://138.68.0.83:7070/api/v1/product/detail/:id');

   this.item_create = $resource('http://138.68.0.83:7070/api/v1/product/create', {},{
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

   this.updateDate = $resource('http://138.68.0.83:7070/api/v1/user/update/:email',{email: '@email'},{
      save:{
         method:'PUT',
         interceptor:{
            response:function(response){
            var result= response.resource;
            result.$status =response.status;
            return result;
            }
         }
      }
   });

   this.user_create = $resource('http://138.68.0.83:7070/api/v1/user/sign-up', {},{
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

   this.user_login = $resource('http://138.68.0.83:7070/api/v1/user/sign-in', {},{
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


   this.forgot_password = $resource('http://138.68.0.83:7070/api/v1/user/forgot-password/:email',{email: '@email'},{
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

   this.deleteData = $resource('http://138.68.0.83:7070/api/v1/user/delete/:email',{email: '@email'},{
      delete: { //nombre del metodo a utilizar
        method: 'DELETE',
        interceptor:{
            response:function(response){
            var result= response.resource;
            result.$status =response.status;
            return result;
            }
         }
      }
   });

   this.item_delete = $resource('http://138.68.0.83:7070/api/v1/product/delete/:id',{},{
      delete: { //nombre del metodo a utilizar
        method: 'DELETE',
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