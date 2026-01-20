/**
 * BLOCK: editorial/listicle
 *
 * Register a listicle block with Gutenberg.
 */

/**
 * Bring in values defined in block.json.
 */
import metadata from './block.json';

// Import CSS.
import './style.scss';
import './editor.scss';

// Internal dependencies.
import Background, { BackgroundAttributes } from '../../components/background';
import ShareTools, { ShareToolsAttributes } from '../../components/share-tools';
import blockIcons from '../../components/block-icons';
import Edit, { getClasses, hasRelatedLinks } from './edit.js';
import deprecated from './deprecated/deprecated.js';

// WordPress dependencies.
import { registerBlockType } from '@wordpress/blocks';

// Merge background and share tools attributes with this block's attributes.
const attributes = {
	...metadata.attributes,
	...BackgroundAttributes,
	...ShareToolsAttributes,
};

// Register the block.
registerBlockType( metadata.name, {
	title: metadata.title,
	icon: blockIcons( 'listicle' ),
	attributes,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	save: () => null, // Rendered in PHP
	deprecated,
} );
