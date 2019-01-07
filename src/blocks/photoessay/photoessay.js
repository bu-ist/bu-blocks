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
	publicationClassName: publicationClass + '-block-editorial-introparagraph',
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
		 * Returns the configuration for a given layout option.
		 *
		 * It wouldn't hurt to memoize this.
		 *
		 * @param {string} layout Currently selected layout option.
		 *
		 * @return {Object[]} Columns layout configuration.
		 */
		const getPhotoEssayTemplate = ( layout ) => {
			// Split the option value and retrieve the parts with layout information.
			const photoTypes = layout.split( '-' ).splice( 3 );

			// Intialize the tempate for the given layout.
			let template = [];

			// Set up each image block for this layout,
			// accounting for images that may already be in place.
			photoTypes.forEach( ( type, i ) => {
				// Check for an existing image block.
				const imageBlock = select( 'core/editor' ).getBlocksByClientId( clientId )[ 0 ].innerBlocks[ i ];

				// Initialize attribues for the image block.
				let attributes = {};

				// Migrate attributes if the image block is already set.
				if ( imageBlock ) {
					const imageAttributes = Object.entries( imageBlock.attributes );

					for ( const [ attribute, value ] of imageAttributes ) {
						attributes[ attribute ] = value;
					}
				}

				// Set (or reset) the image block `columnClass` attribute.
				attributes.columnClass = `photo-${type}`;

				// Add the image block to the template.
				template.push( [ [ 'editorial/photoessay-image' ], attributes ] );
			} );

			// Return the configured template for the given layout.
			return template;
		};

		return(
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Photo Essay Row Settings' ) }>
					<RadioControl
						label={ __( 'Layout' ) }
						help={ __( '' ) }
						selected={ layout }
						options={ [
							{ label: 'square-s-s-s-s', value: 'photo-row-square-s-s-s-s' },
							{ label: 'square-s-s-s', value: 'photo-row-square-s-s-s' },
							{ label: 'square-s-1', value: 'photo-row-square-s-1' },
							{ label: 'square-s-2', value: 'photo-row-square-s-2' },
							{ label: 'square-s-3', value: 'photo-row-square-s-3' },
							{ label: 'short-2-2-2-2', value: 'photo-row-short-2-2-2-2' },
							{ label: 'short-4-2-2', value: 'photo-row-short-4-2-2' },
							{ label: 'short-2-4-2', value: 'photo-row-short-2-4-2' },
							{ label: 'fourths-2-1-1', value: 'photo-row-fourths-2-1-1' },
							{ label: 'fourths-1-2-1', value: 'photo-row-fourths-1-2-1' },
							{ label: 'fourths-2-2', value: 'photo-row-fourths-2-2' },
							{ label: 'fourths-3-1', value: 'photo-row-fourths-3-1' },
							{ label: 'fourths-4', value: 'photo-row-fourths-4' },
							{ label: 'thirds-1-1-1', value: 'photo-row-thirds-1-1-1' },
							{ label: 'thirds-2-1', value: 'photo-row-thirds-2-1' },
						] }
						onChange={ value => setAttributes( { layout: value } ) }
					/>
					</PanelBody>
				</InspectorControls>
				<div className="wp-block-photoessay">
					<div className={ layout }>
						<InnerBlocks
							template={ getPhotoEssayTemplate( layout ) }
							templateLock={ 'all' }
							allowedBlocks={ [ 'editorial/photoessay-image' ] }
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