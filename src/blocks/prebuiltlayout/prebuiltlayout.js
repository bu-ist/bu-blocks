/**
 * BLOCK: bu-prebuilt-layout
 *
 * Register an intro paragraph block with Gutenberg.
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
const {
	getColorClassName,
	InnerBlocks,
	useBlockProps,
} = ( 'undefined' === typeof wp.blockEditor ) ? wp.editor : wp.blockEditor;

// Internal dependencies.
import edit from './edit.js';

// Register the block.
const prebuiltlayout = registerBlockType( 'bu/prebuilt-layout', {
	apiVersion: 2,
	title: __( 'Prebuilt Layout' ),
	description: __( 'Add prebuilt layouts to house different configurations of conent' ),
	icon: blockIcons('prebuilt-layout'),
	category: 'bu',
	supports: {
		align: [ 'left', 'right', 'wide', 'full' ],
	},
	attributes: {
		themeColor: {
			type: 'string',
		},
	},

	edit,

	save( { className } ) {

		const classes = classnames(
			className
		);

		const blockProps = useBlockProps.save( {
			className: classes,
		});

		return (
			<div {...blockProps}>
				<InnerBlocks.Content />
			</div>
		);
	},
} );

const presetTemplate = [
	[ 'core/image' ],
	[ 'core/heading', { placeholder: 'Enter aside title…' } ],
	[ 'core/paragraph', { placeholder: 'Enter aside content…' } ],
	[ 'core/button' ]
];

RegisterBlockPreset( prebuiltlayoutBlock, presetTemplate );
