module.exports = function(Mongoose) {

    var User = new Mongoose.Schema({
      email: { type: String, required: true }
    });
    
    Mongoose.model('User', User);
};

