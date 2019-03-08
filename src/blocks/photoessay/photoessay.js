/**
 * BLOCK: editorial/photoessay
 *
 * Register a photo essay block with Gutenberg.
 */

// Import CSS.
import './style.scss';
import './editor.scss';

// Internal dependencies.
import './photoessay-image';

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	createBlock,
	registerBlockType,
} = wp.blocks;
const {
	Fragment,
} = wp.element;
const {
	PanelBody,
	Path,
	RadioControl,
	SVG,
} = wp.components;
const {
	InnerBlocks,
	InspectorControls,
} = wp.editor;
const {
	dispatch,
	select,
} = wp.data;

// The current publication owner.
const publicationClass = document.getElementById( 'bu_publication_owner' ).value;

// Register the block.
registerBlockType( 'editorial/photoessay', {
	title: __( 'Photo Essay' ),
	description: __( 'Insert a row of photos with optional layouts.' ),
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="#c00" d="M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"></Path></SVG>,
	category: 'bu-editorial',
	publicationClassName: publicationClass + '-block-editorial-photoessay',
	attributes: {
		layout: {
			type: 'string',
			default: '',
		},
	},
	supports: {
		align: [ 'wide', 'full' ],
	},

	edit( { attributes, setAttributes, clientId } ) {
		const { layout } = attributes;

		/**
		 * Updates the layout attribute and handles any necessary block updates,
		 * insertions, or removals.
		 *
		 * @param {string} newLayout Currently selected layout option.
		 */
		const onChangeLayout = ( newLayout ) => {
			setAttributes( { layout: newLayout } );

			// Get the image block classes from the information contained in the layout option.
			const blockClasses = newLayout.split( '-' ).splice( 3 );

			// Get any existing image blocks.
			const currentBlocks = select( 'core/editor' ).getBlocksByClientId( clientId )[ 0 ].innerBlocks;

			// Update or insert new blocks accordingly.
			blockClasses.forEach( ( blockClass, i ) => {
				const existingBlock = currentBlocks[ i ];
				const newColumnClass = { columnClass: `photo-${blockClass}` };

				if ( existingBlock ) {
					// Update the `columnClass` attribute of the existing block at this index.
					dispatch( 'core/editor' ).updateBlockAttributes( existingBlock.clientId, newColumnClass );
				} else {
					// Otherwise, create and insert a new block.
					const newBlock = createBlock( 'editorial/photoessay-image', newColumnClass );

					dispatch( 'core/editor' ).insertBlock( newBlock, i, clientId );
				}
			} );

			// Remove excess blocks if the new layout has fewer images than the previous.
			currentBlocks.forEach( ( block, i ) => {
				if ( blockClasses[ i ] ) {
					return;
				}

				dispatch( 'core/editor' ).removeBlock( block.clientId, false );
			} );
		};

		// Set a default layout when the block is first inserted.
		if ( layout === '' ) {
			onChangeLayout( 'photo-row-thirds-3' );
		}

		return(
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Photo Essay Row Settings' ) }>
						<RadioControl
							label={ __( 'Layout' ) }
							className="bu-photoessay-layout-options"
							selected={ layout }
							options={ [
								// Single column layouts.
								{ label: 'Single wide image', value: 'photo-row-thirds-3' },
								{ label: 'Single ultra-wide image', value: 'photo-row-fourths-4' },
								// Two column layouts.
								{ label: 'Two landscape images', value: 'photo-row-fourths-2-2' },
								{ label: 'One square, one portrait image', value: 'photo-row-square-s-1' },
								{ label: 'One square, one landscape image', value: 'photo-row-square-s-2' },
								{ label: 'One square, one wide image', value: 'photo-row-square-s-3' },
								{ label: 'One portrait, one square image', value: 'photo-row-square-1-s' },
								{ label: 'One landscape, one square image', value: 'photo-row-square-2-s' },
								{ label: 'One wide, one square image', value: 'photo-row-square-3-s' },
								{ label: 'One landscape, one portrait image', value: 'photo-row-thirds-2-1' },
								{ label: 'One wide, one portrait image', value: 'photo-row-fourths-3-1' },
								{ label: 'One portrait, one landscape image', value: 'photo-row-thirds-1-2' },
								{ label: 'One portrait, one wide image', value: 'photo-row-fourths-1-3' },
								// Three column layouts.
								{ label: 'Three portrait images', value: 'photo-row-thirds-1-1-1' },
								{ label: 'Three square images', value: 'photo-row-square-s-s-s' },
								{ label: 'One landscape, two portrait images', value: 'photo-row-fourths-2-1-1' },
								{ label: 'One portrait, one landscape, one portrait image', value: 'photo-row-fourths-1-2-1' },
								{ label: 'Two portrait, one landscape image', value: 'photo-row-fourths-1-1-2' },
								{ label: 'One ultra-wide, two landscape image', value: 'photo-row-short-4-2-2' },
								{ label: 'One landscape, one ultra-wide, one landscape image', value: 'photo-row-short-2-4-2' },
								{ label: 'Two landscape, one ultra-wide image', value: 'photo-row-short-2-2-4' },
								// Four column layouts.
								{ label: 'Four portrait images', value: 'photo-row-fourths-1-1-1-1' },
								{ label: 'Four square images', value: 'photo-row-square-s-s-s-s' },
								{ label: 'Four wide images', value: 'photo-row-short-2-2-2-2' },
							] }
							onChange={ onChangeLayout }
						/>
					</PanelBody>
				</InspectorControls>
				<div className="wp-block-editorial-photoessay">
					<div className={ layout }>
						<InnerBlocks
							templateLock="all"
							allowedBlocks={ [ 'editorial/photoessay-image' ] }
							templateInsertUpdatesSelection={ false }
						/>
					</div>
				</div>
			</Fragment>
		);
	},

	save( { attributes } ) {
		const { layout } = attributes;

		return(
			<div className="wp-block-photoessay">
				<div className={ layout }>
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
} );