var through = require('through2'),
	PluginError = require('plugin-error');
	fs = require('fs'),
	path = require('path');

module.exports = function (options) {
	'use strict';

	var INJECT_PATTERN = '<\\!--\\s*inject:' + options.type + '\\s*-->';

	var self = null;

	// no options object specified
	if (!options) {
		new PluginError('gulp-inline-code', 'Object parameters missing');
	}

	// no type specified
	if (!options.type) {
		new PluginError('gulp-inline-code', 'No type specified. Valid types are css and js');
	}

	// invalid type specified
	if (!["css", "js"].includes(options.type)) {
		new PluginError('gulp-inline-code', 'Invalid type specified. Valid types are css and js');
	}

	// no path specified
	if (!options.path) {
		new PluginError('gulp-inline-code', 'No path specified');
	}

	function throwError(msg) {
		new PluginError('gulp-inline-code', msg);
	}

	function transformResponse(contents) {
		var tag = (options.type === "css") ? "style" : "script";

		return '<' + tag + '>\n' + contents.toString().trim() + '\n</' + tag + '>';
	}

	// get the css/javascript file to be injected
	function getInjectFile(source) {
		if (source && fs.existsSync(source)) {
			return transformResponse(fs.readFileSync(source));
		} else {
			new PluginError('gulp-inline-code', 'ERROR: Source file (' + source + ') cannot be found');
		}
	}

	function injectCode(file, enc, callback) {
		self = this;

		// Do nothing if no contents
		if (file.isNull()) {
			this.push(file);
			return callback();
		}

		// check if file.contents is a `Stream`
		if (file.isStream()) {
			// accepting streams is optional
			new PluginError('error', new gutil.PluginError('gulp-inline-code', 'Stream content is not supported'));
			return callback();
		}

		// check if file.contents is a `Buffer`
		if (file.isBuffer()) {
			var contents = String(file.contents);

			contents = contents.replace(new RegExp(INJECT_PATTERN, 'gi'), function (match, parameters) {
				return getInjectFile(options.path);
			});

			file.contents = new Buffer(contents);
			this.push(file);
			return callback();
		}

		return callback();
	}

	return through.obj(injectCode);
};