bu_blocks.collapsible = ( function() {

	// Store all collapsible block
	var collapsibleBlocks = [];
	var collapsibleOpenClass = 'is-open';

	/**
	 * Toggle collapsible block
	 *
	 * @param element collapsible block
	 */
	var toggleCollapsible = function( collapsible ) {

		if ( collapsible.classList.contains ( collapsibleOpenClass ) ) {

			collapsible.classList.remove( collapsibleOpenClass );

		} else {

			collapsible.classList.add( collapsibleOpenClass );

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
