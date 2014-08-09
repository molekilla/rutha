var debug = require('debug')('users');
var createHandler = require('./v1/create.js');

exports.register = function(plugin, options, next) {

  plugin.route({
    method: 'POST',
    path: '/v1/users',
    handler: createHandler
  });

  next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};


