var gulp = require('gulp');
// var sass = require('gulp-sass');
var sass = require('gulp-sass')(require('sass'));

// gulp task for Sass conversion to Css
gulp.task('sass-compile', function() {
    return gulp.src('scss/style.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('css/'))
});

gulp.task('sass-watch', function() {
    gulp.watch("scss/**/*.scss", gulp.series("sass-compile"));
})