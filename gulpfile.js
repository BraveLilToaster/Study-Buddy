var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('./main/sass/**/*.sass')
         .pipe(sass().on('error', sass.logError))
         .pipe(gulp.dest('./app'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./main/sass/**/*.sass', ['sass']);
});

gulp.task('default', ['sass:watch']
);
