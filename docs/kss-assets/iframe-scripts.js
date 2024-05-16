var setHeight;
$( document ).ready( function () {
	//this is a hack for id-kss-builder iframes to simulate a
	//dom load event for frontend JS. Because the iframes in the
	//styleguide are created dynamically theis dom event has already
	//occurred by the time the example markup is added.
	//so lets fake it for now
	//
	//
	window.document.dispatchEvent(
		new Event( 'DOMContentLoaded', {
			bubbles: true,
			cancelable: true,
		} )
	);

	var $wrapper = $( '.iframe-wrapper' );
	var height;

	var id = $wrapper.attr( 'id' );

	setHeight = function () {
		height = $wrapper.outerHeight();
		var $parent = $( window.parent.document ).find( '#' + id ); //find iframe parent div by id
		$parent.height( Math.ceil( height ) ); //set the new height;
	};

	$( window ).on( 'resize', function ( e ) {
		setHeight();
	} );
} );
