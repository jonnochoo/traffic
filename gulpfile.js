var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');
var nodemon = require('gulp-nodemon')
gulp.task('dev', ['node', 'watch'], function () {

});

gulp.task('babel', function () {
  return gulp.src('public/js/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('public/dist/js'));
});

gulp.task('node', function () {
  nodemon({
    script: 'app.js',
    ignore: ['./!public/*.*'],
    ext: 'js jade',
    env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('watch', function () {
  return gulp.watch('public/js/**/*.js', ['babel']);
});
