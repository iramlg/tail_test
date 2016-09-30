var gulp = require('gulp');
var watch = require('gulp-watch');
var less = require('gulp-less');
var path = require('path');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

gulp.task('less', function () {
   var watcher = gulp.watch('./public/less/**/*.less');

   watcher.on('change', function (event) {
   	console.log('changed', event)
       gulp.src('./public/less/main.less')
      .pipe(less())
      .pipe(concat('main.css'))
      .pipe(gulp.dest('./public/css'));
   });
});
 
gulp.task('react_', function () {
	var watcher = gulp.watch('./public/js/components_jsx/**/*.jsx');

   	watcher.on('change', function (event) {
      	gulp.src('./public/js/components_jsx/**/*.jsx')
       		.pipe(babel({
		  	    "presets": ["react"]
			}))
       		.pipe(gulp.dest('./public/js/components'));
  	});
});


gulp.task('default', ['react_', 'less']);