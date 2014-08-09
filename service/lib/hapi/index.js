var Hapi = require('hapi');
var debug = require('debug')('api:main');
var RuthaUtils = require('rutha-utils');


var config = RuthaUtils.createConfig({
  path: {
    config: __dirname + '/../../config'
  }
});

var logger = RuthaUtils.createLogger({
  filename: config.get('logger:filename')
});

var mongooseClient = RuthaUtils.createModels({
    client: 'mongoose',
    connectionString: config.get('mongodb:connectionString'),
    models: __dirname + '/../models'
});

// Create a server with a host and port
var server = module.exports = Hapi.createServer(config.get('apiServer:host'), config.get('apiServer:port'));

// health check
server.route({
  method: 'GET',
  path: '/api/health',
  handler: function(req, reply) {
    reply('OK');
  }
});

// Dependencies
server.pack.app = {
  mongoose: mongooseClient.client,
  config: config,
  logger: logger
};

debug('Set mongoose, config, logger dependencies');

// add server methods to IoC mongoose models
var controllers = [
  {
    plugin: require('lout'),
    options:
    {
      endpoint: '/api/docs'
    }
  },
  {
    plugin: require('../controllers/users/index'),
  }
];

  server.pack.register(controllers,
   {
     route: {
       prefix: '/api'
     }
   }, function() {
    if (!module.parent) {
      server.start(function () {
        console.log('Server started at port ' + server.info.port);
      });
    }
  });

