const gulp          = require('gulp');
const notify        = require('gulp-notify');
const source        = require('vinyl-source-stream');
const browserify    = require('browserify');
const babelify      = require('babelify');
const ngAnnotate    = require('browserify-ngannotate');
const browserSync   = require('browser-sync').create();
const rename        = require('gulp-rename');
const uglify        = require('gulp-uglify');
const merge         = require('merge-stream');
const sass          = require('gulp-sass');

// Where our files are located
const jsFiles   = "src/js/**/*.js";
// var viewFiles = "src/js/**/*.html";

const interceptErrors = function(error) {
  const args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};


gulp.task('browserify', function() {
  return browserify('./public/js/app.js')
      .transform(babelify, {presets: ["es2015"]})
      .transform(ngAnnotate)
      .bundle()
      .on('error', interceptErrors)
      //Pass desired output filename to vinyl-source-stream
      .pipe(source('main.js'))
      // Start piping stream to tasks!
      .pipe(gulp.dest('./public/build/'));
});

gulp.task('html', function() {
  return gulp.src("src/index.html")
      .on('error', interceptErrors)
      .pipe(gulp.dest('./build/'));
});

gulp.task('img', function() {
  return gulp.src("./public/img/**/*.*")
      .on('error', interceptErrors)
      .pipe(gulp.dest('./public/build/img'));
});

// This task is used for building production ready
// minified JS/CSS files into the dist/ folder
gulp.task('build', ['html', 'browserify'], function() {
  var html = gulp.src("build/index.html")
                 .pipe(gulp.dest('./dist/'));

  var js = gulp.src("public/src/main.js")
               .pipe(uglify())
               .pipe(gulp.dest('./dist/'));

  return merge(html,js);
});

gulp.task('sass', function () {
  return gulp.src('./public/styles/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/build'));
});


gulp.task('default', ['html', 'browserify', 'sass', 'img']);
