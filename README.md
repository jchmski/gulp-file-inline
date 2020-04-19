
# gulp-file-inline

> a [gulp](https://github.com/wearefractal/gulp) plugin for inlining CSS and javascript files directly

## Usage

First, install `gulp-file-inline` as a development dependency:

```shell
npm install --save-dev gulp-file-inline
```

Then, add it to your `gulpfile.js`:

```javascript
var inject = require("gulp-file-inline");

gulp.src("./src/*.html")
	.pipe(inject())
	.pipe(gulp.dest("./dist"));
```

## Inlining CSS
To inline your CSS, add this comment where you want to insert the `<style></style>` rules. The best location for this is in your `<head>` section

Example:
```html
<head>
	...
	<!-- inline:css -->
</head>
```
Output:
```html
<head>
	...
	<style>body{margin:0}</style>
</head>
```

## Inlining JavaScript
To inline your JavaScript, add this comment where you want to insert the `<script></script>` rules. The best location immediately before your closing `body` tag

Example:
```html
<body>
	...
	<!-- inline:js -->
</body>
```
Output:
```html
<body>
	...
	<script>console.log('wow, what a great plugin')</script>
</body>
```

## Parameters

*type* - a string specifying CSS or javascript
*path* - the path to your CSS or javascript file that you want to inject into the page

```javascript
var inject = require("gulp-file-inline");

gulp.src("./src/*.html")
	.pipe(inject({
		type: "css",
		path: "./src/css/styles.css"
	}))
	.pipe(gulp.dest("./dist"));
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)