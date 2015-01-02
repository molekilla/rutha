var debug = require('debug')('frontend:main');
var Hapi = require('hapi');
var Boom = require('boom');

var RuthaUtils = require('rutha-utils');
var routes = require('./routes');
var MongooseHandler = require('rutha-utils/mongoose');
var Mongoose = require('mongoose');

// Config
var config = RuthaUtils.createConfig({
  path: {
    config: __dirname + '/../../../shared/config'
  }
}).load();

// Use shared/logs
var logger = RuthaUtils.createLogger({
  filename: __dirname + '/../../../' + config.get('logger:filename')
});

// Use shared/models
var client = Mongoose.connect(config.get('mongodb:connectionString'));
MongooseHandler.bindEvents(client);
MongooseHandler.bindModels({
    mongoose: client,
    modelsPath: __dirname + '/../../../service/models'
});


// ---------------------------------------------------------
// API Server
// ---------------------------------------------------------
// Create a server with a host and port
var server = new Hapi.Server();

// Create a server with a host and port
var api = server.connection({
    host: config.get('apiServer:host'),
    port: config.get('apiServer:port'),
    labels: 'api'
});

// Dependencies
//api.app = {
//  mongoose: client,
//  config: config,
//  logger: logger
//};

// health check
api.route({
method: 'GET',
path: '/api/health',
config: {
  handler: function(req, reply) {
    reply('OK');
  }
}
});

// ---------------------------------------------------------
// Frontend Server
// ----------------------------------------------------------
// Create a server with a host and port
module.exports = server;
var frontend = server.connection({
    host: config.get('feServer:host'),
    port: config.get('feServer:port'),
    labels: 'frontend'
});

var viewOptions = require('./server_options');
frontend.views(viewOptions);

// statics
frontend.route(routes.assets);

// health check
frontend.route(routes.health);

// proxy API requests to API server
frontend.route(routes.apiProxy);

var compiler = function(template, options) {
  return require('underscore').template(template, options || { });
};

// Dependencies for both API and Frontend
server.app = {
  mongoose: client,
  config: config,
  logger: logger,
  templateCompiler: compiler
};


var frontendPlugins = [
  {
    register: require('../controllers/main')
  }
];

var apiPlugins = [
  {
    register: require('lout'),
    options:
    {
      endpoint: '/api/docs'
    }
  },
  {
    register: require('../../../service/lib/controllers/users'),
  }
];



// ---------------------------------------------------------
// Load API Server
// ----------------------------------------------------------
function LoadAPIServer(server, controllers) {
    server.register(require('hapi-auth-bearer-token'), function(err) {

  server.auth.strategy('token', 'bearer-access-token', {
      validateFunc: function(token, callback) {
        // read from db or some place
        var matched = false;
        var tokenResult = { token: token };
        var err = null;

        if (token === 'a1b2c3') {
          matched = true;
        } else {
          tokenResult = null;
          err = new Error('Unauthorized');
        }
        return callback(err, matched, tokenResult);
      }
  });


      server.register(controllers,
       {
         routes: {
           prefix: '/api'
         }
       }, function() { });

   });
}

// ---------------------------------------------------------
// Load Frontend Server
// ----------------------------------------------------------
function LoadFrontEndServer(server, controllers, apiControllers) {
  var frontend = server.select('frontend');
  var apiService = server.select('api');
  
  new LoadAPIServer(apiService, apiControllers);
  
  frontend.register([
    {
      register: require('hapi-auth-cookie')
    },
    {
      register: require('bell')
    }], function(err) {

    frontend.auth.strategy('facebook', 'bell', {
        provider: 'facebook',
        password: 'some password',
        clientId: config.get('facebook:clientId'),
        clientSecret: config.get('facebook:clientSecret'),
        isSecure: false     // Only used for dev env
    });

    frontend.auth.strategy('session', 'cookie', {
        password: config.get('tokenSecret'),
        cookie: 'sid',
        redirectTo: false,
        isSecure: false,
        ttl: 30 * 60 * 1000
    });
      
    frontend.register(controllers, function(err) {
      if (!module.parent) {
        server.start(function () {
          debug('Server started at port ' + server.info.port);
        });
      }
    });
  });
}

new LoadFrontEndServer(server, frontendPlugins, apiPlugins);








