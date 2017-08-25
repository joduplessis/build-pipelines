module.exports = function(grunt) {

  // Grunt init
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      js: {
        src: 'app.js',
        dest: 'dist/bundle.js',
      }
    },
    uglify: {
      my_target: {
        options: {
          mangle: false
        },
        files: {
          'dist/bundle.min.js': ['dist/bundle.js']
        }
      }
    },
    watch: {
      files: ['directives/*.js', 'controllers/*.js', 'app.js'],
      tasks: ['build']
    },
    gulp: {
      target: function() {
        // These are for Gulp tasks
        // I've put them here so they won't affect Grunt's
        // speed if we DON'T use the Gulp task
        var gulp = require('gulp');
        var uglify = require('gulp-uglify');
        var rename = require('gulp-rename');
        var browserify = require('gulp-browserify');

        return gulp.src(['app.js'])
            .pipe(browserify({insertGlobals: true }))
            .pipe(uglify({mangle: false}))
            .pipe(rename('bundle.min.js'))
            .pipe(gulp.dest('dist'))
      }
    }
  });

  // Load the Grunt libraries
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-gulp');

  // Regsiter tasks
  grunt.registerTask('default', ['browserify', 'watch']);
  grunt.registerTask('build', ['browserify', 'uglify']);
}
