/*global browser:true, expect:true */
describe("Requests", function() {

  beforeEach(function() {
    browser.get('/');
  });

  it ('should load', function() {
    browser.get('#/');
    expect(element(by.css('.lead')).getText()).toContain('Hello HapiJS, meet AngularJS !!!');
  });

});
