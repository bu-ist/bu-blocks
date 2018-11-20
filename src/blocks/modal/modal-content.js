/**
 * BLOCK: editorial-modal-content
 *
 * The content of the modal block.
 */

// WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

// Register the block.
registerBlockType( 'editorial/modal-content', {

	title: __( 'Modal content' ),
	description: __( 'The content of the modal block.' ),
	icon: 'admin-page',
	category: 'bu-editorial',
	parent: [ 'editorial/modal' ],
	supports: {
		inserter: false,
	},

	edit() {
		return (
			<div class="wp-block-editorial-modal-content js-bu-block-modal-overlay">
				<div class="overlay overlay-scale one">
					<a href="#one" class="wp-block-editorial-modal-overlay-close js-bu-block-modal-overlay-close">Close</a>
					<article>
						<InnerBlocks templateLock={ false } />
					</article>
				</div>
			</div>
		);
	},

	save() {
		return (
			<div class="wp-block-editorial-modal-content js-bu-block-modal-overlay">
				<div class="overlay overlay-scale one">
					<a href="#one" class="wp-block-editorial-modal-overlay-close js-bu-block-modal-overlay-close">Close</a>
					<article>
						<InnerBlocks.Content />
					</article>
				</div>
			</div>
		);
	},
} );