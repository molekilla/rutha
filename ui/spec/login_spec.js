/*globals expect:true*/

var Hapi = require('hapi');
var server = require('./../lib/hapi');

describe("Main controller", function() {
  it("should return page for /", function(done) {
    server.inject({ method: 'GET', url: '/' }, function (res) {
        expect(res.statusCode).toBe(200);
        done();
    });
  });


  describe('Signup route', function() {
    it("should create an user 'test', returns 400 if it exists, otherwise 302 (redirected to login)", function(done) {
      server.inject({
        method: 'POST',
        url: '/auth/signup',
        payload: {
          email: 'test@test.com',
          password: 'test12'
        }
      }, function (res) {
        if (res.statusCode === 400) {
          expect(res.result.error).toBe('Bad Request');
        } else {
          expect(res.statusCode).toBe(302);
        }
        done();
      });
    });

  });

  describe('Login route', function() {
    it("should login successfully and should received a cookie", function(done) {
      server.inject({
        method: 'POST',
        url: '/auth/login',
        payload: {
          email: 'test@test.com',
          password: 'test12'
        }
      }, function (res) {
        //expect(res.result).toBe('Bad Request');
        expect(res.statusCode).toBe(302);
        expect(res.headers['set-cookie']).not.toBe(null);
        done();
      });
    });

    it("should GET /profile be rejected if not authenticated", function(done) {
      server.inject({
        method: 'GET',
        url: '/profile'
      }, function (res) {
        //expect(res.result).toBe('Bad Request');
        expect(res.statusCode).toBe(401);
        //expect(res.headers['set-cookie']).not.toBe(null);
        done();
      });
    });

    it("should be an invalid user", function(done) {
      server.inject({
        method: 'POST',
        url: '/auth/login',
        payload: {
          email: 'test1@test.com',
          password: 'test12'
        }
      }, function (res) {
        //expect(res.result).toBe('Bad Request');
        expect(res.statusCode).toBe(404);
        //expect(res.headers['set-cookie']).not.toBe(null);
        done();
      });
    });

    it("should be an invalid password", function(done) {
      server.inject({
        method: 'POST',
        url: '/auth/login',
        payload: {
          email: 'test@test.com',
          password: 'test123'
        }
      }, function (res) {
        //expect(res.result).toBe('Bad Request');
        expect(res.statusCode).toBe(400);
        //expect(res.headers['set-cookie']).not.toBe(null);
        done();
      });
    });
  });
});
