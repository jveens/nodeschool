var request = require( 'request' );

// Returns 2 params and Error (if there is one) and the Response
request( 'http://google.com', function( err, response, body ) {

	// Here we're logging out the request
	console.log( body );

});