// TODO: See if we can use emscripten over this
// Read in the original png2ico
var fs = require('fs'),
    png2icoCpp = fs.readFileSync(__dirname + '/png2ico.cpp', 'utf8');

// TODO: Some string replacements similar to node-jsmin2 but much more complex =(
var retStr = png2icoCpp;

// Output to png2ico.cpp.js
fs.writeFileSync(__dirname + '/../lib/png2ico.cpp.js', retStr, 'utf8');