/*global browser:true, expect:true */
describe("Requests", function() {

  beforeEach(function() {
    browser.get('/');
  });

  it ('should load', function() {
    browser.get('#/');
    expect(element(by.css('.ng-binding')).getText()).toContain('Hejsan');
  });

});
