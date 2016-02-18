var gulp = require('gulp');
var tasks = require('@greyepoxy/common-gulp-tasks');
var babelify = require('babelify');

tasks.build(gulp);
tasks.bundle(gulp, {
	srcs:['example.js','specs/tests.js'], 
	browserifyTransforms:[{ transform:babelify, configParams:{ presets: ['es2015'] } }]
});
tasks.browserTests(gulp);
