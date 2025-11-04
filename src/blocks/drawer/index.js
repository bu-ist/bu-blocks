/**
 * BLOCK: bu-editorial-drawer
 *
 * A block that works a bit like BU Collapsible to open and close a drawer of content.
 */

/**
 * Bring in values defined in block.json.
 */
import metadata from './block.json';

// Import CSS.
import './style.scss';
import './editor.scss';

// Internal dependencies.
import Edit from './edit.js';
import deprecated from './deprecated/deprecated.js';
import { BackgroundAttributes } from '../../components/background';

import blockIcons from '../../components/block-icons';

// WordPress dependencies.
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

// Register the block.
registerBlockType( metadata.name, {
	title: metadata.title,
	icon: blockIcons( 'drawer' ),
	attributes: {
		...metadata.attributes,
		...BackgroundAttributes,
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	save() {
		return <InnerBlocks.Content />;
	},
	deprecated,
} );
