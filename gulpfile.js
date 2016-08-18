/* eslint-disable spaced-comment, max-len */
var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    runSequence = require('run-sequence');


var plugins = gulpLoadPlugins();

var paths = {
    configs: {
        jscsrc: './.jscsrc',
        jshintrc: './.jshintrc',
        package: './package.json',
    },
    dirs: {
        coverage: './coverage'
    },
    files: {
        js: [
            './**/*.js',
            '!./**/*.tests.js',
            '!./gulpfile.js',
            '!./node_modules/**/*.js'
        ],
        tests: './**/*.tests.js'
    },
    jslint: [
        './**/*.js',
        '!./coverage/**/*.js',
        '!./node_modules/**/*.js'
    ]
};

var options = {
    codeCoverage: {
        reporters: ['lcov', 'text-summary'],
        thresholds: {
            global: {
                statements: 80,
                branches: 80,
                functions: 80,
                lines: 80
            },
            each: {
                statements: 50,
                branches: 50,
                functions: 50,
                lines: 50
            }
        }
    }
};

/************************************************************************
 * Linters (jshint, jscs)
 ************************************************************************/

gulp.task('jshint', function () {
    return gulp.src(paths.jslint)
        .pipe(plugins.jshint(paths.configs.jshintrc))
        .pipe(plugins.jshint.reporter('jshint-stylish'));
});


gulp.task('jscs', function () {
    return gulp.src(paths.jslint)
        .pipe(plugins.jscs(paths.configs.jscsrc))
        .pipe(plugins.jshint.reporter('jscs-stylish'));
});


/************************************************************************
 * Tests
 ************************************************************************/

gulp.task('pre-test', function () {
    return gulp.src(paths.files.js)
        .pipe(plugins.istanbul())
        .pipe(plugins.istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function () {
    var coverageVariable = String('$$cov_').concat(new Date().getTime()).concat('$$');

    return gulp.src(paths.files.tests, { read: false })
        .pipe(plugins.mocha({
            reporter: plugins.util.env['mocha-reporter'] || 'spec',
            colors: true,
            ui: 'bdd',
            timeout: 6000
        }))
        .pipe(plugins.istanbul.writeReports({
            dir: paths.dirs.coverage,
            reporters: options.codeCoverage.reporters
        }))
        .pipe(plugins.istanbul.enforceThresholds({
            thresholds: options.codeCoverage.thresholds,
            coverageVariable
        }));
});


/************************************************************************
 * Tasks
 ************************************************************************/

gulp.task('lint', function () {
    runSequence(
        'jshint',
        'jscs'
    );
});
