/**
 * BLOCK: collapsible
 *
 * A collapsible content block.
 */

/**
 * Bring in values defined in block.json.
 */
import metadata from './block.json';

// Import CSS.
import './style.scss';
import './editor.scss';

// Internal dependencies.
import blockIcons from '../../components/block-icons';
import Edit from './edit.js';

// WordPress dependencies.
import { registerBlockType } from '@wordpress/blocks';

import { InnerBlocks } from '@wordpress/block-editor';

// Register the block.
registerBlockType( metadata.name, {
	title: metadata.title,
	icon: blockIcons( 'collapsible' ),
	edit: Edit,
	save() {
		return <InnerBlocks.Content />;
	},
} );
