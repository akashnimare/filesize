'use strict';

var isLinux = require('is-linux'),
	isOsx = require('is-osx'),
	isWindows = require('is-windows'),
	shell=require('shelljs');


module.exports = function () {

	if (isOsx()) {
		shell.exec("ls -Ssh " + process.argv[2]);
	} else if (isLinux()) {
		shell.exec("ls -Ssh " + process.argv[2]);
	} else if (isWindows()) {
		shell.exec("dir -Ssh " + process.argv[2]);
	} else {
		throw new Error('Unknown OS!');
	}

};

