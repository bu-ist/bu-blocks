/**
 * BLOCK: bu-aside-cgb
 *
 * A container for related information that accepts image,
 * headline, paragraph, and button blocks as children.
 */

// Import CSS.
import './style.scss';
import './editor.scss';

// WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

// Register the block.
registerBlockType( 'editorial/aside', {

	title: __( 'Aside' ),
	description: __( 'Add an aside with related information. Accepts image, headline, paragraph, and button blocks as children.' ),
	icon: 'format-aside',
	category: 'bu-editorial',
	supports: {
		align: [ 'left', 'right' ],
	},

	edit() {
		return (
			<aside>
				<InnerBlocks />
			</aside>
		);
	},

	save() {
		return (
			<aside>
				<InnerBlocks.Content />
			</aside>
		);
	},
} );