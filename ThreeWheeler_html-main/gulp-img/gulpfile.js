import gulp from "gulp";
import browserSync from "browser-sync";
// const concat = require('gulp-concat');
import concat from "gulp-concat";
import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);
//  const uglifyJs = gulp-uglify();
import cleanCSS from "gulp-clean-css";
import autoprefixer from "gulp-autoprefixer";
import rename from "gulp-rename";
import image from "gulp-image";
import htmlmin from "gulp-htmlmin";
import webphtml from "gulp-webp-html-nosvg";
import cwebp from "gulp-cwebp";

import fileinclude from "gulp-file-include";
import del from "del";
import uglify from "gulp-uglify";
import minify  from "gulp-minify";
// gulp.task("cleans", function () {
//   return del.sync("dist");
// });

gulp.task("server", function () {
  browserSync({
    server: {
      baseDir: "dist",
    },
    serveStaticOptions: {
      extensions: ["html"],
    },
  });

  gulp.watch("src/**/*.html").on("change", browserSync.reload);
});

gulp.task("styles", function () {
  return gulp
    .src("src/sass/**/*.+(scss|sass)")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(rename({ suffix: ".min", prefix: "" }))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("scriptsplugin", function () {
  return gulp
  .src(["src/js/vendor/1.16.0/popper.min.js","src/js/vendor/jquery/jquery-3.4.1.min.js","src/js/vendor/wizard/jquery-ui.min.js","src/js/vendor/bootstrap/bootstrap.min.js","src/js/vendor/bootstrap/bootstrap-multiselect.min.js","src/js/vendor/jquery/jquery.validate.min.js","src/js/vendor/slick/slick.min.js","src/js/vendor/lazyload/lazysizes.min.js","src/js/vendor/lazyload/ytdefer.min.js"])
      // .pipe(uglify({ output: "compressed" }))
      .pipe(concat('vendor/bundle.js'))
      // .pipe(autoprefixer())
      .pipe(minify())
    .pipe(gulp.dest("dist/js/vendor"))
    .pipe(browserSync.stream());
});


gulp.task("globsjs", function () {
  return gulp
  .src(["src/js/miniature.earth.js","src/js/miniature.earth_demo_world-news_countries.js","src/js/tvs-miniature.earth.js"]) 
      .pipe(concat('vendor/globsjs.js')) 
      .pipe(minify())
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("featuresjs", function () {
  return gulp
  .src(["src/js/scripts.js","src/js/counter.js","src/js/techspec.js","src/js/highlight.js","src/js/backbutton.js"]) 
      .pipe(concat('vendor/featuresjs.js'))
      .pipe(minify())
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("images", function () {
  return gulp
    .src("src/images/**/*")
    .pipe(image())
    .pipe(gulp.dest("dist/images"))
    .pipe(browserSync.stream());
});
gulp.task("watch", function () {
  gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel("styles"));  
  gulp.watch("src/**/*.html").on("change", gulp.parallel("html")); 
  gulp.watch("src/js/vendor/**/*.js)", gulp.parallel("scriptsplugin"));
  gulp.watch("src/js/*.js)", gulp.parallel("globsjs"));  
  // gulp.watch("src/js/*.js)", gulp.parallel("custome"));
  gulp.watch("src/js/*.js)", gulp.parallel("featuresjs"));
  gulp.watch("src/fonts/**/*").on("all", gulp.parallel("fonts"));
  gulp.watch("src/icons/**/*").on("all", gulp.parallel("icons"));
  gulp.watch("src/images/**/*").on("all", gulp.parallel("images"));
  gulp.watch("src/img/*").on("all", gulp.parallel("cwebp"));
});

gulp.task("html", function () {
  return gulp
    .src("src/*.html")
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(webphtml())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist/"));
});



gulp.task("fonts", function () {
  return gulp
    .src("src/fonts/**/*")
    .pipe(gulp.dest("dist/fonts"))
    .pipe(browserSync.stream());
});

gulp.task("icons", function () {
  return gulp
    .src("src/icons/**/*")
    .pipe(image())
    .pipe(gulp.dest("dist/icons"))
    .pipe(browserSync.stream());
});



gulp.task("cwebp", function () {
  return gulp
    .src("src/img/**/*")
    .pipe(cwebp())
    .pipe(gulp.dest("dist/img"))
    .pipe(browserSync.stream());
});

gulp.task(
  "default",
  gulp.parallel(
    "watch",
    "server",
    "styles",
    "scriptsplugin",
    "globsjs",
    "featuresjs",
    // "custome", 
    "fonts",
    "icons",
    // "html",
    "images",
    "cwebp",
  )
);
