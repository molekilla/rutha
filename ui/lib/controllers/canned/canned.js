var Hapi = require('hapi');
var debug = require('debug')('frontend:canned');

exports.index = function(request, reply) {
  var data = {
    users: [{
      email: 'test@test.com'
    },
    {
      email: 'me@me.com'
    }]
  };

  reply(data).code(200);
};
