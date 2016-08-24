
var debug = require('debug')('users:list');
/** @module users */

/**
 * Creates a new user
 * @function
 * @param {Object} request - A Hapi Request
 * @param {Object} reply - A Hapi Reply
 */
exports.create = function(request, reply) {
  // Use request.app.db.query(...); with mysql
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

