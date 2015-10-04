#!/usr/bin/env node
'use strict';
var fs = require('./');

fs(function (err, stderr, stdout) {
	if (!err && !stderr) {
		console.log(stdout);
	}
});
