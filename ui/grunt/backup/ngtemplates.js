module.exports = {
  dev: {
    cwd: 'src',
    src: 'app/**/**.html',
    dest: 'dist/templates.js',
    options: {
      module: 'rutha.templates'
    }
  },
  build: {
    cwd: 'src',
    src: 'app/**/**.html',
    dest: 'dist/templates.js',
    options: {
      module: 'rutha.templates',
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: false,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    }
  }
};
