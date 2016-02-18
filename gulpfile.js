var gulp = require('gulp');
var tasks = require('@greyepoxy/common-gulp-tasks');

tasks.build(gulp);
tasks.bundle(gulp, {srcs:['example.js']});
