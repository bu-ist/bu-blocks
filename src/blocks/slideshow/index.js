/**
 * BLOCK: BU Slideshow
 * A basic Slideshow Block. Frontend JS handles initializing the slideshow and any interactivity.
 */

/**
 * Bring in values defined in block.json.
 */
import metadata from './block.json';

// Import CSS.
import './style.scss';
import './editor.scss';

// Import Internal dependencies.
import Edit from './edit';
import Save from './save';

// WordPress dependencies.
const {
	registerBlockType,
} = wp.blocks;

// Register the block.
registerBlockType( metadata.name, {
	...metadata,
	edit: Edit,
	save: Save,
} );
