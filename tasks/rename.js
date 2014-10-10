var _ = require('lodash');
var chalk = require('chalk');
var fs = require('fs');
var gulp = require('gulp');
var rename = require('gulp-rename');
var rimraf = require('gulp-rimraf');

var CWD = process.cwd();

gulp.task(
    'rename',
    function(callback) {
        fs.readdir(
            CWD + '/build',
            function(err, files) {
                if (err) {
                    throw err;
                }
                else {
                    var total = files.length;

                    _.forEach(
                        files,
                        function(file) {
                            if (!file.match(/.*\.scss/)) {
                                total--;
                            }
                        }
                    );

                    if (total < 3) {
                        gulp.src('build/*.scss')
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

                        callback();
                    }
                    else {
                        console.log(
                            chalk.yellow.bold('\nCannot rename mulitple themes at once.'),
                            '\n\n',
                            chalk.underline('Only one custom scss file and one scss variables file are permitted'));
                    }
                }
            }
        );
    }
);