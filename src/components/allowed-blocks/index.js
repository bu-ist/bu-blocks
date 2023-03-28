/**
 * Component: allowedBlocks
 *
 * Returns a filterable list of blocks to allow within BU layout-type blocks.
 *
 * This list is used for the Aside, Drawer, and Modal blocks.
 */

// WordPress dependencies.
const {
	getBlockTypes,
} = wp.blocks;
const {
	applyFilters,
} = wp.hooks;

// Blocks to exclude from allowedBlocks array for layout-type blocks.
let excludeBlocks = [
	'bu/leadin',
	'core/more',
	'core/nextpage',
	'core/separator',
	'core/spacer',
	/* 'editorial/aside',
	'editorial/drawer',
	'editorial/modal',
	'editorial-preset/aside', */
	// Note: These ^ lines can be uncommitted after migrating from WP 5.7 to the next version
];

// Returns a list of all block namess except those in the excludeBlocks array.
const allowedBlocks = () => {
	excludeBlocks = applyFilters( 'buBlocks.layoutBlockTypes.excludeBlocks', excludeBlocks );

	const allowed = [];
	getBlockTypes().forEach( ( { name } ) => {
		if ( name && ! excludeBlocks.includes( name ) ) {
			allowed.push( name );
		}
	} );

	return allowed;
};

// Export the allowedBlocks function.
export default allowedBlocks;
