const Hapi = require('hapi');
const Boom = require('boom');
const debug = require('debug')('api:main');
const RuthaUtils = require('rutha-utils');
const MongooseHandler = require('rutha-utils/mongoose');
const Mongoose = require('mongoose');

const config = RuthaUtils.createConfig({
  path: {
    config: __dirname + '/../../config'
  }
}).load();

const logger = RuthaUtils.createLogger({
  filename: config.get('logger:filename')
});

const client = Mongoose.connect(config.get('mongodb:connectionString'));
MongooseHandler.bindEvents(client);
MongooseHandler.bindModels({
    mongoose: client,
    modelsPath: __dirname + '/../../models'
});


// Create a server with a host and port
const server = module.exports = new Hapi.Server();
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
const controllers = [
  {
    register: require('../controllers/users'),
  }
];

const logOptions = {
    reporters: {
        consoleLog: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{hapi: '*', log: '*', response: '*',  error: '*', 'request': '*' }]
        }, {
            module: 'good-console'
        }, 'stdout'],
    }
};

var serverPlugins = [
  {
    register: require('hapi-auth-bearer-token')    
  },
    {
      register: require('vision')
    },
    {
      register: require('inert')
    },
    {
        register: require('good'),
        options: logOptions
    },    
  {
    register: require('hapi-swagger'),
    options:
    {
      host: 'localhost:' + config.get('apiServer:port'),
      basePath: '/api',
      documentationPath: '/api_docs',
      // endpoint: '/rest_docs',
      // auth: {
      //   token: {
      //       type: "apiKey",
      //       passAs: "header",
      //       keyname: "authentication"
      //   }
      // },
      info: {
        title: 'Rutha REST API Documentation',
        version: '1.0',
        description: 'REST API Docs.',
        license: { name: 'MIT' }
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


