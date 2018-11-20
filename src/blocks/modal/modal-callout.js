/**
 * BLOCK: editorial-modal-callout
 *
 * The callout for the modal block.
 */

// WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

// Register the block.
registerBlockType( 'editorial/modal-callout', {

	title: __( 'Modal callout' ),
	description: __( 'The callout for the modal block.' ),
	icon: 'admin-page',
	category: 'bu-editorial',
	parent: [ 'editorial/modal' ],
	supports: {
		inserter: false,
	},

	edit( { className } ) {
		return (
			<div className={ className }>
				<div class="wp-block-editorial-modal-media">
					<figure class="wp-block-editorial-modal-image">

					</figure>
				</div>
				<div class="wp-block-editorial-modal-callout-content">
					<div class="modal-valign">
						<InnerBlocks templateLock={ false } />
						<p><a href="#one" class="js-bu-block-modal-trigger-overlay button">Explore</a></p>
					</div>
				</div>
			</div>
		);
	},

	save() {
		return (
			<div>
				<div class="wp-block-editorial-modal-media">
					<figure class="wp-block-editorial-modal-image">

					</figure>
				</div>
				<div class="wp-block-editorial-modal-callout-content">
					<div class="modal-valign">
						<InnerBlocks.Content />
						<p><a href="#one" class="js-bu-block-modal-trigger-overlay button">Explore</a></p>
					</div>
				</div>
			</div>
		);
	},
} );