/**
 * BLOCK: bu/pullquote
 *
 * Register a pullquote block with Gutenberg.
 */

/**
 * Bring in values defined in block.json.
 */
import metadata from './block.json';

// Import CSS.
import './style.scss';
import './editor.scss';

// Internal dependencies.
import { BackgroundAttributes } from '../../components/background';
import blockIcons from '../../components/block-icons/';
import Edit from './edit.js';
import deprecated from './deprecated/deprecated.js';

// WordPress dependencies.
import { registerBlockType } from '@wordpress/blocks';

// Merge background component attributes with this block's attributes.
const attributes = {
	...metadata.attributes,
	...BackgroundAttributes,
};

// Register the block.
registerBlockType( metadata.name, {
	title: metadata.title,
	icon: blockIcons( 'pullquote' ),
	attributes,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	save: () => null, // Rendered in PHP
	deprecated,
} );
