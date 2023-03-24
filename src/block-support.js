/**
 * Handles block support for post types.
 *
 * @link   http://www.bu.edu/interactive-design/
 * @author Boston University: Interactive Design <id@bu.edu>
 */

const { select } = wp.data;
const { applyFilters } = wp.hooks;
const { registerPlugin } = wp.plugins;

/**
 * Disables support for the blocks in this plugin for all but the `post` and `page` post types.
 *
 * Runs once the dom is loaded in order to avoid a race condition.
 *
 * @returns {null} Nothing to return
 */
const UnregisterBlocks = () => {
	// Bail if the default support has been filtered off.
	if ( applyFilters( 'buBlocks.blockSupport.disableDefault', false ) ) {
		return null;
	}

	// Create a filterable array of post types to restrict the blocks to.
	const postTypes = applyFilters( 'buBlocks.blockSupport.postTypes', [ 'post', 'page' ] );

	// Get the current post type.
	const currentPostType = select( 'core/editor' ).getCurrentPostType();

	// Bail if the current post type is in the array of post types to restrict the blocks to.
	if ( postTypes.includes( currentPostType ) ) {
		return null;
	}

	// A filterable list of the blocks registered by this plugin.
	// Alternatively, a setting added to each block could be used
	// to filter the list of all blocks. For example:
	// const blocks = select( 'core/blocks' ).getBlockTypes();
	// const buBlocks = blocks.filter( block => block.plugin === 'bu-blocks' );
	const buBlocks = applyFilters( 'buBlocks.blockSupport.blocks', [
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
	] );

	// Unregister the blocks.
	buBlocks.forEach( block => {
		wp.blocks.unregisterBlockType( block );
	} );

	// Return null to avoid rendering anything.
	return null;
};

registerPlugin( 'unregister-bu-blocks', {
	render: UnregisterBlocks,
} );
