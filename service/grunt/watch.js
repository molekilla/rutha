module.exports = {
  gruntfile: {
    files: '<%= jshint.gruntfile.src %>',
    tasks: ['jshint:gruntfile']
  },
  lib_test: {
    files: '<%= jshint.lib_test.src %>',
    tasks: ['jshint:lib_test']
  }
};