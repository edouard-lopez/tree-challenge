"use strict";

var autoprefixer = require('gulp-autoprefixer'),
    cache = require('gulp-cache'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    flatten = require('gulp-flatten'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify')
    ;

var paths = {
    scripts: [
        './app/**/*.js',
    ],
    scripts_vendors: [
        './node_modules/jquery/dist/jquery.min.js',
    ],
    build: {
        root: './static',
        scripts: './static/scripts'
    }
};

// Clean
gulp.task('clean', function () {
    return gulp.src(paths.build.root, {
        read: false
    }).pipe(clean({force: true}));
});

// Scripts
gulp.task('scripts_vendors', function () {
    return gulp.src(paths.scripts_vendors)
        .pipe(uglify())
        .pipe(concat('vendor.min.js'))
        .pipe(flatten())
        .pipe(gulp.dest(paths.build.scripts))
        ;
});

// Scripts
gulp.task('scripts', function () {
    return gulp.src(paths.scripts)
        .pipe(uglify({mangle: false}))
        .pipe(concat('main.min.js'))
        .pipe(flatten())
        .pipe(gulp.dest(paths.build.scripts))
        ;
});
// Build task
gulp.task('build', ['clean'], function () {
    gulp.start('scripts', 'scripts_vendors');
});

// Watch
gulp.task('watch', function () {
    gulp.watch(paths.scripts_vendors, ['vendor-scripts']);
    gulp.watch(paths.scripts, ['scripts']);
});

// Default task
gulp.task('default', ['build', 'watch'], function () {
});
