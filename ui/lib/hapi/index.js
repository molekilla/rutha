var debug = require('debug')('frontend:index');
var Hapi = require('hapi');
var RuthaUtils = require('rutha-utils');
var routes = require('./routes');

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


var serverOptions = require('./server_options');

// Create a server with a host and port
var server = module.exports = Hapi.createServer(config.get('apiServer:host'), config.get('apiServer:port'), serverOptions);

// Create a canned response server
var canned = Hapi.createServer(config.get('apiServer:host'), config.get('apiServer:cannedPort'), serverOptions);

// statics
server.route(routes.assets);
canned.route(routes.assets);

// health check
server.route(routes.health);
canned.route(routes.health);

var compiler = function(template, options) {
  return require('underscore').template(template, options || { });
};

// Dependencies
canned.pack.app = server.pack.app = {
  mongoose: mongooseClient.client,
  config: config,
  logger: logger,
  templateCompiler: compiler
};

debug('Set mongoose, config, logger and templateCompiler dependencies');

var controllers = [
  {
    plugin: require('../controllers/main')
  }
];

var cannedControllers = [
  {
    plugin: require('../controllers/main')
  },
  {
    plugin: require('../controllers/canned')
  }
];

// we need to include it here, to allow specs to work (module.parent)
function LoadServer(server, controllers) {
  server.pack.register([
    require('hapi-auth-cookie'),
    require('bell')
    ], function(err) {

    server.auth.strategy('facebook', 'bell', {
        provider: 'facebook',
        password: 'some password',
        clientId: config.get('facebook:clientId'),
        clientSecret: config.get('facebook:clientSecret'),
        isSecure: false     // Only used for dev env
    });

    server.auth.strategy('session', 'cookie', {
        password: 'some password',
        cookie: 'sid',
        redirectTo: false,
        isSecure: false,
        ttl: 30 * 60 * 1000
    });


    server.pack.register(controllers, function(err) {
      if (!module.parent) {
        server.pack.start(function () {
          debug('Server started at port ' + server.info.port);
        });
      }
    });

  });
}


new LoadServer(server, controllers);
new LoadServer(canned, cannedControllers);
debug('*** Try canned response with URL http://localhost:' + config.get('apiServer:cannedPort') + '/api/v1/users ***');


