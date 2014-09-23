var gulp = require('gulp');
var patterns = require('./lib/patterns');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var rimraf = require('gulp-rimraf');

gulp.task(
    'convert',
    function() {
        var less = gulp.src('convert/*.less')
            .pipe(gulp.dest('build'))
            .pipe(rimraf());

        for (var i = 0; i < patterns.length; i++) {
            var pattern = patterns[i];

            less.pipe(replace(pattern.match, pattern.replace));
        }

        less.pipe(rename({ extname: '.scss' }))
            .pipe(gulp.dest('build'));

        return less;
    }
);

gulp.task('default', ['convert']);