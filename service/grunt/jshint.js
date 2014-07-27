 module.exports = {
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'spec/**/*.js', 'index.js']
      },
      options: {
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
          process: false
        }
      }
    };
