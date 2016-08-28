/******************************************************************************
 * Required
 *****************************************************************************/
const gulp = require('gulp'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    autoClose = require('browser-sync-close-hook');

/******************************************************************************
 * browserSync Task
 *****************************************************************************/
gulp.task('browser-sync', function() {
    browserSync.use({
        plugin() {},
        hooks: {
            'client:js': autoClose,
        },
    });
    browserSync({
        server: {
            baseDir: ".",
            // directory: true,
        },
        browser: ["google chrome", "safari"],
    });
});

/******************************************************************************
 * HTML Task
 *****************************************************************************/

gulp.task('html', function() {
    gulp.src('*.html')
        .pipe(reload({
            stream: true
        }));
});


/******************************************************************************
 * CSS Task
 *****************************************************************************/

gulp.task('css', function() {
    gulp.src('css/**/*.css')
        .pipe(reload({
            stream: true
        }));

});

/******************************************************************************
 * Script Task
 *****************************************************************************/

gulp.task('scripts', function() {
    gulp.src('js/**/*.js')
        .pipe(reload({
            stream: true
        }));
});


/******************************************************************************
 * Watch Tasks
 *****************************************************************************/

gulp.task('watch', function() {
    gulp.watch('*.html', ['html']);
    gulp.watch('css/**/*.css', ['css']);
    gulp.watch('js/**/*.js', ['scripts']);
});

/******************************************************************************
 * Default Task
 *****************************************************************************/

gulp.task('default', ['html', 'css', 'scripts', 'browser-sync', 'watch']);
