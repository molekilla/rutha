module.exports = function(config) {
  config.set({

    basePath: '../',

    files: [
      'test/lib/angular/angular.js',
      'test/lib/angular-route/angular-route.js',
      'test/lib/angular-mocks/angular-mocks.js',
      'app/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch: false,

    frameworks: ['jasmine'],

    browsers: ['Firefox'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });

};
