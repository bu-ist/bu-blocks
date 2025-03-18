/**
 * BLOCK: bu-aside-cgb
 *
 * A container for related information that accepts image,
 * headline, paragraph, and button blocks as children.
 */

// External dependencies.
import classnames from 'classnames';

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

// WordPress dependencies.
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
	getColorClassName,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';

// Internal dependencies.
import Edit from './edit.js';

// Register the block.
const asideBlock = registerBlockType( metadata.name, {
	title: metadata.title,
	//description: metadata.description,
	example: metadata.example,
	icon: blockIcons( 'aside' ),
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	save( { attributes, className } ) {
		const { themeColor } = attributes;

		const classes = classnames( className, {
			[ getColorClassName( 'background', themeColor ) ]:
				getColorClassName( 'background', themeColor ),
		} );

		const blockProps = useBlockProps.save( {
			className: classes,
		} );

		return (
			<aside { ...blockProps }>
				<InnerBlocks.Content />
			</aside>
		);
	},
} );

const presetTemplate = [
	[ 'core/image' ],
	[ 'core/heading', { placeholder: 'Enter aside title…' } ],
	[ 'core/paragraph', { placeholder: 'Enter aside content…' } ],
	[ 'core/button' ],
];

RegisterBlockPreset( asideBlock, presetTemplate );
