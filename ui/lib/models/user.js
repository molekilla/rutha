
var bcrypt = require('bcrypt-nodejs');

module.exports = function(Mongoose) {

    var User = new Mongoose.Schema({
      email: { type: String, required: true },
      password: { type: String, required: true },
      created: { type: Date, required: true, default: Date.now }
    });

    User.statics.generateHash = function(password) {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

    User.method({
      validPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      }
    });

    User.statics.signup = function(options, callback) {
      var self = this;
      this.findOne({ email: options.email }, function(err, user) {

        if (err) {
          callback(err);
          return;
        }

        if (user) {
          callback(null, null);
          return;

        } else {

          var newUser = {
            email: options.email,
            password: self.generateHash(options.password)
          };

          self.create(newUser, function(err) {
            if (err) {
              callback(err);
            }

            callback(null, newUser);
          });
        }

      });

    };

    Mongoose.model('User', User);
};

