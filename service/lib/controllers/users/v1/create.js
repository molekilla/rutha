
var debug = require('debug')('users:list');

module.exports = function(request, reply) {
    var pack = request.server.pack;
    var UserModel = pack.app.mongoose.models.User;
    UserModel.create({
      email: 'rutha@addme.com'
    }, function(err, model) {
      if (err) {
        pack.app.logger.info('error');
      }
      reply({ created: true }).code(201);
      debug('created');
    });

};

