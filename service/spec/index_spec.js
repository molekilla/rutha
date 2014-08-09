/*globals expect:true*/
var Hapi = require('hapi');
var server = require('./../lib/hapi');


describe("Health Check", function() {
  it("should return HTTP 200 and OK for /api/health", function(done) {
    //expect(true).toBe(true);
    server.inject({ method: 'GET', url: '/api/health' }, function (res) {
      expect(res.statusCode).toBe(200);
      expect(res.result).toBe('OK');
      done();
    });
  });
});
