module.exports = function(templ, options) {

  return function(ctx, options) {
    return require('underscore').template(templ)(ctx || null);
  };

};