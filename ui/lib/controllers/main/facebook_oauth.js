var Hapi = require('hapi');
var debug = require('debug')('frontend:facebook_oauth');

exports.authenticate = function(request, reply) {

    var pack = request.server.pack;

    if (request.method === 'get') {
      //debug(request.auth.credentials);
      var creds = request.auth.credentials;

      var user = {
        facebook: {
          id: creds.profile.id,
          token: creds.token,
          name: creds.displayName,
          email: creds.email
        }
      };

      request.auth.session.set(user);
      reply().redirect('/profile');
    }

    if (request.method === 'post') {
    }

};


