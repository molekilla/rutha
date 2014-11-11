var debug = require('debug')('frontend:index');
var Hapi = require('hapi');
var RuthaUtils = require('rutha-utils');
var routes = require('./routes');
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
    modelsPath: __dirname + '/../models'
});

var viewOptions = require('./server_options');

// Create a server with a host and port
var server = module.exports = Hapi.createServer(config.get('apiServer:host'), config.get('apiServer:port'));

// Create a canned response server
var canned = Hapi.createServer(config.get('apiServer:host'), config.get('apiServer:cannedPort'));

// views
server.views(viewOptions);
canned.views(viewOptions);

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
  mongoose: Mongoose,
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


