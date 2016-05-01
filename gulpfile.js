var gulp = require('gulp')
var sass = require('gulp-ruby-sass')
var connect = require('gulp-connect')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var ngAnnotate = require('browserify-ngannotate')
var del = require('del')

gulp.task('connect', function() {
    connect.server({
        root: 'public',
        port: 4000
    })
})

gulp.task('clean', function (cb) {
    del([
        'public/js'
    ], cb);
});

gulp.task('browserify',['clean'], function() {
    // Grabs the user-management.js file
    return browserify({
        entries: './app/user-management.js',
        debug: true,
        paths: ['./app/controllers', './app/services'],
        transform: [ngAnnotate]
    })
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./public/js/'));
})