"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("sass", function (done) {
  gulp
    .src("./scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));

  done();
});

gulp.task("run", gulp.parallel("sass"));

gulp.task("watch", function (done) {
  gulp.watch("./scss/*.scss", gulp.series("sass"));
  done();
});
