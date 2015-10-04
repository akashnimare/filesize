#!/usr/bin/env node
'use strict';
var fsize = require('./');

fsize(function (err, stderr, stdout) {
	if (!err && !stderr) {
		console.log(stdout);
	}
});
