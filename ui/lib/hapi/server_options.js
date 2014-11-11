module.exports = {
    engines: {
      'html': {
        compile: require('./underscore_compiler')
      }
    },
    compileMode: 'sync',
    path: './views',
    partialsPath: './views/partials'
};
