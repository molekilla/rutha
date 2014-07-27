/*globals expect:true*/
var Hapi = require('hapi');
var server = require('./../lib/hapi');


describe("A suite", function() {
  it("contains spec with an expectation", function(done) {
    //expect(true).toBe(true);
    server.inject({ method: 'GET', url: '/api' }, function (res) {
    //      // code
          expect(res.statusCode).toBe(200);
        done();
    });
  });
});