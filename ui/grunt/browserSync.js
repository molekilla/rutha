module.exports = {
  dev: {
    bsFiles: {
      src: ['lib/**/*.js', 'dist/**/*.js', 'src/**/*.js', 'views/**/*.html']
    },
    options: {
      debugInfo: true,
      reloadDelay: 900,
      //host: true
      proxy: 'localhost:3005'
    }
  }
};
