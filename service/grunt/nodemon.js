module.exports = {
  dev: {
    script: 'lib/hapi/index.js',
    options: {
      nodeArgs: ['--debug'],
      env: {
        PORT: '5858',
        DEBUG: '*'
      }
    }
  }
};