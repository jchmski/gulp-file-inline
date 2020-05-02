
# gulp-inject-code

> A [gulp](https://github.com/wearefractal/gulp) plugin for injecting CSS and javascript files directly into output files for stellar performance 🚀

This project is a fork of [gulp-style-inject](https://github.com/vladfilipro/gulp-style-inject). Thank you Vlad Filip!

# Installation

Use npm to install `gulp-inject-code` as a development dependency

```shell
npm install --save-dev jchmski/gulp-inject-code
```

Then, add it to your `gulpfile.js` file

```javascript
var inject = require("gulp-inject-code");

gulp.src("./src/*.html")
	.pipe(inject({
		// options (see examples below)
	}))
	.pipe(gulp.dest("./dist"));
```

# Usage
`gulp-inject-code` can be used to inject CSS and javascript. See the examples below to get started.

## Inlining CSS
Add an `inject` comment where you want to inject the `<style></style>` rules. The best location is in the `head` section

Example:
```html
<head>
	...
	<!-- inject:css -->
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
Add an `inject` comment where you want to inject the `<script></script>` rules. The best location is immediately before the closing `body` tag

Example:
```html
<body>
	...
	<!-- inject:js -->
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
`gulp-inject-code` takes two parameters:

- **type** - a string specifying CSS (`css`) or javascript (`js`)
- **path** - the path to your CSS or javascript file that you want to inject into the page

This example will inject the CSS rules at `./src/css/styles.css` directly into all `./src/*.html` files:
```javascript
var inject = require("gulp-inject-code");

gulp.src("./src/*.html")
	.pipe(inject({
		type: "css",
		path: "./src/css/styles.css"
	}))
	.pipe(gulp.dest("./dist"));
```

This example will inject the JavaScript at `./src/js/scripts.js` directly into all `./src/*.html` files:
```javascript
var inject = require("gulp-inject-code");

gulp.src("./src/*.html")
	.pipe(inject({
		type: "js",
		path: "./src/js/scripts.js"
	}))
	.pipe(gulp.dest("./dist"));
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)