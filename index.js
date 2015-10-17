'use strict';

var isLinux = require('is-linux'),
	isOsx = require('is-osx'),
	isWindows = require('is-windows'),
	shell=require('shelljs');


module.exports = function () {

	if (isOsx()) {
		var output=shell.exec('ls -shh ' + process.argv[2] + '', {silent:true}).output;
		console.log(output.split(' ')[0])
	} else if (isLinux()) {
		var output=shell.exec('ls -shh ' + process.argv[2] + '', {silent:true}).output;
		console.log(output.split(' ')[0]);	
	} else if (isWindows()) {
		var output=shell.exec('dir -shh ' + process.argv[2] + '', {silent:true}).output;
		shell.exec("dir -Ssh " + process.argv[2]);
		console.log(output.split(' ')[0]);
	} else {
		throw new Error('Unknown OS!');
	}

};
