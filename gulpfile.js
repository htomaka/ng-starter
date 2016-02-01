/**
 * Created by e0000703 on 29/01/2016.
 */
var gulp = require('gulp');

gulp.task('ngdocs', [], function() {
  var gulpDocs = require('gulp-ngdocs');
  return gulp.src('./build/bundle.js')
    .pipe(gulpDocs.process())
    .pipe(gulp.dest('./build/docs'));
});
