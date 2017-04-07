'use strict';

var AlexaAppServer = require( 'X' );

var server = new AlexaAppServer( {
	httpsEnabled: false,
	port: process.env.PORT || 8010
} );

server.start();
