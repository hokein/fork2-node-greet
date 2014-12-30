#!/usr/bin/env node

var greet = require('../');
var parseArgs = require('minimist');

var options = parseArgs(process.argv.slice(2));
console.log(greet(options['_'][0], options['drunk']));
