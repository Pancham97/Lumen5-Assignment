var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

var paths = {
  pages: ['src/*.html'],
};

gulp.task('copy-html', function () {
  return gulp.src(paths.pages).pipe(gulp.dest('dist'));
});

gulp.task('ts', function () {
  return browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {},
  })
    .plugin(tsify)
    .transform('babelify', {
      presets: ['es2015'],
      extensions: ['.ts'],
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('bundle'));
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.ts', gulp.series('ts'));
});

gulp.task('default', gulp.series('copy-html', 'ts', 'watch'));
