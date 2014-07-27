module.exports = {
  dev: {
    options: {
      sourceMap: true,
      sourceMapIncludeSources: true,
      sourceMapName: 'dist/sourcemap.map',
      mangle: false
    },
    files: {
      'dist/app.js': ['src/app/**/*.js']
    }
  },
  build: {
    options: {
      sourceMap: true,
      sourceMapIncludeSources: true,
      sourceMapName: 'dist/sourcemap.map'
    },
    files: {
      'dist/app.js': ['src/app/**/*.js']
    }
  }
};
