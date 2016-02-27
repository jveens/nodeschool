

var fs = require('fs');


// if we don't specify an encoding, node will return a buffer object
var text = fs.readFileSync( 'helloworld.txt', 'utf-8' );

console.log( text );