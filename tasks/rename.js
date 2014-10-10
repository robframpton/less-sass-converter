var gulp = require('gulp');
var rename = require('gulp-rename');
var rimraf = require('gulp-rimraf');

gulp.task(
    'rename',
    function() {
        return gulp.src('build/*.scss')
            .pipe(rimraf())
            .pipe(rename(function(path) {
                if (path.basename.match('variable')) {
                    path.basename = '_aui_variables';
                }
                else {
                    path.basename = '_aui_custom';
                }
            }))
            .pipe(gulp.dest('build'));
    }
);