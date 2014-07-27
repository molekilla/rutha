module.exports = {
  dev: {
    script: 'lib/hapi/index.js',
    options: {
      nodeArgs: ['--debug'],
      env: {
        PORT: '5859',
        DEBUG: '*'
      }
    }
  }
};