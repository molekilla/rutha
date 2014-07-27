exports.config = {
  allScriptsTimeout: 11000,

  specs: ['e2e/**/*.js'],

  capabilities: {
    browserName: 'chrome'
  },

  baseUrl: 'http://localhost:3005',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onCleanUp: function(exitCode) {
    // if (exitCode)
    process.kill(process.pid, 'SIGINT');
    process.exit(0);
  }

};
