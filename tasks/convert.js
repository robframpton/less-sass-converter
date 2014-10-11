var gulp = require('gulp');
var patterns = require('../lib/patterns');
var rename = require('gulp-rename');
var replace = require('gulp-replace-task');
var rimraf = require('gulp-rimraf');

gulp.task(
    'clean',
    function () {
        return gulp.src('build/*.scss', { read: false })
            .pipe(rimraf());
    }
);

gulp.task(
    'convert',
    ['clean'],
    function() {
        return gulp.src('convert/**/*.less')
            .pipe(replace({ patterns: patterns }))
            .pipe(rename({ extname: '.scss' }))
            .pipe(gulp.dest('build'));
    }
);