var requireDir = require('require-dir');
var tasksDir = requireDir('./tasks');
var gulp = require('gulp');

var run = require('run-sequence');

gulp.task('build', function(callback) {
    run('convert', 'rename', 'compile-sass', callback);
});

gulp.task('default', ['convert']);