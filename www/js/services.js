angular.module('app.services', ['ngResource'])

.service('productService', ['$resource', function($resource){
   this.item_list = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/list');

   this.item_detail = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/detail/:id');

   this.item_create = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/create');

   this.user_create = $resource('http://private-bcbaa-productapp.apiary-mock.com/user/sign-up');

   this.user_login = $resource('http://private-bcbaa-productapp.apiary-mock.com/user/sign-in/1');


}]);