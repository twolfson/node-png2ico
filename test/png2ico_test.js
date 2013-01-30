// Load in our modules and set up constants
// Favicons shamelessly taken from https://www.google.com/favicon.ico
var fs = require('fs'),
    png2ico = require('../lib/png2ico.js'),
    expectedDir = __dirname + '/expected_files',
    filesDir = __dirname + '/test_files';

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['awesome'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'single': function (test) {
    test.expect(1);

    // Load in the 16x16.png
    var png16 = fs.readFileSync(filesDir + '/favicon-16.png', 'binary');

    // Pass it through png2ico
    var actualIco = png2ico([png16]);

    // Assert it is equal to its C counterpart
    var expectedIco = fs.readFileSync(expectedDir + '/favicon-16.ico', 'binary');
    test.equal(actualIco, expectedIco);

    // Callback
    test.done();
  },
  'multi': function (test) {
    test.expect(1);

    // Load in the pngs
    var png16 = fs.readFileSync(filesDir + '/favicon-16.png', 'binary'),
        png32 = fs.readFileSync(filesDir + '/favicon-32.png', 'binary');

    // Pass it through png2ico
    var actualIco = png2ico([png16, png32]);

    // Assert it is equal to its C counterpart
    var expectedIco = fs.readFileSync(expectedDir + '/favicon-16-32.ico', 'binary');
    test.equal(actualIco, expectedIco);

    // Callback
    test.done();
  }
};
