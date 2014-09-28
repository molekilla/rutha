angular.module('rutha.templates').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/main/index.html',
    "<div>\r" +
    "\n" +
    " \r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/main/login.html',
    "<div class=\"container\">\r" +
    "\n" +
    "  <div class=\"col-sm-6 col-sm-offset-3\">\r" +
    "\n" +
    "    <h1>Login</h1>\r" +
    "\n" +
    "    <form action=\"/auth/login\" method=\"post\">\r" +
    "\n" +
    "      <div class=\"form-group\">\r" +
    "\n" +
    "        <label>Email</label>\r" +
    "\n" +
    "        <input type=\"text\" class=\"form-control\" name=\"email\">\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"form-group\">\r" +
    "\n" +
    "        <label>Password</label>\r" +
    "\n" +
    "        <input type=\"password\" class=\"form-control\" name=\"password\">\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <button type=\"submit\" class=\"btn btn-warning btn-lg\">Login</button>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <hr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <p>Need an account ? <a href=\"#signup\">Signup</a></p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/main/signup.html',
    "<div class=\"container\">\r" +
    "\n" +
    "  <div class=\"col-sm-6 col-sm-offset-3\">\r" +
    "\n" +
    "    <h1>Signup</h1>\r" +
    "\n" +
    " \r" +
    "\n" +
    "    <form action=\"/auth/signup\" method=\"post\">\r" +
    "\n" +
    "      <div class=\"form-group\">\r" +
    "\n" +
    "        <label>Email</label>\r" +
    "\n" +
    "        <input type=\"text\" class=\"form-control\" name=\"email\">\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"form-group\">\r" +
    "\n" +
    "        <label>Password</label>\r" +
    "\n" +
    "        <input type=\"password\" class=\"form-control\" name=\"password\">\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <button type=\"submit\" class=\"btn btn-warning btn-lg\">Signup</button>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <hr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <p>Already have an account ? <a href=\"#login\">Login</a></p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );

}]);
