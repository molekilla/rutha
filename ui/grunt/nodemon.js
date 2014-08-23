module.exports = {
  dev: {
    script: 'lib/hapi/index.js',
    options: {
      delay: 900,
      nodeArgs: ['--debug'],
      env: {
        PORT: '5859',
        DEBUG: '*'
      }
    }
  }
};