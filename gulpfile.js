// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var path = require('path');

// tasks
gulp.task('lint', function() {
  gulp.src(['./src/app/**/*.js', '!./src/app/bower_components/**', '!./src/app/bundled.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});
gulp.task('clean', function() {
    gulp.src('./dist/*')
      .pipe(clean({force: true}));
    gulp.src('./src/app/bundled.js')
      .pipe(clean({force: true}));
});
gulp.task('minify-css', ['less'], function() {
  var opts = {comments:true,spare:true};
  gulp.src(['./src/assets/**/*.css', '!./src/app/bower_components/**'])
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/assets/'))
});
gulp.task('minify-js', function() {
  gulp.src(['./src/app/**/*.js', '!./src/app/bower_components/**'])
    .pipe(uglify({
      // inSourceMap:
      // outSourceMap: "src/app.js.map"
    }))
    .pipe(gulp.dest('./dist/app'))
});
gulp.task('copy-bower-components', function () {
  gulp.src('./src/app/bower_components/**')
    .pipe(gulp.dest('dist/app/bower_components'));
});
gulp.task('copy-html-files', function () {
  gulp.src('./src/**/*.html')
    .pipe(gulp.dest('dist/'));
});
gulp.task('connect', function () {
  connect.server({
    root: 'src/',
    livereload: true,
    fallback: 'src/index.html',
    port: 8888
  });
});
gulp.task('connectDist', function () {
  connect.server({
    root: 'dist/',
    port: 9999
  });
});
gulp.task('browserify', function() {
  gulp.src(['src/app/index.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: true
  }))
  .pipe(concat('bundled.js'))
  .pipe(gulp.dest('./src/app'))
});
gulp.task('browserifyDist', function() {
  gulp.src(['src/app/index.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: true
  }))
  .pipe(concat('bundled.js'))
  .pipe(gulp.dest('./dist/app'))
});
gulp.task('less', function () {
  return gulp.src('src/assets/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('src/assets/css'));
});


// default task
gulp.task('default',
  ['lint', 'browserify', 'connect', 'less']
);
// build task
gulp.task('build',
  ['lint', 'minify-css', 'browserifyDist', 'copy-html-files', 'copy-bower-components']
);