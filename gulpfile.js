var gulp = require('gulp');
var requireDir = require('require-dir');
var run = require('run-sequence');

var tasksDir = requireDir('./tasks');

gulp.task('build', function(callback) {
    run('convert', 'rename', 'compile-sass', callback);
});

gulp.task('default', ['convert']);