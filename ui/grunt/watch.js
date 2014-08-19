module.exports = {
  gruntfile: {
    files: '<%= jshint.gruntfile.src %>',
    tasks: ['jshint:gruntfile']
  },
  ui: {
   files: ['views/**/*.html', 'src/**/*.html', 'src/**/*.js', 'lib/**/*.js', 'spec/**/*.js'],
   tasks: ['ngtemplates:dev', 'concat:dev', 'ngAnnotate', 'cssmin', 'wiredep']
  },
  css: {
   files: ['src/**/*.css'],
   tasks: ['cssmin']
  }
};
