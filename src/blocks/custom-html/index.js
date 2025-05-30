/**
 * BLOCK: editorial/custom-html
 *
 * A block used for arbitrary custom HTML that is not sanitized
 * or escaped in any way on output.
 */

//  Import CSS.
import './editor.scss';

// Internal dependencies.
import blockIcons from '../../components/block-icons';

/**
 * Bring in values defined in block.json.
 */
import metadata from './block.json';

// Internal dependencies.
import Edit from './edit.js';

// WordPress dependencies.
import { registerBlockType } from '@wordpress/blocks';

// Register the block.
registerBlockType( metadata.name, {
	icon: blockIcons( 'html' ),
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	// The front-end HTML for this block is handled in PHP, but
	// the save function is required.
	save() {
		return null;
	},
} );
