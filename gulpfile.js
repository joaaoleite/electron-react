
const gulp = require('gulp')
const sass =  require('gulp-sass')
const concat = require('gulp-concat')
const cleanCSS = require('gulp-clean-css')
const bower = require('gulp-bower')

gulp.task('css', function() {

  gulp.src('app/style/**/*.scss')
    .pipe(sass({
      includePaths: [
        'bower_components/bootstrap-sass/assets/stylesheets',
        'bower_components/font-awesome/scss'
      ]
    }))
    .pipe(concat('style.min.css'))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('app/style'));
})

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('bower_components/'))
});

gulp.task('watch', function() {
  gulp.watch('app/style/style.scss', ['css']);
});
