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
    modelsPath: __dirname + '/../../../service/models'
});

var viewOptions = require('./server_options');

// Create a server with a host and port
var server = module.exports = new Hapi.Server();
server.connection({
    host: config.get('apiServer:host'),
    port: config.get('apiServer:port')
});

// Create a canned response server
var canned = new Hapi.Server();
canned.connection({
    host: config.get('apiServer:host'),
    port: 9002
});

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
canned.app = server.app = {
  mongoose: Mongoose,
  config: config,
  logger: logger,
  templateCompiler: compiler
};

debug('Set mongoose, config, logger and templateCompiler dependencies');

var controllers = [
  {
    register: require('../controllers/main')
  }
];

var cannedControllers = [
  {
    register: require('../controllers/main')
  },
  {
    register: require('../controllers/canned')
  }
];

// we need to include it here, to allow specs to work (module.parent)
function LoadServer(server, controllers) {
  server.register([
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


    server.register(controllers, function(err) {
      if (!module.parent) {
        server.start(function () {
          debug('Server started at port ' + server.info.port);
        });
      }
    });

  });
}


new LoadServer(server, controllers);
new LoadServer(canned, cannedControllers);
debug('*** Try canned response with URL http://localhost:' + config.get('apiServer:cannedPort') + '/api/v1/users ***');


