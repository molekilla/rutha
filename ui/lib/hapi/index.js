var debug = require('debug')('frontend:main');
var Hapi = require('hapi');

var serverOptions = {
    views: {
        engines: {
          'html': {
            compile: function(templ, options) {
              return function(ctx, options) {
                return require('underscore').template(templ, ctx || null, options || null);
              };
            }
          }
        },
        compileMode: 'sync',
        path: './views'
    }
};



// Create a server with a host and port
var server = module.exports = Hapi.createServer('localhost', 3005, serverOptions);

// Homepage route
server.route({
  method: 'GET',
  path: '/',
  config: {
    handler: function (request, reply) {
      debug('displaying index page');
      reply.view('index', { title: 'Test' });
      //reply('Hapi.js getting started tutorial Hapi\'s cafe.');
    }
  }
});


server.route({
  method: 'GET',
  path: '/dist/{a*}',
  handler: {
    directory: {
      path: './dist'
    }
  }
});

// Start the server
if (!module.parent) {
  server.start(function () {
    console.log('Server started at port ' + server.info.port);
  });
}
