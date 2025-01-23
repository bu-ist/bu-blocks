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
const asideBlock = registerBlockType( 'editorial/aside', {
	apiVersion: 2,
	title: __( 'Aside' ),
	description: __(
		'Add an <aside> element with related information. Accepts image, headline, paragraph, and button blocks as children. This block should be used for content that is indirectly related to the surrounding content.'
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
	example: {
		innerBlocks: [
			{
				name: 'core/heading',
				attributes: {
					content: __(
						'Aside Block Example'
					),
				},
			},
			{
				name: 'core/paragraph',
				attributes: {
					content: __( 'The Aside block allows you to add a variety of content blocks such as paragraphs and images.' ),
				},
			},
		],
	},
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
