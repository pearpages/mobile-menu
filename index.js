const exec = require('child_process').exec;
const execSync = require('child_process').execSync;
var spawn = require('child_process').spawn;
var sass = require('node-sass');
var watch = require('node-watch');

var watcher = watch('./src', {recursive: true});

watcher.on('change', function(evt,name) {
    console.log('file '+name+' changed.');
    var ext = name.split('.');
    ext = ext[ext.length-1];
    if(ext !== 'css') {
        build();
    }
});

build();

function build() {
    execSync('./node_modules/node-sass/bin/node-sass ./src/main.scss > ./src/main.css');
    exec('http-server ./src/');
    spawn('open', ['http://localhost:8080']);
}