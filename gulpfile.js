var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');

gulp.task('css', function () {
  function callback(file) {
    return {
      plugins: [
        require('css-mqpacker'),
        require('autoprefixer'),
        require('cssnano')
      ]
    };
  }
  return gulp
    .src('./src/butelayout.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(callback))
    .pipe(gulp.dest('./dist'));
});


gulp.task('watch', function () {
  gulp.watch('./src/**/*.*', gulp.series('css'));
});