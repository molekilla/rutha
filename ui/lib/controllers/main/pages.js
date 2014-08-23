var Hapi = require('hapi');
var debug = require('debug')('frontend:pages');

exports.index = function(request, reply) {

  request.server.render('partials/header', {}, function(err, rendered, config) {
    reply.view('index', {
      title: 'Hejsan Hapi Angular User',
      navbar: rendered
    });
  });

};

exports.profile = function(request, reply) {

  request.server.render('partials/header', {}, function(err, rendered, config) {
    reply.view('profile', {
      title: 'Hejsan Hapi Angular Secure User',
      navbar: rendered
    });
  });

};