bu_blocks.collapsibleControl = ( function() {

	// Store all Control blocks
	var collapsibleControlBlocks = [];
	var collapsibleBlocks = [];
	var allBlocksOpen = false;
	var collapsibleOpenClass = 'is-open';

	/**
	 * Toggle all Collapsible blocks
	 */
	var toggleAll = function( control ) {

		if ( 0 === collapsibleBlocks.length ) {
			return;
		}

		var shouldOpen = true;

		if ( allBlocksOpen ) {
			shouldOpen = false;
		}

		collapsibleBlocks.forEach( function( collapsible, i ) {

			const { container, toggle, panel } = collapsible;

			if ( shouldOpen ) {

				container.classList.add( collapsibleOpenClass );
				toggle.setAttribute( 'aria-expanded', true );
				panel.setAttribute( 'aria-hidden', false );

			} else {

				container.classList.remove( collapsibleOpenClass );
				toggle.setAttribute( 'aria-expanded', false );
				panel.setAttribute( 'aria-hidden', true );

			}

		} );

		if ( allBlocksOpen ) {
			allBlocksOpen = false;
		} else {
			allBlocksOpen = true;
		}

	};

	/**
	 * Toggle Collapsible blocks in control's group
	 */
	var toggleGroup = function( control ) {

		// TODO toggle group
		// maybe find all in a group during setup?

	};

	/**
	 * Find all Collapsible blocks on a page
	 */
	var findAllCollapsibleBlocks = function() {

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
	 * Return all Collapsible blocks in the group with a Control
	 *
	 * @param object control
	 *
	 * @return array list of all collapsible blocks in group
	 */
	var getGroupCollapsibleBlocks = function() {

		var blocks = [];

		// TODO: find blocks in group

		return blocks;

	}

	/**
	 * Find all Controls and Collapsible blocks
	 */
	var findElements = function() {

		var controls = document.querySelectorAll( '.bu-collapsible-control-toggle' );

		// Don't coninue if no Controls are found
		if ( controls.length === 0 ) {
			return;
		}

		var allCollapsibleBlocksFound = false;

		// Store all controls
		controls.forEach( function( control, i ) {

			var block = {};

			block.toggle = control;

			// Check if Control targets all blocks or blocks in its group
			if ( control.classList.contains( 'js-bu-collapsible-control-target-group' ) ) {

				block.targetGroup = true;

				block.collapsibleBlocks = getGroupCollapsibleBlocks( control );

			} else {

				block.targetGroup = false;

				if ( ! allCollapsibleBlocksFound ) {

					findAllCollapsibleBlocks();

				}

				allCollapsibleBlocksFound = true;

			}

			collapsibleControlBlocks.push( block );

		} );

	};

	/**
	 * Set up handlers, aria, and other functionality
	 */
	var setupCollapsibleControlBlocks = function() {

		if ( collapsibleControlBlocks.length === 0 ) {
			return;
		}

		collapsibleControlBlocks.forEach( function( control, i ) {

			const { toggle, targetGroup } = control;

			toggle.addEventListener( 'click', function( e ) {

				e.preventDefault();

				if ( targetGroup ) {

					toggleGroup( control );

				} else {

					toggleAll( control );

				}

			} );

		} );

	};

	/**
	 * Init
	 */
	var collapsibleControlInit = function() {

		findElements();

		setupCollapsibleControlBlocks();

	};

	// Start things on dom ready.
	document.addEventListener( "DOMContentLoaded", function() {

  	collapsibleControlInit();

	} );

} )();
