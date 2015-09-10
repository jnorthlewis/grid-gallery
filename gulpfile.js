var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var minifyJS = require('gulp-minify');
var imagemin = require('gulp-imagemin');

// here we define the list of things to happen when we run gulp styles
gulp.task('styles', function(){
	gulp.src('css/*.scss')
		.pipe(sass({
			errLogToConsole: true
		 }))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(minifyCSS())
		.pipe(gulp.dest('css/'))
}); 

gulp.task('compress', function() {
  gulp.src('js/scripts.js')
    .pipe(minifyJS({
        exclude: ['tasks'],
        ignoreFiles: ['-min.js']
    }))
    .pipe(gulp.dest('js/'))
});

gulp.task('jpgs', function() {
    return gulp.src('i/*.jpg')
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest('i/img-min'));
});

gulp.task('default', function(){
	gulp.watch('css/*.scss', ['styles']);
	gulp.watch('js/scripts.js', ['compress']);
});