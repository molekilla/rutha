var debug = require('debug')('users');
var createHandler = require('./v1/create.js');

exports.register = function(plugin, options, next) {

  plugin.route({
    method: 'POST',
    path: '/v1/users',
    handler: createHandler,
    config: {
        description: 'A new account',
        notes: 'Creates a new account',
        tags: ['api'],        
    	auth: 'token'
    }
  });

  next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};


