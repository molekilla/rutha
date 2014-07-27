var Hapi = require('hapi');
var debug = require('debug')('api:main');

// Create a server with a host and port
var server = module.exports = Hapi.createServer('localhost', 3002);

// API route
server.route({
  method: 'GET',
  path: '/api',
  config: {
    handler: function (request, reply) {
      debug('replying /api ... ');
      reply({ check: 'Hapi.js getting started tutorial .' });
    }
  }
});

// Start the server
if (!module.parent) {
  // enable lout
  server.pack.register({
    plugin: require('lout'),
    options: {
      endpoint: '/api/docs'
    }
  }, function() {
    server.start(function () {
      console.log('Server started at port ' + server.info.port);
    });
  });

}