// Inspiration / Based on
// Easy Node authentication by Chris Sevilleja
// http://scotch.io/tutorials/javascript/easy-node-authentication-setup-and-local
// and 
// EmptyMind
// http://emptymind.me/user-authentication-with-hapi-passport-and-mongoose/
// 

var Joi = require('joi');
var Hapi = require('hapi');
var authenticationHandlers = require('./authentication.js');
var pages = require('./pages.js');
var facebookOAuth = require('./facebook_oauth');


exports.register = function(plugin, options, next) {

  // Homepage route
  plugin.route({
    method: 'GET',
    path: '/',
    config: {
      handler: pages.index
    }
  });

  plugin.route({
    method: 'GET',
    path: '/profile',
    config: {
      handler: pages.profile,
      auth: 'session'
    }
  });

  plugin.route({
    method: ['GET', 'POST'],
    path: '/auth/facebook',
    config: {
      auth: 'facebook',
      handler: facebookOAuth.authenticate
    }
  });

  plugin.route({
    method: 'GET',
    path: '/logout',
    config: {
      auth: 'session',
      handler: authenticationHandlers.logout
    }
  });

  plugin.route({
    method: 'POST',
    path: '/auth/login',
    config: {
      validate: {
        payload: {
          email: Joi.string().email().required(),
          password: Joi.string().required()
        }
      },
    },
    handler: authenticationHandlers.login
  });

  plugin.route({
    method: 'POST',
    path: '/auth/signup',
    config: {
      validate: {
        payload: {
          email: Joi.string().email().required(),
          password: Joi.string().required()
        }
      },
      handler: authenticationHandlers.signup
    }
  });



  next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};


