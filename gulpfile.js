var gulp = require('gulp');
var tasks = require('@greyepoxy/common-gulp-tasks');
var tsTask = require('@greyepoxy/common-gulp-typescript-build-task');
var babelify = require('babelify');

tsTask.build(gulp);
tasks.bundle(gulp, {
	srcs:['example.js','specs/tests.js'], 
	browserifyTransforms:[{ transform:babelify, configParams:{ presets: ['es2015'] } }]
});
tasks.browserTests(gulp);
