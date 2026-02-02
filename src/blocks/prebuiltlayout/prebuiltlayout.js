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
<div class='wp-block-bu-prebuilt-layout'>
	<div class='wp-block-bu-prebuilt-layout__inner-container'>
		<div class='wp-block-bu-prebuilt-layout-segment'>
			<p>Lorem ipsum dolor sit amet curabitur platea quis nibh. Pharetra praesent augue sollicitudin laoreet aliqua tellus quisque dolore ultrices phasellus. Diam vel sollicitudin porta enim ullamcorper est dictum nec est. Non urna sapien mollis id ac eu purus laoreet suspendisse nec eleifend pellentesque. Pharetra morbi posuere tempor egestas labore proin lacus nunc ac viverra et donec curabitur nullam.</p>
		</div>
		<div class='wp-block-bu-prebuilt-layout-segment'>
			<p>Lorem ipsum dolor sit amet curabitur platea quis nibh. Pharetra praesent augue sollicitudin laoreet aliqua tellus quisque dolore ultrices phasellus. Diam vel sollicitudin porta enim ullamcorper est dictum nec est. Non urna sapien mollis id ac eu purus laoreet suspendisse nec eleifend pellentesque. Pharetra morbi posuere tempor egestas labore proin lacus nunc ac viverra et donec curabitur nullam.</p>
		</div>
		<div class='wp-block-bu-prebuilt-layout-segment'>
			<p>Lorem ipsum dolor sit amet curabitur platea quis nibh. Pharetra praesent augue sollicitudin laoreet aliqua tellus quisque dolore ultrices phasellus. Diam vel sollicitudin porta enim ullamcorper est dictum nec est. Non urna sapien mollis id ac eu purus laoreet suspendisse nec eleifend pellentesque. Pharetra morbi posuere tempor egestas labore proin lacus nunc ac viverra et donec curabitur nullam.</p>
		</div>
		<div class='wp-block-bu-prebuilt-layout-segment'>
			<p>Lorem ipsum dolor sit amet curabitur platea quis nibh. Pharetra praesent augue sollicitudin laoreet aliqua tellus quisque dolore ultrices phasellus. Diam vel sollicitudin porta enim ullamcorper est dictum nec est. Non urna sapien mollis id ac eu purus laoreet suspendisse nec eleifend pellentesque. Pharetra morbi posuere tempor egestas labore proin lacus nunc ac viverra et donec curabitur nullam.</p>
		</div>
	</div>
</div>

<div class='wp-block-bu-prebuilt-layout'>
	<div class='wp-block-bu-prebuilt-layout__inner-container'>
		<div class='wp-block-bu-prebuilt-layout-segment'>
			<p>Lorem ipsum dolor sit amet curabitur platea quis nibh. Pharetra praesent augue sollicitudin laoreet aliqua tellus quisque dolore ultrices phasellus. Diam vel sollicitudin porta enim ullamcorper est dictum nec est. Non urna sapien mollis id ac eu purus laoreet suspendisse nec eleifend pellentesque. Pharetra morbi posuere tempor egestas labore proin lacus nunc ac viverra et donec curabitur nullam.</p>
		</div>
		<div class='wp-block-bu-prebuilt-layout-segment'>
			<p>Lorem ipsum dolor sit amet curabitur platea quis nibh. Pharetra praesent augue sollicitudin laoreet aliqua tellus quisque dolore ultrices phasellus. Diam vel sollicitudin porta enim ullamcorper est dictum nec est. Non urna sapien mollis id ac eu purus laoreet suspendisse nec eleifend pellentesque. Pharetra morbi posuere tempor egestas labore proin lacus nunc ac viverra et donec curabitur nullam.</p>
		</div>
		<div class='wp-block-bu-prebuilt-layout-segment'>
			<p>Lorem ipsum dolor sit amet curabitur platea quis nibh. Pharetra praesent augue sollicitudin laoreet aliqua tellus quisque dolore ultrices phasellus. Diam vel sollicitudin porta enim ullamcorper est dictum nec est. Non urna sapien mollis id ac eu purus laoreet suspendisse nec eleifend pellentesque. Pharetra morbi posuere tempor egestas labore proin lacus nunc ac viverra et donec curabitur nullam.</p>
		</div>
		<div class='wp-block-bu-prebuilt-layout-segment'>
			<p>Lorem ipsum dolor sit amet curabitur platea quis nibh. Pharetra praesent augue sollicitudin laoreet aliqua tellus quisque dolore ultrices phasellus. Diam vel sollicitudin porta enim ullamcorper est dictum nec est. Non urna sapien mollis id ac eu purus laoreet suspendisse nec eleifend pellentesque. Pharetra morbi posuere tempor egestas labore proin lacus nunc ac viverra et donec curabitur nullam.</p>
		</div>
	</div>
</div>
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
