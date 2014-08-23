module.exports = {
  dev: {
    bsFiles: {
      src: ['lib/**/*.js', 'dist/**/*.js', 'src/**/*.js', 'views/**/*.html']
    },
    options: {
      debugInfo: true,
      reloadDelay: 150,
      //host: true
      proxy: 'localhost:3005'
    }
  }
};
