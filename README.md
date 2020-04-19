
# gulp-inline-code

> a [gulp](https://github.com/wearefractal/gulp) plugin for inlining CSS and javascript files directly into client-facing files.

This project is a fork of [gulp-style-inline](https://github.com/vladfilipro/gulp-style-inject). Thank you Vlad Filip!

# Installation

Use npm to install `gulp-inline-code` as a development dependency

```shell
npm install --save-dev gulp-inline-code
```

Then, add it to your `gulpfile.js` file

```javascript
var inject = require("gulp-inline-code");

gulp.src("./src/*.html")
	.pipe(inject())
	.pipe(gulp.dest("./dist"));
```

# Usage
`gulp-inline-code` can be used to inline CSS and javascript. See the examples below to get started.

## Inlining CSS
Add an `inline` comment where you want to inject the `<style></style>` rules. The best location is in the `head` section

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
Add an `inline` comment where you want to inject the `<script></script>` rules. The best location is immediately before the closing `body` tag

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
`gulp-inline-code` takes two parameters:

- **type** - a string specifying CSS (`css`) or javascript (`js`)
- **path** - the path to your CSS or javascript file that you want to inject into the page

This example will inject the CSS rules at `./src/css/styles.css` directly into all `./src/*.html` files:
```javascript
var inject = require("gulp-inline-code");

gulp.src("./src/*.html")
	.pipe(inject({
		type: "css",
		path: "./src/css/styles.css"
	}))
	.pipe(gulp.dest("./dist"));
```

This example will inject the JavaScript at `./src/js/scripts.js` directly into all `./src/*.html` files:
```javascript
var inject = require("gulp-inline-code");

gulp.src("./src/*.html")
	.pipe(inject({
		type: "js",
		path: "./src/js/scripts.js"
	}))
	.pipe(gulp.dest("./dist"));
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)