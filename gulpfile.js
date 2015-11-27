var gulp = require('gulp'),
    less = require('gulp-less');
gulp.task('less2css', function () {
    gulp.src('style.less')
        .pipe(less())
        .pipe(gulp.dest('./'))
});
gulp.task('watch', function(){
   gulp.watch('style.less', ['less2css']);
});
