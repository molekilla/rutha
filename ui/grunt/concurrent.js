module.exports = {
  test: {
    tasks: ['nodemon', 'protractor:run'],
    options: {
      logConcurrentOutput: true
    }
  },
  dev: {
    tasks: ['nodemon', 'node-inspector', 'watch', 'browserSync'],
    options: {
      logConcurrentOutput: true
    }
  }
};
