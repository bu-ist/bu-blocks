module.exports = function ( Handlebars ) {
	Handlebars.registerHelper( 'ifContains', function ( arg1, arg2, options ) {
		//if has modifier class and it contains supplied string
		if ( arg1 && arg1.includes( arg2 ) ) {
			//returns contents of {{if true function}}
			return options.fn( this );
		} else {
			//returns contents of {{else function}}
			return options.inverse( this );
		}
	} );
};
