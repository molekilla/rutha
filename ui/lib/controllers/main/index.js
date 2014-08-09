var Hapi = require('hapi');
var pages = require('./pages.js');

exports.register = function(plugin, options, next) {

  // Homepage route
  plugin.route({
    method: 'GET',
    path: '/',
    config: {
      handler: pages.index
    }
  });


  next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};


