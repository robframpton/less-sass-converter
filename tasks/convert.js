var gulp = require('gulp');
var patterns = require('../lib/patterns');
var rename = require('gulp-rename');
var replace = require('gulp-replace-task');

gulp.task(
    'convert',
    function() {
        return gulp.src('convert/*.less')
            .pipe(replace({ patterns: patterns }))
            .pipe(rename({ extname: '.scss' }))
            .pipe(gulp.dest('build'));
    }
);