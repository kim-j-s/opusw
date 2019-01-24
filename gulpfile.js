// http://webclub.tistory.com/467

// Modules 호출 
var gulp = require('gulp'); 

// Gulp 의 concat 패키지 모듈 호출 
var concat = require('gulp-concat');					// npm install --save-dev gulp-concat
var count = require('gulp-count');						//변환되는 파일수 확인 Module 추가 설치필요 npm install --save-dev gulp-count
var uglify = require('gulp-uglify');					// 최적화 기능 플러그인 호출 (공백 및 주석을 제거)	npm install --save-dev gulp-uglify
var rename = require('gulp-rename');					// 변경된 파일명을 생성  npm install --save-dev gulp-rename
var browserSync = require('browser-sync').create();		// 변경된 파일 감지 후 동기화 - localhost
var fileinclude = require('gulp-file-include');			// include 확장자
var cache = require('gulp-cache');						// 브라우져 캐시 지우기
var FileCache = require("gulp-file-cache");				// 변경된 파일만 선택하여 수정
var fileCache = new FileCache();
var ext_replace = require('gulp-ext-replace');			// 확장자 변환
var fileSync = require('gulp-file-sync');				// 파일 싱크
var fsync = require('gulp-files-sync');
var prettyHtml = require('gulp-pretty-html');
var autoprefixer = require('gulp-autoprefixer');		// css webkt

// 바라볼 경로를 변수화 지정
var src = 'src/';
var dest = 'dest/';


gulp.task('html', function() {
	return gulp
		.src(['src/**/*.html', '!src/**/include/*.*'])
		.pipe(fileinclude ({
			prefix : '@@',
			basepath : 'src/'
		}))
		.pipe(prettyHtml({
			indent_with_tabs: true
		}))
		.pipe(gulp.dest('dest/'))
		.pipe(browserSync.reload(
			{stream: true}
		));
});

gulp.task('style', function() {
	return gulp
		.src(['src/**/*.css'])
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(gulp.dest('dest/'))
		.pipe(browserSync.reload(
			{stream: true}
		));
});

gulp.task('style_run', function() {
	return gulp
		.src(['src/**/*.css'])
		.pipe(fileCache.filter())
		.pipe(fileCache.cache())
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(gulp.dest('dest/'))
		.pipe(browserSync.reload(
			{stream: true}
		));
});

gulp.task('images', function() {
	return gulp
		.src(['src/**/*.+(jpg|png|gif|ico)'])
		.pipe(gulp.dest('dest/'))
		.pipe(browserSync.reload(
			{stream: true}
		));
});

gulp.task('script', function() {
	return gulp
		.src(['src/**/*.js'])
		.pipe(gulp.dest('dest/'))
		.pipe(browserSync.reload(
			{stream: true}
		));
});

gulp.task('json', function() {
	return gulp
		.src(['src/**/*.json'])
		.pipe(gulp.dest('dest/'))
		.pipe(browserSync.reload(
			{stream: true}
		));
});

gulp.task('fonts', function() {
	return gulp
		.src(['src/**/*.+(eot|oft|woff|woff2)'])
		.pipe(gulp.dest('dest/'))
		.pipe(browserSync.reload(
			{stream: true}
		));
});


gulp.task('sync', function() {
	gulp.watch(['src/**/*.*', '!src/include/*.html'], function() {
		fileSync('src/', 'dest/', {
			recursive: true
		});
	});
});

gulp.task('browserSync', function() {
	browserSync.init({
		server : {
			baseDir : 'dest/',
			index : "main/index.html"
		}
	});
	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('src/**/*.css', ['style_run']);
	gulp.watch('src/**/*.+(jpg|png|gif|ico)', ['images']);
	gulp.watch('src/**/*.js', ['script']);
	gulp.watch('src/**/*.json', ['json']);
});

gulp.task('default', ['html', 'style', 'images', 'script', 'json', 'browserSync']);