var _ = require('lodash');
var chalk = require('chalk');
var file = require('gulp-file');
var fs = require('fs');
var gulp = require('gulp');
var merge = require('merge-stream');
var rename = require('gulp-rename');
var rimraf = require('gulp-rimraf');
var sass = require('gulp-sass');

var CWD = process.cwd();

var bootstrapImports = {
    '2.3.2': [
        '@import "../lib/bootstrap/2.3.2/bootstrap";',
        '@import "../lib/bootstrap/2.3.2/responsive";',
    ],
    '3.2.0': [
        '@import "../lib/bootstrap/3.2.0/bootstrap";',
    ]
};

var terminalMenu = require('terminal-menu');

gulp.task(
    'compile-sass',
    function(callback) {
        var menu = terminalMenu({
          bg: 'black',
          width: 27,
          x: 4,
          y: 2
        });

        menu.reset();
        menu.write('Select a Bootstrap version\n');
        menu.write('--------------------------\n');

        menu.add('2.3.2');
        menu.add('3.2.0');

        menu.on('select', function (label) {
            menu.close();

            console.log('Compiling ' + label + ' Bootstrap theme.');

            compileSass(label, callback);
        });

        menu.createStream().pipe(process.stdout);
    }
);

function compileSass(version, callback) {
    var buffer = bootstrapImports[version];

    fs.readdir(
        CWD + '/build',
        function(err, files) {
            if (err) {
                throw err;
            }
            else {
                if (files.length) {
                    _.forEach(
                        files,
                        function(file) {
                            if (file.match(/^(?!.*\bimports\b).+\.scss/)) {
                                var sassImport = '@import "' + file + '";';

                                if (file.match(/.*variable.*/)) {
                                    buffer.splice(0, 0, sassImport);
                                }
                                else {
                                    buffer.push(sassImport);
                                }
                            }
                        }
                    );
                }

                file('imports.scss', buffer.join(' '))
                    .pipe(gulp.dest('build'))
                    .pipe(rimraf())
                    .pipe(rename('bootstrap.css'))
                    .pipe(sass({
                        onError: sassCompileErrorHandler
                    }))
                    .pipe(gulp.dest('build'));

                callback();
            }
        }
    );
}

function sassCompileErrorHandler(err) {
    var match = err.match(/\/([^\/]*\.scss):(\d+).*(error:.*)/);

    if (match) {
        var fileName = match[1];
        var fileLine = match[2];
        var errorMessage = match[3];

        console.log('\n',
            chalk.red.bold('Warning!'),
            'There is an error in',
            chalk.cyan.bold(fileName),
            'at line',
            chalk.cyan.bold(fileLine),
            '\n\n',
            chalk.underline(errorMessage)
        );
    }
    else {
        throw err;
    }
}