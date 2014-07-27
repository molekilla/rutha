module.exports = {
  dev: {
    bsFiles: {
      src: ['lib/**/*.js', 'dist/**/*.js', 'src/**/*.js', 'views/**/*.html']
    },
    options: {
      ghostMode: false,
      debugInfo: true,
      //host: 'localhost',
      proxy: 'localhost:3005',
    }
  }
}
