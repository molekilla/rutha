var debug = require('debug')('users');
var users = require('./v1');

exports.register = function(plugin, options, next) {

  plugin.route({
    method: 'POST',
    path: '/v1/users',
    handler: users.create,
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


