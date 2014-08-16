/*globals expect:true*/
var Hapi = require('hapi');
var server = require('./../../../lib/hapi');


describe("Users controller", function() {
  it("should return HTTP 401 when no bearer header auth is found", function(done) {
    server.inject({ method: 'POST', url: '/api/v1/users'   }, function (res) {
      expect(res.statusCode).toBe(401);
      done();
    });
  });

  it("should return HTTP 500 when bearer code is a mismatch", function(done) {
    server.inject({ method: 'POST', url: '/api/v1/users', headers: { authorization: "Bearer abc" } }, function (res) {
      expect(res.statusCode).toBe(500);
      done();
    });
  });

  it("should return HTTP 200 for /api/v1/users", function(done) {
    server.inject({ method: 'POST', url: '/api/v1/users', headers: { authorization: "Bearer a1b2c3" } }, function (res) {
      expect(res.statusCode).toBe(201);
      done();
    });
  });
});
