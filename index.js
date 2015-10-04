'use strict';

var isLinux = require('is-linux'),
	isOsx = require('is-osx'),
	isWindows = require('is-windows'),
	shell=require('shelljs');


module.exports = function () {

	if (isOsx()) {
		shell.exec("ls -Ssh");
	} else if (isLinux()) {
		shell.exec("ls -Ssh");
	} else if (isWindows()) {
		shell.exec("dir -Ssh");
	} else {
		throw new Error('Unknown OS!');
	}

};

