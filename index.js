const exec = require('child_process').exec;
const execSync = require('child_process').execSync;
var spawn = require('child_process').spawn;
var sass = require('node-sass');
var path = require('path');
var fs = require('fs');

execSync('./node_modules/node-sass/bin/node-sass ./src/main.scss > ./src/main.css');
exec('http-server ./src/');
spawn('open', ['http://localhost:8080']);