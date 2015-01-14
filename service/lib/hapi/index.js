var Hapi = require('hapi');
var Boom = require('boom');
var debug = require('debug')('api:main');
var RuthaUtils = require('rutha-utils');
var MongooseHandler = require('rutha-utils/mongoose');
var Mongoose = require('mongoose');

var config = RuthaUtils.createConfig({
  path: {
    config: __dirname + '/../../config'
  }
}).load();

var logger = RuthaUtils.createLogger({
  filename: config.get('logger:filename')
});

var client = Mongoose.connect(config.get('mongodb:connectionString'));
MongooseHandler.bindEvents(client);
MongooseHandler.bindModels({
    mongoose: client,
    modelsPath: __dirname + '/../../models'
});


// Create a server with a host and port
var server = module.exports = new Hapi.Server();
server.connection({
    host: config.get('apiServer:host'),
    port: config.get('apiServer:port')
});

// Dependencies
server.app = {
  mongoose: client,
  config: config,
  logger: logger
};

// add server methods to IoC mongoose models
var controllers = [
  {
    register: require('../controllers/users'),
  }
];

var serverPlugins = [
  {
    register: require('hapi-auth-bearer-token')    
  },
  {
    register: require('hapi-swagger'),
    options:
    {
      basePath: 'http://localhost:' + config.get('apiServer:port'),
      apiVersion: '1.0',
      documentationPath: '/api_docs',
      endpoint: '/rest_docs',
      authorizations: {
        token: {
            type: "apiKey",
            passAs: "header",
            keyname: "authentication"
        }
      },
      info: {
        title: 'Rutha REST API Documentation',
        description: 'REST API Docs.',
        contact: 'molekilla@gmail.com',
        license: 'MIT'
      }
    }
  }
];

server.register(serverPlugins, function(err) {

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

  // health check
  server.route({
    method: 'GET',
    path: '/api/health',
    config: {
      handler: function(req, reply) {
        reply('OK');
      }
    }
  });


  server.register(controllers,
   {
     routes: {
       prefix: '/api'
     }
   }, function() {
    if (!module.parent) {
      server.start(function () {
        console.log('Server started at port ' + server.info.port);
      });
    }
  });

});


