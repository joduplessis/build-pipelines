
// Define our libraries
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Basic tasks
gulp.task('build', function() {
  gulp.src(['app.js'])
    .pipe(browserify({insertGlobals: true }))
    .pipe(uglify({mangle: false}))
    .pipe(rename('bundle.min.js'))
    .pipe(gulp.dest('dist'))
});

// Classic watch task to make things easier
gulp.task('watch', function() {
  gulp.watch('*.*', ['build']);
});

// Default
gulp.task('default', ['build']);
