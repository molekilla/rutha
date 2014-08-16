var Hapi = require('hapi');
var debug = require('debug')('frontend:pages');

exports.index = function(request, reply) {
  reply.view('index', { title: 'Test' });
};

exports.profile = function(request, reply) {
  reply.view('profile', { title: 'Welcome ' + request.auth.credentials.name });
};