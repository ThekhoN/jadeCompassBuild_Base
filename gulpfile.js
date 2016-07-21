var gulp = require('gulp'),
    replace = require('gulp-replace'),
    imageop = require('gulp-image-optimization'),
    fs = require('fs');

// in your task
gulp.task('replace', function() {
return gulp.src('./*.html')
	//.pipe(replace(/<link href="screen.css"[^>]*>/, function(s) {
  .pipe(replace(/<link rel="stylesheet" href="stylesheets\/screen.css"[^>]*>/, function(s) {
      var style = fs.readFileSync('stylesheets/screen.css', 'utf8');
      return '<style>\n' + style + '\n</style>';
  }))
  .pipe(gulp.dest('Deploy/'));
});

gulp.task('images', function(cb) {
    gulp.src(['images/*']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('dist/images')).on('end', cb).on('error', cb);
});


// The default task (called when you run `gulp` from cli)
gulp.task('production', ['replace', 'images']);
