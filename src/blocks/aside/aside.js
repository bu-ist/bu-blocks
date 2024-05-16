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

// Internal dependencies.
import RegisterBlockPreset from '../../global/register-block-preset.js';
import blockIcons from '../../components/block-icons/';

// WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { getColorClassName, InnerBlocks, useBlockProps } =
	'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;

// Internal dependencies.
import edit from './edit.js';

// Register the block.
const asideBlock = registerBlockType( 'editorial/aside', {
	apiVersion: 2,
	title: __( 'Aside' ),
	description: __(
		'Add an aside with related information. Accepts image, headline, paragraph, and button blocks as children.'
	),
	icon: blockIcons( 'aside' ),
	category: 'bu-editorial',
	supports: {
		align: [ 'left', 'right' ],
	},
	attributes: {
		themeColor: {
			type: 'string',
		},
	},

	edit,

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
