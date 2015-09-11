angular.module('rutha.templates').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/main/index.html',
    "      <div class=\"page-header\">\n" +
    "        <h1>Hello Hejsan Hola Rutha!</h1>\n" +
    "      </div>\n" +
    "      <p class=\"lead\">Hello HapiJS, meet AngularJS !!!</p>\n" +
    "            <input kendo-date-picker />"
  );


  $templateCache.put('app/main/login.html',
    "<div class=\"container\">\n" +
    "  <div class=\"col-sm-6 col-sm-offset-3\">\n" +
    "    <h1>Login</h1>\n" +
    "    <form action=\"/auth/login\" method=\"post\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <label>Email</label>\n" +
    "        <input type=\"text\" class=\"form-control\" name=\"email\">\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label>Password</label>\n" +
    "        <input type=\"password\" class=\"form-control\" name=\"password\">\n" +
    "      </div>\n" +
    "      <button type=\"submit\" class=\"btn btn-warning btn-lg\">Login</button>\n" +
    "    </form>\n" +
    "\n" +
    "    <hr>\n" +
    "\n" +
    "    <p>Need an account ? <a href=\"#signup\">Signup</a></p>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/main/signup.html',
    "<div class=\"container\">\n" +
    "  <div class=\"col-sm-6 col-sm-offset-3\">\n" +
    "    <h1>Signup</h1>\n" +
    " \n" +
    "    <form action=\"/auth/signup\" method=\"post\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <label>Email</label>\n" +
    "        <input type=\"text\" class=\"form-control\" name=\"email\">\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label>Password</label>\n" +
    "        <input type=\"password\" class=\"form-control\" name=\"password\">\n" +
    "      </div>\n" +
    "      <button type=\"submit\" class=\"btn btn-warning btn-lg\">Signup</button>\n" +
    "    </form>\n" +
    "\n" +
    "    <hr>\n" +
    "\n" +
    "    <p>Already have an account ? <a href=\"#login\">Login</a></p>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
