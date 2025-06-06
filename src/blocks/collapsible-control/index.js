/**
 * BLOCK: collapsible-control
 *
 * A block to toggle collapsible blocks on the page
 */

// Internal dependencies.
import blockIcons from '../../components/block-icons/index.js';
import Edit from './edit.js';
import deprecated from './deprecated/deprecated.js';

// Import CSS.
import './style.scss';
import './editor.scss';

/**
 * Bring in values defined in block.json.
 */
import metadata from './block.json';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

// Register the block.
registerBlockType( metadata.name, {
	title: metadata.title,
	keywords: [ __( 'collapsible' ), __( 'control' ), __( 'toggle' ) ],
	icon: blockIcons( 'collapsiblecontrol' ),
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	save: () => null,
	deprecated,
} );
