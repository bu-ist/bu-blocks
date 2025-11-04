/**
 * BLOCK: bu/leadin
 *
 * Register a leadin block with Gutenberg.
 */

/**
 * Bring in values defined in block.json.
 */
import metadata from './block.json';

// Import CSS.
import './style.scss';
import './editor.scss';

// Internal dependencies
import { BackgroundAttributes } from '../../components/background';
import blockIcons from '../../components/block-icons/';
import Edit from './edit.js';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

// Merge background component attributes with this block's attributes.
const attributes = {
	...metadata.attributes,
	...BackgroundAttributes,
};

registerBlockType( metadata.name, {
	title: metadata.title,
	description: __( 'The opening headline and image of an article.' ),
	icon: blockIcons( 'leadin' ),
	category: 'bu',
	attributes,
	edit: Edit,
	save: () => null, // Rendered in PHP
} );
