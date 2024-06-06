// Load the library and specify options
// @link https://attacomsian.com/blog/nodejs-replace-string-in-file
const version = require( '../package.json' ).version;
const description = require( '../package.json' ).description;
const name = require( '../package.json' ).name;
const file = name + '.php';

console.log(
	'Updating ' +
		file +
		' to version ' +
		version +
		'\nDescription: ' +
		description
);

const fs = require( 'fs' );

// Read file into a string
fs.readFile( file, 'utf-8', ( err, contents ) => {
	if ( err ) {
		return console.error( err );
	}

	// Replace string occurrences
	let updated = contents.replace(
		/Text Domain:( *).*$/m,
		'Text Domain:$1' + name
	);
	updated = updated.replace(
		/Description:( *).*$/m,
		'Description:$1' + description
	);
	updated = updated.replace( /Version:( *).*$/m, 'Version:$1' + version );
	// updated = updated.replace(/\$version = .*$/m, "$version = '"+version+"';");

	// Write back to file
	fs.writeFile( file, updated, 'utf-8', ( err2 ) => {
		if ( err2 ) {
			console.log( err2 );
		}
	} );
} );
