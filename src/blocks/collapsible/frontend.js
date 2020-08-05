bu_blocks.collapsible = ( function() {

	// Store all collapsible block
	var collapsibleBlocks = [];
	var collapsibleOpenClass = 'is-open';

	/**
	 * Check if a Collapsible block is open
	 *
	 * @param object collapsible block
	 * @return bool
	 */
	var isOpen = function( collapsible ) {

		const { container } = collapsible;

		if ( container.classList.contains ( collapsibleOpenClass ) ) {
			return true;
		}

		return false;

	};

	/**
	 * Open Collapsible block
	 *
	 * @param object collapsible block
	 */
	var openCollapsible = function( collapsible ) {

		const { container, toggle, panel } = collapsible;

		container.classList.add( collapsibleOpenClass );

		toggle.setAttribute( 'aria-expanded', true );
		panel.setAttribute( 'aria-hidden', false );

	};

	/**
	 * Close Collapsible block
	 *
	 * @param object collapsible block
	 */
	var closeCollapsible = function( collapsible ) {

		const { container, toggle, panel } = collapsible;

		container.classList.remove( collapsibleOpenClass );

		toggle.setAttribute( 'aria-expanded', false );
		panel.setAttribute( 'aria-hidden', true );

	};

	/**
	 * Toggle collapsible block
	 *
	 * @param element collapsible block
	 */
	var toggleCollapsible = function( collapsible ) {

		if ( isOpen( collapsible ) ) {

			closeCollapsible( collapsible );

		} else {

			openCollapsible( collapsible );

		}

	};

	/**
	 * Find all Collapsible blocks
	 */
	var findElements = function() {

		var containers = document.querySelectorAll( '.wp-block-editorial-collapsible' );

		// Don't coninue if no Collapsible blocks exist
		if ( containers.length === 0 ) {
			return;
		}

		containers.forEach( function( element, i ) {

			var block = {};

			block.container = element;
			block.toggle = element.querySelector( '.bu-block-collapsible-toggle' );
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

		collapsibleBlocks.forEach( function( collapsible, i ) {

			const { container, toggle, panel } = collapsible;

			// Add toggle event
			toggle.addEventListener( 'click', function( e ) {

				e.preventDefault();

				toggleCollapsible( collapsible );

			} );

			// Open the Collapsible block if the ID is in the current URL
			if ( window.location.hash === '#' + container.id ) {
				openCollapsible( collapsible );
			}

			// Make sure the collapsible block has an id
			if ( container.id === '' ) {

				container.setAttribute( 'id', 'bu-collapsible-block-' + i );

			}

			// Make sure the toggle has an id
			if ( toggle.id === '' ) {

				toggle.setAttribute( 'id', container.id + '-toggle' );

			}

			// Make sure the panel has an id
			if ( panel.id === '' ) {

				panel.setAttribute( 'id', container.id + '-panel' );

			}

			// Set ARIA attributes
			toggle.setAttribute( 'aria-controls', panel.id );
			panel.setAttribute( 'aria-labelledby', toggle.id );

			if ( isOpen( collapsible ) ) {

				toggle.setAttribute( 'aria-expanded', true );
				panel.setAttribute( 'aria-hidden', false );

			} else {

				toggle.setAttribute( 'aria-expanded', false );
				panel.setAttribute( 'aria-hidden', true );

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
