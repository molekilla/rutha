# Rutha Stack - Taming HapiJS and AngularJS #
**Ru** le 
**T** hem 
**H** apiJS 
**A** ngularJS

Pure pragmatic NodeJS stack

### Changelog ###

#### 0.2.2
* Added Hapi Local and FB OAuth authentication sample code. Based from [Scotch.io / Chris Sevilleja](http://scotch.io/tutorials/javascript/easy-node-authentication-setup-and-local) and  [EmptyMind](http://emptymind.me/user-authentication-with-hapi-hapi-auth-cookie-and-mongoose/)

#### 0.2.1
* Added hapi-auth-bearer-token to authenticate API. Use Bearer authentication for API calls.

#### 0.2.0

* Added [rutha-utils](https://github.com/molekilla/rutha-utils), which are boilerplate wrappers for nconf, winston and mongoose
* REST API versioning sample
* REST API health check
* How to use Mongoose loader
* Better `lib/hapi/index.js` loader for REST service and UI
* Bumping to HapiJS 6.4.0
* Preparing UI to 0.2.x, which will include authentication boilerplate, by adding bell, hapi-auth-cookie and joi modules