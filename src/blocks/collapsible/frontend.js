bu_blocks.collapsible = ( function() {

	// Store all collapsible block
	var collapsibleBlocks = [];
	var collapsibleOpenClass = 'is-open';
	var collapsibleClosedClass = 'is-closed';




	/**
	 * Check if a Collapsible block is set to open by default by user.
	 *
	 * @param object collapsible block
	 * @return bool
	 */
	var isOpenDefault = function( collapsible ) {
		const { container } = collapsible;

		if ( 'true' === container.getAttribute("data-default-open") ) {
			return true;
		}

		return false;
	};

	/**
	 * Check if a Collapsible block is open.
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
		container.classList.remove( collapsibleClosedClass );

		toggle.setAttribute( 'aria-expanded', true );
		panel.setAttribute( 'aria-hidden', false );

		if ( container.classList.contains( 'is-style-preview' ) ) {
			toggle.innerHTML = toggle.getAttribute("data-close-text");
		}
	};

	/**
	 * Close Collapsible block
	 *
	 * @param object collapsible block
	 */
	var closeCollapsible = function( collapsible ) {
		const { container, toggle, panel } = collapsible;

		container.classList.remove( collapsibleOpenClass );
		container.classList.add( collapsibleClosedClass );
		toggle.setAttribute( 'aria-expanded', false );
		panel.setAttribute( 'aria-hidden', true );

		if ( container.classList.contains( 'is-style-preview' ) ) {
			toggle.innerHTML = toggle.getAttribute("data-open-text");
		}
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
		var containers = document.querySelectorAll( '.js-wp-block-bu-collapsible' );

		// Don't coninue if no Collapsible blocks exist
		if ( containers.length === 0 ) {
			return;
		}

		containers.forEach( function( element, i ) {
			var block = {};

			block.container = element;
			block.toggle = element.querySelector( '.js-bu-block-collapsible-toggle' );
			block.panel = element.querySelector( '.js-bu-block-collapsible-content' );
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

			// Set ARIA attributes
			toggle.setAttribute( 'aria-controls', panel.id );
			panel.setAttribute( 'aria-labelledby', toggle.id );

			// Setup initial state of each block.
			if ( isOpenDefault( collapsible ) ) {
				openCollapsible( collapsible );
			} else {
				closeCollapsible( collapsible );
			}

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
