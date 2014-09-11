var canned = require('./canned.js');


exports.register = function(plugin, options, next) {


  plugin.route({
    method: 'GET',
    path: '/api/v1/users',
    config: {
      handler: canned.index
    }
  });




  next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};