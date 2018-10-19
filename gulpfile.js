'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const runSequence = require('run-sequence');
const clean = require('gulp-clean');



gulp.task('clean', function(){
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('serve', function () {
    runSequence('clean', ['sass'], function () {
        browserSync.init({
            server: "./dist/"
        });

        gulp.src('./src/index.html').pipe(gulp.dest('./dist/'));
        gulp.src('./src/js/*.js').pipe(gulp.dest('./dist/js'));
        gulp.src('./src/img/**/*').pipe(gulp.dest('./dist/img'));
        gulp.src('./src/fonts/*.*').pipe(gulp.dest('./dist/fonts'));

        gulp.watch('./src/scss/*.scss', ['sass']).on('change', browserSync.reload);
        gulp.watch('./src/index.html', ['sass']).on('change', browserSync.reload);

        gulp.watch('./src/index.html').on('change', function () {
            return gulp.src('./src/index.html').pipe(gulp.dest('./dist/'))
        });
        gulp.watch('./dist/index.html').on('change', browserSync.reload)
    })
});

gulp.task('sass', function(){
    return gulp.src('./src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('default', ['serve'], function(){
    console.log('=== ALL DONE ===')
});