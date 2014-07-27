module.exports = {
  gruntfile: {
    files: '<%= jshint.gruntfile.src %>',
    tasks: ['jshint:gruntfile']
  },
  ui: {
   files: ['src/**/*.html', 'src/**/*.js', 'lib/**/*.js', 'spec/**/*.js'],
   tasks: ['ngtemplates:dev', 'concat:dev', 'ngAnnotate', 'wiredep']
  }
};
