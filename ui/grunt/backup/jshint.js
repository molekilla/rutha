 module.exports = {
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['src/app/**/*.js', 'src/test/e2e/**/*.js', 'src/test/unit/**/*.js', 'lib/**/*.js', 'spec/**/*.js']
      },
      options: {
        reporter: require('jshint-stylish'),
        devel: true,
        curly: true,
        strict: false,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: false,
        boss: true,
        eqnull: true,
        expr: true,
	browser: true,
        multistr: true,
        laxcomma: true,
        globals: {
          require: false,
          module:false,
          __dirname: false,
          exports: false,
          describe: false,
          it: false,
          beforeEach: false,
          afterEach: false,
          Buffer: false,
          process: false,
          angular: false,
          element: false,
          by: false,
          inject: false
        }
      }
    };
