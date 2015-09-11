var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var minifyHtml = require('gulp-minify-html');
var ngTemplate = require('gulp-ng-template');
var server = require('gulp-server-livereload');
var ts = require('gulp-typescript');
var merge = require('merge2');
var gulp = require('gulp');
var livereload = require('gulp-livereload');

var tsProject = ts.createProject({
"declaration": false,
		"module": "system",
		"target": "es5",
		"noImplicitAny": false,
		"experimentalDecorators": true
});

gulp.task('typescript', function() {
    var tsResult = gulp.src('src/app/**/*.ts')
                    .pipe(ts(tsProject));

    return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done.
        tsResult.dts.pipe(gulp.dest('dist/definitions')),
        tsResult.js.pipe(gulp.dest('dist/js'))
    ]);
});

gulp.task('templates', function() {
  gulp.src('src/app/**/*.html')
    .pipe(minifyHtml({empty: true, quotes: true}))
    .pipe(ngTemplate({
      moduleName: 'rutha.templates',
      standalone: true,
      filePath: 'js/templates.js'
    }))
    .pipe(gulp.dest('dist'));  // output file: 'dist/js/templates.js'
});


gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

// Watch
gulp.task('watch', function() {
  
  // Watch .scss files
  //gulp.watch('src/styles/**/*.scss', ['styles']);

    gulp.watch('src/app/**/*.ts', ['typescript']);
    gulp.watch('src/app/**/*.html', ['templates']);



  // Watch any files in dist/, reload on change
  //gulp.watch(['dist/**']).on('change', livereload.changed);

});

// Task
gulp.task('default', ['templates', 'typescript', 'watch'], function() {
	// listen for changes
	livereload.listen();
	// configure nodemon
	nodemon({
		// the script to run the app
		script: 'lib/hapi/index.js',
		ext: 'js'
	}).on('restart', function(){
		// when the app has restarted, run livereload.
		gulp.src('app.js')
			.pipe(livereload())
			.pipe(notify('Reloading page, please wait...'));
	})
})