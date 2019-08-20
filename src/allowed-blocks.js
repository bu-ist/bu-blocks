/**
 * Unregisters the blocks in this plugin for the provided post types.
 *
 * @link   http://www.bu.edu/interactive-design/
 * @author Boston University: Interactive Design <id@bu.edu>
 */

// Run the code to unregister blocks once the dom has loaded.
wp.domReady( function() {

	// Bail if the filter is set to false.
	if ( !wp.hooks.applyFilters( 'buBlocks.filterBlocks.restrictToPostTypes', true ) ) {
		return;
	}

	// Create a filterable array of post types to restrict the blocks to.
	const postTypes = wp.hooks.applyFilters( 'buBlocks.filterBlocks.postTypes', [ 'post', 'page' ] );

	// Get the current post type.
	const currentPostType = wp.data.select( 'core/editor' ).getCurrentPost().type;

	// Bail if the current post type is in the array of post types to restrict the blocks to.
	if ( postTypes.includes( currentPostType ) ) {
		return;
	}

	// A manual list of the blocks registered by this plugin.
	// Alternatively, a setting added to each block could be used
	// to filter the list of all blocks. For example:
	// const blocks = select( 'core/blocks' ).getBlockTypes();
	// const buBlocks = blocks.filter( block => block.plugin === 'bu-blocks' );
	const buBlocks = [
		'editorial/aside',
		'editorial-preset/aside',
		'bu/buniverse',
		'bu/button',
		'editorial/custom-html',
		'editorial/drawer',
		'editorial/headline',
		'editorial/introparagraph',
		'bu/leadin',
		'editorial/listicle',
		'editorial/modal',
		'editorial/photoessay',
		'bu/pullquote',
		'editorial/relatedstories',
		//'editorial/slideshow',
		'bu/stats',
	]

	// Unregister the blocks.
	buBlocks.forEach( block => {
		wp.blocks.unregisterBlockType( block );
	} );
} );
