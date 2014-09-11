module.exports = {
    assets: {
      method: 'GET',
      path: '/dist/{a*}',
      handler: {
        directory: {
          path: './dist'
        }
      }
    },
    health: {
      method: 'GET',
      path: '/health',
      handler: function(req, reply) {
        reply('OK');
      }
    }
};

