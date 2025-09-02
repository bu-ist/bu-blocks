/**
 * BLOCK: editorial/introparagraph
 *
 * Register an intro paragraph block with Gutenberg.
 */

// Import a library used to manage multiple class names.
import classnames from 'classnames';

/**
 * Bring in values defined in block.json.
 */
import metadata from './block.json';

//  Import CSS.
import './style.scss';
import './editor.scss';

/**
 * Internal dependencies.
 */
import blockIcons from '../../components/block-icons/';
// Import the Edit component for the block.
import Edit from './edit';

// Import the deprecated versions of the block.
// This is used to provide backwards compatibility for older versions of the block.
import deprecated from './deprecated/deprecated';

/**
 * WordPress dependencies.
 */
import { registerBlockType } from '@wordpress/blocks';

// Register the block.
registerBlockType( metadata.name, {
	title: metadata.title,
	icon: blockIcons( 'introparagraph' ),
	/**
	 * The Edit function for the Intro Paragraph block.
	 * @param {*} props The props for the Edit function.
	 * @return {*}	JSX	The JSX for the Edit function.
	 */
	edit: Edit,
	save: () => null,
	deprecated,
} );
