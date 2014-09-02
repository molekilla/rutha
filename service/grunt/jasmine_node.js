module.exports = {
  dev: {
    options: {
      specFolders: ['spec/'],
      forceExit: true,
      match: '.',
      matchall: false,
      extensions: 'js',
      specNameMatcher: 'spec'
    }
  },
  coverage: {
    options: {
      specFolders: ['test/coverage/'],
      forceExit: true,
      match: '.',
      matchall: false,
      extensions: 'js',
      specNameMatcher: '*'
    }
  }
};