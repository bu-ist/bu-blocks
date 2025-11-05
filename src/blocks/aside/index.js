/**
 * BLOCK: Aside Block
 *
 * A container for related information that accepts image,
 * headline, paragraph, and button blocks as children.
 */

// Import CSS.
import './style.scss';
import './editor.scss';

/**
 * Bring in values defined in block.json.
 */
import metadata from './block.json';

// Internal dependencies.
import RegisterBlockPreset from '../../global/register-block-preset.js';
import blockIcons from '../../components/block-icons/index.js';
import deprecated from './deprecated/deprecated.js';

// WordPress dependencies.
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

// Internal dependencies.
import Edit from './edit.js';

// Register the block.
const asideBlock = registerBlockType( metadata.name, {
	title: metadata.title,
	icon: blockIcons( 'aside' ),
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	save() {
		return <InnerBlocks.Content />;
	},
	deprecated,
} );

const presetTemplate = [
	[ 'core/image' ],
	[ 'core/heading', { placeholder: 'Enter aside title…' } ],
	[ 'core/paragraph', { placeholder: 'Enter aside content…' } ],
	[ 'core/button' ],
];

RegisterBlockPreset( asideBlock, presetTemplate );
