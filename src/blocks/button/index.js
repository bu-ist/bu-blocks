/**
 * BLOCK: bu-button
 *
 * Prompt visitors to take action with a custom button.
 */

/**
 * Bring in values defined in block.json.
 */
import metadata from './block.json';

// Internal dependencies.
import blockIcons from '../../components/block-icons';
import Edit from './edit.js';
import deprecated from './deprecated/deprecated.js';

//  Import CSS.
import './style.scss';
import './editor.scss';

// WordPress dependencies.
import { registerBlockType } from '@wordpress/blocks';

// Register the block.
registerBlockType( metadata.name, {
	title: metadata.title,
	icon: blockIcons( 'button' ),
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	save: () => null,
	deprecated,
} );
