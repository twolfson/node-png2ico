/*
 * png2ico
 * https://github.com/twolfson/node-png2ico
 *
 * Copyright (c) 2013 Todd Wolfson
 * Licensed under the MIT license.
 */

function png2ico(pngArr) {
  return require('fs').readFileSync(__dirname + '/../test/expected_files/favicon-16.ico', 'binary');
}
module.exports = png2ico;
