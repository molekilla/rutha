;(function(){

'use strict';

angular.module('rutha.templates', []).run(['$templateCache', function($templateCache) {

  $templateCache.put('main/index.html', '<div class="page-header"><h1>Hello Hejsan Hola Rutha!</h1></div><p class="lead">Hello HapiJS, meet AngularJS !!!</p><input kendo-date-picker>');

  $templateCache.put('main/login.html', '<div class="container"><div class="col-sm-6 col-sm-offset-3"><h1>Login</h1><form action="/auth/login" method="post"><div class="form-group"><label>Email</label> <input type="text" class="form-control" name="email"></div><div class="form-group"><label>Password</label> <input type="password" class="form-control" name="password"></div><button type="submit" class="btn btn-warning btn-lg">Login</button></form><hr><p>Need an account ? <a href="#signup">Signup</a></p></div></div>');

  $templateCache.put('main/signup.html', '<div class="container"><div class="col-sm-6 col-sm-offset-3"><h1>Signup</h1><form action="/auth/signup" method="post"><div class="form-group"><label>Email</label> <input type="text" class="form-control" name="email"></div><div class="form-group"><label>Password</label> <input type="password" class="form-control" name="password"></div><button type="submit" class="btn btn-warning btn-lg">Signup</button></form><hr><p>Already have an account ? <a href="#login">Login</a></p></div></div>');

}]);

})();