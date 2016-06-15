var gulp = require("gulp");
var webpack = require("gulp-webpack");
var clean = require('gulp-clean');
var rename = require("gulp-rename");

gulp.task('remove-compiled-js', function () {
    return gulp.src(["./src/**/*.js", "./src/**/*.js.map"], { read: false })
    .pipe(clean());
});


gulp.task("webpack", ['remove-compiled-js'], function () {
    return gulp.src('src/main.ts')
    .pipe(webpack({
        resolve: {
            extensions: ["", ".js", ".ts"]
        },
        module: {
            loaders: [
                {
                    test: /\.ts$/, loader: "ts", exclude: [/node_modules/]
                },
                {
                    test: /\.css$/, exclude: [/node_modules/], loader: "style-loader!css-loader"
                },
                {
                    test: /\.html$/, loader: "raw"
                },
                {
                    test: /\.scss$/,
                    loaders: ["style", "css", "sass"]
                }
            ]
        }
    }))
    .pipe(rename("app.js"))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
    gulp.watch([
        './src/**/*.ts', './src/**/*.html', './src/**/*.css', './src/**/*.scss'
    ], ['remove-compiled-js', 'webpack']);
});

gulp.task('default', ['remove-compiled-js', 'webpack','watch']);