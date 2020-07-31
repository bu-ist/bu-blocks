bu_blocks.collapsible = ( function() {

	// Store all collapsible block
	var collapsibleBlocks = [];

	/**
	 * Toggle collapsible block
	 *
	 * @param element collapsible block
	 */
	var toggleCollapsible = function( collapsible ) {

		if ( collapsible.classList.contains ( 'bu-collapsible-open' ) ) {

			collapsible.classList.remove( 'bu-collapsible-open' );

		} else {

			collapsible.classList.add( 'bu-collapsible-open' );

		}

	}

	/**
	 * Find all Collapsible blocks
	 */
	var findElements = function() {

		var elements = document.querySelectorAll( '.wp-block-editorial-collapsible' );

		// Don't coninue if no Collapsible blocks exist
		if ( elements.length === 0 ) {
			return;
		}

		elements.forEach( function( element, i ) {

			var block = {};

			block.collapsible = element;
			block.button = element.querySelector( '.js-bu-block-collapsible-toggle' );

			collapsibleBlocks.push( block );

		} );

	}

	/**
	 * Set up handlers
	 */
	var setupHandlers = function() {

		if ( collapsibleBlocks.length === 0 ) {
			return;
		}

		collapsibleBlocks.forEach( function( thisCollapsible, i ) {

			thisCollapsible.button.addEventListener( 'click', function( e ) {

				e.preventDefault();

				toggleCollapsible( thisCollapsible.collapsible );

			} );

		} );

	}

	/**
	 * Init
	 */
	var collapsibleInit = function() {

		findElements();

		setupHandlers();

	}

	// Start things on dom ready.
	document.addEventListener( "DOMContentLoaded", function() {

  	collapsibleInit();

	});

} )();
