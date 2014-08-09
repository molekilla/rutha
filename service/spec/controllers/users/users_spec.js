/*globals expect:true*/
var Hapi = require('hapi');
var server = require('./../../../lib/hapi');


describe("Users controller", function() {
  it("should return HTTP 200 for /api/v1/users", function(done) {
    //expect(true).toBe(true);
    server.inject({ method: 'POST', url: '/api/v1/users' }, function (res) {
    //      // code
      expect(res.statusCode).toBe(201);
      done();
    });
  });
});
