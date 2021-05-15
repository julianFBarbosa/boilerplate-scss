const gulp = require('gulp');
const sass = require('gulp-sass');
const purgecss = require('gulp-purgecss');

const css = () => {
  return gulp.src('./scss/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(purgecss({
      content: ['./index.html'],
    }))
    .pipe(gulp.dest('./style'))
}

const watch = () => {
  gulp.watch('./style/style.scss', css);
}

exports.css = css;
exports.watch = watch;
exports.default = gulp.parallel(css, watch);