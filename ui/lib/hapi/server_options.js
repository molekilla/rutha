module.exports = {
    engines: {
      'html': {
        compile: require('./underscore_compiler')
      }
    },
    compileMode: 'sync',
    path: __dirname + '/../../views',
    partialsPath: __dirname + '/../../views/partials'
};
