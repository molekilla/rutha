
var debug = require('debug')('users:list');

module.exports = function(request, reply) {
    var server = request.server;
    var UserModel = server.app.mongoose.models.User;
    
    UserModel.create({
      email: 'rutha@addme.com'
    }, function(err, model) {
      if (err) {
        server.app.logger.info('error');
      }
      reply({ created: true }).code(201);
      debug('created');
    });

};

