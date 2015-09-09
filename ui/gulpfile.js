

var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');

var tsProject = ts.createProject({
                    module: 'system',
                    sourceMap: false,
                    fast: 'never',
                    emitDecoratorMetadata: true
});

gulp.task('scripts', function() {
    var tsResult = gulp.src('src/app/**/*.ts')
                    .pipe(ts(tsProject));

    return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done.
        tsResult.dts.pipe(gulp.dest('dist/definitions')),
        tsResult.js.pipe(gulp.dest('dist/js'))
    ]);
});
gulp.task('watch', ['scripts'], function() {
    gulp.watch('src/app/**/*.ts', ['scripts']);
});