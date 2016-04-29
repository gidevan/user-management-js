var gulp = require('gulp')
var sass = require('gulp-ruby-sass')
var connect = require('gulp-connect')
var browserify = require('browserify')
var source = require('vinyl-source-stream')

gulp.task('connect', function() {
    connect.server({
        root: 'public',
        port: 4000
    })
})

gulp.task('browserify', function() {
    // Grabs the user-management.js file
    return browserify('./app/user-management.js')
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./public/js/'));
})