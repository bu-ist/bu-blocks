/**
 * BLOCK: editorial-modal
 *
 * A block with a callout for opening a modal with supplemental or complementary information.
 */

// Import CSS.
import './style.scss';
import './editor.scss';

// Internal dependencies.
import './modal-callout';
import './modal-content';

// WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

// The current publication owner.
const publicationClass = document.getElementById( 'bu_publication_owner' ).value;

const allowedBlocks = [ 'editorial/modal-callout', 'editorial/modal-content' ];
const template = [ [ 'editorial/modal-callout' ], [ 'editorial/modal-content' ] ];

// Register the block.
registerBlockType( 'editorial/modal', {

	title: __( 'Modal' ),
	description: __( 'A block with a call to action for opening a modal with supplemental or complementary information.' ),
	icon: 'admin-page',
	category: 'bu-editorial',
	publicationClassName: publicationClass + '-block-modal',

	edit( { className } ) {
		return (
			<aside className={ className }>
				<InnerBlocks
					allowedBlocks={ allowedBlocks }
					template={ template }
					templateLock='all'
				/>
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