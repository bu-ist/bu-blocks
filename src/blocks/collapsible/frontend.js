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

	};

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
			block.toggle = element.querySelector( '.js-bu-block-collapsible-toggle' );
			block.panel = element.querySelector( '.bu-block-collapsible-content' );

			collapsibleBlocks.push( block );

		} );

	};

	/**
	 * Set up handlers, aria, and other functionality
	 */
	var setupCollapsibleBlocks = function() {

		if ( collapsibleBlocks.length === 0 ) {
			return;
		}

		collapsibleBlocks.forEach( function( thisCollapsible, i ) {

			const { collapsible, toggle, panel } = thisCollapsible;

			// Add toggle event
			toggle.addEventListener( 'click', function( e ) {

				e.preventDefault();

				toggleCollapsible( collapsible );

			} );

			// Open the Collapsible block if the ID is in the current URL
			if ( window.location.hash === '#' + collapsible.id ) {
				collapsible.classList.add( collapsibleOpenClass );
			}

			// Make sure the collapsible block has an id
			if ( collapsible.id === '' ) {

				collapsible.setAttribute( 'id', 'bu-collapsible-block-' + i );

			}

			// Make sure the button has an id
			if ( toggle.id === '' ) {

				toggle.setAttribute( 'id', collapsible.id + '-toggle' );

			}

			// Make sure the panel has an id
			if ( panel.id === '' ) {

				panel.setAttribute( 'id', collapsible.id + '-panel' );

			}

		} );

	};

	/**
	 * Init
	 */
	var collapsibleInit = function() {

		findElements();

		setupCollapsibleBlocks();

	};

	// Start things on dom ready.
	document.addEventListener( "DOMContentLoaded", function() {

  	collapsibleInit();

	});

} )();
