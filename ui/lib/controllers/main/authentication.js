var Hapi = require('hapi');
var debug = require('debug')('frontend:authentication');

// Rutha says: You should AJAX authentication calls
exports.login = function(request, reply) {

    var pack = request.server.pack;
    var UserModel = pack.app.mongoose.models.User;

    UserModel.findOne({ email: request.payload.email }, function(err, user) {

      if (err) {
        reply().redirect('/#login');
        pack.app.logger.error(err);
        return;
      }

      if (!user) {
        reply(Hapi.error.notFound('User not found'));
      }

      if (user && user.validPassword(request.payload.password)) {
        request.auth.session.set(user);
        reply().redirect('/profile');
      } else {
        reply(Hapi.error.badRequest('Invalid password'));
      }

    });

};

exports.logout = function(request, reply) {
   request.auth.session.clear();
   reply().redirect('/');
 };

exports.signup = function(request, reply) {
      var pack = request.server.pack;
      var UserModel = pack.app.mongoose.models.User;

      UserModel.signup({
        email: request.payload.email,
        password: request.payload.password
      }, function(err, model) {
        if (err) {
          var internalErr = Hapi.error.internal('Failed signup user', err);
          reply(internalErr);
          pack.app.logger.error(err);
          return;
        }

        if (model) {
          reply().redirect('/#login');
        } else {
          reply(Hapi.error.badRequest('Username already exists'));
        }
      });
};
