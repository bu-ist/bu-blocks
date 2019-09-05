/**
 * BLOCK: editorial/photoessay
 *
 * Register a photo essay block with Gutenberg.
 */

// Import CSS.
import './style.scss';
import './editor.scss';

// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import './photoessay-image';

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
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
} = ( 'undefined' === typeof wp.blockEditor ) ? wp.editor : wp.blockEditor;
const {
	dispatch,
	select,
} = wp.data;
const {
	applyFilters,
} = wp.hooks;

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className  Classes assigned to the block.
 */
const getClasses = ( className ) => {
	const blockClasses = classnames(
		'wp-block-photoessay',
		'js-block-editorial-photoessay',
		{
			[ className ]: className,
		}
	);

	return applyFilters( 'buBlocks.photoEssay.classNames', blockClasses );
};

// Populate selectors that were in core/editor until WordPress 5.2 and are
// now located in core/block-editor.
const {
	getBlocksByClientId,
} = ( 'undefined' === typeof select( 'core/block-editor' ) ) ? select( 'core/editor' ) : select( 'core/block-editor' );

// Populate actions that were in core/editor until WordPress 5.2 and are
// now located in core/block-editor.
const {
	updateBlockAttributes,
	removeBlock,
} = ( 'undefined' === typeof dispatch( 'core/block-editor' ) ) ? dispatch( 'core/editor' ) : dispatch( 'core/block-editor' );

// Register the block.
registerBlockType( 'editorial/photoessay', {
	title: __( 'Photo Essay' ),
	description: __( 'Insert a row of photos with optional layouts.' ),
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="#c00" d="M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"></Path></SVG>,
	category: 'bu-editorial',
	attributes: {
		className: {
			type: 'string',
			default: '',
		},
		layout: {
			type: 'string',
			default: '',
		},
	},
	supports: {
		align: [ 'wide', 'full' ],
	},

	edit( { attributes, setAttributes, clientId, className } ) {
		const { layout } = attributes;

		/**
		 * Updates the layout attribute and handles any necessary block updates or removals.
		 *
		 * @param {string} newLayout Currently selected layout option.
		 */
		const onChangeLayout = ( newLayout ) => {
			setAttributes( { layout: newLayout } );

			// Get the image block classes from the information contained in the layout option.
			const childBlockClasses = newLayout.split( '-' ).splice( 3 );

			// Get any existing image blocks.
			const currentBlocks = getBlocksByClientId( clientId )[ 0 ].innerBlocks;

			// Update any existing photoessay-image blocks with the correct class name when
			// the layout changes. A template applied to the photoessay block provides default
			// columnClass values for the inner photoessay-image blocks, but will not override
			// attributes previously assigned to the block.
			childBlockClasses.forEach( ( blockClass, i ) => {
				const existingBlock = currentBlocks[ i ];
				const newColumnClass = { columnClass: `photo-${blockClass}` };

				if ( existingBlock ) {
					// Update the `columnClass` attribute of the existing block at this index.
					updateBlockAttributes( existingBlock.clientId, newColumnClass );
				}
			} );

			// Remove excess blocks if the new layout has fewer images than the previous.
			currentBlocks.forEach( ( block, i ) => {
				if ( childBlockClasses[ i ] ) {
					return;
				}

				removeBlock( block.clientId, false );
			} );
		};

		// Assume an empty template that will be populated based on the number
		// of blocks expected by the selected layout.
		let photoTemplate = [];

		// Set a default layout when the block is first inserted and
		// ensure one photoessay-image block is added to the template.
		if ( layout === '' ) {
			setAttributes( { layout: 'photo-row-thirds-3' } );
			photoTemplate.push( [ 'editorial/photoessay-image', { columnClass: 'photo-3' } ] );
		} else {
			const blockClasses = layout.split( '-' ).splice( 3 );

			// Ensure the photoessay template for this block contains enough
			// room for the number of expected photoessay-image blocks.
			blockClasses.forEach( ( blockClass, i ) => {
				photoTemplate.push( [ 'editorial/photoessay-image', { columnClass: `photo-${blockClass}` } ] );
			} );
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
				<div className={ getClasses( className ) }>
					{ applyFilters( 'buBlocks.photoEssay.afterOpening', '' ) }
					<div className={ layout }>
						<InnerBlocks
							template={ photoTemplate }
							templateLock="all"
							allowedBlocks={ [ 'editorial/photoessay-image' ] }
							templateInsertUpdatesSelection={ false }
						/>
					</div>
					{ applyFilters( 'buBlocks.photoEssay.beforeClosing', '' ) }
				</div>
			</Fragment>
		);
	},

	save( { attributes } ) {
		const {
			className,
			layout,
		} = attributes;

		return(
			<div className={ getClasses( className ) }>
				{ applyFilters( 'buBlocks.photoEssay.afterOpeningOutput', '' ) }
				<div className={ layout }>
					<InnerBlocks.Content />
				</div>
				{ applyFilters( 'buBlocks.photoEssay.beforeClosingOutput', '' ) }
			</div>
		);
	},
} );
