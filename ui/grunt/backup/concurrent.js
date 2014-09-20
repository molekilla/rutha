module.exports = {
  test: {
    tasks: ['nodemon', 'protractor:run'],
    options: {
      logConcurrentOutput: true
    }
  },
  auto: {
    tasks: ['nodemon', 'node-inspector', 'browserSync', 'watch'],
    options: {
      logConcurrentOutput: true
    }
  },
  dev: {
    tasks: ['nodemon', 'node-inspector', 'watch'],
    options: {
      logConcurrentOutput: true
    }
  }
};
