/*globals expect:true*/
var Hapi = require('hapi');
var server = require('./../lib/hapi');

describe("Main controller", function() {
  it("should return page for /", function(done) {
    server.inject({ method: 'GET', url: '/', headers: { authorization: 'Bearer a1b2c3' } }, function (res) {
        expect(res.statusCode).toBe(200);
        done();
    });
  });
});
